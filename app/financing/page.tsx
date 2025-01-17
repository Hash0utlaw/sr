import { NavBar } from '@/components/nav-bar'
import { Footer } from '@/components/footer'
import { ServiceHeader } from '@/components/service-header'
import { Section } from '@/components/section'
import ContactForm from '@/components/ContactForm'

export default function FinancingPage() {
  return (
    <div className="min-h-screen bg-black text-orange-500">
      <NavBar />
      <ServiceHeader 
        title="Financing Options"
        description="Flexible financing solutions for your roofing project"
        backgroundImage="/images/financing-bg.jpg"
      />
      <Section>
        <div className="space-y-6 animate-fade-in-up">
          <h2 className="text-3xl font-bold">Affordable Roofing Solutions</h2>
          <p className="text-lg">
            At Summit Roofing, we understand that a new roof is a significant investment. That's why we offer flexible financing options to help make your roofing project more affordable. Contact us to learn more about our financing solutions.
          </p>
        </div>
      </Section>
      <Section dark>
        <h2 className="text-3xl font-bold mb-6">Request Financing Information</h2>
        <ContactForm />
      </Section>
      <Footer />
    </div>
  )
}

