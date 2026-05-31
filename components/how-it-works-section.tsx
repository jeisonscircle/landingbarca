'use client'

import Image from 'next/image'

export function HowItWorksSection() {
  return (
    <section className="bg-white py-12 md:py-16 px-4 md:px-6">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <h2 className="text-2xl md:text-4xl lg:text-5xl text-[#0a1628] font-light tracking-tight leading-tight mb-6 md:mb-8">
          <span className="font-bold">How</span> it works.
        </h2>

        {/* Description */}
        <div className="mb-8 md:mb-10 max-w-3xl">
          <p className="text-[#0a1628]/80 text-sm md:text-base leading-relaxed mb-2 text-center md:text-left">
            The perfumer in your pocket, trained by <strong>Master Perfumers</strong> to take
            your <strong>emotions</strong>, memories and moments and convert them into scents.
          </p>
          <p className="text-[#0a1628]/80 text-sm md:text-base leading-relaxed text-center md:text-left">
            She creates the <strong>Barça</strong> Scents that later are blended by our Scent Creator.
          </p>
        </div>

        {/* Three equal cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6">
          {/* Aura */}
          <div className="relative aspect-square rounded-2xl overflow-hidden">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DTS_DEEP_SPA_DTS_Studio_Photos_ID10999%20%281%29%201-1-IjYaLlpcDzDbgtr9JBK2vweVTm7RMJ.png"
              alt="Aura technology"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4">
              <h3 className="text-xl md:text-2xl text-white font-light italic">Aura</h3>
            </div>
          </div>

          {/* Scent Board */}
          <div className="relative aspect-square rounded-2xl overflow-hidden bg-black">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202026-04-24%20153856%201-vyZ7t0POzlEh0j5CXbbl7XCTcANhSB.png"
              alt="Scent Board"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4">
              <h3 className="text-xl md:text-2xl text-white font-medium">Scent Board</h3>
            </div>
          </div>

          {/* Scent Creator */}
          <div className="relative aspect-square rounded-2xl overflow-hidden bg-[#e8e8e8]">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Scircle_Sticker_DSCF1604_E%201-Fp5gW4K7w6f24Q6t2qlAVmcH1DUSJv.png"
              alt="Scent Creator"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4">
              <h3 className="text-xl md:text-2xl text-white font-medium">Scent Creator</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
