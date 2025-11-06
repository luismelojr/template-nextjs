"use client";

import { useGetUsers } from "@/features/users/api/use-get-users";
import Image from "next/image";

export default function Home() {
  const { data, isLoading } = useGetUsers();

  const searchUsers = () => {
    console.log("Buscar usuarios");
    console.log(data);
  };

  return (
    <div className="flex justify-center items-center flex-col min-h-screen space-y-2">
      <h1>Hello world</h1>
      <button className="bg-red-300 py-2 px-4 rounded cursor-pointer" onClick={() => searchUsers()}>
        Buscar Usuarios
      </button>
    </div>
  );
}
