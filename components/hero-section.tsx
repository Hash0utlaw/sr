import { Shield, Award } from "lucide-react"
import Link from "next/link"

export function HeroSection() {
  return (
    <div className="relative min-h-screen pt-32">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-black/80 z-10"
        style={{
          backgroundImage: `url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/hero-MkgXeZZJuZP5DV7TEhPmrFLbVICw0s.png')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* Content */}
      <div className="relative z-20 container mx-auto px-4 h-[calc(100vh-128px)] flex flex-col items-center justify-center text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-8 text-white">
          EXPERT ROOFING SOLUTIONS IN
          <br />
          <div className="inline-block">
            <span className="text-orange-500 border-b-4 border-orange-500 pb-2 whitespace-nowrap">
              ALABAMA & GEORGIA
            </span>
          </div>
        </h1>
        <p className="text-xl md:text-2xl mb-12 max-w-3xl text-white/90">
          Professional roofing services with unmatched quality and customer satisfaction
        </p>
        <Link
          href="/contact"
          className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-6 rounded-full text-lg font-bold transition-all duration-200 transform hover:scale-105"
        >
          CONTACT US
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


