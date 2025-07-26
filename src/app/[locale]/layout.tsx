import type { Metadata } from "next";
import { LocaleProvider } from "@/components/LocaleProvider";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;

  return {
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
      locale: locale,
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return <LocaleProvider locale={locale}>{children}</LocaleProvider>;
}
