import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Google_Sans_Flex, Instrument_Serif } from "next/font/google";
import "./globals.css";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CookieNotice } from "@/components/CookieNotice";

const googleSans = Google_Sans_Flex({
  subsets: ["latin"],
  variable: "--font-sans-app",
  display: "swap",
  adjustFontFallback: false,
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: ["400"],
  style: ["italic", "normal"],
  variable: "--font-instrument-serif",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://conductosergui.es"),
  title: { default: "Conductos Ergui | Climatización y Pladur", template: "%s | Conductos Ergui" },
  description: "Instalación, mantenimiento y reparación de conductos de aire y soluciones de pladur en Cunit y un radio de 50 km.",
  keywords: ["conductos aire acondicionado Cunit", "pladur Cunit", "instalador conductos", "reparación conductos Cunit", "pladur Garraf"],
  openGraph: {
    title: "Conductos Ergui — Aire Acondicionado y Pladur",
    description: "Especialistas en conductos y pladur en Cunit y alrededores.",
    locale: "es_ES",
    type: "website"
  },
  robots: { index: true, follow: true },
  icons: { icon: "/favicon.ico" },
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": "https://conductosergui.es/#website",
      "url": "https://conductosergui.es",
      "name": "Conductos Ergui",
      "publisher": { "@id": "https://conductosergui.es/#organization" }
    },
    {
      "@type": "Organization",
      "@id": "https://conductosergui.es/#organization",
      "name": "Conductos Ergui",
      "url": "https://conductosergui.es",
      "logo": "https://conductosergui.es/logo.svg",
      "email": "conductosergui@gmail.com",
      "telephone": "+34652551861",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Cunit",
        "addressRegion": "Tarragona",
        "addressCountry": "ES"
      }
    }
  ]
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="es" className={`${googleSans.variable} ${instrumentSerif.variable}`}>
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      </head>
      <body className="antialiased">
        <Header />
        {children}
        <Footer />
        <WhatsAppButton />
        <CookieNotice />
      </body>
    </html>
  );
}</head>
