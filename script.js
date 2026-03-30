const STORAGE_KEY = "zero-one-theme";
const root = document.documentElement;
const toggle = document.querySelector(".theme-toggle");
const toggleLabel = document.querySelector(".theme-toggle__label");

const preferredTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
const savedTheme = localStorage.getItem(STORAGE_KEY);

function applyTheme(theme) {
  root.dataset.theme = theme;
  if (toggle) {
    const isDark = theme === "dark";
    toggle.setAttribute("aria-pressed", String(isDark));
    toggleLabel.textContent = isDark ? "Modo claro" : "Modo oscuro";
  }
}

applyTheme(savedTheme || preferredTheme);

if (toggle) {
  toggle.addEventListener("click", () => {
    const nextTheme = root.dataset.theme === "dark" ? "light" : "dark";
    localStorage.setItem(STORAGE_KEY, nextTheme);
    applyTheme(nextTheme);
  });
}
