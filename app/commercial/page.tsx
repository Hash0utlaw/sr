import { NavBar } from '@/components/nav-bar'
import { ServiceHeader } from '@/components/service-header'
import { Section } from '@/components/section'
import { Footer } from '@/components/footer'
import Link from 'next/link'
import Image from 'next/image'
import { Shield, PenToolIcon as Tool, Droplets, Sun, Ruler, HardHat, CloudLightning } from 'lucide-react'

const commercialServices = [
  {
    icon: Shield,
    title: "Modified Bitumen",
    description: "Durable, flexible roofing for various commercial structures",
    href: "/commercial/modified-bitumen"
  },
  {
    icon: Tool,
    title: "Single-Ply Roofing",
    description: "TPO, EPDM, and PVC solutions for energy efficiency",
    href: "/commercial/single-ply-roofing"
  },
  {
    icon: Droplets,
    title: "Fluid-Applied Roofing",
    description: "Seamless, waterproof membrane for existing roofs",
    href: "/commercial/fluid-applied-roofing"
  },
  {
    icon: Sun,
    title: "Energy-Efficient Roofing Systems",
    description: "Energy-efficient solutions to reduce cooling costs",
    href: "/commercial/cool-roofing"
  },
  {
    icon: Ruler,
    title: "Roof Inspections & Maintenance",
    description: "Comprehensive evaluations and preventive care",
    href: "/commercial/inspections-maintenance"
  },
  {
    icon: HardHat,
    title: "Commercial Roof Repair",
    description: "Expert repairs for all types of commercial roofing",
    href: "/commercial/roof-repair"
  },
  {
    icon: CloudLightning,
    title: "Storm Damage Restoration",
    description: "Rapid response and restoration for weather-related damage",
    href: "/commercial/storm-damage"
  }
]

export default function CommercialRoofing() {
  return (
    <div className="min-h-screen bg-black text-orange-500">
      <NavBar />
      <ServiceHeader 
        title="Commercial Roofing"
        description="Durable and efficient roofing solutions for your business"
        backgroundImage="/commercial /tpo-hero.png"
      />
      <Section>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4 animate-fade-in-left">
            <h2 className="text-3xl font-bold">Protect Your Investment with Summit Roofing</h2>
            <p className="text-lg text-orange-300">
              Our commercial roofing services are designed to meet the unique needs of businesses, providing long-lasting protection for your valuable assets. With decades of experience and a commitment to quality, we deliver roofing solutions that stand the test of time.
            </p>
            <ul className="list-disc list-inside space-y-2 text-orange-300">
              <li>Expert installation and repair</li>
              <li>Energy-efficient roofing options</li>
              <li>Minimal business disruption</li>
              <li>Comprehensive warranties</li>
              <li>Rapid emergency services</li>
            </ul>
          </div>
          <div className="animate-fade-in-right relative h-[400px]">
            <Image 
              src="/commercial /tpo-gallery-1.png" 
              alt="Commercial Roofing" 
              fill
              className="rounded-lg shadow-lg object-cover" 
            />
          </div>
        </div>
      </Section>
      <Section dark>
        <h2 className="text-3xl font-bold text-center mb-12">Our Commercial Roofing Services</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {commercialServices.map((service, index) => {
            const Icon = service.icon
            return (
              <Link 
                key={index} 
                href={service.href}
                className="group block"
              >
                <div className="bg-gray-900 border-2 border-orange-500 rounded-lg p-6 transition-all duration-300 hover:border-orange-400 hover:shadow-[0_0_15px_rgba(255,123,0,0.5)] transform hover:-translate-y-1">
                  <Icon className="w-12 h-12 text-orange-500 mb-4 group-hover:scale-110 transition-transform duration-300" />
                  <h3 className="text-xl font-bold mb-2 text-orange-500">{service.title}</h3>
                  <p className="text-orange-300">{service.description}</p>
                </div>
              </Link>
            )
          })}
        </div>
      </Section>
      <Section>
        <div className="text-center space-y-6">
          <h2 className="text-3xl font-bold">Ready to Upgrade Your Commercial Roof?</h2>
          <p className="text-lg text-orange-300 max-w-2xl mx-auto">
            Contact us today for a free consultation and estimate on your commercial roofing project.
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