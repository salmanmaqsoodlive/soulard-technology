import Image from 'next/image'

const brands = [
  { name: 'Allegion', src: '/logos/Allegion.webp' },
  { name: 'Vanderbilt', src: '/logos/Vanderbilt.webp' },
  { name: 'Von Duprin', src: '/logos/Von_Duprin_Gray.webp' },
  { name: 'Aiphone', src: '/logos/aiphone.webp' },
  { name: 'BEA', src: '/logos/bea.webp' },
  { name: 'HID', src: '/logos/hid.webp' },
  { name: 'LCN', src: '/logos/lcn.webp' },
  { name: 'Locknetics', src: '/logos/locknetics.webp' },
  { name: 'Schlage', src: '/logos/schlage.webp' },
]

export default function BrandsMarquee() {
  const doubled = [...brands, ...brands]

  return (
    <section className="py-14 bg-gray-50 border-y border-gray-100 overflow-hidden">
      <div className="container mx-auto px-6 mb-8 text-center">
        <p className="font-display text-xs tracking-[0.4em] uppercase text-gray-400">Security Brands We Carry</p>
      </div>

      <div className="relative overflow-hidden">
        {/* fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-r from-gray-50 to-transparent pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-l from-gray-50 to-transparent pointer-events-none" />

        <div className="flex animate-marquee whitespace-nowrap">
          {doubled.map((brand, i) => (
            <div
              key={i}
              className="inline-flex items-center justify-center mx-10 shrink-0"
            >
              <Image
                src={brand.src}
                alt={brand.name}
                width={120}
                height={48}
                className="h-10 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
