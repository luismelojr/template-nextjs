import { useQuery } from "@tanstack/react-query";
import { client } from "@/lib/hono";

export const useGetUsers = () => {
  const query = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const response = await client.api.users.$get();

      if (!response.ok) {
        throw new Error("Falha ao buscar usuários");
      }

      const { users } = await response.json();
      return users;
    },
  });

  return query;
};
