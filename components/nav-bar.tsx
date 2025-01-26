"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X,} from "lucide-react"
import { cn } from "@/lib/utils"

export function NavBar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const menuItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/residential", label: "Residential Roofing" },
    { href: "/commercial", label: "Commercial Roofing" },
    { href: "/specialty", label: "Specialty Roofing" },
    { href: "/emergency", label: "Emergency Services" },
    { href: "/financing", label: "Financing" },
    { href: "/contact", label: "Contact" },
  ]

  return (
    <nav
      className={cn(
        "fixed w-full z-50 transition-all duration-300",
        isScrolled ? "bg-black/95 shadow-lg" : "bg-transparent",
      )}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-24">
          <Link href="/" className="flex-shrink-0">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/SummitRoofing.PNG-U6d5YN8YnerXboDL2Sdes3jApfffBA.png"
              alt="Summit Roofing"
              width={200}
              height={100}
              className="h-32 w-auto lg:h-21" 
              priority
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-6">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-white hover:text-orange-400 transition-colors duration-200"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Phone number */}
       

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-white p-2 focus:outline-none focus:ring-2 focus:ring-orange-500 rounded-md"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={cn(
            "lg:hidden fixed inset-0 bg-black bg-opacity-90 transition-all duration-300 ease-in-out z-50",
            isOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none",
          )}
        >
          <div className="flex flex-col h-full justify-center items-center space-y-6 p-4">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-xl font-medium text-white hover:text-orange-400 transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          
          </div>
        </div>
      </div>
    </nav>
  )
}




