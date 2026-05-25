import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Training & Support | Soulard Technology',
  description: 'Comprehensive training and support programs for electronic access control systems in K-12 institutions.',
}

const programs = [
  { title: 'Administrator Training', duration: '2 Days', level: 'All Levels', desc: 'Complete system management for security administrators. Covers user management, access scheduling, reporting, and emergency protocols.' },
  { title: 'End-User Certification', duration: '4 Hours', level: 'Beginner', desc: 'Essential training for front office staff, teachers, and building managers on daily access control operations.' },
  { title: 'IT Technical Training', duration: '3 Days', level: 'Advanced', desc: 'Deep-dive technical training for IT staff covering network configuration, system integration, and advanced troubleshooting.' },
  { title: 'Train the Trainer', duration: '5 Days', level: 'Advanced', desc: 'Certification program enabling your internal staff to train new employees and maintain ongoing training consistency.' },
  { title: 'Security Director Workshop', duration: '1 Day', level: 'Leadership', desc: 'Strategic training for security directors on policy development, compliance requirements, and incident response protocols.' },
]

const support = [
  { tier: 'Bronze', features: ['Business hours email support', 'Knowledge base access', 'Quarterly system review', 'Software update notifications'], price: 'Included' },
  { tier: 'Silver', features: ['Business hours phone & email', 'Priority response (4hr)', 'Semi-annual site visit', 'System health monitoring', 'User management assistance'], price: 'Custom Pricing' },
  { tier: 'Gold', features: ['24/7 emergency support', '2-hour emergency response', 'Monthly system review', 'Dedicated account manager', 'Unlimited training refreshers', 'Annual security audit'], price: 'Custom Pricing' },
]

export default function Training() {
  return (
    <main className="bg-navy min-h-screen">
      <Navbar />

      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-10 bg-electric-cyan" />
            <span className="font-display text-electric-cyan text-xs tracking-[0.4em] uppercase">Knowledge Transfer</span>
          </div>
          <h1 className="font-display text-5xl md:text-7xl text-gray-900 uppercase tracking-wider mb-4">Training &amp; Support</h1>
          <p className="text-steel-silver text-lg max-w-2xl">
            A system is only as effective as the people who use it. We ensure your team is confident, capable, and supported.
          </p>
        </div>
      </section>

      <section className="py-16 bg-navy">
        <div className="container mx-auto px-6">
          <h2 className="font-display text-3xl text-gray-900 uppercase tracking-wider mb-10">Training Programs</h2>
          <div className="space-y-5 mb-20">
            {programs.map((prog, i) => (
              <div key={prog.title} className="glass p-7 hover:border-electric-cyan/20 transition-all">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 items-center">
                  <div>
                    <h3 className="font-display text-gray-900 text-lg uppercase tracking-wider">{prog.title}</h3>
                  </div>
                  <div className="flex gap-4">
                    <div>
                      <div className="font-display text-electric-cyan text-xs tracking-widest uppercase mb-1">Duration</div>
                      <div className="text-steel-silver text-sm">{prog.duration}</div>
                    </div>
                    <div>
                      <div className="font-display text-electric-cyan text-xs tracking-widest uppercase mb-1">Level</div>
                      <div className="text-steel-silver text-sm">{prog.level}</div>
                    </div>
                  </div>
                  <div className="lg:col-span-2">
                    <p className="text-steel-silver text-sm leading-relaxed">{prog.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <h2 className="font-display text-3xl text-gray-900 uppercase tracking-wider mb-10">Support Tiers</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {support.map((tier) => (
              <div key={tier.tier} className={`p-7 ${tier.tier === 'Gold' ? 'bg-electric-blue/10 border-2 border-electric-cyan/30' : 'glass'}`}>
                <div className="font-display text-electric-cyan text-xs tracking-widest uppercase mb-2">{tier.tier} Support</div>
                <div className="font-display text-gray-900 text-sm mb-5">{tier.price}</div>
                <ul className="space-y-2">
                  {tier.features.map(f => (
                    <li key={f} className="flex items-center gap-2 text-steel-silver text-sm">
                      <div className="w-1.5 h-1.5 bg-electric-cyan/60 rounded-full" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link href="/contact" className="inline-flex items-center gap-3 px-10 py-5 bg-electric-blue text-white font-display uppercase tracking-widest text-sm hover:bg-electric-blue/90 transition-all shadow-neon-blue">
              Discuss Training Needs
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
