'use client'

import { useState } from 'react'
import Image from 'next/image'

interface ProductCardProps {
  title: string
  image: string
  bullets: string[]
}

const PREVIEW_COUNT = 4

export default function ProductCard({ title, image, bullets }: ProductCardProps) {
  const [expanded, setExpanded] = useState(false)
  const hasMore = bullets.length > PREVIEW_COUNT
  const visible = expanded ? bullets : bullets.slice(0, PREVIEW_COUNT)

  return (
    <div className="group rounded overflow-hidden border border-gray-100 hover:border-electric-cyan/30 hover:shadow-lg transition-all duration-300 bg-white flex flex-col">
      {/* Image — fixed height */}
      <div className="relative h-48 w-full overflow-hidden flex-shrink-0">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-1">
        <h2 className="font-display text-lg text-gray-900 uppercase tracking-wider mb-4">
          {title}
        </h2>

        <ul className="space-y-1.5 flex-1">
          {visible.map((b, i) => (
            <li key={i} className="flex items-start gap-2 text-steel-silver text-sm">
              <div className="w-1.5 h-1.5 bg-electric-blue rounded-full flex-shrink-0 mt-1.5" />
              {b}
            </li>
          ))}
        </ul>

        {hasMore && (
          <button
            onClick={() => setExpanded(!expanded)}
            className="mt-4 text-xs font-display uppercase tracking-widest text-electric-cyan hover:text-electric-blue transition-colors flex items-center gap-1"
          >
            {expanded ? 'View Less' : `View More (${bullets.length - PREVIEW_COUNT} more)`}
            <svg
              viewBox="0 0 24 24"
              fill="none"
              className={`w-3 h-3 transition-transform duration-300 ${expanded ? 'rotate-180' : ''}`}
            >
              <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
        )}
      </div>
    </div>
  )
}
