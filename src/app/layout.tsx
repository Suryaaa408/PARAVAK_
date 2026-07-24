import type { Metadata } from "next";
import {
  Newsreader,
  IBM_Plex_Sans,
  Noto_Serif_Devanagari,
  Noto_Sans_Devanagari,
  Tiro_Devanagari_Sanskrit,
} from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const newsreader = Newsreader({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-newsreader",
  style: ["normal", "italic"],
});

const ibmPlexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
  variable: "--font-ibm-plex-sans",
});

const notoSerifDevanagari = Noto_Serif_Devanagari({
  subsets: ["devanagari", "latin"],
  display: "swap",
  weight: ["400", "600", "700"],
  variable: "--font-noto-serif-devanagari",
});

const notoSansDevanagari = Noto_Sans_Devanagari({
  subsets: ["devanagari", "latin"],
  display: "swap",
  weight: ["400", "600", "700"],
  variable: "--font-noto-sans-devanagari",
});

const tiroDevanagariSanskrit = Tiro_Devanagari_Sanskrit({
  subsets: ["devanagari", "latin"],
  display: "swap",
  weight: ["400"],
  style: ["normal", "italic"],
  variable: "--font-tiro-sanskrit",
});

export const metadata: Metadata = {
  title: {
    default: "Parāvāk — Philosophy, Religion, Culture",
    template: "%s | Parāvāk",
  },
  description:
    "A samvāda-driven digital publication exploring philosophy, religion, and culture through long-form essays and timely reflections.",
  keywords: [
    "philosophy",
    "religion",
    "culture",
    "Vedānta",
    "Sanskrit",
    "Indian philosophy",
    "essays",
    "scholarly",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${newsreader.variable} ${ibmPlexSans.variable} ${notoSerifDevanagari.variable} ${notoSansDevanagari.variable} ${tiroDevanagariSanskrit.variable}`}
    >
      <body className="min-h-screen flex flex-col bg-bone text-charcoal font-body antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

