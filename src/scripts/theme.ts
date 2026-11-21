const STORAGE_KEY = "color-scheme";
const LEGACY_KEY = "theme";

type Scheme = "light" | "dark";

function readStoredScheme(): Scheme | null {
  try {
    const raw =
      localStorage.getItem(STORAGE_KEY) ?? localStorage.getItem(LEGACY_KEY);
    return raw === "light" || raw === "dark" ? raw : null;
  } catch {
    return null;
  }
}

function getSystemScheme(): Scheme {
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

function getEffectiveScheme(stored: Scheme | null): Scheme {
  return stored ?? getSystemScheme();
}

function applyScheme(stored: Scheme | null): void {
  const effective = getEffectiveScheme(stored);
  const root = document.documentElement;
  const meta = document.querySelector<HTMLMetaElement>(
    'meta[name="color-scheme"]'
  );

  if (meta) {
    meta.content = stored ?? "light dark";
  }

  root.setAttribute("data-theme", effective);
  root.classList.toggle("dark", effective === "dark");

  const btn = document.querySelector<HTMLButtonElement>("#theme-btn");
  if (btn) {
    const nextLabel =
      effective === "dark" ? "Cambiar a modo claro" : "Cambiar a modo oscuro";
    btn.setAttribute("aria-label", nextLabel);
    btn.setAttribute("title", nextLabel);
  }

  const bg = window.getComputedStyle(document.body).backgroundColor;
  document
    .querySelector<HTMLMetaElement>("meta[name='theme-color']")
    ?.setAttribute("content", bg);
}

function toggleScheme(): void {
  const stored = readStoredScheme();
  const current = getEffectiveScheme(stored);
  const target: Scheme = current === "dark" ? "light" : "dark";
  const system = getSystemScheme();

  try {
    localStorage.removeItem(LEGACY_KEY);
    if (target === system) {
      // Undo override so site follows OS preference again
      localStorage.removeItem(STORAGE_KEY);
      applyScheme(null);
    } else {
      localStorage.setItem(STORAGE_KEY, target);
      applyScheme(target);
    }
  } catch {
    // Still apply visually even if storage is blocked
    applyScheme(target);
  }
}

function bindToggle(): void {
  applyScheme(readStoredScheme());
  const btn = document.querySelector<HTMLButtonElement>("#theme-btn");
  if (btn && btn.dataset.themeBound !== "true") {
    btn.dataset.themeBound = "true";
    btn.addEventListener("click", toggleScheme);
  }
}

bindToggle();

// Keep in sync across Astro View Transitions
document.addEventListener("astro:after-swap", bindToggle);
document.addEventListener("astro:before-swap", event => {
  const stored = readStoredScheme();
  const newDoc = (event as unknown as { newDocument: Document }).newDocument;
  const effective = getEffectiveScheme(stored);
  newDoc
    .querySelector<HTMLMetaElement>('meta[name="color-scheme"]')
    ?.setAttribute("content", stored ?? "light dark");
  newDoc.documentElement.setAttribute("data-theme", effective);
  newDoc.documentElement.classList.toggle("dark", effective === "dark");

  const color = document
    .querySelector("meta[name='theme-color']")
    ?.getAttribute("content");
  if (color) {
    newDoc
      .querySelector("meta[name='theme-color']")
      ?.setAttribute("content", color);
  }
});

// React to OS changes ONLY when no explicit override is stored
window
  .matchMedia("(prefers-color-scheme: dark)")
  .addEventListener("change", () => {
    const stored = readStoredScheme();
    if (!stored) {
      applyScheme(null);
    }
  });

// Sync override changes from other tabs
window.addEventListener("storage", event => {
  if (event.key === STORAGE_KEY || event.key === LEGACY_KEY) {
    applyScheme(readStoredScheme());
  }
});
