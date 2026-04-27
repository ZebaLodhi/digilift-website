"use client";

import { useState } from "react";

export default function StripeCheckoutButton({ priceId }) {
  const [loading, setLoading] = useState(false);

  const startCheckout = async () => {
    try {
      setLoading(true);

      const response = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ priceId }),
      });

      const data = await response.json();

      if (!data.url) {
        console.error("Stripe error:", data);
        alert("Stripe error. Please try again.");
        return;
      }

      // Redirect user to Stripe Checkout
      window.location.href = data.url;

    } catch (error) {
      console.error("Stripe checkout error:", error);
      alert("Payment failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      onClick={startCheckout}
      disabled={loading}
      className="bg-blue-600 text-white px-5 py-3 rounded-lg w-full font-semibold shadow-md hover:bg-blue-700 transition disabled:opacity-50"
    >
      {loading ? "Redirecting..." : "Pay via Stripe"}
    </button>
  );
}
