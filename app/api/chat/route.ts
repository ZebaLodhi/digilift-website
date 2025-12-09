import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body: { message?: string } = await request.json();
    const message = body.message ?? "";
    const lower = message.toLowerCase();

    let reply: string | null = null;

    return NextResponse.json({ reply });
  } catch (error) {
    console.error("Chat API error:", error);
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }
}
