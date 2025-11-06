# Exemplos de Uso da API

## 1. Health Check

Verificar se a API está funcionando:

```bash
curl http://localhost:3000/api/health
```

Resposta:
```json
{
  "status": "ok",
  "message": "API está funcionando!",
  "timestamp": "2025-11-06T12:00:00.000Z"
}
```

## 2. Criar Usuário

```bash
curl -X POST http://localhost:3000/api/users \
  -H "Content-Type: application/json" \
  -d '{
    "name": "João Silva",
    "email": "joao@example.com"
  }'
```

Resposta (201 Created):
```json
{
  "user": {
    "id": "clx1234567890",
    "name": "João Silva",
    "email": "joao@example.com",
    "createdAt": "2025-11-06T12:00:00.000Z"
  }
}
```

### Validação de Erros

Tentando criar usuário com dados inválidos:

```bash
curl -X POST http://localhost:3000/api/users \
  -H "Content-Type: application/json" \
  -d '{
    "name": "J",
    "email": "invalid-email"
  }'
```

Resposta (400 Bad Request):
```json
{
  "error": {
    "issues": [
      {
        "path": ["name"],
        "message": "Nome deve ter no mínimo 2 caracteres"
      },
      {
        "path": ["email"],
        "message": "Email inválido"
      }
    ]
  }
}
```

## 3. Listar Todos os Usuários

```bash
curl http://localhost:3000/api/users
```

Resposta:
```json
{
  "users": [
    {
      "id": "clx1234567890",
      "name": "João Silva",
      "email": "joao@example.com",
      "createdAt": "2025-11-06T12:00:00.000Z"
    }
  ]
}
```

## 4. Buscar Usuário por ID

```bash
curl http://localhost:3000/api/users/clx1234567890
```

Resposta:
```json
{
  "user": {
    "id": "clx1234567890",
    "name": "João Silva",
    "email": "joao@example.com",
    "createdAt": "2025-11-06T12:00:00.000Z",
    "updatedAt": "2025-11-06T12:00:00.000Z"
  }
}
```

## 5. Atualizar Usuário

```bash
curl -X PATCH http://localhost:3000/api/users/clx1234567890 \
  -H "Content-Type: application/json" \
  -d '{
    "name": "João Silva Santos"
  }'
```

Resposta:
```json
{
  "user": {
    "id": "clx1234567890",
    "name": "João Silva Santos",
    "email": "joao@example.com",
    "updatedAt": "2025-11-06T12:30:00.000Z"
  }
}
```

## 6. Deletar Usuário

```bash
curl -X DELETE http://localhost:3000/api/users/clx1234567890
```

Resposta:
```json
{
  "message": "Usuário deletado com sucesso"
}
```

## 7. Autenticação com Better Auth

### Registro de Novo Usuário

```bash
curl -X POST http://localhost:3000/api/auth/sign-up \
  -H "Content-Type: application/json" \
  -d '{
    "email": "usuario@example.com",
    "password": "SenhaForte123",
    "name": "Nome do Usuário"
  }'
```

### Login

```bash
curl -X POST http://localhost:3000/api/auth/sign-in/email \
  -H "Content-Type: application/json" \
  -d '{
    "email": "usuario@example.com",
    "password": "SenhaForte123"
  }' \
  -c cookies.txt
```

A resposta incluirá um cookie de sessão que deve ser usado nas próximas requisições.

### Obter Sessão Atual

```bash
curl http://localhost:3000/api/auth/get-session \
  -b cookies.txt
```

### Logout

```bash
curl -X POST http://localhost:3000/api/auth/sign-out \
  -b cookies.txt
```

## 8. Testando com JavaScript/TypeScript

### Usando fetch (Browser ou Node.js)

```typescript
// Criar usuário
const response = await fetch('http://localhost:3000/api/users', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    name: 'João Silva',
    email: 'joao@example.com'
  })
});

const data = await response.json();
console.log(data);
```

### Usando o Cliente de Autenticação

```typescript
import { signIn, signUp, signOut } from '@/lib/auth-client';

// Registro
const { data, error } = await signUp.email({
  email: 'usuario@example.com',
  password: 'SenhaForte123',
  name: 'Nome do Usuário'
});

// Login
const { data, error } = await signIn.email({
  email: 'usuario@example.com',
  password: 'SenhaForte123'
});

// Logout
await signOut();
```

## 9. Códigos de Status HTTP

- `200 OK` - Requisição bem-sucedida
- `201 Created` - Recurso criado com sucesso
- `400 Bad Request` - Dados de entrada inválidos
- `404 Not Found` - Recurso não encontrado
- `409 Conflict` - Conflito (ex: email já cadastrado)
- `500 Internal Server Error` - Erro no servidor
