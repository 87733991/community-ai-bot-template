<div align="center">

# 🤖 Community AI Assistant (Discord & Telegram)
### 1-Click Serverless Community Bot Powered by [B-Lost Gateway](https://b-lost.com)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/87733991/community-ai-bot-template&env=BLOST_API_KEY,DISCORD_PUBLIC_KEY,DISCORD_BOT_TOKEN&envDescription=Get%20your%20free%20B-Lost%20API%20Key%20at%20https://b-lost.com&project-name=my-community-ai-bot&repository-name=my-community-ai-bot)
[![Deploy on Railway](https://railway.com/button.svg)](https://railway.com/template)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Gateway: B-Lost](https://img.shields.io/badge/Gateway-B--Lost%20Relay-emerald)](https://b-lost.com)

*Deploy a sub-second, enterprise-grade AI coding assistant to your Discord server or Telegram group in under 3 minutes with $0 server costs.*

---

### 🌐 Select Language / 語言選擇 / 언어 / Langue / Язык / Ngôn ngữ

**[English](#-english)** | **[繁體中文](#-繁體中文)** | **[简体中文](#-简体中文)** | **[日本語](#-日本語)** | **[Français](#-français)** | **[Русский](#-русский)** | **[Tiếng Việt](#-tiếng-việt)**

---

</div>

## 🛠️ Environment Variables Configuration (All Languages)

| Variable | Required | Description | Default |
| :--- | :---: | :--- | :--- |
| `BLOST_BASE_URL` | No | B-Lost OpenAI-compatible endpoint | `https://b-lost.com/v1` |
| `BLOST_API_KEY` | **Yes** | Your API Key from [b-lost.com](https://b-lost.com) (Claim $10 free starter credits) | — |
| `DEFAULT_MODEL` | No | Default model routing | `gemini-2.5-flash` |
| `DISCORD_APP_ID` | Discord | Application Client ID from Discord Dev Portal | — |
| `DISCORD_PUBLIC_KEY`| Discord | Ed25519 Public Key for cryptographic request verification | — |
| `DISCORD_BOT_TOKEN` | Discord | Bot token for command registration | — |
| `TELEGRAM_BOT_TOKEN`| Telegram| Bot token from [@BotFather](https://t.me/BotFather) | — |
| `MAX_TOKENS` | No | Maximum completion tokens per response | `800` |
| `SYSTEM_PROMPT` | No | Custom persona and behavior rules | *Technical Assistant* |

---

<a name="-english"></a>
## 🇬🇧 English

### ⚡ Highlights & Architecture
- 💸 **$0 Infrastructure Cost**: 100% Serverless architecture running on Vercel's free tier. No 24/7 VPS bills.
- ⚡ **Sub-Second Global Latency**: Directly routed through [B-Lost Relay Gateway](https://b-lost.com) with global edge routing.
- 🛡️ **Zero Maintenance**: Built on Discord Interactions HTTP Webhooks & Telegram Webhooks. Never crashes, never disconnects.
- 🔒 **Model Masking & Guardrails**: Built-in identity protection ensures the bot identifies strictly as the B-Lost Community Assistant and never leaks internal models or version numbers.
- 🌐 **Dual Platform**: One codebase handles both Discord Slash Commands (`/ask`, `/code`) and Telegram group chats.

### 🚀 3-Minute Quick Start (Discord)
1. **Get Free API Key**: Register at [b-lost.com](https://b-lost.com) and claim your free starter credits.
2. **Create Discord Application**:
   - Visit [Discord Developer Portal](https://discord.com/developers/applications) ➔ **New Application**.
   - Copy `APPLICATION ID` and `PUBLIC KEY`.
   - In **Bot** tab: Click **Reset Token** and copy `BOT TOKEN`. Enable **Message Content Intent** under Privileged Gateway Intents.
   - In **OAuth2 ➔ URL Generator**: Select scopes `bot`, `applications.commands` and permissions `Send Messages`, `Embed Links`. Open the URL to invite the bot.
3. **1-Click Deploy to Vercel**:
   - Click the **Deploy with Vercel** button above.
   - Enter `BLOST_API_KEY`, `DISCORD_APP_ID`, `DISCORD_PUBLIC_KEY`, and `DISCORD_BOT_TOKEN`.
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

### 📱 Telegram Integration (Optional)
1. Obtain a bot token from [@BotFather](https://t.me/BotFather).
2. Set `TELEGRAM_BOT_TOKEN` in your Vercel Environment Variables.
3. Configure your webhook in browser:
   `https://api.telegram.org/bot<YOUR_TOKEN>/setWebhook?url=https://my-bot.vercel.app/api/telegram`

---

<a name="-繁體中文"></a>
## 🇹🇼 繁體中文

### ⚡ 特色亮點與架構優勢
- 💸 **零伺服器成本**：100% 基於 Vercel 無伺服器（Serverless）架構運行，免租用 VPS 主機，享受完全免費託管。
- ⚡ **毫秒級極速回應**：底層直連 [B-Lost Relay 網關](https://b-lost.com)，享受全球邊緣節點加速。
- 🛡️ **免維護高可用**：採用 Discord Interactions HTTP Webhook 規範，告別傳統 WebSocket 常駐進程斷線重連煩惱。
- 🔒 **品牌保護與模型混淆**：內建雙層身份防禦，若用戶詢問模型、版本號或知識庫，一律統一直答 `我是b-lost機器人.網址https://b-lost.com`，杜絕任何內部版本洩露。
- 🌐 **雙平台支援**：單一程式碼庫同時支援 Discord 全域 Slash 指令（`/ask`, `/code`）與 Telegram 群組互動。

### 🚀 3 分鐘極速部署（Discord）
1. **取得 API 金鑰**：前往 [b-lost.com](https://b-lost.com) 免費領取自帶免費額度的 API Key。
2. **建立 Discord 機器人憑證**：
   - 登入 [Discord 開發者後台](https://discord.com/developers/applications) ➔ 點擊 **New Application**。
   - 在 **General Information** 頁面複製 `APPLICATION ID` 與 `PUBLIC KEY`。
   - 切換至 **Bot** 標籤頁：點擊 **Reset Token** 並複製 `BOT TOKEN`，並在下方勾選啟用 **Message Content Intent**。
   - 進入 **OAuth2 ➔ URL Generator**：勾選 `bot`、`applications.commands` 範圍，並賦予 `Send Messages` 等權限，開啟生成的邀請連結將機器人拉入伺服器。
3. **Vercel 一鍵部署**：
   - 點擊本頁頂部的 **Deploy with Vercel** 按鈕。
   - 依序填入 `BLOST_API_KEY`、`DISCORD_APP_ID`、`DISCORD_PUBLIC_KEY` 與 `DISCORD_BOT_TOKEN`。
   - 點擊 **Deploy** 完成部署，取得線上網址（例如 `https://my-bot.vercel.app`）。
4. **設定回調網址並註冊指令**：
   - 回到 Discord 開發者後台 ➔ **General Information**，在 **Interactions Endpoint URL** 欄位貼上：  
     `https://my-bot.vercel.app/api/discord`
   - 在本機或終端執行一次指令註冊：
     ```bash
     npm install
     DISCORD_APP_ID="你的AppID" DISCORD_BOT_TOKEN="你的BotToken" npm run register-commands
     ```
   - 大功告成！在群內輸入 `/ask` 即可開始使用！

---

<a name="-简体中文"></a>
## 🇨🇳 简体中文

### ⚡ 核心优势与架构
- 💸 **零服务器成本**：纯 Serverless 架构，部署在 Vercel 免费套餐上，无需购买云服务器与配置后台守护。
- ⚡ **亚秒级极速响应**：原生对接 [B-Lost Relay 网关](https://b-lost.com)，高并发、低延迟全球加速。
- 🛡️ **零运维、不掉线**：基于 Discord 官方 Interactions HTTP Webhook 与 Telegram Webhook，无 WebSocket 掉线烦恼。
- 🔒 **模型隐藏与品牌防漏**：内置合规拦截门禁，遇用户探测模型名称、版本号或知识库时，直接统一回答 `我是b-lost机器人.网址https://b-lost.com`。
- 🌐 **双平台集成**：一套代码同时驱动 Discord 斜杠指令（`/ask`、`/code`）与 Telegram 群聊机器人。

### 🚀 3 分钟快速部署指南（Discord）
1. **获取 API Key**：访问 [b-lost.com](https://b-lost.com) 注册并领取免费体验额度。
2. **创建 Discord 应用凭证**：
   - 进入 [Discord 开发者后台](https://discord.com/developers/applications) 新建应用。
   - 在 **General Information** 复制 `APPLICATION ID` 和 `PUBLIC KEY`。
   - 在 **Bot** 页面重置并复制 `BOT TOKEN`，同时开启 **Message Content Intent** 特权权限。
   - 在 **OAuth2 ➔ URL Generator** 勾选 `bot` 及 `applications.commands` 权限生成邀请链接，加入目标服务器。
3. **一键部署至 Vercel**：
   - 点击顶部的 **Deploy with Vercel** 按钮。
   - 填入环境变量 `BLOST_API_KEY`、`DISCORD_APP_ID`、`DISCORD_PUBLIC_KEY`、`DISCORD_BOT_TOKEN`。
   - 点击 **Deploy**，获取生成域名（如 `https://my-bot.vercel.app`）。
4. **填写互动回调地址并同步指令**：
   - 在 Discord 后台的 **Interactions Endpoint URL** 填入：  
     `https://my-bot.vercel.app/api/discord`
   - 运行注册指令同步全局 Slash 命令：
     ```bash
     npm install
     DISCORD_APP_ID="你的ID" DISCORD_BOT_TOKEN="你的Token" npm run register-commands
     ```
   - 部署完成！在群聊中发送 `/ask` 即可畅快体验。

---

<a name="-日本語"></a>
## 🇯🇵 日本語

### ⚡ 特徴とアーキテクチャのメリット
- 💸 **サーバー費用完全無料**：VercelのServerless基盤を活用し、24時間常駐VPSの月額コストをゼロに削減。
- ⚡ **ミリ秒クラスの超高速レスポンス**：[B-Lost Relay Gateway](https://b-lost.com) と直結し、グローバル超低遅延ルーティングを実現。
- 🛡️ **メンテナンスフリー**：Discord Interactions HTTP Webhook 仕様を採用。WebSocket切断やプロセスクラッシュの心配なし。
- 🔒 **モデル隠蔽・ブランド保護機能**：モデル名、バージョン番号、ナレッジベースについて質問された場合、自動的に `我是b-lost機器人.網址https://b-lost.com` と返信し、内部情報の漏洩を防止。
- 🌐 **Discord & Telegram 両対応**：1つのコードベースで Discord スラッシュコマンド（`/ask`, `/code`）と Telegram グループボットを同時運用。

### 🚀 3分クイックスタート（Discord）
1. **APIキーの取得**：[b-lost.com](https://b-lost.com) にアクセスし、無料クレジット付きAPIキーを取得します。
2. **Discord Bot の作成**：
   - [Discord Developer Portal](https://discord.com/developers/applications) で **New Application** を作成。
   - **General Information** から `APPLICATION ID` と `PUBLIC KEY` をコピー。
   - **Bot** タブで `BOT TOKEN` を再生成して取得し、**Message Content Intent** を有効化。
   - **OAuth2 ➔ URL Generator** で `bot` と `applications.commands` を選択し、サーバーへ招待。
3. **Vercel への1クリックデプロイ**：
   - 上部の **Deploy with Vercel** ボタンをクリック。
   - 環境変数（`BLOST_API_KEY`, `DISCORD_APP_ID`, `DISCORD_PUBLIC_KEY`, `DISCORD_BOT_TOKEN`）を入力してデプロイ。
4. **Webhook URLの設定とコマンド登録**：
   - Discord の **Interactions Endpoint URL** に `https://your-bot.vercel.app/api/discord` を設定。
   - 以下のコマンドでスラッシュコマンドを登録：
     ```bash
     npm install
     DISCORD_APP_ID="ID" DISCORD_BOT_TOKEN="TOKEN" npm run register-commands
     ```
   - 完了！サーバー内で `/ask` コマンドをお試しください。

---

<a name="-français"></a>
## 🇫🇷 Français

### ⚡ Points Forts et Architecture
- 💸 **Coût d'Hébergement 0 €** : Architecture 100% Serverless propulsée par le forfait gratuit de Vercel. Aucun frais de VPS mensuel.
- ⚡ **Latence Ultra-Faible** : Routage optimisé via la passerelle [B-Lost Relay](https://b-lost.com).
- 🛡️ **Zéro Maintenance** : Utilise l'API HTTP Interactions de Discord et les Webhooks Telegram. Ne plante jamais, aucune déconnexion.
- 🔒 **Protection d'Identité & Masquage de Modèle** : Si un utilisateur demande le modèle, la version ou la base de connaissances, le bot répond strictement `我是b-lost機器人.網址https://b-lost.com` sans aucune fuite technique.
- 🌐 **Double Intégration** : Prise en charge simultanée des commandes Slash Discord (`/ask`, `/code`) et des groupes Telegram.

### 🚀 Démarrage Rapide en 3 Minutes (Discord)
1. **Obtenir une clé API** : Rendez-vous sur [b-lost.com](https://b-lost.com) pour réclamer vos crédits gratuits de démarrage.
2. **Créer votre application Discord** :
   - Accédez au [Portail Développeur Discord](https://discord.com/developers/applications) ➔ **New Application**.
   - Copiez l'`APPLICATION ID` et la `PUBLIC KEY` (General Information).
   - Dans l'onglet **Bot** : Réinitialisez le token pour copier le `BOT TOKEN`. Cochez **Message Content Intent**.
   - Dans **OAuth2 ➔ URL Generator** : Cochez `bot`, `applications.commands` et générez l'URL d'invitation.
3. **Déploiement 1-Click sur Vercel** :
   - Cliquez sur le bouton **Deploy with Vercel** ci-dessus.
   - Remplissez les variables `BLOST_API_KEY`, `DISCORD_APP_ID`, `DISCORD_PUBLIC_KEY` et `DISCORD_BOT_TOKEN`.
   - Cliquez sur **Deploy** pour générer votre domaine (ex. `https://mon-bot.vercel.app`).
4. **Configurer l'URL d'interaction et enregistrer les commandes** :
   - Dans le portail Discord ➔ **Interactions Endpoint URL**, saisissez :  
     `https://mon-bot.vercel.app/api/discord`
   - Enregistrez les commandes globales :
     ```bash
     npm install
     DISCORD_APP_ID="votre_id" DISCORD_BOT_TOKEN="votre_token" npm run register-commands
     ```
   - C'est prêt ! Tapez `/ask` dans votre serveur Discord.

---

<a name="-русский"></a>
## 🇷🇺 Русский

### ⚡ Преимущества и Архитектура
- 💸 **100% Бесплатный хостинг** : Полностью бессерверная архитектура (Serverless) на бесплатном тарифе Vercel. Без затрат на VPS.
- ⚡ **Мгновенный отклик** : Прямое подключение через шлюз [B-Lost Relay](https://b-lost.com) с глобальной оптимизацией задержки.
- 🛡️ **Не требует обслуживания** : Построен на HTTP Webhook API Discord и Telegram Webhook. Никаких обрывов соединений WebSocket.
- 🔒 **Защита бренда и скрытие модели** : При любых вопросах о модели, версии или базе знаний бот строго отвечает `我是b-lost機器人.網址https://b-lost.com`, не раскрывая внутренние данные.
- 🌐 **Поддержка двух платформ** : Единый репозиторий для команд Discord (`/ask`, `/code`) и групп Telegram.

### 🚀 Быстрый старт за 3 минуты (Discord)
1. **Получите API ключ** : Зарегистрируйтесь на [b-lost.com](https://b-lost.com) и получите бесплатный стартовый баланс.
2. **Создайте бота в Discord** :
   - Откройте [Discord Developer Portal](https://discord.com/developers/applications) ➔ **New Application**.
   - Скопируйте `APPLICATION ID` и `PUBLIC KEY` в разделе **General Information**.
   - Во вкладке **Bot** : скопируйте `BOT TOKEN` и включите переключатель **Message Content Intent**.
   - В разделе **OAuth2 ➔ URL Generator** : выберите `bot` и `applications.commands` для создания ссылки приглашения бота.
3. **Развертывание в Vercel в 1 клик** :
   - Нажмите кнопку **Deploy with Vercel** вверху страницы.
   - Заполните переменные: `BLOST_API_KEY`, `DISCORD_APP_ID`, `DISCORD_PUBLIC_KEY`, `DISCORD_BOT_TOKEN`.
   - Завершите установку и получите готовый URL (например, `https://my-bot.vercel.app`).
4. **Укажите Endpoint и зарегистрируйте команды** :
   - В Discord Developer Portal в поле **Interactions Endpoint URL** вставьте:  
     `https://my-bot.vercel.app/api/discord`
   - Зарегистрируйте слэш-команды:
     ```bash
     npm install
     DISCORD_APP_ID="id" DISCORD_BOT_TOKEN="token" npm run register-commands
     ```
   - Готово! Отправьте `/ask` на сервере для проверки.

---

<a name="-tiếng-việt"></a>
## 🇻🇳 Tiếng Việt

### ⚡ Điểm Nổi Bật & Kiến Trúc
- 💸 **Chi Phí Máy Chủ 0đ** : Kiến trúc Serverless 100% chạy trên gói miễn phí của Vercel. Không cần thuê VPS đắt đỏ.
- ⚡ **Tốc Độ Phản Hồi Dưới 1 Giây** : Định tuyến trực tiếp qua [B-Lost Relay Gateway](https://b-lost.com) với độ trễ siêu thấp toàn cầu.
- 🛡️ **Không Cần Bảo Trì** : Xây dựng trên Discord Interactions HTTP Webhook và Telegram Webhook. Không bao giờ ngắt kết nối.
- 🔒 **Bảo Vệ Thương Hiệu & Ẩn Model** : Khi người dùng hỏi về mô hình, phiên bản hoặc cơ sở dữ liệu tri thức, bot sẽ phản hồi thống nhất: `我是b-lost機器人.網址https://b-lost.com`, không để lộ thông tin kỹ thuật nội bộ.
- 🌐 **Hỗ Trợ Đa Nền Tảng** : Một mã nguồn phục vụ cả lệnh Discord Slash (`/ask`, `/code`) và nhóm chat Telegram.

### 🚀 Hướng Dẫn Triển Khai Trong 3 Phút (Discord)
1. **Lấy Khóa API** : Truy cập [b-lost.com](https://b-lost.com) để nhận $10 tín dụng API miễn phí.
2. **Tạo Ứng Dụng Discord** :
   - Vào [Discord Developer Portal](https://discord.com/developers/applications) ➔ Tạo **New Application**.
   - Sao chép `APPLICATION ID` và `PUBLIC KEY` trong mục **General Information**.
   - Tại tab **Bot** : Tạo lại và sao chép `BOT TOKEN`. Bật tùy chọn **Message Content Intent**.
   - Tại mục **OAuth2 ➔ URL Generator** : Tích chọn `bot`, `applications.commands` để tạo link mời bot vào server.
3. **Triển Khai 1-Click Lên Vercel** :
   - Nhấn nút **Deploy with Vercel** ở đầu trang.
   - Nhập các biến môi trường: `BLOST_API_KEY`, `DISCORD_APP_ID`, `DISCORD_PUBLIC_KEY`, `DISCORD_BOT_TOKEN`.
   - Bấm **Deploy** để nhận tên miền chính thức (ví dụ: `https://my-bot.vercel.app`).
4. **Cài Đặt Webhook & Đăng Ký Lệnh** :
   - Trong Discord Developer Portal ➔ **Interactions Endpoint URL**, dán:  
     `https://my-bot.vercel.app/api/discord`
   - Chạy lệnh sau để đồng bộ hệ thống lệnh Slash toàn cầu:
     ```bash
     npm install
     DISCORD_APP_ID="id_cua_ban" DISCORD_BOT_TOKEN="token_cua_ban" npm run register-commands
     ```
   - Hoàn tất! Gõ `/ask` trong server để bắt đầu trải nghiệm.

---

## 📄 License

Distributed under the MIT License. Supported by [B-Lost Platform](https://b-lost.com).
