import { useState } from "react";
import { siteLinks } from "../../content/site";
import { NAV_ITEMS } from "./nav-config";
import { HeaderActions } from "./HeaderActions";
import { HeaderLogo } from "./HeaderLogo";
import { HeaderNav } from "./HeaderNav";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-outline-variant/10 bg-background/75 backdrop-blur-xl">
      <div className="mx-auto flex max-w-design items-center justify-between gap-4 px-6 py-3.5 md:px-gutter md:py-4">
        <HeaderLogo />

        <HeaderNav items={NAV_ITEMS} className="hidden md:block" onNavigate={closeMenu} />

        <div className="flex items-center gap-2 md:gap-3">
          <HeaderActions onPrimaryClick={closeMenu} />

          <button
            type="button"
            className="inline-flex size-10 items-center justify-center rounded-full border border-outline-variant/25 text-foreground transition hover:bg-surface-container/80 md:hidden"
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
            onClick={() => setMenuOpen((o) => !o)}
          >
            <span className="sr-only">{menuOpen ? "Cerrar" : "Menú"}</span>
            <svg aria-hidden className="size-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              {menuOpen ? (
                <path strokeLinecap="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      <div
        id="mobile-nav"
        className={`border-t border-outline-variant/15 bg-surface-low/95 backdrop-blur-lg md:hidden ${menuOpen ? "block" : "hidden"}`}
      >
        <div className="mx-auto max-w-design px-6 py-5 pb-8">
          <HeaderNav items={NAV_ITEMS} onNavigate={closeMenu} />
          <a
            href={siteLinks.github}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex h-11 items-center rounded-full border border-outline-variant/25 px-5 font-body text-sm font-semibold text-foreground"
          >
            GitHub
          </a>
        </div>
      </div>
    </header>
  );
}
