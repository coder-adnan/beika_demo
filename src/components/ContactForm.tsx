"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import type { Dictionary } from "../../lib/dictionary";

interface ContactFormProps {
  dict: Dictionary;
}

export default function ContactForm({ dict }: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setIsSubmitting(false);
    setIsSubmitted(true);

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
    }, 3000);
  };

  if (!dict) {
    return null;
  }

  return (
    <div className="bg-white rounded-lg shadow-lg p-8">
      <h3 className="text-2xl font-bold text-gray-800 mb-6">
        Send us a Message
      </h3>

      {isSubmitted ? (
        <div className="text-center py-8">
          <div className="text-green-600 text-6xl mb-4">✓</div>
          <h4 className="text-xl font-semibold text-gray-800 mb-2">
            Message Sent!
          </h4>
          <p className="text-gray-600">
            Thank you for contacting us. We&apos;ll get back to you soon!
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-800 dark:text-white mb-2"
              >
                Full Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                placeholder="Your full name"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-800 dark:text-white mb-2"
              >
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                placeholder="your.email@example.com"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-gray-800 dark:text-white mb-2"
              >
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                placeholder="+966 5X XXX XXXX"
              />
            </div>

            <div>
              <label
                htmlFor="subject"
                className="block text-sm font-medium text-gray-800 dark:text-white mb-2"
              >
                Subject *
              </label>
              <select
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
              >
                <option value="">Select a subject</option>
                <option value="general">General Inquiry</option>
                <option value="reservation">Table Reservation</option>
                <option value="events">Private Events</option>
                <option value="catering">Catering Services</option>
                <option value="feedback">Feedback</option>
                <option value="other">Other</option>
              </select>
            </div>
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-800 dark:text-white mb-2"
            >
              Message *
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={5}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
              placeholder="Tell us how we can help you..."
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-amber-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-amber-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            {isSubmitting ? (
              <>
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                Sending...
              </>
            ) : (
              <>
                <Send className="w-5 h-5" />
                Send Message
              </>
            )}
          </button>
        </form>
      )}

      <div className="mt-8 pt-8 border-t border-gray-200">
        <h4 className="font-semibold text-gray-800 mb-4">
          Other Ways to Reach Us
        </h4>
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <Phone className="w-5 h-5 text-amber-600" />
            <a
              href="tel:0582326617"
              className="text-gray-600 hover:text-amber-600"
            >
              058 232 6617
            </a>
          </div>
          <div className="flex items-center gap-3">
            <Mail className="w-5 h-5 text-amber-600" />
            <a
              href="mailto:info@beika.com"
              className="text-gray-600 hover:text-amber-600"
            >
              info@beika.com
            </a>
          </div>
          <div className="flex items-center gap-3">
            <MapPin className="w-5 h-5 text-amber-600" />
            <span className="text-gray-600">
              Imam Saud Bin Abdulaziz Bin Mohammed Rd, Al Mughrizat, Riyadh
              12473
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
