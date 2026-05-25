import type { Metadata } from 'next'
import { Orbitron, Inter } from 'next/font/google'
import './globals.css'

const orbitron = Orbitron({
  subsets: ['latin'],
  variable: '--font-orbitron',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Soulard Technology | Electronic Access Control Consulting',
  description: 'Security management system consulting, training and support specializing in K-12 education markets across Florida, Michigan, Illinois, Missouri, Indiana, and Ohio.',
  keywords: 'electronic access control, security consulting, K-12 security, school security systems, access control training, Missouri, Florida, Michigan, Illinois, Indiana, Ohio',
  openGraph: {
    title: 'Soulard Technology | Electronic Access Control Consulting',
    description: 'Trusted security management system consulting for K-12 institutions.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${orbitron.variable} ${inter.variable}`}>
      <body className="bg-navy font-body antialiased">
        {children}
      </body>
    </html>
  )
}
