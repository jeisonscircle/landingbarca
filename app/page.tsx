import { Navbar } from '@/components/navbar'
import { HeroSection } from '@/components/hero-section'
import { FeaturesSection } from '@/components/features-section'
import { DropsSection } from '@/components/drops-section'
import { HowItWorksSection } from '@/components/how-it-works-section'
import { WhyScentSection } from '@/components/why-scent-section'
import { ExclusiveScentSection, CtaBannerSection } from '@/components/exclusive-scent-section'

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#0a192f]">
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <DropsSection />
      <HowItWorksSection />
      <WhyScentSection />
      <ExclusiveScentSection />
      <CtaBannerSection />
    </main>
  )
}
