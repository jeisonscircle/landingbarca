import Image from 'next/image'

export function HeroSection() {
  return (
    <section className="w-full bg-[#f0f0f0] pt-6 pb-8 md:pt-10 md:pb-12 px-4 md:px-6">
      <div className="max-w-5xl mx-auto">

        {/* Page title */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-normal text-[#0a1628] tracking-tight text-center mb-6 md:mb-8 leading-snug">
          More than a <span className="font-bold">Club</span>. More than a <span className="font-bold">Scent</span>.
        </h1>

        {/* Two cards side by side */}
        <div className="grid grid-cols-2 gap-4 md:gap-6 mb-8 md:mb-10">
          {/* Card 1 - Legendary Barça drops */}
          <div className="flex flex-col">
            <h3 className="text-base sm:text-lg md:text-xl font-normal text-[#0a1628] mb-2 md:mb-3 leading-tight">
              Legendary <span className="font-bold">Barça drops.</span>
            </h3>
            <div className="relative aspect-[4/3] rounded-xl md:rounded-2xl overflow-hidden bg-[#1a1a2e]">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/QgPju0OriNWaBuFmAv0xr_kgSCMyS9.png-eA5awsWihSm5wa9viNQnA0BKV1fecT.jpeg"
                alt="Scircle x Barça Exclusive Drop Edition"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute bottom-3 left-3 md:bottom-4 md:left-4">
                <button className="bg-gradient-to-r from-[#FF6B5B] via-[#FF9D4D] to-[#FFD166] text-white rounded-full px-3 md:px-5 py-1.5 md:py-2 text-xs md:text-sm font-semibold">
                  Discover the Drops
                </button>
              </div>
            </div>
            <p className="text-xs sm:text-sm text-[#0a1628]/60 mt-2 md:mt-3 leading-relaxed">
              Limited editions that bottle the moments that made history. Wear what it feels like to be culer.
            </p>
          </div>

          {/* Card 2 - Create Your Barça Scent */}
          <div className="flex flex-col">
            <h3 className="text-base sm:text-lg md:text-xl font-normal text-[#0a1628] mb-2 md:mb-3 leading-tight">
              <span className="font-bold">Create</span> Your&nbsp; <span className="font-bold">Barça</span> Scent
            </h3>
            <div className="relative aspect-[4/3] rounded-xl md:rounded-2xl overflow-hidden bg-[#0a1628]">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%20Apr%2027%2C%202026%2C%2003_54_02%20PM%201-XcyNWJn4n1hGTGRDEfqr2US1EWfPLP.png"
                alt="FC Barcelona fans in stadium"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute bottom-3 left-3 md:bottom-4 md:left-4">
                <button className="bg-gradient-to-r from-[#FF6B5B] via-[#FF9D4D] to-[#FFD166] text-white rounded-full px-3 md:px-5 py-1.5 md:py-2 text-xs md:text-sm font-semibold">
                  Discover the Drops
                </button>
              </div>
            </div>
            <p className="text-xs sm:text-sm text-[#0a1628]/60 mt-2 md:mt-3 leading-relaxed">
              Aura turns your Barça memory into a fragrance only you wear
            </p>
          </div>
        </div>

      </div>
    </section>
  )
}
