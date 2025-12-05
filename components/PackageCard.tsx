"use client";

import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { useCallback, useState } from "react";

interface PackageCardProps {
  name: string;
  tagline: string;
  price: string;              // e.g. "$1,497"
  priceNote: string;
  turnaround: string;
  description: string;
  features: string[];
  isPopular?: boolean;
}

/* --------------------------------------------------------
   STRIPE CHECKOUT BUTTON
-------------------------------------------------------- */
function PayWithStripe({
  payload,
}: {
  payload: {
    serviceId: string;
    rawPrice: string;
    customerName: string;
    customerEmail: string;
  };
}) {
  const [loading, setLoading] = useState(false);

  const startStripeCheckout = async () => {
    try {
      setLoading(true);

      const response = await fetch(
        "http://localhost:3001/api/stripe/checkout-session",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        }
      );

      const data = await response.json();

      if (!data.url) {
        alert("Stripe error. Try again.");
        return;
      }

      window.location.href = data.url; // redirect to Stripe
    } catch (error) {
      console.error("Stripe Checkout Error:", error);
      alert("Stripe error. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      onClick={startStripeCheckout}
      disabled={loading}
      className="block w-full text-center font-semibold px-8 py-3 rounded-xl transition-all duration-200 
      bg-indigo-600 hover:bg-indigo-700 text-white shadow-soft hover:shadow-soft-lg disabled:opacity-50 mt-4"
    >
      {loading ? "Redirecting..." : "Pay via Stripe"}
    </button>
  );
}

/* --------------------------------------------------------
   PAYPAL BUTTON
-------------------------------------------------------- */
function PayWithPayPal({
  payload,
}: {
  payload: { serviceId: string; date: string };
}) {
  const PAYPAL_CLIENT_ID = process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID || "";

  const createOrder = useCallback(async () => {
    const r = await fetch("http://localhost:3001/api/paypal/orders", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    const { id } = await r.json();
    return id;
  }, [payload]);

  const onApprove = useCallback(async (data: any) => {
    const r = await fetch(
      `http://localhost:3001/api/paypal/orders/${data.orderID}/capture`,
      { method: "POST" }
    );
    const details = await r.json();
    console.log("PayPal capture:", details);
    alert("Payment complete. Thank you!");
  }, []);

  return (
    <div className="mt-6">
      <PayPalScriptProvider
        options={{
          "client-id": PAYPAL_CLIENT_ID,
          currency: "USD",
          intent: "capture",
        }}
      >
        <div className="max-w-sm mx-auto">
          <PayPalButtons
            style={{ layout: "vertical" }}
            createOrder={createOrder}
            onApprove={onApprove}
            onError={() => alert("Payment failed. Please try again.")}
          />
        </div>
      </PayPalScriptProvider>
    </div>
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

      {/* ----------------- STRIPE BUTTON ----------------- */}
      <PayWithStripe
        payload={{
          serviceId: name.toLowerCase().replace(/\s+/g, "-"),
          rawPrice: price, // ← SEND REAL PRICE TO BACKEND ($1,497)
          customerName: "Website Visitor",
          customerEmail: "visitor@example.com",
        }}
      />

      {/* ----------------- PAYPAL BUTTON ----------------- */}
      <PayWithPayPal
        payload={{
          serviceId: name.toLowerCase().replace(/\s+/g, "-"),
          date: new Date().toISOString().slice(0, 10),
        }}
      />
    </div>
  );
}
