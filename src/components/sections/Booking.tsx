"use client";
import { motion, useInView } from "motion/react";
import { useRef, useState } from "react";
import { CheckCircle } from "lucide-react";

const SERVICES_LIST = [
  "Мужская стрижка",
  "Уход за бородой",
  "Классическое бритьё",
  "Укладка & стайлинг",
  "Комплекс «Всё включено»",
  "Детская стрижка",
];

const MASTERS_LIST = ["Алексей Морозов", "Даниил Ершов", "Максим Власов"];

const inputStyle: React.CSSProperties = {
  width: "100%",
  padding: "0.875rem 1rem",
  background: "var(--color-surface-2)",
  border: "1px solid var(--color-border)",
  borderRadius: "0.5rem",
  fontSize: "var(--text-sm)",
  color: "var(--color-text)",
  outline: "none",
  transition: "border-color 200ms, box-shadow 200ms",
};

const labelStyle: React.CSSProperties = {
  display: "block",
  fontSize: "var(--text-xs)",
  fontWeight: 500,
  letterSpacing: "0.1em",
  textTransform: "uppercase",
  color: "var(--color-text-muted)",
  marginBottom: "0.5rem",
};

export function Booking() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px 0px" });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSent(true);
    }, 1200);
  }

  return (
    <section
      id="booking"
      aria-labelledby="booking-title"
      style={{
        padding: "clamp(4rem, 8vw, 8rem) 0",
        background: "var(--color-bg)",
      }}
    >
      <div
        style={{
          maxWidth: 960,
          margin: "0 auto",
          padding: "0 clamp(1.5rem, 5vw, 4rem)",
        }}
      >
        <div style={{ marginBottom: "3.5rem", textAlign: "center" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
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
              Запись
            </span>
            <div
              style={{
                width: 32,
                height: 1,
                background: "var(--color-primary)",
              }}
              aria-hidden
            />
          </div>
          <h2
            id="booking-title"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "var(--text-2xl)",
              fontWeight: 300,
              color: "var(--color-text)",
            }}
          >
            Запишитесь{" "}
            <em style={{ fontStyle: "italic", color: "var(--color-primary)" }}>
              онлайн
            </em>
          </h2>
        </div>

        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65 }}
          style={{
            background: "var(--color-surface)",
            border: "1px solid var(--color-border)",
            borderRadius: "1rem",
            padding: "clamp(2rem, 5vw, 3.5rem)",
            boxShadow: "var(--shadow-lg)",
          }}
        >
          {sent ? (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                padding: "2rem 0",
                gap: "1rem",
                textAlign: "center",
              }}
            >
              <CheckCircle
                size={48}
                style={{ color: "var(--color-primary)" }}
                aria-hidden
              />
              <h3
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "var(--text-xl)",
                  fontWeight: 400,
                  color: "var(--color-text)",
                }}
              >
                Заявка отправлена!
              </h3>
              <p
                style={{
                  color: "var(--color-text-muted)",
                  maxWidth: "40ch",
                  fontSize: "var(--text-base)",
                }}
              >
                Мы свяжемся с вами в ближайшее время для подтверждения записи.
              </p>
              <button
                onClick={() => setSent(false)}
                style={{
                  marginTop: "0.5rem",
                  padding: "0.75rem 1.5rem",
                  border: "1px solid var(--color-border)",
                  borderRadius: "0.5rem",
                  fontSize: "var(--text-sm)",
                  color: "var(--color-text-muted)",
                  background: "none",
                  cursor: "pointer",
                }}
              >
                Записать ещё раз
              </button>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              noValidate
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "1.25rem",
              }}
              className="booking-form"
            >
              <div>
                <label htmlFor="bf-name" style={labelStyle}>
                  Имя
                </label>
                <input
                  id="bf-name"
                  type="text"
                  required
                  placeholder="Александр"
                  style={inputStyle}
                  onFocus={(e) => {
                    (e.target as HTMLInputElement).style.borderColor =
                      "var(--color-primary)";
                    (e.target as HTMLInputElement).style.boxShadow =
                      "0 0 0 3px var(--color-primary-hl)";
                  }}
                  onBlur={(e) => {
                    (e.target as HTMLInputElement).style.borderColor =
                      "var(--color-border)";
                    (e.target as HTMLInputElement).style.boxShadow = "none";
                  }}
                />
              </div>
              <div>
                <label htmlFor="bf-phone" style={labelStyle}>
                  Телефон
                </label>
                <input
                  id="bf-phone"
                  type="tel"
                  required
                  placeholder="+7 (999) 000-00-00"
                  style={inputStyle}
                  onFocus={(e) => {
                    (e.target as HTMLInputElement).style.borderColor =
                      "var(--color-primary)";
                    (e.target as HTMLInputElement).style.boxShadow =
                      "0 0 0 3px var(--color-primary-hl)";
                  }}
                  onBlur={(e) => {
                    (e.target as HTMLInputElement).style.borderColor =
                      "var(--color-border)";
                    (e.target as HTMLInputElement).style.boxShadow = "none";
                  }}
                />
              </div>
              <div>
                <label htmlFor="bf-service" style={labelStyle}>
                  Услуга
                </label>
                <select
                  id="bf-service"
                  required
                  style={{ ...inputStyle, cursor: "pointer" }}
                  onFocus={(e) => {
                    (e.target as HTMLSelectElement).style.borderColor =
                      "var(--color-primary)";
                    (e.target as HTMLSelectElement).style.boxShadow =
                      "0 0 0 3px var(--color-primary-hl)";
                  }}
                  onBlur={(e) => {
                    (e.target as HTMLSelectElement).style.borderColor =
                      "var(--color-border)";
                    (e.target as HTMLSelectElement).style.boxShadow = "none";
                  }}
                >
                  <option value="">Выберите услугу</option>
                  {SERVICES_LIST.map((s) => (
                    <option key={s} value={s}>
                      {s}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="bf-master" style={labelStyle}>
                  Мастер
                </label>
                <select
                  id="bf-master"
                  style={{ ...inputStyle, cursor: "pointer" }}
                  onFocus={(e) => {
                    (e.target as HTMLSelectElement).style.borderColor =
                      "var(--color-primary)";
                    (e.target as HTMLSelectElement).style.boxShadow =
                      "0 0 0 3px var(--color-primary-hl)";
                  }}
                  onBlur={(e) => {
                    (e.target as HTMLSelectElement).style.borderColor =
                      "var(--color-border)";
                    (e.target as HTMLSelectElement).style.boxShadow = "none";
                  }}
                >
                  <option value="">Любой свободный</option>
                  {MASTERS_LIST.map((m) => (
                    <option key={m} value={m}>
                      {m}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="bf-date" style={labelStyle}>
                  Дата
                </label>
                <input
                  id="bf-date"
                  type="date"
                  required
                  style={{ ...inputStyle, colorScheme: "dark" }}
                  onFocus={(e) => {
                    (e.target as HTMLInputElement).style.borderColor =
                      "var(--color-primary)";
                    (e.target as HTMLInputElement).style.boxShadow =
                      "0 0 0 3px var(--color-primary-hl)";
                  }}
                  onBlur={(e) => {
                    (e.target as HTMLInputElement).style.borderColor =
                      "var(--color-border)";
                    (e.target as HTMLInputElement).style.boxShadow = "none";
                  }}
                />
              </div>
              <div>
                <label htmlFor="bf-time" style={labelStyle}>
                  Время
                </label>
                <select
                  id="bf-time"
                  required
                  style={{ ...inputStyle, cursor: "pointer" }}
                  onFocus={(e) => {
                    (e.target as HTMLSelectElement).style.borderColor =
                      "var(--color-primary)";
                    (e.target as HTMLSelectElement).style.boxShadow =
                      "0 0 0 3px var(--color-primary-hl)";
                  }}
                  onBlur={(e) => {
                    (e.target as HTMLSelectElement).style.borderColor =
                      "var(--color-border)";
                    (e.target as HTMLSelectElement).style.boxShadow = "none";
                  }}
                >
                  <option value="">Выберите время</option>
                  {["10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00", "20:00"].map((t) => (
                    <option key={t} value={t}>
                      {t}
                    </option>
                  ))}
                </select>
              </div>
              <div style={{ gridColumn: "1 / -1" }}>
                <label htmlFor="bf-comment" style={labelStyle}>
                  Комментарий (необязательно)
                </label>
                <textarea
                  id="bf-comment"
                  rows={3}
                  placeholder="Пожелания, особенности..."
                  style={{ ...inputStyle, resize: "vertical", height: "auto" }}
                  onFocus={(e) => {
                    (e.target as HTMLTextAreaElement).style.borderColor =
                      "var(--color-primary)";
                    (e.target as HTMLTextAreaElement).style.boxShadow =
                      "0 0 0 3px var(--color-primary-hl)";
                  }}
                  onBlur={(e) => {
                    (e.target as HTMLTextAreaElement).style.borderColor =
                      "var(--color-border)";
                    (e.target as HTMLTextAreaElement).style.boxShadow = "none";
                  }}
                />
              </div>
              <div style={{ gridColumn: "1 / -1" }}>
                <button
                  type="submit"
                  disabled={loading}
                  style={{
                    width: "100%",
                    padding: "1rem",
                    background: loading
                      ? "var(--color-surface-dynamic)"
                      : "var(--color-primary)",
                    color: loading
                      ? "var(--color-text-muted)"
                      : "var(--color-text-inverse)",
                    fontSize: "var(--text-sm)",
                    fontWeight: 500,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    borderRadius: "0.5rem",
                    border: "none",
                    cursor: loading ? "not-allowed" : "pointer",
                    transition: "background 200ms, transform 200ms",
                  }}
                  onMouseEnter={(e) => {
                    if (!loading) {
                      (e.currentTarget as HTMLButtonElement).style.background =
                        "var(--color-primary-hover)";
                      (e.currentTarget as HTMLButtonElement).style.transform =
                        "translateY(-1px)";
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!loading) {
                      (e.currentTarget as HTMLButtonElement).style.background =
                        "var(--color-primary)";
                      (e.currentTarget as HTMLButtonElement).style.transform =
                        "translateY(0)";
                    }
                  }}
                >
                  {loading ? "Отправка..." : "Отправить заявку"}
                </button>
              </div>
            </form>
          )}
        </motion.div>
      </div>
      <style>{`
        @media (max-width: 640px) {
          .booking-form { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
