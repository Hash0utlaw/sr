import { NavBar } from '@/components/nav-bar'
import { ServiceHeader } from '@/components/service-header'
import { Section } from '@/components/section'
import { Footer } from '@/components/footer'
import Image from 'next/image'

interface MaterialSpec {
  label: string;
  value: string;
}

interface SpecialtyRoofingTemplateProps {
  title: string;
  subtitle: string;
  description: string;
  materialSpecs: MaterialSpec[];
  benefits: string[];
  features: string[];
  imageUrl: string;
  durabilityRating: number;
  lifespanYears: number;
  maintenanceLevel: string;
  idealFor: string[];
  galleryImages: string[];
}

export default function SpecialtyRoofingTemplate({
  title,
  subtitle,
  description,
  materialSpecs,
  benefits,
  features,
  imageUrl,
  durabilityRating,
  lifespanYears,
  maintenanceLevel,
  idealFor,
  galleryImages
}: SpecialtyRoofingTemplateProps) {
  return (
    <main>
      <NavBar />
      <ServiceHeader 
        title={title}
        description={subtitle}
        backgroundImage={imageUrl}
      />
      <Section>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4 animate-fade-in-left">
            <h2 className="text-3xl font-bold">{title}</h2>
            <p className="text-lg">{description}</p>
          </div>
          <div className="animate-fade-in-right relative h-[400px]">
            <Image 
              src={imageUrl} 
              alt={title} 
              fill
              className="rounded-lg shadow-lg object-cover" 
            />
          </div>
        </div>
      </Section>
      <Section dark>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4 text-white">Material Specifications</h3>
            <ul className="space-y-2">
              {materialSpecs.map((spec, index) => (
                <li key={index} className="flex justify-between text-gray-300">
                  <span>{spec.label}:</span>
                  <span className="font-semibold">{spec.value}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-4 text-white">Key Benefits</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-300">
              {benefits.map((benefit, index) => (
                <li key={index}>{benefit}</li>
              ))}
            </ul>
          </div>
        </div>
      </Section>
      <Section>
        <h3 className="text-2xl font-bold mb-4">Features</h3>
        <ul className="grid md:grid-cols-2 gap-4">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center space-x-2">
              <svg className="w-6 h-6 text-primary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </Section>
      <Section dark>
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold text-white">Performance Metrics</h3>
        </div>
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h4 className="text-xl font-bold mb-2">Durability Rating</h4>
            <p className="text-4xl font-bold text-primary">{durabilityRating}/10</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h4 className="text-xl font-bold mb-2">Expected Lifespan</h4>
            <p className="text-4xl font-bold text-primary">{lifespanYears}+ Years</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h4 className="text-xl font-bold mb-2">Maintenance Level</h4>
            <p className="text-4xl font-bold text-primary">{maintenanceLevel}</p>
          </div>
        </div>
      </Section>
      <Section>
        <h3 className="text-2xl font-bold mb-4">Ideal For</h3>
        <ul className="grid md:grid-cols-3 gap-4">
          {idealFor.map((item, index) => (
            <li key={index} className="flex items-center space-x-2">
              <svg className="w-6 h-6 text-primary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </Section>
      <Section dark>
        <h3 className="text-2xl font-bold mb-8 text-center text-white">Gallery</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {galleryImages.map((image, index) => (
            <div key={index} className="relative h-64">
              <Image 
                src={image} 
                alt={`${title} example ${index + 1}`} 
                fill
                className="object-cover rounded-lg shadow-lg"
              />
            </div>
          ))}
        </div>
      </Section>
      <Footer />
    </main>
  )
}

