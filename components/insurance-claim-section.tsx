import Link from "next/link"
import { Shield, FileCheck, DollarSign } from "lucide-react"

export function InsuranceClaimSection() {
  return (
    <section className="py-16 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-orange-500 mb-4">Full Replacement Covered by Insurance</h2>
          <p className="text-lg text-orange-300 max-w-2xl mx-auto">
            We specialize in helping homeowners secure full roof replacements through insurance approvals, saving you
            time, stress, and money.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-black p-6 rounded-lg shadow-lg">
            <Shield className="w-12 h-12 text-orange-500 mb-4" />
            <h3 className="text-xl font-bold text-orange-500 mb-2">Expert Claim Assistance</h3>
            <p className="text-orange-300">
              We handle the entire insurance claim process, from inspection to approval.
            </p>
          </div>
          <div className="bg-black p-6 rounded-lg shadow-lg">
            <FileCheck className="w-12 h-12 text-orange-500 mb-4" />
            <h3 className="text-xl font-bold text-orange-500 mb-2">Free Inspection & Claim Filing</h3>
            <p className="text-orange-300">
              Our thorough inspections and claim filing service are completely free of charge.
            </p>
          </div>
          <div className="bg-black p-6 rounded-lg shadow-lg">
            <DollarSign className="w-12 h-12 text-orange-500 mb-4" />
            <h3 className="text-xl font-bold text-orange-500 mb-2">Potential Premium Reduction</h3>
            <p className="text-orange-300">
              Upgrade your shingles for free, potentially lowering your insurance premium.
            </p>
          </div>
        </div>
        <div className="text-center mt-12">
          <Link
            href="/insurance-replacement"
            className="inline-block bg-orange-500 text-black px-6 py-3 rounded-full hover:bg-orange-600 transition-colors w-auto mx-auto text-center"
          >
            Learn More About Insurance-Covered Replacements
          </Link>
        </div>
      </div>
    </section>
  )
}

