import { NavBar } from '@/components/nav-bar'
import { Footer } from '@/components/footer'
import { ServiceHeader } from '@/components/service-header'
import { Section } from '@/components/section'

export default function MetalRoofingPage() {
  return (
    <div className="min-h-screen bg-black text-orange-500">
      <NavBar />
      <ServiceHeader 
        title="Metal Roofing"
        description="Durable, energy-efficient, and stylish roofing solution for modern homes"
        backgroundImage="/images/residential/metal-roofing.jpg"
      />
      <Section>
        <div className="space-y-6 animate-fade-in-up">
          <h2 className="text-3xl font-bold">The Advantages of Metal Roofing</h2>
          <p>
            Metal roofing has gained popularity in residential applications due to its longevity, energy efficiency, and sleek appearance. Summit Roofing offers top-quality metal roofing solutions that combine durability with modern aesthetics.
          </p>
          <h3 className="text-2xl font-semibold">Key Benefits:</h3>
          <ul className="list-disc list-inside space-y-2">
            <li>Exceptional longevity (50+ years with proper maintenance)</li>
            <li>High energy efficiency, reflecting solar radiation</li>
            <li>Excellent resistance to wind, fire, and impacts</li>
            <li>Low maintenance requirements</li>
            <li>Environmentally friendly and recyclable</li>
            <li>Available in a variety of styles and colors</li>
          </ul>
          <h3 className="text-2xl font-semibold">Our Metal Roofing Options:</h3>
          <ul className="list-disc list-inside space-y-2">
            <li>Standing seam metal roofs: Sleek, modern appearance</li>
            <li>Metal shingles: Mimics the look of traditional shingles</li>
            <li>Corrugated metal panels: Economical and durable</li>
            <li>Stone-coated steel: Combines durability with traditional aesthetics</li>
          </ul>
        </div>
      </Section>
      <Section dark>
        <div className="space-y-6 animate-fade-in-up">
          <h2 className="text-3xl font-bold">Our Metal Roofing Process</h2>
          <ol className="list-decimal list-inside space-y-4">
            <li>
              <span className="font-semibold">Consultation and Design:</span> We help you choose the best metal roofing option for your home.
            </li>
            <li>
              <span className="font-semibold">Custom Fabrication:</span> We custom-cut metal panels to fit your roof perfectly.
            </li>
            <li>
              <span className="font-semibold">Proper Installation:</span> Our skilled team ensures correct installation for optimal performance.
            </li>
            <li>
              <span className="font-semibold">Quality Assurance:</span> We conduct a thorough inspection to ensure everything is perfect.
            </li>
            <li>
              <span className="font-semibold">Ongoing Support:</span> We provide care instructions and are available for any future needs.
            </li>
          </ol>
        </div>
      </Section>
      <Footer />
    </div>
  )
}

