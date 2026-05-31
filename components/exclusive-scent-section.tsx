'use client'

import Image from 'next/image'

const scentNotes = ['Grass', 'Bergamot', 'Vetiver', 'Sandalwood']

export function ExclusiveScentSection() {
  return (
    <section className="bg-[#0a1628] py-14 md:py-20 px-4 md:px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10 md:mb-14">
          <h2 className="text-2xl md:text-4xl lg:text-5xl text-white font-light tracking-tight leading-tight">
            The <span className="font-bold italic">official</span> FC Barcelona scent.
            <br className="hidden sm:block" />
            {' '}Present in every drop and available in
            <br className="hidden sm:block" />
            {' '}personal creations
          </h2>
        </div>

        {/* Content grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start">
          {/* Left - Scent notes */}
          <div>
            <h3 className="text-xl md:text-2xl text-white font-bold mb-4">
              Return to the Canvass
            </h3>
            <div className="text-white/60 text-2xl font-light mb-4">+</div>
            <div className="border-t border-white/20">
              {scentNotes.map((note, index) => (
                <div
                  key={note}
                  className="flex items-center gap-4 py-3 border-b border-white/20"
                >
                  <span className="text-white/50 text-sm w-6">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <span className="text-white text-base md:text-lg">{note}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Product image */}
          <div className="flex justify-center">
            <div className="relative w-full max-w-sm">
              {/* FCB Badge */}
              <div className="absolute top-4 right-4 z-10 bg-white/90 rounded-full px-3 py-2 flex items-center gap-2">
                <div className="w-6 h-6 bg-[#A50044] rounded flex items-center justify-center">
                  <span className="text-white text-xs font-bold">FCB</span>
                </div>
                <div className="text-xs">
                  <div className="font-bold text-[#0a1628]">FCB</div>
                  <div className="text-[#0a1628]/70">Exclusive Scent</div>
                </div>
              </div>
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/unnamed-B6A1R94xUEC1dOFIT5ciqmA1Zu6BYS.png"
                alt="FCB Exclusive Scent - Green lime with roots and moss"
                width={400}
                height={600}
                className="w-full h-auto rounded-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export function CtaBannerSection() {
  return (
    <section className="bg-gradient-to-r from-[#FF8A80] via-[#FF6B6B] to-[#E91E63] py-12 md:py-16 px-4 md:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <h2 className="text-xl md:text-3xl lg:text-4xl text-white font-light text-center sm:text-left">
            Be part of the moment before
            <br className="sm:hidden" />
            {' '}it&apos;s <span className="font-bold">history</span>
          </h2>
          <button className="bg-gradient-to-r from-[#FF6B5B] via-[#FF9D4D] to-[#FFD166] text-white rounded-full px-6 md:px-8 py-2.5 md:py-3 text-sm md:text-base font-semibold whitespace-nowrap hover:opacity-90 transition-opacity">
            Discover the Drops
          </button>
        </div>
      </div>
    </section>
  )
}
