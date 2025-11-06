"use client";

import { Button } from "@/components/ui/button";
import { useGetUsers } from "@/features/users/api/use-get-users";

export default function Home() {
  const { data, isLoading } = useGetUsers();

  const searchUsers = () => {
    console.log("Buscar usuarios");
    console.log(data);
  };

  return (
    <div className="flex justify-center items-center flex-col min-h-screen space-y-2">
      <h1>Hello world</h1>
      <Button onClick={searchUsers} disabled={isLoading}>
        {isLoading ? "Loading..." : "Search Users"}
      </Button>
    </div>
  );
}
