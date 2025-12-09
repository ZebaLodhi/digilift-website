import { NextResponse } from "next/server";

export const runtime = "edge"; // Edge-compatible (Cloudflare + Vercel)

interface BookingRequestBody {
  name: string;
  daycareName: string;
  city: string;
  state: string;
  email: string;
  phone: string;
  preferredContact?: string;
  servicesInterested?: string[]; // optional array
  currentWebsite?: string;
  currentGBP?: string;
  timeline?: string;
  message?: string;
}

export async function POST(req: Request) {
  try {
    // Must cast req.json() to fix TS "unknown" errors
    const body = (await req.json()) as BookingRequestBody;

    const {
      name,
      daycareName,
      city,
      state,
      email,
      phone,
      preferredContact,
      servicesInterested = [],
      currentWebsite,
      currentGBP,
      timeline,
      message,
    } = body;

    // REQUIRED FIELDS CHECK (optional but recommended)
    if (!name || !email || !phone) {
      return NextResponse.json(
        { error: "Missing required fields: name, email, phone" },
        { status: 400 }
      );
    }

    // Ensure servicesInterested is always an array
    const servicesList = Array.isArray(servicesInterested)
      ? servicesInterested.join(", ")
      : "";

    // Email HTML content
    const html = `
      <h2>New Consultation Booking</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Daycare:</strong> ${daycareName || "N/A"}</p>
      <p><strong>City:</strong> ${city || "N/A"}</p>
      <p><strong>State:</strong> ${state || "N/A"}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Preferred Contact:</strong> ${preferredContact || "N/A"}</p>
      <p><strong>Services Interested:</strong> ${servicesList}</p>
      <p><strong>Current Website:</strong> ${currentWebsite || "N/A"}</p>
      <p><strong>GBP URL:</strong> ${currentGBP || "N/A"}</p>
      <p><strong>Timeline:</strong> ${timeline || "N/A"}</p>
      <p><strong>Message:</strong> ${message || "N/A"}</p>
    `;

    // Send email via MailChannels (Edge-compatible)
    const mailResponse = await fetch("https://api.mailchannels.net/tx/v1/send", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        personalizations: [
          {
            to: [{ email: process.env.ADMIN_EMAIL }],
          },
        ],
        from: {
          email: "team@digilift.ai",
          name: "DigiLift For Daycare",
        },
        subject: `New Booking Form Submission from ${name}`,
        content: [
          {
            type: "text/html",
            value: html,
          },
        ],
      }),
    });

    if (!mailResponse.ok) {
      const errorText = await mailResponse.text();
      throw new Error("MailChannels error: " + errorText);
    }

    return NextResponse.json(
      { success: true, message: "Email sent successfully" },
      { status: 200 }
    );

  } catch (error) {
    console.error("Email send error:", error);
    return NextResponse.json(
      { error: "Email failed to send" },
      { status: 500 }
    );
  }
}
