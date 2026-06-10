"use client";
import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { Scissors, Sparkles, Flame, Wind, Star, Baby } from "lucide-react";

const SERVICES = [
  {
    icon: Scissors,
    name: "Мужская стрижка",
    desc: "Авторская техника, адаптированная под структуру и тип волос. Мытьё головы, стрижка, укладка.",
    price: "2 000",
  },
  {
    icon: Sparkles,
    name: "Уход за бородой",
    desc: "Оформление, моделирование, горячее полотенце и питательные масла. Идеальные контуры.",
    price: "1 500",
  },
  {
    icon: Flame,
    name: "Классическое бритьё",
    desc: "Опасная бритва, горячий компресс, пена ручного взбивания. Ритуал для настоящих джентльменов.",
    price: "2 500",
  },
  {
    icon: Wind,
    name: "Укладка & стайлинг",
    desc: "Профессиональный стайлинг с продуктами премиум-брендов. Держится весь день.",
    price: "800",
  },
  {
    icon: Star,
    name: "Комплекс «Всё включено»",
    desc: "Стрижка + борода + бритьё + укладка. Полный джентльменский набор с чашкой кофе в подарок.",
    price: "5 500",
  },
  {
    icon: Baby,
    name: "Детская стрижка",
    desc: "Мягкий подход, терпение и результат, который понравится папе и маме. Для мальчиков до 14 лет.",
    price: "1 200",
  },
];

function ServiceCard({
  icon: Icon,
  name,
  desc,
  price,
  index,
}: (typeof SERVICES)[0] & { index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px 0px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
      whileHover={{ y: -4 }}
      style={{
        background: "var(--color-surface)",
        border: "1px solid var(--color-border)",
        borderRadius: "0.625rem",
        padding: "2rem",
        transition: "box-shadow 300ms",
      }}
    >
      <Icon
        size={36}
        style={{ color: "var(--color-primary)", marginBottom: "1.5rem" }}
        aria-hidden
      />
      <h3
        style={{
          fontFamily: "var(--font-display)",
          fontSize: "var(--text-xl)",
          fontWeight: 400,
          color: "var(--color-text)",
          marginBottom: "0.75rem",
        }}
      >
        {name}
      </h3>
      <p
        style={{
          fontSize: "var(--text-sm)",
          color: "var(--color-text-muted)",
          lineHeight: 1.65,
          marginBottom: "1.5rem",
        }}
      >
        {desc}
      </p>
      <div style={{ display: "flex", alignItems: "baseline", gap: "0.5rem" }}>
        <span
          style={{
            fontSize: "var(--text-xs)",
            color: "var(--color-text-faint)",
            letterSpacing: "0.1em",
            textTransform: "uppercase",
          }}
        >
          от
        </span>
        <span
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "var(--text-lg)",
            fontWeight: 600,
            color: "var(--color-primary)",
          }}
        >
          {price}
        </span>
        <span
          style={{ fontSize: "var(--text-sm)", color: "var(--color-text-muted)" }}
        >
          ₽
        </span>
      </div>
    </motion.div>
  );
}

export function Services() {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const titleInView = useInView(titleRef, { once: true, margin: "-80px 0px" });

  return (
    <section
      id="services"
      aria-labelledby="services-title"
      style={{
        padding: "clamp(4rem, 8vw, 8rem) 0",
        background: "var(--color-bg)",
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
              Услуги
            </span>
          </div>
          <motion.h2
            ref={titleRef}
            id="services-title"
            initial={{ opacity: 0, y: 20 }}
            animate={titleInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "var(--text-2xl)",
              fontWeight: 300,
              color: "var(--color-text)",
              marginBottom: "1rem",
            }}
          >
            Наши{" "}
            <em style={{ fontStyle: "italic", color: "var(--color-primary)" }}>
              процедуры
            </em>
          </motion.h2>
          <p
            style={{
              fontSize: "var(--text-base)",
              color: "var(--color-text-muted)",
              maxWidth: "52ch",
              lineHeight: 1.7,
            }}
          >
            Каждая услуга — это ритуал. Используем только профессиональные продукты и инструменты высшего класса.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "1.25rem",
          }}
          className="services-grid"
        >
          {SERVICES.map((s, i) => (
            <ServiceCard key={s.name} {...s} index={i} />
          ))}
        </div>
      </div>
      <style>{`
        @media (max-width: 1024px) { .services-grid { grid-template-columns: repeat(2, 1fr) !important; } }
        @media (max-width: 640px)  { .services-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}
