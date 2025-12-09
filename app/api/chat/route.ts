import { NextRequest, NextResponse } from "next/server";
import OpenAI from "openai";

export const runtime = "edge"; // Fastest on Vercel

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY!,
});

// Allow GET to avoid 405 browser errors
export async function GET() {
  return NextResponse.json(
    { status: "ok", message: "Chat API is running" },
    { status: 200 }
  );
}

// Main POST handler used by DigiLift widget
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const message = body?.message;

    if (!message || typeof message !== "string") {
      return NextResponse.json(
        { error: "Message is required" },
        { status: 400 }
      );
    }

    // Send to GPT-4.1-mini
    const completion = await client.chat.completions.create({
      model: "gpt-4.1-mini",
      messages: [
        {
          role: "system",
          content:
            "You are DigiLift AI, a friendly assistant helping daycare owners understand website packages, pricing, branding, and Google Business optimization.",
        },
        { role: "user", content: message },
      ],
      max_tokens: 200,
    });

    const reply =
      completion.choices?.[0]?.message?.content ??
      "I'm sorry, I couldn't generate a reply.";

    return NextResponse.json({ reply }, { status: 200 });
  } catch (err) {
    console.error("Chat API error:", err);

    return NextResponse.json(
      { error: "Chat API failed" },
      { status: 500 }
    );
  }
}
