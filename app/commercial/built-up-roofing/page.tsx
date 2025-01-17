import { NavBar } from '@/components/nav-bar'
import { ServiceHeader } from '@/components/service-header'
import { Section } from '@/components/section'
import { Footer } from '@/components/footer'
import { CheckCircle } from 'lucide-react'

export default function BuiltUpRoofingPage() {
  return (
    <div className="min-h-screen bg-black text-orange-500">
      <NavBar />
      <ServiceHeader 
        title="Built-Up Roofing (BUR)"
        description="Multi-layer protection for flat or low-slope commercial roofs"
        backgroundImage="/built-up-roofing-bg.jpg"
      />
      <Section>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4 animate-fade-in-left">
            <h2 className="text-3xl font-bold">What is Built-Up Roofing?</h2>
            <p className="text-lg text-orange-300">
              Built-Up Roofing (BUR) is a time-tested roofing system that consists of alternating layers of bitumen and reinforcing fabric. This creates a finished membrane that can be used on flat or low-slope roofs, providing excellent protection for commercial buildings.
            </p>
            <ul className="space-y-2 text-orange-300">
              <li className="flex items-start">
                <CheckCircle className="w-6 h-6 text-orange-500 mr-2 flex-shrink-0" />
                <span>Multiple layers for enhanced durability</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-6 h-6 text-orange-500 mr-2 flex-shrink-0" />
                <span>Excellent waterproofing and UV protection</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-6 h-6 text-orange-500 mr-2 flex-shrink-0" />
                <span>Resistant to foot traffic and impacts</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-6 h-6 text-orange-500 mr-2 flex-shrink-0" />
                <span>Long-lasting (20-30 years with proper maintenance)</span>
              </li>
            </ul>
          </div>
          <div className="animate-fade-in-right">
            <img src="/built-up-roofing.jpg" alt="Built-Up Roofing" className="rounded-lg shadow-lg" />
          </div>
        </div>
      </Section>
      <Section dark>
        <h2 className="text-3xl font-bold text-center mb-8">Our Built-Up Roofing Process</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { title: "Roof Inspection", description: "Thorough evaluation of the existing roof structure" },
            { title: "Surface Preparation", description: "Cleaning and repairing the roof surface as needed" },
            { title: "Base Layer Application", description: "Installation of the initial waterproofing layer" },
            { title: "Multiple Ply Sheets", description: "Application of alternating layers of bitumen and reinforcing fabric" },
            { title: "Top Layer & Coating", description: "Final protective layer and reflective coating application" },
            { title: "Quality Assurance", description: "Comprehensive inspection to ensure proper installation" }
          ].map((step, index) => (
            <div key={index} className="bg-gray-900 p-6 rounded-lg border border-orange-500">
              <h3 className="text-xl font-bold mb-2 text-orange-500">{step.title}</h3>
              <p className="text-orange-300">{step.description}</p>
            </div>
          ))}
        </div>
      </Section>
      <Section>
        <div className="text-center space-y-6">
          <h2 className="text-3xl font-bold">Ready to Install or Repair Your Built-Up Roof?</h2>
          <p className="text-lg text-orange-300 max-w-2xl mx-auto">
            Contact Summit Roofing today for a free consultation and estimate on your Built-Up Roofing project.
          </p>
          <a 
            href="/contact"
            className="inline-block bg-orange-500 text-black px-8 py-3 rounded-full hover:bg-orange-600 transition-colors transform hover:scale-105"
          >
            Get a Free Estimate
          </a>
        </div>
      </Section>
      <Footer />
    </div>
  )
}

