export default function LogoMark({ className = "w-10 h-10" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="DigiLift Logo"
    >
      {/* Upward arrow integrated with "L" shape */}
      <path
        d="M30 85 L30 30 L45 30 L45 15 L60 30 L75 15 L75 30 L75 85 L60 85 L60 50 L45 65 L45 85 Z"
        fill="currentColor"
        className="text-accent"
      />
      <path
        d="M45 15 L60 30 L75 15"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        className="text-primary"
      />
    </svg>
  );
}
