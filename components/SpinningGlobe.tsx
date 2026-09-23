'use client';

import { useEffect, useRef } from 'react';
import * as orbit from './logoOrbit';

type Props = {
  /** Degrees between dot rows and columns. */
  step?: number;
  /** Seconds per full turn. */
  period?: number;
  className?: string;
};

// Globe radius as a fraction of the box size.
const R = 0.33;
const TILT = -0.35;

// The logo's globe sits at (195.7, 188.6) with radius 126; this viewBox maps
// it onto the same centre and radius as the canvas, so the swoosh paths can
// be used exactly as drawn in the icon.
const SPAN = 126 / R;
const VIEWBOX = `${(195.7 - SPAN / 2).toFixed(1)} ${(188.6 - SPAN / 2).toFixed(1)} ${SPAN.toFixed(1)} ${SPAN.toFixed(1)}`;

// Dot colours sampled from the icon: slate in shadow, cyan in the light.
const DIM = [0x48, 0x6e, 0x8c];
const LIT = [0x62, 0xd6, 0xf0];
// Light from the upper right, in front (view space, y up). Fixed, so the
// shading stays put while the dots turn beneath it, as in the logo.
const LIGHT = [0.4, 0.4, 0.82];

/**
 * The DigiLift AI logo globe, turning on its own tilted axis. Dots are drawn
 * to a canvas each frame; the orbit swoosh from the icon is layered in SVG,
 * its back half behind the dots and its front half over them. Stops when
 * off screen, and holds still for prefers-reduced-motion.
 */
export default function SpinningGlobe({ step = 7, period = 50, className }: Props) {
  const boxRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const box = boxRef.current;
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    if (!box || !canvas || !ctx) return;

    // Unit-sphere dots in the globe's own frame: [cos(lat), sin(lat), lon].
    const dots: [number, number, number][] = [];
    for (let lat = -85; lat <= 85; lat += step) {
      const la = (lat * Math.PI) / 180;
      const count = Math.max(6, Math.round((Math.cos(la) * 360) / step));
      for (let i = 0; i < count; i++) {
        dots.push([Math.cos(la), Math.sin(la), (i / count) * Math.PI * 2]);
      }
    }

    const cosT = Math.cos(TILT);
    const sinT = Math.sin(TILT);
    let size = 0;
    let dpr = 1;

    const draw = (yaw: number) => {
      if (!size) return;
      const c = size / 2;
      const r = size * R;

      const projected: { x: number; y: number; z: number }[] = [];
      for (const [cl, sl, lon] of dots) {
        const a = lon + yaw;
        const x = cl * Math.cos(a);
        const z0 = cl * Math.sin(a);
        const y = sl * cosT - z0 * sinT;
        const z = sl * sinT + z0 * cosT;
        if (z >= -0.02) projected.push({ x, y, z });
      }
      projected.sort((p, q) => p.z - q.z);

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.clearRect(0, 0, size, size);
      for (const p of projected) {
        const lam = Math.max(0, p.x * LIGHT[0] + p.y * LIGHT[1] + p.z * LIGHT[2]);
        const t = Math.min(1, Math.max(0, (lam - 0.2) / 0.8));
        const s = r * (0.016 + 0.019 * Math.max(0, p.z));
        ctx.globalAlpha = 0.15 + 0.72 * lam;
        ctx.fillStyle = `rgb(${DIM.map((d, i) => Math.round(d + (LIT[i] - d) * t)).join(',')})`;
        const x = c + r * p.x - s / 2;
        const y = c - r * p.y - s / 2;
        if (ctx.roundRect) {
          ctx.beginPath();
          ctx.roundRect(x, y, s, s, s * 0.2);
          ctx.fill();
        } else {
          ctx.fillRect(x, y, s, s);
        }
      }
      ctx.globalAlpha = 1;
    };

    let yaw = 0.5;
    const resize = () => {
      size = box.clientWidth;
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.round(size * dpr);
      canvas.height = Math.round(size * dpr);
      draw(yaw);
    };
    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(box);

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)');
    let raf = 0;
    let last = 0;
    let visible = true;

    const tick = (now: number) => {
      if (last) yaw += ((now - last) / 1000) * ((Math.PI * 2) / period);
      last = now;
      draw(yaw);
      raf = requestAnimationFrame(tick);
    };
    const start = () => {
      if (!raf && visible && !reduce.matches && !document.hidden) {
        last = 0;
        raf = requestAnimationFrame(tick);
      }
    };
    const stop = () => {
      cancelAnimationFrame(raf);
      raf = 0;
    };
    const sync = () => {
      stop();
      start();
    };

    const io = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      sync();
    });
    io.observe(box);
    document.addEventListener('visibilitychange', sync);
    reduce.addEventListener('change', sync);
    start();

    return () => {
      stop();
      ro.disconnect();
      io.disconnect();
      document.removeEventListener('visibilitychange', sync);
      reduce.removeEventListener('change', sync);
    };
  }, [step, period]);

  return (
    <div ref={boxRef} className={className} aria-hidden="true">
      <svg viewBox={VIEWBOX}>
        <defs>
          <radialGradient id="dl-sphere-glow">
            <stop offset="0" stopColor="#06d1f9" stopOpacity=".16" />
            <stop offset="1" stopColor="#06d1f9" stopOpacity="0" />
          </radialGradient>
        </defs>
        <circle cx="215" cy="170" r="170" fill="url(#dl-sphere-glow)" />
        <path
          d={orbit.back}
          fill="none"
          stroke="#056278"
          strokeWidth="3"
          strokeLinecap="round"
          opacity=".38"
        />
      </svg>

      <canvas ref={canvasRef} />

      <svg viewBox={VIEWBOX}>
        <defs>
          <linearGradient id="dl-ring" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0" stopColor="#056278" stopOpacity=".12" />
            <stop offset=".22" stopColor="#06d1f9" stopOpacity=".85" />
            <stop offset=".62" stopColor="#8feafc" />
            <stop offset="1" stopColor="#ffffff" />
          </linearGradient>
          <radialGradient id="dl-tip">
            <stop offset="0" stopColor="#ffffff" />
            <stop offset=".22" stopColor="#8feafc" stopOpacity=".85" />
            <stop offset="1" stopColor="#06d1f9" stopOpacity="0" />
          </radialGradient>
          <filter id="dl-soft" x="-40%" y="-40%" width="180%" height="180%">
            <feGaussianBlur stdDeviation="7" />
          </filter>
        </defs>
        <path
          d={orbit.glow}
          fill="none"
          stroke="#06d1f9"
          strokeWidth="16"
          strokeLinecap="round"
          opacity=".24"
          filter="url(#dl-soft)"
        />
        <path d={orbit.core} fill="none" stroke="url(#dl-ring)" strokeWidth="6.6" strokeLinecap="round" />
        <path
          d={orbit.highlight}
          fill="none"
          stroke="#ffffff"
          strokeWidth="2.1"
          strokeLinecap="round"
          opacity=".5"
        />
        <circle cx={orbit.tip.x} cy={orbit.tip.y} r="21" fill="url(#dl-tip)" />
        <circle cx={orbit.tip.x} cy={orbit.tip.y} r="3.8" fill="#ffffff" opacity=".95" />
      </svg>
    </div>
  );
}
