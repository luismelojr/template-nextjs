# Estrutura de Rotas com Hono RPC

## Estrutura de Pastas

```
app/api/
├── routes/
│   ├── health.ts    # Rotas de health check
│   └── users.ts     # Rotas de usuários (CRUD)
└── [[...route]]/
    └── route.ts     # Arquivo principal que combina todas as rotas

lib/
├── schemas/
│   ├── auth.ts      # Schemas de autenticação
│   ├── user.ts      # Schemas de usuários
│   ├── common.ts    # Schemas comuns (pagination, sort, etc)
│   └── index.ts     # Re-exporta todos os schemas
├── api-client.ts    # Cliente RPC tipado
└── db.ts            # Cliente Prisma
```

## Como Funciona

### 1. Schemas Organizados

Schemas Zod separados por domínio para fácil manutenção:

```typescript
// Importar schemas específicos
import { createUserSchema } from "@/lib/schemas/user";
import { loginSchema } from "@/lib/schemas/auth";
import { paginationSchema } from "@/lib/schemas/common";

// Ou importar tudo de uma vez
import { createUserSchema, loginSchema, paginationSchema } from "@/lib/schemas";
```

### 2. Rotas Separadas

Cada arquivo de rota exporta uma instância do Hono com suas rotas específicas:

```typescript
// app/api/routes/users.ts
import { Hono } from "hono";

const users = new Hono()
  .get("/", async (c) => {
    // Listar usuários
  })
  .get("/:id", async (c) => {
    // Buscar usuário
  })
  .post("/", async (c) => {
    // Criar usuário
  });

export default users;
```

### 3. Arquivo Principal

O arquivo principal combina todas as rotas e exporta o tipo para RPC:

```typescript
// app/api/[[...route]]/route.ts
import { Hono } from "hono";
import health from "../routes/health";
import users from "../routes/users";

const app = new Hono()
  .basePath("/api")
  .route("/health", health)
  .route("/users", users);

export type AppType = typeof app;
```

### 4. Cliente RPC Tipado

Use o cliente para fazer chamadas tipadas à API:

```typescript
import { apiClient } from "@/lib/api-client";

// Autocomplete completo em todas as chamadas!
const response = await apiClient.api.users.$get();
const data = await response.json();
```

## Vantagens do RPC Pattern

1. **Type Safety**: Autocomplete e validação de tipos em todas as chamadas
2. **Código Organizado**: Rotas separadas por domínio/recurso
3. **Manutenção Fácil**: Cada arquivo cuida de uma responsabilidade
4. **DX Melhor**: Erros de tipo antes de executar o código
5. **Refatoração Segura**: TypeScript garante que mudanças não quebram o código

## Exemplos de Uso

Veja o arquivo `examples/api-usage.tsx` para exemplos completos de como usar o cliente RPC no frontend.

## Adicionando Novas Rotas

1. Crie um novo arquivo em `app/api/routes/`
2. Defina suas rotas usando Hono
3. Exporte a instância do Hono
4. Importe e registre no arquivo principal `route.ts`

```typescript
// app/api/routes/posts.ts
import { Hono } from "hono";

const posts = new Hono()
  .get("/", async (c) => {
    // Listar posts
  });

export default posts;

// app/api/[[...route]]/route.ts
import posts from "../routes/posts";

const app = new Hono()
  .basePath("/api")
  .route("/health", health)
  .route("/users", users)
  .route("/posts", posts); // Adicione aqui
```
