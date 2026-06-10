"use client";
import { useEffect, useState } from "react";
import { Logo } from "./Logo";
import { ThemeToggle } from "./ThemeToggle";

const NAV = [
  { label: "Услуги", href: "#services" },
  { label: "Мастера", href: "#masters" },
  { label: "О нас", href: "#about" },
  { label: "Контакты", href: "#contacts" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          height: "4.5rem",
          display: "flex",
          alignItems: "center",
          padding: "0 clamp(1.5rem, 5vw, 4rem)",
          transition: "background 300ms, border-color 300ms",
          background: scrolled
            ? "oklch(from var(--color-bg) l c h / 0.92)"
            : "transparent",
          borderBottom: scrolled
            ? "1px solid oklch(from var(--color-text) l c h / 0.07)"
            : "1px solid transparent",
          backdropFilter: scrolled ? "blur(16px) saturate(1.4)" : "none",
        }}
      >
        <a href="/" aria-label="На главную" style={{ marginRight: "auto" }}>
          <Logo />
        </a>

        {/* Desktop nav */}
        <nav
          aria-label="Основная навигация"
          style={{
            display: "flex",
            gap: "clamp(1.5rem, 3vw, 2.5rem)",
            alignItems: "center",
          }}
          className="desktop-nav"
        >
          {NAV.map((n) => (
            <a
              key={n.href}
              href={n.href}
              style={{
                fontSize: "var(--text-xs)",
                fontWeight: 500,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: "var(--color-text-muted)",
                transition: "color 180ms",
              }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLAnchorElement).style.color =
                  "var(--color-text)")
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLAnchorElement).style.color =
                  "var(--color-text-muted)")
              }
            >
              {n.label}
            </a>
          ))}

          <ThemeToggle />

          <a
            href="#booking"
            style={{
              display: "inline-flex",
              alignItems: "center",
              padding: "0.5rem 1.25rem",
              border: "1px solid var(--color-primary)",
              color: "var(--color-primary)",
              fontSize: "var(--text-xs)",
              fontWeight: 500,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              borderRadius: "var(--radius-sm)",
              transition: "background 180ms, color 180ms",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLAnchorElement;
              el.style.background = "var(--color-primary)";
              el.style.color = "var(--color-text-inverse)";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLAnchorElement;
              el.style.background = "transparent";
              el.style.color = "var(--color-primary)";
            }}
          >
            Записаться
          </a>
        </nav>

        {/* Mobile hamburger */}
        <div className="mobile-header-controls" style={{ display: "none", alignItems: "center", gap: "1rem" }}>
          <ThemeToggle />
          <button
            aria-label={menuOpen ? "Закрыть меню" : "Открыть меню"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "5px",
              padding: "8px",
              cursor: "pointer",
              background: "none",
              border: "none",
            }}
          >
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                style={{
                  display: "block",
                  width: 22,
                  height: 1,
                  background: "var(--color-text)",
                  transformOrigin: "center",
                  transition: "transform 250ms, opacity 250ms",
                  transform:
                    menuOpen
                      ? i === 0
                        ? "rotate(45deg) translate(4px, 4px)"
                        : i === 2
                        ? "rotate(-45deg) translate(4px, -4px)"
                        : "scaleX(0)"
                      : "none",
                  opacity: menuOpen && i === 1 ? 0 : 1,
                }}
              />
            ))}
          </button>
        </div>
      </header>

      {/* Mobile overlay */}
      {menuOpen && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 99,
            background: "var(--color-bg)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "clamp(2rem, 8vw, 4rem)",
          }}
          role="dialog"
          aria-modal="true"
          aria-label="Мобильное меню"
        >
          <nav style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
            {NAV.map((n) => (
              <a
                key={n.href}
                href={n.href}
                onClick={() => setMenuOpen(false)}
                style={{
                  fontFamily: "var(--font-display, var(--font-playfair))",
                  fontSize: "var(--text-2xl)",
                  fontWeight: 300,
                  color: "var(--color-text)",
                }}
              >
                {n.label}
              </a>
            ))}
            <a
              href="#booking"
              onClick={() => setMenuOpen(false)}
              style={{
                display: "inline-flex",
                alignSelf: "flex-start",
                marginTop: "1rem",
                padding: "0.875rem 2rem",
                background: "var(--color-primary)",
                color: "var(--color-text-inverse)",
                fontSize: "var(--text-sm)",
                fontWeight: 500,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                borderRadius: "var(--radius-sm)",
              }}
            >
              Записаться
            </a>
          </nav>
        </div>
      )}

      <style>{`
        @media (max-width: 900px) {
          .desktop-nav { display: none !important; }
          .mobile-header-controls { display: flex !important; }
        }
      `}</style>
    </>
  );
}
