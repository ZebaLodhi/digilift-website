"use client";

import { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);

export default function StripeCheckoutButton() {
  const [loading, setLoading] = useState(false);

  const startCheckout = async () => {
    setLoading(true);

    try {
      const response = await fetch("http://localhost:3001/api/stripe/checkout-session", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          serviceId: "cleaning-001",
          customerName: "John Doe",
          customerEmail: "john@example.com",
        }),
      });

      const data = await response.json();

      if (!data.url) {
        alert("Something went wrong.");
        return;
      }

      // Redirect user to Stripe Checkout
      window.location.href = data.url;

    } catch (error) {
      console.error("Stripe checkout error:", error);
      alert("Payment error.");
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
