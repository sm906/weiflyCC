# WeiflyCC WORLD MODEL v1.0

## Core Principle

WeiflyCC Core is the single core of the ecosystem.

Principles:

- One Core
- Multiple Realms
- No multiple dashboards
- All capabilities ultimately return to the Core
- All worlds are connected through the Core

Primary Entry:

- weiflycc.com

Core Paths:

- /dashboard
- /identity
- /365
- /cloud
- /ai
- /status
- /settings
- /lab

---

# Cloudflare Realm (小橘雲世界)

Purpose: Connect the external world.

Services:

- DNS
- Tunnel
- Zero Trust
- Pages
- Workers
- CDN
- WAF

Flow:

Internet
→ Cloudflare
→ WeiflyCC Core

---

# Microsoft Realm (小微軟世界)

Primary Node:

- 365.weiflycc.com

Purpose: Digital life and productivity gateway.

Services:

- Outlook
- OneDrive
- Microsoft 365
- Copilot
- Graph API
- Entra ID
- Azure

Flow:

Life / Work / Knowledge
→ 365.weiflycc.com
→ Microsoft Ecosystem
→ WeiflyCC Core

---

# AI Realm (小AI世界)

Primary Node:

- app.weiflycc.com

Purpose: Intelligence Engine.

Current Stack:

app.weiflycc.com
→ Cloudflare Tunnel
→ Open WebUI
→ Ollama
→ Local Models

Services:

- Open WebUI
- Ollama
- Local AI Models
- Future AI Providers

---

# Open WebUI Ecosystem

Docker Container:

- open-webui

Image:

- ghcr.io/open-webui/open-webui:main

Persistent Data:

- /var/lib/docker/volumes/open-webui/_data

Port Mapping:

- Host 3000 → Container 8080

Ingress:

app.weiflycc.com
→ localhost:3000
→ Open WebUI

AI Request Flow:

User
→ app.weiflycc.com
→ Cloudflare Tunnel
→ Open WebUI
→ Ollama API
→ Local Model

Response Flow:

Local Model
→ Ollama
→ Open WebUI
→ Cloudflare Tunnel
→ User

---

# Lab Realm

Purpose:

- Research
- Testing
- Validation
- Prototyping

Current LXD Environment:

- web
- db
- test
- mydebian
- myvm

---

# Three Worlds Mesh

Cloudflare Realm
        ↕
     WeiflyCC Core
        ↕
 Microsoft Realm
        ↕
      AI Realm

Definition:

- Cloudflare connects the world.
- Microsoft integrates life.
- AI provides intelligence.

All three worlds orbit around WeiflyCC Core and form a mesh-style digital ecosystem.
