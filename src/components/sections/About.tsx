"use client";
import { motion, useInView } from "motion/react";
import { useRef } from "react";
import Image from "next/image";

export function About() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px 0px" });

  return (
    <section
      id="about"
      aria-labelledby="about-title"
      style={{
        padding: "clamp(4rem, 8vw, 8rem) 0",
        background: "var(--color-bg)",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "0 clamp(1.5rem, 5vw, 4rem)",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          alignItems: "center",
          gap: "clamp(3rem, 6vw, 6rem)",
        }}
        className="about-grid"
      >
        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: -32 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px 0px" }}
          transition={{ duration: 0.8 }}
          style={{
            position: "relative",
            borderRadius: "0.875rem",
            overflow: "hidden",
            aspectRatio: "4 / 5",
          }}
        >
          <Image
            src="https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=800&q=85&auto=format&fit=crop"
            alt="Интерьер Duhovskoy Barbershop"
            fill
            loading="lazy"
            sizes="(max-width: 1024px) 100vw, 50vw"
            style={{ objectFit: "cover" }}
          />
          {/* floating quote card */}
          <div
            style={{
              position: "absolute",
              bottom: "2rem",
              right: "-1.5rem",
              background: "var(--color-surface)",
              border: "1px solid var(--color-border)",
              borderRadius: "0.625rem",
              padding: "1.25rem 1.5rem",
              maxWidth: 240,
              boxShadow: "var(--shadow-lg)",
            }}
          >
            <p
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "var(--text-lg)",
                fontStyle: "italic",
                fontWeight: 300,
                color: "var(--color-text)",
                lineHeight: 1.4,
                marginBottom: "0.75rem",
              }}
            >
              «Мы создаём &nbsp;образ, а не просто стрижём»
            </p>
            <span
              style={{
                fontSize: "var(--text-xs)",
                color: "var(--color-primary)",
                letterSpacing: "0.08em",
              }}
            >
              — Алексей, основатель
            </span>
          </div>
        </motion.div>

        {/* Content */}
        <div ref={ref}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
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
              О нас
            </span>
          </motion.div>

          <motion.h2
            id="about-title"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.65, delay: 0.1 }}
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "var(--text-2xl)",
              fontWeight: 300,
              color: "var(--color-text)",
              marginBottom: "1.5rem",
            }}
          >
            Место,&nbsp;где{" "}
            <em style={{ fontStyle: "italic", color: "var(--color-primary)" }}>
              детали
            </em>{" "}
            решают всё
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{
              fontSize: "var(--text-base)",
              color: "var(--color-text-muted)",
              lineHeight: 1.8,
              marginBottom: "1.25rem",
            }}
          >
            Duhovskoy Barbershop открылся в 2016 году в тихом Духовском переулке.
            Мы строили его как место силы — где мужчина может на час выйти из
            потока и просто побыть собой.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            style={{
              fontSize: "var(--text-base)",
              color: "var(--color-text-muted)",
              lineHeight: 1.8,
              marginBottom: "2.5rem",
            }}
          >
            Здесь нет спешки. Каждый гость получает полное внимание мастера,
            разбор стиля и результат, который держится неделями.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "1rem",
              borderTop: "1px solid var(--color-divider)",
              paddingTop: "2rem",
            }}
          >
            {[
              { v: "2016", l: "Год основания" },
              { v: "Тверской р-н", l: "Район» },
              { v: "Пн–Вс", l: "Работаем" },
            ].map((item) => (
              <div key={item.l}>
                <span
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "var(--text-xl)",
                    fontWeight: 400,
                    color: "var(--color-primary)",
                    display: "block",
                    marginBottom: "0.25rem",
                  }}
                >
                  {item.v}
                </span>
                <span
                  style={{
                    fontSize: "var(--text-xs)",
                    color: "var(--color-text-muted)",
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                  }}
                >
                  {item.l}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .about-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
