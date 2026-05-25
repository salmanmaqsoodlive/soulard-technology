'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface Props {
  children: ReactNode
  className?: string
  glowColor?: string
}

export default function GlowCard({ children, className = '', glowColor = '#0066ff' }: Props) {
  return (
    <motion.div
      whileHover={{ scale: 1.02, boxShadow: `0 0 30px ${glowColor}33` }}
      transition={{ duration: 0.2 }}
      className={`glass border border-white/5 transition-all ${className}`}
      style={{ '--glow': glowColor } as React.CSSProperties}
    >
      {children}
    </motion.div>
  )
}
