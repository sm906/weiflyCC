import { useState } from "react";
import "./App.css";

export default function App() {
  const [message, setMessage] = useState("");
  const [reply, setReply] = useState(
    "😊 CC-01 Navigator 已連線，歡迎回來。"
  );

  const realms = [
    {
      icon: "🌐",
      title: "Portal Realm",
      domain: "weiflycc.com",
      url: "https://weiflycc.com",
    },
    {
      icon: "☁️",
      title: "Infrastructure Realm",
      domain: "weiflycc.net",
      url: "https://weiflycc.net",
    },
    {
      icon: "📚",
      title: "Knowledge Realm",
      domain: "weiflycc.org",
      url: "https://weiflycc.org",
    },
    {
      icon: "📊",
      title: "Status Realm",
      domain: "weiflycc.info",
      url: "https://weiflycc.info",
    },
  ];

  const runAction = (action: string) => {
    setMessage(action);

    switch (action) {
      case "查看四個網域":
        setReply("🌐 Four Realms 已準備完成");
        break;

      case "檢查 Cloudflare":
        setReply("☁️ Cloudflare 狀態正常");
        break;

      case "部署 Worker":
        setReply("🚀 Worker 部署流程準備中");
        break;

      case "開啟 AI Hub":
        setReply("🤖 AI Hub 即將開放");
        break;

      default:
        setReply("😊 指令已收到");
    }
  };

  return (
    <div className="app">
      <header>
        <h1>🦅 WEIFLYCC OS</h1>
        <p>😊 CC-01 Navigator Online</p>
      </header>

      <section>
        <h2>歡迎回來，威寶</h2>
        <p>Personal Cloud + AI Operating System</p>

        <input
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="告訴我你的想法..."
        />

        <div className="actions">
          <button onClick={() => runAction("部署 Worker")}>
            部署 Worker
          </button>

          <button onClick={() => runAction("檢查 Cloudflare")}>
            檢查 Cloudflare
          </button>

          <button onClick={() => runAction("查看四個網域")}>
            查看四個網域
          </button>

          <button onClick={() => runAction("開啟 AI Hub")}>
            開啟 AI Hub
          </button>
        </div>

        <p>{reply}</p>
      </section>

      <section>
        <h2>🌐 Four Realms</h2>

        {realms.map((realm) => (
          <div
            key={realm.domain}
            className="card"
            onClick={() => window.open(realm.url, "_blank")}
            style={{ cursor: "pointer" }}
          >
            <h3>
              {realm.icon} {realm.title}
            </h3>

            <p>{realm.domain}</p>
          </div>
        ))}
      </section>

      <section>
        <h2>🤖 CC Family</h2>

        <div>CC-01 Navigator</div>
        <div>CC-04 Cloud Weaver</div>
        <div>CC-05 Network Sentinel</div>
        <div>CC-10 Insight Analyst</div>
        <div>CC-11 Automation Engineer</div>
        <div>CC-16 Dev Assistant</div>
      </section>

      <footer>
        WeiflyCC OS • Continuity • Cloud • Creation
      </footer>
    </div>
  );
}
