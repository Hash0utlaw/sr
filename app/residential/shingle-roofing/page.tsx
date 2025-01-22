import { NavBar } from '@/components/nav-bar'
import { Footer } from '@/components/footer'
import { ServiceHeader } from '@/components/service-header'
import { Section } from '@/components/section'
import { IKODynastyShingles } from '@/components/iko-dynasty-shingles'

export default function ShingleRoofingPage() {
  return (
    <div className="min-h-screen bg-black text-orange-500">
      <NavBar />
      <ServiceHeader 
        title="Shingle Roofing"
        description="Versatile and cost-effective roofing solution for residential homes"
        backgroundImage="/public/residential/shingle-hero.png"
      />
      <Section>
        <div className="space-y-6 animate-fade-in-up">
          <h2 className="text-3xl font-bold">Why Choose Shingle Roofing?</h2>
          <p>
            Shingle roofing is the most popular choice for residential homes due to its versatility, affordability, and wide range of styles and colors. At Summit Roofing, we offer premium shingle roofing solutions that combine durability with aesthetic appeal.
          </p>
          <h3 className="text-2xl font-semibold">Key Benefits:</h3>
          <ul className="list-disc list-inside space-y-2">
            <li>Cost-effective roofing solution</li>
            <li>Wide variety of colors and styles to match any home</li>
            <li>Easy installation and repair</li>
            <li>Good fire and wind resistance (with proper installation)</li>
            <li>Lifespan of 20-30 years with proper maintenance</li>
          </ul>
          <h3 className="text-2xl font-semibold">Our Shingle Options:</h3>
          <ul className="list-disc list-inside space-y-2">
            <li>3-tab shingles: Economical and traditional</li>
            <li>Architectural shingles: Enhanced durability and aesthetic appeal</li>
            <li>Designer shingles: Premium look mimicking slate or wood shake</li>
            <li>Impact-resistant shingles: Ideal for areas prone to hail</li>
          </ul>
        </div>
      </Section>
      <Section>
        <IKODynastyShingles />
      </Section>
      <Section dark>
        <div className="space-y-6 animate-fade-in-up">
          <h2 className="text-3xl font-bold">Our Shingle Roofing Process</h2>
          <ol className="list-decimal list-inside space-y-4">
            <li>
              <span className="font-semibold">Initial Consultation:</span> We assess your needs and provide expert recommendations.
            </li>
            <li>
              <span className="font-semibold">Material Selection:</span> Choose from our wide range of high-quality shingles.
            </li>
            <li>
              <span className="font-semibold">Professional Installation:</span> Our expert team ensures proper installation for maximum durability.
            </li>
            <li>
              <span className="font-semibold">Final Inspection:</span> We conduct a thorough check to ensure everything meets our high standards.
            </li>
            <li>
              <span className="font-semibold">Ongoing Support:</span> We provide maintenance tips and are always available for future service needs.
            </li>
          </ol>
        </div>
      </Section>
      <Footer />
    </div>
  )
}

