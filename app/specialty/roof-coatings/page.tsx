import { NavBar } from '@/components/nav-bar'
import { Footer } from '@/components/footer'
import { ServiceHeader } from '@/components/service-header'
import { Section } from '@/components/section'

export default function RoofCoatingsPage() {
  return (
    <div className="min-h-screen bg-black text-orange-500">
      <NavBar />
      <ServiceHeader 
        title="Roof Coatings and Restoration"
        description="Extend the life of your roof with advanced coating solutions"
        backgroundImage="/images/specialty/roof-coatings.jpg"
      />
      <Section>
        <div className="space-y-6 animate-fade-in-up">
          <h2 className="text-3xl font-bold">What are Roof Coatings and Restoration?</h2>
          <p>
            Roof coatings are fluid-applied roofing systems that can restore and extend the life of various types of existing roof systems. They provide a new, waterproof membrane that can significantly improve a roof&apos;s performance and longevity.
          </p>
          <h3 className="text-2xl font-semibold">Key Benefits:</h3>
          <ul className="list-disc list-inside space-y-2">
            <li>Extends roof life</li>
            <li>Improves energy efficiency (especially with reflective coatings)</li>
            <li>Cost-effective alternative to full roof replacement</li>
            <li>Minimal disruption during application</li>
            <li>Can be recoated for ongoing protection</li>
            <li>Environmentally friendly (reduces landfill waste)</li>
          </ul>
          <h3 className="text-2xl font-semibold">Types of Roof Coatings:</h3>
          <ul className="list-disc list-inside space-y-2">
            <li>Acrylic: Versatile, UV resistant, and cost-effective</li>
            <li>Silicone: Excellent weathering properties and water resistance</li>
            <li>Polyurethane: Highly durable with excellent chemical resistance</li>
            <li>Elastomeric: Flexible coating that can expand and contract with the roof</li>
          </ul>
          <h3 className="text-2xl font-semibold">Ideal Applications:</h3>
          <ul className="list-disc list-inside space-y-2">
            <li>Commercial buildings</li>
            <li>Industrial facilities</li>
            <li>Retail centers</li>
            <li>Schools and universities</li>
            <li>Government buildings</li>
          </ul>
        </div>
      </Section>
      <Footer />
    </div>
  )
}