"use client";
import { motion } from "motion/react";
import Image from "next/image";

export function Hero() {
  return (
    <section
      aria-labelledby="hero-title"
      style={{
        minHeight: "100dvh",
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        overflow: "hidden",
        paddingTop: "4.5rem",
      }}
    >
      {/* ── LEFT COLUMN ── */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          padding: "clamp(3rem, 6vw, 7rem) clamp(2rem, 5vw, 6rem)",
          paddingBottom: "clamp(4rem, 8vw, 8rem)",
          borderRight: "1px solid oklch(from var(--color-text) l c h / 0.07)",
        }}
      >
        {/* Year label — floats at top */}
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.1 }}
          style={{
            position: "absolute",
            top: "clamp(5.5rem, 8vw, 8rem)",
            left: "clamp(2rem, 5vw, 6rem)",
            fontSize: "var(--text-xs)",
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            color: "var(--color-text-faint)",
          }}
        >
          Est. 2016
        </motion.span>

        {/* Main heading */}
        <div style={{ marginBottom: "2.5rem" }}>
          <motion.h1
            id="hero-title"
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            style={{
              fontFamily: "var(--font-playfair, Georgia, serif)",
              fontSize: "var(--text-hero)",
              fontWeight: 300,
              lineHeight: 1.0,
              color: "var(--color-text)",
              letterSpacing: "-0.01em",
            }}
          >
            Мужской
            <br />
            <em
              style={{
                fontStyle: "italic",
                color: "var(--color-primary)",
                fontWeight: 300,
              }}
            >
              уход
            </em>
            <br />
            без
            <br />
            компромиссов
          </motion.h1>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "1.5rem",
          }}
        >
          <p
            style={{
              fontSize: "var(--text-base)",
              color: "var(--color-text-muted)",
              lineHeight: 1.8,
              maxWidth: "38ch",
            }}
          >
            Духовской переулок, Москва — место, где классика встречается с мастерством.
          </p>

          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
            <a
              href="#booking"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.625rem",
                padding: "0.875rem 2rem",
                background: "var(--color-primary)",
                color: "var(--color-text-inverse)",
                fontSize: "var(--text-xs)",
                fontWeight: 600,
                letterSpacing: "0.16em",
                textTransform: "uppercase",
                borderRadius: "var(--radius-sm)",
                transition: "background 200ms, transform 200ms",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.background = "var(--color-primary-hover)";
                (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(-1px)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.background = "var(--color-primary)";
                (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(0)";
              }}
            >
              Записаться
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden>
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
            <a
              href="#services"
              style={{
                display: "inline-flex",
                alignItems: "center",
                padding: "0.875rem 1.5rem",
                border: "1px solid oklch(from var(--color-text) l c h / 0.14)",
                color: "var(--color-text-muted)",
                fontSize: "var(--text-xs)",
                fontWeight: 500,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                borderRadius: "var(--radius-sm)",
                transition: "border-color 200ms, color 200ms",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLAnchorElement;
                el.style.borderColor = "var(--color-primary)";
                el.style.color = "var(--color-primary)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLAnchorElement;
                el.style.borderColor = "oklch(from var(--color-text) l c h / 0.14)";
                el.style.color = "var(--color-text-muted)";
              }}
            >
              Услуги
            </a>
          </div>
        </motion.div>

        {/* Bottom bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          style={{
            position: "absolute",
            bottom: "clamp(2rem, 4vw, 3.5rem)",
            left: "clamp(2rem, 5vw, 6rem)",
            display: "flex",
            alignItems: "center",
            gap: "0.625rem",
          }}
        >
          <div
            style={{
              width: 6,
              height: 6,
              borderRadius: "50%",
              background: "#4ade80",
              animation: "hero-pulse 2.4s ease-in-out infinite",
            }}
          />
          <span
            style={{
              fontSize: "var(--text-xs)",
              color: "var(--color-text-muted)",
              letterSpacing: "0.1em",
            }}
          >
            Открыто&nbsp;&nbsp;пн–вс 10:00–22:00
          </span>
        </motion.div>
      </div>

      {/* ── RIGHT COLUMN: image ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.4, delay: 0 }}
        style={{ position: "relative", overflow: "hidden" }}
        aria-hidden="true"
        className="hero-img"
      >
        <Image
          src="https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=1000&q=90&auto=format&fit=crop"
          alt=""
          fill
          priority
          style={{
            objectFit: "cover",
            objectPosition: "60% top",
            filter: "grayscale(30%) contrast(1.05)",
          }}
          sizes="50vw"
        />
        {/* Left-edge fade to background */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to right, var(--color-bg) 0%, transparent 12%)",
            pointerEvents: "none",
          }}
        />
        {/* Bottom-edge fade */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to top, var(--color-bg) 0%, transparent 28%)",
            pointerEvents: "none",
          }}
        />

        {/* Floating stat card — positioned asymmetrically */}
        <div
          style={{
            position: "absolute",
            bottom: "4rem",
            left: "2rem",
            background: "oklch(from var(--color-surface) l c h / 0.88)",
            border: "1px solid oklch(from var(--color-text) l c h / 0.1)",
            borderRadius: "var(--radius-lg)",
            padding: "1.25rem 1.75rem",
            backdropFilter: "blur(20px) saturate(1.6)",
          }}
        >
          <span
            style={{
              display: "block",
              fontFamily: "var(--font-playfair, Georgia, serif)",
              fontSize: "var(--text-2xl)",
              fontWeight: 300,
              color: "var(--color-primary)",
              lineHeight: 1,
              marginBottom: "0.375rem",
            }}
          >
            8+
          </span>
          <span
            style={{
              fontSize: "var(--text-xs)",
              color: "var(--color-text-muted)",
              letterSpacing: "0.14em",
              textTransform: "uppercase",
            }}
          >
            лет опыта
          </span>
        </div>
      </motion.div>

      <style>{`
        @keyframes hero-pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(1.3); }
        }
        @media (max-width: 900px) {
          .hero-img { display: none !important; }
          section[aria-labelledby="hero-title"] {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
