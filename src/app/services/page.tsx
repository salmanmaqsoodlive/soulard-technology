import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Services | Soulard Technology',
  description: 'Access control consulting, system integration, training, and support services for K-12 institutions.',
}

const services = [
  {
    num: '01',
    title: 'Access Control System Design',
    desc: 'We design comprehensive electronic access control systems tailored specifically for K-12 environments. Our designs balance security effectiveness with budget realities, ensuring every door, every zone, and every access point is optimized for your institution.',
    features: ['Site assessment and security audit', 'Multi-zone access planning', 'Platform-neutral recommendations', 'Budget optimization analysis', 'Future expansion planning'],
  },
  {
    num: '02',
    title: 'Security Management Consulting',
    desc: 'Expert consulting services covering security management systems selection, vendor evaluation, and implementation strategy. We navigate the complex landscape of access control platforms so you don\'t have to.',
    features: ['Platform comparison and evaluation', 'Vendor negotiation support', 'RFP development', 'Implementation roadmapping', 'ROI analysis'],
  },
  {
    num: '03',
    title: 'System Integration',
    desc: 'Seamlessly integrate new access control systems with your existing security infrastructure, building management systems, and district-wide networks.',
    features: ['Legacy system integration', 'Visitor management connectivity', 'CCTV and intercom integration', 'Emergency notification systems', 'Network infrastructure planning'],
  },
  {
    num: '04',
    title: 'Training & Certification',
    desc: 'Comprehensive training programs for security directors, IT staff, administrators, and daily operators. We ensure your team is confident and capable with every system we implement.',
    features: ['Administrator training', 'End-user training programs', 'Train-the-trainer certification', 'Custom training materials', 'Ongoing refresher sessions'],
  },
  {
    num: '05',
    title: 'Ongoing Support',
    desc: 'Dedicated post-implementation support to ensure your access control systems perform optimally year after year.',
    features: ['24/7 emergency support', 'Preventive maintenance programs', 'System performance monitoring', 'Software update management', 'Annual security reviews'],
  },
  {
    num: '06',
    title: 'Compliance Assessment',
    desc: 'Thorough security audits and compliance reviews to ensure your institution meets all applicable state, federal, and district safety requirements.',
    features: ['State safety mandate compliance', 'FERPA security considerations', 'Grant requirement alignment', 'Documentation support', 'Annual audit preparation'],
  },
]

export default function Services() {
  return (
    <main className="bg-navy min-h-screen">
      <Navbar />

      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-10 bg-electric-cyan" />
            <span className="font-display text-electric-cyan text-xs tracking-[0.4em] uppercase">What We Offer</span>
          </div>
          <h1 className="font-display text-5xl md:text-7xl text-gray-900 uppercase tracking-wider mb-4">Our Services</h1>
          <p className="text-steel-silver text-lg max-w-2xl">
            Comprehensive security consulting and access control solutions designed specifically for K-12 educational institutions.
          </p>
        </div>
      </section>

      <section className="py-16 bg-navy">
        <div className="container mx-auto px-6">
          <div className="space-y-6">
            {services.map((s, i) => (
              <div key={s.num} className="glass p-8 group hover:border-electric-cyan/20 transition-all">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  <div className="lg:col-span-2">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="font-display text-electric-cyan/30 text-4xl">{s.num}</span>
                      <h2 className="font-display text-2xl text-gray-900 uppercase tracking-wider">{s.title}</h2>
                    </div>
                    <p className="text-steel-silver leading-relaxed">{s.desc}</p>
                  </div>
                  <div>
                    <h4 className="font-display text-electric-cyan text-xs tracking-widest uppercase mb-4">Includes</h4>
                    <ul className="space-y-2">
                      {s.features.map((f) => (
                        <li key={f} className="flex items-center gap-2 text-steel-silver text-sm">
                          <div className="w-1.5 h-1.5 bg-electric-blue rounded-full flex-shrink-0" />
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Link href="/contact" className="inline-flex items-center gap-3 px-10 py-5 bg-electric-blue text-white font-display uppercase tracking-widest text-sm hover:bg-electric-blue/90 transition-all shadow-neon-blue">
              Discuss Your Needs
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
