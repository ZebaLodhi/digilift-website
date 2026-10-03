import { NextRequest, NextResponse } from "next/server";
import {
  bookingFormSchema,
  auditFocusLabels,
  industryLabels,
  teamSizeLabels,
  timelineLabels,
} from "@/lib/validators";
import { Resend } from "resend";

export const runtime = "nodejs";

/** The submission is interpolated into an HTML email, so escape it first. */
function esc(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export async function POST(request: NextRequest) {
  try {
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      return NextResponse.json(
        { success: false, message: "Email service is not configured" },
        { status: 500 }
      );
    }
    const resend = new Resend(apiKey);

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
      teamSize,
      auditFocus,
      priorities,
      currentTools,
      currentWebsite,
      timeline,
      howHeard,
      message,
    } = validated;

    const row = (label: string, value: string) =>
      `<p><strong>${label}:</strong> ${value}</p>`;

    const sendResult = await resend.emails.send({
      from: process.env.EMAIL_FROM || "team@digilift.ai",
      to: process.env.EMAIL_TO || "team@digilift.ai",
      subject: `Growth & AI Audit request — ${businessName}`,
      html: `
        <h2>New Growth &amp; AI Audit request</h2>
        ${row("Name", esc(name))}
        ${row("Business", esc(businessName))}
        ${row("Industry", industryLabels[businessType])}
        ${row("Team size", teamSizeLabels[teamSize])}
        ${row("Location", `${esc(city)}, ${esc(state)}`)}
        ${row("Email", esc(email))}
        ${row("Phone", esc(phone))}
        ${row("Preferred contact", preferredContact)}
        <hr/>
        ${row("Audit focus", auditFocusLabels[auditFocus])}
        ${row("Priorities", priorities.map(esc).join(", "))}
        ${row("Current stack", currentTools ? esc(currentTools) : "Not provided")}
        ${row("Website", currentWebsite ? esc(currentWebsite) : "Not provided")}
        ${row("Timeline", timelineLabels[timeline])}
        ${row("How they heard about us", howHeard ? esc(howHeard) : "Not specified")}
        <p><strong>Message:</strong><br>${
          message ? esc(message).replace(/\n/g, "<br>") : "No message provided"
        }</p>
        <br/>
        <p style="font-size:12px;color:#888;">
          This email was sent automatically from DigiLift.ai
        </p>
      `,
    });

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
