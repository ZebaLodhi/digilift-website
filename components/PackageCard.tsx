"use client";

import { useState } from "react";

interface PackageCardProps {
  name: string;
  tagline: string;
  price: string; // Display price e.g. "$1,497"
  priceNote: string;
  turnaround: string;
  description: string;
  features: string[];
  isPopular?: boolean;
  priceId: string; // REQUIRED: Stripe Price ID
}

/* --------------------------------------------------------
   STRIPE CHECKOUT BUTTON
-------------------------------------------------------- */
function PayWithStripe({ priceId }: { priceId: string }) {
  const [loading, setLoading] = useState(false);

  const startStripeCheckout = async () => {
    try {
      setLoading(true);

      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ priceId }),
      });

      const data = await res.json();

      if (!data.url) {
        alert("Stripe error. Please try again.");
        return;
      }

      window.location.href = data.url;
    } catch (error) {
      console.error("Stripe Checkout Error:", error);
      alert("Stripe error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      onClick={startStripeCheckout}
      disabled={loading}
      className="block w-full text-center font-semibold px-8 py-3 rounded-xl transition-all duration-200 
      bg-indigo-600 hover:bg-indigo-700 text-white shadow-soft hover:shadow-soft-lg disabled:opacity-50 mt-6"
    >
      {loading ? "Redirecting..." : "Pay via Stripe"}
    </button>
  );
}

/* --------------------------------------------------------
   MAIN PACKAGE CARD COMPONENT
-------------------------------------------------------- */
export default function PackageCard({
  name,
  tagline,
  price,
  priceNote,
  turnaround,
  description,
  features,
  isPopular = false,
  priceId,
}: PackageCardProps) {
  return (
    <div
      className={`card-hover relative ${
        isPopular ? "ring-4 ring-accent" : ""
      }`}
    >
      {isPopular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-accent text-white px-6 py-2 rounded-full font-bold text-sm">
          Most Popular
        </div>
      )}

      <div className="text-center mb-6">
        <h3 className="text-3xl mb-2">{name}</h3>
        <p className="text-secondary font-semibold mb-4">{tagline}</p>

        <div className="mb-4">
          <span className="text-4xl font-bold text-primary">{price}</span>
          <span className="text-dark/60 ml-2">{priceNote}</span>
        </div>

        <div className="text-sm text-dark/70 mb-4">
          <svg
            className="w-4 h-4 inline mr-1"
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
          {turnaround} turnaround
        </div>
      </div>

      <p className="text-dark/70 mb-6 text-center">{description}</p>

      <div className="border-t border-neutral-200 pt-6 mb-6">
        <ul className="space-y-3">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-3">
              <svg
                className="w-5 h-5 text-accent flex-shrink-0 mt-0.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span className="text-dark/80">{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* ------------ STRIPE CHECKOUT BUTTON ------------ */}
      <PayWithStripe priceId={priceId} />
    </div>
  );
}
