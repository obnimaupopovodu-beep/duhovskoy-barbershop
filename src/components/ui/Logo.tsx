export function Logo({ size = 36 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 36 36"
      fill="none"
      aria-hidden="true"
    >
      <rect
        x="2" y="2" width="32" height="32" rx="4"
        stroke="currentColor" strokeWidth="1.2" opacity="0.3"
      />
      <path
        d="M10 26L18 10L26 26"
        stroke="var(--color-primary)"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.5 21H23.5"
        stroke="var(--color-primary)"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
      <circle cx="18" cy="18" r="1.5" fill="var(--color-primary)" />
    </svg>
  );
}
