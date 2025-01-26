import { NavBar } from '@/components/nav-bar'
import { ServiceHeader } from '@/components/service-header'
import { Section } from '@/components/section'
import { Footer } from '@/components/footer'
import Link from 'next/link'
import { Home, Building2, PenToolIcon as Tool, Shield, Clock, Hammer, CloudLightning, HardHat, Droplets } from 'lucide-react'

const services = [
  {
    icon: Home,
    title: "Residential Roofing",
    description: "Complete roofing solutions for homes, including repairs, replacements, and maintenance",
    href: "/residential"
  },
  {
    icon: Building2,
    title: "Commercial Roofing",
    description: "Professional roofing services for businesses and commercial properties",
    href: "/commercial"
  },
  {
    icon: Tool,
    title: "Specialty Roofing",
    description: "Expert installation of slate, tile, metal, and other specialty roofing materials",
    href: "/specialty"
  },
  {
    icon: Shield,
    title: "Insurance Claims",
    description: "Professional assistance with roofing insurance claims and documentation",
    href: "/insurance-replacement"
  },
  {
    icon: Clock,
    title: "Emergency Services",
    description: "Rapid emergency roofing repairs and temporary solutions",
    href: "/emergency"
  },
  {
    icon: Hammer,
    title: "Roof Repairs",
    description: "Expert repair services for all types of roof damage",
    href: "/residential/roof-repairs"
  },
  {
    icon: CloudLightning,
    title: "Storm Damage",
    description: "Specialized repair services for storm and hail damage",
    href: "/hail-damage"
  },
  {
    icon: HardHat,
    title: "Maintenance Programs",
    description: "Preventive maintenance programs to extend your roof's lifespan",
    href: "/residential/roof-repairs"
  },
  {
    icon: Droplets,
    title: "Fluid-Applied Systems",
    description: "Advanced fluid-applied roofing solutions",
    href: "/fluid-applied-roofing"
  }
]

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-black">
      <NavBar />
      <ServiceHeader 
        title="Our Services"
        description="Comprehensive roofing solutions for every need"
        backgroundImage="/services-bg.jpg"
      />
      
      <Section>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
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

      <Section dark>
        <div className="text-center space-y-6">
          <h2 className="text-3xl font-bold text-orange-500">Ready to Get Started?</h2>
          <p className="text-lg text-orange-300 max-w-2xl mx-auto">
            Contact us today for a free consultation and estimate on your roofing project.
          </p>
          <Link 
            href="/contact"
            className="inline-block bg-orange-500 text-black px-8 py-3 rounded-full hover:bg-orange-600 transition-colors transform hover:scale-105"
          >
            Contact Us Now
          </Link>
        </div>
      </Section>

      <Footer />
    </div>
  )
}


