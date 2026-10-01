import { Link } from "react-router-dom"

export default function BackHome() {
  return (
    <Link
      to="/"
      style={{
        display: "inline-block",
        padding: "8px 16px",
        background: "#2563eb",
        color: "white",
        textDecoration: "none",
        borderRadius: "8px",
        marginBottom: "16px",
      }}
    >
      ← Home
    </Link>
  )
}
