import Link from 'next/link';

export default function CTA() {
  return (
    <section className="section bg-gradient-to-br from-primary via-secondary to-primary-dark">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-white mb-6">
            Ready to Transform Your Daycare's Digital Presence?
          </h2>
          <p className="text-xl text-neutral-100 mb-8 max-w-2xl mx-auto">
            Join dozens of daycare centers that have increased enrollment and built trust
            with parents through our comprehensive digital revamp services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/bookings" className="btn-primary">
              Book Your Free Consultation
            </Link>
            <Link href="/packages" className="btn-secondary bg-white">
              View Our Packages
            </Link>
          </div>
          <p className="text-sm text-neutral-200 mt-6">
            No commitment required • Free 30-minute consultation • Fast turnaround
          </p>
        </div>
      </div>
    </section>
  );
}
