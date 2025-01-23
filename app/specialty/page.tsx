import { NavBar } from '@/components/nav-bar'
import { ServiceHeader } from '@/components/service-header'
import { Section } from '@/components/section'
import { Footer } from '@/components/footer'
import Link from 'next/link'
import Image from 'next/image'

const specialtyTypes = [
  {
    title: "Slate Roofing",
    description: "Elegant and long-lasting natural stone roofing",
    href: "/specialty/slate",
    imageUrl: "/specialty/slate-hero.png"
  },
  {
    title: "Cedar Shake Roofing",
    description: "Beautiful, natural wood roofing with excellent insulation",
    href: "/specialty/cedar-shake",
    imageUrl: "/specialty/cedar-specail.png"
  },
  {
    title: "Tile Roofing",
    description: "Durable and aesthetically pleasing clay or concrete tiles",
    href: "/specialty/tile",
    imageUrl: "/specialty/tile-specail.png"
  },
  {
    title: "Metal Shingles",
    description: "Modern, lightweight, and long-lasting roofing option",
    href: "/specialty/metal-shingles",
    imageUrl: "/specialty/metal-specail.png"
  }
];

export default function SpecialtyRoofing() {
  return (
    <main>
      <NavBar />
      <ServiceHeader 
        title="Specialty Roofing"
        description="Unique roofing solutions for distinctive properties"
        backgroundImage="/specialty/Main_Specialty_Roofing.png"
      />
      <Section>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4 animate-fade-in-left">
            <h2 className="text-3xl font-bold">Elevate Your Property with Specialty Roofing</h2>
            <p>Summit Roofing offers a range of specialty roofing solutions designed to meet the unique needs of distinctive properties and architectural styles.</p>
            <ul className="list-disc list-inside space-y-2">
              <li>Expert installation by certified craftsmen</li>
              <li>Premium materials for lasting beauty and protection</li>
              <li>Customized solutions for your specific needs</li>
              <li>Enhance your property&apos;s value and curb appeal</li>
            </ul>
          </div>
          <div className="animate-fade-in-right relative h-[400px]">
            <Image 
              src="/specialty/specail-roofing.png" 
              alt="Specialty Roofing" 
              fill
              className="rounded-lg shadow-lg object-cover"
            />
          </div>
        </div>
      </Section>
      <Section dark>
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white">Our Specialty Roofing Options</h2>
          <p className="text-lg text-gray-300 mt-4">Explore our range of premium specialty roofing solutions</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {specialtyTypes.map((type, index) => (
            <Link href={type.href} key={index} className="block">
              <div className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105">
                <div className="relative h-48">
                  <Image 
                    src={type.imageUrl || "/placeholder.svg"} 
                    alt={type.title} 
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-gray-800">{type.title}</h3>
                  <p className="text-gray-600">{type.description}</p>
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