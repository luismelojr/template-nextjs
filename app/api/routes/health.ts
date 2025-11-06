import { Hono } from "hono";

const health = new Hono().get("/", (c) => {
  return c.json({
    status: "ok",
    message: "API está funcionando!",
    timestamp: new Date().toISOString(),
  });
});

export default health;
