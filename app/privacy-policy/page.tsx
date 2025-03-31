import { NavBar } from "@/components/nav-bar"
import { Footer } from "@/components/footer"
import { Section } from "@/components/section"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Shield, Cookie, FileText, Lock } from "lucide-react"

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-black text-orange-500">
      <NavBar />

      {/* Hero Section */}
      <div className="bg-gray-900 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Privacy & Cookie Policy</h1>
            <p className="text-lg text-orange-300">
              We respect your privacy and are committed to protecting your personal data
            </p>
          </div>
        </div>
      </div>

      <Section>
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Introduction Card */}
          <Card className="bg-gray-900 border-orange-500">
            <CardHeader className="pb-3">
              <div className="flex items-center gap-2 mb-2">
                <Shield className="h-6 w-6 text-orange-500" />
                <CardTitle className="text-2xl text-orange-500">Our Commitment to Privacy</CardTitle>
              </div>
              <p className="text-orange-300 text-sm">Last updated: March 30, 2025</p>
              <Separator className="bg-orange-500/20 mt-4" />
            </CardHeader>
            <CardContent className="text-orange-300 space-y-4">
              <p>
                At Summit Roofing, we take your privacy seriously. This Privacy Policy explains how we collect, use,
                disclose, and safeguard your information when you visit our website or use our services.
              </p>
              <p>
                Please read this Privacy Policy carefully. If you do not agree with the terms of this Privacy Policy,
                please do not access the site.
              </p>
            </CardContent>
          </Card>

          {/* Cookie Policy Section */}
          <Card className="bg-gray-900 border-orange-500">
            <CardHeader className="pb-3">
              <div className="flex items-center gap-2 mb-2">
                <Cookie className="h-6 w-6 text-orange-500" />
                <CardTitle className="text-2xl text-orange-500">Cookie Policy</CardTitle>
              </div>
              <Separator className="bg-orange-500/20 mt-4" />
            </CardHeader>
            <CardContent className="text-orange-300 space-y-4">
              <p>
                Our website uses cookies to enhance your browsing experience. Cookies are small text files that are
                stored on your device when you visit our website.
              </p>

              <h3 className="text-xl font-semibold text-orange-500 mt-6 mb-3">Types of Cookies We Use:</h3>

              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="essential" className="border-orange-500/20">
                  <AccordionTrigger className="text-orange-500 hover:text-orange-400">
                    Essential Cookies
                  </AccordionTrigger>
                  <AccordionContent className="text-orange-300">
                    These cookies are necessary for the website to function properly. They enable basic functions like
                    page navigation and access to secure areas of the website. The website cannot function properly
                    without these cookies.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="analytics" className="border-orange-500/20">
                  <AccordionTrigger className="text-orange-500 hover:text-orange-400">
                    Analytics Cookies
                  </AccordionTrigger>
                  <AccordionContent className="text-orange-300">
                    These cookies help us understand how visitors interact with our website by collecting and reporting
                    information anonymously. This helps us improve our website and your experience.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="marketing" className="border-orange-500/20">
                  <AccordionTrigger className="text-orange-500 hover:text-orange-400">
                    Marketing Cookies
                  </AccordionTrigger>
                  <AccordionContent className="text-orange-300">
                    These cookies are used to track visitors across websites. The intention is to display ads that are
                    relevant and engaging for the individual user and thereby more valuable for publishers and
                    third-party advertisers.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="preference" className="border-orange-500/20">
                  <AccordionTrigger className="text-orange-500 hover:text-orange-400">
                    Preference Cookies
                  </AccordionTrigger>
                  <AccordionContent className="text-orange-300">
                    These cookies enable the website to remember information that changes the way the website behaves or
                    looks, like your preferred language or the region that you are in.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>

          {/* Data Usage Section */}
          <Card className="bg-gray-900 border-orange-500">
            <CardHeader className="pb-3">
              <div className="flex items-center gap-2 mb-2">
                <FileText className="h-6 w-6 text-orange-500" />
                <CardTitle className="text-2xl text-orange-500">How We Use Your Data</CardTitle>
              </div>
              <Separator className="bg-orange-500/20 mt-4" />
            </CardHeader>
            <CardContent className="text-orange-300 space-y-4">
              <p>We collect and process your personal data for the following purposes:</p>

              <div className="grid md:grid-cols-2 gap-6 mt-4">
                <div className="bg-gray-800 p-4 rounded-lg border border-orange-500/30">
                  <h4 className="font-semibold text-orange-500 mb-2">Service Provision</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    <li>To provide and maintain our services</li>
                    <li>To notify you about changes to our services</li>
                    <li>To allow you to participate in interactive features</li>
                  </ul>
                </div>

                <div className="bg-gray-800 p-4 rounded-lg border border-orange-500/30">
                  <h4 className="font-semibold text-orange-500 mb-2">Customer Support</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    <li>To provide customer support</li>
                    <li>To respond to your inquiries</li>
                    <li>To fulfill your service requests</li>
                  </ul>
                </div>

                <div className="bg-gray-800 p-4 rounded-lg border border-orange-500/30">
                  <h4 className="font-semibold text-orange-500 mb-2">Analytics & Improvement</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    <li>To gather analysis or valuable information</li>
                    <li>To improve our services</li>
                    <li>To monitor the usage of our services</li>
                  </ul>
                </div>

                <div className="bg-gray-800 p-4 rounded-lg border border-orange-500/30">
                  <h4 className="font-semibold text-orange-500 mb-2">Communication</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    <li>To send you service updates</li>
                    <li>To provide news and general information</li>
                    <li>To send marketing and promotional communications</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Your Rights Section */}
          <Card className="bg-gray-900 border-orange-500">
            <CardHeader className="pb-3">
              <div className="flex items-center gap-2 mb-2">
                <Lock className="h-6 w-6 text-orange-500" />
                <CardTitle className="text-2xl text-orange-500">Your Rights</CardTitle>
              </div>
              <Separator className="bg-orange-500/20 mt-4" />
            </CardHeader>
            <CardContent className="text-orange-300 space-y-4">
              <p>You have certain rights regarding your personal data. These include:</p>

              <ul className="list-disc list-inside space-y-2 mt-4">
                <li>The right to access your personal data</li>
                <li>The right to rectification of inaccurate personal data</li>
                <li>The right to erasure of your personal data</li>
                <li>The right to restrict processing of your personal data</li>
                <li>The right to data portability</li>
                <li>The right to object to processing of your personal data</li>
              </ul>

              <div className="bg-orange-500/10 border border-orange-500/30 rounded-lg p-4 mt-6">
                <p className="text-orange-400 font-medium">
                  To exercise any of these rights, please contact us at privacy@summitroofing.com
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <Card className="bg-gray-900 border-orange-500">
            <CardHeader className="pb-3">
              <CardTitle className="text-2xl text-orange-500">Contact Us</CardTitle>
              <Separator className="bg-orange-500/20 mt-4" />
            </CardHeader>
            <CardContent className="text-orange-300">
              <p>If you have any questions about this Privacy Policy, please contact us:</p>
              <div className="mt-4">
                <p>
                  <span className="font-semibold">By email:</span> privacy@summitroofing.com
                </p>
                <p>
                  <span className="font-semibold">By phone:</span> 1-800-SUMMIT-1
                </p>
                <p>
                  <span className="font-semibold">By mail:</span> 123 Summit Drive, Birmingham, AL 35242
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </Section>
      <Footer />
    </div>
  )
}



