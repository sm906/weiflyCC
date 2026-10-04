import { useLocation, useNavigate } from "react-router-dom"

export default function App() {
  const navigate = useNavigate()
  const location = useLocation()

  const menus = [
    {
      path: "/",
      icon: "🏠",
      name: "Home",
    },
    {
      path: "/infra",
      icon: "🌍",
      name: "Infrastructure",
    },
    {
      path: "/r2",
      icon: "☁️",
      name: "Storage",
    },
    {
      path: "/ai",
      icon: "🤖",
      name: "AI Center",
    },
    {
      path: "/dashboard",
      icon: "📊",
      name: "Dashboard",
    },
    {
      path: "/Azure",
      icon: "☁️",
      name: "azure"
    } 
  ]

  return (
    <div
      style={{
        display: "flex",
        minHeight: "100vh",
        background: "#050816",
        color: "white",
      }}
    >
      {/* Navigator */}
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
            marginBottom: "30px",
            color: "#60a5fa",
          }}
        >
          🦅 WeiflyCC OS
        </h2>

        {menus.map((item) => {
          const active = location.pathname === item.path

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

                boxShadow: active
                  ? "0 0 18px rgba(59,130,246,.45)"
                  : "none",

                transition: "all .25s ease",
              }}
            >
              {item.icon} {item.name}
            </button>
          )
        })}
      </aside>

      {/* Content */}
      <main
        style={{
          flex: 1,
          padding: "32px",
        }}
      >
        {location.pathname !== "/" && (
          <button
            onClick={() => navigate("/")}
            style={{
              background: "#1e293b",
              color: "white",
              border: "1px solid #334155",
              borderRadius: "10px",
              padding: "10px 16px",
              cursor: "pointer",
              marginBottom: "20px",
            }}
          >
            ← 返回首頁
          </button>
        )}

        <h1
          style={{
            marginTop: 0,
          }}
        >
          🦅 WeiflyCC OS
        </h1>

        <p
          style={{
            color: "#94a3b8",
          }}
        >
          Home Lab + Cloud + AI Platform
        </p>

        <div
          style={{
            marginTop: "30px",
            padding: "24px",
            borderRadius: "16px",
            background: "#0f172a",
            border: "1px solid #1e293b",
          }}
        >
          <h2>Welcome</h2>

          <p>請從左側 Navigator 選擇功能。</p>

          <p>目前已規劃：</p>

          <ul>
            <li>🌍 Infrastructure</li>
            <li>☁️ Storage (R2 / D1)</li>
            <li>🤖 AI Center</li>
            <li>📊 Dashboard</li>
          </ul>
        </div>
      </main>
    </div>
  )
}
