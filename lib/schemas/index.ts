// Re-exporta todos os schemas de autenticação
export * from "./auth";

// Re-exporta todos os schemas de usuários
export * from "./user";

// Re-exporta todos os schemas comuns
export * from "./common";

// Você pode importar de forma organizada:
// import { loginSchema, registerSchema } from "@/lib/schemas";
// import { createUserSchema } from "@/lib/schemas";
// import { paginationSchema } from "@/lib/schemas";
//
// Ou de forma específica:
// import { loginSchema } from "@/lib/schemas/auth";
// import { createUserSchema } from "@/lib/schemas/user";
// import { paginationSchema } from "@/lib/schemas/common";
