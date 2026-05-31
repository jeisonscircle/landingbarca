'use client'

import Image from 'next/image'

export function WhyScentSection() {
  return (
    <section className="bg-[#f0f0f0] py-12 md:py-16 px-4 md:px-6">
      <div className="max-w-5xl mx-auto">
        {/* Title */}
        <h2 className="text-2xl md:text-4xl text-[#0a1628] font-normal tracking-tight leading-tight mb-10 md:mb-14">
          Create your <span className="font-bold">Own Barça Scent.</span>
        </h2>

        {/* First Row - Memories have a smell */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-10 mb-8 md:mb-12">
          {/* Left - Text */}
          <div className="flex flex-col justify-center md:col-span-1">
            <p className="text-sm sm:text-base md:text-lg text-[#0a1628] font-normal leading-relaxed">
              Memories have a <span className="font-bold">smell</span>.<br />
              Science shows a <span className="font-bold">scent</span> is the<br />
              sense most strongly linked to<br />
              <span className="font-bold">emotion</span> and memory.
            </p>
          </div>
          {/* Right - Image */}
          <div className="relative aspect-video md:aspect-[5/3] rounded-lg md:rounded-2xl overflow-hidden md:col-span-2">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DTS_DEEP_SPA_DTS_Studio_Photos_ID11009%201-b4lmeV8BN5GBOGYjvSARPhMuhUC8SS.png"
              alt="Close-up sensory experience"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Second Row - Your story becomes a scent */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-10">
          {/* Left - Image */}
          <div className="relative aspect-square rounded-lg md:rounded-2xl overflow-hidden">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/unnamed-B6A1R94xUEC1dOFIT5ciqmA1Zu6BYS.png"
              alt="FCB Exclusive Scent ingredients"
              fill
              className="object-cover"
            />
          </div>
          {/* Right - Text */}
          <div className="flex flex-col justify-center md:col-span-2">
            <p className="text-sm sm:text-base md:text-lg text-[#0a1628] font-normal leading-relaxed mb-4 md:mb-6">
              Now, <span className="font-bold">your story becomes</span><br />
              <span className="font-bold">a scent</span>. You can create<br />
              your own <span className="font-bold">personalized</span><br />
              <span className="font-bold">Barça scent</span>.
            </p>
            <button className="self-start bg-gradient-to-r from-[#FF6B5B] via-[#FF9D4D] to-[#FFD166] text-white rounded-full px-5 md:px-8 py-2 md:py-3 text-xs md:text-base font-semibold hover:opacity-90 transition-opacity">
              Discover the Drops
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
