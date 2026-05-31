'use client'

import Image from 'next/image'

export function WhyScentSection() {
  return (
    <section className="bg-[#f5f5f5] py-12 md:py-16 px-4 md:px-6">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <h2 className="text-2xl md:text-4xl lg:text-5xl text-[#0a1628] font-light tracking-tight leading-tight mb-10 md:mb-14">
          Create your <span className="font-bold">Own Barca Scent.</span>
        </h2>

        {/* First Row - Memories have a smell */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 mb-8 md:mb-12">
          {/* Left - Text */}
          <div className="flex flex-col justify-center order-2 md:order-1">
            <h3 className="text-xl md:text-2xl lg:text-3xl text-[#0a1628] font-light leading-tight mb-4">
              Memories have a <strong>smell</strong>.
              <br />
              Science shows a <strong>scent</strong> is the
              <br />
              sense most strongly linked to
              <br />
              <strong>emotion</strong> and memory.
            </h3>
          </div>
          {/* Right - Image */}
          <div className="relative aspect-square rounded-2xl overflow-hidden order-1 md:order-2">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DTS_DEEP_SPA_DTS_Studio_Photos_ID11009%201-b4lmeV8BN5GBOGYjvSARPhMuhUC8SS.png"
              alt="Close-up sensory experience"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Second Row - Your story becomes a scent */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
          {/* Left - Image */}
          <div className="relative aspect-square rounded-2xl overflow-hidden">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/unnamed-B6A1R94xUEC1dOFIT5ciqmA1Zu6BYS.png"
              alt="FCB Exclusive Scent ingredients"
              fill
              className="object-cover"
            />
          </div>
          {/* Right - Text */}
          <div className="flex flex-col justify-center">
            <h3 className="text-xl md:text-2xl lg:text-3xl text-[#0a1628] font-light leading-tight mb-6">
              Now, <strong>your</strong> story becomes a
              <br />
              scent. You can create
              <br />
              your own <strong>personalized</strong>
              <br />
              <strong>Barça</strong> scent.
            </h3>
            <button className="self-start bg-gradient-to-r from-[#FF6B5B] via-[#FF9D4D] to-[#FFD166] text-white rounded-full px-6 py-2.5 text-sm font-medium">
              Discover the Drops
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
