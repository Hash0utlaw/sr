import { NavBar } from "@/components/nav-bar"
import { ServiceHeader } from "@/components/service-header"
import { Section } from "@/components/section"
import { Footer } from "@/components/footer"
import { Sun, Droplets, Battery, LineChart } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function CoolRoofingPage() {
  return (
    <div className="min-h-screen bg-black text-orange-500">
      <NavBar />
      <ServiceHeader
        title="Cool Roofing Systems"
        description="Energy-efficient roofing solutions for sustainable buildings"
        backgroundImage="/commercial-cool-roofing.jpg"
      />
      <Section>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4 animate-fade-in-left">
            <h2 className="text-3xl font-bold">Energy-Efficient Roofing Solutions</h2>
            <p className="text-lg text-orange-300">
              Cool roofing systems are designed to reflect more sunlight and absorb less heat than traditional roofing
              materials. This innovative approach can significantly reduce energy costs and improve building comfort.
            </p>
            <div className="grid grid-cols-2 gap-4 mt-6">
              {[
                {
                  icon: Sun,
                  title: "Solar Reflectance",
                  description: "Reflects up to 80% of sunlight",
                },
                {
                  icon: Droplets,
                  title: "Heat Management",
                  description: "Reduces heat absorption",
                },
                {
                  icon: Battery,
                  title: "Energy Savings",
                  description: "Lower cooling costs",
                },
                {
                  icon: LineChart,
                  title: "ROI",
                  description: "Quick cost recovery",
                },
              ].map((feature, index) => (
                <div key={index} className="p-4 bg-gray-900 rounded-lg">
                  <feature.icon className="w-8 h-8 text-orange-500 mb-2" />
                  <h3 className="font-bold text-orange-500">{feature.title}</h3>
                  <p className="text-sm text-orange-300">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="animate-fade-in-right relative h-96">
            <Image 
              src="/cool-roofing-system.jpg" 
              alt="Cool Roofing System" 
              fill
              className="rounded-lg shadow-lg object-cover"
            />
          </div>
        </div>
      </Section>

      <Section dark>
        <h2 className="text-3xl font-bold text-center mb-8">Cool Roofing Options</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Single-Ply Membranes",
              features: [
                "High solar reflectance",
                "Excellent durability",
                "Easy installation",
                "Energy Star certified",
              ],
            },
            {
              title: "Reflective Coatings",
              features: [
                "Cost-effective solution",
                "Can be applied to existing roofs",
                "Multiple color options",
                "Extends roof life",
              ],
            },
            {
              title: "Built-Up Cool Roofing",
              features: [
                "Traditional installation method",
                "Superior durability",
                "Excellent waterproofing",
                "Long-term performance",
              ],
            },
          ].map((option, index) => (
            <div key={index} className="bg-gray-900 p-6 rounded-lg border border-orange-500">
              <h3 className="text-xl font-bold mb-4 text-orange-500">{option.title}</h3>
              <ul className="space-y-2">
                {option.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-center text-orange-300">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <div className="text-center space-y-6">
          <h2 className="text-3xl font-bold">Ready to Reduce Your Energy Costs?</h2>
          <p className="text-lg text-orange-300 max-w-2xl mx-auto">
            Contact Summit Roofing today to learn how cool roofing can benefit your building.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-orange-500 text-black px-8 py-3 rounded-full hover:bg-orange-600 transition-colors transform hover:scale-105"
          >
            Get a Free Consultation
          </Link>
        </div>
      </Section>
      <Footer />
    </div>
  )
}