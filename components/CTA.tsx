import Link from 'next/link';

export default function CTA() {
  return (
    <section className="section bg-gradient-to-br from-primary via-secondary to-primary-dark">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center text-white">
          <p className="text-sm font-semibold text-accent uppercase tracking-widest mb-4">
            Get Started
          </p>
          <h2 className="text-white mb-6">
            Ready to Build a Smarter Growth System?
          </h2>
          <p className="text-xl text-neutral-100 mb-8 max-w-2xl mx-auto">
            Tell us about your business, your current lead process, and where
            follow-up or conversion is breaking down. We will help identify
            where AI and automation can create the biggest impact.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/bookings" className="btn-primary">
              Book a Growth Automation Audit
            </Link>
            <Link href="/packages" className="btn-secondary bg-white">
              View Our Services
            </Link>
          </div>
          <p className="text-sm text-neutral-200 mt-6">
            No long-term contracts · Clear scope and deliverables · Built for schools and small businesses
          </p>
        </div>
      </div>
    </section>
  );
}