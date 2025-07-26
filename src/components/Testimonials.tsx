"use client";

import { Star, Quote } from "lucide-react";
import type { Dictionary } from "../../lib/dictionary";

const testimonials = [
  {
    id: 1,
    name: "Aisha Al-Rashid",
    role: "Regular Customer",
    content:
      "BEIKA is my sanctuary in Riyadh. The coffee is exceptional, and I love that it&apos;s a women-only space where I can relax and work peacefully.",
    rating: 5,
    avatar: "👩‍💼",
  },
  {
    id: 2,
    name: "Fatima Hassan",
    role: "Coffee Enthusiast",
    content:
      "As someone who&apos;s vegan, I appreciate their plant-based options. The vegan chocolate cake is absolutely divine!",
    rating: 5,
    avatar: "👩‍🍳",
  },
  {
    id: 3,
    name: "Noor Al-Zahra",
    role: "Student",
    content:
      "Perfect study spot! The atmosphere is so calming, and the staff is incredibly friendly. My go-to place for afternoon coffee.",
    rating: 5,
    avatar: "👩‍🎓",
  },
];

interface TestimonialsProps {
  dict: Dictionary;
}

export default function Testimonials({ dict }: TestimonialsProps) {
  if (!dict) {
    return null;
  }
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12">
          <h2
            className="text-4xl font-bold text-gray-800 mb-4"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            What Our Customers Say
          </h2>
          <p
            className="text-lg text-gray-600 max-w-2xl mx-auto"
            style={{ fontFamily: "Lora, serif" }}
          >
            Discover why women in Riyadh choose BEIKA as their favorite coffee
            destination
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-amber-50 p-8 rounded-lg relative"
            >
              {/* Quote Icon */}
              <div className="absolute top-4 right-4 text-amber-200">
                <Quote className="w-8 h-8" />
              </div>

              {/* Rating */}
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-amber-400 text-amber-400"
                  />
                ))}
              </div>

              {/* Content */}
              <p
                className="text-gray-800 dark:text-white mb-6 leading-relaxed"
                style={{ fontFamily: "Lora, serif" }}
              >
                &ldquo;{testimonial.content}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="text-3xl">{testimonial.avatar}</div>
                <div>
                  <h4
                    className="font-semibold text-gray-800"
                    style={{ fontFamily: "Cormorant Garamond, serif" }}
                  >
                    {testimonial.name}
                  </h4>
                  <p
                    className="text-sm text-gray-600"
                    style={{ fontFamily: "Source Sans Pro, sans-serif" }}
                  >
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-3xl font-bold text-amber-600 mb-2">500+</div>
            <div className="text-gray-600">Happy Customers</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-amber-600 mb-2">4.9★</div>
            <div className="text-gray-600">Average Rating</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-amber-600 mb-2">50+</div>
            <div className="text-gray-600">Coffee Varieties</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-amber-600 mb-2">100%</div>
            <div className="text-gray-600">Women-Owned</div>
          </div>
        </div>
      </div>
    </section>
  );
}
