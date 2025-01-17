import { NavBar } from '@/components/nav-bar'
import { Footer } from '@/components/footer'
import { ServiceHeader } from '@/components/service-header'
import { Section } from '@/components/section'

export default function ModifiedBitumenPage() {
  return (
    <div className="min-h-screen bg-black text-orange-500">
      <NavBar />
      <ServiceHeader 
        title="Modified Bitumen Roofing"
        description="High-performance, flexible roofing system for various applications"
        backgroundImage="/images/specialty/modified-bitumen.jpg"
      />
      <Section>
        <div className="space-y-6 animate-fade-in-up">
          <h2 className="text-3xl font-bold">What is Modified Bitumen Roofing?</h2>
          <p>
            Modified Bitumen roofing is an asphalt-based, close cousin to the Built-Up Roof (BUR) that offers added tensile strength and elasticity. It&apos;s designed for buildings with low-slope or flat roof structures.
          </p>
          <h3 className="text-2xl font-semibold">Key Benefits:</h3>
          <ul className="list-disc list-inside space-y-2">
            <li>High flexibility, even in low temperatures</li>
            <li>Strong resistance to tears and punctures</li>
            <li>Excellent waterproofing capabilities</li>
            <li>Can be installed in various ways (torch-applied, cold-applied, or self-adhered)</li>
            <li>Long lifespan (20-30 years with proper maintenance)</li>
          </ul>
          <h3 className="text-2xl font-semibold">Ideal Applications:</h3>
          <ul className="list-disc list-inside space-y-2">
            <li>Commercial buildings</li>
            <li>Industrial facilities</li>
            <li>Residential structures with flat or low-slope roofs</li>
          </ul>
        </div>
      </Section>
      <Footer />
    </div>
  )
}
