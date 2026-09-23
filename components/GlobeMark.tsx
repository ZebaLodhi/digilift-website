type Props = {
  size: number;
  radius: number;
  step: number;
  dot: number;
  color: string;
  gradientId: string;
  className?: string;
};

/**
 * Dotted-globe brand mark. Ported from the design template's globeMono()
 * generator so it renders on the server instead of being drawn by a script.
 */
export default function GlobeMark({
  size,
  radius,
  step,
  dot,
  color,
  gradientId,
  className,
}: Props) {
  const cx = size / 2;
  const cy = size / 2;
  const tilt = -0.35;
  const yaw = 0.5;

  const points: { x: number; y: number; z: number }[] = [];
  for (let lat = -85; lat <= 85; lat += step) {
    const la = (lat * Math.PI) / 180;
    const ringCount = Math.max(6, Math.round((Math.cos(la) * 360) / step));
    for (let i = 0; i < ringCount; i++) {
      const lo = (i / ringCount) * Math.PI * 2 + yaw;
      const x = Math.cos(la) * Math.cos(lo);
      const y = Math.sin(la);
      const z = Math.cos(la) * Math.sin(lo);
      points.push({
        x,
        y: y * Math.cos(tilt) - z * Math.sin(tilt),
        z: y * Math.sin(tilt) + z * Math.cos(tilt),
      });
    }
  }
  points.sort((a, b) => a.z - b.z);

  const angle = (-32 * Math.PI) / 180;
  const ex = radius * 1.38 * Math.cos(tilt);
  const ey = radius * 0.34 * Math.sin(tilt);
  const nodeX = cx + ex * Math.cos(angle) - ey * Math.sin(angle);
  const nodeY = cy + ex * Math.sin(angle) + ey * Math.cos(angle);

  return (
    <svg viewBox={`0 0 ${size} ${size}`} className={className} aria-hidden="true">
      <defs>
        <linearGradient id={gradientId} x1="0" y1="1" x2="1" y2="0">
          <stop offset="0" stopColor={color} stopOpacity="0" />
          <stop offset=".5" stopColor={color} stopOpacity=".45" />
          <stop offset="1" stopColor={color} stopOpacity="1" />
        </linearGradient>
      </defs>
      <g>
        {points
          .filter((p) => p.z >= -0.05)
          .map((p, i) => {
            const d = (p.z + 1) / 2;
            const sz = dot * (0.55 + 0.7 * d);
            return (
              <rect
                key={i}
                x={(cx + radius * p.x - sz / 2).toFixed(2)}
                y={(cy - radius * p.y - sz / 2).toFixed(2)}
                width={sz.toFixed(2)}
                height={sz.toFixed(2)}
                rx={(sz * 0.18).toFixed(2)}
                fill={color}
                opacity={(0.1 + 0.8 * d).toFixed(2)}
              />
            );
          })}
      </g>
      <ellipse
        cx={cx}
        cy={cy}
        rx={(radius * 1.38).toFixed(2)}
        ry={(radius * 0.34).toFixed(2)}
        transform={`rotate(-32 ${cx} ${cy})`}
        fill="none"
        stroke={`url(#${gradientId})`}
        strokeWidth={(size / 150).toFixed(2)}
      />
      <circle cx={nodeX.toFixed(2)} cy={nodeY.toFixed(2)} r={(size / 60).toFixed(2)} fill={color} />
    </svg>
  );
}
