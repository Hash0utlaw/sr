import { NavBar } from "@/components/nav-bar"
import { ServiceHeader } from "@/components/service-header"
import { Section } from "@/components/section"
import { Footer } from "@/components/footer"
import { ClipboardCheck, PenToolIcon as Tool, Calendar, Shield } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function InspectionsMaintenancePage() {
  return (
    <div className="min-h-screen bg-black text-orange-500">
      <NavBar />
      <ServiceHeader
        title="Roof Inspections & Maintenance"
        description="Comprehensive evaluations and preventive care for commercial roofs"
        backgroundImage="/roof-inspec/roof-inspec-1.png"
      />
      <Section>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4 animate-fade-in-left">
            <h2 className="text-3xl font-bold">Protect Your Investment</h2>
            <p className="text-lg text-orange-300">
              Regular roof inspections and maintenance are crucial for extending the life of your commercial roof and
              preventing costly repairs. Our comprehensive program helps identify and address issues before they become
              major problems.
            </p>
            <div className="grid grid-cols-2 gap-4 mt-6">
              {[
                {
                  icon: ClipboardCheck,
                  title: "Detailed Inspections",
                  description: "Thorough evaluation of all roof components",
                },
                {
                  icon: Tool,
                  title: "Preventive Maintenance",
                  description: "Regular upkeep to prevent issues",
                },
                {
                  icon: Calendar,
                  title: "Scheduled Service",
                  description: "Customized maintenance plans",
                },
                {
                  icon: Shield,
                  title: "Warranty Protection",
                  description: "Maintain warranty compliance",
                },
              ].map((service, index) => (
                <div key={index} className="p-4 bg-gray-900 rounded-lg">
                  <service.icon className="w-8 h-8 text-orange-500 mb-2" />
                  <h3 className="font-bold text-orange-500">{service.title}</h3>
                  <p className="text-sm text-orange-300">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="animate-fade-in-right relative h-96">
            <Image 
              src="/roof-inspec/roof-inspec-2.png" 
              alt="Roof Inspection" 
              fill
              className="rounded-lg shadow-lg object-cover"
            />
          </div>
        </div>
      </Section>

      <Section dark>
        <h2 className="text-3xl font-bold text-center mb-8">Our Inspection Process</h2>
        <div className="grid md:grid-cols-4 gap-8">
          {[
            {
              step: "1",
              title: "Visual Inspection",
              description: "Comprehensive examination of all roof components and potential problem areas",
            },
            {
              step: "2",
              title: "Documentation",
              description: "Detailed reports with photos and recommendations for necessary repairs",
            },
            {
              step: "3",
              title: "Maintenance Plan",
              description: "Customized maintenance schedule based on roof type and condition",
            },
            {
              step: "4",
              title: "Follow-Up",
              description: "Regular monitoring and scheduled maintenance visits",
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
          <h2 className="text-3xl font-bold">Schedule Your Inspection Today</h2>
          <p className="text-lg text-orange-300 max-w-2xl mx-auto">
            Protect your investment with our professional inspection and maintenance services.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-orange-500 text-black px-8 py-3 rounded-full hover:bg-orange-600 transition-colors transform hover:scale-105"
          >
            Schedule an Inspection
          </Link>
        </div>
      </Section>
      <Footer />
    </div>
  )
}