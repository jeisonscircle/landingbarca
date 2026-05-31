'use client'

import { useState } from 'react'
import Image from 'next/image'

const drops = [
  {
    id: 1,
    title: 'El Clàsico',
    dropLabel: 'DROP 1',
    featured: true,
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%20Apr%2027%2C%202026%2C%2003_54_02%20PM%201-XcyNWJn4n1hGTGRDEfqr2US1EWfPLP.png',
    scentNotes: ['Grass', 'Warm Crowd', 'Wood'],
    tags: ['Seasonal Scent', 'Match Day', 'Barca Moments'],
  },
  {
    id: 2,
    title: 'League Nights',
    dropLabel: 'DROP 2',
    featured: false,
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/BVB%202-3%20FC%20Barcelona%201-9zh9YotaMxNxmHNw6LoTVhSjbRW0sx.png',
    scentNotes: ['Night Air', 'Adrenaline', 'Victory'],
    tags: ['Limited Edition', 'Champions', 'Exclusive'],
  },
  {
    id: 3,
    title: 'European Glory',
    dropLabel: 'DROP 3',
    featured: false,
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/FCBxSCIRCLE_INTERIOR_CATALA%CC%81N_TIMELESS-KW9QNW6HtPi5XdxteS8gJ2WEkUHrDk.jpg',
    scentNotes: ['Champagne', 'Confetti', 'Glory'],
    tags: ['Trophy Moment', 'Historic', 'Timeless'],
  },
]

export function DropsSection() {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <section className="bg-white py-12 md:py-16 px-4 md:px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="px-1 mb-8 md:mb-10">
          <h2 className="text-2xl md:text-4xl lg:text-5xl text-[#0a1628] font-light tracking-tight leading-tight">
            Exclusive <span className="font-bold">scent drops</span> capture
            <br />
            defining <span className="font-bold">Barça</span> moments.
          </h2>
        </div>

        {/* Mobile: vertical stack of cards */}
        <div className="flex flex-col gap-4 md:hidden">
          {drops.map((drop, index) => (
            <div
              key={drop.id}
              onClick={() => setActiveIndex(index === activeIndex ? -1 : index)}
              className="relative rounded-2xl overflow-hidden cursor-pointer h-[260px]"
            >
              <Image src={drop.image} alt={drop.title} fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute inset-0 p-5 flex flex-col justify-between">
                <div className="flex items-start justify-between">
                  <div>
                    {drop.featured && (
                      <span className="text-white text-xs tracking-wider uppercase mb-1 block font-medium">FEATURED</span>
                    )}
                    <h3 className="text-2xl text-white font-bold">{drop.title}</h3>
                  </div>
                  <button className="flex items-center gap-1.5 border border-white rounded-full px-3 py-1.5 text-white text-xs hover:bg-white/20 transition-colors">
                    <span>→</span>
                    <span>Get the drop</span>
                  </button>
                </div>
                <div>
                  <div className="flex gap-2 mb-3">
                    {drop.scentNotes.map((note, i) => (
                      <div key={note} className="flex items-center gap-1.5 text-white">
                        <span className="text-white/60 text-xs">{String(i + 1).padStart(2, '0')}</span>
                        <span className="text-sm">{note}</span>
                      </div>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {drop.tags.map((tag) => (
                      <span key={tag} className="border border-white/50 rounded-full px-3 py-1 text-white text-xs">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop: horizontal accordion */}
        <div className="hidden md:flex gap-3 h-[500px] md:h-[600px]">
          {drops.map((drop, index) => {
            const isActive = index === activeIndex
            return (
              <div
                key={drop.id}
                onClick={() => setActiveIndex(index)}
                className={`relative rounded-2xl overflow-hidden cursor-pointer transition-all duration-500 ease-in-out ${
                  isActive ? 'flex-[7]' : 'flex-[1.5]'
                }`}
              >
                <Image src={drop.image} alt={drop.title} fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                {isActive ? (
                  <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-between">
                    <div className="flex items-start justify-between">
                      <div>
                        {drop.featured && (
                          <span className="text-white text-xs tracking-wider uppercase mb-2 block font-medium">FEATURED</span>
                        )}
                        <h3 className="text-4xl md:text-5xl lg:text-6xl text-white font-bold">{drop.title}</h3>
                      </div>
                      <button className="flex items-center gap-2 border border-white rounded-full px-4 py-2 text-white text-sm hover:bg-white/20 transition-colors">
                        <span>→</span>
                        <span>Get the drop</span>
                      </button>
                    </div>
                    <div>
                      <div className="mb-6">
                        {drop.scentNotes.map((note, i) => (
                          <div key={note} className="flex items-center gap-3 text-white mb-1">
                            <span className="text-white/70 text-sm">{String(i + 1).padStart(2, '0')}</span>
                            <span className="text-lg">{note}</span>
                          </div>
                        ))}
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {drop.tags.map((tag) => (
                          <span key={tag} className="border border-white/50 rounded-full px-4 py-2 text-white text-sm">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="absolute inset-0 flex flex-col items-center justify-between py-6">
                    <button
                      className="flex items-center gap-2 border border-white rounded-full px-3 py-2 text-white text-xs hover:bg-white/20 transition-colors"
                      style={{ writingMode: 'vertical-rl' }}
                    >
                      <span>→</span>
                      <span>Get the drop</span>
                    </button>
                    <h3 className="text-2xl md:text-3xl text-white font-bold" style={{ writingMode: 'vertical-rl' }}>
                      {drop.title}
                    </h3>
                    <span className="text-white/70 text-xs tracking-wider uppercase font-medium" style={{ writingMode: 'vertical-rl' }}>
                      {drop.dropLabel}
                    </span>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
