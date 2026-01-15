import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Torah & Cábala - Portal de Sabiduría",
  description: "Estudio del Tanaj, Gematría y Mística Judía",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}