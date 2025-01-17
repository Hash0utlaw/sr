import { NavBar } from '@/components/nav-bar'
import { Footer } from '@/components/footer'
import { ServiceHeader } from '@/components/service-header'
import { Section } from '@/components/section'
import Link from 'next/link'

export default function FluidAppliedRoofingPage() {
  return (
    <div className="min-h-screen bg-black text-orange-500">
      <NavBar />
      <ServiceHeader 
        title="Fluid-Applied Roofing Systems"
        description="Innovative, cost-effective roofing solutions for long-term durability"
        backgroundImage="/images/fluid-applied-roofing-bg.jpg"
      />
      <Section>
        <div className="space-y-6 animate-fade-in-up">
          <h2 className="text-3xl font-bold">Fluid-Applied Roofing: The Innovative Solution</h2>
          <p className="text-lg">
            Fluid-applied roofing systems offer a cutting-edge alternative to traditional roof replacements. These systems provide exceptional protection and longevity at a fraction of the cost of conventional methods.
          </p>
          <h3 className="text-2xl font-semibold">Key Benefits:</h3>
          <ul className="list-disc list-inside space-y-2">
            <li>Cost-effective compared to full roof replacement</li>
            <li>20-year labor and material warranty</li>
            <li>Seamless, waterproof membrane</li>
            <li>Excellent UV and weather resistance</li>
            <li>Energy-efficient, can reduce cooling costs</li>
            <li>Minimal disruption during installation</li>
          </ul>
        </div>
      </Section>
      <Section dark>
        <div className="space-y-6 animate-fade-in-up">
          <h2 className="text-3xl font-bold">Our Fluid-Applied Roofing Process</h2>
          <ol className="list-decimal list-inside space-y-4">
            <li><span className="font-semibold">Roof Inspection:</span> We assess your current roof&apos;s condition and suitability for fluid-applied systems.</li>
            <li><span className="font-semibold">Surface Preparation:</span> We clean and repair the existing roof surface as needed.</li>
            <li><span className="font-semibold">Primer Application:</span> We apply a primer to ensure proper adhesion of the fluid-applied system.</li>
            <li><span className="font-semibold">Base Coat Application:</span> We apply the base coat of the fluid-applied system.</li>
            <li><span className="font-semibold">Reinforcement:</span> We embed reinforcing fabric into the base coat for added strength.</li>
            <li><span className="font-semibold">Top Coat Application:</span> We apply the final, protective top coat.</li>
            <li><span className="font-semibold">Inspection and Warranty:</span> We perform a final inspection and provide you with the 20-year warranty.</li>
          </ol>
        </div>
      </Section>
      <Section>
        <div className="text-center space-y-6 animate-fade-in-up">
          <h2 className="text-3xl font-bold">Is Fluid-Applied Roofing Right for You?</h2>
          <p className="text-lg">
            Fluid-applied roofing systems are ideal for many commercial and industrial buildings, as well as some residential structures. They&apos;re particularly beneficial for:
          </p>
          <ul className="list-disc list-inside space-y-2 text-left max-w-2xl mx-auto">
            <li>Buildings with flat or low-slope roofs</li>
            <li>Structures where a full tear-off would be disruptive or costly</li>
            <li>Roofs with multiple penetrations or complex geometries</li>
            <li>Properties in areas with extreme weather conditions</li>
          </ul>
          <Link href="/contact" className="inline-block bg-orange-500 text-black px-6 py-3 rounded-full hover:bg-orange-600 transition-colors mt-4">
            Get a Free Consultation
          </Link>
        </div>
      </Section>
      <Footer />
    </div>
  )
}
