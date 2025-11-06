"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { TextInput } from "@/components/ui/text-input";
import { AuthCard } from "@/components/auth-card";
import { useRegister } from "@/features/auth/api/use-register";

export default function SignUpPage() {
  const { onSubmit, form } = useRegister();

  return (
    <AuthCard
      title="Criar conta"
      description="Preencha os campos abaixo para criar sua conta"
      footer={
        <>
          <div className="text-center text-sm text-muted-foreground">
            Já tem uma conta?{" "}
            <Link href="/login" className="text-primary font-medium hover:underline">
              Fazer login
            </Link>
          </div>
          <div className="mt-4 text-xs text-center text-muted-foreground">
            Ao criar uma conta, você concorda com nossos{" "}
            <Link href="/terms" className="text-primary hover:underline">
              Termos de Serviço
            </Link>{" "}
            e{" "}
            <Link href="/privacy" className="text-primary hover:underline">
              Política de Privacidade
            </Link>
          </div>
        </>
      }
    >
      <form className="space-y-4" onSubmit={form.handleSubmit(onSubmit)}>
        <TextInput
          label="Nome completo"
          type="text"
          placeholder="João Silva"
          required
          error={form.formState.errors.name}
          {...form.register("name")}
        />

        <TextInput
          label="Email"
          type="email"
          placeholder="seu@email.com"
          required
          error={form.formState.errors.email}
          {...form.register("email")}
        />

        <TextInput
          label="Senha"
          type="password"
          placeholder="••••••••"
          required
          helperText="Mínimo de 8 caracteres"
          error={form.formState.errors.password}
          {...form.register("password")}
        />

        <TextInput
          label="Confirmar senha"
          type="password"
          placeholder="••••••••"
          required
          error={form.formState.errors.confirmPassword}
          {...form.register("confirmPassword")}
        />

        <Button type="submit" className="w-full h-11 text-base" loading={form.formState.isLoading}>
          Criar conta
        </Button>
      </form>
    </AuthCard>
  );
}
