<div align="center">

# 🤖 Community AI Assistant (Discord & Telegram)
### 1-Click 0$ Serverless Community Bot | 100% Brand DIY & Sovereign

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/87733991/community-ai-bot-template&env=BLOST_API_KEY,DISCORD_APP_ID,DISCORD_PUBLIC_KEY,DISCORD_BOT_TOKEN&envDescription=Get%20your%20free%20API%20Key%20at%20https://b-lost.com&project-name=my-community-ai-bot&repository-name=my-community-ai-bot)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Gateway: B-Lost](https://img.shields.io/badge/Gateway-B--Lost%20Relay-emerald)](https://b-lost.com)

*Deploy an enterprise-grade, customizable AI assistant to your Discord server or Telegram community in under 3 minutes with $0 server costs.*

---

### 🌐 Select Language / 語言選擇 / 语言选择 / 言語 / Langue / Язык / Ngôn ngữ

**[English](#-english)** | **[繁體中文](#-繁體中文)** | **[简体中文](#-简体中文)** | **[日本語](#-日本語)** | **[Français](#-français)** | **[Русский](#-русский)** | **[Tiếng Việt](#-tiếng-việt)**

---

</div>

## 🛠️ Environment Variables Configuration (DIY Settings)

| Variable | Required | Description | Default |
| :--- | :---: | :--- | :--- |
| `BLOST_API_KEY` | **Yes** | Your API Key from [b-lost.com](https://b-lost.com) (Claim $10 free credits) | — |
| `BLOST_BASE_URL` | No | OpenAI-compatible Gateway endpoint | `https://b-lost.com/v1` |
| `DEFAULT_MODEL` | No | Model routing (`gemini-2.5-flash`, `deepseek-chat`, `claude-3-5-sonnet`) | `gemini-2.5-flash` |
| `BOT_NAME` | No | Custom display name of your bot | `Community AI Assistant` |
| `SYSTEM_PROMPT` | No | Custom persona, instructions, and behavior rules | *Developer Assistant* |
| `COMMUNITY_RULES` | No | Server moderation rules (bot references these for rule queries) | — |
| `COMMUNITY_KNOWLEDGE` | No | Community FAQ, doc links, and pinned guidelines | — |
| `ENABLE_FOOTER` | No | Toggle subtle footer attribution (`true` / `false`) | `true` |
| `CUSTOM_FOOTER` | No | Custom footer text or sponsor message | `⚡ Powered by [B-Lost Gateway](https://b-lost.com)` |
| `DISCORD_APP_ID` | Discord | Application Client ID from Discord Dev Portal | — |
| `DISCORD_PUBLIC_KEY`| Discord | Ed25519 Public Key for cryptographic request verification | — |
| `DISCORD_BOT_TOKEN` | Discord | Bot token for command registration | — |
| `TELEGRAM_BOT_TOKEN`| Telegram| Bot token from [@BotFather](https://t.me/BotFather) | — |
| `MAX_TOKENS` | No | Maximum tokens per response | `800` |
| `TEMPERATURE` | No | Model temperature (0.0 - 1.0) | `0.3` |

---

<a name="-english"></a>
## 🇬🇧 English

### ⚡ Highlights & Architecture
- 💸 **$0 Infrastructure Cost**: 100% Serverless architecture running on Vercel's free tier. No 24/7 VPS bills.
- 👑 **100% Brand Sovereignty (DIY)**: Completely white-labeled. Customize your bot name (`BOT_NAME`), avatar, and instructions (`SYSTEM_PROMPT`).
- 📚 **Built-in Community Knowledge Base**: Inject your server rules (`COMMUNITY_RULES`) and FAQ (`COMMUNITY_KNOWLEDGE`) directly via environment variables.
- 🔄 **Flexible Model Switcher**: Use `gemini-2.5-flash` for high-speed casual chats, or switch to `deepseek-chat` / `claude-3-5-sonnet` for technical communities.
- 🛡️ **Zero Maintenance**: Built on Discord Interactions HTTP Webhooks & Telegram Webhooks. Never crashes, never disconnects.
- 🔌 **OpenAI-Compatible & B-Lost Optimized**: Pre-configured for B-Lost Gateway (80% pricing, $10 starter credits), but compatible with any OpenAI endpoint.

### 🚀 3-Minute Quick Start (Discord)
1. **Get Free API Key**: Register at [b-lost.com](https://b-lost.com) and claim your free $10 starter credits.
2. **Create Discord Application**:
   - Visit [Discord Developer Portal](https://discord.com/developers/applications) ➔ **New Application**.
   - Copy `APPLICATION ID` and `PUBLIC KEY` in General Information.
   - In **Bot** tab: Click **Reset Token** and copy `BOT TOKEN`. Enable **Message Content Intent**.
   - In **OAuth2 ➔ URL Generator**: Select scopes `bot`, `applications.commands` and permissions `Send Messages`, `Embed Links`. Open URL to invite the bot.
3. **1-Click Deploy to Vercel**:
   - Click the **Deploy with Vercel** button above.
   - Enter `BLOST_API_KEY`, `DISCORD_APP_ID`, `DISCORD_PUBLIC_KEY`, and `DISCORD_BOT_TOKEN`.
   - Optionally customize `BOT_NAME`, `COMMUNITY_KNOWLEDGE`, and `DEFAULT_MODEL`.
   - Click **Deploy** and obtain your deployment URL (e.g., `https://my-bot.vercel.app`).
4. **Link Discord Interactions Webhook & Register Commands**:
   - In Discord Developer Portal ➔ **General Information**, set **Interactions Endpoint URL** to:  
     `https://my-bot.vercel.app/api/discord`
   - Run the command registration locally or in terminal:
     ```bash
     npm install
     DISCORD_APP_ID="your_id" DISCORD_BOT_TOKEN="your_token" npm run register-commands
     ```
   - Done! Type `/ask` in your server to start chatting!

---

<a name="-繁體中文"></a>
## 🇹🇼 繁體中文

### ⚡ 特色亮點與群主專屬 DIY
- 💸 **零伺服器成本**：100% 基於 Vercel 無伺服器（Serverless）架構運行，免租用 VPS 主機，享受完全免費託管。
- 👑 **100% 群主品牌自主權**：徹底白標化，群主可自由自定義機器人名稱（`BOT_NAME`）、頭像與人設指令（`SYSTEM_PROMPT`）。
- 📚 **自帶輕量社群知識庫**：可直接在環境變數注入群規（`COMMUNITY_RULES`）與常見 FAQ（`COMMUNITY_KNOWLEDGE`），免架設向量資料庫。
- 🔄 **彈性多模型切換**：休閒水群可用超快超省的 `gemini-2.5-flash`，技術或深度邏輯群可一鍵切換至 `deepseek-chat` 或 `claude-3-5-sonnet`。
- 🛡️ **免維護高可用**：採用 Discord Interactions HTTP Webhook 規範，告別傳統 WebSocket 斷線重連煩惱。
- 🔌 **預設對接 B-Lost 網關**：享有官方 8 折優惠與 $10 免費啟動金，同時相容所有標準 OpenAI API 格式。

### 🚀 3 分鐘極速部署（Discord）
1. **取得 API 金鑰**：前往 [b-lost.com](https://b-lost.com) 免費領取 $10 免費額度的 API Key。
2. **建立 Discord 機器人憑證**：
   - 登入 [Discord 開發者後台](https://discord.com/developers/applications) ➔ 點擊 **New Application**。
   - 在 **General Information** 頁面複製 `APPLICATION ID` 與 `PUBLIC KEY`。
   - 切換至 **Bot** 標籤頁：點擊 **Reset Token** 並複製 `BOT TOKEN`，勾選啟用 **Message Content Intent**。
   - 進入 **OAuth2 ➔ URL Generator**：勾選 `bot`、`applications.commands` 範圍，開啟邀請連結拉入伺服器。
3. **Vercel 一鍵部署**：
   - 點擊本頁頂部的 **Deploy with Vercel** 按鈕。
   - 依序填入 `BLOST_API_KEY`、`DISCORD_APP_ID`、`DISCORD_PUBLIC_KEY`、`DISCORD_BOT_TOKEN`。
   - 點擊 **Deploy** 完成部署，取得線上網址（例如 `https://my-bot.vercel.app`）。
4. **設定回調網址並註冊指令**：
   - 回到 Discord 開發者後台 ➔ **General Information**，在 **Interactions Endpoint URL** 欄位貼上：  
     `https://my-bot.vercel.app/api/discord`
   - 執行指令同步全域 Slash 命令：
     ```bash
     npm install
     DISCORD_APP_ID="你的ID" DISCORD_BOT_TOKEN="你的Token" npm run register-commands
     ```
   - 部署完成！在群聊中發送 `/ask` 即可暢快體驗。

---

<a name="-简体中文"></a>
## 🇨🇳 简体中文

### ⚡ 核心亮点与群主专属 DIY
- 💸 **0 元服务器成本**：100% 基于 Vercel Serverless 无服务器架构，彻底告别每月 VPS 托管账单。
- 👑 **100% 群主品牌自主权**：完全白标，支持自定义机器人名称（`BOT_NAME`）、头像及人设 Prompt（`SYSTEM_PROMPT`）。
- 📚 **轻量级社区知识库**：通过环境变量直接注入群规（`COMMUNITY_RULES`）与常见问题解答（`COMMUNITY_KNOWLEDGE`）。
- 🔄 **灵活模型切换**：日常闲聊推荐极速高性价比的 `gemini-2.5-flash`，技术/逻辑社群可一键切换 `deepseek-chat` 或 `claude-3-5-sonnet`。
- 🛡️ **零维护高可用**：基于 Discord Interactions HTTP Webhook，无需常驻守护进程，永不掉线。
- 🔌 **全面兼容 OpenAI 格式**：默认预配置 B-Lost 官方 8 折中转网关（注册即赠 $10 额度），亦可无缝切换任意兼容端点。

### 🚀 3 分钟极速上手（Discord）
1. **获取 API Key**：访问 [b-lost.com](https://b-lost.com) 注册并领取 $10 免费启动额度。
2. **创建 Discord 机器人**：
   - 在 [Discord 开发者后台](https://discord.com/developers/applications) 新建应用。
   - 复制 `APPLICATION ID` 和 `PUBLIC KEY`。
   - 在 **Bot** 页面重置并复制 `BOT TOKEN`，开启 **Message Content Intent**。
   - 在 **OAuth2 ➔ URL Generator** 勾选 `bot` 及 `applications.commands` 权限生成邀请链接。
3. **一键部署至 Vercel**：
   - 点击顶部的 **Deploy with Vercel** 按钮。
   - 填入环境变量 `BLOST_API_KEY`、`DISCORD_APP_ID`、`DISCORD_PUBLIC_KEY`、`DISCORD_BOT_TOKEN`。
   - 点击 **Deploy** 获取在线域名（如 `https://my-bot.vercel.app`）。
4. **填写回调地址并注册指令**：
   - 在 Discord 后台的 **Interactions Endpoint URL** 填入：  
     `https://my-bot.vercel.app/api/discord`
   - 同步全局 Slash 命令：
     ```bash
     npm install
     DISCORD_APP_ID="你的ID" DISCORD_BOT_TOKEN="你的Token" npm run register-commands
     ```
   - 部署完成！在群聊中发送 `/ask` 即可畅快体验。

---

<a name="-日本語"></a>
## 🇯🇵 日本語

### ⚡ 主な特徴とカスタマイズ機能
- 💸 **サーバー費用完全無料**：VercelのServerless基盤を活用し、24時間常駐VPSの月額コストをゼロに削減。
- 👑 **100% ブランド主権（白標対応）**：ボット名（`BOT_NAME`）、アイコン、システムプロンプト（`SYSTEM_PROMPT`）を自由に設定可能。
- 📚 **コミュニティ専用ナレッジベース**：サーバーのルール（`COMMUNITY_RULES`）やFAQ（`COMMUNITY_KNOWLEDGE`）を環境変数から直接注入。
- 🔄 **モデルのワンタッチ切り替え**：日常会話には高速な `gemini-2.5-flash`、高度な技術質問には `deepseek-chat` や `claude-3-5-sonnet` を選択可能。
- 🛡️ **メンテナンスフリー**：Discord Interactions HTTP Webhook 仕様を採用し、プロセスクラッシュの心配なし。

---

<a name="-français"></a>
## 🇫🇷 Français

### ⚡ Points Forts et Personnalisation
- 💸 **Coût d'Hébergement 0 €** : Architecture 100% Serverless sur Vercel. Aucun frais de VPS mensuel.
- 👑 **Souveraineté Totale de la Marque** : Personnalisez entièrement le nom (`BOT_NAME`), l'avatar et les instructions (`SYSTEM_PROMPT`).
- 📚 **Base de Connaissances Intégrée** : Injectez directement vos règles de communauté (`COMMUNITY_RULES`) et votre FAQ (`COMMUNITY_KNOWLEDGE`).
- 🔄 **Sélecteur de Modèles Flexible** : Basculez facilement entre `gemini-2.5-flash`, `deepseek-chat` et `claude-3-5-sonnet`.
- 🛡️ **Zéro Maintenance** : Basé sur les Webhooks HTTP Discord. Ne plante jamais.

---

<a name="-русский"></a>
## 🇷🇺 Русский

### ⚡ Преимущества и Кастомизация
- 💸 **100% Бесплатный хостинг** : Полностью бессерверная архитектура на бесплатном тарифе Vercel.
- 👑 **100% Контроль над брендом** : Настройте собственное имя бота (`BOT_NAME`), аватар и системные инструкции (`SYSTEM_PROMPT`).
- 📚 **Встроенная база знаний сообщества** : Добавляйте правила сервера (`COMMUNITY_RULES`) и FAQ (`COMMUNITY_KNOWLEDGE`) через переменные окружения.
- 🔄 **Гибкий выбор модели** : Используйте `gemini-2.5-flash` для общения или `deepseek-chat` / `claude-3-5-sonnet` для сложных задач.
- 🛡️ **Не требует обслуживания** : Построен на HTTP Webhook API Discord.

---

<a name="-tiếng-việt"></a>
## 🇻🇳 Tiếng Việt

### ⚡ Điểm Nổi Bật & Tùy Biến
- 💸 **Chi Phí Máy Chủ 0đ** : Kiến trúc Serverless 100% chạy trên gói miễn phí của Vercel.
- 👑 **Chủ Quyền Thương Hiệu 100%** : Tùy chỉnh tên bot (`BOT_NAME`), ảnh đại diện và câu lệnh hướng dẫn (`SYSTEM_PROMPT`).
- 📚 **Tích Hợp Cơ Sở Tri Thức Cộng Đồng** : Nhập trực tiếp quy tắc nhóm (`COMMUNITY_RULES`) và câu hỏi thường gặp (`COMMUNITY_KNOWLEDGE`).
- 🔄 **Chuyển Đổi Mô Hình Linh Hoạt** : Chọn `gemini-2.5-flash` cho phản hồi nhanh hoặc `deepseek-chat` / `claude-3-5-sonnet` cho lập trình chuyên sâu.
- 🛡️ **Không Cần Bảo Trì** : Dựa trên Discord Interactions HTTP Webhook.

---

## 📄 License

Distributed under the MIT License. Supported by [B-Lost Platform](https://b-lost.com).
