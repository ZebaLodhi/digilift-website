// -------------------------
// Environment + Imports
// -------------------------
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const OpenAI = require("openai");
const Stripe = require("stripe");
const { createOrder, captureOrder } = require("./paypal");

const app = express();

// -------------------------
// CORS
// -------------------------
app.use(
  cors({
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  })
);

// -------------------------------------------------------
// ⚠️ STRIPE WEBHOOK MUST COME BEFORE express.json()
// -------------------------------------------------------
app.post(
  "/api/stripe/webhook",
  express.raw({ type: "application/json" }),
  (req, res) => {
    const stripe = Stripe(process.env.STRIPE_SECRET_KEY);
    const sig = req.headers["stripe-signature"];

    let event;

    try {
      event = stripe.webhooks.constructEvent(
        req.body,
        sig,
        process.env.STRIPE_WEBHOOK_SECRET
      );
    } catch (err) {
      console.error("❌ Webhook signature verification failed:", err.message);
      return res.status(400).send(`Webhook Error: ${err.message}`);
    }

    if (event.type === "checkout.session.completed") {
      const session = event.data.object;
      console.log("✅ Payment completed:", session);
    }

    res.json({ received: true });
  }
);

// -------------------------------------------------------
// After webhook → enable JSON parser
// -------------------------------------------------------
app.use(express.json());

// -------------------------
// Initialize OpenAI (NEW Responses API)
// -------------------------
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// -------------------------
// Price Utility
// -------------------------
function getBookingPrice(payload) {
  const raw = payload.rawPrice || "0"; // "$1,497"
  const clean = raw.replace(/[^0-9.]/g, ""); // "1497"
  return clean.length ? clean : "0";
}

const stripe = Stripe(process.env.STRIPE_SECRET_KEY);
const toStripeAmount = (value) => Math.round(parseFloat(value) * 100);

// -------------------------
// Health Check
// -------------------------
app.get("/api/health", (_, res) => {
  res.json({ ok: true });
});

// -------------------------
// ⭐ NEW AI CHATBOT (Upgraded)
// -------------------------
app.post("/api/chat", async (req, res) => {
  try {
    const { message, history } = req.body;

    if (!message || typeof message !== "string") {
      return res.status(400).json({ error: "Message is required." });
    }

    // Build conversation context
    const conversation = [
      {
        role: "system",
        content: "You are a friendly, knowledgeable AI assistant for this website. Respond clearly and helpfully.",
      },
      ...(Array.isArray(history) ? history : []),
      { role: "user", content: message },
    ];

    // NEW Responses API call
    const response = await openai.responses.create({
      model: "gpt-4.1-mini",
      input: conversation.map((m) => `${m.role}: ${m.content}`).join("\n\n"),
    });

    const reply = response.output_text || "Sorry, I couldn't generate a response.";

    // Updated history
    const newHistory = [
      ...(Array.isArray(history) ? history : []),
      { role: "user", content: message },
      { role: "assistant", content: reply },
    ];

    res.json({ reply, history: newHistory });
  } catch (err) {
    console.error("Chatbot error:", err);
    res.status(500).json({ error: "Failed to process chat request." });
  }
});

// -------------------------
// PayPal Routes
// -------------------------
app.post("/api/paypal/orders", async (req, res) => {
  try {
    const amount = getBookingPrice(req.body);
    const order = await createOrder({ amount, currency: "USD" });
    res.json({ id: order.id });
  } catch (e) {
    console.error(e.response?.data || e.message);
    res.status(500).json({ error: "Failed to create PayPal order" });
  }
});

app.post("/api/paypal/orders/:id/capture", async (req, res) => {
  try {
    const capture = await captureOrder(req.params.id);
    res.json(capture);
  } catch (e) {
    console.error(e.response?.data || e.message);
    res.status(500).json({ error: "Failed to capture PayPal order" });
  }
});

// -------------------------
// Stripe PaymentIntent
// -------------------------
app.post("/api/stripe/payment-intent", async (req, res) => {
  try {
    const amountStr = getBookingPrice(req.body);
    const amount = toStripeAmount(amountStr);

    const metadata = {
      serviceId: req.body.serviceId,
      customerName: req.body.customerName,
      customerEmail: req.body.customerEmail,
      timestamp: new Date().toISOString(),
    };

    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency: "usd",
      description: "Booking Payment",
      metadata,
      automatic_payment_methods: { enabled: true },
    });

    res.json({ success: true, clientSecret: paymentIntent.client_secret });
  } catch (err) {
    console.error("Stripe PaymentIntent Error:", err);
    res.status(500).json({
      success: false,
      error: "PaymentIntent creation failed",
      details: err.message,
    });
  }
});

// -------------------------
// Stripe Checkout Session
// -------------------------
app.post("/api/stripe/checkout-session", async (req, res) => {
  try {
    const amountStr = getBookingPrice(req.body);
    const amount = toStripeAmount(amountStr);

    const metadata = {
      serviceId: req.body.serviceId,
      customerName: req.body.customerName,
      customerEmail: req.body.customerEmail,
      createdAt: new Date().toISOString(),
    };

    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      payment_method_types: ["card"],
      line_items: [
        {
          price_data: {
            currency: "usd",
            product_data: { name: req.body.serviceId },
            unit_amount: amount,
          },
          quantity: 1,
        },
      ],
      success_url: "http://localhost:3000/success",
      cancel_url: "http://localhost:3000/cancel",
      metadata,
      customer_email: req.body.customerEmail,
    });

    res.json({ url: session.url });
  } catch (err) {
    console.error("Stripe Checkout Error:", err);
    res.status(500).json({
      success: false,
      error: "Failed to create checkout session",
      details: err.message,
    });
  }
});

// -------------------------
// Start Server
// -------------------------
app.listen(3001, () =>
  console.log("API running at http://localhost:3001")
);
