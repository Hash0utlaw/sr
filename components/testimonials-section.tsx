'use client'

import { useState } from 'react'
import { ChevronLeft, ChevronRight, Star } from 'lucide-react'

const testimonials = [
  {
    name: "John D.",
    location: "Atlanta, GA",
    text: "Summit Roofing did an outstanding job on our roof replacement. Professional, efficient, and clean work!",
    rating: 5
  },
  {
    name: "Sarah M.",
    location: "Birmingham, AL",
    text: "Excellent service from start to finish. The team was knowledgeable and completed the work ahead of schedule.",
    rating: 5
  },
  {
    name: "Robert K.",
    location: "Columbus, GA",
    text: "Great experience with Summit Roofing. Fair pricing and quality workmanship. Highly recommended!",
    rating: 5
  }
]

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const next = () => {
    setCurrentIndex((current) => 
      current === testimonials.length - 1 ? 0 : current + 1
    )
  }

  const prev = () => {
    setCurrentIndex((current) => 
      current === 0 ? testimonials.length - 1 : current - 1
    )
  }

  return (
    <section className="py-20 bg-gray-100 text-accent">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-secondary">What Our <span className="text-primary">Clients</span> Say</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Read testimonials from our satisfied customers
          </p>
        </div>
        <div className="max-w-4xl mx-auto relative">
          <div className="flex items-center justify-between">
            <button 
              onClick={prev}
              className="p-2 rounded-full bg-primary text-accent hover:bg-primary/90 transition-colors hover-grow"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <div className="text-center px-8 bg-white rounded-lg p-6 animate-fade-in shadow-lg border-2 border-primary">
              <div className="flex justify-center mb-4">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 text-primary fill-current" />
                ))}
              </div>
              <p className="text-xl mb-6 italic">
                &quot;{testimonials[currentIndex].text}&quot;
              </p>
              <div className="font-bold">
                {testimonials[currentIndex].name}
                <span className="text-gray-600 font-normal"> - {testimonials[currentIndex].location}</span>
              </div>
            </div>
            <button 
              onClick={next}
              className="p-2 rounded-full bg-primary text-accent hover:bg-primary/90 transition-colors hover-grow"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
