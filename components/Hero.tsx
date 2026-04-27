import Image from 'next/image';
import Link from 'next/link';
import type { CSSProperties } from 'react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#FFF6EA] pt-24 pb-20 md:pt-32 md:pb-24">

      {/* SEO H1 */}
      <h1 className="sr-only">
        AI Growth & Automation Systems for Schools and Small Businesses
      </h1>

      {/* Desktop Mascot */}
      <div
        className="absolute inset-0 pointer-events-none z-20 hidden md:block"
        aria-hidden="true"
      >
        <div
          className="mascot-bounce"
          style={
            {
              ['--mascot-w' as any]: '240px',
              ['--mascot-top' as any]: '30%',
              ['--fly-dur' as any]: '6s',
            } as CSSProperties
          }
        >
          <Image
            src="/brand/digilift-mascot.png"
            alt=""
            role="presentation"
            width={240}
            height={140}
            priority
            className="w-40 sm:w-48 md:w-64 lg:w-72 h-auto animate-float mascot-shadow"
          />
        </div>
      </div>

      {/* Content */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        <div className="min-h-[60vh] flex items-center">
          <div className="max-w-xl lg:max-w-2xl relative">

            {/* Label */}
            <p className="text-sm font-semibold text-[#00C2A8] uppercase tracking-widest mb-4">
              AI Growth & Automation Consultancy
            </p>

            {/* Headline */}
            <h2
              className="
                text-slate-900
                text-4xl sm:text-5xl md:text-6xl lg:text-7xl
                font-extrabold
                leading-tight
                tracking-tight
                relative z-5
              "
            >
              AI Growth Systems for{' '}
              <span className="text-[#00C2A8]">Schools</span> and Small Businesses
            </h2>

            {/* Subheadline */}
            <p className="mt-6 text-lg md:text-xl text-slate-700 leading-relaxed relative z-30 max-w-lg">
              We help schools, daycares, and local businesses generate qualified leads,
              automate follow-up, and turn inquiries into booked tours and appointments.
            </p>

            {/* CTA Buttons */}
            <div className="mt-8 flex flex-wrap gap-4 relative z-30">
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
            <p className="mt-6 text-sm text-slate-500 relative z-30">
              No long-term contracts &nbsp;·&nbsp; Built for schools and small businesses &nbsp;·&nbsp; Clear scope and deliverables
            </p>

          </div>
        </div>
      </div>

      {/* Mobile Mascot */}
      <div
        className="absolute left-0 right-0 bottom-0 top-[55%] pointer-events-none md:hidden z-40"
        aria-hidden="true"
      >
        <div
          className="mascot-bounce"
          style={
            {
              ['--mascot-w' as any]: '240px',
              ['--mascot-top' as any]: '0%',
              ['--fly-dur' as any]: '6s',
            } as CSSProperties
          }
        >
          <Image
            src="/brand/digilift-mascot.png"
            alt=""
            role="presentation"
            width={240}
            height={140}
            priority
            className="w-40 sm:w-48 h-auto animate-float mascot-shadow"
          />
        </div>
      </div>

    </section>
  );
}