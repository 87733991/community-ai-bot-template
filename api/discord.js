/**
 * Vercel Serverless Function: Discord Interactions Webhook Handler
 * Endpoint: /api/discord
 */

import { verifyKey, InteractionType, InteractionResponseType } from "discord-interactions";
import { askGateway } from "./gateway.js";

export const config = {
  api: {
    bodyParser: false, // Required for raw body Ed25519 verification
  },
};

// Helper to read raw request body
async function getRawBody(req) {
  const chunks = [];
  for await (const chunk of req) {
    chunks.push(typeof chunk === "string" ? Buffer.from(chunk) : chunk);
  }
  return Buffer.concat(chunks);
}

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed. Use POST." });
  }

  const clientPublicKey = process.env.DISCORD_PUBLIC_KEY;
  if (!clientPublicKey) {
    console.error("DISCORD_PUBLIC_KEY is not set!");
    return res.status(500).json({ error: "Server misconfigured: DISCORD_PUBLIC_KEY is missing." });
  }

  const signature = req.headers["x-signature-ed25519"];
  const timestamp = req.headers["x-signature-timestamp"];
  const rawBody = await getRawBody(req);

  // 1. Verify Discord Ed25519 signature
  const isValidRequest = verifyKey(rawBody, signature, timestamp, clientPublicKey);
  if (!isValidRequest) {
    return res.status(401).send("Invalid request signature");
  }

  const message = JSON.parse(rawBody.toString("utf-8"));

  // 2. Handle Discord PING / Verification handshake
  if (message.type === InteractionType.PING) {
    return res.status(200).json({ type: InteractionResponseType.PONG });
  }

  // 3. Handle Slash Commands (/ask <question>)
  if (message.type === InteractionType.APPLICATION_COMMAND) {
    const { name, options } = message.data;

    if (name === "ask" || name === "code") {
      const questionOption = options?.find((opt) => opt.name === "question" || opt.name === "prompt");
      const userPrompt = questionOption ? questionOption.value : "Hello!";
      const callerName = message.member?.user?.username || message.user?.username || "Developer";

      // Query B-Lost Gateway
      const result = await askGateway({ prompt: userPrompt, userName: callerName });

      const replyContent = 
        `${result.text}\n\n` +
        `────────────────────────────\n` +
        `💡 *如有需要我也能為你解答我們的業務*\n` +
        `🎁 *註冊即送 $10，每日消費前 10 名再送 $10：[b-lost.com](https://b-lost.com)*`;

      return res.status(200).json({
        type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
        data: {
          content: replyContent,
        },
      });
    }

    if (name === "help") {
      return res.status(200).json({
        type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
        data: {
          content: 
            `### 🤖 B-Lost Community AI Assistant\n` +
            `- \`/ask <question>\`: Ask technical, architecture, or syntax questions.\n` +
            `- \`/code <prompt>\`: Generate clean, production-ready code snippets.\n\n` +
            `👉 *Self-hosted on Vercel | Endpoints powered by [b-lost.com](https://b-lost.com)*`,
        },
      });
    }
  }

  return res.status(400).json({ error: "Unknown interaction type" });
}
