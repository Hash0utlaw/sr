import { NavBar } from '@/components/nav-bar'
import { HeroSection } from '@/components/hero-section'
import { ServicesSection } from '@/components/services-section'
import { TestimonialsSection } from '@/components/testimonials-section'
import { CTASection } from '@/components/cta-section'
import { Footer } from '@/components/footer'
import { InsuranceClaimSection } from '@/components/insurance-claim-section'

export default function Home() {
  return (
    <main>
      <NavBar />
      <HeroSection />
      <InsuranceClaimSection />
      <ServicesSection />
      <TestimonialsSection />
      <CTASection />
      <Footer />
    </main>
  )
}

