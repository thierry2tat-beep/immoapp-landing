import type { Metadata } from "next";
import { Poppins, Inter } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "ImmoApp — La plateforme immobilière de référence au Bénin",
  description:
    "Trouvez, louez ou publiez votre bien immobilier au Bénin. Appartements, maisons, villas, studios dans plus de 10 villes. Annonces vérifiées, contact direct, paiement sécurisé.",
  keywords: [
    "immobilier",
    "Bénin",
    "location",
    "appartement",
    "maison",
    "Cotonou",
    "ImmoApp",
  ],
  openGraph: {
    title: "ImmoApp — La plateforme immobilière de référence au Bénin",
    description:
      "Trouvez votre logement idéal au Bénin. +500 annonces vérifiées dans 10+ villes.",
    type: "website",
    locale: "fr_BJ",
    url: "https://immoapp.net",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${poppins.variable} ${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
