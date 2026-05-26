import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Industries Served | Soulard Technology',
  description: 'K-12 education security specialists serving Florida, Michigan, Illinois, Missouri, Indiana, and Ohio.',
}

const states = [
  { name: 'Florida', districts: 67, schools: '4,000+' },
  { name: 'Michigan', districts: 540, schools: '3,700+' },
  { name: 'Illinois', districts: 852, schools: '4,200+' },
  { name: 'Missouri', districts: 520, schools: '2,400+' },
  { name: 'Indiana', districts: 293, schools: '1,900+' },
  { name: 'Ohio', districts: 610, schools: '3,600+' },
]

export default function Industries() {
  return (
    <main className="bg-navy min-h-screen">
      <Navbar />

      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=1920&q=80"
            alt="K-12 school building"
            fill
            className="object-cover opacity-20 grayscale brightness-75"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-10 bg-electric-cyan" />
            <span className="font-display text-electric-cyan text-xs tracking-[0.4em] uppercase">Who We Serve</span>
          </div>
          <h1 className="font-display text-5xl md:text-7xl text-gray-900 uppercase tracking-wider mb-4">Industries Served</h1>
          <p className="text-steel-silver text-lg max-w-2xl">
            Focused entirely on K-12 education institutions — the institutions that need security most and deserve it most.
          </p>
        </div>
      </section>

      <section className="py-16 bg-navy">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <h2 className="font-display text-3xl text-gray-900 uppercase tracking-wider mb-6">
                Why <span className="gradient-text">K-12 Schools?</span>
              </h2>
              <p className="text-steel-silver leading-relaxed mb-5">
                Schools are among the most security-complex environments in the world — open communities that must also be protected sanctuaries. The challenge of balancing access and security is unlike any other facility type.
              </p>
              <p className="text-steel-silver leading-relaxed mb-5">
                We focus exclusively on K-12 institutions because we understand the unique pressures: budget constraints, state compliance requirements, community expectations, and the absolute priority of student and staff safety.
              </p>
              <p className="text-steel-silver leading-relaxed">
                Our deep specialization means we deliver better outcomes faster — because we've already solved most of the challenges your institution faces.
              </p>
            </div>
            <Image
              src="https://images.unsplash.com/photo-1541178735493-479c1a27ed24?w=900&q=80"
              alt="K-12 school campus"
              width={600}
              height={450}
              className="object-cover w-full"
            />
          </div>

          <h2 className="font-display text-3xl text-gray-900 uppercase tracking-wider text-center mb-12">Our Service States</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {states.map((state) => (
              <div key={state.name} className="glass p-6 hover:border-electric-cyan/20 transition-all">
                <h3 className="font-display text-electric-cyan text-xl uppercase tracking-wider mb-4">{state.name}</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="font-display text-gray-900 text-2xl">{state.districts}</div>
                    <div className="text-steel-silver text-xs mt-1">School Districts</div>
                  </div>
                  <div>
                    <div className="font-display text-electric-cyan text-2xl">{state.schools}</div>
                    <div className="text-steel-silver text-xs mt-1">K-12 Schools</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link href="/contact" className="inline-flex items-center gap-3 px-10 py-5 bg-electric-blue text-white font-display uppercase tracking-widest text-sm hover:bg-electric-blue/90 transition-all shadow-neon-blue">
              Request Free Assessment
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
