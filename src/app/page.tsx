"use client";

import {
  Coffee,
  MapPin,
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
import enDict from "../../dictionaries/en.json";
import type { Dictionary } from "../../lib/dictionary";
import Image from "next/image";

interface MenuItem {
  name: string;
  price: string;
  description: string;
  category: string;
  calories?: string;
}

export default function Home() {
  const dict: Dictionary = enDict;
  return (
    <main className="min-h-screen">
      <Navigation locale="en" dict={dict} />

      {/* Hero Section with Parallax */}
      <ParallaxHero dict={dict} />

      {/* About Section */}
      <section id="about" className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2
                className="text-4xl font-bold text-gray-800 mb-6"
                style={{ fontFamily: "Playfair Display, serif" }}
              >
                Our Story
              </h2>
              <p
                className="text-lg text-gray-600 dark:text-wh mb-6"
                style={{ fontFamily: "Lora, serif" }}
              >
                BEIKA is more than just a coffee shop—it&apos;s a haven for
                women in Riyadh. Founded with the vision of creating a safe,
                welcoming space where women can enjoy exceptional coffee and
                connect with each other.
              </p>
              <p
                className="text-lg text-gray-600 mb-6"
                style={{ fontFamily: "Lora, serif" }}
              >
                We&apos;re committed to ethical coffee sourcing, working with
                local certified roasters to bring you the finest origin coffee.
                Our menu features plant-based options and vegan desserts,
                catering to health-conscious customers.
              </p>
              <div className="flex items-center gap-4 text-amber-700">
                <Coffee className="w-6 h-6" />
                <span
                  className="font-semibold"
                  style={{ fontFamily: "Cormorant Garamond, serif" }}
                >
                  Ethically sourced specialty coffee
                </span>
              </div>
            </div>
            <div className="bg-amber-50 p-8 rounded-lg">
              <h3
                className="text-2xl font-bold text-gray-800 mb-4"
                style={{ fontFamily: "Playfair Display, serif" }}
              >
                What Makes Us Special
              </h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <Heart className="w-5 h-5 text-amber-600" />
                  <span style={{ fontFamily: "Source Sans Pro, sans-serif" }}>
                    Women-only safe space
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <Coffee className="w-5 h-5 text-amber-600" />
                  <span style={{ fontFamily: "Source Sans Pro, sans-serif" }}>
                    Specialty coffee & ethically sourced beans
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-green-600 font-bold">🌱</span>
                  <span style={{ fontFamily: "Source Sans Pro, sans-serif" }}>
                    Vegan-friendly menu with plant-based options
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-amber-600 font-bold">✨</span>
                  <span style={{ fontFamily: "Source Sans Pro, sans-serif" }}>
                    Cozy wabi-sabi aesthetic
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
              Why Choose BEIKA?
            </h2>
            <p
              className="text-lg text-gray-600 max-w-2xl mx-auto"
              style={{ fontFamily: "Lora, serif" }}
            >
              Experience the perfect blend of exceptional coffee, welcoming
              atmosphere, and women-focused hospitality
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
                Safe Space
              </h3>
              <p
                className="text-gray-600"
                style={{ fontFamily: "Source Sans Pro, sans-serif" }}
              >
                Women-only environment where you can relax, work, and connect
                freely
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
                Premium Coffee
              </h3>
              <p
                className="text-gray-600"
                style={{ fontFamily: "Source Sans Pro, sans-serif" }}
              >
                Ethically sourced, expertly roasted specialty coffee from around
                the world
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
                Vegan Options
              </h3>
              <p
                className="text-gray-600"
                style={{ fontFamily: "Source Sans Pro, sans-serif" }}
              >
                Delicious plant-based menu with gluten-free and vegan-friendly
                choices
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
                Community
              </h3>
              <p
                className="text-gray-600"
                style={{ fontFamily: "Source Sans Pro, sans-serif" }}
              >
                Connect with like-minded women in a supportive and welcoming
                atmosphere
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
      <Testimonials dict={dict} />

      {/* CTA Section */}
      <CTA dict={dict} />

      {/* Hours & Location */}
      <section id="hours" className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Hours */}
            <div>
              <h2 className="text-4xl font-bold text-gray-800 mb-8">
                Opening Hours
              </h2>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-3 border-b border-gray-200">
                  <span className="font-medium">Monday - Thursday</span>
                  <span className="text-amber-700">7:00 AM - 10:30 PM</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-200">
                  <span className="font-medium">Friday - Saturday</span>
                  <span className="text-amber-700">4:00 PM - 11:00 PM</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-200">
                  <span className="font-medium">Sunday</span>
                  <span className="text-amber-700">7:00 AM - 10:30 PM</span>
                </div>
              </div>

              <div className="mt-8 p-6 bg-amber-50 dark:bg-gray-700 rounded-lg">
                <h3 className="font-bold text-lg mb-4 text-gray-800 dark:text-white">
                  Perfect for:
                </h3>
                <ul className="space-y-2 text-gray-800 dark:text-white">
                  <li>• Morning coffee runs</li>
                  <li>• Afternoon study sessions</li>
                  <li>• Evening gatherings with friends</li>
                  <li>• Weekend brunches</li>
                </ul>
              </div>
            </div>

            {/* Location */}
            <div>
              <h2 className="text-4xl font-bold text-gray-800 mb-8">
                Visit Us
              </h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-amber-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg">Address</h3>
                    <p className="text-gray-600">
                      Imam Saud Bin Abdulaziz Bin Mohammed Rd
                      <br />
                      Al Mughrizat, Riyadh 12473
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Phone className="w-6 h-6 text-amber-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg">Phone</h3>
                    <a
                      href="tel:0582326617"
                      className="text-amber-700 hover:text-amber-800"
                    >
                      058 232 6617
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Mail className="w-6 h-6 text-amber-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg">Email</h3>
                    <a
                      href="mailto:info@beika.com"
                      className="text-amber-700 hover:text-amber-800"
                    >
                      info@beika.com
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-6 bg-gray-100 dark:bg-gray-700 rounded-lg">
                <h3 className="font-bold text-lg mb-4 text-gray-800 dark:text-white">
                  Getting Here
                </h3>
                <ul className="space-y-2 text-gray-800 dark:text-white">
                  <li>• Free parking available</li>
                  <li>• Accessible by public transport</li>
                  <li>• Located in a safe, well-lit area</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 bg-amber-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
            Gallery
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                id: 1,
                title: "Artisan Coffee",
                image:
                  "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400&h=300&fit=crop&crop=center",
              },
              {
                id: 2,
                title: "Cozy Interior",
                image:
                  "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=400&h=300&fit=crop&crop=center",
              },
              {
                id: 3,
                title: "Vegan Treats",
                image:
                  "https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=400&h=300&fit=crop&crop=center",
              },
              {
                id: 4,
                title: "Coffee Art",
                image:
                  "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop&crop=center",
              },
              {
                id: 5,
                title: "Study Space",
                image:
                  "https://images.unsplash.com/photo-1521017432531-fbd92d768814?w=400&h=300&fit=crop&crop=center",
              },
              {
                id: 6,
                title: "Women's Gathering",
                image:
                  "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=400&h=300&fit=crop&crop=center",
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
            <p className="text-gray-600 mb-4">
              Follow us on social media for more beautiful moments
            </p>
            <div className="flex justify-center gap-4">
              <a
                href="#"
                className="flex items-center gap-2 text-amber-700 hover:text-amber-800"
              >
                <Instagram className="w-5 h-5" />
                <span>Instagram</span>
              </a>
              <a
                href="#"
                className="flex items-center gap-2 text-amber-700 hover:text-amber-800"
              >
                <Facebook className="w-5 h-5" />
                <span>Facebook</span>
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
            Get in Touch
          </h2>
          <p
            className="text-xl text-center mb-12 text-gray-300"
            style={{ fontFamily: "Lora, serif" }}
          >
            Have questions? Want to make a reservation? We&apos;d love to hear
            from you!
          </p>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <ContactForm dict={dict} />

            {/* Contact Info & Social */}
            <div className="space-y-8">
              <div className="bg-gray-700 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4">Contact Info</h3>
                <div className="space-y-3 text-gray-300">
                  <p>📞 058 232 6617</p>
                  <p>📧 info@beika.com</p>
                  <p>
                    📍 Imam Saud Bin Abdulaziz Bin Mohammed Rd, Al Mughrizat,
                    Riyadh 12473
                  </p>
                </div>
              </div>

              <div className="bg-gray-700 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4">Follow Us</h3>
                <div className="space-y-3">
                  <a
                    href="#"
                    className="block text-amber-400 hover:text-amber-300"
                  >
                    📸 Instagram
                  </a>
                  <a
                    href="#"
                    className="block text-amber-400 hover:text-amber-300"
                  >
                    📘 Facebook
                  </a>
                  <a
                    href="#"
                    className="block text-amber-400 hover:text-amber-300"
                  >
                    🌟 TripAdvisor
                  </a>
                </div>
              </div>

              <div className="bg-amber-600 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4">Special Events</h3>
                <p className="text-gray-100 mb-4">
                  Hosting a women&apos;s gathering or workshop? We offer private
                  events and catering services.
                </p>
                <button className="bg-white text-amber-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                  Inquire About Events
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
            BEIKA
          </h3>
          <p
            className="text-gray-400 mb-6"
            style={{ fontFamily: "Lora, serif" }}
          >
            Women-only specialty coffee & vegan treats in the heart of Riyadh
          </p>
          <div className="flex justify-center gap-6 mb-6">
            <a href="#" className="text-gray-400 hover:text-white">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              Terms of Service
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              Accessibility
            </a>
          </div>
          <p className="text-gray-500 text-sm">
            © 2024 BEIKA. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}
