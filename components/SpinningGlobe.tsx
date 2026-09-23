'use client';

import { useEffect, useRef } from 'react';

type Props = {
  color?: string;
  /** Degrees between dot rows and columns. */
  step?: number;
  /** Seconds per full turn. */
  period?: number;
  className?: string;
};

// Globe radius and orbit ellipse, as fractions of the box size.
const R = 0.33;
const ORBIT_RX = R * 1.38;
const ORBIT_RY = R * 0.34;
const ORBIT_ANGLE = -32;
const TILT = -0.35;

/**
 * Dotted-globe brand mark that turns on its own (tilted) axis. The dots are
 * drawn to a canvas each frame; the orbit ring is a static SVG on top.
 * Stops when off screen, and holds still for prefers-reduced-motion.
 */
export default function SpinningGlobe({
  color = '#0A0A0A',
  step = 7,
  period = 50,
  className,
}: Props) {
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
      const cx = size / 2;
      const r = size * R;
      const base = Math.max(2.4, size / 90);

      const projected: { x: number; y: number; z: number }[] = [];
      for (const [cl, sl, lon] of dots) {
        const a = lon + yaw;
        const x = cl * Math.cos(a);
        const z0 = cl * Math.sin(a);
        const y = sl * cosT - z0 * sinT;
        const z = sl * sinT + z0 * cosT;
        if (z >= -0.05) projected.push({ x, y, z });
      }
      projected.sort((p, q) => p.z - q.z);

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.clearRect(0, 0, size, size);
      ctx.fillStyle = color;
      for (const p of projected) {
        const d = (p.z + 1) / 2;
        const s = base * (0.55 + 0.7 * d);
        ctx.globalAlpha = 0.1 + 0.8 * d;
        const x = cx + r * p.x - s / 2;
        const y = cx - r * p.y - s / 2;
        if (ctx.roundRect) {
          ctx.beginPath();
          ctx.roundRect(x, y, s, s, s * 0.18);
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

    const tick = (t: number) => {
      if (last) yaw += ((t - last) / 1000) * ((Math.PI * 2) / period);
      last = t;
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
  }, [color, step, period]);

  // Orbit node sits on the ring, top right.
  const ex = ORBIT_RX * Math.cos(TILT);
  const ey = ORBIT_RY * Math.sin(TILT);
  const o = (ORBIT_ANGLE * Math.PI) / 180;
  const nodeX = 0.5 + ex * Math.cos(o) - ey * Math.sin(o);
  const nodeY = 0.5 + ex * Math.sin(o) + ey * Math.cos(o);

  return (
    <div ref={boxRef} className={className} aria-hidden="true">
      <canvas ref={canvasRef} />
      <svg viewBox="0 0 100 100">
        <defs>
          <linearGradient id="globe-orbit" x1="0" y1="1" x2="1" y2="0">
            <stop offset="0" stopColor={color} stopOpacity="0" />
            <stop offset=".5" stopColor={color} stopOpacity=".45" />
            <stop offset="1" stopColor={color} stopOpacity="1" />
          </linearGradient>
        </defs>
        <ellipse
          cx="50"
          cy="50"
          rx={ORBIT_RX * 100}
          ry={ORBIT_RY * 100}
          transform={`rotate(${ORBIT_ANGLE} 50 50)`}
          fill="none"
          stroke="url(#globe-orbit)"
          strokeWidth=".6"
        />
        <circle cx={(nodeX * 100).toFixed(2)} cy={(nodeY * 100).toFixed(2)} r="1.6" fill={color} />
      </svg>
    </div>
  );
}
