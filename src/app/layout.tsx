import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Premium Barbershop - Cabeleireiro em Brusque, SC",
  description: "Barbearia premium em Brusque, SC. Cortes masculinos, barbearia tradicional, produtos exclusivos. Agende seu horário e experimente o melhor atendimento.",
  keywords: "barbearia, cabeleireiro, corte de cabelo, barba, Brusque, SC, Premium Barbershop, cuidados masculinos",
  authors: [{ name: "Premium Barbershop" }],
  creator: "Premium Barbershop",
  publisher: "Premium Barbershop",
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/icon.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/icon.png', sizes: '180x180', type: 'image/png' },
    ],
    shortcut: '/favicon.ico',
  },
  manifest: '/site.webmanifest',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://premiumbarbershop.com.br"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Premium Barbershop - Melhor Barbearia de Brusque",
    description: "Experiência premium em cuidados masculinos. Cortes precisos, barbearia tradicional e produtos exclusivos.",
    url: "https://premiumbarbershop.com.br",
    siteName: "Premium Barbershop",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: '/images/logo/logo.png',
        width: 512,
        height: 512,
        alt: 'Premium Barbershop Logo',
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
