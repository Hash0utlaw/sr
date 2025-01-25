import { Shield, Home, Building2, PenToolIcon as Tool, Clock, Award } from 'lucide-react'

const services = [
  {
    icon: Shield,
    title: "Insurance Claims",
    description: "We work directly with your insurance company to ensure a smooth claims process"
  },
  {
    icon: Home,
    title: "Residential Roofing",
    description: "Expert installation and repair services for all types of residential roofs"
  },
  {
    icon: Building2,
    title: "Commercial Roofing",
    description: "Comprehensive roofing solutions for businesses and commercial properties"
  },
  {
    icon: Tool,
    title: "Roof Repairs",
    description: "Quick and reliable repair services to fix any roofing issue"
  },
  {
    icon: Clock,
    title: "Rapid Emergency Service",
    description: "Round-the-clock emergency response for urgent roofing needs"
  },
  {
    icon: Award,
    title: "Quality Guarantee",
    description: "All our work is backed by our satisfaction guarantee"
  }
]

export function ServicesSection() {
  return (
    <section className="py-20 bg-gray-200">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-secondary">
            Our <span className="text-primary">Services</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Comprehensive roofing solutions tailored to your needs
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="p-6 bg-black border-2 border-[#ff7b00] rounded-lg transition-all duration-300 hover:border-[#ff9433] hover:shadow-[0_0_15px_rgba(255,123,0,0.5)] card-hover"
            >
              <service.icon className="w-12 h-12 text-[#ff7b00] mb-4 animate-float" />
              <h3 className="text-xl font-bold mb-2 text-[#ff7b00]">{service.title}</h3>
              <p className="text-white">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

