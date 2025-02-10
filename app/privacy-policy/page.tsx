import { NavBar } from "@/components/nav-bar"
import { Footer } from "@/components/footer"
import { Section } from "@/components/section"

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-black text-orange-500">
      <NavBar />
      <Section>
        <div className="max-w-4xl mx-auto space-y-8">
          <h1 className="text-4xl font-bold">Privacy & Cookie Policy</h1>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold">Cookie Policy</h2>
            <p>
              Our website uses cookies to enhance your browsing experience. Cookies are small text files that are stored
              on your device when you visit our website.
            </p>

            <h3 className="text-xl font-semibold">Types of Cookies We Use:</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>Essential cookies: Required for basic website functionality</li>
              <li>Analytics cookies: Help us understand how visitors use our site</li>
              <li>Marketing cookies: Used to deliver relevant advertisements</li>
              <li>Preference cookies: Remember your settings and choices</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold">How We Use Your Data</h2>
            <p>We collect and process your personal data for the following purposes:</p>
            <ul className="list-disc list-inside space-y-2">
              <li>To provide and maintain our services</li>
              <li>To notify you about changes to our services</li>
              <li>To provide customer support</li>
              <li>To gather analysis or valuable information to improve our services</li>
            </ul>
          </section>
        </div>
      </Section>
      <Footer />
    </div>
  )
}

