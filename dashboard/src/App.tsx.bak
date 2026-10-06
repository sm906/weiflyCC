import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function App() {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const timer = setTimeout(() => {
      if (location.pathname === "/") {
        const speech = new SpeechSynthesisUtterance(
          "早安老闆，WeiflyCC Core已完成同步，今天要消費什麼？"
        );

        speech.lang = "zh-TW";
        speech.rate = 1;
        speech.pitch = 1;

        speechSynthesis.cancel();
        speechSynthesis.speak(speech);
      }
    }, 1000);

    return () => clearTimeout(timer);
  }, [location.pathname]);

  const menus = [
    {
      path: "/",
      icon: "🛰️",
      name: "CC-01",
    },
    {
      path: "/infra",
      icon: "☁️",
      name: "Cloudflare",
    },
    {
      path: "/azure",
      icon: "🪟",
      name: "Microsoft",
    },
    {
      path: "/ai",
      icon: "🤖",
      name: "AI Realm",
    },
    {
      path: "/r2",
      icon: "🗄️",
      name: "Storage",
    },
    {
      path: "/cc",
      icon: "🦅",
      name: "CC Center",
    },
  ];

  const cardStyle = {
    background: "rgba(15,23,42,.95)",
    border: "1px solid #334155",
    borderRadius: "20px",
    padding: "24px",
    cursor: "pointer",
    transition: "all .25s ease",
    color: "white",
    textAlign: "left" as const,
  };

  const hoverIn = (e: any) => {
    e.currentTarget.style.transform =
      "translateY(-8px) scale(1.02)";

    e.currentTarget.style.border =
      "1px solid #60a5fa";

    e.currentTarget.style.boxShadow =
      "0 0 25px rgba(96,165,250,.35)";
  };

  const hoverOut = (e: any) => {
    e.currentTarget.style.transform =
      "translateY(0px) scale(1)";

    e.currentTarget.style.border =
      "1px solid #334155";

    e.currentTarget.style.boxShadow =
      "none";
  };

  return (
    <div
      style={{
        display: "flex",
        minHeight: "100vh",
        background:
          "radial-gradient(circle at top,#102542 0%,#050816 70%)",
        color: "white",
      }}
    >
      {/* Sidebar */}

      <aside
        style={{
          width: "260px",
          background: "#0a1020",
          borderRight: "1px solid #1e293b",
          padding: "24px",
        }}
      >
        <h2
          style={{
            margin: 0,
            marginBottom: "32px",
            color: "#7dd3fc",
          }}
        >
          🦅 WeiflyCC Core
        </h2>

        {menus.map((item) => {
          const active = location.pathname === item.path;

          return (
            <button
              key={item.path}
              onClick={() => navigate(item.path)}
              style={{
                width: "100%",
                textAlign: "left",
                padding: "14px 16px",
                marginBottom: "10px",

                background: active
                  ? "linear-gradient(90deg, rgba(59,130,246,.35), rgba(59,130,246,.08))"
                  : "transparent",

                border: active
                  ? "1px solid #3b82f6"
                  : "1px solid transparent",

                borderLeft: active
                  ? "4px solid #60a5fa"
                  : "4px solid transparent",

                borderRadius: "12px",

                color: "#ffffff",

                cursor: "pointer",
              }}
            >
              {item.icon} {item.name}
            </button>
          );
        })}
      </aside>

      {/* Main */}

      <main
        style={{
          flex: 1,
          padding: "40px",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
          }}
        >
          {/* Hero */}

          <div
            style={{
              textAlign: "center",
              marginBottom: "50px",
            }}
          >
            <div
              style={{
                fontSize: "76px",
                color: "#7dd3fc",
                textShadow:
                  "0 0 20px rgba(125,211,252,.7)",
                fontWeight: "bold",
              }}
            >
              CC-01
            </div>

            <div
              style={{
                fontSize: "28px",
                color: "#cbd5e1",
                marginTop: "10px",
              }}
            >
              Navigator
            </div>

            <div
              style={{
                marginTop: "20px",
                color: "#4ade80",
                fontWeight: "bold",
              }}
            >
              🟢 WeiflyCC Core Online
            </div>

            <div
              style={{
                marginTop: "35px",
                fontSize: "26px",
                lineHeight: 1.8,
              }}
            >
              早安，老闆。
              <br />
              WeiflyCC Core 已完成同步。
              <br />
              今天要消費什麼？
            </div>
          </div>

          {/* Cards */}

          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fit,minmax(260px,1fr))",
              gap: "20px",
            }}
          >
            <div
              style={cardStyle}
              onMouseEnter={hoverIn}
              onMouseLeave={hoverOut}
              onClick={() => navigate("/infra")}
            >
              <h2>☁️ 我想搞雲</h2>
              <p>Cloudflare Realm</p>
              <small>
                Tunnel / DNS / Workers /
                Zero Trust
              </small>
            </div>

            <div
              style={cardStyle}
              onMouseEnter={hoverIn}
              onMouseLeave={hoverOut}
              onClick={() => navigate("/azure")}
            >
              <h2>🪟 我想搞微軟</h2>
              <p>Microsoft Realm</p>
              <small>
                Microsoft 365 / Copilot /
                Azure
              </small>
            </div>

            <div
              style={cardStyle}
              onMouseEnter={hoverIn}
              onMouseLeave={hoverOut}
              onClick={() => navigate("/ai")}
            >
              <h2>🤖 我想玩 AI</h2>
              <p>AI Realm</p>
              <small>
                Open WebUI / Ollama /
                Qwen3
              </small>
            </div>

            <div
              style={cardStyle}
              onMouseEnter={hoverIn}
              onMouseLeave={hoverOut}
              onClick={() => navigate("/cc")}
            >
              <h2>📂 繼續昨天的工作</h2>

              <small>
                Ubuntu 遷移完成 ✅
                <br />
                Open WebUI Online ✅
                <br />
                Ollama Online ✅
                <br />
                AI Realm Online ✅
              </small>
            </div>
          </div>

          {/* Status */}

          <div
            style={{
              marginTop: "40px",
              background: "#0f172a",
              border: "1px solid #1e293b",
              borderRadius: "20px",
              padding: "24px",
            }}
          >
            <h3>🟢 Realm Status</h3>

            <p>☁️ Cloudflare Realm Online</p>
            <p>🪟 Microsoft Realm Online</p>
            <p>🤖 AI Realm Online</p>
            <p>🦅 CC Core Online</p>
          </div>
        </div>
      </main>
    </div>
  );
}
