import { NextResponse } from "next/server";
import Stripe from "stripe";

export const runtime = "nodejs"; // Ensures Node runtime

// Validate environment variables
if (!process.env.STRIPE_SECRET_KEY) {
  throw new Error("❌ Missing STRIPE_SECRET_KEY in environment variables");
}

if (!process.env.NEXT_PUBLIC_SITE_URL) {
  throw new Error("❌ Missing NEXT_PUBLIC_SITE_URL in environment variables");
}

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string);

export async function POST(req: Request) {
  try {
    const { priceId } = await req.json();

    if (!priceId) {
      return NextResponse.json(
        { error: "Missing priceId" },
        { status: 400 }
      );
    }

    const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL; // https://www.digilift.ai

    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      line_items: [
        {
          price: priceId,
          quantity: 1,
        },
      ],
      success_url: `${SITE_URL}/success`,
      cancel_url: `${SITE_URL}/cancel`,   // ✅ FIXED
    });

    if (!session.url) {
      return NextResponse.json(
        { error: "Stripe session did not return a URL" },
        { status: 500 }
      );
    }

    return NextResponse.json({ url: session.url });

  } catch (error: any) {
    console.error("Stripe Checkout Error:", error);

    return NextResponse.json(
      { error: error.message || "Stripe error occurred" },
      { status: 500 }
    );
  }
}
