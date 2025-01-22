import { NavBar } from '@/components/nav-bar'
import { ServiceHeader } from '@/components/service-header'
import { Section } from '@/components/section'
import { Footer } from '@/components/footer'
import { CheckCircle, ArrowRight } from 'lucide-react'
import Image from 'next/image'

export default function ModifiedBitumenPage() {
  return (
    <div className="min-h-screen bg-black text-orange-500">
      <NavBar />
      <ServiceHeader 
        title="Modified Bitumen Roofing"
        description="Durable and flexible roofing solution for commercial buildings"
        backgroundImage="/Users/hashoutlaw/Desktop/davis/SummitR/sr/public/Commercial /ModifiedBitumen.png"
      />
      <Section>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4 animate-fade-in-left">
            <h2 className="text-3xl font-bold">What is Modified Bitumen Roofing?</h2>
            <p className="text-lg text-orange-300">
              Modified Bitumen roofing is a hybrid system derived from traditional built-up roofing methods. It consists of multiple layers of bitumen modified with rubber or plastic compounds, creating a highly durable and flexible roofing membrane.
            </p>
            <ul className="space-y-2 text-orange-300">
              <li className="flex items-start">
                <CheckCircle className="w-6 h-6 text-orange-500 mr-2 flex-shrink-0" />
                <span>Excellent durability and longevity</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-6 h-6 text-orange-500 mr-2 flex-shrink-0" />
                <span>High flexibility, even in low temperatures</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-6 h-6 text-orange-500 mr-2 flex-shrink-0" />
                <span>Strong resistance to tears and punctures</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-6 h-6 text-orange-500 mr-2 flex-shrink-0" />
                <span>Multiple installation methods available</span>
              </li>
            </ul>
          </div>
          <div className="animate-fade-in-right relative h-[400px]">
            <Image 
              src="/modified-bitumen-roofing.jpg" 
              alt="Modified Bitumen Roofing" 
              fill
              className="rounded-lg shadow-lg object-cover" 
            />
          </div>
        </div>
      </Section>
      <Section dark>
        <h2 className="text-3xl font-bold text-center mb-8">Modified Bitumen Installation Process</h2>
        <div className="max-w-3xl mx-auto">
          {[
            "Roof deck preparation and cleaning",
            "Installation of insulation layers",
            "Application of base sheet",
            "Installation of modified bitumen membrane",
            "Application of cap sheet (if required)",
            "Flashing and detail work",
            "Final inspection and quality assurance"
          ].map((step, index) => (
            <div key={index} className="flex items-center mb-4">
              <ArrowRight className="w-6 h-6 text-orange-500 mr-4" />
              <p className="text-orange-300">{step}</p>
            </div>
          ))}
        </div>
      </Section>
      <Section>
        <div className="text-center space-y-6">
          <h2 className="text-3xl font-bold">Interested in Modified Bitumen Roofing?</h2>
          <p className="text-lg text-orange-300 max-w-2xl mx-auto">
            Contact Summit Roofing today for a free consultation and estimate on your Modified Bitumen Roofing project.
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
