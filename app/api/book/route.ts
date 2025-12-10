import { NextRequest, NextResponse } from "next/server";
import { bookingFormSchema } from "@/lib/validators";
import { Resend } from "resend";

export const runtime = "nodejs";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const validated = bookingFormSchema.parse(body);

    const {
      name,
      daycareName,
      city,
      state,
      email,
      phone,
      preferredContact,
      servicesInterested,
      currentWebsite,
      currentGBP,
      timeline,
      message,
    } = validated;

    // SEND EMAIL
    await resend.emails.send({
      from: process.env.EMAIL_FROM ?? "onboarding@resend.dev",
      to: process.env.EMAIL_TO ?? "team@digilift.ai",
      subject: "New Booking Request - DigiLift.ai",
      html: `
        <h2>New Consultation Request</h2>

        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Daycare Name:</strong> ${daycareName}</p>
        <p><strong>City:</strong> ${city}</p>
        <p><strong>State:</strong> ${state}</p>

        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>

        <p><strong>Preferred Contact:</strong> ${preferredContact}</p>
        <p><strong>Services Interested:</strong> ${servicesInterested.join(", ")}</p>

        <p><strong>Current Website:</strong> ${currentWebsite || "None provided"}</p>
        <p><strong>Google Business Profile:</strong> ${currentGBP || "None provided"}</p>

        <p><strong>Timeline:</strong> ${timeline}</p>

        <p><strong>Message:</strong><br>${message || "No message provided"}</p>

        <br/>
        <p style="font-size:12px;color:#888;">
          This email was sent automatically from DigiLift.ai
        </p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error("Booking API error:", error);
    return NextResponse.json(
      {
        success: false,
        message: "Error submitting booking",
        error: error?.message,
      },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json({
    message: "Booking API endpoint. Submit via POST.",
  });
}
