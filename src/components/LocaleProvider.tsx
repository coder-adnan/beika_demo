"use client";

import { useEffect } from "react";

interface LocaleProviderProps {
  locale: string;
  children: React.ReactNode;
}

export function LocaleProvider({ locale, children }: LocaleProviderProps) {
  useEffect(() => {
    // Set locale-specific attributes on the HTML element
    const html = document.documentElement;
    html.lang = locale;
    html.dir = locale === "ar" ? "rtl" : "ltr";
  }, [locale]);

  return <>{children}</>;
}
