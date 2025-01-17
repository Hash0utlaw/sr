import { NavBar } from '@/components/nav-bar'
import { Footer } from '@/components/footer'
import { ServiceHeader } from '@/components/service-header'
import { Section } from '@/components/section'

export default function GreenRoofingPage() {
  return (
    <div className="min-h-screen bg-black text-orange-500">
      <NavBar />
      <ServiceHeader 
        title="Green Roofing Solutions"
        description="Environmentally friendly roofing systems for sustainable buildings"
        backgroundImage="/images/specialty/green-roofing.jpg"
      />
      <Section>
        <div className="space-y-6 animate-fade-in-up">
          <h2 className="text-3xl font-bold">What are Green Roofing Solutions?</h2>
          <p>
            Green roofing, also known as living roofs or vegetative roofs, involves growing plants on rooftops. These systems can be as simple as a light covering of hardy groundcover or as complex as a fully accessible rooftop garden.
          </p>
          <h3 className="text-2xl font-semibold">Key Benefits:</h3>
          <ul className="list-disc list-inside space-y-2">
            <li>Improved energy efficiency</li>
            <li>Reduced urban heat island effect</li>
            <li>Stormwater management</li>
            <li>Extended roof life</li>
            <li>Increased biodiversity</li>
            <li>Improved air quality</li>
            <li>Aesthetic appeal and potential for recreational space</li>
          </ul>
          <h3 className="text-2xl font-semibold">Types of Green Roofs:</h3>
          <ul className="list-disc list-inside space-y-2">
            <li>Extensive: Lightweight, low maintenance, often not accessible</li>
            <li>Intensive: Deeper soil, supports a wider variety of plants, often accessible</li>
            <li>Semi-Intensive: A hybrid of extensive and intensive systems</li>
          </ul>
          <h3 className="text-2xl font-semibold">Ideal Applications:</h3>
          <ul className="list-disc list-inside space-y-2">
            <li>Commercial buildings</li>
            <li>Residential structures</li>
            <li>Government buildings</li>
            <li>Educational institutions</li>
            <li>Healthcare facilities</li>
          </ul>
        </div>
      </Section>
      <Footer />
    </div>
  )
}

