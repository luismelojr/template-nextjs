import { hc } from "hono/client";
import type { AppType } from "@/app/api/[[...route]]/route";

// Cliente RPC tipado para fazer chamadas à API
// export const apiClient = hc<AppType>(
//   typeof window !== "undefined" ? window.location.origin : "http://localhost:3000"
// );

export const client = hc<AppType>(process.env.NEXT_PUBLIC_APP_URL!);
