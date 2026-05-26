import Link from 'next/link'
import Image from 'next/image'

const serviceAreas = ['Florida', 'Michigan', 'Illinois', 'Missouri', 'Indiana', 'Ohio']
const services = ['Access Control Consulting', 'K-12 Security', 'System Integration', 'Training & Support', 'Compliance Assessment']
const company = ['About Us', 'Services', 'Industries', 'Case Studies', 'Blog']

export default function Footer() {
  return (
    <footer className="bg-red-50 border-t border-red-200">
      {/* Grid overlay */}
      <div className="absolute inset-0 bg-grid bg-grid opacity-30 pointer-events-none" />

      <div className="relative container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <div className="mb-6">
              <Image
                src="/logo.webp"
                alt="Soulard Technology"
                width={220}
                height={72}
                className="h-16 w-auto object-contain"
              />
            </div>
            <p className="text-steel-silver text-sm leading-relaxed mb-6">
              Electronic access control consulting and security management systems for K-12 education markets.
            </p>
            <div className="flex flex-wrap gap-2">
              {serviceAreas.map((state) => (
                <span key={state} className="text-xs border border-electric-blue/20 text-electric-cyan/70 px-2 py-0.5 rounded">
                  {state}
                </span>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display text-gray-900 text-sm tracking-widest uppercase mb-6 after:block after:w-8 after:h-px after:bg-electric-blue after:mt-2">Services</h4>
            <ul className="space-y-3">
              {services.map((s) => (
                <li key={s}>
                  <Link href="/services" className="text-steel-silver text-sm hover:text-electric-cyan transition-colors flex items-center gap-2">
                    <span className="w-1 h-1 bg-electric-blue/50 rounded-full" />
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-display text-gray-900 text-sm tracking-widest uppercase mb-6 after:block after:w-8 after:h-px after:bg-electric-blue after:mt-2">Company</h4>
            <ul className="space-y-3">
              {company.map((c) => (
                <li key={c}>
                  <Link href="/about" className="text-steel-silver text-sm hover:text-electric-cyan transition-colors">
                    {c}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-gray-900 text-sm tracking-widest uppercase mb-6 after:block after:w-8 after:h-px after:bg-electric-blue after:mt-2">Contact</h4>
            <div className="space-y-4 text-sm text-steel-silver">
              <p>Serving K-12 institutions across 6 states</p>
              <Link href="/contact" className="block hover:text-electric-cyan transition-colors">info@soulardtech.com</Link>
              <Link
                href="/contact"
                className="inline-block mt-4 px-5 py-2.5 border border-electric-blue/40 text-electric-cyan text-xs uppercase tracking-widest hover:bg-electric-blue/10 transition-colors"
              >
                Get Consultation
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-electric-blue/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-steel-silver/50 text-xs">
            © {new Date().getFullYear()} Soulard Technology. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="/" className="text-steel-silver/50 text-xs hover:text-electric-cyan transition-colors">Privacy Policy</Link>
            <Link href="/" className="text-steel-silver/50 text-xs hover:text-electric-cyan transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
