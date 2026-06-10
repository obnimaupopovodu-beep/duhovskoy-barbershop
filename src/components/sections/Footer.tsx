import { Logo } from "../ui/Logo";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer
      style={{
        borderTop: "1px solid oklch(from var(--color-text) l c h / 0.07)",
        background: "var(--color-bg)",
        padding: "clamp(3rem, 6vw, 5rem) clamp(1.5rem, 5vw, 4rem)",
      }}
    >
      <div
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          gap: "3rem",
          marginBottom: "3rem",
        }}
        className="footer-grid"
      >
        {/* Col 1 */}
        <div>
          <Logo />
          <p
            style={{
              marginTop: "1.25rem",
              fontSize: "var(--text-sm)",
              color: "var(--color-text-muted)",
              lineHeight: 1.7,
              maxWidth: "30ch",
            }}
          >
            Премиум-барбершоп в Тверском районе Москвы. Открыты с 2016 года.
          </p>
        </div>

        {/* Col 2 */}
        <div>
          <p
            style={{
              fontSize: "var(--text-xs)",
              fontWeight: 500,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "var(--color-text-faint)",
              marginBottom: "1.25rem",
            }}
          >
            Навигация
          </p>
          <nav
            aria-label="Футер навигация"
            style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}
          >
            {["#services", "#masters", "#about", "#gallery", "#booking", "#contacts"].map(
              (href) => (
                <a
                  key={href}
                  href={href}
                  style={{
                    fontSize: "var(--text-sm)",
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
                  {href === "#services"
                    ? "Услуги"
                    : href === "#masters"
                    ? "Мастера"
                    : href === "#about"
                    ? "О нас"
                    : href === "#gallery"
                    ? "Галерея"
                    : href === "#booking"
                    ? "Запись"
                    : "Контакты"}
                </a>
              )
            )}
          </nav>
        </div>

        {/* Col 3 */}
        <div>
          <p
            style={{
              fontSize: "var(--text-xs)",
              fontWeight: 500,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "var(--color-text-faint)",
              marginBottom: "1.25rem",
            }}
          >
            Контакты
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.625rem" }}>
            {[
              { label: "Духовской пер., 3, Москва", href: null },
              { label: "+7 (495) 123-45-67", href: "tel:+74951234567" },
              { label: "info@duhovskoy.ru", href: "mailto:info@duhovskoy.ru" },
              { label: "пн–вс: 10:00–22:00", href: null },
            ].map((c) =>
              c.href ? (
                <a
                  key={c.label}
                  href={c.href}
                  style={{
                    fontSize: "var(--text-sm)",
                    color: "var(--color-text-muted)",
                    transition: "color 180ms",
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
                  {c.label}
                </a>
              ) : (
                <span
                  key={c.label}
                  style={{
                    fontSize: "var(--text-sm)",
                    color: "var(--color-text-muted)",
                  }}
                >
                  {c.label}
                </span>
              )
            )}
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div
        style={{
          borderTop: "1px solid oklch(from var(--color-text) l c h / 0.06)",
          paddingTop: "1.5rem",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "0.75rem",
        }}
      >
        <span
          style={{
            fontSize: "var(--text-xs)",
            color: "var(--color-text-faint)",
            letterSpacing: "0.08em",
          }}
        >
          © {year} Duhovskoy Barbershop
        </span>
        <span
          style={{
            fontSize: "var(--text-xs)",
            color: "var(--color-text-faint)",
            letterSpacing: "0.08em",
          }}
        >
          Духовской переулок, Москва
        </span>
      </div>

      <style>{`
        @media (max-width: 768px) { .footer-grid { grid-template-columns: 1fr 1fr !important; } }
        @media (max-width: 480px) { .footer-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </footer>
  );
}
