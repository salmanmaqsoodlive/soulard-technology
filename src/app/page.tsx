'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

function AnimatedCounter({ target, suffix = '', prefix = '' }: { target: number; suffix?: string; prefix?: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })

  useEffect(() => {
    if (!inView) return
    let start = 0
    const duration = 2000
    const step = (timestamp: number) => {
      if (!start) start = timestamp
      const progress = Math.min((timestamp - start) / duration, 1)
      const ease = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(ease * target))
      if (progress < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }, [inView, target])

  return <span ref={ref}>{prefix}{count.toLocaleString()}{suffix}</span>
}

const stats = [
  { value: 15, suffix: '+', label: 'Years Experience', icon: '🛡' },
  { value: 200, suffix: '+', label: 'Institutions Secured', icon: '🏫' },
  { value: 6, suffix: '', label: 'States Served', icon: '📍' },
  { value: 98, suffix: '%', label: 'Client Satisfaction', icon: '⭐' },
]

const services = [
  {
    title: 'Access Control Design',
    description: 'Custom electronic access control system design tailored for K-12 facilities, budgets, and safety requirements.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
        <rect x="3" y="11" width="18" height="11" rx="2" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M7 11V7a5 5 0 0 1 10 0v4" stroke="currentColor" strokeWidth="1.5"/>
        <circle cx="12" cy="16" r="1" fill="currentColor"/>
      </svg>
    ),
  },
  {
    title: 'Security Consulting',
    description: 'Expert guidance on security management systems, platform selection, and implementation strategy.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    title: 'System Integration',
    description: 'Seamless integration of access control with existing security infrastructure and building systems.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
        <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    title: 'Training & Support',
    description: 'Comprehensive training programs for administrators, security personnel, and technical staff.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
        <path d="M12 20h9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z" stroke="currentColor" strokeWidth="1.5"/>
      </svg>
    ),
  },
  {
    title: 'Compliance Assessment',
    description: 'Security audits and compliance reviews to meet state, federal, and district safety requirements.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
        <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2" stroke="currentColor" strokeWidth="1.5"/>
        <rect x="9" y="3" width="6" height="4" rx="2" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    title: 'Budget Optimization',
    description: 'Strategic planning to maximize security effectiveness while staying within institutional budgets.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
        <line x1="12" y1="1" x2="12" y2="23" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
]

const serviceAreas = ['Florida', 'Michigan', 'Illinois', 'Missouri', 'Indiana', 'Ohio']

export default function Home() {
  const heroRef = useRef<HTMLElement>(null)
  const statsRef = useRef<HTMLDivElement>(null)
  const [heroLoaded, setHeroLoaded] = useState(false)

  useEffect(() => {
    setHeroLoaded(true)
  }, [])

  return (
    <main className="overflow-x-hidden bg-navy">
      <Navbar />

      {/* HERO */}
      <section ref={heroRef} className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1562774053-701939374585?w=1920&q=80"
            alt="School campus exterior"
            fill
            className="object-cover opacity-30 grayscale brightness-75"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-white/15 to-red-50/10" />
        </div>

        {/* Grid overlay */}
        <div
          className="absolute inset-0 z-[1] opacity-40"
          style={{
            backgroundImage: 'linear-gradient(rgba(220,38,38,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(220,38,38,0.06) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />

        {/* Animated glow orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-electric-blue/10 rounded-full blur-3xl animate-pulse-slow z-[1]" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-electric-cyan/8 rounded-full blur-3xl animate-pulse-slow z-[1]" style={{ animationDelay: '2s' }} />

        {/* Content */}
        <div className="relative z-[2] container mx-auto px-6 pt-32">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={heroLoaded ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex items-center gap-3 mb-8"
            >
              <div className="h-px w-12 bg-electric-cyan" />
              <span className="font-display text-electric-cyan text-xs tracking-[0.4em] uppercase">K-12 Security Specialists</span>
            </motion.div>

            <div className="overflow-hidden mb-4">
              <motion.h1
                initial={{ y: 100 }}
                animate={heroLoaded ? { y: 0 } : {}}
                transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
                className="font-display text-6xl sm:text-7xl md:text-8xl text-gray-900 uppercase leading-tight tracking-wider"
              >
                Securing
              </motion.h1>
            </div>
            <div className="overflow-hidden mb-8">
              <motion.h1
                initial={{ y: 100 }}
                animate={heroLoaded ? { y: 0 } : {}}
                transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.45 }}
                className="font-display text-6xl sm:text-7xl md:text-8xl uppercase leading-tight tracking-wider gradient-text"
              >
                The Future
              </motion.h1>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={heroLoaded ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="text-steel-silver text-lg md:text-xl max-w-2xl leading-relaxed mb-10"
            >
              Providing security management system consulting, training and support on various electronic access control platforms. We specialize in the K-12 education market with a business model that allows our clients to be more self-contained — improving security needs while staying within their budget requirements.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={heroLoaded ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-electric-blue hover:bg-electric-blue/90 text-white font-body font-semibold text-sm uppercase tracking-widest transition-all shadow-neon-blue hover:shadow-neon-cyan hover:-translate-y-0.5"
              >
                Get a Free Consultation
                <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4 ml-2">
                  <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center px-8 py-4 border border-gray-300 text-gray-600 hover:text-gray-900 hover:border-electric-blue/50 font-body font-medium text-sm uppercase tracking-widest transition-all"
              >
                View Services
              </Link>
            </motion.div>
          </div>

          {/* Service area pills */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={heroLoaded ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 1.1 }}
            className="flex flex-wrap gap-2 mt-16"
          >
            {serviceAreas.map((state, i) => (
              <span
                key={state}
                className="px-4 py-1.5 border border-electric-blue/20 text-electric-cyan/70 text-xs font-display tracking-[0.2em] uppercase"
              >
                {state}
              </span>
            ))}
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-[2] flex flex-col items-center gap-2"
        >
          <span className="font-display text-electric-cyan/40 text-xs tracking-widest uppercase">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-px h-8 bg-gradient-to-b from-electric-cyan/40 to-transparent"
          />
        </motion.div>
      </section>

      {/* STATS */}
      <section className="py-20 bg-red-50 border-y border-red-200/60 relative overflow-hidden">
        <div className="absolute inset-0 bg-glow-radial opacity-50" />
        <div ref={statsRef} className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="text-center"
              >
                <div className="text-2xl mb-2">{stat.icon}</div>
                <div className="font-display text-4xl md:text-5xl text-electric-cyan mb-2">
                  <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                </div>
                <div className="font-body text-steel-silver text-sm tracking-wide">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-24 bg-navy relative">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-16"
          >
            <span className="font-display text-electric-cyan text-xs tracking-[0.4em] uppercase block mb-4">What We Do</span>
            <h2 className="font-display text-4xl md:text-5xl text-gray-900 uppercase tracking-wider mb-4">
              Our Services
            </h2>
            <div className="w-16 h-px bg-electric-blue mx-auto" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                whileHover={{ y: -6, boxShadow: '0 20px 60px rgba(220,38,38,0.12)' }}
                className="glass p-7 rounded cursor-pointer group"
              >
                <div className="w-12 h-12 flex items-center justify-center bg-electric-blue/10 text-electric-cyan mb-5 group-hover:bg-electric-blue/20 transition-colors">
                  {service.icon}
                </div>
                <h3 className="font-display text-gray-900 text-lg uppercase tracking-wider mb-3">{service.title}</h3>
                <p className="font-body text-steel-silver text-sm leading-relaxed">{service.description}</p>
                <div className="mt-5 flex items-center gap-2 text-electric-cyan/0 group-hover:text-electric-cyan/80 transition-colors text-xs font-display tracking-widest uppercase">
                  <span>Learn More</span>
                  <svg viewBox="0 0 24 24" fill="none" className="w-3 h-3"><path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2"/></svg>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* INDUSTRIES / K-12 FOCUS */}
      <section className="py-24 bg-navy-800 relative overflow-hidden">
        <div className="absolute inset-0 opacity-80">
          <Image
            src="https://images.unsplash.com/photo-1588072432836-e10032774350?w=1920&q=80"
            alt="School hallway"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-navy-800/50" />
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="font-display text-electric-cyan text-xs tracking-[0.4em] uppercase block mb-4">Primary Market</span>
              <h2 className="font-display text-4xl md:text-5xl text-gray-900 uppercase tracking-wider mb-6">
                K-12 Education<br />
                <span className="gradient-text">Security Experts</span>
              </h2>
              <p className="text-steel-silver leading-relaxed mb-6">
                We understand the unique security challenges facing today's educational institutions. From elementary schools to high schools, Soulard Technology delivers comprehensive access control solutions that protect students and staff while respecting budget constraints.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  'Budget-conscious security solutions',
                  'Compliance with state safety mandates',
                  'Scalable for growing districts',
                  'Minimal disruption during implementation',
                  'Ongoing training for all staff levels',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-steel-silver text-sm">
                    <div className="w-1.5 h-1.5 bg-electric-cyan rounded-full flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                href="/industries"
                className="inline-flex items-center gap-2 text-electric-cyan text-sm font-display uppercase tracking-widest hover:text-gray-900 transition-colors"
              >
                Explore K-12 Solutions
                <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4"><path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2"/></svg>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative rounded overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1573164713988-8665fc963095?w=1200&q=80"
                  alt="Security consultant meeting"
                  width={600}
                  height={450}
                  className="object-cover w-full"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-100/60 via-transparent to-transparent" />
              </div>
              {/* Floating stat card */}
              <div className="absolute -bottom-6 -left-6 glass p-5 rounded border border-electric-blue/20">
                <div className="font-display text-electric-cyan text-3xl">98%</div>
                <div className="text-steel-silver text-xs mt-1">Client Satisfaction Rate</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SERVICE AREAS */}
      <section className="py-20 bg-navy relative">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-display text-3xl md:text-4xl text-gray-900 uppercase tracking-wider mb-4">
              Service Areas
            </h2>
            <p className="text-steel-silver">Proudly serving K-12 institutions across six states</p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {serviceAreas.map((state, i) => (
              <motion.div
                key={state}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                whileHover={{ scale: 1.05, borderColor: 'rgba(220,38,38,0.4)' }}
                className="glass p-6 rounded text-center cursor-pointer border border-electric-blue/10"
              >
                <div className="font-display text-electric-cyan text-lg uppercase tracking-wider">{state}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIAL */}
      <section className="py-20 bg-red-50 border-y border-red-200/40">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <div className="text-electric-cyan/30 text-8xl font-display leading-none mb-4">"</div>
            <p className="font-body text-xl text-steel-silver leading-relaxed mb-8 italic">
              Soulard Technology transformed how our district approaches security. Their budget-conscious approach delivered enterprise-grade access control across all 12 of our facilities.
            </p>
            <div className="flex items-center justify-center gap-4">
              <div className="w-12 h-12 rounded-full bg-electric-blue/20 flex items-center justify-center text-electric-cyan font-display">JD</div>
              <div className="text-left">
                <div className="text-gray-900 font-semibold text-sm">James Davidson</div>
                <div className="text-steel-silver text-xs">Director of Safety, Metro School District</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-navy relative overflow-hidden">
        <div className="absolute inset-0 bg-glow-radial opacity-30" />
        <div className="relative z-10 container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-4xl md:text-6xl text-gray-900 uppercase tracking-wider mb-6">
              Ready to Secure<br />
              <span className="gradient-text">Your Institution?</span>
            </h2>
            <p className="text-steel-silver text-lg mb-10 max-w-xl mx-auto">
              Get a free security assessment and consultation for your K-12 facility.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 px-10 py-5 bg-electric-blue hover:bg-electric-blue/90 text-white font-display uppercase tracking-widest text-sm transition-all shadow-neon-blue hover:shadow-neon-cyan hover:-translate-y-1"
            >
              Schedule Free Assessment
              <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4"><path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2"/></svg>
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
