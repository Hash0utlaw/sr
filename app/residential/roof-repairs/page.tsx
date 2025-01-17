import { NavBar } from '@/components/nav-bar'
import { Footer } from '@/components/footer'
import { ServiceHeader } from '@/components/service-header'
import { Section } from '@/components/section'

export default function RoofRepairsPage() {
  return (
    <div className="min-h-screen bg-black text-orange-500">
      <NavBar />
      <ServiceHeader 
        title="Roof Repairs and Maintenance"
        description="Expert care to extend the life of your residential roof"
        backgroundImage="/images/residential/roof-repairs.jpg"
      />
      <Section>
        <div className="space-y-6 animate-fade-in-up">
          <h2 className="text-3xl font-bold">Comprehensive Roof Repair and Maintenance Services</h2>
          <p>
            At Summit Roofing, we understand that proper maintenance and timely repairs are crucial for extending the life of your roof. Our expert team provides comprehensive repair and maintenance services for all types of residential roofs.
          </p>
          <h3 className="text-2xl font-semibold">Our Repair and Maintenance Services:</h3>
          <ul className="list-disc list-inside space-y-2">
            <li>Leak detection and repair</li>
            <li>Shingle replacement</li>
            <li>Flashing repair and replacement</li>
            <li>Gutter cleaning and repair</li>
            <li>Ventilation system maintenance</li>
            <li>Storm damage assessment and repair</li>
          </ul>
          <h3 className="text-2xl font-semibold">Why Choose Our Repair Services?</h3>
          <ul className="list-disc list-inside space-y-2">
            <li>24/7 emergency repair services</li>
            <li>Experienced and certified technicians</li>
            <li>Use of high-quality materials</li>
            <li>Comprehensive roof inspections</li>
            <li>Transparent pricing and detailed estimates</li>
            <li>Warranty on repair work</li>
          </ul>
        </div>
      </Section>
      <Section dark>
        <div className="space-y-6 animate-fade-in-up">
          <h2 className="text-3xl font-bold">Our Roof Maintenance Process</h2>
          <ol className="list-decimal list-inside space-y-4">
            <li>
              <span className="font-semibold">Thorough Inspection:</span> We conduct a comprehensive assessment of your roof's condition.
            </li>
            <li>
              <span className="font-semibold">Detailed Report:</span> We provide a clear report of our findings and recommendations.
            </li>
            <li>
              <span className="font-semibold">Customized Maintenance Plan:</span> We develop a tailored plan to address your roof's specific needs.
            </li>
            <li>
              <span className="font-semibold">Professional Repairs:</span> Our expert team performs necessary repairs using top-quality materials.
            </li>
            <li>
              <span className="font-semibold">Preventive Measures:</span> We implement strategies to prevent future issues and extend your roof's lifespan.
            </li>
          </ol>
        </div>
      </Section>
      <Footer />
    </div>
  )
}

