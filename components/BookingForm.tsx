'use client';

import { useState } from 'react';
import {
  bookingFormSchema,
  priorityOptions,
  type BookingFormData,
} from '@/lib/validators';

type FormErrors = Partial<Record<keyof BookingFormData, string>>;

export default function BookingForm() {
  const [formData, setFormData] = useState<BookingFormData>({
    name: '',
    businessName: '',
    businessType: 'professional-services',
    city: '',
    state: '',
    email: '',
    phone: '',
    preferredContact: 'email',
    teamSize: '1-5',
    auditFocus: 'everything',
    priorities: [],
    currentTools: '',
    currentWebsite: '',
    timeline: 'asap',
    howHeard: '',
    message: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof BookingFormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleCheckboxChange = (priority: string) => {
    setFormData((prev) => ({
      ...prev,
      priorities: prev.priorities.includes(priority)
        ? prev.priorities.filter((p) => p !== priority)
        : [...prev.priorities, priority],
    }));
    if (errors.priorities) {
      setErrors((prev) => ({ ...prev, priorities: undefined }));
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
        businessType: 'professional-services',
        city: '',
        state: '',
        email: '',
        phone: '',
        preferredContact: 'email',
        teamSize: '1-5',
        auditFocus: 'everything',
        priorities: [],
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
            placeholder="Your organisation"
            autoComplete="organization"
          />
          {fieldError('businessName')}
        </div>
      </div>

      <div className={fieldClass('businessType')}>
        <label htmlFor="bf-type">Industry *</label>
        <select id="bf-type" name="businessType" value={formData.businessType} onChange={handleChange}>
          <option value="professional-services">Professional services</option>
          <option value="local-service">Local service business</option>
          <option value="health-wellness">Health and wellness</option>
          <option value="education">Education and childcare</option>
          <option value="membership-nonprofit">Membership body or nonprofit</option>
          <option value="ecommerce-retail">E-commerce or retail</option>
          <option value="other">Something else</option>
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

      <h4>What the audit would cover</h4>

      <div className="two">
        <div className={fieldClass('teamSize')}>
          <label htmlFor="bf-team">How many people in the team? *</label>
          <select id="bf-team" name="teamSize" value={formData.teamSize} onChange={handleChange}>
            <option value="1-5">1–5 people</option>
            <option value="6-20">6–20 people</option>
            <option value="21-50">21–50 people</option>
            <option value="51-200">51–200 people</option>
            <option value="200+">200+ people</option>
          </select>
          {fieldError('teamSize')}
        </div>
        <div className={fieldClass('auditFocus')}>
          <label htmlFor="bf-focus">Where should the audit focus? *</label>
          <select id="bf-focus" name="auditFocus" value={formData.auditFocus} onChange={handleChange}>
            <option value="everything">All of it — a full review</option>
            <option value="technology">Technology and systems</option>
            <option value="ai-automation">AI and automation</option>
            <option value="marketing">Marketing and customer acquisition</option>
          </select>
          {fieldError('auditFocus')}
        </div>
      </div>

      <fieldset className={fieldClass('priorities')}>
        <legend>What is slowing growth down? * · select all that apply</legend>
        <div className="choices">
          {priorityOptions.map((priority) => (
            <label key={priority}>
              <input
                type="checkbox"
                checked={formData.priorities.includes(priority)}
                onChange={() => handleCheckboxChange(priority)}
              />
              {priority}
            </label>
          ))}
        </div>
        {fieldError('priorities')}
      </fieldset>

      <div className="field">
        <label htmlFor="bf-tools">What is in your stack today?</label>
        <input
          id="bf-tools"
          type="text"
          name="currentTools"
          value={formData.currentTools}
          onChange={handleChange}
          placeholder="e.g. Google Sheets, HubSpot, QuickBooks, nothing yet"
        />
        <p className="field-hint">
          The software your team runs on day to day — including the spreadsheets.
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
          <label htmlFor="bf-timeline">When do you want to act on it? *</label>
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
        <label htmlFor="bf-message">Anything else the audit should look at?</label>
        <textarea
          id="bf-message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={4}
          placeholder="A process that eats the week, a tool nobody uses, a report you rebuild by hand every month."
        />
        {fieldError('message')}
      </div>

      <div>
        <button type="submit" disabled={isSubmitting} className="btn btn-ink">
          {isSubmitting ? 'Submitting…' : 'Book a free growth audit'}
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
