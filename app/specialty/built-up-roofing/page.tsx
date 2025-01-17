import { NavBar } from '@/components/nav-bar'
import { Footer } from '@/components/footer'
import { ServiceHeader } from '@/components/service-header'
import { Section } from '@/components/section'

export default function BuiltUpRoofingPage() {
  return (
    <div className="min-h-screen bg-black text-orange-500">
      <NavBar />
      <ServiceHeader 
        title="Built-Up Roofing (BUR)"
        description="Durable, multi-layer roofing system for flat or low-slope roofs"
        backgroundImage="/images/specialty/built-up-roofing.jpg"
      />
      <Section>
        <div className="space-y-6 animate-fade-in-up">
          <h2 className="text-3xl font-bold">What is Built-Up Roofing?</h2>
          <p>
            Built-Up Roofing (BUR) is a time-tested roofing system that consists of alternating layers of bitumen and reinforcing fabric. This creates a finished membrane that can be used on flat or low-slope roofs.
          </p>
          <h3 className="text-2xl font-semibold">Key Benefits:</h3>
          <ul className="list-disc list-inside space-y-2">
            <li>Excellent waterproofing and UV protection</li>
            <li>Long-lasting durability (20-30 years with proper maintenance)</li>
            <li>Resistant to foot traffic and impact</li>
            <li>Good fire resistance</li>
            <li>Cost-effective over the long term</li>
          </ul>
          <h3 className="text-2xl font-semibold">Ideal Applications:</h3>
          <ul className="list-disc list-inside space-y-2">
            <li>Commercial buildings</li>
            <li>Industrial facilities</li>
            <li>Flat or low-slope residential roofs</li>
          </ul>
        </div>
      </Section>
      <Footer />
    </div>
  )
}

