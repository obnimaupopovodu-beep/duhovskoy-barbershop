import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin", "cyrillic"],
  weight: ["300", "400", "600"],
  style: ["normal", "italic"],
  variable: "--font-display",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  weight: ["300", "400", "500"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Duhovskoy Barbershop — Премиум барбершоп в Москве",
  description:
    "Премиум-барбершоп на Духовском переулке. Мужские стрижки, бритьё опасной бритвой, уход за бородой. Запись онлайн.",
  keywords: ["барбершоп", "мужская стрижка", "Духовской переулок", "Москва", "barbershop"],
  openGraph: {
    title: "Duhovskoy Barbershop",
    description: "Мужской уход без компромиссов. Духовской переулок, Москва.",
    type: "website",
    locale: "ru_RU",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru" data-theme="dark" className={`${cormorant.variable} ${inter.variable}`}>
      <body>{children}</body>
    </html>
  );
}
