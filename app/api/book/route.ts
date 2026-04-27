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
      businessName,
      businessType,
      city,
      state,
      email,
      phone,
      preferredContact,
      leadVolume,
      challenges,
      currentTools,
      currentWebsite,
      timeline,
      howHeard,
      message,
    } = validated;

    const sendResult = await resend.emails.send({
      from: process.env.EMAIL_FROM || "team@digilift.ai",
      to: process.env.EMAIL_TO || "team@digilift.ai",
      subject: "New Booking Request - DigiLift AI",
      html: `
        <h2>New Growth Automation Audit Request</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Business Name:</strong> ${businessName}</p>
        <p><strong>Business Type:</strong> ${businessType}</p>
        <p><strong>City:</strong> ${city}</p>
        <p><strong>State:</strong> ${state}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Preferred Contact:</strong> ${preferredContact}</p>
        <p><strong>Current Lead Volume:</strong> ${leadVolume}</p>
        <p><strong>Biggest Challenges:</strong> ${(challenges || []).join(", ")}</p>
        <p><strong>Current Tools:</strong> ${currentTools || "None provided"}</p>
        <p><strong>Current Website:</strong> ${currentWebsite || "None provided"}</p>
        <p><strong>Timeline:</strong> ${timeline}</p>
        <p><strong>How They Heard About Us:</strong> ${howHeard || "Not specified"}</p>
        <p><strong>Message:</strong><br>${message || "No message provided"}</p>
        <br/>
        <p style="font-size:12px;color:#888;">
          This email was sent automatically from DigiLift.ai
        </p>
      `,
    });

    console.log("Resend response:", sendResult);

    if (sendResult.error) {
      console.error("Resend API Error:", sendResult.error);
      throw new Error(sendResult.error.message);
    }

    return NextResponse.json({ success: true });

  } catch (error: any) {
    console.error("Booking API error:", error);
    return NextResponse.json(
      {
        success: false,
        message: "Booking submission failed",
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