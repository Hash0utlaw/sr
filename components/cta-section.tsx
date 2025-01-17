import { Phone } from 'lucide-react'
import Link from 'next/link'

export function CTASection() {
  return (
    <section className="py-20 bg-black relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6 text-gradient">
            Ready to Start Your Roofing Project?
          </h2>
          <p className="text-xl mb-8 text-[#ff9433]">
            Contact us today for a free inspection and estimate
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link 
              href="/contact"
              className="btn-primary animate-glow"
            >
              Get Free Estimate
            </Link>
            <a 
              href="tel:(770) 627-7663"
              className="flex items-center gap-2 text-xl font-bold text-[#ff7b00] hover:text-[#ff9433] hover-lift"
            >
              <Phone className="w-6 h-6" />
              (770) 627-7663
            </a>
          </div>
        </div>
      </div>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('/pattern.svg')] bg-repeat" />
      </div>
    </section>
  )
}

