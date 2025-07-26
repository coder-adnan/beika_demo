import type { Metadata } from "next";
import {
  Playfair_Display,
  Dancing_Script,
  Noto_Sans_Arabic,
} from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-playfair",
  display: "swap",
});

const dancingScript = Dancing_Script({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const notoSansArabic = Noto_Sans_Arabic({
  subsets: ["arabic"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "BEIKA - Women's Specialty Coffee & Vegan Treats | Riyadh",
  description:
    "Women-only specialty coffee shop in Riyadh offering ethically sourced coffee, vegan desserts, and a safe space for women to relax and enjoy quality coffee.",
  keywords:
    "coffee shop, Riyadh, women-only, specialty coffee, vegan, plant-based, café, Saudi Arabia",
  authors: [{ name: "BEIKA" }],
  openGraph: {
    title: "BEIKA - Women's Specialty Coffee & Vegan Treats",
    description:
      "Women-only specialty coffee shop in Riyadh offering ethically sourced coffee, vegan desserts, and a safe space for women to relax and enjoy quality coffee.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${playfair.className} ${dancingScript.className} ${notoSansArabic.className} font-sans`}
        suppressHydrationWarning
      >
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
