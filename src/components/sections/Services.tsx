"use client";
import { motion, useInView } from "motion/react";
import { useRef } from "react";

const SERVICES = [
  {
    num: "01",
    name: "Мужская стрижка",
    desc: "Авторская техника, адаптированная под структуру и тип волос. Мытьё, стрижка, укладка.",
    duration: "60 мин",
    price: "2 000",
  },
  {
    num: "02",
    name: "Уход за бородой",
    desc: "Оформление, моделирование, горячее полотенце и питательные масла. Идеальные контуры.",
    duration: "45 мин",
    price: "1 500",
  },
  {
    num: "03",
    name: "Классическое бритьё",
    desc: "Опасная бритва, горячий компресс, пена ручного взбивания. Ритуал для джентльменов.",
    duration: "50 мин",
    price: "2 500",
  },
  {
    num: "04",
    name: "Укладка & стайлинг",
    desc: "Профессиональный стайлинг с продуктами премиум-брендов. Держится весь день.",
    duration: "30 мин",
    price: "800",
  },
  {
    num: "05",
    name: "Комплекс «Всё включено»",
    desc: "Стрижка + борода + бритьё + укладка. Полный набор с кофе в подарок.",
    duration: "2.5 ч",
    price: "5 500",
    featured: true,
  },
  {
    num: "06",
    name: "Детская стрижка",
    desc: "Мягкий подход и терпение. Для мальчиков до 14 лет.",
    duration: "40 мин",
    price: "1 200",
  },
];

function ServiceRow({
  num, name, desc, duration, price, featured, index,
}: (typeof SERVICES)[0] & { index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px 0px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 14 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay: index * 0.07 }}
      style={{
        display: "grid",
        gridTemplateColumns: "3rem 1fr auto",
        alignItems: "start",
        gap: "0 2rem",
        padding: "1.75rem 0",
        borderBottom: "1px solid oklch(from var(--color-text) l c h / 0.07)",
        cursor: "default",
      }}
      className="service-row"
    >
      {/* Number */}
      <span
        style={{
          fontFamily: "var(--font-playfair, Georgia, serif)",
          fontSize: "var(--text-xs)",
          fontWeight: 400,
          color: featured ? "var(--color-primary)" : "var(--color-text-faint)",
          letterSpacing: "0.1em",
          paddingTop: "0.2rem",
        }}
      >
        {num}
      </span>

      {/* Name + desc */}
      <div>
        <h3
          style={{
            fontFamily: "var(--font-playfair, Georgia, serif)",
            fontSize: "var(--text-lg)",
            fontWeight: 400,
            color: "var(--color-text)",
            marginBottom: "0.4rem",
            letterSpacing: "-0.01em",
          }}
        >
          {name}
          {featured && (
            <span
              style={{
                marginLeft: "0.75rem",
                display: "inline-block",
                fontSize: "var(--text-xs)",
                fontFamily: "var(--font-body)",
                fontWeight: 500,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: "var(--color-primary)",
                border: "1px solid oklch(from var(--color-primary) l c h / 0.4)",
                borderRadius: "var(--radius-full)",
                padding: "0.15rem 0.6rem",
                verticalAlign: "middle",
              }}
            >
              Хит
            </span>
          )}
        </h3>
        <p
          style={{
            fontSize: "var(--text-sm)",
            color: "var(--color-text-muted)",
            lineHeight: 1.6,
            maxWidth: "55ch",
          }}
        >
          {desc}
        </p>
        <span
          style={{
            marginTop: "0.5rem",
            display: "inline-block",
            fontSize: "var(--text-xs)",
            color: "var(--color-text-faint)",
            letterSpacing: "0.1em",
          }}
        >
          {duration}
        </span>
      </div>

      {/* Price */}
      <div style={{ textAlign: "right", paddingTop: "0.1rem" }}>
        <span
          style={{
            fontFamily: "var(--font-playfair, Georgia, serif)",
            fontSize: "var(--text-xl)",
            fontWeight: 300,
            color: featured ? "var(--color-primary)" : "var(--color-text)",
            display: "block",
            lineHeight: 1,
            marginBottom: "0.2rem",
          }}
        >
          {price}
        </span>
        <span
          style={{
            fontSize: "var(--text-xs)",
            color: "var(--color-text-faint)",
            letterSpacing: "0.1em",
          }}
        >
          ₽
        </span>
      </div>

      <style>{`
        .service-row:hover h3 { color: var(--color-primary); transition: color 200ms; }
      `}</style>
    </motion.div>
  );
}

export function Services() {
  const ref = useRef<HTMLHeadingElement>(null);
  const inView = useInView(ref, { once: true });

  return (
    <section
      id="services"
      aria-labelledby="services-title"
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
        {/* Header: asymmetric — title left, tagline right */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "2rem",
            alignItems: "end",
            marginBottom: "clamp(3rem, 5vw, 5rem)",
            paddingBottom: "clamp(2rem, 4vw, 3.5rem)",
            borderBottom: "1px solid oklch(from var(--color-text) l c h / 0.07)",
          }}
          className="services-header"
        >
          <motion.h2
            ref={ref}
            id="services-title"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.65 }}
            style={{
              fontFamily: "var(--font-playfair, Georgia, serif)",
              fontSize: "var(--text-2xl)",
              fontWeight: 300,
              color: "var(--color-text)",
              letterSpacing: "-0.01em",
            }}
          >
            Услуги &amp;&nbsp;
            <em style={{ fontStyle: "italic", color: "var(--color-primary)" }}>
              цены
            </em>
          </motion.h2>
          <p
            style={{
              fontSize: "var(--text-sm)",
              color: "var(--color-text-muted)",
              lineHeight: 1.75,
              maxWidth: "40ch",
            }}
          >
            Каждая услуга — это ритуал. Только профессиональные инструменты и продукты высшего класса.
          </p>
        </div>

        {/* Service list */}
        <div>
          {SERVICES.map((s, i) => (
            <ServiceRow key={s.name} {...s} index={i} />
          ))}
        </div>

        {/* CTA */}
        <div style={{ marginTop: "3rem", textAlign: "right" }}>
          <a
            href="#booking"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              fontSize: "var(--text-xs)",
              fontWeight: 500,
              letterSpacing: "0.16em",
              textTransform: "uppercase",
              color: "var(--color-primary)",
              borderBottom: "1px solid oklch(from var(--color-primary) l c h / 0.4)",
              paddingBottom: "0.125rem",
              transition: "border-color 200ms",
            }}
            onMouseEnter={(e) =>
              ((e.currentTarget as HTMLAnchorElement).style.borderColor =
                "var(--color-primary)")
            }
            onMouseLeave={(e) =>
              ((e.currentTarget as HTMLAnchorElement).style.borderColor =
                "oklch(from var(--color-primary) l c h / 0.4)")
            }
          >
            Записаться онлайн
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden>
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .services-header { grid-template-columns: 1fr !important; }
          .service-row { grid-template-columns: 2.5rem 1fr auto !important; gap: 0 1rem !important; }
        }
      `}</style>
    </section>
  );
}
