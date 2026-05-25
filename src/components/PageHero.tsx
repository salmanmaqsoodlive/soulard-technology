import { ReactNode } from 'react'

interface Props {
  eyebrow: string
  title: string
  subtitle?: string
  children?: ReactNode
}

export default function PageHero({ eyebrow, title, subtitle, children }: Props) {
  return (
    <section className="relative pt-32 pb-16 overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex items-center gap-3 mb-4">
          <div className="h-px w-10 bg-electric-cyan" />
          <span className="font-display text-electric-cyan text-xs tracking-[0.4em] uppercase">{eyebrow}</span>
        </div>
        <h1 className="font-display text-5xl md:text-7xl text-gray-900 uppercase tracking-wider mb-4">{title}</h1>
        {subtitle && <p className="text-steel-silver text-lg max-w-2xl">{subtitle}</p>}
        {children}
      </div>
    </section>
  )
}
