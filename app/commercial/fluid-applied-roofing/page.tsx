import { NavBar } from "@/components/nav-bar"
import { ServiceHeader } from "@/components/service-header"
import { Section } from "@/components/section"
import { Footer } from "@/components/footer"
import { CheckCircle } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function FluidAppliedRoofingPage() {
  return (
    <div className="min-h-screen bg-black text-orange-500">
      <NavBar />
      <ServiceHeader
        title="Fluid-Applied Roofing Systems"
        description="Advanced seamless roofing solutions for commercial buildings"
        backgroundImage="/coating/coating-1.png"
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
          <div className="animate-fade-in-right relative h-96">
            <Image
              src="/coating/coating-2.png"
              alt="Fluid-Applied Roofing"
              fill
              className="rounded-lg shadow-lg object-cover"
            />
          </div>
        </div>
      </Section>

      <Section dark>
        <h2 className="text-3xl font-bold text-center mb-8">Key Benefits</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Cost-Effective",
              description: "Save on replacement costs and reduce long-term maintenance expenses",
            },
            {
              title: "Energy Savings",
              description: "Reflective properties reduce cooling costs and energy consumption",
            },
            {
              title: "Minimal Disruption",
              description: "Installation without tear-off means business continues as usual",
            },
            {
              title: "Extended Lifespan",
              description: "Add 10-20 years to your existing roof's service life",
            },
            {
              title: "Sustainable Solution",
              description: "Reduce landfill waste by avoiding complete roof replacement",
            },
            {
              title: "Weather Resistant",
              description: "Superior protection against UV rays, rain, and extreme temperatures",
            },
          ].map((benefit, index) => (
            <div key={index} className="bg-gray-900 p-6 rounded-lg border border-orange-500">
              <h3 className="text-xl font-bold mb-2 text-orange-500">{benefit.title}</h3>
              <p className="text-orange-300">{benefit.description}</p>
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

