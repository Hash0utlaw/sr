import { NavBar } from '@/components/nav-bar'
import { Footer } from '@/components/footer'
import { ServiceHeader } from '@/components/service-header'
import { Section } from '@/components/section'

export default function MetalRoofingPage() {
  return (
    <div className="min-h-screen bg-black text-orange-500">
      <NavBar />
      <ServiceHeader 
        title="Metal Roofing Systems"
        description="Durable, eco-friendly, and aesthetically pleasing roofing solution"
        backgroundImage="/images/specialty/metal-roofing.jpg"
      />
      <Section>
        <div className="space-y-6 animate-fade-in-up">
          <h2 className="text-3xl font-bold">What are Metal Roofing Systems?</h2>
          <p>
            Metal roofing systems are made from various types of metal, including steel, aluminum, copper, and zinc. They come in a variety of styles, from traditional standing seam to tiles that mimic other roofing materials.
          </p>
          <h3 className="text-2xl font-semibold">Key Benefits:</h3>
          <ul className="list-disc list-inside space-y-2">
            <li>Exceptional longevity (50+ years with proper maintenance)</li>
            <li>High wind resistance</li>
            <li>Fire resistant</li>
            <li>Energy efficient (can reflect solar radiant heat)</li>
            <li>Environmentally friendly (often made from recycled materials and 100% recyclable)</li>
            <li>Low maintenance requirements</li>
          </ul>
          <h3 className="text-2xl font-semibold">Types of Metal Roofing:</h3>
          <ul className="list-disc list-inside space-y-2">
            <li>Standing Seam: Clean, modern look with concealed fasteners</li>
            <li>Metal Shingles: Mimic the look of traditional shingles</li>
            <li>Metal Tile: Resembles clay or concrete tiles</li>
            <li>Corrugated Metal: Economical option with exposed fasteners</li>
          </ul>
          <h3 className="text-2xl font-semibold">Ideal Applications:</h3>
          <ul className="list-disc list-inside space-y-2">
            <li>Residential homes</li>
            <li>Commercial buildings</li>
            <li>Agricultural structures</li>
            <li>Industrial facilities</li>
          </ul>
        </div>
      </Section>
      <Footer />
    </div>
  )
}

