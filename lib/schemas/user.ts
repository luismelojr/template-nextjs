import { z } from "zod";

// Schema de validação para criação de usuário (API)
export const createUserSchema = z.object({
  name: z.string().min(2, "Nome deve ter no mínimo 2 caracteres"),
  email: z.string().email("Email inválido"),
});

// Schema de validação para atualização de usuário
export const updateUserSchema = z.object({
  name: z.string().min(2, "Nome deve ter no mínimo 2 caracteres").optional(),
  email: z.string().email("Email inválido").optional(),
});

// Schema de validação para filtros de usuário
export const userFilterSchema = z.object({
  search: z.string().optional(),
  emailVerified: z
    .string()
    .transform((val) => val === "true")
    .optional(),
});

// Tipos TypeScript inferidos dos schemas
export type CreateUserInput = z.infer<typeof createUserSchema>;
export type UpdateUserInput = z.infer<typeof updateUserSchema>;
export type UserFilterInput = z.infer<typeof userFilterSchema>;
