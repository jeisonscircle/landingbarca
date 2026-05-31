'use client'

import Image from 'next/image'

export function HowItWorksSection() {
  return (
    <section className="bg-white py-12 md:py-16 px-4 md:px-6">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <div className="px-1 mb-8 md:mb-10">
          <h2 className="text-3xl md:text-5xl lg:text-6xl text-[#0a1628] font-light tracking-tight leading-tight">
            <span className="font-bold">How</span> it works
          </h2>
        </div>

        {/* Cards Grid - Asymmetric Layout */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-8 md:mb-10">
          {/* Left - Aura Card (Large, 3 columns) */}
          <div className="relative md:col-span-3 aspect-square md:aspect-auto rounded-2xl overflow-hidden bg-gray-100">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DTS_DEEP_SPA_DTS_Studio_Photos_ID10999%20%281%29%201-1-IjYaLlpcDzDbgtr9JBK2vweVTm7RMJ.png"
              alt="Aura technology"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 md:bottom-5 md:left-5">
              <h3 className="text-3xl md:text-4xl lg:text-5xl text-white font-light italic">Aura</h3>
              <div className="w-10 md:w-12 h-0.5 bg-white mt-2" />
            </div>
          </div>

          {/* Right side - 2 columns for stacked cards */}
          <div className="md:col-span-2 grid grid-cols-1 gap-4">
            {/* Right Top - Scent Board */}
            <div className="relative aspect-square rounded-2xl overflow-hidden bg-black">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202026-04-24%20153856%201-vyZ7t0POzlEh0j5CXbbl7XCTcANhSB.png"
                alt="Scent Board"
                fill
                className="object-contain"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <div className="absolute bottom-3 left-3 md:bottom-4 md:left-4">
                <h3 className="text-lg md:text-xl lg:text-2xl text-white font-medium">Scent Board</h3>
              </div>
            </div>

            {/* Right Bottom - Scent Creator */}
            <div className="relative aspect-square rounded-2xl overflow-hidden bg-[#e8e8e8]">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Scircle_Sticker_DSCF1604_E%201-Fp5gW4K7w6f24Q6t2qlAVmcH1DUSJv.png"
                alt="Scent Creator"
                fill
                className="object-contain"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              <div className="absolute bottom-3 left-3 md:bottom-4 md:left-4">
                <h3 className="text-lg md:text-xl lg:text-2xl text-white font-medium">Scent Creator</h3>
              </div>
            </div>
          </div>
        </div>

        {/* Technology Description */}
        <div className="flex items-start gap-4 md:gap-10 px-1">
          <div className="hidden md:flex shrink-0">
            <span
              className="text-[#0a1628]/40 text-xs tracking-[0.3em] uppercase"
              style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
            >
              TECHNOLOGY
            </span>
          </div>
          <div className="max-w-xl">
            <span className="text-[#0a1628]/60 text-2xl mb-3 block">①</span>
            <p className="text-[#0a1628] text-base md:text-lg leading-relaxed">
              The perfumer in your pocket, trained by <strong>Master Perfumers</strong> to take your{' '}
              <strong>emotions</strong>, memories and moments and convert them into scents. She creates the{' '}
              <strong>Barça</strong> Scent Drops.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
