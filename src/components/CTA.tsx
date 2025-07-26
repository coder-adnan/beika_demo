"use client";

import { Coffee, Calendar, MapPin, ArrowRight } from "lucide-react";
import type { Dictionary } from "../../lib/dictionary";

const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};

interface CTAProps {
  dict: Dictionary;
}

export default function CTA({ dict }: CTAProps) {
  if (!dict) {
    return null;
  }
  return (
    <section className="py-20 bg-gradient-to-br from-amber-600 to-orange-600 text-white">
      <div className="container mx-auto px-4 max-w-6xl text-center">
        <h2
          className="text-4xl md:text-5xl font-bold mb-6"
          style={{ fontFamily: "Playfair Display, serif" }}
        >
          Ready to Experience BEIKA?
        </h2>
        <p
          className="text-xl mb-12 max-w-3xl mx-auto text-amber-100"
          style={{ fontFamily: "Lora, serif" }}
        >
          Join hundreds of women who have found their perfect coffee moment in
          our welcoming space. Book your table today and discover why we&apos;re
          Riyadh&apos;s favorite women-only coffee destination.
        </p>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white/10 backdrop-blur-md p-8 rounded-lg border border-white/20">
            <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Calendar className="w-8 h-8" />
            </div>
            <h3
              className="text-xl font-bold mb-3"
              style={{ fontFamily: "Cormorant Garamond, serif" }}
            >
              Book a Table
            </h3>
            <p
              className="text-amber-100 mb-4"
              style={{ fontFamily: "Source Sans Pro, sans-serif" }}
            >
              Reserve your spot for the perfect coffee experience
            </p>
            <button
              onClick={() => scrollToSection("contact")}
              className="bg-white text-amber-600 px-6 py-3 rounded-lg font-semibold hover:bg-amber-50 transition-colors flex items-center gap-2 mx-auto"
            >
              Reserve Now
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="bg-white/10 backdrop-blur-md p-8 rounded-lg border border-white/20">
            <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <MapPin className="w-8 h-8" />
            </div>
            <h3
              className="text-xl font-bold mb-3"
              style={{ fontFamily: "Cormorant Garamond, serif" }}
            >
              Visit Us
            </h3>
            <p
              className="text-amber-100 mb-4"
              style={{ fontFamily: "Source Sans Pro, sans-serif" }}
            >
              Find us in the heart of Riyadh, easily accessible
            </p>
            <button
              onClick={() => scrollToSection("hours")}
              className="bg-white text-amber-600 px-6 py-3 rounded-lg font-semibold hover:bg-amber-50 transition-colors flex items-center gap-2 mx-auto"
            >
              Get Directions
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="bg-white/10 backdrop-blur-md p-8 rounded-lg border border-white/20">
            <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Coffee className="w-8 h-8" />
            </div>
            <h3
              className="text-xl font-bold mb-3"
              style={{ fontFamily: "Cormorant Garamond, serif" }}
            >
              Explore Menu
            </h3>
            <p
              className="text-amber-100 mb-4"
              style={{ fontFamily: "Source Sans Pro, sans-serif" }}
            >
              Discover our specialty coffee and vegan treats
            </p>
            <button
              onClick={() => scrollToSection("menu")}
              className="bg-white text-amber-600 px-6 py-3 rounded-lg font-semibold hover:bg-amber-50 transition-colors flex items-center gap-2 mx-auto"
            >
              View Menu
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="bg-white/10 backdrop-blur-md p-8 rounded-lg border border-white/20 max-w-2xl mx-auto">
          <h3
            className="text-2xl font-bold mb-4"
            style={{ fontFamily: "Cormorant Garamond, serif" }}
          >
            Special Events & Catering
          </h3>
          <p
            className="text-amber-100 mb-6"
            style={{ fontFamily: "Lora, serif" }}
          >
            Hosting a women&apos;s gathering, workshop, or private event? We
            offer exclusive catering services and private space bookings for
            special occasions.
          </p>
          <button
            onClick={() => scrollToSection("contact")}
            className="bg-amber-500 hover:bg-amber-400 text-white px-8 py-4 rounded-lg font-semibold transition-colors flex items-center gap-2 mx-auto"
          >
            Inquire About Events
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
