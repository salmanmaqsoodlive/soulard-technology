import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'About | Soulard Technology',
  description: 'Learn about Soulard Technology — experienced security consultants specializing in K-12 electronic access control across Florida, Michigan, Illinois, Missouri, Indiana, and Ohio.',
}

export default function About() {
  return (
    <main className="bg-navy min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1920&q=80"
            alt="Security technology"
            fill
            className="object-cover opacity-20 grayscale brightness-75"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-10 bg-electric-cyan" />
            <span className="font-display text-electric-cyan text-xs tracking-[0.4em] uppercase">About Us</span>
          </div>
          <h1 className="font-display text-5xl md:text-7xl text-gray-900 uppercase tracking-wider mb-6">
            Who We Are
          </h1>
        </div>
      </section>

      {/* Story */}
      <section className="py-16 bg-navy">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-display text-3xl md:text-4xl text-gray-900 uppercase tracking-wider mb-6">
                Our <span className="gradient-text">Mission</span>
              </h2>
              <p className="text-steel-silver leading-relaxed mb-5">
                Soulard Technology was founded with a singular purpose: to make enterprise-grade security accessible and affordable for K-12 educational institutions. We recognized that schools were being underserved — either paying too much for complex systems, or settling for inadequate security that put students and staff at risk.
              </p>
              <p className="text-steel-silver leading-relaxed mb-5">
                Our team brings decades of combined experience in electronic access control, security system design, and institutional safety planning. We partner with leading access control platforms to provide unbiased consulting that prioritizes your institution's specific needs.
              </p>
              <p className="text-steel-silver leading-relaxed">
                Today, we proudly serve K-12 institutions across six states — Florida, Michigan, Illinois, Missouri, Indiana, and Ohio — helping districts create safer learning environments without sacrificing their budgets.
              </p>
            </div>
            <div className="relative">
              <Image
                src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=900&q=80"
                alt="Security consulting team"
                width={600}
                height={450}
                className="object-cover w-full"
              />
              <div className="absolute -bottom-4 -right-4 glass p-4 border border-electric-blue/20">
                <div className="font-display text-electric-cyan text-2xl">15+</div>
                <div className="text-steel-silver text-xs mt-1">Years Combined Experience</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-navy-800">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <span className="font-display text-electric-cyan text-xs tracking-[0.4em] uppercase block mb-3">What Drives Us</span>
            <h2 className="font-display text-3xl text-gray-900 uppercase tracking-wider">Core Values</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 text-electric-blue" stroke="currentColor" strokeWidth="1.5">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M9 12l2 2 4-4" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                ),
                title: 'Security First',
                desc: 'Student and staff safety drives every recommendation we make.',
              },
              {
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 text-electric-blue" stroke="currentColor" strokeWidth="1.5">
                    <path d="M9 18h6M10 22h4M12 2a7 7 0 0 1 7 7c0 2.5-1.3 4.7-3.3 6H8.3A6.98 6.98 0 0 1 5 9a7 7 0 0 1 7-7z" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                ),
                title: 'Innovation',
                desc: 'We stay ahead of emerging technologies to bring you the best solutions.',
              },
              {
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 text-electric-blue" stroke="currentColor" strokeWidth="1.5">
                    <line x1="12" y1="1" x2="12" y2="23" strokeLinecap="round"/>
                    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" strokeLinecap="round"/>
                  </svg>
                ),
                title: 'Budget Conscious',
                desc: 'Maximum security impact within your institutional budget constraints.',
              },
              {
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 text-electric-blue" stroke="currentColor" strokeWidth="1.5">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" strokeLinecap="round" strokeLinejoin="round"/>
                    <circle cx="9" cy="7" r="4" strokeLinecap="round"/>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                ),
                title: 'Partnership',
                desc: 'Long-term relationships built on trust, transparency, and results.',
              },
            ].map((v) => (
              <div key={v.title} className="bg-white border border-red-200 p-6 text-center">
                <div className="inline-flex items-center justify-center w-10 h-10 bg-red-50 border border-red-200 mb-4">
                  {v.icon}
                </div>
                <h3 className="font-display text-gray-900 text-sm uppercase tracking-wider mb-2">{v.title}</h3>
                <p className="text-steel-silver text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-20 bg-navy">
        <div className="container mx-auto px-6 text-center">
          <h2 className="font-display text-3xl text-gray-900 uppercase tracking-wider mb-4">Service Areas</h2>
          <p className="text-steel-silver mb-10">We proudly serve K-12 institutions across six states</p>
          <div className="flex flex-wrap justify-center gap-4">
            {['Florida', 'Michigan', 'Illinois', 'Missouri', 'Indiana', 'Ohio'].map((state) => (
              <div key={state} className="glass px-8 py-4 border border-electric-blue/15">
                <div className="font-display text-electric-cyan text-sm uppercase tracking-widest">{state}</div>
              </div>
            ))}
          </div>
          <div className="mt-12">
            <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-electric-blue text-white font-body font-semibold text-sm uppercase tracking-widest hover:bg-electric-blue/90 transition-all shadow-neon-blue">
              Schedule a Consultation
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
