import { NavBar } from '@/components/nav-bar'
import { Footer } from '@/components/footer'
import { ServiceHeader } from '@/components/service-header'
import { Section } from '@/components/section'
import { HailDamageSection } from '@/components/hail-damage-section'
import { CheckCircle2 } from 'lucide-react'
import Link from 'next/link'

export default function InsuranceReplacementPage() {
  return (
    <div className="min-h-screen bg-black text-orange-500">
      <NavBar />
      <ServiceHeader 
        title="Insurance-Covered Roof Replacement"
        description="Expert assistance with insurance claims for complete roof replacement"
        backgroundImage="/images/insurance-replacement-bg.jpg"
      />
      <Section>
        <div className="space-y-6 animate-fade-in-up">
          <h2 className="text-3xl font-bold">Full Replacement Through Insurance</h2>
          <p className="text-lg">
            At Summit Roofing, we specialize in helping homeowners secure full roof replacements through insurance approvals. Our expert team guides you through the entire process, saving you time, stress, and money.
          </p>
          <div className="grid md:grid-cols-2 gap-8 mt-8">
            <div className="bg-black/50 p-6 rounded-lg border border-orange-500">
              <h3 className="text-xl font-bold mb-4">Our Insurance Claim Process</h3>
              <ol className="space-y-4">
                <li className="flex items-start space-x-2">
                  <span className="font-bold text-orange-500">1.</span>
                  <span>Free comprehensive roof inspection</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="font-bold text-orange-500">2.</span>
                  <span>Professional documentation of all damage</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="font-bold text-orange-500">3.</span>
                  <span>Assistance with insurance claim filing</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="font-bold text-orange-500">4.</span>
                  <span>Meeting with insurance adjusters</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="font-bold text-orange-500">5.</span>
                  <span>Complete roof replacement upon approval</span>
                </li>
              </ol>
            </div>
            <div className="bg-black/50 p-6 rounded-lg border border-orange-500">
              <h3 className="text-xl font-bold mb-4">Benefits</h3>
              <ul className="space-y-4">
                <li className="flex items-start space-x-2">
                  <CheckCircle2 className="w-6 h-6 text-orange-500 flex-shrink-0" />
                  <span>No upfront costs for inspection</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle2 className="w-6 h-6 text-orange-500 flex-shrink-0" />
                  <span>Expert handling of insurance paperwork</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle2 className="w-6 h-6 text-orange-500 flex-shrink-0" />
                  <span>Potential premium-reducing upgrades</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle2 className="w-6 h-6 text-orange-500 flex-shrink-0" />
                  <span>Lifetime transferable warranties</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Section>
      
      <Section dark>
        <h2 className="text-3xl font-bold mb-8">Hail Damage and Insurance Coverage</h2>
        <HailDamageSection />
      </Section>

      <Section>
        <div className="text-center space-y-6">
          <h2 className="text-3xl font-bold">Ready to Get Started?</h2>
          <p className="text-lg max-w-2xl mx-auto">
            Don&apos;t wait for leaks to appear. Contact us today for a free inspection and let us help you navigate the insurance claim process.
          </p>
          <Link 
            href="/contact"
            className="inline-block bg-orange-500 text-black px-8 py-3 rounded-full hover:bg-orange-600 transition-colors"
          >
            Schedule Your Free Inspection
          </Link>
        </div>
      </Section>
      <Footer />
    </div>
  )
}

