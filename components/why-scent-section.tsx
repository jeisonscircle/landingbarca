'use client'

import Image from 'next/image'
import { Button } from '@/components/ui/button'

export function WhyScentSection() {
  return (
    <section className="bg-white">
      {/* Why Scent - Top Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {/* Image first on mobile */}
        <div className="relative h-[260px] sm:h-[320px] lg:hidden">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DTS_DEEP_SPA_DTS_Studio_Photos_ID11009%201-b4lmeV8BN5GBOGYjvSARPhMuhUC8SS.png"
            alt="Close-up sensory experience with closed eyes"
            fill
            className="object-cover"
          />
        </div>

        {/* Left - Text */}
        <div className="relative bg-white px-6 py-10 md:p-12 lg:p-16 flex flex-col justify-center">
          <div className="absolute left-4 top-1/2 -translate-y-1/2 hidden md:block">
            <span
              className="text-[#0a1628]/40 text-xs tracking-[0.3em] uppercase"
              style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
            >
              WHY SCENT
            </span>
          </div>
          <div className="md:ml-10">
            <h2 className="text-xl md:text-3xl lg:text-4xl text-[#0a1628] font-light leading-tight mb-7">
              Memories have a <strong>smell</strong>.
              <br />
              Science shows <strong>scent</strong> is the
              <br />
              sense most strongly linked to
              <br />
              <strong>emotion</strong> and memory.
            </h2>
            <Button
              variant="outline"
              className="rounded-full px-6 py-2.5 border-[#0a1628] text-[#0a1628] hover:bg-[#0a1628] hover:text-white transition-colors"
            >
              → Discover more
            </Button>
          </div>
        </div>

        {/* Right - Image (desktop only) */}
        <div className="relative hidden lg:block min-h-[400px]">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DTS_DEEP_SPA_DTS_Studio_Photos_ID11009%201-b4lmeV8BN5GBOGYjvSARPhMuhUC8SS.png"
            alt="Close-up sensory experience with closed eyes"
            fill
            className="object-cover"
          />
        </div>
      </div>

      {/* Your Barça Story - Bottom Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {/* Left - Image */}
        <div className="relative h-[260px] sm:h-[320px] lg:min-h-[400px]">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/SSkqmeYtSJnF8aG3OjI61_ZBXxWpfM-Zg6wFPBGQIY7HcWmVBXlBqSw2P0ikn.png"
            alt="Fan experiencing Barça scent"
            fill
            className="object-cover"
          />
        </div>

        {/* Right - Text */}
        <div className="relative bg-white px-6 py-10 md:p-12 lg:p-16 flex flex-col justify-center">
          <div className="absolute right-4 top-1/2 -translate-y-1/2 hidden md:block">
            <span
              className="text-[#0a1628]/40 text-xs tracking-[0.3em] uppercase"
              style={{ writingMode: 'vertical-rl' }}
            >
              YOUR BARÇA STORY
            </span>
          </div>
          <div className="max-w-lg">
            <h2 className="text-xl md:text-3xl lg:text-4xl text-[#0a1628] font-light leading-tight mb-7">
              Now, <strong>your</strong> story becomes a
              <br />
              scent. You can create your
              <br />
              own <strong>personalized</strong>
              <br />
              <strong>Barça</strong> scent.
            </h2>
            <Button
              variant="outline"
              className="rounded-full px-6 py-2.5 border-[#0a1628] text-[#0a1628] hover:bg-[#0a1628] hover:text-white transition-colors"
            >
              → Create your Barça scent
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
