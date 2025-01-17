import ContactForm from '@/components/ContactForm';
import { MapPin, Award, Clock, Phone } from 'lucide-react';
import { NavBar } from '@/components/nav-bar';
import { Footer } from '@/components/footer';

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      <NavBar />
      {/* Hero Section */}
      <section className="bg-secondary py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Contact Summit Roofing
            </h1>
            <p className="text-xl text-gray-300">
              Get in touch with our roofing experts for a free consultation and estimate.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Contact Cards */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto -mt-20">
            {/* Emergency Service */}
            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <Phone className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-bold text-secondary mb-2">
                24/7 Emergency Service
              </h3>
              <p className="text-secondary-600 mb-4">
                Available around the clock for urgent roofing needs
              </p>
              <a
                href="tel:1-800-SUMMIT-1"
                className="text-primary font-semibold hover:text-primary-dark"
              >
                1-800-SUMMIT-1
              </a>
            </div>

            {/* Service Guarantee */}
            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <Award className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-bold text-secondary mb-2">
                Service Guarantee
              </h3>
              <p className="text-secondary-600">
                Expert service backed by our lifetime workmanship warranty
              </p>
            </div>

            {/* Business Hours */}
            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <Clock className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-bold text-secondary mb-2">
                Business Hours
              </h3>
              <p className="text-secondary-600">
                Mon-Fri: 8AM-5PM
                <br />
                Sat: 9AM-2PM
                <br />
                Sun: Closed
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-secondary mb-8 text-center">
              Our Service Areas
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Alabama Service Areas */}
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-secondary mb-4 flex items-center">
                  <MapPin className="w-5 h-5 mr-2 text-primary" />
                  Alabama Coverage
                </h3>
                <ul className="grid grid-cols-2 gap-4">
                  <li className="flex items-center text-secondary-600">
                    <div className="w-2 h-2 bg-primary transform rotate-45 mr-2" />
                    Birmingham
                  </li>
                  <li className="flex items-center text-secondary-600">
                    <div className="w-2 h-2 bg-primary transform rotate-45 mr-2" />
                    Montgomery
                  </li>
                  <li className="flex items-center text-secondary-600">
                    <div className="w-2 h-2 bg-primary transform rotate-45 mr-2" />
                    Huntsville
                  </li>
                  <li className="flex items-center text-secondary-600">
                    <div className="w-2 h-2 bg-primary transform rotate-45 mr-2" />
                    Mobile
                  </li>
                  <li className="flex items-center text-secondary-600">
                    <div className="w-2 h-2 bg-primary transform rotate-45 mr-2" />
                    Auburn
                  </li>
                  <li className="flex items-center text-secondary-600">
                    <div className="w-2 h-2 bg-primary transform rotate-45 mr-2" />
                    Tuscaloosa
                  </li>
                </ul>
              </div>

              {/* Georgia Service Areas */}
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-secondary mb-4 flex items-center">
                  <MapPin className="w-5 h-5 mr-2 text-primary" />
                  Georgia Coverage
                </h3>
                <ul className="grid grid-cols-2 gap-4">
                  <li className="flex items-center text-secondary-600">
                    <div className="w-2 h-2 bg-primary transform rotate-45 mr-2" />
                    Atlanta
                  </li>
                  <li className="flex items-center text-secondary-600">
                    <div className="w-2 h-2 bg-primary transform rotate-45 mr-2" />
                    Augusta
                  </li>
                  <li className="flex items-center text-secondary-600">
                    <div className="w-2 h-2 bg-primary transform rotate-45 mr-2" />
                    Columbus
                  </li>
                  <li className="flex items-center text-secondary-600">
                    <div className="w-2 h-2 bg-primary transform rotate-45 mr-2" />
                    Macon
                  </li>
                  <li className="flex items-center text-secondary-600">
                    <div className="w-2 h-2 bg-primary transform rotate-45 mr-2" />
                    Savannah
                  </li>
                  <li className="flex items-center text-secondary-600">
                    <div className="w-2 h-2 bg-primary transform rotate-45 mr-2" />
                    Athens
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-secondary mb-8 text-center">
              Frequently Asked Questions
            </h2>
            
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-bold text-secondary mb-2">
                  How quickly can you respond to emergency situations?
                </h3>
                <p className="text-secondary-600">
                  We offer 24/7 emergency response services and typically arrive within 2-4 hours for urgent situations.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-bold text-secondary mb-2">
                  Do you provide free estimates?
                </h3>
                <p className="text-secondary-600">
                  Yes, we provide free, detailed estimates for all roofing projects. Our expert team will assess your needs and provide a comprehensive quote.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-bold text-secondary mb-2">
                  What warranties do you offer?
                </h3>
                <p className="text-secondary-600">
                  We offer lifetime warranties on workmanship and materials for most roofing systems, with transferable options available.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Integration */}
      <div className="h-96 relative">
        <iframe
          title="Summit Roofing Location Map"
          src="https://www.google.com/maps/embed?pb=YOUR_GOOGLE_MAPS_EMBED_URL"
          width="100%"
          height="100%"
          className="absolute inset-0 border-0"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
      <Footer />
    </div>
  );
}

