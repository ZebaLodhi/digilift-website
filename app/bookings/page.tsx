import type { Metadata } from 'next';
import BookingForm from '@/components/BookingForm';

export const metadata: Metadata = {
  title: 'Book a Free Consultation',
  description:
    "Schedule your free 30-minute consultation with DigiLift. No commitment required. Let's discuss how we can transform your daycare's digital presence and increase enrollment.",
};

export default function BookingsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-12 bg-gradient-to-br from-neutral via-white to-neutral-100">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="mb-6">Book Your Free Consultation</h1>
            <p className="text-xl md:text-2xl text-dark/80 mb-8">
              Let's discuss your daycare's unique needs and show you exactly how DigiLift
              can help you fill more seats and build parent trust.
            </p>

            {/* Trust Badges */}
            <div className="flex flex-wrap justify-center gap-6 mb-8">
              <div className="flex items-center gap-2">
                <svg className="w-6 h-6 text-accent" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-dark/80">100% Free, No Commitment</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-6 h-6 text-accent" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-dark/80">24-Hour Response Time</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-6 h-6 text-accent" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-dark/80">Custom Strategy Included</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-12 max-w-6xl mx-auto">

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="card sticky top-24">
                <h3 className="text-2xl mb-6">What to Expect</h3>

                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center text-accent font-bold">
                        1
                      </div>
                    </div>
                    <div>
                      <h4 className="font-bold mb-1">Submit Your Info</h4>
                      <p className="text-sm text-dark/70">
                        Fill out the form so we understand your daycare and goals.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center text-accent font-bold">
                        2
                      </div>
                    </div>
                    <div>
                      <h4 className="font-bold mb-1">We Review & Respond</h4>
                      <p className="text-sm text-dark/70">
                        Within 24 hours, we'll reach out to schedule your free consultation.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center text-accent font-bold">
                        3
                      </div>
                    </div>
                    <div>
                      <h4 className="font-bold mb-1">30-Minute Strategy Call</h4>
                      <p className="text-sm text-dark/70">
                        We audit your current presence and show you our plan to help you grow.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center text-accent font-bold">
                        4
                      </div>
                    </div>
                    <div>
                      <h4 className="font-bold mb-1">Get Custom Proposal</h4>
                      <p className="text-sm text-dark/70">
                        Receive a tailored package recommendation with clear pricing and timeline.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="border-t border-neutral-200 mt-8 pt-8">
                  <h4 className="font-bold mb-4">Have Questions?</h4>
                  <p className="text-sm text-dark/70 mb-4">
                    Prefer to talk right away? Give us a call or send an email.
                  </p>
                  <div className="space-y-2 text-sm">
                    <a
                      href="tel:+15715876824"
                      className="flex items-center gap-2 text-accent hover:text-accent-dark transition-colors"
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                      </svg>
                      (571) 587-6824
                    </a>
                    <a
                      href="mailto:team@digilift.ai"
                      className="flex items-center gap-2 text-accent hover:text-accent-dark transition-colors"
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                      </svg>
                      team@digilift.ai
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-2">
              <BookingForm />

              {/* Alternative: Calendly Option */}
              {/* Uncomment this section to use Calendly instead of the custom form */}
            </div>
          </div>
        </div>
      </section>

      {/* SOCIAL PROOF (Hidden until you have clients) */}
      {/*
      <section className="section bg-neutral">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="card text-center bg-gradient-to-br from-primary to-secondary text-white">
              <h3 className="text-3xl mb-4 text-white">Join 50+ Successful Daycare Centers</h3>
              <p className="text-xl text-neutral-100 mb-8">
                "The free consultation alone gave us actionable insights. By the time we signed up,
                we knew exactly what to expect—and DigiLift delivered beyond our expectations."
              </p>
              <div className="font-bold">— Jennifer Thompson, Sunshine Academy</div>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="text-4xl font-bold text-accent mb-2">3x</div>
                <div className="text-dark/70">Average increase in tour bookings</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-accent mb-2">2-8wks</div>
                <div className="text-dark/70">Fast turnaround on all projects</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-accent mb-2">5.0★</div>
                <div className="text-dark/70">Average client satisfaction rating</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      */}
    </>
  );
}
