import { NavBar } from "@/components/nav-bar"
import { ServiceHeader } from "@/components/service-header"
import { Section } from "@/components/section"
import { Footer } from "@/components/footer"
import { CloudLightning, Phone, FileCheck, PenToolIcon as Tool } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function StormDamagePage() {
  return (
    <div className="min-h-screen bg-black text-orange-500">
      <NavBar />
      <ServiceHeader
        title="Storm Damage Restoration"
        description="Rapid response and restoration for weather-related damage"
        backgroundImage="/commercial-storm-damage.jpg"
      />
      <Section>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4 animate-fade-in-left">
            <h2 className="text-3xl font-bold">Emergency Storm Damage Services</h2>
            <p className="text-lg text-orange-300">
              When severe weather strikes, our emergency response team is ready 24/7 to assess and repair storm damage
              to your commercial roof. We work quickly to prevent further damage and protect your property.
            </p>
            <div className="grid grid-cols-2 gap-4 mt-6">
              {[
                {
                  icon: CloudLightning,
                  title: "Rapid Response",
                  description: "Immediate emergency service",
                },
                {
                  icon: Phone,
                  title: "Direct Contact",
                  description: "Dedicated emergency line",
                },
                {
                  icon: FileCheck,
                  title: "Insurance Support",
                  description: "Claims assistance",
                },
                {
                  icon: Tool,
                  title: "Quick Repairs",
                  description: "Rapid restoration",
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
              src="/storm-damage-repair.jpg" 
              alt="Storm Damage Repair" 
              fill
              className="rounded-lg shadow-lg object-cover"
            />
          </div>
        </div>
      </Section>

      <Section dark>
        <h2 className="text-3xl font-bold text-center mb-8">Our Storm Response Process</h2>
        <div className="grid md:grid-cols-4 gap-8">
          {[
            {
              step: "1",
              title: "Emergency Response",
              description: "Immediate dispatch of emergency response team",
            },
            {
              step: "2",
              title: "Damage Assessment",
              description: "Thorough inspection and documentation of storm damage",
            },
            {
              step: "3",
              title: "Temporary Protection",
              description: "Installation of emergency covering if needed",
            },
            {
              step: "4",
              title: "Permanent Restoration",
              description: "Complete repair or replacement services",
            },
          ].map((phase, index) => (
            <div key={index} className="bg-gray-900 p-6 rounded-lg border border-orange-500">
              <div className="text-4xl font-bold text-orange-500 mb-2">{phase.step}</div>
              <h3 className="text-xl font-bold mb-2 text-orange-500">{phase.title}</h3>
              <p className="text-orange-300">{phase.description}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <div className="text-center space-y-6">
          <h2 className="text-3xl font-bold">Emergency Storm Damage?</h2>
          <p className="text-lg text-orange-300 max-w-2xl mx-auto">
            Don&apos;t wait - contact us immediately for emergency storm damage response.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-block bg-orange-500 text-black px-8 py-3 rounded-full hover:bg-orange-600 transition-colors transform hover:scale-105"
            >
              Contact Emergency Service
            </Link>
            <a
              href="tel:(704) 578-4756"
              className="inline-block bg-gray-900 text-orange-500 px-8 py-3 rounded-full hover:bg-gray-800 transition-colors transform hover:scale-105"
            >
              Call (704) 578-4756
            </a>
          </div>
        </div>
      </Section>
      <Footer />
    </div>
  )
}

