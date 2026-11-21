import { slugifyStr } from "./slugify";

export interface CategoryMeta {
  slug: string;
  label: string;
  chipClass: string;
  dotClass: string;
  gradientClass: string;
}

export const CORE_CATEGORIES: CategoryMeta[] = [
  {
    slug: "ia",
    label: "IA",
    chipClass:
      "bg-violet-500/10 text-violet-700 border-violet-500/25 dark:bg-violet-400/15 dark:text-violet-300 dark:border-violet-400/30",
    dotClass: "bg-violet-500",
    gradientClass: "from-[#2e1065] via-[#6d28d9] to-[#0284c7]",
  },
  {
    slug: "cloud",
    label: "Cloud",
    chipClass:
      "bg-sky-500/10 text-sky-700 border-sky-500/25 dark:bg-sky-400/15 dark:text-sky-300 dark:border-sky-400/30",
    dotClass: "bg-sky-500",
    gradientClass: "from-[#0c4a6e] via-[#0284c7] to-[#38bdf8]",
  },
  {
    slug: "kubernetes",
    label: "Kubernetes",
    chipClass:
      "bg-blue-500/10 text-blue-700 border-blue-500/25 dark:bg-blue-400/15 dark:text-blue-300 dark:border-blue-400/30",
    dotClass: "bg-blue-500",
    gradientClass: "from-[#172554] via-[#2563eb] to-[#38bdf8]",
  },
  {
    slug: "seguridad",
    label: "Seguridad",
    chipClass:
      "bg-rose-500/10 text-rose-700 border-rose-500/25 dark:bg-rose-400/15 dark:text-rose-300 dark:border-rose-400/30",
    dotClass: "bg-rose-500",
    gradientClass: "from-[#4c0519] via-[#e11d48] to-[#f97316]",
  },
  {
    slug: "devops",
    label: "DevOps",
    chipClass:
      "bg-emerald-500/10 text-emerald-700 border-emerald-500/25 dark:bg-emerald-400/15 dark:text-emerald-300 dark:border-emerald-400/30",
    dotClass: "bg-emerald-500",
    gradientClass: "from-[#064e3b] via-[#059669] to-[#34d399]",
  },
  {
    slug: "observabilidad",
    label: "Observabilidad",
    chipClass:
      "bg-amber-500/10 text-amber-800 border-amber-500/25 dark:bg-amber-400/15 dark:text-amber-300 dark:border-amber-400/30",
    dotClass: "bg-amber-500",
    gradientClass: "from-[#451a03] via-[#d97706] to-[#fbbf24]",
  },
  {
    slug: "infraestructura",
    label: "Infraestructura",
    chipClass:
      "bg-slate-500/10 text-slate-700 border-slate-500/25 dark:bg-slate-400/15 dark:text-slate-300 dark:border-slate-400/30",
    dotClass: "bg-slate-500",
    gradientClass: "from-[#0f172a] via-[#334155] to-[#64748b]",
  },
  {
    slug: "arquitectura",
    label: "Arquitectura",
    chipClass:
      "bg-teal-500/10 text-teal-700 border-teal-500/25 dark:bg-teal-400/15 dark:text-teal-300 dark:border-teal-400/30",
    dotClass: "bg-teal-500",
    gradientClass: "from-[#042f2e] via-[#0d9488] to-[#2dd4bf]",
  },
];

const CATEGORY_MAP = new Map<string, CategoryMeta>(
  CORE_CATEGORIES.map(c => [c.slug, c])
);

const FALLBACK_CATEGORY: CategoryMeta = {
  slug: "tecnologia",
  label: "Tech",
  chipClass:
    "bg-cyan-500/10 text-cyan-700 border-cyan-500/25 dark:bg-cyan-400/15 dark:text-cyan-300 dark:border-cyan-400/30",
  dotClass: "bg-cyan-500",
  gradientClass: "from-[#083344] via-[#0891b2] to-[#38bdf8]",
};

/**
 * Resolves visual styling for any tag regardless of capitalization or accents.
 */
export function getCategoryMeta(rawTag?: string): CategoryMeta {
  if (!rawTag) return CORE_CATEGORIES[0];
  const slug = slugifyStr(rawTag);
  const found = CATEGORY_MAP.get(slug);
  if (found) return found;
  return {
    ...FALLBACK_CATEGORY,
    slug,
    label: rawTag,
  };
}
