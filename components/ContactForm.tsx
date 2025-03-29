"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { Phone, Mail, MapPin, Clock } from "lucide-react"

const schema = yup
  .object({
    name: yup.string().required("Name is required"),
    phone: yup
      .string()
      .matches(/^[0-9()-.\s]+$/, "Please enter a valid phone number")
      .required("Phone number is required"),
    address: yup.string().required("Address is required"),
  })
  .required()

type FormData = yup.InferType<typeof schema>

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
            Thank you for contacting us! We&apos;ll be in touch shortly.
          </div>
        )}

        {submitError && (
          <div className="mb-6 p-4 bg-red-900 text-red-100 rounded-md border border-red-500">{submitError}</div>
        )}

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-orange-500 mb-1">Name*</label>
            <input
              type="text"
              {...register("name")}
              className="w-full px-4 py-2 bg-gray-800 border border-orange-500/50 rounded-md focus:ring-orange-500 focus:border-orange-500 text-white"
            />
            {errors.name && <p className="mt-1 text-sm text-red-400">{errors.name.message}</p>}
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

          <div>
            <label className="block text-sm font-medium text-orange-500 mb-1">Address*</label>
            <input
              type="text"
              {...register("address")}
              className="w-full px-4 py-2 bg-gray-800 border border-orange-500/50 rounded-md focus:ring-orange-500 focus:border-orange-500 text-white"
            />
            {errors.address && <p className="mt-1 text-sm text-red-400">{errors.address.message}</p>}
          </div>

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
              <p className="text-white">704-578-4756</p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <Mail className="w-6 h-6 mt-1 flex-shrink-0 text-orange-500" />
            <div>
              <h3 className="font-semibold mb-1 text-orange-500">Email</h3>
              <p className="text-white break-all">davis@summitroofingprofessionals.com</p>
              <p className="text-sm text-gray-300">We&apos;ll respond within 24 hours</p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <MapPin className="w-6 h-6 mt-1 flex-shrink-0 text-orange-500" />
            <div>
              <h3 className="font-semibold mb-1 text-orange-500">Office Location</h3>
              <p className="text-white">Columbus Office</p>
              <p className="text-white">Columbus, GA 31909</p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <Clock className="w-6 h-6 mt-1 flex-shrink-0 text-orange-500" />
            <div>
              <h3 className="font-semibold mb-1 text-orange-500">Business Hours</h3>
              <p className="text-white">Monday - Friday: 6:00 AM - 6:00 PM</p>
              <p className="text-white">Saturday: 6:00 AM - 6:00 PM</p>
              <p className="text-white">Sunday: 6:00 AM - 6:00 PM</p>
              <p className="text-sm text-gray-300 mt-1">Rapid Emergency Service Available</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}




