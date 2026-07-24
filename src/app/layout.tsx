import type { Metadata } from "next";
import { Source_Serif_4, Source_Sans_3 } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const sourceSerif = Source_Serif_4({
  subsets: ["latin", "latin-ext"],
  display: "swap",
  variable: "--font-source-serif",
  weight: ["400", "600"],
  style: ["normal", "italic"],
});

const sourceSans = Source_Sans_3({
  subsets: ["latin", "latin-ext"],
  display: "swap",
  variable: "--font-source-sans",
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
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
    <html lang="en" className={`${sourceSerif.variable} ${sourceSans.variable}`}>
      <body className="min-h-screen flex flex-col bg-bone text-charcoal">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
