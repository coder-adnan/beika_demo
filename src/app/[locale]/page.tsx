"use client";

import {
  Coffee,
  MapPin,
  Clock,
  Phone,
  Mail,
  Instagram,
  Facebook,
  Heart,
  Shield,
  Leaf,
  Users,
} from "lucide-react";
import Navigation from "@/components/Navigation";
import ContactForm from "@/components/ContactForm";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import ParallaxHero from "@/components/ParallaxHero";
import { getDictionary, Dictionary, MenuItem } from "../../../lib/dictionary";
import { useEffect, useState, use } from "react";
import Image from "next/image";

export default function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = use(params);
  const [dict, setDict] = useState<Dictionary | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadDictionary = async () => {
      try {
        setLoading(true);
        const dictionary = await getDictionary(locale);
        setDict(dictionary as Dictionary);
      } catch (error) {
        console.error("Failed to load dictionary:", error);
        // Fallback to English if loading fails
        const fallbackDict = await getDictionary("en");
        setDict(fallbackDict as Dictionary);
      } finally {
        setLoading(false);
      }
    };
    loadDictionary();
  }, [locale]);

  if (loading || !dict) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-amber-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-amber-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen">
      <Navigation dict={dict as unknown as Dictionary} />

      {/* Hero Section with Parallax */}
      <ParallaxHero dict={dict as unknown as Dictionary} />

      {/* About Section */}
      <section id="about" className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2
                className="text-4xl font-bold text-gray-800 mb-6"
                style={{ fontFamily: "Playfair Display, serif" }}
              >
                {dict.about.title}
              </h2>
              <p
                className="text-lg text-gray-600 dark:text-wh mb-6"
                style={{ fontFamily: "Lora, serif" }}
              >
                {dict.about.story1}
              </p>
              <p
                className="text-lg text-gray-600 mb-6"
                style={{ fontFamily: "Lora, serif" }}
              >
                {dict.about.story2}
              </p>
              <div className="flex items-center gap-4 text-amber-700">
                <Coffee className="w-6 h-6" />
                <span
                  className="font-semibold"
                  style={{ fontFamily: "Cormorant Garamond, serif" }}
                >
                  {dict.about.highlight}
                </span>
              </div>
            </div>
            <div className="bg-amber-50 p-8 rounded-lg">
              <h3
                className="text-2xl font-bold text-gray-800 mb-4"
                style={{ fontFamily: "Playfair Display, serif" }}
              >
                {dict.about.special.title}
              </h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <Heart className="w-5 h-5 text-amber-600" />
                  <span style={{ fontFamily: "Source Sans Pro, sans-serif" }}>
                    {dict.about.special.safe}
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <Coffee className="w-5 h-5 text-amber-600" />
                  <span style={{ fontFamily: "Source Sans Pro, sans-serif" }}>
                    {dict.about.special.coffee}
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-green-600 font-bold">🌱</span>
                  <span style={{ fontFamily: "Source Sans Pro, sans-serif" }}>
                    {dict.about.special.vegan}
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-amber-600 font-bold">✨</span>
                  <span style={{ fontFamily: "Source Sans Pro, sans-serif" }}>
                    {dict.about.special.aesthetic}
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2
              className="text-4xl font-bold text-gray-800 mb-4"
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              {dict.features.title}
            </h2>
            <p
              className="text-lg text-gray-600 max-w-2xl mx-auto"
              style={{ fontFamily: "Lora, serif" }}
            >
              {dict.features.subtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="bg-amber-100 dark:bg-gray-700 p-6 rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                <Shield className="w-10 h-10 text-amber-600" />
              </div>
              <h3
                className="text-xl font-bold text-gray-800 mb-3"
                style={{ fontFamily: "Cormorant Garamond, serif" }}
              >
                {dict.features.safe.title}
              </h3>
              <p
                className="text-gray-600"
                style={{ fontFamily: "Source Sans Pro, sans-serif" }}
              >
                {dict.features.safe.description}
              </p>
            </div>

            <div className="text-center group">
              <div className="bg-amber-100 dark:bg-gray-700 p-6 rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                <Coffee className="w-10 h-10 text-amber-600" />
              </div>
              <h3
                className="text-xl font-bold text-gray-800 mb-3"
                style={{ fontFamily: "Cormorant Garamond, serif" }}
              >
                {dict.features.coffee.title}
              </h3>
              <p
                className="text-gray-600"
                style={{ fontFamily: "Source Sans Pro, sans-serif" }}
              >
                {dict.features.coffee.description}
              </p>
            </div>

            <div className="text-center group">
              <div className="bg-amber-100 dark:bg-gray-700 p-6 rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                <Leaf className="w-10 h-10 text-green-600" />
              </div>
              <h3
                className="text-xl font-bold text-gray-800 mb-3"
                style={{ fontFamily: "Cormorant Garamond, serif" }}
              >
                {dict.features.vegan.title}
              </h3>
              <p
                className="text-gray-600"
                style={{ fontFamily: "Source Sans Pro, sans-serif" }}
              >
                {dict.features.vegan.description}
              </p>
            </div>

            <div className="text-center group">
              <div className="bg-amber-100 dark:bg-gray-700 p-6 rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                <Users className="w-10 h-10 text-amber-600" />
              </div>
              <h3
                className="text-xl font-bold text-gray-800 mb-3"
                style={{ fontFamily: "Cormorant Garamond, serif" }}
              >
                {dict.features.community.title}
              </h3>
              <p
                className="text-gray-600"
                style={{ fontFamily: "Source Sans Pro, sans-serif" }}
              >
                {dict.features.community.description}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="py-20 bg-amber-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2
            className="text-4xl font-bold text-center text-gray-800 mb-12"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            {dict.menu.title}
          </h2>

          {/* Group menu items by category */}
          {Array.from(
            (dict.menu.items as MenuItem[]).reduce(
              (acc: Map<string, MenuItem[]>, item: MenuItem) => {
                if (!acc.has(item.category)) acc.set(item.category, []);
                acc.get(item.category)!.push(item);
                return acc;
              },
              new Map<string, MenuItem[]>()
            )
          ).map(([category, items]: [string, MenuItem[]]) => (
            <div key={category} className="mb-12">
              <h3
                className="text-2xl font-bold text-gray-800 mb-6"
                style={{ fontFamily: "Cormorant Garamond, serif" }}
              >
                {category}
              </h3>
              <div className="grid md:grid-cols-2 gap-8">
                {items.map((item: MenuItem, idx: number) => (
                  <div
                    key={item.name + idx}
                    className="bg-white p-6 rounded-lg shadow-lg"
                  >
                    <div className="flex justify-between items-start mb-2">
                      <h4
                        className="font-semibold text-lg"
                        style={{ fontFamily: "Merriweather, serif" }}
                      >
                        {item.name}
                      </h4>
                      <span
                        className="text-amber-700 font-bold"
                        style={{ fontFamily: "Inter, sans-serif" }}
                      >
                        {item.price}
                      </span>
                    </div>
                    <p
                      className="text-gray-600"
                      style={{ fontFamily: "Source Sans Pro, sans-serif" }}
                    >
                      {item.description}
                    </p>
                    {item.calories && (
                      <span className="text-green-600 text-sm font-medium">
                        {item.calories}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <Testimonials dict={dict as unknown as Dictionary} />

      {/* CTA Section */}
      <CTA dict={dict as unknown as Dictionary} />

      {/* Hours & Location */}
      <section id="hours" className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2
                className="text-4xl font-bold text-gray-800 mb-8"
                style={{ fontFamily: "Playfair Display, serif" }}
              >
                {dict.hours.title}
              </h2>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-amber-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg text-gray-800 mb-2">
                      Address
                    </h3>
                    <p className="text-gray-600">{dict.hours.address}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Phone className="w-6 h-6 text-amber-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg text-gray-800 mb-2">
                      Phone
                    </h3>
                    <p className="text-gray-600">{dict.hours.phone}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Mail className="w-6 h-6 text-amber-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg text-gray-800 mb-2">
                      Email
                    </h3>
                    <p className="text-gray-600">{dict.hours.email}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Clock className="w-6 h-6 text-amber-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg text-gray-800 mb-4">
                      Opening Hours
                    </h3>
                    <div className="space-y-2 text-gray-600">
                      <p>{dict.hours.schedule.weekdays}</p>
                      <p>{dict.hours.schedule.weekend}</p>
                      <p>{dict.hours.schedule.sunday}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-6 bg-gray-100 dark:bg-gray-700 rounded-lg">
                <h3 className="font-bold text-lg mb-4 text-gray-800 dark:text-white">
                  {dict.hours.gettingHere.title}
                </h3>
                <ul className="space-y-2 text-gray-800 dark:text-white">
                  <li>{dict.hours.gettingHere.parking}</li>
                  <li>{dict.hours.gettingHere.transport}</li>
                  <li>{dict.hours.gettingHere.location}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 bg-amber-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2
            className="text-4xl font-bold text-center text-gray-800 mb-12"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            {dict.gallery.title}
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                id: 1,
                title: "Cozy Interior",
                image:
                  "https://images.unsplash.com/photo-1554118811-1e0d58224f24?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
              },
              {
                id: 2,
                title: "Coffee Preparation",
                image:
                  "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
              },
              {
                id: 3,
                title: "Vegan Desserts",
                image:
                  "https://images.unsplash.com/photo-1565958011703-44f9829ba187?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
              },
              {
                id: 4,
                title: "Coffee Beans",
                image:
                  "https://images.unsplash.com/photo-1447933601403-0c6688de566e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
              },
              {
                id: 5,
                title: "Latte Art",
                image:
                  "https://images.unsplash.com/photo-1572442388796-11668a67e53d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
              },
              {
                id: 6,
                title: "Cozy Corner",
                image:
                  "https://images.unsplash.com/photo-1559925393-8be0ec4767c8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
              },
            ].map((item) => (
              <div
                key={item.id}
                className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300 group"
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-white font-semibold text-lg drop-shadow-lg">
                      {item.title}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <p className="text-gray-600 mb-4">{dict.gallery.subtitle}</p>
            <div className="flex justify-center gap-4">
              <a
                href="#"
                className="flex items-center gap-2 text-amber-700 hover:text-amber-800"
              >
                <Instagram className="w-5 h-5" />
                <span>{dict.gallery.instagram}</span>
              </a>
              <a
                href="#"
                className="flex items-center gap-2 text-amber-700 hover:text-amber-800"
              >
                <Facebook className="w-5 h-5" />
                <span>{dict.gallery.facebook}</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-800 text-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2
            className="text-4xl font-bold text-center mb-8"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            {dict.contact.title}
          </h2>
          <p
            className="text-xl text-center mb-12 text-gray-300"
            style={{ fontFamily: "Lora, serif" }}
          >
            {dict.contact.subtitle}
          </p>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <ContactForm dict={dict as unknown as Dictionary} />

            {/* Contact Info & Social */}
            <div className="space-y-8">
              <div className="bg-gray-700 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4">
                  {dict.contact.info.title}
                </h3>
                <div className="space-y-3 text-gray-300">
                  <p>{dict.contact.info.phone}</p>
                  <p>{dict.contact.info.email}</p>
                  <p>{dict.contact.info.address}</p>
                </div>
              </div>

              <div className="bg-gray-700 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4">
                  {dict.contact.social.title}
                </h3>
                <div className="space-y-3">
                  <a
                    href="#"
                    className="block text-amber-400 hover:text-amber-300"
                  >
                    {dict.contact.social.instagram}
                  </a>
                  <a
                    href="#"
                    className="block text-amber-400 hover:text-amber-300"
                  >
                    {dict.contact.social.facebook}
                  </a>
                  <a
                    href="#"
                    className="block text-amber-400 hover:text-amber-300"
                  >
                    {dict.contact.social.tripadvisor}
                  </a>
                </div>
              </div>

              <div className="bg-amber-600 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4">
                  {dict.contact.events.title}
                </h3>
                <p className="text-gray-100 mb-4">
                  {dict.contact.events.description}
                </p>
                <button className="bg-white text-amber-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                  {dict.contact.events.button}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h3
            className="text-2xl font-bold mb-4"
            style={{ fontFamily: "Dancing Script, cursive" }}
          >
            {dict.hero.title}
          </h3>
          <p
            className="text-gray-400 mb-6"
            style={{ fontFamily: "Lora, serif" }}
          >
            {dict.footer.description}
          </p>
          <div className="flex justify-center gap-6 mb-6">
            <a href="#" className="text-gray-400 hover:text-white">
              {dict.footer.privacy}
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              {dict.footer.terms}
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              {dict.footer.accessibility}
            </a>
          </div>
          <p className="text-gray-500 text-sm">{dict.footer.copyright}</p>
        </div>
      </footer>
    </main>
  );
}
