import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Simulador de financiamento",
  description: "Simulador de financiamento de automóvel",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <meta name="color-scheme" content="light" />
      <body className={inter.className}>{children}</body>
    </html>
  );
}
