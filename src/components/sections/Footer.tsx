import { Logo } from "../ui/Logo";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      style={{
        background: "var(--color-surface)",
        borderTop: "1px solid var(--color-divider)",
        padding: "clamp(2.5rem, 5vw, 4rem) 0",
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "0 clamp(1.5rem, 5vw, 4rem)",
          display: "grid",
          gridTemplateColumns: "1fr auto 1fr",
          alignItems: "center",
          gap: "2rem",
        }}
        className="footer-inner"
      >
        {/* Brand */}
        <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
          <Logo size={32} />
          <div>
            <div
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "var(--text-lg)",
                fontWeight: 400,
                color: "var(--color-text)",
                lineHeight: 1,
              }}
            >
              Duhovskoy
            </div>
            <div
              style={{
                fontSize: "var(--text-xs)",
                color: "var(--color-text-faint)",
                letterSpacing: "0.06em",
                marginTop: "0.2rem",
              }}
            >
              Barbershop
            </div>
          </div>
        </div>

        {/* Nav */}
        <nav aria-label="Навигация футера">
          <ul
            role="list"
            style={{
              display: "flex",
              gap: "2rem",
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            {[
              { href: "#services", label: "Услуги" },
              { href: "#masters", label: "Мастера" },
              { href: "#about", label: "О нас" },
              { href: "#booking", label: "Запись" },
              { href: "#contacts", label: "Контакты" },
            ].map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  style={{
                    fontSize: "var(--text-xs)",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
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
              </li>
            ))}
          </ul>
        </nav>

        {/* Right: copyright */}
        <div style={{ textAlign: "right" }}>
          <p
            style={{
              fontSize: "var(--text-xs)",
              color: "var(--color-text-faint)",
              lineHeight: 1.6,
            }}
          >
            © {year} Duhovskoy Barbershop
            <br />
            <span style={{ color: "var(--color-text-faint)" }}>
              Духовской пер., Москва
            </span>
          </p>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .footer-inner {
            grid-template-columns: 1fr !important;
            text-align: center;
          }
          .footer-inner > div:last-child { text-align: center !important; }
        }
      `}</style>
    </footer>
  );
}
