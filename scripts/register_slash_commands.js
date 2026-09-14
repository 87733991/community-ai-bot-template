/**
 * Utility Script: Register Discord Slash Commands
 * Run: node scripts/register_slash_commands.js
 */

import "dotenv/config";

const appId = process.env.DISCORD_APP_ID;
const botToken = process.env.DISCORD_BOT_TOKEN;

if (!appId || !botToken) {
  console.error("❌ Error: DISCORD_APP_ID and DISCORD_BOT_TOKEN are required in .env");
  process.exit(1);
}

const commands = [
  {
    name: "ask",
    description: "Ask technical or coding questions powered by B-Lost Gateway",
    options: [
      {
        name: "question",
        description: "Your question or problem",
        type: 3, // STRING
        required: true,
      },
    ],
  },
  {
    name: "code",
    description: "Generate clean, production-ready code snippets",
    options: [
      {
        name: "prompt",
        description: "Describe what code you want to generate",
        type: 3, // STRING
        required: true,
      },
    ],
  },
  {
    name: "help",
    description: "Display community AI bot commands and usage guide",
  },
];

async function register() {
  console.log(`[*] Registering global slash commands for Application ID: ${appId}...`);
  const url = `https://discord.com/api/v10/applications/${appId}/commands`;

  try {
    const res = await fetch(url, {
      method: "PUT",
      headers: {
        "Authorization": `Bot ${botToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(commands),
    });

    if (!res.ok) {
      const err = await res.text();
      throw new Error(`Discord API returned ${res.status}: ${err}`);
    }

    const data = await res.json();
    console.log(`✅ SUCCESS! Registered ${data.length} global slash commands:`);
    data.forEach((cmd) => console.log(` • /${cmd.name} - ${cmd.description}`));
  } catch (err) {
    console.error("❌ Failed to register commands:", err.message);
  }
}

register();
