import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-neutral pt-36 pb-24 md:pt-44 md:pb-32">

      {/* SEO H1 */}
      <h1 className="sr-only">
        AI Growth &amp; Automation Systems for Schools and Small Businesses
      </h1>

      {/* Chrome halo + studio floor */}
      <div
        className="absolute inset-0 -z-10 pointer-events-none flex items-center justify-center"
        aria-hidden="true"
      >
        <div className="hero-chrome" />
      </div>
      <div
        className="absolute inset-x-0 bottom-0 -z-10 h-1/3 pointer-events-none hero-floor"
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">

        <p className="eyebrow">AI Growth &amp; Automation Consultancy</p>

        <h2 className="mt-6 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium text-ink leading-[1.05] tracking-[-0.04em]">
          AI Growth Systems for{' '}
          <span className="text-accent">Schools</span> and Small Businesses
        </h2>

        <p className="mx-auto mt-7 max-w-xl text-lg text-neutral-600 leading-relaxed">
          We help schools, daycares, and local businesses generate qualified leads,
          automate follow-up, and turn inquiries into booked tours and appointments.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <Link href="/bookings" className="btn-ink">
            Book a Growth Automation Audit
          </Link>
          <Link href="#how-it-works" className="btn-ghost">
            See How It Works
          </Link>
        </div>

        <p className="mt-10 text-sm text-neutral-600">
          No long-term contracts &nbsp;·&nbsp; Built for schools and small businesses &nbsp;·&nbsp; Clear scope and deliverables
        </p>

      </div>
    </section>
  );
}
