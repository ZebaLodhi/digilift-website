import { NextRequest, NextResponse } from "next/server";
import OpenAI from "openai";

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(request: NextRequest) {
  try {
    const { message = "", history = [] } = (await request.json()) as {
      message?: string;
      history?: Array<{ role: string; message: string }>;
    };

    const lower = message.toLowerCase();
    let reply: string | null = null;

    if (/(hi|hello|hey|good morning|good afternoon)/i.test(lower)) {
      reply = "Hi there! How can I help you today?";
    }

    if (!reply && (lower.includes("price") || lower.includes("pricing") || lower.includes("$"))) {
      const match = lower.match(/\$?(\d{2,4})/);
      const budget = match ? parseInt(match[1]) : null;

      if (budget) {
        if (budget < 500) {
          reply =
            "With your budget, the best option is our **Starter Visibility Boost ($497)**.\n\n" +
            "• Google Business Profile optimization\n" +
            "• Branding refresh\n" +
            "• Social setup";
        } else if (budget >= 500 && budget < 1200) {
          reply =
            `With **$${budget}**, you qualify for our **Essential Daycare Package ($997)**.\n\n` +
            "Includes SEO website, Google Business, branding, and reviews.";
        } else if (budget >= 1200 && budget < 3000) {
          reply =
            "Your budget fits our **Premium Growth Package ($1,497)** with advanced SEO + automation.";
        } else {
          reply =
            "For budgets above $3000, our **Elite Daycare Growth System ($2,497)** is ideal with full branding + website + ads + automation.";
        }
      } else {
        reply =
          "Our packages range from **$497 to $2,497**. Tell me your budget and I’ll recommend the best option!";
      }
    }

    if (!reply && lower.includes("website")) {
      reply = "Yes! We design modern, mobile-optimized websites for daycares.";
    }

    if (!reply && lower.includes("how long")) {
      reply = "Most projects take **7–14 days**, depending on the package.";
    }

    if (!reply && lower.includes("what do you offer")) {
      reply =
        "We help daycares grow through website design, branding, Google optimization, review automation, and more.";
    }

    if (!reply) {
      const completion = await client.chat.completions.create({
        model: "gpt-4o-mini",
        messages: [
          {
            role: "system",
            content:
              "You are DigiLift's AI assistant. You help daycare owners with pricing, websites, branding, and marketing.",
          },
          { role: "user", content: message },
        ],
        max_tokens: 200,
      });

      reply =
        completion.choices?.[0]?.message?.content ??
        "I'm here to help! Could you clarify your question?";
    }

    return NextResponse.json({
      reply,
      history: [...history, { role: "user", message }, { role: "bot", reply }],
    });
  } catch (error: any) {
    console.error("❌ Chat API Route Error:", error?.message || error);
    return NextResponse.json({ error: error?.message }, { status: 500 });
  }
}
