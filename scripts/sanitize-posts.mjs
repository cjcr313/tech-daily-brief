import fs from "node:fs/promises";
import path from "node:path";

const ROOT = process.cwd();
const POSTS_DIR = path.join(ROOT, "src/content/posts");
const IMAGES_DIR = path.join(ROOT, "src/assets/images");

// Canonical tag mapping to prevent case/accent fragmentation across cronjob runs
const TAG_CANONICAL = new Map([
  ["ia", "IA"],
  ["ai", "IA"],
  ["inteligencia artificial", "IA"],
  ["cloud", "Cloud"],
  ["nube", "Cloud"],
  ["kubernetes", "Kubernetes"],
  ["k8s", "Kubernetes"],
  ["seguridad", "Seguridad"],
  ["ciberseguridad", "Seguridad"],
  ["security", "Seguridad"],
  ["devops", "DevOps"],
  ["devsecops", "DevOps"],
  ["observabilidad", "Observabilidad"],
  ["observability", "Observabilidad"],
  ["infraestructura", "Infraestructura"],
  ["infrastructure", "Infraestructura"],
  ["arquitectura", "Arquitectura"],
  ["architecture", "Arquitectura"],
  ["open source", "Open Source"],
  ["opensource", "Open Source"],
  ["cloud native", "Cloud Native"],
  ["cloud-native", "Cloud Native"],
  ["finops", "FinOps"],
  ["hardware", "Hardware"],
  ["bases de datos", "Bases de Datos"],
  ["aws", "AWS"],
  ["gcp", "Google Cloud"],
  ["google cloud", "Google Cloud"],
  ["azure", "Azure"],
  ["openai", "OpenAI"],
  ["anthropic", "Anthropic"],
  ["regulación", "Regulación"],
  ["regulacion", "Regulación"],
]);

// Patterns that indicate an AI image-generation prompt leaked into markdown alt text
const PROMPT_ALT_PATTERN =
  /(?:ilustraci[oó]n editorial|estilo ilustraci[oó]n|paleta\s+\w+|sin texto|fondo oscuro|estilo tech|render 3d|fotograf[ií]a editorial)/i;

function normalizeTag(raw) {
  const cleaned = raw.trim().replace(/^['"]|['"]$/g, "");
  if (!cleaned) return "";
  const lower = cleaned.toLowerCase();
  return TAG_CANONICAL.get(lower) ?? cleaned;
}

function escapeAlt(text) {
  return text.replace(/[\[\]\r\n]/g, "").trim();
}

async function main() {
  const existingImages = new Set(await fs.readdir(IMAGES_DIR));
  const files = (await fs.readdir(POSTS_DIR))
    .filter(f => /\.(md|mdx)$/i.test(f))
    .sort();

  let updatedTags = 0;
  let updatedAlts = 0;
  let fixedMissingImgs = 0;

  for (const file of files) {
    const fullPath = path.join(POSTS_DIR, file);
    const original = await fs.readFile(fullPath, "utf8");
    const fmMatch = original.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
    if (!fmMatch) continue;

    let frontmatter = fmMatch[1];
    let body = fmMatch[2];
    let modified = false;

    // Extract title for clean alt-text fallback
    const titleMatch = frontmatter.match(/^title:\s*(.+)$/m);
    const rawTitle = titleMatch
      ? titleMatch[1].trim().replace(/^["']|["']$/g, "")
      : "";

    // 1. Normalize YAML block-style tags list
    const blockTagsRegex = /^(tags:\s*\n)((?:[ \t]*-[ \t]+.+\n?)+)/m;
    const blockMatch = frontmatter.match(blockTagsRegex);
    if (blockMatch) {
      const seen = new Set();
      const lines = blockMatch[2].trimEnd().split("\n");
      const nextLines = [];
      let tagsChanged = false;
      for (const line of lines) {
        const m = line.match(/^([ \t]*-[ \t]+)(.+)$/);
        if (!m) {
          nextLines.push(line);
          continue;
        }
        const norm = normalizeTag(m[2]);
        const key = norm.toLowerCase();
        if (!norm || seen.has(key)) {
          tagsChanged = true;
          continue;
        }
        seen.add(key);
        const formatted = `${m[1]}${norm}`;
        if (formatted !== line) tagsChanged = true;
        nextLines.push(formatted);
      }
      if (tagsChanged && nextLines.length > 0) {
        frontmatter = frontmatter.replace(
          blockTagsRegex,
          `${blockMatch[1]}${nextLines.join("\n")}\n`
        );
        modified = true;
        updatedTags++;
      }
    } else {
      // Inline array: tags: [cloud, devops]
      const inlineTagsRegex = /^(tags:\s*)\[([^\]]+)\]/m;
      const inlineMatch = frontmatter.match(inlineTagsRegex);
      if (inlineMatch) {
        const seen = new Set();
        const items = inlineMatch[2]
          .split(",")
          .map(normalizeTag)
          .filter(t => {
            const k = t.toLowerCase();
            if (!t || seen.has(k)) return false;
            seen.add(k);
            return true;
          });
        const rebuilt = `${inlineMatch[1]}[${items.map(t => `"${t}"`).join(", ")}]`;
        if (rebuilt !== inlineMatch[0]) {
          frontmatter = frontmatter.replace(inlineTagsRegex, rebuilt);
          modified = true;
          updatedTags++;
        }
      }
    }

    // 2. Replace AI prompt-style image alt text with concise editorial alt text
    if (rawTitle) {
      const cleanAlt = escapeAlt(rawTitle);
      const nextBody = body.replace(
        /!\[([^\]]+)\]\(([^)]+)\)/g,
        (match, alt, url) => {
          if (alt.length > 110 || PROMPT_ALT_PATTERN.test(alt)) {
            updatedAlts++;
            modified = true;
            return `![${cleanAlt}](${url})`;
          }
          return match;
        }
      );
      body = nextBody;
    }

    // 3. Repair missing local image references to placeholder.webp
    const fallbackPlaceholder = existingImages.has("placeholder.webp")
      ? "placeholder.webp"
      : "placeholder.jpg";

    body = body.replace(
      /(\.\.\/\.\.\/assets\/images\/)([A-Za-z0-9._-]+\.(?:jpg|jpeg|png|webp|avif|svg))/gi,
      (match, prefix, filename) => {
        if (!existingImages.has(filename)) {
          // Check if a .webp sibling exists before falling back to placeholder
          const webpCandidate = filename.replace(/\.(jpg|jpeg|png)$/i, ".webp");
          if (existingImages.has(webpCandidate)) {
            modified = true;
            return `${prefix}${webpCandidate}`;
          }
          fixedMissingImgs++;
          modified = true;
          return `${prefix}${fallbackPlaceholder}`;
        }
        return match;
      }
    );

    if (modified) {
      await fs.writeFile(fullPath, `---\n${frontmatter}\n---\n${body}`, "utf8");
    }
  }

  console.log(
    `[sanitize-posts] Tags normalizados: ${updatedTags} | Alt-texts limpiados: ${updatedAlts} | Imágenes reparadas: ${fixedMissingImgs}`
  );
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
