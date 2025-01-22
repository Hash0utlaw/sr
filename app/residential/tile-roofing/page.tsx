import { NavBar } from '@/components/nav-bar'
import { Footer } from '@/components/footer'
import { ServiceHeader } from '@/components/service-header'
import { Section } from '@/components/section'

export default function TileRoofingPage() {
  return (
    <div className="min-h-screen bg-black text-orange-500">
      <NavBar />
      <ServiceHeader 
        title="Tile Roofing"
        description="Elegant and long-lasting roofing solution for distinctive homes"
        backgroundImage="/public/residential/tile-hero.png"
      />
      <Section>
        <div className="space-y-6 animate-fade-in-up">
          <h2 className="text-3xl font-bold">The Beauty and Durability of Tile Roofing</h2>
          <p>
            Tile roofing offers a unique combination of beauty, durability, and longevity. At Summit Roofing, we provide high-quality tile roofing solutions that enhance the aesthetic appeal of your home while offering superior protection.
          </p>
          <h3 className="text-2xl font-semibold">Key Benefits:</h3>
          <ul className="list-disc list-inside space-y-2">
            <li>Exceptional durability with a lifespan of 50+ years</li>
            <li>Excellent fire resistance and wind uplift protection</li>
            <li>Energy efficient, helping to keep your home cooler</li>
            <li>Low maintenance requirements</li>
            <li>Available in a wide range of colors and styles</li>
            <li>Environmentally friendly and recyclable</li>
          </ul>
          <h3 className="text-2xl font-semibold">Our Tile Roofing Options:</h3>
          <ul className="list-disc list-inside space-y-2">
            <li>Clay tiles: Traditional look with excellent durability</li>
            <li>Concrete tiles: Versatile and cost-effective</li>
            <li>Slate tiles: Premium, natural stone appearance</li>
            <li>Synthetic tiles: Lightweight alternative with similar aesthetics</li>
          </ul>
        </div>
      </Section>
      <Section dark>
        <div className="space-y-6 animate-fade-in-up">
          <h2 className="text-3xl font-bold">Our Tile Roofing Process</h2>
          <ol className="list-decimal list-inside space-y-4">
            <li>
              <span className="font-semibold">Structural Assessment:</span> We ensure your home can support the weight of tile roofing.
            </li>
            <li>
              <span className="font-semibold">Design Consultation:</span> We help you choose the perfect tile style and color for your home.
            </li>
            <li>
              <span className="font-semibold">Precise Installation:</span> Our expert team carefully installs each tile for optimal performance.
            </li>
            <li>
              <span className="font-semibold">Weatherproofing:</span> We ensure proper underlayment and flashing for maximum protection.
            </li>
            <li>
              <span className="font-semibold">Final Inspection:</span> We thoroughly check the installation to ensure everything is perfect.
            </li>
          </ol>
        </div>
      </Section>
      <Footer />
    </div>
  )
}

