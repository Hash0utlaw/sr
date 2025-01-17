'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'

export function NavBar() {
  const [isOpen, setIsOpen] = useState(false)

  const menuItems = [
    { href: '/', label: 'HOME' },
    { href: '/about', label: 'ABOUT US' },
    { href: '/residential', label: 'RESIDENTIAL ROOFING' },
    { href: '/commercial', label: 'COMMERCIAL ROOFING' },
    { href: '/specialty', label: 'SPECIALTY ROOFING' },
    { href: '/emergency', label: 'EMERGENCY SERVICES' },
    { href: '/financing', label: 'FINANCING' },
    { href: '/contact', label: 'CONTACT' },
  ]

  return (
    <nav className="fixed w-full bg-black text-orange-500 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-3">
          <Link href="/" className="flex items-center">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/SummitRoofing.PNG-U6d5YN8YnerXboDL2Sdes3jApfffBA.png"
              alt="Summit Roofing"
              width={250}
              height={125}
              className="h-20 w-auto"
              priority
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-8">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium hover:text-orange-400 transition-colors duration-200"
              >
                {item.label}
              </Link>
            ))}
            <a 
              href="tel:(770) 627-7663" 
              className="bg-orange-500 text-white px-4 py-2 rounded-full hover:bg-orange-600 transition-colors duration-200 font-bold"
            >
              (770) 627-7663
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden text-orange-500 p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={cn(
          "lg:hidden absolute left-0 right-0 bg-black border-t border-orange-500 transition-all duration-300 ease-in-out z-50",
          isOpen ? "top-full opacity-100 visible" : "top-[-400px] opacity-0 invisible"
        )}>
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium hover:text-orange-400 transition-colors duration-200 py-2"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <a 
              href="tel:(770) 627-7663" 
              className="bg-orange-500 text-white px-6 py-3 rounded-full hover:bg-orange-600 transition-colors duration-200 font-bold text-center"
            >
              (770) 627-7663
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}

