import Link from "next/link";

interface PackageCardProps {
  name: string;
  tagline: string;
  price: string;
  priceNote: string;
  turnaround: string;
  description: string;
  features: string[];
  isPopular?: boolean;
  priceId: string;
  cta?: string;
  guarantee?: string;
}

export default function PackageCard({
  name,
  tagline,
  price,
  priceNote,
  turnaround,
  description,
  features,
  isPopular = false,
  cta = "Book a Call",
  guarantee,
}: PackageCardProps) {
  return (
    <div
      className={`relative flex flex-col rounded-2xl p-8 transition-all duration-200
        ${
          isPopular
            ? "bg-white ring-2 ring-accent shadow-soft-lg scale-[1.02]"
            : "bg-white ring-1 ring-neutral-200 shadow-soft hover:shadow-soft-lg"
        }`}
    >
      {/* Most Popular Badge */}
      {isPopular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-accent text-white px-6 py-1.5 rounded-full font-bold text-sm tracking-wide whitespace-nowrap">
          Most Popular
        </div>
      )}

      {/* Header */}
      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold text-dark mb-1">{name}</h3>
        <p className="text-secondary font-medium text-sm mb-5">{tagline}</p>

        {/* Price */}
        <div className="mb-2">
          <span className="text-5xl font-extrabold text-primary">{price}</span>
          <span className="text-dark/50 ml-2 text-sm">{priceNote}</span>
        </div>

        {/* Turnaround */}
        <div className="inline-flex items-center gap-1.5 text-xs text-dark/50 bg-neutral-100 px-3 py-1 rounded-full">
          <svg
            className="w-3.5 h-3.5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          {turnaround}
        </div>
      </div>

      {/* Description */}
      <p className="text-dark/60 text-sm text-center leading-relaxed mb-6">
        {description}
      </p>

      {/* Divider */}
      <div className="border-t border-neutral-100 mb-6" />

      {/* Features */}
      <ul className="space-y-3 flex-1">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-3">
            <svg
              className="w-4 h-4 text-accent flex-shrink-0 mt-0.5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2.5}
                d="M5 13l4 4L19 7"
              />
            </svg>
            <span className="text-dark/75 text-sm leading-snug">{feature}</span>
          </li>
        ))}
      </ul>

      {/* CTA Button */}
      <Link
        href="/bookings"
        className={`block w-full text-center font-semibold px-8 py-4 rounded-xl transition-all duration-200 mt-6 text-base
          ${
            isPopular
              ? "bg-accent hover:bg-accent-dark text-white shadow-soft-lg hover:shadow-xl"
              : "bg-primary hover:bg-primary-dark text-white shadow-soft hover:shadow-soft-lg"
          }`}
      >
        {cta}
      </Link>

      {/* Guarantee */}
      {guarantee && (
        <p className="text-xs text-dark/40 text-center mt-4 leading-relaxed">
          <span className="mr-1">🔒</span>
          {guarantee}
        </p>
      )}
    </div>
  );
}