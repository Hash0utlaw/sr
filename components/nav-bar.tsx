"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, Phone } from "lucide-react"
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
        isScrolled ? "bg-black shadow-lg" : "bg-transparent",
      )}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between py-4 lg:py-6">
          <Link href="/" className="flex items-center">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/SummitRoofing.PNG-U6d5YN8YnerXboDL2Sdes3jApfffBA.png"
              alt="Summit Roofing"
              width={200}
              height={100}
              className="h-16 w-auto lg:h-20"
              priority
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-1 xl:space-x-4">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm xl:text-base font-medium text-white hover:text-orange-400 transition-colors duration-200 px-3 py-2 rounded-md hover:bg-orange-500/10"
              >
                {item.label}
              </Link>
            ))}
            <a
              href="tel:(704) 578-4756"
              className="bg-orange-500 text-white px-4 py-2 rounded-full hover:bg-orange-600 transition-colors duration-200 font-bold flex items-center space-x-2"
            >
              <Phone size={18} />
              <span className="hidden xl:inline">(704) 578-4756</span>
            </a>
          </div>

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
          <div className="flex flex-col h-full justify-center items-center space-y-8 p-4">
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
            <a
              href="tel:(704) 578-4756"
              className="bg-orange-500 text-white px-6 py-3 rounded-full hover:bg-orange-600 transition-colors duration-200 font-bold text-center flex items-center space-x-2"
              onClick={() => setIsOpen(false)}
            >
              <Phone size={18} />
              <span>(704) 578-4756</span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}

