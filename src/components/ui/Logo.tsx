export function Logo() {
  return (
    <svg
      width="120"
      height="32"
      viewBox="0 0 120 32"
      fill="none"
      aria-label="Duhovskoy Barbershop"
      role="img"
    >
      {/* Razor blade mark */}
      <path
        d="M6 8 L14 16 L6 24 L2 20 L8 16 L2 12 Z"
        fill="var(--color-primary)"
      />
      <path
        d="M10 10 L16 16 L10 22"
        stroke="var(--color-primary)"
        strokeWidth="1"
        fill="none"
        opacity="0.4"
      />
      {/* Wordmark */}
      <text
        x="22"
        y="13"
        fontFamily="var(--font-playfair, Georgia, serif)"
        fontSize="10"
        fontWeight="400"
        fill="var(--color-text)"
        letterSpacing="0.12em"
      >
        DUHOVSKOY
      </text>
      <text
        x="22"
        y="25"
        fontFamily="var(--font-body, sans-serif)"
        fontSize="7"
        fontWeight="400"
        fill="var(--color-text-muted)"
        letterSpacing="0.28em"
      >
        BARBERSHOP
      </text>
    </svg>
  );
}
