const nodemailer = require("nodemailer");

// Google Workspace SMTP Relay transporter (NO AUTH REQUIRED)
const transporter = nodemailer.createTransport({
  host: "smtp-relay.gmail.com",
  port: 587,
  secure: false, // must be false for port 587
  tls: {
    rejectUnauthorized: false,
  },
});

async function sendTest() {
  try {
    const info = await transporter.sendMail({
      from: "team@digilift.ai",   // must be your Workspace domain
      to: "youremail@gmail.com", // test email address
      subject: "Google Workspace SMTP Relay Test ✔",
      text: "This confirms your SMTP Relay setup is working correctly.",
    });

    console.log("Email sent successfully!");
    console.log("Message ID:", info.messageId);
  } catch (error) {
    console.error("❌ SMTP Test Failed");
    console.error(error);
  }
}

sendTest();
