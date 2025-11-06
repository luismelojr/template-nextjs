# Better Auth + Hono + Prisma + Zod

Projeto Next.js configurado com:
- **HonoJS** - Framework web rápido e leve para APIs
- **Better Auth** - Sistema de autenticação moderno
- **Prisma** - ORM para PostgreSQL
- **Zod** - Validação de schemas TypeScript-first

## Pré-requisitos

- Node.js 18+
- Docker e Docker Compose

## Instalação

1. Clone o repositório e instale as dependências:

```bash
npm install
```

2. Configure as variáveis de ambiente:

```bash
cp .env.example .env
```

Edite o arquivo `.env` com suas configurações.

3. Inicie o banco de dados PostgreSQL:

```bash
docker-compose up -d
```

4. Execute as migrations do Prisma:

```bash
npx prisma migrate dev
```

5. Inicie o servidor de desenvolvimento:

```bash
npm run dev
```

O aplicativo estará disponível em `http://localhost:3000`

## Estrutura do Projeto

```
├── app/
│   ├── api/
│   │   ├── auth/[[...all]]/     # Rotas de autenticação (Better Auth)
│   │   └── [[...route]]/        # Rotas da API (Hono)
├── lib/
│   ├── auth.ts                  # Configuração do Better Auth
│   ├── auth-client.ts           # Cliente de autenticação para frontend
│   ├── db.ts                    # Cliente Prisma
│   └── schemas.ts               # Schemas de validação Zod
├── prisma/
│   ├── schema.prisma            # Schema do banco de dados
│   └── migrations/              # Histórico de migrations
├── docker-compose.yml           # Configuração do PostgreSQL
└── .env                         # Variáveis de ambiente
```

## API Endpoints

### Autenticação (Better Auth)

- `POST /api/auth/sign-up` - Criar conta
- `POST /api/auth/sign-in` - Login
- `POST /api/auth/sign-out` - Logout
- `GET /api/auth/session` - Obter sessão atual

### API (Hono + Zod)

- `GET /api/health` - Health check
- `GET /api/users` - Listar usuários
- `GET /api/users/:id` - Buscar usuário por ID
- `POST /api/users` - Criar usuário (com validação Zod)
- `PATCH /api/users/:id` - Atualizar usuário
- `DELETE /api/users/:id` - Deletar usuário

## Exemplos de Uso

### Criar Usuário

```bash
curl -X POST http://localhost:3000/api/users \\
  -H "Content-Type: application/json" \\
  -d '{
    "name": "João Silva",
    "email": "joao@example.com"
  }'
```

### Listar Usuários

```bash
curl http://localhost:3000/api/users
```

### Registro de Usuário (Better Auth)

```bash
curl -X POST http://localhost:3000/api/auth/sign-up \\
  -H "Content-Type: application/json" \\
  -d '{
    "email": "usuario@example.com",
    "password": "SenhaForte123",
    "name": "Nome do Usuário"
  }'
```

### Login

```bash
curl -X POST http://localhost:3000/api/auth/sign-in \\
  -H "Content-Type: application/json" \\
  -d '{
    "email": "usuario@example.com",
    "password": "SenhaForte123"
  }'
```

## Scripts Disponíveis

```bash
npm run dev          # Inicia o servidor de desenvolvimento
npm run build        # Cria build de produção
npm run start        # Inicia o servidor de produção
npm run lint         # Executa o linter

# Prisma
npx prisma studio    # Abre interface visual do banco
npx prisma generate  # Gera o Prisma Client
npx prisma migrate dev # Cria e aplica migrations
```

## Tecnologias

- [Next.js 16](https://nextjs.org/) - Framework React
- [HonoJS](https://hono.dev/) - Framework web
- [Better Auth](https://better-auth.com/) - Autenticação
- [Prisma](https://prisma.io/) - ORM
- [Zod](https://zod.dev/) - Validação de schemas
- [PostgreSQL](https://postgresql.org/) - Banco de dados
- [TypeScript](https://typescriptlang.org/) - Linguagem

## Validação com Zod

Todos os endpoints da API utilizam Zod para validação de dados. Exemplos em `lib/schemas.ts`:

```typescript
import { z } from "zod";

export const createUserSchema = z.object({
  name: z.string().min(2, "Nome deve ter no mínimo 2 caracteres"),
  email: z.string().email("Email inválido"),
});
```

## Banco de Dados

O projeto usa PostgreSQL via Docker. Para gerenciar o banco:

```bash
# Iniciar
docker-compose up -d

# Parar
docker-compose down

# Ver logs
docker-compose logs -f postgres

# Acessar o PostgreSQL
docker exec -it better_postgres psql -U postgres -d better_db
```

## Desenvolvimento

### Adicionar uma Nova Rota

1. Edite `app/api/[[...route]]/route.ts`
2. Adicione sua rota:

```typescript
app.get("/minha-rota", (c) => {
  return c.json({ message: "Olá!" });
});
```

### Adicionar um Novo Model

1. Edite `prisma/schema.prisma`
2. Execute as migrations:

```bash
npx prisma migrate dev --name nome_da_migration
```

### Adicionar Validação

1. Crie o schema em `lib/schemas.ts`
2. Use no endpoint:

```typescript
app.post("/endpoint", zValidator("json", meuSchema), async (c) => {
  const data = c.req.valid("json");
  // ...
});
```

## Produção

1. Configure as variáveis de ambiente de produção
2. Execute o build:

```bash
npm run build
```

3. Inicie o servidor:

```bash
npm start
```

## Licença

MIT
