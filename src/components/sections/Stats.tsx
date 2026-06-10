"use client";
import { useEffect, useRef, useState } from "react";

const STATS = [
  { number: 8, suffix: "", label: "Лет опыта" },
  { number: 12, suffix: "", label: "Мастеров" },
  { number: 4800, suffix: "+", label: "Клиентов в год" },
  { number: 98, suffix: "%", label: "Довольных клиентов" },
];

function useCounter(target: number, active: boolean, duration = 1800) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!active) return;
    const start = performance.now();
    const frame = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(ease * target));
      if (progress < 1) requestAnimationFrame(frame);
    };
    requestAnimationFrame(frame);
  }, [active, target, duration]);
  return value;
}

function StatItem({
  number,
  suffix,
  label,
  delay,
}: (typeof STATS)[0] & { delay: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);
  const value = useCounter(number, active);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setActive(true);
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{
        padding: "1rem 1.5rem",
        textAlign: "center",
        borderRight: "1px solid var(--color-divider)",
        opacity: 0,
        animation: `fadeInStat 0.6s ease ${delay}ms forwards`,
      }}
    >
      <span
        style={{
          fontFamily: "var(--font-display)",
          fontSize: "var(--text-2xl)",
          fontWeight: 400,
          color: "var(--color-primary)",
          display: "block",
          lineHeight: 1,
          marginBottom: "0.25rem",
        }}
      >
        {value.toLocaleString("ru-RU")}
        {suffix}
      </span>
      <span
        style={{
          fontSize: "var(--text-xs)",
          color: "var(--color-text-muted)",
          letterSpacing: "0.1em",
          textTransform: "uppercase",
        }}
      >
        {label}
      </span>
      <style>{`@keyframes fadeInStat { to { opacity: 1; } }`}</style>
    </div>
  );
}

export function Stats() {
  return (
    <div
      style={{
        background: "var(--color-surface)",
        borderTop: "1px solid var(--color-divider)",
        borderBottom: "1px solid var(--color-divider)",
        padding: "2rem 0",
      }}
      aria-label="Наши показатели"
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "0 clamp(1.5rem, 5vw, 4rem)",
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
        }}
        className="stats-grid"
      >
        {STATS.map((s, i) => (
          <StatItem key={s.label} {...s} delay={i * 100} />
        ))}
      </div>
      <style>{`
        @media (max-width: 768px) {
          .stats-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}</style>
    </div>
  );
}
