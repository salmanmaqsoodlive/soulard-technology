import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Case Studies | Soulard Technology',
  description: 'Real implementations of electronic access control in K-12 schools across Florida, Michigan, Illinois, Missouri, Indiana, and Ohio.',
}

const cases = [
  {
    district: 'Northbrook USD',
    state: 'Illinois',
    size: '18 Schools · 14,200 Students',
    img: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=900&q=80',
    challenge: 'An aging legacy key system across 18 schools with no centralized visibility. After a security incident, the board mandated modernization within a single academic year.',
    solution: 'Phased deployment of cloud-based access control across all 18 schools over 9 months. Centralized district console, 1,400 credential-managed access points, and full integration with existing visitor management system.',
    results: ['Deployment completed in 9 months across all 18 sites', 'Eliminated 3,200 physical keys', 'Central incident response time reduced by 73%', 'Full CISA K-12 School Safety Guidance compliance'],
    tag: 'District-Wide Rollout',
  },
  {
    district: 'Franklin County Schools',
    state: 'Ohio',
    size: '7 Schools · 5,900 Students',
    img: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=900&q=80',
    challenge: 'Growing district with three new school construction projects, needed a unified system that could scale. Budget constraints required a phased multi-year implementation.',
    solution: 'Three-year implementation starting with the two highest-risk schools, with a pre-wired infrastructure plan for the three new buildings under construction.',
    results: ['Seamless integration across new and existing buildings', 'Bond funding coordination for new construction', 'IT staff training completed in 2 days', '$340,000 in avoided future retrofit costs'],
    tag: 'Growth Planning',
  },
  {
    district: 'Lakeview Charter Academy',
    state: 'Michigan',
    size: '1 School · 820 Students',
    img: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=900&q=80',
    challenge: 'Single charter school with volunteer board and limited IT staff. Needed enterprise-grade security that could be managed by non-technical administrators.',
    solution: 'Simplified cloud console with role-based permissions, automated lockdown scheduling, and a comprehensive Bronze support package with 24/7 emergency access.',
    results: ['Fully operational in 6 weeks', 'Non-technical office staff manage daily operations', 'Automated bell/lockdown schedules eliminated manual tasks', 'Insurance premium reduced 12% post-installation'],
    tag: 'Small School Solution',
  },
]

export default function CaseStudies() {
  return (
    <main className="bg-navy min-h-screen">
      <Navbar />

      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-10 bg-electric-cyan" />
            <span className="font-display text-electric-cyan text-xs tracking-[0.4em] uppercase">Real Implementations</span>
          </div>
          <h1 className="font-display text-5xl md:text-7xl text-white uppercase tracking-wider mb-4">Case Studies</h1>
          <p className="text-steel-silver text-lg max-w-2xl">
            How K-12 districts across six states have modernized their security infrastructure with Soulard Technology.
          </p>
        </div>
      </section>

      <section className="py-16 pb-24">
        <div className="container mx-auto px-6">
          <div className="space-y-24">
            {cases.map((c, i) => (
              <div key={c.district} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-start ${i % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                <div className={`relative overflow-hidden group ${i % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <Image src={c.img} alt={c.district} width={600} height={420} className="object-cover w-full h-72 transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-tr from-navy/70 to-transparent" />
                  <div className="absolute top-4 left-4">
                    <span className="font-display text-electric-cyan text-xs tracking-[0.3em] uppercase bg-navy/80 px-3 py-1">{c.tag}</span>
                  </div>
                </div>
                <div className={i % 2 === 1 ? 'lg:col-start-1' : ''}>
                  <div className="font-display text-electric-cyan text-xs tracking-[0.4em] uppercase mb-2">{c.state} · {c.size}</div>
                  <h2 className="font-display text-3xl text-white uppercase tracking-wider mb-5">{c.district}</h2>

                  <div className="space-y-4 mb-6">
                    <div className="glass p-4">
                      <div className="font-display text-electric-cyan text-xs tracking-widest uppercase mb-2">Challenge</div>
                      <p className="text-steel-silver text-sm leading-relaxed">{c.challenge}</p>
                    </div>
                    <div className="glass p-4">
                      <div className="font-display text-electric-cyan text-xs tracking-widest uppercase mb-2">Solution</div>
                      <p className="text-steel-silver text-sm leading-relaxed">{c.solution}</p>
                    </div>
                  </div>

                  <div className="glass p-4">
                    <div className="font-display text-electric-cyan text-xs tracking-widest uppercase mb-3">Results</div>
                    <ul className="space-y-2">
                      {c.results.map(r => (
                        <li key={r} className="flex items-start gap-2 text-steel-silver text-sm">
                          <div className="w-1.5 h-1.5 bg-electric-cyan/60 rounded-full mt-1.5 flex-shrink-0" />
                          {r}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-20 text-center">
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
