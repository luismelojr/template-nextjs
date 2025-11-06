import { hc } from "hono/client";
import type { AppType } from "@/app/api/[[...route]]/route";

// Cliente RPC tipado para fazer chamadas à API
export const apiClient = hc<AppType>(
  typeof window !== "undefined" ? window.location.origin : "http://localhost:3000"
);

// Exemplos de uso:
//
// // Listar usuários
// const response = await apiClient.api.users.$get();
// const data = await response.json();
//
// // Buscar usuário por ID
// const response = await apiClient.api.users[":id"].$get({
//   param: { id: "123" }
// });
// const data = await response.json();
//
// // Criar usuário
// const response = await apiClient.api.users.$post({
//   json: { name: "João", email: "joao@example.com" }
// });
// const data = await response.json();
//
// // Atualizar usuário
// const response = await apiClient.api.users[":id"].$patch({
//   param: { id: "123" },
//   json: { name: "João Silva" }
// });
// const data = await response.json();
//
// // Deletar usuário
// const response = await apiClient.api.users[":id"].$delete({
//   param: { id: "123" }
// });
// const data = await response.json();
