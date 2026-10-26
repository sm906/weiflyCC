import { Hono } from "hono";
import tenants from "./routes/tenants";

const app = new Hono();

app.get("/", (c) => {
  return c.json({
    service: "weiflycc-api",
    status: "online"
  });
});

app.get("/api/health", (c) => {
  return c.json({
    ok: true
  });
});

app.route("/api/tenants", tenants);

export default app;
