import Image from 'next/image'
import Link from 'next/link'
import { AlertCircle, CheckCircle2, Shield } from 'lucide-react'

export function HailDamageSection() {
  return (
    <div className="space-y-8">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div className="space-y-4">
          <h2 className="text-3xl font-bold text-orange-500">Understanding Hail Damage</h2>
          <p className="text-lg text-orange-300">
            Hail damage isn&apos;t always immediately visible, but it can significantly impact your roof&apos;s integrity. Our experts know exactly what to look for and how to document it for your insurance claim.
          </p>
          <div className="bg-black/50 p-6 rounded-lg border border-orange-500">
            <h3 className="text-xl font-semibold text-orange-500 mb-4">Key Facts About Hail Damage:</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2">
                <AlertCircle className="w-6 h-6 text-orange-500 flex-shrink-0 mt-1" />
                <span>Hail damage doesn&apos;t always cause immediate leaks</span>
              </li>
              <li className="flex items-start space-x-2">
                <CheckCircle2 className="w-6 h-6 text-orange-500 flex-shrink-0 mt-1" />
                <span>Your roof can still qualify for full replacement even without leaks</span>
              </li>
              <li className="flex items-start space-x-2">
                <Shield className="w-6 h-6 text-orange-500 flex-shrink-0 mt-1" />
                <span>Filing a claim is free and won&apos;t affect your insurance rates</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="relative h-[400px] rounded-lg overflow-hidden">
          <Image
            src="/insurance/hail-damage.png"
            alt="Hail Damage Example"
            fill
            className="object-cover"
          />
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-black p-6 rounded-lg border border-orange-500">
          <h3 className="text-xl font-bold text-orange-500 mb-4">Signs of Hail Damage</h3>
          <ul className="space-y-2 text-orange-300">
            <li>• Dents or dimples in shingles</li>
            <li>• Missing granules</li>
            <li>• Exposed fiberglass mat</li>
            <li>• Dents in gutters or downspouts</li>
            <li>• Damaged roof vents or flashing</li>
          </ul>
        </div>

        <div className="bg-black p-6 rounded-lg border border-orange-500">
          <h3 className="text-xl font-bold text-orange-500 mb-4">Insurance Coverage</h3>
          <ul className="space-y-2 text-orange-300">
            <li>• Full replacement often covered</li>
            <li>• No premium increase for claims*</li>
            <li>• Free inspection and assessment</li>
            <li>• We work directly with adjusters</li>
            <li>• Hassle-free claims process</li>
          </ul>
        </div>

        <div className="bg-black p-6 rounded-lg border border-orange-500">
          <h3 className="text-xl font-bold text-orange-500 mb-4">Our Process</h3>
          <ul className="space-y-2 text-orange-300">
            <li>1. Free inspection</li>
            <li>2. Document all damage</li>
            <li>3. File insurance claim</li>
            <li>4. Meet with adjuster</li>
            <li>5. Complete replacement</li>
          </ul>
        </div>
      </div>

      <div className="text-center space-y-4">
        <p className="text-sm text-orange-300">
          *Terms and conditions apply. Coverage and premium impacts may vary by insurance provider and policy terms.
        </p>
       
      </div>
    </div>
  )
}