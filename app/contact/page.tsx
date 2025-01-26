import ContactForm from "@/components/ContactForm"
import { MapPin, Award, Clock, Phone } from "lucide-react"
import { NavBar } from "@/components/nav-bar"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-black text-orange-500">
      <NavBar />
      {/* Hero Section */}
      <section className="bg-gray-900 py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-orange-500">Contact Summit Roofing</h1>
            <p className="text-xl text-orange-300">
              Get in touch with our roofing experts for a free consultation and estimate.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Contact Cards */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto -mt-32">
            {/* Emergency Service */}
            <Card className="bg-gray-900 border-orange-500">
              <CardHeader>
                <Phone className="w-12 h-12 text-orange-500 mx-auto mb-4" />
                <CardTitle className="text-2xl font-bold text-orange-500 mb-2">Rapid Emergency Response</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-orange-300 mb-4">Available around the clock for urgent roofing needs</p>
               
              </CardContent>
            </Card>

            {/* Service Guarantee */}
            <Card className="bg-gray-900 border-orange-500">
              <CardHeader>
                <Award className="w-12 h-12 text-orange-500 mx-auto mb-4" />
                <CardTitle className="text-2xl font-bold text-orange-500 mb-2">Service Guarantee</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-orange-300">Expert service backed by our lifetime workmanship warranty</p>
              </CardContent>
            </Card>

            {/* Business Hours */}
            <Card className="bg-gray-900 border-orange-500">
              <CardHeader>
                <Clock className="w-12 h-12 text-orange-500 mx-auto mb-4" />
                <CardTitle className="text-2xl font-bold text-orange-500 mb-2">Business Hours</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-orange-300">
                  Mon-Fri: 6AM-6PM
                  <br />
                  Sat: 6AM-6PM
                  <br />
                  Sun: 6AM-6PM
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-orange-500 mb-12 text-center">Our Service Areas</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Alabama Service Areas */}
              <Card className="bg-gray-900 border-orange-500">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-orange-500 mb-4 flex items-center">
                    <MapPin className="w-6 h-6 mr-2 text-orange-500" />
                    Alabama Coverage
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="grid grid-cols-2 gap-4">
                    {["Auburn", "Opelika", "Smiths Station", "Phenix City", "Alexander City", "Valley AL", "Lanett AL"].map((city) => (
                      <li key={city} className="flex items-center text-orange-300">
                        <div className="w-2 h-2 bg-orange-500 transform rotate-45 mr-2" />
                        {city}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {/* Georgia Service Areas */}
              <Card className="bg-gray-900 border-orange-500">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-orange-500 mb-4 flex items-center">
                    <MapPin className="w-6 h-6 mr-2 text-orange-500" />
                    Georgia Coverage
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="grid grid-cols-2 gap-4">
                    {["Columbus", "Lagrange", "Pine Mountain", "Newnan", "Peachtree City", "Tyrone", "Sharpsburg"].map((city) => (
                      <li key={city} className="flex items-center text-orange-300">
                        <div className="w-2 h-2 bg-orange-500 transform rotate-45 mr-2" />
                        {city}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold text-orange-500 mb-12 text-center">Frequently Asked Questions</h2>

            <div className="space-y-6">
              {[
                {
                  question: "How quickly can you respond to emergency situations?",
                  answer:
                    "We offer 24/7 emergency response services and typically arrive within 2-4 hours for urgent situations.",
                },
                {
                  question: "Do you provide free estimates?",
                  answer:
                    "Yes, we provide free, detailed estimates for all roofing projects. Our expert team will assess your needs and provide a comprehensive quote.",
                },
                {
                  question: "What warranties do you offer?",
                  answer:
                    "We offer lifetime warranties on workmanship and materials for most roofing systems, with transferable options available.",
                },
              ].map((faq, index) => (
                <Card key={index} className="bg-black border-orange-500">
                  <CardHeader>
                    <CardTitle className="text-xl font-bold text-orange-500">{faq.question}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-orange-300">{faq.answer}</p>
                  </CardContent>
                </Card>
              ))}
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
  )
}

