"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"

export function CookieConsent() {
  const [showConsent, setShowConsent] = useState(false)

  useEffect(() => {
    // Check if user has already consented
    const hasConsented = localStorage.getItem("cookieConsent")
    if (!hasConsented) {
      setShowConsent(true)
    }
  }, [])

  const handleAccept = () => {
    localStorage.setItem("cookieConsent", "true")
    setShowConsent(false)
  }

  const handleDecline = () => {
    localStorage.setItem("cookieConsent", "false")
    setShowConsent(false)
  }

  if (!showConsent) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gray-900 border-t border-orange-500 p-4 z-50">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-white text-sm">
          We use cookies to enhance your experience. By continuing to visit this site you agree to our use of cookies.{" "}
          <a href="/privacy-policy" className="text-orange-500 hover:text-orange-400 underline">
            Learn more
          </a>
        </div>
        <div className="flex gap-4">
          <Button
            variant="outline"
            onClick={handleDecline}
            className="border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white"
          >
            Decline
          </Button>
          <Button onClick={handleAccept} className="bg-orange-500 text-white hover:bg-orange-600">
            Accept
          </Button>
        </div>
      </div>
    </div>
  )
}

