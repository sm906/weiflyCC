AI Realm

主節點：
app.weiflycc.com

資料流：

User
↓
app.weiflycc.com
↓
Cloudflare Tunnel
↓
Open WebUI
↓
Ollama
↓
Local Models

Docker

open-webui

Volume

/var/lib/docker/volumes/open-webui/_data

Port

3000 -> 8080
