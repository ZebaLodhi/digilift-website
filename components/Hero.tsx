import Link from 'next/link';
import Image from 'next/image';
import type { CSSProperties } from 'react';

export default function Hero() {
  return (
    // Light canvas, lots of breathing room
    <section className="relative overflow-hidden bg-[#FFF6EA] pt-28 pb-20 md:pt-32 md:pb-24">
      {/* ⬇️ KEEPING YOUR MASCOT CODE UNCHANGED */}
      <div className="absolute inset-0 pointer-events-none z-2" aria-hidden="true">
        <div
          className="mascot-bounce"
          style={
            {
              ['--mascot-w' as any]: '350px',
              ['--mascot-top' as any]: '25%',
              ['--fly-dur' as any]: '6s',
            } as CSSProperties
          }
        >
          <Image
            src="/brand/digilift-mascot.png"
            alt=""
            role="presentation"
            width={350}
            height={170}
            priority
            className="w-[200px] h-auto animate-float mascot-shadow"
          />
        </div>
      </div>

      {/* Content */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="min-h-[70vh] flex items-center">
          {/* Narrow text column like the reference */}
          <div className="max-w-xl lg:max-w-2xl">
            <h1 className="text-slate-900 text-4xl md:text-6xl lg:text-7xl font-extrabold leading-[0.20] tracking-tight">
            “Making your <span className="text-[#00C2A8]">daycare</span> the talk of the playground.”
              
            </h1>

            {/* Services line */}
            <p className="mt-12 text-xl text-slate-800">
            Website<span className="mx-3 text-[#00C2A8]">+</span>
            Branding<span className="mx-3 text-[#00C2A8]">+</span>
              Google Business Profile <span className="mx-3 text-[#00C2A8]">+</span>
              AI Chatbot
            </p>

            {/* Optional CTA (hide if you want it super minimal) */}
            {/* <div className="mt-10">
              <Link
                href="#contact"
                className="inline-flex items-center rounded-full border border-orange-500 px-6 py-3 text-base font-semibold text-orange-600 hover:bg-orange-50"
              >
                Get in touch
              </Link>
            </div> */}
          </div>
        </div>
      </div>
      
  
  

    </section>
  );
}
