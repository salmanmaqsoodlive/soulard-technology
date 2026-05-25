'use client'

import { useState } from 'react'
import type { Metadata } from 'next'
import { motion } from 'framer-motion'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', phone: '', state: '', message: '', service: '' })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <main className="bg-navy min-h-screen">
      <Navbar />

      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-10 bg-electric-cyan" />
            <span className="font-display text-electric-cyan text-xs tracking-[0.4em] uppercase">Get In Touch</span>
          </div>
          <h1 className="font-display text-5xl md:text-7xl text-gray-900 uppercase tracking-wider mb-4">Contact Us</h1>
          <p className="text-steel-silver text-lg max-w-xl">
            Ready to improve security at your institution? Let's start the conversation.
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
                      <label className="font-display text-electric-cyan text-xs tracking-widest uppercase block mb-2">Full Name *</label>
                      <input
                        required
                        type="text"
                        value={form.name}
                        onChange={e => setForm({...form, name: e.target.value})}
                        className="w-full bg-white border border-gray-200 focus:border-electric-cyan/50 text-gray-900 px-4 py-3 outline-none transition-colors text-sm"
                        placeholder="John Smith"
                      />
                    </div>
                    <div>
                      <label className="font-display text-electric-cyan text-xs tracking-widest uppercase block mb-2">Email *</label>
                      <input
                        required
                        type="email"
                        value={form.email}
                        onChange={e => setForm({...form, email: e.target.value})}
                        className="w-full bg-white border border-gray-200 focus:border-electric-cyan/50 text-gray-900 px-4 py-3 outline-none transition-colors text-sm"
                        placeholder="john@district.edu"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="font-display text-electric-cyan text-xs tracking-widest uppercase block mb-2">Phone</label>
                    <input
                      type="tel"
                      value={form.phone}
                      onChange={e => setForm({...form, phone: e.target.value})}
                      className="w-full bg-white border border-gray-200 focus:border-electric-cyan/50 text-gray-900 px-4 py-3 outline-none transition-colors text-sm"
                      placeholder="(555) 000-0000"
                    />
                  </div>
                  <div>
                    <label className="font-display text-electric-cyan text-xs tracking-widest uppercase block mb-2">State</label>
                    <select
                      value={form.state}
                      onChange={e => setForm({...form, state: e.target.value})}
                      className="w-full bg-white border border-gray-200 focus:border-electric-cyan/50 text-gray-900 px-4 py-3 outline-none transition-colors text-sm"
                    >
                      <option value="">Select State</option>
                      {['Florida','Michigan','Illinois','Missouri','Indiana','Ohio'].map(s => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="font-display text-electric-cyan text-xs tracking-widest uppercase block mb-2">Service Needed</label>
                    <select
                      value={form.service}
                      onChange={e => setForm({...form, service: e.target.value})}
                      className="w-full bg-white border border-gray-200 focus:border-electric-cyan/50 text-gray-900 px-4 py-3 outline-none transition-colors text-sm"
                    >
                      <option value="">Select a Service</option>
                      <option>Access Control Design</option>
                      <option>Security Consulting</option>
                      <option>System Integration</option>
                      <option>Training & Support</option>
                      <option>Compliance Assessment</option>
                    </select>
                  </div>
                  <div>
                    <label className="font-display text-electric-cyan text-xs tracking-widest uppercase block mb-2">Message *</label>
                    <textarea
                      required
                      rows={5}
                      value={form.message}
                      onChange={e => setForm({...form, message: e.target.value})}
                      className="w-full bg-navy-700 border border-electric-blue/20 focus:border-electric-cyan/50 text-white px-4 py-3 outline-none transition-colors text-sm resize-none"
                      placeholder="Tell us about your institution and security needs..."
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full py-4 bg-electric-blue hover:bg-electric-blue/90 text-white font-display uppercase tracking-widest text-sm transition-all shadow-neon-blue hover:-translate-y-0.5"
                  >
                    Send Message
                  </button>
                </motion.form>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="glass p-12 text-center"
                >
                  <div className="text-5xl mb-4">✅</div>
                  <h3 className="font-display text-gray-900 text-2xl uppercase tracking-wider mb-3">Message Received</h3>
                  <p className="text-steel-silver">We'll respond within 24 business hours. Thank you for reaching out.</p>
                </motion.div>
              )}
            </div>

            {/* Info */}
            <div className="space-y-8">
              <div>
                <h2 className="font-display text-gray-900 text-2xl uppercase tracking-wider mb-4">Get a Free Assessment</h2>
                <p className="text-steel-silver leading-relaxed">
                  Our initial consultation is completely free. We'll assess your current security posture, discuss your goals, and provide actionable recommendations — with no obligation.
                </p>
              </div>
              <div className="space-y-4">
                <div className="glass p-5">
                  <div className="font-display text-electric-cyan text-xs tracking-widest uppercase mb-2">Service Areas</div>
                  <div className="flex flex-wrap gap-2">
                    {['Florida','Michigan','Illinois','Missouri','Indiana','Ohio'].map(s => (
                      <span key={s} className="text-steel-silver text-sm border border-electric-blue/15 px-3 py-1">{s}</span>
                    ))}
                  </div>
                </div>
                <div className="glass p-5">
                  <div className="font-display text-electric-cyan text-xs tracking-widest uppercase mb-2">Response Time</div>
                  <div className="text-gray-700 text-sm">Within 24 business hours</div>
                </div>
                <div className="glass p-5">
                  <div className="font-display text-electric-cyan text-xs tracking-widest uppercase mb-2">Email</div>
                  <a href="mailto:info@soulardtech.com" className="text-electric-cyan hover:text-gray-900 transition-colors text-sm">info@soulardtech.com</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
