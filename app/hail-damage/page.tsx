import { NavBar } from '@/components/nav-bar'
import { Footer } from '@/components/footer'
import { ServiceHeader } from '@/components/service-header'
import { Section } from '@/components/section'
import Link from 'next/link'

export default function HailDamagePage() {
  return (
    <div className="min-h-screen bg-black text-orange-500">
      <NavBar />
      <ServiceHeader 
        title="Hail Damage and Insurance Coverage"
        description="Understanding hail damage and navigating insurance claims"
        backgroundImage="/images/hail-damage-bg.jpg"
      />
      <Section>
        <div className="space-y-6 animate-fade-in-up">
          <h2 className="text-3xl font-bold">What Does Hail Damage Look Like?</h2>
          <p className="text-lg">
            Hail damage on a roof isn&apos;t always immediately visible, but it can significantly impact your roof&apos;s integrity. Here are some signs to look for:
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>Dents or dimples in shingles</li>
            <li>Cracked or missing shingles</li>
            <li>Granules collecting in gutters</li>
            <li>Dents on vents, flashing, or metal valleys</li>
          </ul>
          <p className="text-lg mt-4">
            Important: Hail damage doesn&apos;t always cause immediate leaks, but it can lead to future problems if left unaddressed.
          </p>
        </div>
      </Section>
      <Section dark>
        <div className="space-y-6 animate-fade-in-up">
          <h2 className="text-3xl font-bold">How to Get Covered for Hail Damage</h2>
          <ol className="list-decimal list-inside space-y-4">
            <li><span className="font-semibold">Schedule an Inspection:</span> Contact us for a free, thorough roof inspection.</li>
            <li><span className="font-semibold">Document the Damage:</span> We&apos;ll provide detailed documentation of any hail damage.</li>
            <li><span className="font-semibold">File a Claim:</span> We can help you file a claim with your insurance company.</li>
            <li><span className="font-semibold">Meet with the Adjuster:</span> Our experts will meet with the insurance adjuster to ensure all damage is properly assessed.</li>
            <li><span className="font-semibold">Approval and Repair:</span> Once approved, we&apos;ll proceed with the necessary repairs or replacement.</li>
          </ol>
          <div className="bg-orange-500 text-black p-4 rounded-lg mt-6">
            <p className="font-semibold">Important Notes:</p>
            <ul className="list-disc list-inside mt-2">
              <li>Filing a claim is free and doesn&apos;t necessarily affect your insurance rates.</li>
              <li>Even if your roof isn&apos;t leaking, you may still be eligible for full replacement.</li>
              <li>Approval for full replacement doesn&apos;t automatically raise your premiums (terms and conditions may apply).</li>
            </ul>
          </div>
        </div>
      </Section>
      <Section>
        <div className="text-center space-y-6 animate-fade-in-up">
          <h2 className="text-3xl font-bold">Don&apos;t Wait to Address Hail Damage</h2>
          <p className="text-lg">
            Hail damage can compromise your roof&apos;s integrity over time. Don&apos;t wait for leaks to appear before taking action.
          </p>
          <Link href="/contact" className="inline-block bg-orange-500 text-black px-6 py-3 rounded-full hover:bg-orange-600 transition-colors">
            Schedule Your Free Inspection Today
          </Link>
        </div>
      </Section>
      <Footer />
    </div>
  )
}
