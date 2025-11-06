"use client";

import { apiClient } from "@/lib/api-client";
import { useEffect, useState } from "react";

// Exemplo de componente usando o cliente RPC tipado
export default function UsersExample() {
  const [users, setUsers] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        // Chamada tipada à API - autocomplete total!
        const response = await apiClient.api.users.$get();
        const data = await response.json();
        setUsers(data.users);
      } catch (error) {
        console.error("Erro ao buscar usuários:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  const createUser = async () => {
    try {
      // Criar usuário com validação de tipos
      const response = await apiClient.api.users.$post({
        json: {
          name: "João Silva",
          email: "joao@example.com",
        },
      });

      if (response.ok) {
        const data = await response.json();
        console.log("Usuário criado:", data);
      }
    } catch (error) {
      console.error("Erro ao criar usuário:", error);
    }
  };

  const updateUser = async (userId: string) => {
    try {
      // Atualizar usuário com tipos inferidos
      const response = await apiClient.api.users[":id"].$patch({
        param: { id: userId },
        json: {
          name: "João Silva Atualizado",
        },
      });

      if (response.ok) {
        const data = await response.json();
        console.log("Usuário atualizado:", data);
      }
    } catch (error) {
      console.error("Erro ao atualizar usuário:", error);
    }
  };

  const deleteUser = async (userId: string) => {
    try {
      // Deletar usuário
      const response = await apiClient.api.users[":id"].$delete({
        param: { id: userId },
      });

      if (response.ok) {
        const data = await response.json();
        console.log("Usuário deletado:", data);
      }
    } catch (error) {
      console.error("Erro ao deletar usuário:", error);
    }
  };

  const checkHealth = async () => {
    try {
      // Verificar saúde da API
      const response = await apiClient.api.health.$get();
      const data = await response.json();
      console.log("Status da API:", data);
    } catch (error) {
      console.error("Erro ao verificar saúde:", error);
    }
  };

  if (loading) {
    return <div>Carregando...</div>;
  }

  return (
    <div>
      <h1>Exemplo de uso do RPC Client</h1>
      <button onClick={createUser}>Criar Usuário</button>
      <button onClick={checkHealth}>Verificar Saúde</button>

      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} - {user.email}
            <button onClick={() => updateUser(user.id)}>Atualizar</button>
            <button onClick={() => deleteUser(user.id)}>Deletar</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
