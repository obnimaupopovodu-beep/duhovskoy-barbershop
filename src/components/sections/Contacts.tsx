"use client";
import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { MapPin, Phone, Clock, Instagram, Send } from "lucide-react";

const INFO = [
  {
    icon: MapPin,
    label: "Адрес",
    value: "Духовской пер., Москва",
    link: "https://maps.google.com/?q=Духовской+переулок+Москва",
  },
  {
    icon: Phone,
    label: "Телефон",
    value: "+7 (999) 000-00-00",
    link: "tel:+79990000000",
  },
  {
    icon: Clock,
    label: "Расписание",
    value: "Пн–Вс: 10:00 — 22:00",
    link: null,
  },
  {
    icon: Instagram,
    label: "Instagram",
    value: "@duhovskoy.barber",
    link: "https://instagram.com/duhovskoy.barber",
  },
  {
    icon: Send,
    label: "Telegram",
    value: "@duhovskoy_barber",
    link: "https://t.me/duhovskoy_barber",
  },
];

export function Contacts() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px 0px" });

  return (
    <section
      id="contacts"
      aria-labelledby="contacts-title"
      style={{
        padding: "clamp(4rem, 8vw, 8rem) 0",
        background: "var(--color-surface)",
      }}
    >
      <div
        ref={ref}
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "0 clamp(1.5rem, 5vw, 4rem)",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "clamp(3rem, 6vw, 6rem)",
          alignItems: "start",
        }}
        className="contacts-grid"
      >
        {/* Left */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
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
                Контакты
              </span>
            </div>
            <h2
              id="contacts-title"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "var(--text-2xl)",
                fontWeight: 300,
                color: "var(--color-text)",
                marginBottom: "2.5rem",
              }}
            >
              Найдите{" "}
              <em style={{ fontStyle: "italic", color: "var(--color-primary)" }}>
                нас
              </em>
            </h2>
          </motion.div>

          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {INFO.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, x: -16 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.15 + i * 0.08 }}
              >
                {item.link ? (
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "1rem",
                      padding: "1rem 1.25rem",
                      background: "var(--color-bg)",
                      border: "1px solid var(--color-border)",
                      borderRadius: "0.625rem",
                      color: "inherit",
                      transition: "border-color 200ms, transform 200ms",
                    }}
                    onMouseEnter={(e) => {
                      const el = e.currentTarget as HTMLAnchorElement;
                      el.style.borderColor = "var(--color-primary)";
                      el.style.transform = "translateX(4px)";
                    }}
                    onMouseLeave={(e) => {
                      const el = e.currentTarget as HTMLAnchorElement;
                      el.style.borderColor = "var(--color-border)";
                      el.style.transform = "translateX(0)";
                    }}
                  >
                    <item.icon
                      size={20}
                      style={{ color: "var(--color-primary)", flexShrink: 0 }}
                      aria-hidden
                    />
                    <div>
                      <span
                        style={{
                          display: "block",
                          fontSize: "var(--text-xs)",
                          color: "var(--color-text-faint)",
                          textTransform: "uppercase",
                          letterSpacing: "0.08em",
                          marginBottom: "0.125rem",
                        }}
                      >
                        {item.label}
                      </span>
                      <span
                        style={{
                          fontSize: "var(--text-sm)",
                          color: "var(--color-text)",
                        }}
                      >
                        {item.value}
                      </span>
                    </div>
                  </a>
                ) : (
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "1rem",
                      padding: "1rem 1.25rem",
                      background: "var(--color-bg)",
                      border: "1px solid var(--color-border)",
                      borderRadius: "0.625rem",
                    }}
                  >
                    <item.icon
                      size={20}
                      style={{ color: "var(--color-primary)", flexShrink: 0 }}
                      aria-hidden
                    />
                    <div>
                      <span
                        style={{
                          display: "block",
                          fontSize: "var(--text-xs)",
                          color: "var(--color-text-faint)",
                          textTransform: "uppercase",
                          letterSpacing: "0.08em",
                          marginBottom: "0.125rem",
                        }}
                      >
                        {item.label}
                      </span>
                      <span
                        style={{
                          fontSize: "var(--text-sm)",
                          color: "var(--color-text)",
                        }}
                      >
                        {item.value}
                      </span>
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Map iframe */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          style={{
            borderRadius: "0.875rem",
            overflow: "hidden",
            border: "1px solid var(--color-border)",
            aspectRatio: "4 / 3",
            position: "relative",
          }}
        >
          <iframe
            title="Карта Duhovskoy Barbershop"
            src="https://maps.google.com/maps?q=Духовской+переулок,+Москва&output=embed"
            width="100%"
            height="100%"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            style={{ border: "none", display: "block", filter: "grayscale(50%)" }}
          />
        </motion.div>
      </div>
      <style>{`
        @media (max-width: 1024px) {
          .contacts-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
