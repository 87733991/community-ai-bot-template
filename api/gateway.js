/**
 * Community AI Bot Gateway Client
 * Compatible with OpenAI API format and B-Lost Relay Gateway (https://b-lost.com/v1)
 *
 * 100% Server Owner Sovereign & Customizable:
 * - BOT_NAME: Custom bot name (e.g. "React Helper", "Next.js Assistant")
 * - SYSTEM_PROMPT: Custom persona, tone, and directives
 * - COMMUNITY_RULES: Community moderation rules and behavioral guidelines
 * - COMMUNITY_KNOWLEDGE: Community-specific documentation, FAQs, and links
 * - DEFAULT_MODEL: Model switch (gemini-2.5-flash, deepseek-chat, claude-3-5-sonnet, etc.)
 */

function buildSystemPrompt() {
  const botName = process.env.BOT_NAME || "Community AI Assistant";
  let prompt = process.env.SYSTEM_PROMPT || 
    `You are ${botName}, a helpful, sharp, and production-ready assistant in this community. ` +
    `Deliver concise, high-quality answers and clean code snippets.`;

  const communityRules = process.env.COMMUNITY_RULES;
  if (communityRules && communityRules.trim()) {
    prompt += `\n\n[COMMUNITY RULES & GUIDELINES]:\n${communityRules.trim()}`;
  }

  const communityKnowledge = process.env.COMMUNITY_KNOWLEDGE;
  if (communityKnowledge && communityKnowledge.trim()) {
    prompt += `\n\n[COMMUNITY KNOWLEDGE BASE & FAQ]:\n${communityKnowledge.trim()}\n` +
      `Always reference the community knowledge base above when answering questions about this community's projects, resources, or rules.`;
  }

  return prompt;
}

export async function askGateway({ prompt, userName = "Community Member" }) {
  const baseUrl = (process.env.BLOST_BASE_URL || process.env.OPENAI_BASE_URL || "https://b-lost.com/v1").replace(/\/+$/, "");
  const apiKey = (process.env.BLOST_API_KEY || process.env.OPENAI_API_KEY || "").trim();
  const model = process.env.DEFAULT_MODEL || "gemini-3.8-flash";
  const maxTokens = parseInt(process.env.MAX_TOKENS || "800", 10);
  const temperature = parseFloat(process.env.TEMPERATURE || "0.3");

  if (!apiKey) {
    return {
      success: false,
      text: "⚠️ AI API Key is not configured! Please set `BLOST_API_KEY` in environment variables. Claim $10 starter credits at https://b-lost.com"
    };
  }

  const systemPrompt = buildSystemPrompt();

  try {
    const res = await fetch(`${baseUrl}/chat/completions`, {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${apiKey}`,
        "Content-Type": "application/json",
        "User-Agent": "Community-AI-Bot-Template/2.0"
      },
      body: JSON.stringify({
        model,
        messages: [
          { role: "system", content: systemPrompt },
          { role: "user", content: prompt }
        ],
        max_tokens: maxTokens,
        temperature
      })
    });

    if (!res.ok) {
      const errText = await res.text();
      return {
        success: false,
        text: `❌ Gateway Error (${res.status}): ${errText.slice(0, 150)}`
      };
    }

    const data = await res.json();
    const reply = data?.choices?.[0]?.message?.content || "No response generated.";

    return {
      success: true,
      text: reply
    };
  } catch (err) {
    return {
      success: false,
      text: `❌ Network connection error: ${err.message}`
    };
  }
}
