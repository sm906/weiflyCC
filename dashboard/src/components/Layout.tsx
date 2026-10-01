import { Link } from "react-router-dom"

export default function Layout({
  title,
  children,
}: {
  title: string
  children: React.ReactNode
}) {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#050816",
        color: "white",
        display: "flex",
      }}
    >
      <aside
        style={{
          width: "240px",
          background: "#0f172a",
          borderRight: "1px solid #2563eb",
          padding: "20px",
        }}
      >
        <h2
          style={{
            color: "#7dd3fc",
          }}
        >
          🦅 WeiflyCC
        </h2>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "12px",
            marginTop: "24px",
          }}
        >
          <Link to="/" style={{ color: "white" }}>
            🏠 Home
          </Link>

          <Link to="/infra" style={{ color: "white" }}>
            🌍 Infrastructure
          </Link>

          <Link to="/r2" style={{ color: "white" }}>
            ☁️ Cloud
          </Link>

          <Link to="/ai" style={{ color: "white" }}>
            🤖 AI
          </Link>

          <Link to="/cc" style={{ color: "white" }}>
            📊 Command Center
          </Link>
        </div>
      </aside>

      <main
        style={{
          flex: 1,
          padding: "30px",
        }}
      >
        <h1>{title}</h1>

        {children}
      </main>
    </div>
  )
}
