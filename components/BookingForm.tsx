'use client';

import { useState } from 'react';
import { bookingFormSchema, type BookingFormData } from '@/lib/validators';

type FormErrors = Partial<Record<keyof BookingFormData, string>>;

export default function BookingForm() {
  const [formData, setFormData] = useState<BookingFormData>({
    name: '',
    businessName: '',
    businessType: 'school-daycare',
    city: '',
    state: '',
    email: '',
    phone: '',
    preferredContact: 'email',
    leadVolume: 'getting-started',
    challenges: [],
    currentTools: '',
    currentWebsite: '',
    timeline: 'asap',
    howHeard: '',
    message: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const challengeOptions = [
    'Not enough leads coming in',
    'Leads go cold before we follow up',
    'No system to track or qualify leads',
    'Unclear which campaigns are working',
    'Too much manual work in the process',
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

  const handleCheckboxChange = (challenge: string) => {
    setFormData((prev) => ({
      ...prev,
      challenges: prev.challenges.includes(challenge)
        ? prev.challenges.filter((c) => c !== challenge)
        : [...prev.challenges, challenge],
    }));
    if (errors.challenges) {
      setErrors((prev) => ({ ...prev, challenges: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const validatedData = bookingFormSchema.parse(formData);

      const response = await fetch('/api/book', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(validatedData),
      });

      if (!response.ok) throw new Error('Failed to submit');

      setSubmitStatus('success');
      setFormData({
        name: '',
        businessName: '',
        businessType: 'school-daycare',
        city: '',
        state: '',
        email: '',
        phone: '',
        preferredContact: 'email',
        leadVolume: 'getting-started',
        challenges: [],
        currentTools: '',
        currentWebsite: '',
        timeline: 'asap',
        howHeard: '',
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

  if (submitStatus === 'success') {
    return (
      <div className="card text-center">
        <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg className="w-10 h-10 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-3xl mb-4">Request Received</h3>
        <p className="text-xl text-dark/70 mb-2">
          We will be in touch within 24 hours.
        </p>
        <p className="text-dark/50 text-sm mb-8">
          In the meantime, take a look at our packages to see which growth system
          might be the right fit.
        </p>
        <button onClick={() => setSubmitStatus('idle')} className="btn-primary">
          Submit Another Request
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="card space-y-6">

      {/* Name + Business Name */}
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label className="label">Your Name *</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Jane Smith"
            className={`input-field ${errors.name ? 'input-error' : ''}`}
          />
          {errors.name && <p className="error-message">{errors.name}</p>}
        </div>
        <div>
          <label className="label">Business Name *</label>
          <input
            type="text"
            name="businessName"
            value={formData.businessName}
            onChange={handleChange}
            placeholder="Seeds Academy"
            className={`input-field ${errors.businessName ? 'input-error' : ''}`}
          />
          {errors.businessName && <p className="error-message">{errors.businessName}</p>}
        </div>
      </div>

      {/* Business Type */}
      <div>
        <label className="label">Business Type *</label>
        <select
          name="businessType"
          value={formData.businessType}
          onChange={handleChange}
          className={`input-field ${errors.businessType ? 'input-error' : ''}`}
        >
          <option value="school-daycare">School / Daycare / Childcare Center</option>
          <option value="local-service">Local Service Business</option>
          <option value="health-wellness">Health and Wellness</option>
          <option value="other">Other Small Business</option>
        </select>
        {errors.businessType && <p className="error-message">{errors.businessType}</p>}
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
            placeholder="Ashburn"
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
            placeholder="VA"
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
            placeholder="jane@yourbusiness.com"
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
            placeholder="(555) 123-4567"
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
          className="input-field"
        >
          <option value="email">Email</option>
          <option value="phone">Phone</option>
          <option value="either">Either</option>
        </select>
      </div>

      {/* Lead Volume */}
      <div>
        <label className="label">Current Lead Volume *</label>
        <select
          name="leadVolume"
          value={formData.leadVolume}
          onChange={handleChange}
          className={`input-field ${errors.leadVolume ? 'input-error' : ''}`}
        >
          <option value="getting-started">Just getting started (0–10 leads/month)</option>
          <option value="growing">Growing (10–50 leads/month)</option>
          <option value="established">Established (50+ leads/month)</option>
        </select>
        {errors.leadVolume && <p className="error-message">{errors.leadVolume}</p>}
      </div>

      {/* Biggest Challenges */}
      <div>
        <label className="label">Biggest Challenge Right Now *</label>
        <p className="text-xs text-dark/50 mb-3">Select all that apply</p>
        <div className="space-y-3">
          {challengeOptions.map((challenge) => (
            <label key={challenge} className="flex items-start gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={formData.challenges.includes(challenge)}
                onChange={() => handleCheckboxChange(challenge)}
                className="mt-0.5 w-4 h-4 accent-[#00C2A8]"
              />
              <span className="text-sm text-dark/80">{challenge}</span>
            </label>
          ))}
        </div>
        {errors.challenges && <p className="error-message mt-2">{errors.challenges}</p>}
      </div>

      {/* Current Tools */}
      <div>
        <label className="label">Current Tools</label>
        <input
          type="text"
          name="currentTools"
          value={formData.currentTools}
          onChange={handleChange}
          placeholder="e.g. Google Sheets, HubSpot, Mailchimp, nothing yet"
          className="input-field"
        />
        <p className="text-xs text-dark/40 mt-1">
          What tools are you currently using to track or follow up with leads?
        </p>
      </div>

      {/* Current Website */}
      <div>
        <label className="label">Current Website</label>
        <input
          type="url"
          name="currentWebsite"
          value={formData.currentWebsite}
          onChange={handleChange}
          placeholder="https://yourwebsite.com"
          className="input-field"
        />
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
        {errors.timeline && <p className="error-message">{errors.timeline}</p>}
      </div>

      {/* How Did You Hear */}
      <div>
        <label className="label">How Did You Hear About Us?</label>
        <select
          name="howHeard"
          value={formData.howHeard}
          onChange={handleChange}
          className="input-field"
        >
          <option value="">Select an option</option>
          <option value="google">Google Search</option>
          <option value="social-media">Social Media</option>
          <option value="referral">Referral</option>
          <option value="linkedin">LinkedIn</option>
          <option value="other">Other</option>
        </select>
      </div>

      {/* Message */}
      <div>
        <label className="label">Anything Else We Should Know?</label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={4}
          placeholder="Tell us about your current lead process, what's working, what's not, or any specific goals you have in mind."
          className="input-field"
        />
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="btn-primary w-full text-lg py-4"
      >
        {isSubmitting ? 'Submitting...' : 'Book a Growth Automation Audit'}
      </button>

      {submitStatus === 'error' && (
        <p className="text-red-500 text-center text-sm mt-2">
          Something went wrong. Please try again or email us at team@digilift.ai
        </p>
      )}

    </form>
  );
}