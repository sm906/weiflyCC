export default function Azure() {
  const openAzure = () => {
    window.open("https://portal.azure.com", "_blank")
  }

  return (
    <div
      style={{
        padding: "32px",
        color: "white",
        height: "100%",
      }}
    >
      <h1
        style={{
          fontSize: "42px",
          marginBottom: "12px",
          color: "#4cc9ff",
          textShadow: "0 0 20px rgba(76,201,255,.6)",
        }}
      >
        ☁ Azure Command Center
      </h1>

      <p
        style={{
          color: "#94a3b8",
          marginBottom: "30px",
        }}
      >
        Microsoft 365 • Azure • Cloudflare
      </p>

      <div
        style={{
          background: "rgba(8,20,52,.65)",
          border: "1px solid rgba(76,201,255,.25)",
          borderRadius: "20px",
          padding: "28px",
          boxShadow: "0 0 30px rgba(0,140,255,.15)",
          maxWidth: "900px",
        }}
      >
        <h2
          style={{
            marginBottom: "24px",
          }}
        >
          Service Status
        </h2>

        <StatusRow
          name="Cloudflare Edge"
          status="Operational"
        />

        <StatusRow
          name="Microsoft 365"
          status="Operational"
        />

        <StatusRow
          name="Azure"
          status="Operational"
        />

        <hr
          style={{
            margin: "30px 0",
            border: "none",
            borderTop: "1px solid rgba(255,255,255,.1)",
          }}
        />

        <div style={{ marginBottom: "20px" }}>
          <div
            style={{
              color: "#94a3b8",
              marginBottom: "6px",
            }}
          >
            Tenant
          </div>

          <div
            style={{
              fontSize: "24px",
              fontWeight: 700,
            }}
          >
            365.weiflycc.com
          </div>
        </div>

        <button
          onClick={openAzure}
          style={{
            background:
              "linear-gradient(135deg,#0078d4,#00b7ff)",
            color: "white",
            border: "none",
            cursor: "pointer",
            fontSize: "18px",
            fontWeight: 700,
            padding: "16px 28px",
            borderRadius: "14px",
            boxShadow:
              "0 0 25px rgba(0,183,255,.35)",
          }}
        >
          🚀 Launch Azure Portal
        </button>
      </div>
    </div>
  )
}

function StatusRow({
  name,
  status,
}: {
  name: string
  status: string
}) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        marginBottom: "18px",
      }}
    >
      <span>{name}</span>

      <span
        style={{
          color: "#4ade80",
          fontWeight: 600,
        }}
      >
        🟢 {status}
      </span>
    </div>
  )
}
