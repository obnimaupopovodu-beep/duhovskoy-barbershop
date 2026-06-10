"use client";
import { motion } from "motion/react";
import Image from "next/image";

const PHOTOS = [
  {
    src: "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?w=800&q=80&auto=format&fit=crop",
    alt: "Мужская стрижка фейд",
    span: "col-span-2",
  },
  {
    src: "https://images.unsplash.com/photo-1622287162716-f311baa1a2b8?w=600&q=80&auto=format&fit=crop",
    alt: "Работа с бородой",
    span: "",
  },
  {
    src: "https://images.unsplash.com/photo-1517832606299-7ae9b720a9b4?w=600&q=80&auto=format&fit=crop",
    alt: "Классическое бритьё",
    span: "",
  },
  {
    src: "https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=600&q=80&auto=format&fit=crop",
    alt: "Интерьер барбершопа",
    span: "",
  },
  {
    src: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=800&q=80&auto=format&fit=crop",
    alt: "Мастер за работой",
    span: "col-span-2",
  },
];

export function Gallery() {
  return (
    <section
      id="gallery"
      aria-labelledby="gallery-title"
      style={{
        padding: "clamp(4rem, 8vw, 8rem) 0",
        background: "var(--color-surface)",
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "0 clamp(1.5rem, 5vw, 4rem)",
        }}
      >
        <div style={{ marginBottom: "3rem" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.75rem",
              marginBottom: "1.5rem",
            }}
          >
            <div
              style={{
                width: 32,
                height: 1,
                background: "var(--color-primary)",
              }}
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
              Галерея
            </span>
          </div>
          <h2
            id="gallery-title"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "var(--text-2xl)",
              fontWeight: 300,
              color: "var(--color-text)",
            }}
          >
            Наши{" "}
            <em style={{ fontStyle: "italic", color: "var(--color-primary)" }}>
              работы
            </em>
          </h2>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "0.75rem",
          }}
          className="gallery-grid"
        >
          {PHOTOS.map((p, i) => (
            <motion.div
              key={p.alt}
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-60px 0px" }}
              transition={{ duration: 0.55, delay: (i % 3) * 0.08 }}
              whileHover={{ scale: 1.02 }}
              style={{
                position: "relative",
                aspectRatio: "4 / 3",
                borderRadius: "0.625rem",
                overflow: "hidden",
                gridColumn: p.span ? p.span : undefined,
              }}
              className={p.span ? `gallery-${p.span.replace(" ", "-")}` : ""}
            >
              <Image
                src={p.src}
                alt={p.alt}
                fill
                loading="lazy"
                sizes="(max-width: 640px) 100vw, 33vw"
                style={{ objectFit: "cover", transition: "transform 500ms" }}
              />
            </motion.div>
          ))}
        </div>
      </div>
      <style>{`
        @media (max-width: 768px) {
          .gallery-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .gallery-col-span-2 { grid-column: span 2 !important; }
        }
        @media (max-width: 480px) {
          .gallery-grid { grid-template-columns: 1fr !important; }
          .gallery-col-span-2 { grid-column: span 1 !important; }
        }
      `}</style>
    </section>
  );
}
