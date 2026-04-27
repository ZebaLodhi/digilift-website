import type { Metadata } from 'next';
import BookingForm from '@/components/BookingForm';

export const metadata: Metadata = {
  title: 'Book a Growth Automation Audit | DigiLift AI',
  description:
    "Tell us about your business, your current lead process, and where follow-up or conversion is breaking down. We'll help identify where AI and automation can create the biggest impact.",
};

export default function BookingsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-12 bg-gradient-to-br from-neutral via-white to-neutral-100">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-sm font-semibold text-[#00C2A8] uppercase tracking-widest mb-4">
              Get Started
            </p>
            <h1 className="mb-6">Ready to Build a Smarter Growth System?</h1>
            <p className="text-xl md:text-2xl text-dark/70 mb-8">
              Tell us about your business, your current lead process, and where
              follow-up or conversion is breaking down. We will help identify where
              AI and automation can create the biggest impact.
            </p>

            {/* Trust Badges */}
            <div className="flex flex-wrap justify-center gap-6 mb-8">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-dark/70 text-sm">No long-term contracts</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-dark/70 text-sm">Response within 24 hours</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-dark/70 text-sm">Built for schools and small businesses</span>
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
                <h3 className="text-2xl mb-6">What Happens After You Reach Out</h3>

                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center text-accent font-bold">
                        1
                      </div>
                    </div>
                    <div>
                      <h4 className="font-bold mb-1">Tell Us About Your Business</h4>
                      <p className="text-sm text-dark/70">
                        Fill out the form so we understand your current setup,
                        lead process, and where things are breaking down.
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
                      <h4 className="font-bold mb-1">We Review and Respond</h4>
                      <p className="text-sm text-dark/70">
                        Within 24 hours we will reach out to schedule a
                        strategy call and discuss next steps.
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
                      <h4 className="font-bold mb-1">Growth Automation Audit</h4>
                      <p className="text-sm text-dark/70">
                        We review your ads, forms, follow-up process, and
                        reporting to identify exactly where leads are being lost.
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
                      <h4 className="font-bold mb-1">Clear Roadmap and Recommendation</h4>
                      <p className="text-sm text-dark/70">
                        You receive a prioritized action plan and a recommendation
                        for the right next step — no pressure, no hard sell.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="border-t border-neutral-200 mt-8 pt-8">
                  <h4 className="font-bold mb-4">Prefer to Talk Directly?</h4>
                  <p className="text-sm text-dark/70 mb-4">
                    Reach out by phone or email and we will get back to you promptly.
                  </p>
                  <div className="space-y-2 text-sm">
                    <a href="tel:+15715876824" className="flex items-center gap-2 text-accent hover:text-accent-dark transition-colors">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                      </svg>
                      (571) 587-6824
                    </a>
                    <a href="mailto:team@digilift.ai" className="flex items-center gap-2 text-accent hover:text-accent-dark transition-colors">
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
            </div>

          </div>
        </div>
      </section>
    </>
  );
}