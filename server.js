/**
 * Standalone Local & Container Server Runner
 * Runs on Railway, Docker, or local machine: node server.js
 */

import http from "node:http";
import "dotenv/config";
import discordHandler from "./api/discord.js";
import telegramHandler from "./api/telegram.js";
import indexHandler from "./api/index.js";

const PORT = parseInt(process.env.PORT || "3000", 10);

// Minimal adapter to connect raw Node http to Vercel-style handlers
function adaptHandler(req, res, handler) {
  res.status = (code) => {
    res.statusCode = code;
    return res;
  };
  res.json = (data) => {
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify(data));
  };
  res.send = (body) => {
    res.end(body);
  };
  handler(req, res);
}

const server = http.createServer(async (req, res) => {
  const url = req.url.split("?")[0];

  if (url === "/api/discord") {
    return adaptHandler(req, res, discordHandler);
  }

  if (url === "/api/telegram") {
    // Parse JSON body for Telegram
    let body = "";
    req.on("data", (chunk) => { body += chunk; });
    req.on("end", () => {
      try { req.body = JSON.parse(body); } catch (_) { req.body = {}; }
      adaptHandler(req, res, telegramHandler);
    });
    return;
  }

  return adaptHandler(req, res, indexHandler);
});

server.listen(PORT, "0.0.0.0", () => {
  console.log("=".repeat(60));
  console.log(`🤖 B-Lost Community AI Bot Server running on http://0.0.0.0:${PORT}`);
  console.log(` • Discord Interactions URL: http://0.0.0.0:${PORT}/api/discord`);
  console.log(` • Telegram Webhook URL:    http://0.0.0.0:${PORT}/api/telegram`);
  console.log(` • Upstream Gateway:         ${process.env.BLOST_BASE_URL || "https://b-lost.com/v1"}`);
  console.log("=".repeat(60));
});
