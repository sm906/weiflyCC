# AI Realm

> WeiflyCC Intelligence Engine

---

# 概述

AI Realm（小AI世界）是 WeiflyCC 的智慧能力中心。

其目標不是建立另一套 Dashboard，而是作為 WeiflyCC Core 的智慧延伸，提供自然語言互動、知識整合、本地模型推論與未來 AI Provider 整合能力。

AI Realm 主節點：

app.weiflycc.com

---

# 定位

AI Realm = Intelligence Engine

負責：

- AI 對話
- AI 助理
- 本地模型推論
- 知識管理
- AI 工作流程
- 未來 Agent 系統

---

# 架構

app.weiflycc.com
↓
Cloudflare Tunnel
↓
Open WebUI
↓
Ollama
↓
Local Models

---

# 現行技術架構

Cloudflare Realm

- Cloudflare Tunnel
- DNS Routing
- HTTPS Endpoint

AI Realm

- Open WebUI
- Ollama
- Local Models

Host

- Ubuntu 24.04
- Docker
- Docker Volume

---

# Open WebUI 生態

Container Name

open-webui

Image

ghcr.io/open-webui/open-webui:main

Container Status

healthy

Port Mapping

Host: 3000
Container: 8080

Public Endpoint

app.weiflycc.com

---

# 資料持久化

Open WebUI 使用 Docker Volume 保存資料：

/var/lib/docker/volumes/open-webui/_data

保存項目：

- 使用者資料
- 帳號資訊
- 對話紀錄
- 系統設定
- 知識庫資料
- AI 工作區設定

因此即使容器重建：

Open WebUI Data
=
持續保留

---

# Ollama

本地模型引擎：

Ollama

Local Endpoint

127.0.0.1:11434

作用：

- 模型管理
- 模型執行
- 推論處理

支援：

- Qwen
- Llama
- Gemma
- Mistral
- Future Models

---

# AI 請求資料流

使用者
↓
app.weiflycc.com
↓
Cloudflare Tunnel
↓
Open WebUI
↓
Ollama API
↓
Local AI Model

---

# AI 回應資料流

Local AI Model
↓
Ollama
↓
Open WebUI
↓
Cloudflare Tunnel
↓
app.weiflycc.com
↓
使用者

---

# 與 WeiflyCC Core 的關係

WeiflyCC Core
↓
AI Realm
↓
Open WebUI
↓
Ollama
↓
Local Models

AI Realm 不作為獨立核心。

遵循：

One Core
Multiple Realms

原則。

---

# 未來規劃

Phase 1

✅ Open WebUI
✅ Ollama
✅ Cloudflare Tunnel
✅ app.weiflycc.com

Phase 2

⬜ Dashboard AI Integration
⬜ /ai Realm
⬜ AI Status Dashboard

Phase 3

⬜ Agent System
⬜ Knowledge Base
⬜ Multi-Provider AI

Phase 4

⬜ WeiflyCC AI Operating Layer

---

# 世界觀定位

小橘雲世界
負責連接世界

小微軟世界
負責融入生活

小AI世界
負責智慧能力

三界共同圍繞：

WeiflyCC Core

形成 WeiflyCC Mesh Ecosystem。
