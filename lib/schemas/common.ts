import { z } from "zod";

// Schema de validação para query params de paginação
export const paginationSchema = z.object({
  page: z.string().regex(/^\d+$/).transform(Number).default(1),
  limit: z.string().regex(/^\d+$/).transform(Number).default(10),
});

// Schema de validação para ordenação
export const sortSchema = z.object({
  sortBy: z.string().optional(),
  order: z.enum(["asc", "desc"]).default("asc"),
});

// Schema de validação para busca genérica
export const searchSchema = z.object({
  q: z.string().optional(),
});

// Tipos TypeScript inferidos dos schemas
export type PaginationInput = z.infer<typeof paginationSchema>;
export type SortInput = z.infer<typeof sortSchema>;
export type SearchInput = z.infer<typeof searchSchema>;
