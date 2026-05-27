import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import BrandsMarquee from '@/components/BrandsMarquee'

export const metadata: Metadata = {
  title: 'Services | Soulard Technology',
  description: 'Access control consulting, system integration, training, and support services for K-12, higher education, and government institutions.',
}

const services = [
  {
    title: 'Consulting',
    image: '/services/consulting.webp',
    description: 'We specialize in working with K-12 education and government markets with a business model that allows our clients to be more self-contained to improve their security needs and still stay within their budget requirements.',
  },
  {
    title: 'Installation & Programming',
    image: '/services/installation-programming.webp',
    description: 'Soulard Technology is a one-stop-shop for add-ons and replacement parts from ordering to installation to programming to work with existing system. We can also program and troubleshoot products installed by others to work with your existing system.',
  },
  {
    title: 'Product Sales',
    image: '/services/product-sales.webp',
    description: 'At Soulard Technology, customer service is our top priority and because of that, we stock products that our customers need the most so that we can get those to you quickly. We stock products from Allegion (LCN, Locknetics, Schlage, Von Duprin), Engage Technology, Locknetics, Acre Security/Vanderbilt, Mercury, HID, Aiphone, BEA Wireless Transmitters and Receivers, and more.',
  },
  {
    title: 'Projects',
    image: '/services/projects.webp',
    description: 'Soulard Technology provides consulting, project management, and installation services on small to large education and government projects.',
  },
  {
    title: 'Support',
    image: '/services/support.webp',
    description: 'Whether your support needs require an in-person visit by one of our technicians or can be resolved by a remote session, Soulard Technology has everything you will need to resolve your support needs. Support sessions can also assist in organizing and streamlining your access control system.',
  },
  {
    title: 'Training',
    image: '/services/training.webp',
    description: 'With more than 35 years of experience, Soulard Technology has the knowledge and expertise to train your staff on door hardware as well as access control systems by Allegion and Acre Security.',
  },
]

export default function Services() {
  return (
    <main className="bg-white min-h-screen">
      <Navbar />

      {/* Page header */}
      <section className="pt-32 pb-12 bg-white border-b border-gray-100">
        <div className="container mx-auto px-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-10 bg-electric-cyan" />
            <span className="font-display text-electric-cyan text-xs tracking-[0.4em] uppercase">What We Offer</span>
          </div>
          <h1 className="font-display text-5xl md:text-7xl text-gray-900 uppercase tracking-wider mb-4">Our Services</h1>
          <p className="text-steel-silver text-lg max-w-2xl">
            Comprehensive security consulting and access control solutions for K-12 education, higher education, and government institutions.
          </p>
        </div>
      </section>

      {/* Service cards grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div
                key={service.title}
                className="group rounded overflow-hidden border border-gray-100 hover:border-electric-cyan/30 hover:shadow-lg transition-all duration-300 bg-white"
              >
                {/* Image */}
                <div className="relative h-56 w-full overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                </div>

                {/* Content */}
                <div className="p-6">
                  <h2 className="font-display text-xl text-gray-900 uppercase tracking-wider mb-3">
                    {service.title}
                  </h2>
                  <p className="text-steel-silver text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-16">
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 px-10 py-5 bg-electric-blue text-white font-display uppercase tracking-widest text-sm hover:bg-electric-blue/90 transition-all"
            >
              Get a Consultation
            </Link>
          </div>
        </div>
      </section>

      <BrandsMarquee />
      <Footer />
    </main>
  )
}
