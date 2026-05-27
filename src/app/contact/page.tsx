"use client";

import { useState } from "react";
import type { Metadata } from "next";
import { motion } from "framer-motion";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BrandsMarquee from "@/components/BrandsMarquee";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    state: "",
    message: "",
    service: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const res = await fetch(
        "https://formsubmit.co/ajax/greg.hodge@soulardtechnology.net",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(form),
        },
      );
      const data = await res.json();
      if (data.success !== "true" && data.success !== true)
        throw new Error(data.message || "Failed to send message");
      setSubmitted(true);
    } catch (err: any) {
      setError(err.message || "Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="bg-navy min-h-screen">
      <Navbar />

      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1920&q=80"
            alt="Security team collaboration"
            fill
            className="object-cover opacity-20 grayscale brightness-75"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-10 bg-electric-cyan" />
            <span className="font-display text-electric-cyan text-xs tracking-[0.4em] uppercase">
              Get In Touch
            </span>
          </div>
          <h1 className="font-display text-5xl md:text-7xl text-gray-900 uppercase tracking-wider mb-4">
            Contact Us
          </h1>
          <p className="text-steel-silver text-lg max-w-xl">
            Ready to improve security at your school, university, or government facility? Let's start the conversation.
          </p>
        </div>
      </section>

      <section className="py-16 bg-navy">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Form */}
            <div>
              {!submitted ? (
                <motion.form
                  onSubmit={handleSubmit}
                  className="space-y-5"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="font-display text-electric-cyan text-xs tracking-widest uppercase block mb-2">
                        Full Name *
                      </label>
                      <input
                        required
                        type="text"
                        value={form.name}
                        onChange={(e) =>
                          setForm({ ...form, name: e.target.value })
                        }
                        className="w-full bg-white border border-gray-200 focus:border-electric-cyan/50 text-gray-900 px-4 py-3 outline-none transition-colors text-sm"
                        placeholder="John Smith"
                      />
                    </div>
                    <div>
                      <label className="font-display text-electric-cyan text-xs tracking-widest uppercase block mb-2">
                        Email *
                      </label>
                      <input
                        required
                        type="email"
                        value={form.email}
                        onChange={(e) =>
                          setForm({ ...form, email: e.target.value })
                        }
                        className="w-full bg-white border border-gray-200 focus:border-electric-cyan/50 text-gray-900 px-4 py-3 outline-none transition-colors text-sm"
                        placeholder="john@district.edu"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="font-display text-electric-cyan text-xs tracking-widest uppercase block mb-2">
                      Phone
                    </label>
                    <input
                      type="tel"
                      value={form.phone}
                      onChange={(e) =>
                        setForm({ ...form, phone: e.target.value })
                      }
                      className="w-full bg-white border border-gray-200 focus:border-electric-cyan/50 text-gray-900 px-4 py-3 outline-none transition-colors text-sm"
                      placeholder="(555) 000-0000"
                    />
                  </div>
                  <div>
                    <label className="font-display text-electric-cyan text-xs tracking-widest uppercase block mb-2">
                      State
                    </label>
                    <select
                      value={form.state}
                      onChange={(e) =>
                        setForm({ ...form, state: e.target.value })
                      }
                      className="w-full bg-white border border-gray-200 focus:border-electric-cyan/50 text-gray-900 px-4 py-3 outline-none transition-colors text-sm"
                    >
                      <option value="">Select State</option>
                      {[
                        "Florida",
                        "Michigan",
                        "Missouri",
                      ].map((s) => (
                        <option key={s} value={s}>
                          {s}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="font-display text-electric-cyan text-xs tracking-widest uppercase block mb-2">
                      Service Needed
                    </label>
                    <select
                      value={form.service}
                      onChange={(e) =>
                        setForm({ ...form, service: e.target.value })
                      }
                      className="w-full bg-white border border-gray-200 focus:border-electric-cyan/50 text-gray-900 px-4 py-3 outline-none transition-colors text-sm"
                    >
                      <option value="">Select a Service</option>
                      <option>Access Control Design</option>
                      <option>Security Consulting</option>
                      <option>System Integration</option>
                      <option>Training & Support</option>
                      <option>Compliance Assessment</option>
                      <option>K-12 Education</option>
                      <option>Higher Education</option>
                      <option>Government / Municipal</option>
                    </select>
                  </div>
                  <div>
                    <label className="font-display text-electric-cyan text-xs tracking-widest uppercase block mb-2">
                      Message *
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={form.message}
                      onChange={(e) =>
                        setForm({ ...form, message: e.target.value })
                      }
                      className="w-full bg-white border border-gray-200 focus:border-electric-cyan/50 text-gray-900 px-4 py-3 outline-none transition-colors text-sm resize-none"
                      placeholder="Tell us about your institution and security needs..."
                    />
                  </div>
                  {error && (
                    <p className="text-red-500 text-sm border border-red-400/30 bg-red-500/10 px-4 py-3">
                      {error}
                    </p>
                  )}
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-4 bg-electric-blue hover:bg-electric-blue/90 disabled:opacity-60 disabled:cursor-not-allowed text-white font-display uppercase tracking-widest text-sm transition-all shadow-neon-blue hover:-translate-y-0.5"
                  >
                    {loading ? "Sending..." : "Send Message"}
                  </button>
                </motion.form>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="glass p-12 text-center"
                >
                  <div className="text-5xl mb-4">✅</div>
                  <h3 className="font-display text-gray-900 text-2xl uppercase tracking-wider mb-3">
                    Message Received
                  </h3>
                  <p className="text-steel-silver">
                    We'll respond within 24 business hours. Thank you for
                    reaching out.
                  </p>
                </motion.div>
              )}
            </div>

            {/* Info */}
            <div className="space-y-8">
              <div className="relative overflow-hidden rounded">
                <Image
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=900&q=80"
                  alt="Security consultation meeting"
                  width={600}
                  height={320}
                  className="object-cover w-full h-52"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/80 to-transparent flex items-end p-6">
                  <p className="font-display text-white text-sm uppercase tracking-wider">
                    Free Initial Consultation
                  </p>
                </div>
              </div>
              <div>
                <h2 className="font-display text-gray-900 text-2xl uppercase tracking-wider mb-4">
                  Get a Free Assessment
                </h2>
                <p className="text-steel-silver leading-relaxed">
                  Our initial consultation is completely free. We'll assess your
                  current security posture, discuss your goals, and provide
                  actionable recommendations — with no obligation.
                </p>
              </div>
              <div className="space-y-4">
                <div className="glass p-5">
                  <div className="font-display text-electric-cyan text-xs tracking-widest uppercase mb-2">
                    Service Areas
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "Florida",
                      "Michigan",
                      "Missouri",
                    ].map((s) => (
                      <span
                        key={s}
                        className="text-steel-silver text-sm border border-electric-blue/15 px-3 py-1"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="glass p-5">
                  <div className="font-display text-electric-cyan text-xs tracking-widest uppercase mb-2">
                    Response Time
                  </div>
                  <div className="text-gray-700 text-sm">
                    Within 24 business hours
                  </div>
                </div>
                <div className="glass p-5">
                  <div className="font-display text-electric-cyan text-xs tracking-widest uppercase mb-2">
                    Email
                  </div>
                  <a
                    href="mailto:greg.hodge@soulardesp.com"
                    className="text-electric-cyan hover:text-gray-900 transition-colors text-sm block"
                  >
                    greg.hodge@soulardesp.com
                  </a>
                  <a
                    href="mailto:taylor.hodge@soulardesp.com"
                    className="text-electric-cyan hover:text-gray-900 transition-colors text-sm block mt-1"
                  >
                    taylor.hodge@soulardesp.com
                  </a>
                </div>
                <div className="glass p-5">
                  <div className="font-display text-electric-cyan text-xs tracking-widest uppercase mb-2">
                    Phone
                  </div>
                  <a
                    href="tel:8664045519"
                    className="text-electric-cyan hover:text-gray-900 transition-colors text-sm"
                  >
                    866-404-5519
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <BrandsMarquee />
      <Footer />
    </main>
  );
}
