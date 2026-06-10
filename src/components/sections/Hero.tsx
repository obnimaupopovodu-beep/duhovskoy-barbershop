"use client";
import { motion } from "motion/react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section
      aria-labelledby="hero-title"
      style={{
        minHeight: "100dvh",
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        alignItems: "stretch",
        paddingTop: 64,
        overflow: "hidden",
      }}
    >
      {/* Left: content */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "clamp(2rem, 6vw, 6rem) clamp(2rem, 5vw, 6rem)",
        }}
      >
        <motion.div
          initial={{ opacity: 0, x: -16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.75rem",
            marginBottom: "2rem",
          }}
        >
          <div
            style={{ width: 40, height: 1, background: "var(--color-primary)" }}
            aria-hidden
          />
          <span
            style={{
              fontSize: "var(--text-xs)",
              fontWeight: 500,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "var(--color-primary)",
            }}
          >
            Духовской переулок · Москва
          </span>
        </motion.div>

        <motion.h1
          id="hero-title"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "var(--text-hero)",
            fontWeight: 300,
            lineHeight: 1.0,
            color: "var(--color-text)",
            marginBottom: "2rem",
          }}
        >
          Мужской
          <br />
          уход без
          <br />
          <em style={{ fontStyle: "italic", color: "var(--color-primary)" }}>
            компромиссов
          </em>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          style={{
            fontSize: "var(--text-base)",
            color: "var(--color-text-muted)",
            lineHeight: 1.75,
            maxWidth: "44ch",
            marginBottom: "3rem",
          }}
        >
          Премиум-барбершоп, где каждая деталь отточена до совершенства. Классическое бритьё, авторские стрижки, безупречный сервис.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "1.5rem",
            flexWrap: "wrap",
          }}
        >
          <a
            href="#booking"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              padding: "1rem 2rem",
              background: "var(--color-primary)",
              color: "var(--color-text-inverse)",
              fontSize: "var(--text-sm)",
              fontWeight: 500,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              borderRadius: "0.375rem",
              boxShadow: "var(--shadow-sm)",
              transition: "background 200ms, transform 200ms, box-shadow 200ms",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLAnchorElement;
              el.style.background = "var(--color-primary-hover)";
              el.style.transform = "translateY(-2px)";
              el.style.boxShadow = "var(--shadow-md)";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLAnchorElement;
              el.style.background = "var(--color-primary)";
              el.style.transform = "translateY(0)";
              el.style.boxShadow = "var(--shadow-sm)";
            }}
          >
            Записаться онлайн <ArrowRight size={16} aria-hidden />
          </a>
          <a
            href="#services"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              padding: "1rem 1.5rem",
              border: "1px solid oklch(from var(--color-text) l c h / 0.18)",
              fontSize: "var(--text-sm)",
              fontWeight: 400,
              letterSpacing: "0.06em",
              color: "var(--color-text-muted)",
              borderRadius: "0.375rem",
              transition: "border-color 200ms, color 200ms",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLAnchorElement;
              el.style.borderColor = "var(--color-primary)";
              el.style.color = "var(--color-primary)";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLAnchorElement;
              el.style.borderColor = "oklch(from var(--color-text) l c h / 0.18)";
              el.style.color = "var(--color-text-muted)";
            }}
          >
            Наши услуги
          </a>
        </motion.div>
      </div>

      {/* Right: image */}
      <motion.div
        initial={{ opacity: 0, scale: 1.04 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, delay: 0.1 }}
        style={{ position: "relative", overflow: "hidden" }}
        aria-hidden="true"
        className="hero-image-col"
      >
        <Image
          src="https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=900&q=85&auto=format&fit=crop"
          alt=""
          fill
          priority
          style={{
            objectFit: "cover",
            objectPosition: "center top",
            filter: "grayscale(15%)",
          }}
          sizes="50vw"
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to right, var(--color-bg) 0%, transparent 30%)",
            pointerEvents: "none",
            zIndex: 1,
          }}
        />
        {/* Status badge */}
        <div
          style={{
            position: "absolute",
            bottom: "2rem",
            right: "2rem",
            zIndex: 2,
            background: "var(--color-surface)",
            border: "1px solid oklch(from var(--color-text) l c h / 0.12)",
            borderRadius: "0.625rem",
            padding: "1rem 1.5rem",
            display: "flex",
            alignItems: "center",
            gap: "0.75rem",
            backdropFilter: "blur(8px)",
          }}
        >
          <div
            style={{
              width: 8,
              height: 8,
              borderRadius: "50%",
              background: "var(--color-primary)",
              animation: "pulse 2s infinite",
            }}
          />
          <div>
            <strong
              style={{
                display: "block",
                fontSize: "var(--text-sm)",
                color: "var(--color-text)",
              }}
            >
              Открыто сейчас
            </strong>
            <p
              style={{
                fontSize: "var(--text-xs)",
                color: "var(--color-text-muted)",
                lineHeight: 1.3,
              }}
            >
              пн–вс: 10:00 — 22:00
            </p>
          </div>
        </div>
      </motion.div>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.6; transform: scale(1.2); }
        }
        @media (max-width: 1024px) {
          .hero-image-col { display: none !important; }
          section[aria-labelledby="hero-title"] {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
