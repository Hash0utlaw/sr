import { NavBar } from "@/components/nav-bar"
import { ServiceHeader } from "@/components/service-header"
import { Section } from "@/components/section"
import { Footer } from "@/components/footer"
import { CheckCircle } from "lucide-react"
import Link from "next/link"

export default function FluidAppliedRoofingPage() {
  return (
    <div className="min-h-screen bg-black text-orange-500">
      <NavBar />
      <ServiceHeader
        title="Fluid-Applied Roofing Systems"
        description="Advanced seamless roofing solutions for commercial buildings"
        backgroundImage="/commercial-fluid-applied.jpg"
      />
      <Section>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4 animate-fade-in-left">
            <h2 className="text-3xl font-bold">What is Fluid-Applied Roofing?</h2>
            <p className="text-lg text-orange-300">
              Fluid-applied roofing systems provide a seamless, waterproof membrane that can restore and protect your
              commercial roof. These systems are ideal for extending the life of existing roofs and providing superior
              protection against the elements.
            </p>
            <ul className="space-y-2 text-orange-300">
              {[
                "Seamless waterproof protection",
                "Excellent UV resistance",
                "Energy-efficient cool roof properties",
                "Can be applied over existing roofing",
                "Minimal disruption to operations",
                "Extended roof life by 10-20 years",
              ].map((benefit, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-orange-500 mr-2 flex-shrink-0" />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="animate-fade-in-right">
            <img src="/fluid-applied-roofing.jpg" alt="Fluid-Applied Roofing" className="rounded-lg shadow-lg" />
          </div>
        </div>
      </Section>

      <Section dark>
        <h2 className="text-3xl font-bold text-center mb-8">Application Process</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Surface Preparation",
              description: "Thorough cleaning and repair of existing roof surface",
            },
            {
              title: "Base Coat Application",
              description: "Application of primary waterproofing layer",
            },
            {
              title: "Reinforcement",
              description: "Installation of fabric reinforcement in critical areas",
            },
            {
              title: "Additional Coats",
              description: "Application of subsequent layers for durability",
            },
            {
              title: "Top Coat",
              description: "Final protective layer with UV resistance",
            },
            {
              title: "Quality Inspection",
              description: "Thorough evaluation of completed system",
            },
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
          <h2 className="text-3xl font-bold">Ready to Protect Your Commercial Roof?</h2>
          <p className="text-lg text-orange-300 max-w-2xl mx-auto">
            Contact Summit Roofing today for a consultation about our fluid-applied roofing systems.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-orange-500 text-black px-8 py-3 rounded-full hover:bg-orange-600 transition-colors transform hover:scale-105"
          >
            Get a Free Estimate
          </Link>
        </div>
      </Section>
      <Footer />
    </div>
  )
}

