import { Navbar } from '@/components/navbar'
import { HeroSection } from '@/components/hero-section'
import { DropsSection } from '@/components/drops-section'
import { WhyScentSection } from '@/components/why-scent-section'
import { HowItWorksSection } from '@/components/how-it-works-section'
import { ExclusiveScentSection, CtaBannerSection } from '@/components/exclusive-scent-section'

export default function Home() {
  return (
    <main className="relative min-h-screen bg-white">
      <Navbar />
      <HeroSection />
      <DropsSection />
      <WhyScentSection />
      <HowItWorksSection />
      <ExclusiveScentSection />
      <CtaBannerSection />
    </main>
  )
}
