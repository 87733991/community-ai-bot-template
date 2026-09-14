/**
 * Vercel Serverless Function: Telegram Webhook Handler
 * Endpoint: /api/telegram
 */

import { askGateway } from "./gateway.js";

function getFooter() {
  const enableFooter = (process.env.ENABLE_FOOTER ?? "true").toLowerCase() !== "false";
  if (!enableFooter) return "";
  const customFooter = process.env.CUSTOM_FOOTER || "⚡ Powered by [B-Lost Gateway](https://b-lost.com)";
  return `\n\n────────────────────\n${customFooter}`;
}

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed. Use POST." });
  }

  const tgToken = process.env.TELEGRAM_BOT_TOKEN;
  if (!tgToken) {
    return res.status(500).json({ error: "TELEGRAM_BOT_TOKEN is not configured." });
  }

  const update = req.body || {};
  const message = update.message || update.edited_message;

  if (!message || !message.text) {
    return res.status(200).send("OK");
  }

  const chatId = message.chat.id;
  const userText = message.text.trim();
  const userName = message.from?.first_name || message.from?.username || "Friend";
  const botName = process.env.BOT_NAME || "Community AI Assistant";

  // Handle /start or /help command with welcome greeting
  if (userText.startsWith("/start") || userText.startsWith("/help")) {
    const welcome = 
      `👋 *Hello ${userName}!* I'm ${botName}.\n\n` +
      `Send me any question or debug query, and I'll generate clean solutions!${getFooter()}`;

    await sendTelegramMessage(tgToken, chatId, welcome);
    return res.status(200).send("OK");
  }

  // Generate answer
  const result = await askGateway({ prompt: userText, userName });
  const reply = `${result.text}${getFooter()}`;

  await sendTelegramMessage(tgToken, chatId, reply);
  return res.status(200).send("OK");
}

async function sendTelegramMessage(token, chatId, text) {
  try {
    await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: chatId,
        text: text,
        parse_mode: "Markdown",
        disable_web_page_preview: true
      })
    });
  } catch (err) {
    console.error("Failed to send Telegram message:", err);
  }
}
