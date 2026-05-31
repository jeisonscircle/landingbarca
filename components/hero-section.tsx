import Image from 'next/image'

export function HeroSection() {
  return (
    <section className="w-full bg-white">
      {/* Page title */}
      <div className="px-4 md:px-8 py-6 md:py-8">
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-light text-[#0a1628] tracking-tight leading-tight">
          <span className="font-bold">Smell</span> legendary{' '}
          <span className="font-bold">Barça</span> moments
        </h1>
      </div>

      {/* Hero Banner */}
      <div className="w-full px-4 md:px-6 pb-4 md:pb-6">
        <div className="relative w-full max-w-7xl mx-auto h-[280px] sm:h-[400px] md:h-[500px] rounded-2xl overflow-hidden bg-[#f5f3ef]">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/QgPju0OriNWaBuFmAv0xr_kgSCMyS9.png-eA5awsWihSm5wa9viNQnA0BKV1fecT.jpeg"
            alt="Scircle x Barça Exclusive Drop Edition in stadium seats"
            fill
            className="object-cover"
            priority
            quality={85}
            sizes="(max-width: 768px) 100vw, 1200px"
          />

          <div
            className="absolute bottom-0 left-0 w-[250px] md:w-[300px] h-[160px] md:h-[200px] pointer-events-none"
            style={{
              background:
                'radial-gradient(ellipse at 0% 100%, rgba(10,22,40,0.95) 0%, rgba(10,22,40,0.7) 25%, rgba(10,22,40,0.3) 50%, transparent 75%)',
            }}
          />

          <div className="absolute inset-0 flex flex-col justify-end items-start p-5 md:p-8">
            <button className="bg-gradient-to-r from-[#FF6B5B] via-[#FF9D4D] to-[#FFD166] hover:opacity-90 transition-opacity text-white rounded-full px-6 md:px-8 py-2.5 md:py-3 text-sm md:text-base font-semibold">
              Discover the Drops
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
