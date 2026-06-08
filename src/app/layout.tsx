import type { Metadata } from "next";
import { Inter, Inter_Tight } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const interTight = Inter_Tight({
  variable: "--font-inter-tight",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://kerneltech.kz"),
  title: {
    default: "KERNEL | Цифровые решения для бизнеса",
    template: "%s | KERNEL",
  },
  description:
    "KERNEL разрабатывает бизнес-сайты, web apps, CRM, ERP, SaaS, AI-решения, Telegram и WhatsApp ботов, внутренние системы и автоматизацию для бизнеса в Казахстане.",
  keywords: [
    "KERNEL",
    "разработка сайтов Казахстан",
    "автоматизация бизнеса",
    "CRM разработка",
    "ERP системы",
    "SaaS разработка",
    "AI решения",
    "Telegram бот",
    "WhatsApp бот",
    "бизнеске арналған цифрлық шешімдер",
    "Қазақстанда сайт жасау",
  ],
  openGraph: {
    title: "KERNEL | Цифровая инфраструктура для современного бизнеса",
    description:
      "Проектируем, разрабатываем и автоматизируем бизнес-системы: сайты, CRM, ERP, SaaS, AI, боты и внутренние платформы.",
    url: "https://kerneltech.kz",
    siteName: "KERNEL",
    type: "website",
    locale: "ru_KZ",
    alternateLocale: ["kk_KZ"],
  },
  alternates: {
    canonical: "https://kerneltech.kz",
    languages: {
      "ru-KZ": "https://kerneltech.kz",
      "kk-KZ": "https://kerneltech.kz",
    },
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ru"
      className={`${inter.variable} ${interTight.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
