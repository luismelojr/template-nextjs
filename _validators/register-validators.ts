import { z } from "zod";

export const registerUserSchema = z.object({
  name: z.string().min(2, "O nome deve ter no mínimo 2 caracteres"),
  email: z.email("Email inválido"),
  password: z.string().min(8, "A senha deve ter no mínimo 8 caracteres"),
  confirmPassword: z.string().min(8, "A confirmação de senha deve ter no mínimo 8 caracteres"),
});

export type RegisterUserType = z.infer<typeof registerUserSchema>;
