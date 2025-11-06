"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { TextInput } from "@/components/ui/text-input";
import { AuthCard } from "@/components/auth-card";
import { signIn } from "@/lib/auth-client";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    try {
      await signIn.email({
        email,
        password,
      });
      router.push("/dashboard");
    } catch (err) {
      setError("Credenciais inválidas. Tente novamente.");
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AuthCard
      title="Bem-vindo de volta"
      description="Entre com seu email e senha para acessar sua conta"
      footer={
        <div className="text-center text-sm text-muted-foreground">
          Não tem uma conta?{" "}
          <Link href="/signup" className="text-primary font-medium hover:underline">
            Criar conta
          </Link>
        </div>
      }
    >
      <form onSubmit={handleSubmit} className="space-y-4">
        <TextInput
          label="Email"
          type="email"
          placeholder="seu@email.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          disabled={isLoading}
        />

        <TextInput
          label="Senha"
          type="password"
          placeholder="••••••••"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          disabled={isLoading}
          labelAction={
            <Link
              href="/forgot-password"
              className="text-sm text-primary hover:underline"
            >
              Esqueceu a senha?
            </Link>
          }
        />

        {error && (
          <div className="p-3 text-sm text-red-600 bg-red-50 border border-red-200 rounded-md">
            {error}
          </div>
        )}

        <Button
          type="submit"
          className="w-full h-11 text-base"
          disabled={isLoading}
        >
          {isLoading ? "Entrando..." : "Entrar"}
        </Button>
      </form>
    </AuthCard>
  );
}
