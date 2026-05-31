'use client'

import Image from 'next/image'

const scentNotes = ['Grass', 'Bergamot', 'Vetiver', 'Sandalwood']

export function ExclusiveScentSection() {
  return (
    <section className="bg-[#f0f0f0] py-14 md:py-20 px-4 md:px-6">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="mb-10 md:mb-16 text-center">
          <h2 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl text-[#0a1628] font-normal tracking-tight leading-snug px-2">
            The <span className="font-bold italic">official</span> FC Barcelona scent.<br />
            Present in every drop and available in<br />
            personal creations
          </h2>
        </div>

        {/* Content grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-12 items-start">
          {/* Left - Scent notes */}
          <div className="md:col-span-1">
            <h3 className="text-sm md:text-lg text-[#0a1628] font-normal mb-2">
              Return to the Canvass
            </h3>
            <div className="text-[#0a1628]/60 text-base md:text-lg mb-4">+</div>
            <div>
              {scentNotes.map((note, index) => (
                <div key={note} className="mb-0">
                  <div className="flex items-center gap-2 md:gap-3 py-1.5 md:py-2">
                    <span className="text-[#0a1628]/60 text-xs md:text-sm font-normal w-6 md:w-8">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <span className="text-[#0a1628] text-sm md:text-base font-normal">{note}</span>
                  </div>
                  <div className="h-px bg-[#0a1628]/30 mb-1 md:mb-2"></div>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Product image */}
          <div className="md:col-span-2 flex justify-center md:justify-end">
            <div className="relative w-full max-w-xs">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/unnamed-B6A1R94xUEC1dOFIT5ciqmA1Zu6BYS.png"
                alt="FCB Exclusive Scent - Green lime with roots and moss"
                width={300}
                height={450}
                className="w-full h-auto rounded-lg md:rounded-2xl"
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
    <section className="bg-white py-10 md:py-16 px-4 md:px-6">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 md:gap-12">
          <h2 className="text-xl sm:text-2xl md:text-4xl text-[#0a1628] font-normal leading-snug">
            Be part of the moment before<br />
            it&apos;s <span className="font-bold">history</span>
          </h2>
          <button className="bg-gradient-to-r from-[#FF6B5B] via-[#FF9D4D] to-[#FFD166] text-white rounded-full px-5 md:px-8 py-2 md:py-3 text-xs md:text-base font-semibold whitespace-nowrap hover:opacity-90 transition-opacity flex-shrink-0">
            Discover the Drops
          </button>
        </div>
      </div>
    </section>
  )
}
