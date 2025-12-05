import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

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

    // Nodemailer transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASS,
      },
    });

    // Email content
    const mailOptions = {
      from: process.env.GMAIL_USER,
      to: process.env.GMAIL_USER, // Sends to YOU
      subject: `New Booking Form Submission from ${name}`,
      html: `
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
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Email error:", error);
    return NextResponse.json({ error: "Email failed to send" }, { status: 500 });
  }
}
