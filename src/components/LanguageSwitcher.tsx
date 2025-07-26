"use client";

import { useRouter, usePathname } from "next/navigation";
import { Globe } from "lucide-react";

interface LanguageSwitcherProps {
  locale: string;
}

export default function LanguageSwitcher({ locale }: LanguageSwitcherProps) {
  const router = useRouter();
  const pathname = usePathname();

  const switchLanguage = () => {
    const newLocale = locale === "en" ? "ar" : "en";
    // Remove the current locale from the pathname
    const pathWithoutLocale = pathname.replace(`/${locale}`, "");
    // Navigate to the new locale
    router.push(`/${newLocale}${pathWithoutLocale}`);
  };

  // Show the opposite language name on the button
  const buttonText = locale === "en" ? "العربية" : "English";

  return (
    <button
      onClick={switchLanguage}
      className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 transition-all duration-300 font-medium"
    >
      <Globe className="w-4 h-4" />
      <span className="text-sm">{buttonText}</span>
    </button>
  );
}
