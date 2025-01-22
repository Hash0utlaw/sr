import Link from 'next/link'
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-black text-orange-500">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4 text-orange-500">Summit Roofing</h3>
            <p className="text-orange-300 mb-4">
              Professional roofing services with unmatched quality and customer satisfaction.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-orange-300 hover:text-orange-500 transition-colors hover-lift">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="text-orange-300 hover:text-orange-500 transition-colors hover-lift">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="text-orange-300 hover:text-orange-500 transition-colors hover-lift">
                <Twitter className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-orange-500">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-orange-300 hover:text-orange-500 transition-colors hover-lift">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-orange-300 hover:text-orange-500 transition-colors hover-lift">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/financing" className="text-orange-300 hover:text-orange-500 transition-colors hover-lift">
                  Financing
                </Link>
              </li>
              <li>
                <Link href="/testimonials" className="text-orange-300 hover:text-orange-500 transition-colors hover-lift">
                  Testimonials
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-orange-300 hover:text-orange-500 transition-colors hover-lift">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-orange-500">Our Services</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/residential" className="text-orange-300 hover:text-orange-500 transition-colors hover-lift">
                  Residential Roofing
                </Link>
              </li>
              <li>
                <Link href="/commercial" className="text-orange-300 hover:text-orange-500 transition-colors hover-lift">
                  Commercial Roofing
                </Link>
              </li>
              <li>
                <Link href="/repairs" className="text-orange-300 hover:text-orange-500 transition-colors hover-lift">
                  Roof Repairs
                </Link>
              </li>
              <li>
                <Link href="/emergency" className="text-orange-300 hover:text-orange-500 transition-colors hover-lift">
                  Emergency Services
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-orange-500">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-2">
                <Phone className="w-5 h-5 mt-1 text-orange-500 flex-shrink-0" />
                <a href="tel:(704) 578-4756" className="text-orange-300 hover:text-orange-500 transition-colors hover-lift">
                (704) 578-4756
                </a>
              </li>
              <li className="flex items-start space-x-2">
                <Mail className="w-5 h-5 mt-1 text-orange-500 flex-shrink-0" />
                <a href="mailto:davis@summitroofingprofessionals.com" className="text-orange-300 hover:text-orange-500 transition-colors hover-lift">
                davis@summitroofingprofessionals.com
                </a>
              </li>
              <li className="flex items-start space-x-2">
                <MapPin className="w-5 h-5 mt-1 text-orange-500 flex-shrink-0" />
                <span className="text-orange-300">
                  3415 Confetti Blush Dr<br />
                  Columbus, GA 31909
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-orange-500/20 mt-12 pt-8 text-center text-orange-300">
          <p>© {new Date().getFullYear()} Summit Roofing. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

