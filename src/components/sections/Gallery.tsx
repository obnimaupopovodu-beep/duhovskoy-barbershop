"use client";
import { motion, useInView } from "motion/react";
import { useRef } from "react";
import Image from "next/image";

const PHOTOS = [
  {
    src: "https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=800&q=85&auto=format&fit=crop",
    alt: "Интерьер барбершопа",
    span: "col",
  },
  {
    src: "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?w=600&q=85&auto=format&fit=crop",
    alt: "Работа с клиентом",
    span: "",
  },
  {
    src: "https://images.unsplash.com/photo-1605497788044-5a32c7078486?w=600&q=85&auto=format&fit=crop",
    alt: "Инструменты мастера",
    span: "",
  },
  {
    src: "https://images.unsplash.com/photo-1512864084360-7c0d4d71fc87?w=800&q=85&auto=format&fit=crop",
    alt: "Стрижка",
    span: "",
  },
  {
    src: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=600&q=85&auto=format&fit=crop",
    alt: "Барбер за работой",
    span: "",
  },
];

export function Gallery() {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const inView = useInView(titleRef, { once: true });

  return (
    <section
      id="gallery"
      aria-labelledby="gallery-title"
      style={{
        padding: "clamp(5rem, 10vw, 10rem) 0",
        background: "var(--color-bg)",
      }}
    >
      <div
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          padding: "0 clamp(1.5rem, 5vw, 4rem)",
        }}
      >
        {/* Asymmetric header: num left, title right */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            marginBottom: "clamp(2.5rem, 4vw, 4rem)",
          }}
        >
          <span
            style={{
              fontFamily: "var(--font-playfair, Georgia, serif)",
              fontSize: "var(--text-3xl)",
              fontWeight: 300,
              color: "var(--color-text-faint)",
              lineHeight: 1,
              letterSpacing: "-0.02em",
            }}
          >
            04
          </span>
          <motion.h2
            ref={titleRef}
            id="gallery-title"
            initial={{ opacity: 0, x: 16 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            style={{
              fontFamily: "var(--font-playfair, Georgia, serif)",
              fontSize: "var(--text-2xl)",
              fontWeight: 300,
              color: "var(--color-text)",
              letterSpacing: "-0.01em",
              textAlign: "right",
            }}
          >
            <em style={{ fontStyle: "italic", color: "var(--color-primary)" }}>Галерея</em>
          </motion.h2>
        </div>

        {/* Masonry-style grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gridAutoRows: "260px",
            gap: "0.75rem",
          }}
          className="gallery-grid"
        >
          {PHOTOS.map((p, i) => {
            const ref = useRef<HTMLDivElement>(null);
            const vis = useInView(ref, { once: true, margin: "-60px" });
            return (
              <motion.div
                key={p.src}
                ref={ref}
                initial={{ opacity: 0, scale: 0.97 }}
                animate={vis ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.65, delay: i * 0.08 }}
                style={{
                  position: "relative",
                  borderRadius: "var(--radius-md)",
                  overflow: "hidden",
                  background: "var(--color-surface-offset)",
                  gridRow: i === 0 ? "span 2" : undefined,
                }}
                className="gallery-item"
              >
                <Image
                  src={p.src}
                  alt={p.alt}
                  fill
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, 33vw"
                  style={{
                    objectFit: "cover",
                    transition: "transform 600ms cubic-bezier(0.16,1,0.3,1), filter 400ms",
                    filter: "grayscale(15%)",
                  }}
                  className="gallery-img"
                />
              </motion.div>
            );
          })}
        </div>
      </div>

      <style>{`
        .gallery-item:hover .gallery-img {
          transform: scale(1.04);
          filter: grayscale(0%);
        }
        @media (max-width: 768px) {
          .gallery-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 480px) {
          .gallery-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
