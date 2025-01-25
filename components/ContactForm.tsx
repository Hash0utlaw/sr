"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { Phone, Mail, MapPin, Clock } from "lucide-react"

const schema = yup
  .object({
    firstName: yup.string().required("First name is required"),
    lastName: yup.string().required("Last name is required"),
    email: yup.string().email("Please enter a valid email").required("Email is required"),
    phone: yup
      .string()
      .matches(/^[0-9()-.\s]+$/, "Please enter a valid phone number")
      .required("Phone number is required"),
    serviceType: yup.string().required("Please select a service"),
    message: yup.string().required("Please enter your message"),
    preferredContact: yup.string().required("Please select preferred contact method"),
    propertyType: yup.string().required("Please select property type"),
    address: yup.string().required("Address is required"),
    serviceNeeded: yup.string().required("Please select service needed"),
    isHomeowner: yup.string().required("Please specify if you are the homeowner"),
    hasRoofDamage: yup.string().required("Please specify if you have roof leaks or damage"),
  })
  .required()

type FormData = yup.InferType<typeof schema>

const serviceTypes = [
  "Residential Roofing",
  "Commercial Roofing",
  "Slate Roofing",
  "Cedar Shake Roofing",
  "Tile Roofing",
  "Metal Shingles",
  "Synthetic Roofing",
  "Roof Inspection",
  "Insurance Claim",
  "Other",
]

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)
  const [submitError, setSubmitError] = useState("")

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  })

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true)
    setSubmitError("")

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })

      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.message || "Failed to submit form")
      }

      setSubmitSuccess(true)
      reset()
    } catch (error) {
      setSubmitError("There was an error submitting your request. Please try again.")
      console.error("Form submission error:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
      {/* Contact Form */}
      <div className="bg-gray-900 p-6 rounded-lg shadow-lg border border-orange-500">
        <h2 className="text-2xl font-bold text-orange-500 mb-6">Get in Touch</h2>

        {submitSuccess && (
          <div className="mb-6 p-4 bg-green-900 text-green-100 rounded-md border border-green-500">
            Thank you for contacting us! We'll be in touch shortly.
          </div>
        )}

        {submitError && (
          <div className="mb-6 p-4 bg-red-900 text-red-100 rounded-md border border-red-500">{submitError}</div>
        )}

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Name Fields */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-orange-500 mb-1">First Name*</label>
              <input
                type="text"
                {...register("firstName")}
                className="w-full px-4 py-2 bg-gray-800 border border-orange-500/50 rounded-md focus:ring-orange-500 focus:border-orange-500 text-white"
              />
              {errors.firstName && <p className="mt-1 text-sm text-red-400">{errors.firstName.message}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium text-orange-500 mb-1">Last Name*</label>
              <input
                type="text"
                {...register("lastName")}
                className="w-full px-4 py-2 bg-gray-800 border border-orange-500/50 rounded-md focus:ring-orange-500 focus:border-orange-500 text-white"
              />
              {errors.lastName && <p className="mt-1 text-sm text-red-400">{errors.lastName.message}</p>}
            </div>
          </div>

          {/* Contact Fields */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-orange-500 mb-1">Email*</label>
              <input
                type="email"
                {...register("email")}
                className="w-full px-4 py-2 bg-gray-800 border border-orange-500/50 rounded-md focus:ring-orange-500 focus:border-orange-500 text-white"
              />
              {errors.email && <p className="mt-1 text-sm text-red-400">{errors.email.message}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium text-orange-500 mb-1">Phone*</label>
              <input
                type="tel"
                {...register("phone")}
                className="w-full px-4 py-2 bg-gray-800 border border-orange-500/50 rounded-md focus:ring-orange-500 focus:border-orange-500 text-white"
              />
              {errors.phone && <p className="mt-1 text-sm text-red-400">{errors.phone.message}</p>}
            </div>
          </div>

          {/* Service & Property Type */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-orange-500 mb-1">Service Type*</label>
              <select
                {...register("serviceType")}
                className="w-full px-4 py-2 bg-gray-800 border border-orange-500/50 rounded-md focus:ring-orange-500 focus:border-orange-500 text-white"
              >
                <option value="">Select a service</option>
                {serviceTypes.map((service) => (
                  <option key={service} value={service}>
                    {service}
                  </option>
                ))}
              </select>
              {errors.serviceType && <p className="mt-1 text-sm text-red-400">{errors.serviceType.message}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium text-orange-500 mb-1">Property Type*</label>
              <select
                {...register("propertyType")}
                className="w-full px-4 py-2 bg-gray-800 border border-orange-500/50 rounded-md focus:ring-orange-500 focus:border-orange-500 text-white"
              >
                <option value="">Select property type</option>
                <option value="residential">Residential</option>
                <option value="commercial">Commercial</option>
                <option value="industrial">Industrial</option>
              </select>
              {errors.propertyType && <p className="mt-1 text-sm text-red-400">{errors.propertyType.message}</p>}
            </div>
          </div>

          {/* Address */}
          <div>
            <label className="block text-sm font-medium text-orange-500 mb-1">Address*</label>
            <input
              type="text"
              {...register("address")}
              className="w-full px-4 py-2 bg-gray-800 border border-orange-500/50 rounded-md focus:ring-orange-500 focus:border-orange-500 text-white"
            />
            {errors.address && <p className="mt-1 text-sm text-red-400">{errors.address.message}</p>}
          </div>

          {/* Service Needed */}
          <div>
            <label className="block text-sm font-medium text-orange-500 mb-1">Service Needed*</label>
            <select
              {...register("serviceNeeded")}
              className="w-full px-4 py-2 bg-gray-800 border border-orange-500/50 rounded-md focus:ring-orange-500 focus:border-orange-500 text-white"
            >
              <option value="">Select service needed</option>
              <option value="replacement">Replacement</option>
              <option value="repair">Repair</option>
            </select>
            {errors.serviceNeeded && <p className="mt-1 text-sm text-red-400">{errors.serviceNeeded.message}</p>}
          </div>

          {/* Homeowner Status */}
          <div>
            <label className="block text-sm font-medium text-orange-500 mb-1">Are you the homeowner?*</label>
            <select
              {...register("isHomeowner")}
              className="w-full px-4 py-2 bg-gray-800 border border-orange-500/50 rounded-md focus:ring-orange-500 focus:border-orange-500 text-white"
            >
              <option value="">Select option</option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
            {errors.isHomeowner && <p className="mt-1 text-sm text-red-400">{errors.isHomeowner.message}</p>}
          </div>

          {/* Roof Damage */}
          <div>
            <label className="block text-sm font-medium text-orange-500 mb-1">Do you have roof leaks or damage?*</label>
            <select
              {...register("hasRoofDamage")}
              className="w-full px-4 py-2 bg-gray-800 border border-orange-500/50 rounded-md focus:ring-orange-500 focus:border-orange-500 text-white"
            >
              <option value="">Select option</option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
            {errors.hasRoofDamage && <p className="mt-1 text-sm text-red-400">{errors.hasRoofDamage.message}</p>}
          </div>

          {/* Preferred Contact Method */}
          <div>
            <label className="block text-sm font-medium text-orange-500 mb-1">Preferred Contact Method*</label>
            <select
              {...register("preferredContact")}
              className="w-full px-4 py-2 bg-gray-800 border border-orange-500/50 rounded-md focus:ring-orange-500 focus:border-orange-500 text-white"
            >
              <option value="">Select contact method</option>
              <option value="phone">Phone</option>
              <option value="email">Email</option>
              <option value="text">Text Message</option>
            </select>
            {errors.preferredContact && <p className="mt-1 text-sm text-red-400">{errors.preferredContact.message}</p>}
          </div>

          {/* Message */}
          <div>
            <label className="block text-sm font-medium text-orange-500 mb-1">Message*</label>
            <textarea
              {...register("message")}
              rows={4}
              className="w-full px-4 py-2 bg-gray-800 border border-orange-500/50 rounded-md focus:ring-orange-500 focus:border-orange-500 text-white"
            />
            {errors.message && <p className="mt-1 text-sm text-red-400">{errors.message.message}</p>}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 px-6 rounded-md transition-colors duration-200 disabled:opacity-50 font-bold"
          >
            {isSubmitting ? "Submitting..." : "Send Message"}
          </button>
        </form>
      </div>

      {/* Contact Information */}
      <div className="bg-gray-900 text-white p-6 rounded-lg border border-orange-500">
        <h2 className="text-2xl font-bold text-orange-500 mb-6">Contact Information</h2>

        <div className="space-y-6">
          <div className="flex items-start space-x-4">
            <Phone className="w-6 h-6 mt-1 flex-shrink-0 text-orange-500" />
            <div>
              <h3 className="font-semibold mb-1 text-orange-500">Phone</h3>
              <p className="text-white">1-800-SUMMIT-1</p>
              <p className="text-sm text-gray-300">Available 24/7 for emergencies</p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <Mail className="w-6 h-6 mt-1 flex-shrink-0 text-orange-500" />
            <div>
              <h3 className="font-semibold mb-1 text-orange-500">Email</h3>
              <p className="text-white">info@summitroofing.com</p>
              <p className="text-sm text-gray-300">We'll respond within 24 hours</p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <MapPin className="w-6 h-6 mt-1 flex-shrink-0 text-orange-500" />
            <div>
              <h3 className="font-semibold mb-1 text-orange-500">Office Location</h3>
              <p className="text-white">123 Summit Drive</p>
              <p className="text-white">Birmingham, AL 35242</p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <Clock className="w-6 h-6 mt-1 flex-shrink-0 text-orange-500" />
            <div>
              <h3 className="font-semibold mb-1 text-orange-500">Business Hours</h3>
              <p className="text-white">Monday - Friday: 8:00 AM - 5:00 PM</p>
              <p className="text-white">Saturday: 9:00 AM - 2:00 PM</p>
              <p className="text-white">Sunday: Closed</p>
              <p className="text-sm text-gray-300 mt-1">24/7 Emergency Service Available</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

