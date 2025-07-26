"use client";

import { useEffect, useRef } from "react";
import { Coffee, Heart, ArrowDown, Star } from "lucide-react";
import type { Dictionary } from "../../lib/dictionary";

interface ParallaxHeroProps {
  dict: Dictionary;
}

export default function ParallaxHero({ dict }: ParallaxHeroProps) {
  const heroRef = useRef<HTMLDivElement>(null);
  const floatingElementsRef = useRef<HTMLDivElement>(null);
  const backgroundRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (
        !heroRef.current ||
        !floatingElementsRef.current ||
        !backgroundRef.current
      )
        return;

      const scrolled = window.pageYOffset;
      const heroHeight = heroRef.current.offsetHeight;

      // Only apply parallax effect when hero is in view
      if (scrolled <= heroHeight) {
        // Background image moves slower (creates depth)
        const backgroundRate = scrolled * 0.3;
        backgroundRef.current.style.transform = `translateY(${backgroundRate}px)`;

        // Floating elements move faster (foreground effect)
        const floatingRate = scrolled * -0.8;
        floatingElementsRef.current.style.transform = `translateY(${floatingRate}px)`;

        // Subtle parallax for the entire hero container
        const heroRate = scrolled * 0.1;
        heroRef.current.style.transform = `translateY(${heroRate}px)`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!dict) {
    return null; // Don't render hero until dictionary is loaded
  }

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background with Enhanced Parallax */}
      <div
        ref={backgroundRef}
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-300"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1442512595331-e89e73853f31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')`,
          transform: "translateY(0px)",
        }}
      >
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/60 to-black/50"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>

        {/* Coffee-themed decorative overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-amber-900/10 via-orange-900/15 to-amber-800/20"></div>
      </div>

      {/* Floating Elements with Enhanced Parallax */}
      <div
        ref={floatingElementsRef}
        className="absolute inset-0 pointer-events-none"
        style={{ transform: "translateY(0px)" }}
      >
        {/* Floating coffee elements with different animation speeds */}
        <div
          className="absolute top-20 left-10 w-16 h-16 bg-amber-200/20 rounded-full blur-sm animate-pulse"
          style={{ animationDelay: "0s" }}
        ></div>
        <div
          className="absolute top-40 right-20 w-12 h-12 bg-orange-200/25 rounded-full blur-sm animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute bottom-40 left-20 w-20 h-20 bg-amber-300/20 rounded-full blur-sm animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>

        {/* Additional floating elements */}
        <div
          className="absolute top-1/4 right-1/4 w-8 h-8 bg-amber-400/30 rounded-full animate-bounce"
          style={{ animationDelay: "0.5s" }}
        ></div>
        <div
          className="absolute bottom-1/3 right-1/3 w-6 h-6 bg-white/15 rounded-full animate-pulse"
          style={{ animationDelay: "1.5s" }}
        ></div>
        <div
          className="absolute top-2/3 left-1/3 w-10 h-10 bg-orange-400/25 rounded-full animate-bounce"
          style={{ animationDelay: "2.5s" }}
        ></div>

        {/* Coffee steam effect */}
        <div
          className="absolute top-1/3 left-1/4 w-4 h-12 bg-white/10 rounded-full blur-sm animate-pulse"
          style={{ animationDelay: "3s" }}
        ></div>
        <div
          className="absolute top-1/3 left-1/4 w-3 h-8 bg-white/8 rounded-full blur-sm animate-pulse"
          style={{ animationDelay: "3.2s" }}
        ></div>
      </div>

      {/* Main Content Container with Parallax */}
      <div
        ref={heroRef}
        className="relative z-10 text-center text-white px-4 max-w-5xl mx-auto"
        style={{ transform: "translateY(0px)" }}
      >
        {/* Badge with entrance animation */}
        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-6 py-3 mb-8 animate-fade-in-up">
          <Heart className="w-5 h-5 text-amber-300" />
          <span className="text-sm font-medium">{dict.hero?.badge}</span>
          <Star className="w-4 h-4 text-amber-300" />
        </div>

        {/* Main Heading with staggered animation */}
        <h1
          className="text-6xl md:text-8xl font-bold mb-6 leading-tight animate-fade-in-up"
          style={{
            animationDelay: "0.2s",
            fontFamily: "Dancing Script, cursive",
          }}
        >
          <span className="block text-amber-100 animate-slide-in-left">
            {dict.hero?.title?.split(" ")[0]}
          </span>
          <span className="block text-white animate-slide-in-right">
            {dict.hero?.title?.split(" ")[1]}
          </span>
        </h1>

        {/* Subtitle with fade animation */}
        <p
          className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed text-amber-50 animate-fade-in-up"
          style={{
            animationDelay: "0.4s",
            fontFamily: "Cormorant Garamond, serif",
          }}
        >
          {dict.hero?.subtitle}
          <span
            className="block mt-2 text-lg md:text-xl text-amber-200"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            {dict.hero?.description}
          </span>
        </p>

        {/* Features with staggered animation */}
        <div
          className="flex flex-wrap justify-center items-center gap-6 mb-12 text-amber-100 animate-fade-in-up"
          style={{ animationDelay: "0.6s" }}
        >
          <div className="flex items-center gap-2">
            <Coffee className="w-5 h-5 text-amber-300" />
            <span
              className="text-sm font-medium"
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              {dict.hero?.features?.coffee}
            </span>
          </div>
          <div className="hidden md:block w-1 h-1 bg-amber-300 rounded-full"></div>
          <div className="flex items-center gap-2">
            <span className="text-green-400 text-lg">🌱</span>
            <span
              className="text-sm font-medium"
              style={{ fontFamily: "Cormorant Garamond, serif" }}
            >
              {dict.hero?.features?.vegan}
            </span>
          </div>
          <div className="hidden md:block w-1 h-1 bg-amber-300 rounded-full"></div>
          <div className="flex items-center gap-2">
            <span className="text-amber-300 text-lg">✨</span>
            <span
              className="text-sm font-medium"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              {dict.hero?.features?.aesthetic}
            </span>
          </div>
        </div>

        {/* CTA Buttons with animation */}
        <div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-fade-in-up"
          style={{ animationDelay: "0.8s" }}
        >
          <button
            onClick={() =>
              document
                .getElementById("menu")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl hover:rotate-1"
          >
            {dict.hero?.cta?.menu}
          </button>
          <button
            onClick={() =>
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="border-2 border-white/30 hover:border-white/50 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 backdrop-blur-sm hover:bg-white/10 hover:rotate-1"
          >
            {dict.hero?.cta?.book}
          </button>
        </div>

        {/* Scroll Indicator with continuous animation */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="w-6 h-6 text-white/70" />
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-900 to-transparent"></div>
    </section>
  );
}
