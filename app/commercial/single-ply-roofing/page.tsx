import { NavBar } from '@/components/nav-bar'
import { ServiceHeader } from '@/components/service-header'
import { Section } from '@/components/section'
import { Footer } from '@/components/footer'
import { CheckCircle } from 'lucide-react'
import Image from 'next/image'

export default function SinglePlyRoofingPage() {
  return (
    <div className="min-h-screen bg-black text-orange-500">
      <NavBar />
      <ServiceHeader 
        title="Single-Ply Roofing"
        description="TPO, EPDM, and PVC solutions for energy-efficient commercial roofing"
        backgroundImage="/commercial /tpo-hero.png"
      />
      <Section>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4 animate-fade-in-left">
            <h2 className="text-3xl font-bold">Single-Ply Roofing Systems</h2>
            <p className="text-lg text-orange-300">
              Single-ply roofing membranes are flexible sheets of compounded synthetic materials that are manufactured in a factory to strict quality control requirements. Summit Roofing offers three main types of single-ply roofing: TPO, EPDM, and PVC.
            </p>
            <ul className="space-y-2 text-orange-300">
              <li className="flex items-start">
                <CheckCircle className="w-6 h-6 text-orange-500 mr-2 flex-shrink-0" />
                <span>Excellent flexibility and elongation</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-6 h-6 text-orange-500 mr-2 flex-shrink-0" />
                <span>Strong resistance to UV radiation and chemicals</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-6 h-6 text-orange-500 mr-2 flex-shrink-0" />
                <span>Energy-efficient options available</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-6 h-6 text-orange-500 mr-2 flex-shrink-0" />
                <span>Lightweight and easy to install</span>
              </li>
            </ul>
          </div>
          <div className="animate-fade-in-right relative h-[400px]">
            <Image 
              src="/commercial /tpo-gallery-3.png" 
              alt="Single-Ply Roofing" 
              fill
              className="rounded-lg shadow-lg object-cover" 
            />
          </div>
        </div>
      </Section>
      <Section dark>
        <h2 className="text-3xl font-bold text-center mb-8">Types of Single-Ply Roofing</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { 
              title: "TPO (Thermoplastic Polyolefin)", 
              description: "Excellent energy efficiency and heat reflection. Ideal for buildings in warm climates.",
              benefits: ["UV resistant", "Heat-reflective", "Economical"]
            },
            { 
              title: "EPDM (Ethylene Propylene Diene Terpolymer)", 
              description: "Known for its exceptional durability and weather resistance. Perfect for harsh environments.",
              benefits: ["Extremely durable", "Weather resistant", "Low maintenance"]
            },
            { 
              title: "PVC (Polyvinyl Chloride)", 
              description: "High chemical resistance and fire-retardant properties. Great for industrial buildings.",
              benefits: ["Chemical resistant", "Fire retardant", "Highly flexible"]
            }
          ].map((type, index) => (
            <div key={index} className="bg-gray-900 p-6 rounded-lg border border-orange-500">
              <h3 className="text-xl font-bold mb-2 text-orange-500">{type.title}</h3>
              <p className="text-orange-300 mb-4">{type.description}</p>
              <ul className="space-y-2">
                {type.benefits.map((benefit, i) => (
                  <li key={i} className="flex items-center text-orange-300">
                    <CheckCircle className="w-4 h-4 text-orange-500 mr-2 flex-shrink-0" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>
      <Section>
        <div className="text-center space-y-6">
          <h2 className="text-3xl font-bold">Ready to Install Single-Ply Roofing?</h2>
          <p className="text-lg text-orange-300 max-w-2xl mx-auto">
            Contact Summit Roofing today for a free consultation and estimate on your Single-Ply Roofing project.
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