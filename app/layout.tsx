import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Доставка грузов из Китая в Казахстан — Ali Trans Group · от 100 кг, договор, страховка",
  description:
    "Грузоперевозки из Китая в Казахстан под ключ. Авиа, ЖД, авто. Минимум 100 кг. Свои склады в Иу, Гуанчжоу, Урумчи, Хоргос. Договор + НДС + страховка 0,2%. 18 лет на рынке.",
  openGraph: {
    title: "Ali Trans Group — доставка грузов из Китая в Казахстан",
    description:
      "B2B-логистика из Китая в Казахстан. Авиа, ЖД, авто. Минимум 100 кг. Свои склады в Иу, Гуанчжоу, Урумчи, Хоргос.",
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
    <html lang="ru">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Manrope:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600&display=swap"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
