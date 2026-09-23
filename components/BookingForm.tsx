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

  const fieldClass = (name: keyof BookingFormData) =>
    errors[name] ? 'field has-error' : 'field';

  const fieldError = (name: keyof BookingFormData) =>
    errors[name] ? <p className="field-error">{errors[name]}</p> : null;

  if (submitStatus === 'success') {
    return (
      <div className="form-ok show" role="status">
        <div className="eyebrow">Request received</div>
        <h3 className="h3" style={{ marginTop: 16 }}>
          Thank you. <i>We will be in touch within 24 hours.</i>
        </h3>
        <p className="lede" style={{ marginTop: 14 }}>
          In the meantime, take a look at our packages to see which growth system
          might be the right fit.
        </p>
        <div className="cta-row" style={{ marginTop: 28 }}>
          <a className="btn btn-ink" href="/packages">
            See services and pricing
          </a>
          <button type="button" className="btn btn-ghost" onClick={() => setSubmitStatus('idle')}>
            Submit another request
          </button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="form" noValidate>
      <h4>About you</h4>

      <div className="two">
        <div className={fieldClass('name')}>
          <label htmlFor="bf-name">Your name *</label>
          <input
            id="bf-name"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Jane Smith"
            autoComplete="name"
          />
          {fieldError('name')}
        </div>
        <div className={fieldClass('businessName')}>
          <label htmlFor="bf-business">Business name *</label>
          <input
            id="bf-business"
            type="text"
            name="businessName"
            value={formData.businessName}
            onChange={handleChange}
            placeholder="Seeds Academy"
            autoComplete="organization"
          />
          {fieldError('businessName')}
        </div>
      </div>

      <div className={fieldClass('businessType')}>
        <label htmlFor="bf-type">Business type *</label>
        <select id="bf-type" name="businessType" value={formData.businessType} onChange={handleChange}>
          <option value="school-daycare">School / Daycare / Childcare Center</option>
          <option value="local-service">Local Service Business</option>
          <option value="health-wellness">Health and Wellness</option>
          <option value="other">Other Small Business</option>
        </select>
        {fieldError('businessType')}
      </div>

      <div className="two">
        <div className={fieldClass('city')}>
          <label htmlFor="bf-city">City *</label>
          <input
            id="bf-city"
            type="text"
            name="city"
            value={formData.city}
            onChange={handleChange}
            placeholder="Ashburn"
            autoComplete="address-level2"
          />
          {fieldError('city')}
        </div>
        <div className={fieldClass('state')}>
          <label htmlFor="bf-state">State *</label>
          <input
            id="bf-state"
            type="text"
            name="state"
            value={formData.state}
            onChange={handleChange}
            placeholder="VA"
            autoComplete="address-level1"
          />
          {fieldError('state')}
        </div>
      </div>

      <div className="two">
        <div className={fieldClass('email')}>
          <label htmlFor="bf-email">Email *</label>
          <input
            id="bf-email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="jane@yourbusiness.com"
            autoComplete="email"
          />
          {fieldError('email')}
        </div>
        <div className={fieldClass('phone')}>
          <label htmlFor="bf-phone">Phone *</label>
          <input
            id="bf-phone"
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="(555) 123-4567"
            autoComplete="tel"
          />
          {fieldError('phone')}
        </div>
      </div>

      <div className={fieldClass('preferredContact')}>
        <label htmlFor="bf-contact">Preferred contact *</label>
        <select
          id="bf-contact"
          name="preferredContact"
          value={formData.preferredContact}
          onChange={handleChange}
        >
          <option value="email">Email</option>
          <option value="phone">Phone</option>
          <option value="either">Either</option>
        </select>
        {fieldError('preferredContact')}
      </div>

      <h4>Your lead process</h4>

      <div className={fieldClass('leadVolume')}>
        <label htmlFor="bf-volume">Current lead volume *</label>
        <select id="bf-volume" name="leadVolume" value={formData.leadVolume} onChange={handleChange}>
          <option value="getting-started">Just getting started (0–10 leads/month)</option>
          <option value="growing">Growing (10–50 leads/month)</option>
          <option value="established">Established (50+ leads/month)</option>
        </select>
        {fieldError('leadVolume')}
      </div>

      <fieldset className={fieldClass('challenges')}>
        <legend>Biggest challenge right now * · select all that apply</legend>
        <div className="choices">
          {challengeOptions.map((challenge) => (
            <label key={challenge}>
              <input
                type="checkbox"
                checked={formData.challenges.includes(challenge)}
                onChange={() => handleCheckboxChange(challenge)}
              />
              {challenge}
            </label>
          ))}
        </div>
        {fieldError('challenges')}
      </fieldset>

      <div className="field">
        <label htmlFor="bf-tools">Current tools</label>
        <input
          id="bf-tools"
          type="text"
          name="currentTools"
          value={formData.currentTools}
          onChange={handleChange}
          placeholder="e.g. Google Sheets, HubSpot, Mailchimp, nothing yet"
        />
        <p className="field-hint">
          What tools are you currently using to track or follow up with leads?
        </p>
      </div>

      <div className={fieldClass('currentWebsite')}>
        <label htmlFor="bf-website">Current website</label>
        <input
          id="bf-website"
          type="url"
          name="currentWebsite"
          value={formData.currentWebsite}
          onChange={handleChange}
          placeholder="https://yourwebsite.com"
          autoComplete="url"
        />
        {fieldError('currentWebsite')}
      </div>

      <div className="two">
        <div className={fieldClass('timeline')}>
          <label htmlFor="bf-timeline">Timeline *</label>
          <select id="bf-timeline" name="timeline" value={formData.timeline} onChange={handleChange}>
            <option value="asap">As soon as possible</option>
            <option value="1-3months">Within 1–3 months</option>
            <option value="3-6months">Within 3–6 months</option>
            <option value="exploring">Just exploring options</option>
          </select>
          {fieldError('timeline')}
        </div>
        <div className="field">
          <label htmlFor="bf-heard">How did you hear about us?</label>
          <select id="bf-heard" name="howHeard" value={formData.howHeard} onChange={handleChange}>
            <option value="">Select an option</option>
            <option value="google">Google Search</option>
            <option value="social-media">Social Media</option>
            <option value="referral">Referral</option>
            <option value="linkedin">LinkedIn</option>
            <option value="other">Other</option>
          </select>
        </div>
      </div>

      <div className={fieldClass('message')}>
        <label htmlFor="bf-message">Anything else we should know?</label>
        <textarea
          id="bf-message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={4}
          placeholder="Tell us about your current lead process, what's working, what's not, or any specific goals you have in mind."
        />
        {fieldError('message')}
      </div>

      <div>
        <button type="submit" disabled={isSubmitting} className="btn btn-ink">
          {isSubmitting ? 'Submitting…' : 'Book a growth automation audit'}
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M7 17L17 7M8 7h9v9" />
          </svg>
        </button>
        <p className="note" style={{ marginTop: 14 }}>
          We reply within 24 hours. No long-term contracts.
        </p>
      </div>

      {submitStatus === 'error' && (
        <p className="field-error" role="alert">
          Something went wrong. Please try again or email us at team@digilift.ai
        </p>
      )}
    </form>
  );
}
