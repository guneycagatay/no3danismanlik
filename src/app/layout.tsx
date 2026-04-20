import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "No3 Danışmanlık",
  description: "Almanya göçmenlik süreci, vize işlemleri ve uzmanlık alanınıza göre iş bulma konularında profesyonel danışmanlık hizmetleri.",
  openGraph: {
    title: "No3 Danışmanlık",
    description: "Almanya göçmenlik süreci, vize işlemleri ve profesyonel kariyer danışmanlığı.",
    url: "https://no3danismanlik.com",
    siteName: "No3 Danışmanlık",
    locale: "tr_TR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className="scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased aurora`}>
        {children}
      </body>
    </html>
  );
}
