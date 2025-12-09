import { NextResponse } from "next/server";

export const runtime = "edge"; // Required for Cloudflare Pages / Workers

export async function POST(req: Request) {
  try {
    const body = await req.json();

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
    } = body;

    // Email HTML
    const html = `
      <h2>New Consultation Booking</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Daycare:</strong> ${daycareName}</p>
      <p><strong>City:</strong> ${city}</p>
      <p><strong>State:</strong> ${state}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Preferred Contact:</strong> ${preferredContact}</p>
      <p><strong>Services Interested:</strong> ${servicesInterested.join(", ")}</p>
      <p><strong>Current Website:</strong> ${currentWebsite}</p>
      <p><strong>GBP URL:</strong> ${currentGBP}</p>
      <p><strong>Timeline:</strong> ${timeline}</p>
      <p><strong>Message:</strong> ${message}</p>
    `;

    // MailChannels request
    const mailResponse = await fetch("https://api.mailchannels.net/tx/v1/send", {
      method: "POST",
      headers: { "content-type": "application/json" },
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

    return NextResponse.json({ success: true }, { status: 200 });

  } catch (error) {
    console.error("Email send error:", error);
    return NextResponse.json(
      { error: "Email failed to send" },
      { status: 500 }
    );
  }
}
