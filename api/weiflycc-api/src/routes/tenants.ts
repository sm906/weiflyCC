import { Hono } from "hono";

const tenants = new Hono();

tenants.get("/", async (c) => {
  return c.json({
    items: []
  });
});

tenants.post("/", async (c) => {
  return c.json({
    ok: true
  });
});

export default tenants;
