import Link from 'next/link';
import Image from 'next/image';
import type { CSSProperties } from 'react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#FFF6EA] pt-24 pb-20 md:pt-32 md:pb-24">

      {/* ⭐ MASCOT — FOREGROUND (z-20) */}
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

      {/* CONTENT */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        <div className="min-h-[60vh] flex items-center">

          <div className="max-w-xl lg:max-w-2xl">

            {/* HERO TITLE */}
            <h1
              className="
                text-slate-900
                text-3xl sm:text-4xl md:text-6xl lg:text-7xl
                font-extrabold
                leading-tight
                tracking-tight
                relative z-30
              "
            >
              "Making your <span className="text-[#00C2A8]">daycare</span> the talk of the playground."
            </h1>

            {/* ⭐ SERVICES — NOW BOLD */}
            <p className="mt-8 text-lg md:text-xl text-slate-800 font-semibold relative z-30">
              Website <span className="mx-2 text-[#00C2A8] font-bold">+</span>
              Branding <span className="mx-2 text-[#00C2A8] font-bold">+</span>
              Google Business Profile <span className="mx-2 text-[#00C2A8] font-bold">+</span>
              AI Chatbot
            </p>

          </div>

        </div>
      </div>

    </section>
  );
}
