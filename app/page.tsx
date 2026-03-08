import { HeroSection } from '@/components/sections/hero'
import { StatsSection } from '@/components/sections/stats'
import { ServicesPreviewSection } from '@/components/sections/services-preview'
import { TestimonialsSection } from '@/components/sections/testimonials'

export default function Home() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <ServicesPreviewSection />
      <TestimonialsSection />
    </>
  )
}
