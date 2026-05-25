'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/industries', label: 'Industries' },
  { href: '/training', label: 'Training' },
  { href: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-navy-900/90 backdrop-blur-xl border-b border-electric-blue/10 py-3'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="container mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-9 h-9 border-2 border-electric-blue rounded flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-electric-blue/10 group-hover:bg-electric-blue/20 transition-colors" />
              <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 text-electric-cyan z-10">
                <rect x="3" y="3" width="7" height="7" stroke="currentColor" strokeWidth="1.5"/>
                <rect x="14" y="3" width="7" height="7" stroke="currentColor" strokeWidth="1.5"/>
                <rect x="3" y="14" width="7" height="7" stroke="currentColor" strokeWidth="1.5"/>
                <rect x="14" y="14" width="7" height="7" fill="currentColor"/>
              </svg>
            </div>
            <div>
              <span className="font-display text-white text-lg tracking-widest uppercase">SOULARD</span>
              <span className="font-display text-electric-cyan text-xs block tracking-[0.3em] uppercase -mt-1">Technology</span>
            </div>
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`relative px-4 py-2 font-body text-sm font-medium tracking-wide transition-colors group ${
                  pathname === link.href ? 'text-electric-cyan' : 'text-steel-silver hover:text-white'
                }`}
              >
                {link.label}
                <span
                  className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-[1px] bg-electric-cyan transition-all duration-300 ${
                    pathname === link.href ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}
                />
              </Link>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <Link
              href="/contact"
              className="relative px-6 py-2.5 text-sm font-medium font-body text-white overflow-hidden group border border-electric-blue/50 rounded"
            >
              <span className="absolute inset-0 bg-electric-blue/0 group-hover:bg-electric-blue/20 transition-colors duration-300" />
              <span className="absolute inset-0 border border-electric-cyan/0 group-hover:border-electric-cyan/50 rounded transition-all duration-300" />
              <span className="relative z-10 tracking-wider uppercase text-xs">Get Consultation</span>
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden flex flex-col gap-1.5 p-2"
            aria-label="Toggle menu"
          >
            <motion.span
              animate={menuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
              className="w-6 h-0.5 bg-electric-cyan block transition-colors"
            />
            <motion.span
              animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
              className="w-6 h-0.5 bg-steel-silver block"
            />
            <motion.span
              animate={menuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
              className="w-6 h-0.5 bg-electric-cyan block"
            />
          </button>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-40 bg-navy-900/98 backdrop-blur-2xl flex flex-col items-center justify-center"
          >
            <div className="flex flex-col items-center gap-8">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.07 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="font-display text-4xl text-white hover:text-electric-cyan transition-colors tracking-widest uppercase"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                <Link
                  href="/contact"
                  onClick={() => setMenuOpen(false)}
                  className="mt-4 px-8 py-3 border border-electric-cyan text-electric-cyan font-body text-sm uppercase tracking-widest hover:bg-electric-cyan/10 transition-colors"
                >
                  Get Consultation
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
