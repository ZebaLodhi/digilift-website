import Link from 'next/link';
import Image from 'next/image';
import type { CSSProperties } from 'react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#FFF6EA] pt-24 pb-20 md:pt-32 md:pb-24">

      {/* ⭐ MASCOT — FOREGROUND */}
      <div className="absolute inset-0 pointer-events-none z-20" aria-hidden="true">
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
            className="
              w-40 sm:w-48 md:w-64 lg:w-72 
              h-auto 
              animate-float 
              mascot-shadow
            "
          />
        </div>
      </div>

      {/* ⭐ CONTENT */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-30">
        <div className="min-h-[60vh] flex items-center">

          <div className="max-w-xl lg:max-w-2xl">

            {/* ⭐ NEW HEADLINE */}
            <h1
              className="
                text-slate-900 
                text-3xl sm:text-4xl md:text-6xl lg:text-7xl
                font-extrabold 
                leading-tight
                tracking-tight
              "
            >
              We’re DigiLift,<br />and we’re here to uplift.
            </h1>

            {/* ⭐ NEW DESCRIPTION */}
            <p className="mt-6 text-lg md:text-xl text-slate-800 font-medium leading-relaxed">
              We help daycares grow with modern websites, standout branding, 
              Google visibility, and AI tools that connect better with parents.
              <br /><br />
              Why stay hidden when your daycare can shine?
            </p>

          </div>

        </div>
      </div>
    </section>
  );
}
