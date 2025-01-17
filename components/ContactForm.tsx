'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const schema = yup.object({
  firstName: yup.string().required('First name is required'),
  lastName: yup.string().required('Last name is required'),
  email: yup.string().email('Please enter a valid email').required('Email is required'),
  phone: yup.string()
    .matches(/^[0-9()-.\s]+$/, 'Please enter a valid phone number')
    .required('Phone number is required'),
  serviceType: yup.string().required('Please select a service'),
  message: yup.string().required('Please enter your message'),
  preferredContact: yup.string().required('Please select preferred contact method'),
  propertyType: yup.string().required('Please select property type')
}).required();

type FormData = yup.InferType<typeof schema>;

const serviceTypes = [
  'Residential Roofing',
  'Commercial Roofing',
  'Slate Roofing',
  'Cedar Shake Roofing',
  'Tile Roofing',
  'Metal Shingles',
  'Synthetic Roofing',
  'Roof Inspection',
  'Insurance Claim',
  'Other'
];

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<FormData>({
    resolver: yupResolver(schema)
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    setSubmitError('');
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) throw new Error('Failed to submit form');

      setSubmitSuccess(true);
      reset();
    } catch (err) {
      setSubmitError('There was an error submitting your request. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
      {/* Contact Form */}
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-secondary mb-6">
          Get in Touch
        </h2>

        {submitSuccess && (
          <div className="mb-6 p-4 bg-green-50 text-green-700 rounded-md">
            Thank you for contacting us! We&apos;ll be in touch shortly.
          </div>
        )}

        {submitError && (
          <div className="mb-6 p-4 bg-red-50 text-red-700 rounded-md">
            {submitError}
          </div>
        )}

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Name Fields */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-secondary mb-1">
                First Name*
              </label>
              <input
                type="text"
                {...register('firstName')}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
              />
              {errors.firstName && (
                <p className="mt-1 text-sm text-red-600">
                  {errors.firstName.message}
                </p>
              )}
            </div>
            
            <div>
              <label className="block text-sm font-medium text-secondary mb-1">
                Last Name*
              </label>
              <input
                type="text"
                {...register('lastName')}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
              />
              {errors.lastName && (
                <p className="mt-1 text-sm text-red-600">
                  {errors.lastName.message}
                </p>
              )}
            </div>
          </div>

          {/* Contact Fields */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-secondary mb-1">
                Email*
              </label>
              <input
                type="email"
                {...register('email')}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-600">
                  {errors.email.message}
                </p>
              )}
            </div>
            
            <div>
              <label className="block text-sm font-medium text-secondary mb-1">
                Phone*
              </label>
              <input
                type="tel"
                {...register('phone')}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
              />
              {errors.phone && (
                <p className="mt-1 text-sm text-red-600">
                  {errors.phone.message}
                </p>
              )}
            </div>
          </div>

          {/* Service & Property Type */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-secondary mb-1">
                Service Type*
              </label>
              <select
                {...register('serviceType')}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
              >
                <option value="">Select a service</option>
                {serviceTypes.map((service) => (
                  <option key={service} value={service}>
                    {service}
                  </option>
                ))}
              </select>
              {errors.serviceType && (
                <p className="mt-1 text-sm text-red-600">
                  {errors.serviceType.message}
                </p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-secondary mb-1">
                Property Type*
              </label>
              <select
                {...register('propertyType')}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
              >
                <option value="">Select property type</option>
                <option value="residential">Residential</option>
                <option value="commercial">Commercial</option>
                <option value="industrial">Industrial</option>
              </select>
              {errors.propertyType && (
                <p className="mt-1 text-sm text-red-600">
                  {errors.propertyType.message}
                </p>
              )}
            </div>
          </div>

          {/* Preferred Contact Method */}
          <div>
            <label className="block text-sm font-medium text-secondary mb-1">
              Preferred Contact Method*
            </label>
            <select
              {...register('preferredContact')}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
            >
              <option value="">Select contact method</option>
              <option value="phone">Phone</option>
              <option value="email">Email</option>
              <option value="text">Text Message</option>
            </select>
            {errors.preferredContact && (
              <p className="mt-1 text-sm text-red-600">
                {errors.preferredContact.message}
              </p>
            )}
          </div>

          {/* Message */}
          <div>
            <label className="block text-sm font-medium text-secondary mb-1">
              Message*
            </label>
            <textarea
              {...register('message')}
              rows={4}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
            />
            {errors.message && (
              <p className="mt-1 text-sm text-red-600">
                {errors.message.message}
              </p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-primary hover:bg-primary-dark text-white py-3 px-6 rounded-md transition-colors duration-200 disabled:opacity-50"
          >
            {isSubmitting ? 'Submitting...' : 'Send Message'}
          </button>
        </form>
      </div>

      {/* Contact Information */}
      <div className="bg-secondary text-white p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-6">
          Contact Information
        </h2>

        <div className="space-y-6">
          <div className="flex items-start space-x-4">
            <Phone className="w-6 h-6 mt-1 flex-shrink-0" />
            <div>
              <h3 className="font-semibold mb-1">Phone</h3>
              <p>1-800-SUMMIT-1</p>
              <p className="text-sm text-gray-300">
                Available 24/7 for emergencies
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <Mail className="w-6 h-6 mt-1 flex-shrink-0" />
            <div>
              <h3 className="font-semibold mb-1">Email</h3>
              <p>info@summitroofing.com</p>
              <p className="text-sm text-gray-300">
                We&apos;ll respond within 24 hours
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <MapPin className="w-6 h-6 mt-1 flex-shrink-0" />
            <div>
              <h3 className="font-semibold mb-1">Office Location</h3>
              <p>123 Summit Drive</p>
              <p>Birmingham, AL 35242</p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <Clock className="w-6 h-6 mt-1 flex-shrink-0" />
            <div>
              <h3 className="font-semibold mb-1">Business Hours</h3>
              <p>Monday - Friday: 8:00 AM - 5:00 PM</p>
              <p>Saturday: 9:00 AM - 2:00 PM</p>
              <p>Sunday: Closed</p>
              <p className="text-sm text-gray-300 mt-1">
                24/7 Emergency Service Available
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}