import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import BrandsMarquee from '@/components/BrandsMarquee'
import ProductCard from '@/components/ProductCard'

export const metadata: Metadata = {
  title: 'Products | Soulard Technology',
  description: 'Access control hardware and security management software solutions for K-12 educational institutions.',
}

const products = [
  {
    title: 'Access Control Solutions',
    image: '/products/access-control-solutions.webp',
    bullets: [
      'Credentials - Proximity, Smart Cards, Fobs',
      'Multi-Technology, Proximity, and Magstripe Card Readers',
      'Biometric and Keypad Devices',
      'Hardwired Electronic Locks and Exit Device Trims',
      'Wireless Electronic Locks and Exit Device Trims',
      'WiFi Electronic Locks (Ideal for Classroom Security)',
      'Intelligent Locking Hardware',
    ],
  },
  {
    title: 'Hardware — Door Controls',
    image: '/products/hardware-door-controls.webp',
    bullets: [
      'Surface and Concealed Mechanical Closers',
      'ADA Automatic Door Operators',
      'Overhead Holders and Stops',
      'Wall Magnets',
    ],
  },
  {
    title: 'Hardware — Exit Devices',
    image: '/products/hardware-exit-devices.webp',
    bullets: [
      'Mechanical Exit Devices',
      'Alarmed Exit Devices',
      'Electrified EL and QEL Exit Devices',
      'Delayed Egress',
      'High Security',
      'Multi-Point Latching',
    ],
  },
  {
    title: 'Hardware — Locks',
    image: '/products/hardware-locks.webp',
    bullets: [
      'Cabinet Locks',
      'Cylindrical Locks',
      'Deadbolts and Padlocks',
      'Electrified Mechanical Locks',
      'Magnetic Locks',
      'High Security Locks',
      'Keyless Locks',
      'Mortise Locks',
      'Hospital Locks',
    ],
  },
  {
    title: 'Other Solutions & Hardware',
    image: '/products/other-solutions.webp',
    bullets: [
      'Aiphone Video/Intercom Solutions',
    ],
  },
  {
    title: 'Hardware Manufacturers',
    image: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=800&q=80',
    bullets: [
      'ABH',
      'Adams Rite',
      'Alarm Controls',
      'Alarm Lock',
      'BEA',
      'Corbin Russwin',
      'Detex',
      'Dynalock',
      'Falcon',
      'Folger Adams',
      'Glynn Johnson',
      'H.E.S.',
      'Ives',
      'LCN',
      'Norton',
      'Sargent',
      'Schlage',
      'SDC',
      'Securitron',
      'Von Duprin',
      'Yale',
      'and More',
    ],
  },
  {
    title: 'Programming, Training & Support',
    image: '/products/programming-training-support.webp',
    bullets: [
      'ENGAGE Technology by Allegion',
      'Vanderbilt Security Management System (SMS)',
      'Acre Access Control/Feenics',
      'AccessIT!',
      'Zentra',
      'Isonas',
      'DNA Fusion Enterprise Access Control',
      'Programming, support, training, organizing, and streamlining of your access control system',
    ],
  },
]

export default function Products() {
  return (
    <main className="bg-white min-h-screen">
      <Navbar />

      {/* Page header */}
      <section className="pt-32 pb-12 bg-white border-b border-gray-100">
        <div className="container mx-auto px-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-10 bg-electric-cyan" />
            <span className="font-display text-electric-cyan text-xs tracking-[0.4em] uppercase">What We Supply</span>
          </div>
          <h1 className="font-display text-5xl md:text-7xl text-gray-900 uppercase tracking-wider mb-4">Our Products</h1>
          <p className="text-steel-silver text-lg max-w-2xl">
            Hardware and software solutions purpose-built for K-12 security — sourced, configured, and supported by specialists who know your environment.
          </p>
        </div>
      </section>

      {/* Product cards grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
            {products.map((product) => (
              <ProductCard
                key={product.title}
                title={product.title}
                image={product.image}
                bullets={product.bullets}
              />
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-16">
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 px-10 py-5 bg-electric-blue text-white font-display uppercase tracking-widest text-sm hover:bg-electric-blue/90 transition-all"
            >
              Talk to a Specialist
            </Link>
          </div>
        </div>
      </section>

      <BrandsMarquee />
      <Footer />
    </main>
  )
}
