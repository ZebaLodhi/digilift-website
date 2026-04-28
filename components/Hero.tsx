import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#FFF6EA] pt-24 pb-20 md:pt-32 md:pb-24">

      {/* SEO H1 */}
      <h1 className="sr-only">
        AI Growth & Automation Systems for Schools and Small Businesses
      </h1>

      {/* Subtle background decoration */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#00C2A8]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 -left-24 w-80 h-80 bg-[#1F3B73]/5 rounded-full blur-3xl" />
      </div>

      {/* Content */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        <div className="min-h-[60vh] flex items-center">
          <div className="max-w-2xl lg:max-w-3xl relative">

            {/* Label */}
            <p className="text-sm font-semibold text-[#00C2A8] uppercase tracking-widest mb-4">
              AI Growth & Automation Consultancy
            </p>

            {/* Headline */}
            <h2 className="text-slate-900 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight">
              AI Growth Systems for{' '}
              <span className="text-[#00C2A8]">Schools</span> and Small Businesses
            </h2>

            {/* Subheadline */}
            <p className="mt-6 text-lg md:text-xl text-slate-700 leading-relaxed max-w-xl">
              We help schools, daycares, and local businesses generate qualified leads,
              automate follow-up, and turn inquiries into booked tours and appointments.
            </p>

            {/* CTA Buttons */}
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/bookings"
                className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-[#1F3B73] text-white font-semibold text-base hover:bg-[#162D5C] transition-all duration-200 shadow-md hover:shadow-lg"
              >
                Book a Growth Automation Audit
              </Link>
              <Link
                href="#how-it-works"
                className="inline-flex items-center justify-center px-6 py-3 rounded-xl border-2 border-[#1F3B73] text-[#1F3B73] font-semibold text-base hover:bg-[#1F3B73] hover:text-white transition-all duration-200"
              >
                See How It Works
              </Link>
            </div>

            {/* Trust line */}
            <p className="mt-6 text-sm text-slate-500">
              No long-term contracts &nbsp;·&nbsp; Built for schools and small businesses &nbsp;·&nbsp; Clear scope and deliverables
            </p>

            {/* Stats bar */}
            <div className="mt-12 flex flex-wrap gap-8">
              <div>
                <p className="text-2xl font-extrabold text-[#1F3B73]">2</p>
                <p className="text-xs text-slate-500 uppercase tracking-wide mt-1">Active Clients</p>
              </div>
              <div className="w-px bg-slate-200" />
              <div>
                <p className="text-2xl font-extrabold text-[#1F3B73]">14+</p>
                <p className="text-xs text-slate-500 uppercase tracking-wide mt-1">Leads Generated</p>
              </div>
              <div className="w-px bg-slate-200" />
              <div>
                <p className="text-2xl font-extrabold text-[#1F3B73]">4</p>
                <p className="text-xs text-slate-500 uppercase tracking-wide mt-1">Avg Monthly Leads</p>
              </div>
              <div className="w-px bg-slate-200" />
              <div>
                <p className="text-2xl font-extrabold text-[#1F3B73]">2</p>
                <p className="text-xs text-slate-500 uppercase tracking-wide mt-1">Active Campaigns</p>
              </div>
            </div>

          </div>
        </div>
      </div>

    </section>
  );
}