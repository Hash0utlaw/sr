import { NavBar } from '@/components/nav-bar'
import { Footer } from '@/components/footer'
import { ServiceHeader } from '@/components/service-header'
import { Section } from '@/components/section'

export default function FlatRoofingPage() {
  return (
    <div className="min-h-screen bg-black text-orange-500">
      <NavBar />
      <ServiceHeader 
        title="Flat Roofing"
        description="Modern and versatile roofing solution for contemporary homes"
        backgroundImage="/images/residential/flat-roofing.jpg"
      />
      <Section>
        <div className="space-y-6 animate-fade-in-up">
          <h2 className="text-3xl font-bold">The Advantages of Flat Roofing</h2>
          <p>
            Flat roofing offers a sleek, modern look and practical benefits for residential homes. Summit Roofing provides high-quality flat roofing solutions that combine style with functionality and durability.
          </p>
          <h3 className="text-2xl font-semibold">Key Benefits:</h3>
          <ul className="list-disc list-inside space-y-2">
            <li>Modern, clean aesthetic for contemporary homes</li>
            <li>Excellent for creating usable outdoor spaces (roof decks, gardens)</li>
            <li>Energy efficient, especially with reflective coatings</li>
            <li>Easy installation and maintenance</li>
            <li>Cost-effective solution for large roof areas</li>
            <li>Versatile for solar panel installation</li>
          </ul>
          <h3 className="text-2xl font-semibold">Our Flat Roofing Options:</h3>
          <ul className="list-disc list-inside space-y-2">
            <li>EPDM (Ethylene Propylene Diene Monomer): Durable synthetic rubber</li>
            <li>TPO (Thermoplastic Polyolefin): Energy-efficient and heat-reflective</li>
            <li>PVC (Polyvinyl Chloride): Highly durable and chemical-resistant</li>
            <li>Modified Bitumen: Asphalt-based material with added durability</li>
            <li>Built-Up Roofing (BUR): Traditional multi-layer system</li>
          </ul>
        </div>
      </Section>
      <Section dark>
        <div className="space-y-6 animate-fade-in-up">
          <h2 className="text-3xl font-bold">Our Flat Roofing Process</h2>
          <ol className="list-decimal list-inside space-y-4">
            <li>
              <span className="font-semibold">Site Evaluation:</span> We assess your home's structure and your specific needs.
            </li>
            <li>
              <span className="font-semibold">Material Selection:</span> We help you choose the best flat roofing material for your project.
            </li>
            <li>
              <span className="font-semibold">Proper Installation:</span> Our expert team ensures correct installation for optimal performance.
            </li>
            <li>
              <span className="font-semibold">Drainage Solutions:</span> We implement effective drainage systems to prevent water pooling.
            </li>
            <li>
              <span className="font-semibold">Final Inspection:</span> We conduct a thorough check to ensure everything meets our high standards.
            </li>
          </ol>
        </div>
      </Section>
      <Footer />
    </div>
  )
}

