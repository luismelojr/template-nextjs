import { Hono } from "hono";
import { handle } from "hono/vercel";
import health from "../routes/health";
import users from "../routes/users";

export const runtime = "nodejs";

const app = new Hono().basePath("/api").route("/health", health).route("/users", users);

// Exportar o tipo da aplicação para uso com RPC
export type AppType = typeof app;

export const GET = handle(app);
export const POST = handle(app);
export const PATCH = handle(app);
export const DELETE = handle(app);
