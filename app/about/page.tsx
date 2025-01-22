import { NavBar } from '@/components/nav-bar'
import { Footer } from '@/components/footer'
import { ServiceHeader } from '@/components/service-header'
import { Section } from '@/components/section'
import Image from 'next/image'

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-black text-orange-500">
      <NavBar />
      <ServiceHeader 
        title="About Our Business"
        description="A veteran-owned roofing company with over 500 years of combined experience"
        backgroundImage="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/about_us2-xYSVPHk0RajjssJDkfeZrSi8hpGZqr.png"
      />
      <Section>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6 animate-fade-in-left">
            <h2 className="text-3xl font-bold">Our Story</h2>
            <p className="text-lg">
              As a veteran with a lifetime of roofing experience, both in and out of military service, I&apos;ve built a company rooted in principle, family, and service. Together with my dedicated team, we bring over 500 years of combined experience to every project, ensuring top-tier craftsmanship and unmatched expertise.
            </p>
            <p className="text-lg">
              We specialize in all types of roofing systems—residential, commercial, industrial, specialized, and fluid-applied solutions. Our residential services are particularly focused on helping homeowners secure full roof replacements through insurance approvals, saving our clients time, stress, and money.
            </p>
          </div>
          <div className="relative h-[400px] animate-fade-in-right">
            <Image
              src="/about-us/about-us-2.png"
              alt="Professional roofing team at work"
              fill
              className="rounded-lg shadow-lg object-cover"
            />
          </div>
        </div>
      </Section>
      <Section dark>
        <div className="space-y-6 animate-fade-in-up">
          <h2 className="text-3xl font-bold">Our Values</h2>
          <p className="text-lg">
            At the heart of our company is a deep commitment to our values. Family, integrity, and exceptional customer service are the foundation of everything we do. We believe in putting others first—our customers, employees, and community are always our top priorities.
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>Commitment to quality and excellence</li>
            <li>Integrity in all our dealings</li>
            <li>Customer-first approach</li>
            <li>Continuous innovation and improvement</li>
            <li>Community involvement and support</li>
          </ul>
        </div>
      </Section>
      <Section>
        <div className="space-y-6 animate-fade-in-up">
          <h2 className="text-3xl font-bold">Our Services</h2>
          <p className="text-lg">
            Whether it&apos;s a small residential repair or a complex industrial project, we approach every job with the same dedication, care, and attention to detail. Our comprehensive services include:
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>Residential roofing (including insurance claim assistance)</li>
            <li>Commercial roofing</li>
            <li>Industrial roofing</li>
            <li>Specialized roofing solutions</li>
            <li>Fluid-applied roofing systems</li>
            <li>Roof repairs and maintenance</li>
          </ul>
          <p className="text-lg mt-4">
            We are proud to be Uniflex certified, ensuring that we provide top-quality fluid-applied roofing systems with industry-leading warranties.
          </p>
        </div>
      </Section>
      <Section dark>
        <div className="space-y-6 animate-fade-in-up">
          <h2 className="text-3xl font-bold">Our Service Areas</h2>
          <p className="text-lg">
            We proudly serve the following areas:
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h3 className="text-xl font-semibold mb-2">Alabama</h3>
              <ul className="list-disc list-inside space-y-1">
                <li>Auburn</li>
                <li>Phenix City</li>
                <li>Opelika</li>
                <li>Valley</li>
                <li>Smith Station</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Georgia</h3>
              <ul className="list-disc list-inside space-y-1">
                <li>Columbus</li>
                <li>Newnan</li>
                <li>Sharpsburg</li>
                <li>Peachtree City</li>
                <li>Union City</li>
                <li>LaGrange</li>
                <li>Tyrone</li>
              </ul>
            </div>
          </div>
          <p className="text-lg mt-4">
            For commercial, industrial, and specialized roofs, we offer our services statewide in both Alabama and Georgia.
          </p>
        </div>
      </Section>
      <Footer />
    </div>
  )
}