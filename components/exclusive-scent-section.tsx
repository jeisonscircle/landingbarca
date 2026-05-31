'use client'

import Image from 'next/image'

const scentNotes = ['Energy', 'Future', 'Grass', 'History', 'Passion']

export function ExclusiveScentSection() {
  return (
    <section className="bg-white py-14 md:py-20 px-4 md:px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-start gap-6 mb-10 md:mb-12">
          <div className="hidden md:flex shrink-0">
            <span
              className="text-[#0a1628]/60 text-xs tracking-[0.3em] uppercase"
              style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
            >
              EXCLUSIVE SCENT
            </span>
          </div>
          <div className="flex-1 text-center">
            <h2 className="text-2xl md:text-4xl lg:text-5xl text-[#0a1628] font-light tracking-tight leading-tight">
              The <span className="font-bold italic">official</span> FC Barcelona scent.
              <br className="hidden sm:block" />
              {' '}Present in every drop and available in
              <br className="hidden sm:block" />
              {' '}personal creations
            </h2>
          </div>
        </div>

        {/* Content grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start">
          {/* Left - Scent notes */}
          <div>
            <h3 className="text-xl md:text-3xl text-[#0a1628] font-bold mb-6 md:mb-8">
              Return to Camp Nou
            </h3>
            <div className="text-[#A50044] text-3xl font-light mb-4 md:mb-6">+</div>
            <div className="space-y-0">
              {scentNotes.map((note, index) => (
                <div
                  key={note}
                  className="flex items-center gap-4 py-3 border-t border-[#A50044]/30"
                >
                  <span className="text-[#A50044]/70 text-sm w-6">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <span className="text-[#A50044] text-base md:text-lg font-medium">{note}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Product image, no frame, full visible */}
          <div className="rounded-2xl overflow-hidden">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/unnamed-B6A1R94xUEC1dOFIT5ciqmA1Zu6BYS.png"
              alt="FCB Exclusive Scent - Green lime with roots and moss"
              width={600}
              height={900}
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export function CtaBannerSection() {
  return (
    <section className="bg-white py-12 md:py-16 px-4 md:px-6 border-t border-gray-100">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <h2 className="text-xl md:text-3xl lg:text-4xl text-[#0a1628] font-light text-center sm:text-left">
            Be part of the moment before it&apos;s <span className="font-bold">history</span>
          </h2>
          <button className="flex items-center gap-2 border border-[#0a1628] rounded-full px-6 md:px-8 py-2.5 md:py-3 text-[#0a1628] hover:bg-[#0a1628] hover:text-white transition-colors whitespace-nowrap text-sm md:text-base">
            <span>→</span>
            <span>Discover the Drops</span>
          </button>
        </div>
      </div>
    </section>
  )
}
