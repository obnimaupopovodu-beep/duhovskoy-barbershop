"use client";
import { motion, useInView } from "motion/react";
import { useRef } from "react";
import Image from "next/image";

const MASTERS = [
  {
    name: "Алексей Громов",
    role: "Основатель · Старший мастер",
    spec: "Классические техники, работа с жёсткими волосами, опасная бритва",
    exp: "12 лет",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=85&auto=format&fit=crop&crop=face",
  },
  {
    name: "Дмитрий Орлов",
    role: "Старший барбер",
    spec: "Fade, тейп, современные молодёжные стрижки",
    exp: "7 лет",
    img: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=600&q=85&auto=format&fit=crop&crop=face",
  },
  {
    name: "Кирилл Захаров",
    role: "Барбер",
    spec: "Уход за бородой, горячее бритьё, стайлинг",
    exp: "5 лет",
    img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&q=85&auto=format&fit=crop&crop=face",
  },
];

export function Masters() {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const inView = useInView(titleRef, { once: true });

  return (
    <section
      id="masters"
      aria-labelledby="masters-title"
      style={{
        padding: "clamp(5rem, 10vw, 10rem) 0",
        background: "var(--color-surface)",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          padding: "0 clamp(1.5rem, 5vw, 4rem)",
        }}
      >
        <motion.h2
          ref={titleRef}
          id="masters-title"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65 }}
          style={{
            fontFamily: "var(--font-playfair, Georgia, serif)",
            fontSize: "var(--text-2xl)",
            fontWeight: 300,
            color: "var(--color-text)",
            letterSpacing: "-0.01em",
            marginBottom: "clamp(3rem, 5vw, 5rem)",
          }}
        >
          Наши{" "}
          <em style={{ fontStyle: "italic", color: "var(--color-primary)" }}>
            мастера
          </em>
        </motion.h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "clamp(1.5rem, 3vw, 2.5rem)",
          }}
          className="masters-grid"
        >
          {MASTERS.map((m, i) => {
            const ref = useRef<HTMLDivElement>(null);
            const visible = useInView(ref, { once: true, margin: "-60px" });
            return (
              <motion.div
                key={m.name}
                ref={ref}
                initial={{ opacity: 0, y: 24 }}
                animate={visible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.12 }}
              >
                {/* Image */}
                <div
                  style={{
                    position: "relative",
                    aspectRatio: "3 / 4",
                    borderRadius: "var(--radius-lg)",
                    overflow: "hidden",
                    marginBottom: "1.5rem",
                    background: "var(--color-surface-offset)",
                  }}
                >
                  <Image
                    src={m.img}
                    alt={m.name}
                    fill
                    loading="lazy"
                    sizes="(max-width: 900px) 100vw, 33vw"
                    style={{
                      objectFit: "cover",
                      objectPosition: "center top",
                      filter: "grayscale(20%)",
                    }}
                  />
                  {/* Exp badge */}
                  <div
                    style={{
                      position: "absolute",
                      top: "1rem",
                      right: "1rem",
                      background: "oklch(from var(--color-bg) l c h / 0.85)",
                      border: "1px solid oklch(from var(--color-text) l c h / 0.1)",
                      borderRadius: "var(--radius-full)",
                      padding: "0.25rem 0.75rem",
                      backdropFilter: "blur(8px)",
                      fontSize: "var(--text-xs)",
                      color: "var(--color-text-muted)",
                      letterSpacing: "0.1em",
                    }}
                  >
                    {m.exp}
                  </div>
                </div>

                <h3
                  style={{
                    fontFamily: "var(--font-playfair, Georgia, serif)",
                    fontSize: "var(--text-lg)",
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
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    marginBottom: "0.75rem",
                  }}
                >
                  {m.role}
                </p>
                <p
                  style={{
                    fontSize: "var(--text-sm)",
                    color: "var(--color-text-muted)",
                    lineHeight: 1.65,
                  }}
                >
                  {m.spec}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) { .masters-grid { grid-template-columns: 1fr 1fr !important; } }
        @media (max-width: 540px) { .masters-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}
