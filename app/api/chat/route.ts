import { NextRequest, NextResponse } from "next/server";
import OpenAI from "openai";

export const runtime = "edge"; // Faster & cheaper

export async function POST(request: NextRequest) {
  try {
    const apiKey = process.env.OPENAI_API_KEY;
    if (!apiKey) {
      return NextResponse.json(
        { error: "Chat is not configured" },
        { status: 500 }
      );
    }
    const client = new OpenAI({ apiKey });

    const { message } = await request.json();

    if (!message) {
      return NextResponse.json(
        { error: "Message is required" },
        { status: 400 }
      );
    }

    const response = await client.chat.completions.create({
      model: "gpt-4.1-mini",
      messages: [
        { role: "system", content: "You are the DigiLift AI assistant." },
        { role: "user", content: message },
      ],
      max_tokens: 200,
      temperature: 0.7,
    });

    const reply =
      response.choices?.[0]?.message?.content ||
      "Sorry, I couldn’t understand that.";

    return NextResponse.json({ reply });
  } catch (error: any) {
    console.error("Chat API error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
