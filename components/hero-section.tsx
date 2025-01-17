import { Button } from "@/components/ui/button"
import { Shield, Award } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

export function HeroSection() {
return (
  <div className="relative min-h-screen pt-32">
    {/* Background Image with Overlay */}
    <div className="absolute inset-0 z-10">
      <Image
        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/hero-uPkVL7hhEV7MMxNJV5dEZKxi4o7rch.png"
        alt="Professional roofing work at sunset"
        fill
        className="object-cover"
        priority
        quality={90}
      />
      <div className="absolute inset-0 bg-black/60" /> {/* Darker overlay for better text contrast */}
    </div>
    
    {/* Content */}
    <div className="relative z-20 container mx-auto px-4 h-[calc(100vh-128px)] flex flex-col items-center justify-center text-center">
      <h1 className="text-4xl md:text-6xl font-bold mb-8 text-white">
        EXPERT ROOFING SOLUTIONS IN
        <br />
        <span className="text-orange-500 border-b-4 border-orange-500 pb-2">
          ALABAMA & GEORGIA
        </span>
      </h1>
      <p className="text-xl md:text-2xl mb-12 max-w-3xl text-white/90">
        Professional roofing services with unmatched quality and customer satisfaction
      </p>
      <Link 
        href="/contact"
        className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-6 rounded-full text-lg font-bold transition-all duration-200 transform hover:scale-105"
      >
        GET FREE ESTIMATE
      </Link>
      <div className="mt-12 flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8">
        <span className="flex items-center text-white">
          <Shield className="w-6 h-6 mr-3 text-orange-500" />
          <span className="text-lg">Fully Licensed & Insured</span>
        </span>
        <span className="flex items-center text-white">
          <Award className="w-6 h-6 mr-3 text-orange-500" />
          <span className="text-lg">Lifetime Transferable Warranties</span>
        </span>
      </div>
    </div>
  </div>
)
}

