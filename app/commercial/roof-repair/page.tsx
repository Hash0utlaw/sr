import { NavBar } from "@/components/nav-bar"
import { ServiceHeader } from "@/components/service-header"
import { Section } from "@/components/section"
import { Footer } from "@/components/footer"
import { Clock, Shield, PenToolIcon as Tool, CheckCircle } from "lucide-react"
import Link from "next/link"

export default function CommercialRoofRepairPage() {
  return (
    <div className="min-h-screen bg-black text-orange-500">
      <NavBar />
      <ServiceHeader
        title="Commercial Roof Repair"
        description="Expert repairs for all types of commercial roofing systems"
        backgroundImage="/commercial-repair.jpg"
      />
      <Section>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4 animate-fade-in-left">
            <h2 className="text-3xl font-bold">Professional Repair Services</h2>
            <p className="text-lg text-orange-300">
              Our experienced team provides fast, reliable repairs for all types of commercial roofing systems. We
              understand that roof problems can disrupt your business operations, so we work efficiently to minimize
              downtime while ensuring quality repairs.
            </p>
            <div className="grid grid-cols-2 gap-4 mt-6">
              {[
                {
                  icon: Clock,
                  title: "24/7 Emergency Service",
                  description: "Rapid response to urgent issues",
                },
                {
                  icon: Shield,
                  title: "Quality Guarantee",
                  description: "Warranty-backed repairs",
                },
                {
                  icon: Tool,
                  title: "Expert Solutions",
                  description: "Experienced repair teams",
                },
                {
                  icon: CheckCircle,
                  title: "Certified Technicians",
                  description: "Factory-trained professionals",
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
          <div className="animate-fade-in-right">
            <img src="/commercial-roof-repair.jpg" alt="Commercial Roof Repair" className="rounded-lg shadow-lg" />
          </div>
        </div>
      </Section>

      <Section dark>
        <h2 className="text-3xl font-bold text-center mb-8">Common Repair Services</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Leak Repairs",
              services: ["Water infiltration detection", "Membrane repairs", "Flashing repairs", "Joint sealing"],
            },
            {
              title: "Storm Damage",
              services: ["Emergency repairs", "Wind damage repair", "Impact damage repair", "Temporary protection"],
            },
            {
              title: "Preventive Repairs",
              services: ["Surface deterioration", "Drainage issues", "Seam reinforcement", "Coating restoration"],
            },
          ].map((service, index) => (
            <div key={index} className="bg-gray-900 p-6 rounded-lg border border-orange-500">
              <h3 className="text-xl font-bold mb-4 text-orange-500">{service.title}</h3>
              <ul className="space-y-2">
                {service.services.map((item, iIndex) => (
                  <li key={iIndex} className="flex items-center text-orange-300">
                    <CheckCircle className="w-5 h-5 text-orange-500 mr-2 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <div className="text-center space-y-6">
          <h2 className="text-3xl font-bold">Need Commercial Roof Repairs?</h2>
          <p className="text-lg text-orange-300 max-w-2xl mx-auto">
            Contact us for fast, professional commercial roof repair services.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-orange-500 text-black px-8 py-3 rounded-full hover:bg-orange-600 transition-colors transform hover:scale-105"
          >
            Request Repair Service
          </Link>
        </div>
      </Section>
      <Footer />
    </div>
  )
}

