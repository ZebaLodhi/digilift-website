'use client';

import { useState } from 'react';
import { bookingFormSchema, type BookingFormData } from '@/lib/validators';

type FormErrors = Partial<Record<keyof BookingFormData, string>>;

export default function BookingForm() {
  const [formData, setFormData] = useState<BookingFormData>({
    name: '',
    daycareName: '',
    city: '',
    state: '',
    email: '',
    phone: '',
    preferredContact: 'email',
    servicesInterested: [],
    currentWebsite: '',
    currentGBP: '',
    timeline: 'asap',
    message: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const serviceOptions = [
    'Google Business Profile Optimization',
    'Website Design/Redesign',
    'Brand Refresh',
    'Online Booking System',
    'Review Generation',
    'Social Media Setup',
    'Photography',
    'SEO & Analytics',
  ];

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (errors[name as keyof BookingFormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleCheckboxChange = (service: string) => {
    setFormData((prev) => ({
      ...prev,
      servicesInterested: prev.servicesInterested.includes(service)
        ? prev.servicesInterested.filter((s) => s !== service)
        : [...prev.servicesInterested, service],
    }));

    if (errors.servicesInterested) {
      setErrors((prev) => ({ ...prev, servicesInterested: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const validatedData = bookingFormSchema.parse(formData);

      const response = await fetch('/api/send-booking', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(validatedData),
      });

      if (!response.ok) {
        throw new Error('Failed to submit booking request');
      }

      setSubmitStatus('success');

      setFormData({
        name: '',
        daycareName: '',
        city: '',
        state: '',
        email: '',
        phone: '',
        preferredContact: 'email',
        servicesInterested: [],
        currentWebsite: '',
        currentGBP: '',
        timeline: 'asap',
        message: '',
      });

    } catch (error: any) {
      if (error.errors) {
        const fieldErrors: FormErrors = {};
        error.errors.forEach((err: any) => {
          const field = err.path[0] as keyof BookingFormData;
          fieldErrors[field] = err.message;
        });
        setErrors(fieldErrors);
      } else {
        setSubmitStatus('error');
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      {submitStatus === 'success' ? (
        <div className="card text-center">
          <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-10 h-10 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h3 className="text-3xl mb-4">Thank You!</h3>
          <p className="text-xl text-dark/70 mb-6">
            We've received your booking request and will be in touch within 24 hours.
          </p>
          <button
            onClick={() => setSubmitStatus('idle')}
            className="btn-primary"
          >
            Submit Another Request
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="card space-y-6">
          {/* Name + Daycare */}
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="label">Your Name *</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={`input-field ${errors.name ? 'input-error' : ''}`}
              />
              {errors.name && <p className="error-message">{errors.name}</p>}
            </div>

            <div>
              <label className="label">Daycare Name *</label>
              <input
                type="text"
                name="daycareName"
                value={formData.daycareName}
                onChange={handleChange}
                className={`input-field ${errors.daycareName ? 'input-error' : ''}`}
              />
              {errors.daycareName && <p className="error-message">{errors.daycareName}</p>}
            </div>
          </div>

          {/* City & State */}
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="label">City *</label>
              <input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleChange}
                className={`input-field ${errors.city ? 'input-error' : ''}`}
              />
              {errors.city && <p className="error-message">{errors.city}</p>}
            </div>

            <div>
              <label className="label">State *</label>
              <input
                type="text"
                name="state"
                value={formData.state}
                onChange={handleChange}
                className={`input-field ${errors.state ? 'input-error' : ''}`}
              />
              {errors.state && <p className="error-message">{errors.state}</p>}
            </div>
          </div>

          {/* Email & Phone */}
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="label">Email *</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`input-field ${errors.email ? 'input-error' : ''}`}
              />
              {errors.email && <p className="error-message">{errors.email}</p>}
            </div>

            <div>
              <label className="label">Phone *</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className={`input-field ${errors.phone ? 'input-error' : ''}`}
              />
              {errors.phone && <p className="error-message">{errors.phone}</p>}
            </div>
          </div>

          {/* Preferred Contact */}
          <div>
            <label className="label">Preferred Contact *</label>
            <select
              name="preferredContact"
              value={formData.preferredContact}
              onChange={handleChange}
              className={`input-field ${errors.preferredContact ? 'input-error' : ''}`}
            >
              <option value="email">Email</option>
              <option value="phone">Phone</option>
              <option value="either">Either</option>
            </select>
            {errors.preferredContact && <p className="error-message">{errors.preferredContact}</p>}
          </div>

          {/* Services */}
          <div>
            <label className="label">Services Interested *</label>
            <div className="grid md:grid-cols-2 gap-3">
              {serviceOptions.map((service) => (
                <label key={service} className="flex gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={formData.servicesInterested.includes(service)}
                    onChange={() => handleCheckboxChange(service)}
                    className="mt-1 w-5 h-5"
                  />
                  <span>{service}</span>
                </label>
              ))}
            </div>
            {errors.servicesInterested && (
              <p className="error-message">{errors.servicesInterested}</p>
            )}
          </div>

          {/* Website & GBP */}
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="label">Website</label>
              <input
                type="url"
                name="currentWebsite"
                value={formData.currentWebsite}
                onChange={handleChange}
                className="input-field"
              />
            </div>

            <div>
              <label className="label">Google Business URL</label>
              <input
                type="url"
                name="currentGBP"
                value={formData.currentGBP}
                onChange={handleChange}
                className="input-field"
              />
            </div>
          </div>

          {/* Timeline */}
          <div>
            <label className="label">Timeline *</label>
            <select
              name="timeline"
              value={formData.timeline}
              onChange={handleChange}
              className={`input-field ${errors.timeline ? 'input-error' : ''}`}
            >
              <option value="asap">As soon as possible</option>
              <option value="1-3months">Within 1–3 months</option>
              <option value="3-6months">Within 3–6 months</option>
              <option value="exploring">Just exploring options</option>
            </select>
          </div>

          {/* Message */}
          <div>
            <label className="label">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={5}
              className="input-field"
            ></textarea>
          </div>

          {/* Submit */}
          <button
            disabled={isSubmitting}
            className="btn-primary w-full text-lg"
          >
            {isSubmitting ? 'Submitting...' : 'Book Your Free Consultation'}
          </button>

          {submitStatus === 'error' && (
            <p className="text-red-500 text-center mt-3">
              Something went wrong. Please try again.
            </p>
          )}
        </form>
      )}
    </div>
  );
}
