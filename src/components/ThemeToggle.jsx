import { useEffect, useState } from "react";

const KEY = "cngp-theme";

/* Light is the default; dark is opt-in and remembered per browser. The stored
   choice is applied pre-paint by the inline script in index.html. */

export default function ThemeToggle({ className = "" }) {
  const [dark, setDark] = useState(
    () => document.documentElement.dataset.theme === "dark",
  );

  useEffect(() => {
    const root = document.documentElement;
    if (dark) root.dataset.theme = "dark";
    else delete root.dataset.theme;
    try {
      localStorage.setItem(KEY, dark ? "dark" : "light");
    } catch {
      /* ignore */
    }
  }, [dark]);

  return (
    <button
      type="button"
      onClick={() => setDark((v) => !v)}
      aria-pressed={dark}
      aria-label={dark ? "Switch to light theme" : "Switch to dark theme"}
      title={dark ? "Light theme" : "Dark theme"}
      className={`grid size-9 shrink-0 place-items-center rounded-lg border border-line bg-panel text-muted transition-colors hover:border-brand/50 hover:text-ink ${className}`}
    >
      <svg viewBox="0 0 24 24" className="size-[18px]" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
        {dark ? (
          <>
            <circle cx="12" cy="12" r="4" />
            <path d="M12 3v2M12 19v2M3 12h2M19 12h2M5.6 5.6l1.4 1.4M17 17l1.4 1.4M18.4 5.6 17 7M7 17l-1.4 1.4" />
          </>
        ) : (
          <path d="M20 14.5A8.5 8.5 0 1 1 9.5 4a7 7 0 0 0 10.5 10.5Z" />
        )}
      </svg>
    </button>
  );
}
