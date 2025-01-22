import { NavBar } from '@/components/nav-bar'
import { ServiceHeader } from '@/components/service-header'
import { Section } from '@/components/section'
import { Footer } from '@/components/footer'
import Link from 'next/link'
import Image from 'next/image'

const residentialRoofingTypes = [
  {
    title: "Shingle Roofing",
    description: "Versatile and cost-effective roofing solution for residential homes",
    href: "/residential/shingle-roofing",
    imageUrl: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/main_residential-XGi1bDUqoI2eMEcR4Di7mauFr8ZdCg.png"
  },
  {
    title: "Metal Roofing",
    description: "Durable, energy-efficient, and stylish roofing solution for modern homes",
    href: "/residential/metal-roofing",
    imageUrl: "/residential/metal-roofing.png"
  },
  {
    title: "Tile Roofing",
    description: "Elegant and long-lasting roofing solution for distinctive homes",
    href: "/residential/tile-roofing",
    imageUrl: "/residential/tile-hero.png"
  },
  {
    title: "Flat Roofing",
    description: "Modern and versatile roofing solution for contemporary homes",
    href: "/residential/flat-roofing",
    imageUrl: "/images/residential/flat-roofing.jpg"
  },
  {
    title: "Roof Repairs and Maintenance",
    description: "Expert care to extend the life of your residential roof",
    href: "/residential/roof-repairs",
    imageUrl: "/residential/roofrepairs.png"
  }
];

export default function ResidentialRoofing() {
  return (
    <main className="bg-black text-orange-500">
      <NavBar />
      <ServiceHeader 
        title="Residential Roofing"
        description="Expert roofing solutions for your home"
        backgroundImage="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/main_residential-XGi1bDUqoI2eMEcR4Di7mauFr8ZdCg.png"
      />
      <Section>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4 animate-fade-in-left">
            <h2 className="text-3xl font-bold">Protect Your Home with Quality Roofing</h2>
            <p>At Summit Roofing, we understand that your home is your most valuable asset. Our residential roofing services are designed to provide lasting protection and enhance the beauty of your home.</p>
            <ul className="list-disc list-inside space-y-2">
              <li>Expert installation by certified craftsmen</li>
              <li>Premium materials for lasting beauty and protection</li>
              <li>Customized solutions for your specific needs</li>
              <li>Enhance your property&apos;s value and curb appeal</li>
              <li>Comprehensive warranty coverage</li>
            </ul>
          </div>
          <div className="animate-fade-in-right relative h-[400px]">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/main_residential-XGi1bDUqoI2eMEcR4Di7mauFr8ZdCg.png"
              alt="Beautiful residential roofing"
              fill
              className="rounded-lg shadow-lg object-cover"
            />
          </div>
        </div>
      </Section>
      <Section dark>
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-orange-500">Our Residential Roofing Services</h2>
          <p className="text-lg text-orange-300 mt-4">Explore our range of premium residential roofing solutions</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {residentialRoofingTypes.map((type, index) => (
            <Link href={type.href} key={index} className="block">
              <div className="bg-gray-900 rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105">
                <div className="relative h-48">
                  <Image 
                    src={type.imageUrl || "/placeholder.svg"} 
                    alt={type.title} 
                    fill
                    className="object-cover" 
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-orange-500">{type.title}</h3>
                  <p className="text-orange-300">{type.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </Section>
      <Footer />
    </main>
  )
}
