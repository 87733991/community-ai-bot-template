/**
 * Root Status & Health Landing Page
 * Endpoint: /
 */

export default function handler(req, res) {
  const html = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>B-Lost Community AI Bot - Serverless Gateway</title>
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif; background: #0b0f19; color: #f1f5f9; display: flex; align-items: center; justify-content: center; height: 100vh; margin: 0; }
    .card { background: #1e293b; border: 1px solid #334155; padding: 36px; border-radius: 12px; max-width: 480px; text-align: center; box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.3); }
    h1 { margin-top: 0; font-size: 24px; color: #38bdf8; }
    p { color: #94a3b8; font-size: 14px; line-height: 1.6; }
    .status { display: inline-block; background: rgba(52, 211, 153, 0.15); color: #34d399; padding: 4px 12px; border-radius: 9999px; font-size: 12px; font-weight: 600; margin-bottom: 16px; }
    .links a { display: inline-block; margin: 8px 6px; padding: 8px 16px; background: #38bdf8; color: #0b0f19; text-decoration: none; border-radius: 6px; font-weight: 600; font-size: 13px; }
    .links a.outline { background: transparent; color: #38bdf8; border: 1px solid #38bdf8; }
  </style>
</head>
<body>
  <div class="card">
    <div class="status">🟢 SERVERLESS ENDPOINTS ACTIVE</div>
    <h1>B-Lost Community AI Assistant</h1>
    <p>Your self-hosted Discord & Telegram AI assistant is deployed and running smoothly on Vercel Serverless.</p>
    <div class="links">
      <a href="https://b-lost.com" target="_blank">Get B-Lost API Key</a>
      <a href="https://github.com" class="outline" target="_blank">View GitHub Repo</a>
    </div>
  </div>
</body>
</html>
  `;
  res.setHeader("Content-Type", "text/html; charset=utf-8");
  return res.status(200).send(html);
}
