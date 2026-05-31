import Image from 'next/image'

export function HeroSection() {
  return (
    <section className="w-full bg-white py-8 md:py-12 px-4 md:px-6">
      <div className="max-w-7xl mx-auto">
        {/* Page title */}
        <h1 className="text-2xl md:text-4xl lg:text-5xl font-light text-[#0a1628] tracking-tight leading-tight text-center mb-8 md:mb-12">
          More than a <span className="font-bold">Club</span>. More than a <span className="font-bold">Scent</span>.
        </h1>

        {/* Two cards side by side */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 mb-6">
          {/* Card 1 - Legendary Barça drops */}
          <div className="flex flex-col">
            <h3 className="text-lg md:text-xl text-[#0a1628] mb-3">
              Legendary <span className="font-bold">Barça drops.</span>
            </h3>
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-[#1a1a2e]">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/QgPju0OriNWaBuFmAv0xr_kgSCMyS9.png-eA5awsWihSm5wa9viNQnA0BKV1fecT.jpeg"
                alt="Scircle x Barça Exclusive Drop Edition"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute bottom-4 left-4">
                <button className="bg-gradient-to-r from-[#FF6B5B] via-[#FF9D4D] to-[#FFD166] text-white rounded-full px-5 py-2 text-sm font-medium">
                  Discover the Drops
                </button>
              </div>
            </div>
            <p className="text-sm text-[#0a1628]/70 mt-3 leading-relaxed">
              Limited editions that bottle the moments that made history. Wear what it feels like to be culer.
            </p>
          </div>

          {/* Card 2 - Create Your Barça Scent */}
          <div className="flex flex-col">
            <h3 className="text-lg md:text-xl text-[#0a1628] mb-3">
              Create Your <span className="font-bold">Barça Scent</span>
            </h3>
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-[#0a1628]">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%20Apr%2027%2C%202026%2C%2003_54_02%20PM%201-XcyNWJn4n1hGTGRDEfqr2US1EWfPLP.png"
                alt="FC Barcelona fans in stadium"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute bottom-4 left-4">
                <button className="bg-gradient-to-r from-[#FF6B5B] via-[#FF9D4D] to-[#FFD166] text-white rounded-full px-5 py-2 text-sm font-medium">
                  Discover the Drops
                </button>
              </div>
            </div>
            <p className="text-sm text-[#0a1628]/70 mt-3 leading-relaxed">
              Aura turns your Barça memory into a fragrance only you wear
            </p>
          </div>
        </div>

        {/* Bottom tagline */}
        <p className="text-center text-sm md:text-base text-[#0a1628] mt-8 md:mt-10">
          <span className="font-light">Exclusive</span> <span className="font-bold">scent drops</span> <span className="font-light">capture</span>
          <br className="hidden sm:block" />
          <span className="font-light">defining</span> <span className="font-bold">Barça</span> <span className="font-light">moments.</span>
        </p>
      </div>
    </section>
  )
}
