import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Blog | Soulard Technology',
  description: 'K-12 security insights, access control best practices, and school safety resources from Soulard Technology.',
}

const posts = [
  {
    slug: 'cisa-k12-school-safety-guidance',
    title: 'What the CISA K-12 School Safety Guide Means for Your District',
    excerpt: 'The Cybersecurity and Infrastructure Security Agency recently updated its K-12 school safety guidance. Here\'s what districts in our service states need to know.',
    category: 'Compliance',
    date: 'April 15, 2025',
    readTime: '6 min read',
    img: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&q=80',
  },
  {
    slug: 'access-control-vs-traditional-locks',
    title: 'Electronic Access Control vs. Traditional Locks: A Cost Analysis for Schools',
    excerpt: 'Many districts hesitate at the upfront cost of electronic access control. We break down the 5-year total cost of ownership comparison that often surprises administrators.',
    category: 'Planning',
    date: 'March 28, 2025',
    readTime: '8 min read',
    img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
  },
  {
    slug: 'mobile-credentials-k12',
    title: 'Mobile Credentials in K-12: Opportunities and Considerations',
    excerpt: 'Smartphone-based access credentials are increasingly popular in commercial buildings. What does this mean for schools where students carry the same devices?',
    category: 'Technology',
    date: 'March 12, 2025',
    readTime: '5 min read',
    img: 'https://images.unsplash.com/photo-1517430816045-df4b7de11d1d?w=800&q=80',
  },
  {
    slug: 'incident-response-lockdown-protocols',
    title: 'Integrating Access Control with Lockdown Protocols',
    excerpt: 'Modern access control systems can automate lockdown sequences district-wide with a single command. Here\'s how to configure your system for the fastest possible response.',
    category: 'Safety',
    date: 'February 22, 2025',
    readTime: '7 min read',
    img: 'https://images.unsplash.com/photo-1516321497487-e288fb19713f?w=800&q=80',
  },
  {
    slug: 'school-security-grant-funding',
    title: 'Grant Funding for School Security: A Guide to 2025 Programs',
    excerpt: 'Federal and state programs exist to fund K-12 security upgrades. We cover STOP School Violence Act grants, state-specific programs, and how to write a winning application.',
    category: 'Funding',
    date: 'February 8, 2025',
    readTime: '10 min read',
    img: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&q=80',
  },
  {
    slug: 'visitor-management-integration',
    title: 'Connecting Access Control to Your Visitor Management System',
    excerpt: 'Standalone visitor kiosks and isolated access control create blind spots. Here\'s why integration is the security upgrade most districts overlook.',
    category: 'Technology',
    date: 'January 20, 2025',
    readTime: '6 min read',
    img: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=800&q=80',
  },
]

const categories = ['All', 'Compliance', 'Planning', 'Technology', 'Safety', 'Funding']

export default function Blog() {
  return (
    <main className="bg-navy min-h-screen">
      <Navbar />

      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-10 bg-electric-cyan" />
            <span className="font-display text-electric-cyan text-xs tracking-[0.4em] uppercase">Knowledge Base</span>
          </div>
          <h1 className="font-display text-5xl md:text-7xl text-white uppercase tracking-wider mb-4">Insights</h1>
          <p className="text-steel-silver text-lg max-w-2xl">
            Security guidance, compliance updates, and best practices for K-12 administrators and security directors.
          </p>
        </div>
      </section>

      <section className="py-16 pb-24">
        <div className="container mx-auto px-6">
          {/* Featured post */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            <div className="relative overflow-hidden group">
              <Image src={posts[0].img} alt={posts[0].title} width={700} height={450} className="object-cover w-full h-80 transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/80 to-transparent" />
              <div className="absolute top-4 left-4">
                <span className="font-display text-electric-cyan text-xs tracking-widest uppercase bg-navy/80 px-3 py-1">{posts[0].category}</span>
              </div>
            </div>
            <div className="flex flex-col justify-center">
              <div className="text-steel-silver text-xs mb-3">{posts[0].date} · {posts[0].readTime}</div>
              <h2 className="font-display text-3xl text-white uppercase tracking-wider mb-4">{posts[0].title}</h2>
              <p className="text-steel-silver leading-relaxed mb-6">{posts[0].excerpt}</p>
              <Link href={`/blog/${posts[0].slug}`} className="inline-flex items-center gap-2 text-electric-cyan text-sm font-display uppercase tracking-widest hover:text-white transition-colors">
                Read Article
                <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4"><path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2"/></svg>
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.slice(1).map(post => (
              <div key={post.slug} className="glass hover:border-electric-cyan/20 transition-all group">
                <div className="relative overflow-hidden">
                  <Image src={post.img} alt={post.title} width={400} height={250} className="object-cover w-full h-48 transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute top-3 left-3">
                    <span className="font-display text-electric-cyan text-xs tracking-widest uppercase bg-navy/80 px-2 py-1">{post.category}</span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="text-steel-silver text-xs mb-2">{post.date} · {post.readTime}</div>
                  <h3 className="font-display text-white uppercase tracking-wider text-sm leading-snug mb-3">{post.title}</h3>
                  <p className="text-steel-silver text-sm leading-relaxed mb-4 line-clamp-2">{post.excerpt}</p>
                  <Link href={`/blog/${post.slug}`} className="text-electric-cyan text-xs font-display uppercase tracking-widest hover:text-white transition-colors">
                    Read →
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
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
