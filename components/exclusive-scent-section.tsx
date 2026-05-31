'use client'

import Image from 'next/image'

const scentNotes = ['Grass', 'Bergamot', 'Vetiver', 'Sandalwood']

export function ExclusiveScentSection() {
  return (
    <section className="bg-white py-14 md:py-20 px-4 md:px-6">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="mb-10 md:mb-14">
          <h2 className="text-xl md:text-3xl text-[#0a1628] font-normal tracking-tight leading-snug">
            The <span className="font-bold italic">official</span> FC Barcelona scent.<br />
            Present in every drop and available in<br />
            personal creations
          </h2>
        </div>

        {/* Content grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 items-start">
          {/* Left - Scent notes */}
          <div className="md:col-span-1">
            <h3 className="text-base md:text-lg text-[#0a1628] font-normal mb-2 pb-2 border-b border-[#0a1628]">
              Return to the Canvass
            </h3>
            <div className="mt-4">
              {scentNotes.map((note, index) => (
                <div
                  key={note}
                  className="flex items-center gap-3 py-2.5"
                >
                  <span className="text-[#0a1628]/60 text-sm font-normal w-8">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <span className="text-[#0a1628] text-base font-normal">{note}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Product image */}
          <div className="md:col-span-2 flex justify-end">
            <div className="relative w-full max-w-xs">
              {/* FCB Badge */}
              <div className="absolute top-4 right-4 z-10 bg-white rounded-full px-3 py-2 flex items-center gap-2 shadow-lg">
                <div className="w-5 h-5 bg-[#A50044] rounded flex items-center justify-center">
                  <span className="text-white text-xs font-bold">FCB</span>
                </div>
                <div className="text-xs">
                  <div className="font-bold text-[#0a1628]">FCB</div>
                  <div className="text-[#0a1628]/70 text-xs">Exclusive Scent</div>
                </div>
              </div>
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/unnamed-B6A1R94xUEC1dOFIT5ciqmA1Zu6BYS.png"
                alt="FCB Exclusive Scent - Green lime with roots and moss"
                width={300}
                height={450}
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
    <section className="bg-[#1a3a52] py-12 md:py-16 px-4 md:px-6">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 md:gap-12">
          <h2 className="text-2xl md:text-4xl text-white font-normal leading-snug">
            Be part of the moment before<br />
            it&apos;s <span className="font-bold">history</span>
          </h2>
          <button className="bg-gradient-to-r from-[#FF6B5B] via-[#FF9D4D] to-[#FFD166] text-white rounded-full px-6 md:px-8 py-2.5 md:py-3 text-sm md:text-base font-semibold whitespace-nowrap hover:opacity-90 transition-opacity flex-shrink-0">
            Discover the Drops
          </button>
        </div>
      </div>
    </section>
  )
}
