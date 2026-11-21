import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const ROOT = process.cwd();
const IMAGES_DIR = path.join(ROOT, "src/assets/images");
const POSTS_DIR = path.join(ROOT, "src/content/posts");

const UNUSED_TEMPLATE_FILES = new Set([
  "AstroPaper-v3.png",
  "AstroPaper-v4.png",
  "AstroPaper-v5.png",
  "forrest-gump-quote.png",
  "astropaper-og.jpg",
]);

const RASTER_EXTS = new Set([".jpg", ".jpeg", ".png"]);
const MAX_WIDTH = 1200;
const WEBP_QUALITY = 78;

async function main() {
  const entries = await fs.readdir(IMAGES_DIR, { withFileTypes: true });
  const files = entries.filter(e => e.isFile()).map(e => e.name);

  // Read all posts once into memory for reference checks & updates
  const postEntries = (await fs.readdir(POSTS_DIR, { withFileTypes: true }))
    .filter(e => e.isFile() && /\.(md|mdx)$/i.test(e.name))
    .map(e => e.name);

  const postContents = new Map();
  for (const name of postEntries) {
    postContents.set(name, await fs.readFile(path.join(POSTS_DIR, name), "utf8"));
  }

  const allPostsBlob = Array.from(postContents.values()).join("\n");

  // 1. Remove known unused AstroPaper template demo images
  let removedUnused = 0;
  for (const name of UNUSED_TEMPLATE_FILES) {
    if (files.includes(name) && !allPostsBlob.includes(name)) {
      await fs.unlink(path.join(IMAGES_DIR, name));
      removedUnused++;
    }
  }

  // 2. Convert raster images (.jpg, .jpeg, .png) to .webp
  const renames = new Map(); // oldFilename -> newFilename
  let converted = 0;
  let bytesBefore = 0;
  let bytesAfter = 0;

  const rasterFiles = files.filter(name => {
    if (UNUSED_TEMPLATE_FILES.has(name)) return false;
    const ext = path.extname(name).toLowerCase();
    return RASTER_EXTS.has(ext);
  });

  // Process in small batches for speed without exhausting memory
  const BATCH_SIZE = 16;
  for (let i = 0; i < rasterFiles.length; i += BATCH_SIZE) {
    const batch = rasterFiles.slice(i, i + BATCH_SIZE);
    await Promise.all(
      batch.map(async oldName => {
        const oldPath = path.join(IMAGES_DIR, oldName);
        const baseName = oldName.slice(0, -path.extname(oldName).length);
        const newName = `${baseName}.webp`;
        const newPath = path.join(IMAGES_DIR, newName);

        try {
          const statBefore = await fs.stat(oldPath);
          bytesBefore += statBefore.size;

          await sharp(oldPath)
            .rotate()
            .resize({ width: MAX_WIDTH, withoutEnlargement: true })
            .webp({ quality: WEBP_QUALITY, effort: 4 })
            .toFile(newPath);

          const statAfter = await fs.stat(newPath);
          bytesAfter += statAfter.size;

          // Keep a tiny compressed placeholder.jpg fallback for external scripts,
          // while converting every other image in-place to .webp
          if (oldName === "placeholder.jpg") {
            const tinyJpg = await sharp(oldPath)
              .resize({ width: 800, withoutEnlargement: true })
              .jpeg({ quality: 72, mozjpeg: true })
              .toBuffer();
            await fs.writeFile(oldPath, tinyJpg);
          } else {
            await fs.unlink(oldPath);
          }

          renames.set(oldName, newName);
          converted++;
        } catch (err) {
          console.warn(`WARN: No se pudo optimizar ${oldName}: ${err.message}`);
        }
      })
    );
  }

  // 3. Re-optimize oversized existing .webp files (> 220 KB)
  let reoptimizedWebp = 0;
  const existingWebp = files.filter(
    name => path.extname(name).toLowerCase() === ".webp"
  );
  for (const name of existingWebp) {
    const filePath = path.join(IMAGES_DIR, name);
    try {
      const stat = await fs.stat(filePath);
      if (stat.size > 220 * 1024) {
        const buf = await sharp(filePath)
          .resize({ width: MAX_WIDTH, withoutEnlargement: true })
          .webp({ quality: WEBP_QUALITY, effort: 4 })
          .toBuffer();
        if (buf.length < stat.size) {
          await fs.writeFile(filePath, buf);
          reoptimizedWebp++;
        }
      }
    } catch {
      // ignore unreadable webp
    }
  }

  // 4. Update all references in posts (.jpg/.jpeg/.png -> .webp)
  let updatedPosts = 0;
  if (renames.size > 0) {
    for (const [postName, content] of postContents.entries()) {
      let next = content;
      let changed = false;

      // Match ../../assets/images/<filename> or @/assets/images/<filename>
      next = next.replace(
        /((?:\.\.\/)+assets\/images\/|@\/assets\/images\/|\/src\/assets\/images\/)([A-Za-z0-9._-]+\.(?:jpg|jpeg|png))/gi,
        (match, prefix, filename) => {
          const replacement = renames.get(filename);
          if (replacement) {
            changed = true;
            return `${prefix}${replacement}`;
          }
          return match;
        }
      );

      if (changed) {
        await fs.writeFile(path.join(POSTS_DIR, postName), next, "utf8");
        updatedPosts++;
      }
    }
  }

  const savedMB = ((bytesBefore - bytesAfter) / (1024 * 1024)).toFixed(1);
  console.log(
    `[optimize-images] Convertidas: ${converted} | Re-optimizadas WebP: ${reoptimizedWebp} | Posts actualizados: ${updatedPosts} | Demo eliminadas: ${removedUnused} | Ahorro: ${savedMB} MB`
  );
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
