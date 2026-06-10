"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Logo } from "./Logo";
import { ThemeToggle } from "./ThemeToggle";

const navLinks = [
  { href: "#services", label: "Услуги" },
  { href: "#masters", label: "Мастера" },
  { href: "#about", label: "О нас" },
  { href: "#gallery", label: "Галерея" },
  { href: "#contacts", label: "Контакты" },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const linkBase: React.CSSProperties = {
    fontSize: "var(--text-sm)",
    fontWeight: 400,
    letterSpacing: "0.08em",
    textTransform: "uppercase",
    color: "var(--color-text-muted)",
    transition: "color 200ms",
  };

  return (
    <>
      <header
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          padding: scrolled ? "0.75rem 2rem" : "1rem 2rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          background: scrolled
            ? "oklch(from var(--color-bg) l c h / 0.92)"
            : "oklch(from var(--color-bg) l c h / 0.7)",
          backdropFilter: "blur(16px)",
          WebkitBackdropFilter: "blur(16px)",
          borderBottom: `1px solid oklch(from var(--color-text) l c h / ${
            scrolled ? "0.08" : "0.04"
          })`,
          transition: "padding 300ms ease, background 300ms ease",
        }}
      >
        <Link
          href="/"
          aria-label="Duhovskoy Barbershop — на главную"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.75rem",
            fontFamily: "var(--font-display)",
            fontSize: "var(--text-lg)",
            fontWeight: 400,
            letterSpacing: "0.04em",
          }}
        >
          <Logo size={36} />
          <span>Duhovskoy</span>
        </Link>

        {/* Desktop Nav */}
        <nav
          aria-label="Основная навигация"
          style={{ display: "flex", alignItems: "center", gap: "2rem" }}
          className="header-nav"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              style={linkBase}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLAnchorElement).style.color =
                  "var(--color-primary)")
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLAnchorElement).style.color =
                  "var(--color-text-muted)")
              }
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
          <ThemeToggle />
          <a
            href="#booking"
            className="header-cta"
            style={{
              padding: "0.5rem 1.5rem",
              background: "var(--color-primary)",
              color: "var(--color-text-inverse)",
              fontSize: "var(--text-sm)",
              fontWeight: 500,
              letterSpacing: "0.06em",
              textTransform: "uppercase",
              borderRadius: "0.375rem",
              transition: "background 200ms, transform 200ms",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLAnchorElement;
              el.style.background = "var(--color-primary-hover)";
              el.style.transform = "translateY(-1px)";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLAnchorElement;
              el.style.background = "var(--color-primary)";
              el.style.transform = "translateY(0)";
            }}
          >
            Записаться
          </a>
          <button
            onClick={() => setMobileOpen((v) => !v)}
            aria-label={mobileOpen ? "Закрыть меню" : "Открыть меню"}
            aria-expanded={mobileOpen}
            className="header-burger"
            style={{
              display: "none",
              padding: "0.5rem",
              background: "none",
              border: "none",
              cursor: "pointer",
              color: "var(--color-text)",
            }}
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      {/* Mobile overlay */}
      <div
        role="dialog"
        aria-label="Мобильное меню"
        aria-modal="true"
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 200,
          background: "var(--color-surface)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: "2rem",
          opacity: mobileOpen ? 1 : 0,
          pointerEvents: mobileOpen ? "all" : "none",
          transition: "opacity 0.3s ease",
        }}
      >
        <button
          onClick={() => setMobileOpen(false)}
          aria-label="Закрыть меню"
          style={{
            position: "absolute",
            top: "1.5rem",
            right: "1.5rem",
            padding: "0.5rem",
            background: "none",
            border: "none",
            cursor: "pointer",
            color: "var(--color-text-muted)",
          }}
        >
          <X size={28} />
        </button>
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            onClick={() => setMobileOpen(false)}
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "var(--text-2xl)",
              fontWeight: 300,
              color: "var(--color-text-muted)",
              transition: "color 200ms",
            }}
            onMouseEnter={(e) =>
              ((e.currentTarget as HTMLAnchorElement).style.color =
                "var(--color-primary)")
            }
            onMouseLeave={(e) =>
              ((e.currentTarget as HTMLAnchorElement).style.color =
                "var(--color-text-muted)")
            }
          >
            {link.label}
          </a>
        ))}
        <a
          href="#booking"
          onClick={() => setMobileOpen(false)}
          style={{
            marginTop: "1rem",
            padding: "1rem 2rem",
            background: "var(--color-primary)",
            color: "var(--color-text-inverse)",
            fontSize: "var(--text-sm)",
            fontWeight: 500,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            borderRadius: "0.375rem",
          }}
        >
          Записаться
        </a>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .header-nav { display: none !important; }
          .header-cta { display: none !important; }
          .header-burger { display: flex !important; }
        }
      `}</style>
    </>
  );
}
