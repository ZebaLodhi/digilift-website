
import { NextResponse } from "next/server";
import OpenAI from "openai";

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});
console.log("API KEY LOADED:", process.env.OPENAI_API_KEY ? "YES" : "NO");
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const message = body.message || "";
    const lower = message.toLowerCase();

    let reply: string | null = null;

    // --- RULE-BASED LOGIC (your custom business logic) ---

    // GREETINGS
    if (/(hi|hello|hey|good morning|good afternoon)/i.test(lower)) {
      reply = "Hi there! How can I help you today?";
    }

    // PRICING LOGIC — SMART PACKAGE RECOMMENDER
    if (!reply && (lower.includes("price") || lower.includes("pricing") || lower.includes("$"))) {
      const match = lower.match(/\$?(\d{2,4})/);
      const budget = match ? parseInt(match[1]) : null;

      if (budget) {
        if (budget < 500) {
          reply =
            "With your budget, the best option is our **Starter Visibility Boost ($497)**.\n\n" +
            "• Google Business Profile optimization\n" +
            "• Branding refresh\n" +
            "• Social setup\n\n" +
            "Perfect for quick visibility.";
        } else if (budget >= 500 && budget < 1200) {
          reply =
            `With **$${budget}**, you qualify for our **Essential Daycare Package ($997)**.\n\n` +
            "Includes:\n" +
            "• SEO-optimized website\n" +
            "• Branding system\n" +
            "• Google Business Profile\n" +
            "• Review system setup\n\n" +
            "You’re close — we also offer split payments.";
        } else if (budget >= 1200 && budget < 3000) {
          reply =
            "Great — your budget fits our **Premium Growth Package ($1,497)**.\n\n" +
            "Everything in Essential plus:\n" +
            "• Advanced SEO\n" +
            "• Automated booking system\n" +
            "• Review automation\n" +
            "• Social media templates";
        } else {
          reply =
            "For budgets above $3000, our **Elite Daycare Growth System ($2,497)** is ideal.\n\n" +
            "Includes:\n" +
            "• Full branding system\n" +
            "• Custom website\n" +
            "• Booking automation\n" +
            "• Google Ads setup\n" +
            "• Social content kit\n" +
            "• Ongoing optimization";
        }
      } else {
        reply =
          "Our packages range from **$497 to $2,497**. Tell me your budget and I’ll recommend the best option!";
      }
    }

    // FAQ LOGIC
    if (!reply && lower.includes("website")) {
      reply =
        "Yes! We design modern, mobile-optimized websites for daycares.\n\n" +
        "They include galleries, booking forms, SEO, and branding.";
    }

    if (!reply && lower.includes("how long")) {
      reply =
        "Most projects take **7–14 days**, depending on your package.";
    }

    if (!reply && lower.includes("what do you offer")) {
      reply =
        "We help daycares grow through:\n\n" +
        "• Website design\n" +
        "• Google Business optimization\n" +
        "• Branding\n" +
        "• Review automation\n" +
        "• Social presence\n\nAsk me more!";
    }

    // --- FALLBACK TO OPENAI WHEN NO RULE MATCH ---

    if (!reply) {
      const completion = await client.chat.completions.create({
        model: "gpt-4o-mini", // lightweight, fast, cheap
        messages: [
          {
            role: "system",
            content:
              "You are DigiLift's AI assistant. You help daycare owners understand pricing, websites, branding, and digital marketing. Be friendly, simple, and helpful.",
          },
          { role: "user", content: message },
        ],
        max_tokens: 200,
      });

      reply = completion.choices[0].message.content || 
              "I'm here to help! Could you please clarify your question?";
    }

    return NextResponse.json({
      reply,
      history: [...(body.history || []), { role: "user", message }, { role: "bot", reply }],
    });

  } catch (error: any) {
    console.error("❌ Chat API Route Error:", error?.message || error);
    return NextResponse.json(
      { reply: "Server error", error: error?.message },
      { status: 500 }
    );
  }
}
