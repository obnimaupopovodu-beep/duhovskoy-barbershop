# Duhovskoy Barbershop

Премиум барбершоп на Духовском переулке — сайт на Next.js 15.

## Стек

- **Next.js 15** (App Router)
- **TypeScript**
- **Tailwind CSS v4**
- **Motion** (анимации)
- **Lucide React** (иконки)
- **next/font** — Cormorant Garamond + Inter

## Старт

```bash
npm install
npm run dev
```

Открыть [http://localhost:3000](http://localhost:3000)

## Деплой

Проект готов к деплою на [Vercel](https://vercel.com):

```bash
npx vercel
```

## Структура

```
src/
├── app/
│   ├── layout.tsx       # Root layout + шрифты + metadata
│   ├── page.tsx         # Главная страница
│   └── globals.css      # Design tokens + Tailwind
└── components/
    ├── ui/
    │   ├── Header.tsx
    │   ├── Logo.tsx
    │   └── ThemeToggle.tsx
    └── sections/
        ├── Hero.tsx
        ├── Stats.tsx
        ├── Services.tsx
        ├── Masters.tsx
        ├── About.tsx
        ├── Gallery.tsx
        ├── Booking.tsx
        ├── Contacts.tsx
        └── Footer.tsx
```
