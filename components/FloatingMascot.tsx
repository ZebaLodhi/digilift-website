'use client';
import Image from 'next/image';

export default function FloatingMascot() {
  return (
    <div
      className="pointer-events-none select-none absolute bottom-0 right-6 md:right-16 z-10"
      aria-hidden="true"
    >
      <Image
        src="/brand/digilift-mascot.png"
        alt="DigiLift mascot"
        width={380}
        height={380}
        priority
        className="w-[220px] md:w-[320px] lg:w-[380px] h-auto animate-float mascot-shadow"
      />
    </div>
  );
}
