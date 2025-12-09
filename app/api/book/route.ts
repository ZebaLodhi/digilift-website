import { NextRequest, NextResponse } from "next/server";
import { bookingFormSchema } from "@/lib/validators";
import { sendBookingEmail } from "@/lib/email";

// Cloudflare Workers do NOT support fs or path
// Instead, we store submissions in a KV or DO (Durable Object).
// Below is a mock in-memory fallback for local dev.
// In production, replace with KV.

export const runtime = "nodejs"; // Needed for Next.js 15 → ensures SSR mode

// TEMP LOCAL MEMORY STORAGE (replace with KV if needed)
let memoryStore: any[] = [];

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Validate request payload
    const validatedData = bookingFormSchema.parse(body);

    // Send email to your inbox
    await sendBookingEmail(validatedData);

    // Create new booking entry
    const newRequest = {
      id: Date.now().toString(),
      timestamp: new Date().toISOString(),
      ...validatedData,
    };

    // Save to local memory for now (Cloudflare-safe)
    memoryStore.push(newRequest);

    return NextResponse.json(
      {
        success: true,
        message: "Booking request received successfully",
        requestId: newRequest.id,
      },
      { status: 200 }
    );
  } catch (error: any) {
    console.error("Booking API error:", error);

    if (error.errors) {
      return NextResponse.json(
        {
          success: false,
          message: "Validation failed",
          errors: error.errors,
        },
        { status: 400 }
      );
    }

    return NextResponse.json(
      {
        success: false,
        message: "An error occurred while processing your request",
      },
      { status: 500 }
    );
  }
}

// GET handler (informational)
export async function GET() {
  return NextResponse.json(
    {
      message:
        "Booking API endpoint. Use POST to submit a booking request.",
    },
    { status: 200 }
  );
}
