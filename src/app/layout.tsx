import type { Metadata } from "next";
import { Playfair_Display } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin", "cyrillic"],
  weight: ["300", "400", "500"],
  style: ["normal", "italic"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Duhovskoy Barbershop — Духовской переулок, Москва",
  description:
    "Премиум-барбершоп в Тверском районе Москвы. Мужские стрижки, классическое бритьё, уход за бородой. Запись онлайн.",
  keywords: "барбершоп, мужская стрижка, бритьё, борода, Москва, Духовской переулок",
  openGraph: {
    title: "Duhovskoy Barbershop",
    description: "Премиум-барбершоп на Духовском переулке, Москва",
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
    <html lang="ru" suppressHydrationWarning>
      <head>
        <link
          href="https://api.fontshare.com/v2/css?f[]=satoshi@300,400,500,600&display=swap"
          rel="stylesheet"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){var d=document.documentElement,m=window.matchMedia('(prefers-color-scheme:dark)').matches?'dark':'light';d.setAttribute('data-theme',m)})();`,
          }}
        />
      </head>
      <body className={playfair.variable}>
        {children}
      </body>
    </html>
  );
}
