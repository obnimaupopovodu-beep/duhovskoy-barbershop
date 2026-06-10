"use client";
import { motion, useInView } from "motion/react";
import { useRef } from "react";
import Image from "next/image";

const MASTERS = [
  {
    name: "Алексей Морозов",
    title: "Старший барбер · 8 лет опыта",
    spec: "Классические стрижки, опасная бритва",
    photo:
      "https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=480&q=80&auto=format&fit=crop&crop=face",
  },
  {
    name: "Даниил Ершов",
    title: "Барбер · 5 лет опыта",
    spec: "Фейд, тейпер, современные техники",
    photo:
      "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=480&q=80&auto=format&fit=crop&crop=face",
  },
  {
    name: "Максим Власов",
    title: "Барбер · 4 года опыта",
    spec: "Уход за бородой, стайлинг",
    photo:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=480&q=80&auto=format&fit=crop&crop=face",
  },
];

export function Masters() {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const titleInView = useInView(titleRef, { once: true, margin: "-80px 0px" });

  return (
    <section
      id="masters"
      aria-labelledby="masters-title"
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
        <div style={{ marginBottom: "4rem" }}>
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
              Команда
            </span>
          </div>
          <motion.h2
            ref={titleRef}
            id="masters-title"
            initial={{ opacity: 0, y: 20 }}
            animate={titleInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "var(--text-2xl)",
              fontWeight: 300,
              color: "var(--color-text)",
            }}
          >
            Наши{" "}
            <em style={{ fontStyle: "italic", color: "var(--color-primary)" }}>
              мастера
            </em>
          </motion.h2>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "1.5rem",
          }}
          className="masters-grid"
        >
          {MASTERS.map((m, i) => (
            <motion.article
              key={m.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px 0px" }}
              transition={{ duration: 0.55, delay: i * 0.12 }}
              style={{
                background: "var(--color-bg)",
                borderRadius: "0.75rem",
                overflow: "hidden",
                border: "1px solid var(--color-border)",
              }}
            >
              <div
                style={{
                  position: "relative",
                  aspectRatio: "3 / 4",
                  overflow: "hidden",
                }}
              >
                <Image
                  src={m.photo}
                  alt={`${m.name} — барбер`}
                  fill
                  loading="lazy"
                  style={{ objectFit: "cover", objectPosition: "top" }}
                  sizes="(max-width: 640px) 100vw, 33vw"
                />
                <div
                  style={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    right: 0,
                    height: "50%",
                    background:
                      "linear-gradient(to top, var(--color-bg), transparent)",
                    pointerEvents: "none",
                  }}
                />
              </div>
              <div style={{ padding: "1.5rem" }}>
                <h3
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "var(--text-xl)",
                    fontWeight: 400,
                    color: "var(--color-text)",
                    marginBottom: "0.25rem",
                  }}
                >
                  {m.name}
                </h3>
                <p
                  style={{
                    fontSize: "var(--text-xs)",
                    color: "var(--color-primary)",
                    letterSpacing: "0.06em",
                    textTransform: "uppercase",
                    marginBottom: "0.75rem",
                  }}
                >
                  {m.title}
                </p>
                <p
                  style={{
                    fontSize: "var(--text-sm)",
                    color: "var(--color-text-muted)",
                    lineHeight: 1.6,
                  }}
                >
                  {m.spec}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
      <style>{`
        @media (max-width: 1024px) { .masters-grid { grid-template-columns: repeat(2, 1fr) !important; } }
        @media (max-width: 600px)  { .masters-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}
