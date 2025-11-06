"use client";

import { signIn, signUp, signOut, useSession } from "@/lib/auth-client";
import { useState } from "react";

export function AuthExample() {
  const { data: session, isPending } = useSession();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();

    const { data, error } = await signUp.email({
      email,
      password,
      name,
    });

    if (error) {
      console.error("Erro no registro:", error);
      alert(`Erro: ${error.message}`);
      return;
    }

    console.log("Registro bem-sucedido:", data);
    alert("Registro bem-sucedido!");
  };

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault();

    const { data, error } = await signIn.email({
      email,
      password,
    });

    if (error) {
      console.error("Erro no login:", error);
      alert(`Erro: ${error.message}`);
      return;
    }

    console.log("Login bem-sucedido:", data);
    alert("Login bem-sucedido!");
  };

  const handleSignOut = async () => {
    await signOut();
    alert("Logout realizado!");
  };

  if (isPending) {
    return <div>Carregando...</div>;
  }

  if (session) {
    return (
      <div className="p-6 max-w-md mx-auto">
        <h2 className="text-2xl font-bold mb-4">Usuário Logado</h2>
        <div className="bg-gray-100 p-4 rounded mb-4">
          <p><strong>Nome:</strong> {session.user?.name}</p>
          <p><strong>Email:</strong> {session.user?.email}</p>
        </div>
        <button
          onClick={handleSignOut}
          className="w-full bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600"
        >
          Sair
        </button>
      </div>
    );
  }

  return (
    <div className="p-6 max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-6">Autenticação</h2>

      {/* Formulário de Registro */}
      <form onSubmit={handleSignUp} className="mb-6 border-b pb-6">
        <h3 className="text-xl font-semibold mb-4">Registrar</h3>

        <input
          type="text"
          placeholder="Nome"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full mb-3 px-4 py-2 border rounded"
          required
        />

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full mb-3 px-4 py-2 border rounded"
          required
        />

        <input
          type="password"
          placeholder="Senha (mín. 8 caracteres)"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full mb-4 px-4 py-2 border rounded"
          required
          minLength={8}
        />

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        >
          Registrar
        </button>
      </form>

      {/* Formulário de Login */}
      <form onSubmit={handleSignIn}>
        <h3 className="text-xl font-semibold mb-4">Entrar</h3>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full mb-3 px-4 py-2 border rounded"
          required
        />

        <input
          type="password"
          placeholder="Senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full mb-4 px-4 py-2 border rounded"
          required
        />

        <button
          type="submit"
          className="w-full bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600"
        >
          Entrar
        </button>
      </form>
    </div>
  );
}
