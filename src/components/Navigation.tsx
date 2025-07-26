"use client";

import { useState, useEffect } from "react";
import { Menu, X, Coffee } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import type { Dictionary } from "../../lib/dictionary";

interface NavigationProps {
  dict: Dictionary;
}

export default function Navigation({ dict }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!dict) {
    return null; // Don't render navigation until dictionary is loaded
  }

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-white/20 dark:bg-gray-900/20 backdrop-blur-xl border-b border-white/20 dark:border-gray-700/20 shadow-2xl"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="bg-amber-600/20 backdrop-blur-sm p-2 rounded-full border border-amber-600/30">
              <Coffee className="w-8 h-8 text-amber-600" />
            </div>
            <span
              className={`text-2xl font-bold transition-colors duration-300 ${
                isScrolled
                  ? "text-gray-800 dark:text-white"
                  : "text-white dark:text-white"
              }`}
              style={{ fontFamily: "Dancing Script, cursive" }}
            >
              {dict.hero?.title}
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("about")}
              className={`transition-all duration-300 font-medium relative group ${
                isScrolled
                  ? "text-gray-800 dark:text-white hover:text-amber-600 dark:hover:text-amber-400"
                  : "text-white dark:text-white hover:text-amber-300 dark:hover:text-amber-400"
              }`}
            >
              {dict.navigation?.about}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-600 transition-all duration-300 group-hover:w-full"></span>
            </button>
            <button
              onClick={() => scrollToSection("menu")}
              className={`transition-all duration-300 font-medium relative group ${
                isScrolled
                  ? "text-gray-800 dark:text-white hover:text-amber-600 dark:hover:text-amber-400"
                  : "text-white dark:text-white hover:text-amber-300 dark:hover:text-amber-400"
              }`}
            >
              {dict.navigation?.menu}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-600 transition-all duration-300 group-hover:w-full"></span>
            </button>
            <button
              onClick={() => scrollToSection("hours")}
              className={`transition-all duration-300 font-medium relative group ${
                isScrolled
                  ? "text-gray-800 dark:text-white hover:text-amber-600 dark:hover:text-amber-400"
                  : "text-white dark:text-white hover:text-amber-300 dark:hover:text-amber-400"
              }`}
            >
              {dict.navigation?.location}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-600 transition-all duration-300 group-hover:w-full"></span>
            </button>
            <button
              onClick={() => scrollToSection("gallery")}
              className={`transition-all duration-300 font-medium relative group ${
                isScrolled
                  ? "text-gray-800 dark:text-white hover:text-amber-600 dark:hover:text-amber-400"
                  : "text-white dark:text-white hover:text-amber-300 dark:hover:text-amber-400"
              }`}
            >
              {dict.navigation?.gallery}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-600 transition-all duration-300 group-hover:w-full"></span>
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="bg-amber-600/90 backdrop-blur-sm text-white px-6 py-3 rounded-full hover:bg-amber-700/90 transition-all duration-300 font-medium border border-amber-500/30 hover:border-amber-400/50 shadow-lg hover:shadow-xl hover:scale-105"
            >
              {dict.navigation?.contact}
            </button>
            <div className="bg-white/20 dark:bg-gray-800/20 backdrop-blur-sm p-2 rounded-full border border-white/30 dark:border-gray-600/30">
              <ThemeToggle />
            </div>
            {/* Remove LanguageSwitcher or pass a static locale if needed */}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-3">
            <div className="bg-white/20 dark:bg-gray-800/20 backdrop-blur-sm p-2 rounded-full border border-white/30 dark:border-gray-600/30">
              <ThemeToggle />
            </div>
            {/* Remove LanguageSwitcher or pass a static locale if needed */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`bg-white/20 dark:bg-gray-800/20 backdrop-blur-sm p-2 rounded-full border border-white/30 dark:border-gray-600/30 transition-all duration-300 ${
                isScrolled
                  ? "text-gray-800 dark:text-white hover:text-amber-600 dark:hover:text-amber-400"
                  : "text-white dark:text-white hover:text-amber-300 dark:hover:text-amber-400"
              }`}
            >
              {isOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden bg-white/20 dark:bg-gray-900/20 backdrop-blur-xl border-t border-white/20 dark:border-gray-700/20 shadow-2xl">
            <div className="px-4 py-6 space-y-4">
              <button
                onClick={() => scrollToSection("about")}
                className={`block w-full text-left transition-all duration-300 font-medium py-3 px-4 rounded-lg hover:bg-white/10 dark:hover:bg-gray-800/10 ${
                  isScrolled
                    ? "text-gray-800 dark:text-white hover:text-amber-600 dark:hover:text-amber-400"
                    : "text-white dark:text-white hover:text-amber-300 dark:hover:text-amber-400"
                }`}
              >
                {dict.navigation?.about}
              </button>
              <button
                onClick={() => scrollToSection("menu")}
                className={`block w-full text-left transition-all duration-300 font-medium py-3 px-4 rounded-lg hover:bg-white/10 dark:hover:bg-gray-800/10 ${
                  isScrolled
                    ? "text-gray-800 dark:text-white hover:text-amber-600 dark:hover:text-amber-400"
                    : "text-white dark:text-white hover:text-amber-300 dark:hover:text-amber-400"
                }`}
              >
                {dict.navigation?.menu}
              </button>
              <button
                onClick={() => scrollToSection("hours")}
                className={`block w-full text-left transition-all duration-300 font-medium py-3 px-4 rounded-lg hover:bg-white/10 dark:hover:bg-gray-800/10 ${
                  isScrolled
                    ? "text-gray-800 dark:text-white hover:text-amber-600 dark:hover:text-amber-400"
                    : "text-white dark:text-white hover:text-amber-300 dark:hover:text-amber-400"
                }`}
              >
                {dict.navigation?.location}
              </button>
              <button
                onClick={() => scrollToSection("gallery")}
                className={`block w-full text-left transition-all duration-300 font-medium py-3 px-4 rounded-lg hover:bg-white/10 dark:hover:bg-gray-800/10 ${
                  isScrolled
                    ? "text-gray-800 dark:text-white hover:text-amber-600 dark:hover:text-amber-400"
                    : "text-white dark:text-white hover:text-amber-300 dark:hover:text-amber-400"
                }`}
              >
                {dict.navigation?.gallery}
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="block w-full text-left bg-amber-600/90 backdrop-blur-sm text-white px-4 py-3 rounded-lg hover:bg-amber-700/90 transition-all duration-300 font-medium border border-amber-500/30 hover:border-amber-400/50 shadow-lg hover:shadow-xl"
              >
                {dict.navigation?.contact}
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
