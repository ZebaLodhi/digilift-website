// Prevent duplicate loading
if (!window.__chatbotLoaded) {
  window.__chatbotLoaded = true;

  // Create root container
  let root = document.getElementById("chatbot-root");
  if (!root) {
    root = document.createElement("div");
    root.id = "chatbot-root";
    document.body.appendChild(root);
  }

  // Basic bubble + box styles WITH PURE CSS (no Tailwind)
  root.innerHTML = `
    <style>
      #chatbot-btn {
        position: fixed;
        bottom: 25px;
        right: 25px;
        width: 65px;
        height: 65px;
        background: #F9B639; /* Yellow */
        color: #000;
        font-size: 30px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        box-shadow: 0 4px 12px rgba(0,0,0,0.2);
        z-index: 999999;
      }

      #chatbox {
        position: fixed;
        bottom: 100px;
        right: 25px;
        width: 330px;
        height: 450px;
        background: white;
        border: 1px solid #ccc;
        border-radius: 12px;
        display: none;
        flex-direction: column;
        padding: 12px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.2);
        z-index: 999999;
      }

      #chatbox-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-weight: bold;
        padding-bottom: 8px;
        border-bottom: 1px solid #eee;
      }

      #chat-messages {
        flex: 1;
        margin-top: 10px;
        overflow-y: auto;
      }

      .message-bubble {
        padding: 8px 12px;
        border-radius: 10px;
        margin-bottom: 6px;
        max-width: 80%;
        display: inline-block;
      }

      .user {
        background: #F9B639 !important; /* Yellow */
        color: #000 !important;
        align-self: flex-end;
      }

      .bot {
        background: #eee;
        color: #333;
        align-self: flex-start;
      }

      #chat-input {
        width: 100%;
        padding: 8px;
        border-radius: 8px;
        border: 1px solid #ddd;
      }

      #chat-send {
        margin-top: 8px;
        width: 100%;
        padding: 10px;
        background: #F9B639; /* Yellow */
        color: #000;
        border-radius: 8px;
        cursor: pointer;
        font-weight: 600;
      }
    </style>

    <div id="chatbot-btn">💬</div>

    <div id="chatbox">
      <div id="chatbox-header">
        DigiLift Assistant
        <span id="chat-close" style="cursor:pointer;">×</span>
      </div>

      <div id="chat-messages"></div>

      <input id="chat-input" placeholder="Ask me anything..." />
      <button id="chat-send">Send</button>
    </div>
  `;

  // Elements
  const btn = document.getElementById("chatbot-btn");
  const box = document.getElementById("chatbox");
  const closeBtn = document.getElementById("chat-close");
  const sendBtn = document.getElementById("chat-send");
  const input = document.getElementById("chat-input");
  const messages = document.getElementById("chat-messages");

  // Toggle visibility
  btn.onclick = () => (box.style.display = "flex");
  closeBtn.onclick = () => (box.style.display = "none");

  let chatHistory = [];

  function addMessage(text, sender) {
    const bubble = document.createElement("div");
    bubble.classList.add("message-bubble", sender);
    bubble.innerText = text;
    messages.appendChild(bubble);
    messages.scrollTop = messages.scrollHeight;
  }

  async function sendMessage() {
    const text = input.value.trim();
    if (!text) return;

    addMessage(text, "user");
    input.value = "";

    const res = await fetch("/api/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: text, history: chatHistory }),
    });

    const data = await res.json();
    addMessage(data.reply, "bot");
    chatHistory = data.history;
  }

  sendBtn.onclick = sendMessage;
  input.addEventListener("keypress", (e) => {
    if (e.key === "Enter") sendMessage();
  });
}
