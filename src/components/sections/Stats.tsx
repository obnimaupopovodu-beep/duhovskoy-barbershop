"use client";
import { motion, useInView } from "motion/react";
import { useEffect, useRef, useState } from "react";

function Counter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const [val, setVal] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const step = target / 40;
    const timer = setInterval(() => {
      start += step;
      if (start >= target) { setVal(target); clearInterval(timer); }
      else setVal(Math.floor(start));
    }, 35);
    return () => clearInterval(timer);
  }, [inView, target]);

  return (
    <span ref={ref}>
      {val}
      {suffix}
    </span>
  );
}

const STATS = [
  { target: 8, suffix: "+", label: "Лет опыта" },
  { target: 4200, suffix: "+", label: "Довольных клиентов" },
  { target: 6, suffix: "", label: "Мастеров" },
  { target: 98, suffix: "%", label: "Возврат гостей" },
];

export function Stats() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px 0px" });

  return (
    <section
      ref={ref}
      aria-label="Ключевые показатели"
      style={{
        borderTop: "1px solid oklch(from var(--color-text) l c h / 0.07)",
        borderBottom: "1px solid oklch(from var(--color-text) l c h / 0.07)",
        padding: "clamp(3rem, 5vw, 5rem) clamp(1.5rem, 5vw, 4rem)",
        background: "var(--color-surface)",
      }}
    >
      <div
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "2rem",
        }}
        className="stats-grid"
      >
        {STATS.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "0.375rem",
            }}
          >
            <span
              style={{
                fontFamily: "var(--font-playfair, Georgia, serif)",
                fontSize: "var(--text-2xl)",
                fontWeight: 300,
                color: "var(--color-text)",
                lineHeight: 1,
                letterSpacing: "-0.01em",
              }}
            >
              <Counter target={s.target} suffix={s.suffix} />
            </span>
            <span
              style={{
                fontSize: "var(--text-xs)",
                color: "var(--color-text-muted)",
                letterSpacing: "0.14em",
                textTransform: "uppercase",
              }}
            >
              {s.label}
            </span>
          </motion.div>
        ))}
      </div>
      <style>{`
        @media (max-width: 640px) { .stats-grid { grid-template-columns: repeat(2, 1fr) !important; } }
      `}</style>
    </section>
  );
}
