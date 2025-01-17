import { NavBar } from '@/components/nav-bar'
import { Footer } from '@/components/footer'
import { ServiceHeader } from '@/components/service-header'
import { Section } from '@/components/section'

export default function SinglePlyRoofingPage() {
  return (
    <div className="min-h-screen bg-black text-orange-500">
      <NavBar />
      <ServiceHeader 
        title="Single-Ply Roofing (TPO, EPDM, PVC)"
        description="Versatile, energy-efficient roofing solutions for modern buildings"
        backgroundImage="/images/specialty/single-ply-roofing.jpg"
      />
      <Section>
        <div className="space-y-6 animate-fade-in-up">
          <h2 className="text-3xl font-bold">What is Single-Ply Roofing?</h2>
          <p>
            Single-Ply Roofing systems are flexible sheets of compounded synthetic materials that are manufactured in a factory. The three main types are TPO (Thermoplastic Polyolefin), EPDM (Ethylene Propylene Diene Terpolymer), and PVC (Polyvinyl Chloride).
          </p>
          <h3 className="text-2xl font-semibold">Key Benefits:</h3>
          <ul className="list-disc list-inside space-y-2">
            <li>Excellent flexibility and elongation</li>
            <li>Strong resistance to UV radiation and chemical exposure</li>
            <li>Energy-efficient (especially white or light-colored membranes)</li>
            <li>Lightweight and easy to install</li>
            <li>Long lifespan (20-30 years with proper maintenance)</li>
          </ul>
          <h3 className="text-2xl font-semibold">Types of Single-Ply Roofing:</h3>
          <ul className="list-disc list-inside space-y-2">
            <li>TPO: Great energy efficiency and heat reflection</li>
            <li>EPDM: Excellent durability and weather resistance</li>
            <li>PVC: High chemical resistance and fire retardant properties</li>
          </ul>
          <h3 className="text-2xl font-semibold">Ideal Applications:</h3>
          <ul className="list-disc list-inside space-y-2">
            <li>Commercial buildings</li>
            <li>Industrial facilities</li>
            <li>Retail centers</li>
            <li>Healthcare facilities</li>
          </ul>
        </div>
      </Section>
      <Footer />
    </div>
  )
}

