"use client";

import { useEffect } from "react";

export default function Chatbot() {
  useEffect(() => {
    console.log("Chatbot component mounted");

    if (document.getElementById("chatbot-script")) {
      console.log("Chatbot script already loaded");
      return;
    }

    const script = document.createElement("script");
    script.id = "chatbot-script";
    script.src = "/chatbot.js";
    script.async = true;

    script.onload = () => console.log("Chatbot script loaded");
    script.onerror = () => console.error("Chatbot failed to load");

    document.body.appendChild(script);
  }, []);

  return null;
}
