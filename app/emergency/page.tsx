import { NavBar } from '@/components/nav-bar'
import { ServiceHeader } from '@/components/service-header'
import { Section } from '@/components/section'
import { Footer } from '@/components/footer'
import Image from 'next/image'

export default function EmergencyServices() {
  return (
    <main>
      <NavBar />
      <ServiceHeader 
        title="Emergency Roofing Services"
        description="24/7 rapid response for urgent roofing needs"
        backgroundImage="/emergency-roofing-bg.jpg"
      />
      <Section>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="animate-fade-in-left relative h-[400px]">
            <Image 
              src="/emergency-roofing.jpg" 
              alt="Emergency Roofing Services" 
              fill
              className="rounded-lg shadow-lg object-cover" 
            />
          </div>
          <div className="space-y-4 animate-fade-in-right">
            <h2 className="text-3xl font-bold">Fast, Reliable Emergency Roofing Solutions</h2>
            <p>When disaster strikes, Summit Roofing is here to help. Our emergency roofing services are designed to quickly address urgent issues and prevent further damage to your property.</p>
            <ul className="list-disc list-inside space-y-2">
              <li>24/7 Emergency Response</li>
              <li>Rapid Leak Repairs</li>
              <li>Storm Damage Mitigation</li>
              <li>Temporary Roofing Solutions</li>
              <li>Emergency Tarping Services</li>
              <li>Structural Stabilization</li>
            </ul>
          </div>
        </div>
      </Section>
      <Section dark>
        <div className="text-center max-w-3xl mx-auto space-y-4 animate-fade-in">
          <h2 className="text-3xl font-bold">Why Choose Our Emergency Roofing Services?</h2>
          <p>When you&apos;re facing a roofing emergency, you need a team you can trust. Here&apos;s why Summit Roofing should be your first call:</p>
          <ul className="grid md:grid-cols-2 gap-4 text-left">
            <li className="flex items-start space-x-2">
              <svg className="w-6 h-6 text-primary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
              <span>Rapid response times</span>
            </li>
            <li className="flex items-start space-x-2">
              <svg className="w-6 h-6 text-primary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
              <span>Experienced emergency team</span>
            </li>
            <li className="flex items-start space-x-2">
              <svg className="w-6 h-6 text-primary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
              <span>State-of-the-art equipment</span>
            </li>
            <li className="flex items-start space-x-2">
              <svg className="w-6 h-6 text-primary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
              <span>Comprehensive damage assessment</span>
            </li>
          </ul>
        </div>
      </Section>
      <Footer />
    </main>
  )
}

