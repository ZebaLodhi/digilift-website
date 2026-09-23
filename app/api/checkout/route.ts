import { NextResponse } from "next/server";
import Stripe from "stripe";

export const runtime = "nodejs"; // Ensures Node runtime

export async function POST(req: Request) {
  try {
    const secretKey = process.env.STRIPE_SECRET_KEY;
    const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL;

    if (!secretKey || !SITE_URL) {
      return NextResponse.json(
        { error: "Checkout is not configured" },
        { status: 500 }
      );
    }

    const stripe = new Stripe(secretKey);

    const { priceId } = await req.json();

    if (!priceId) {
      return NextResponse.json(
        { error: "Missing priceId" },
        { status: 400 }
      );
    }

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
