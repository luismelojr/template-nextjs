"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Navigation() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-sm border-b">
      <div className="max-w-screen-xl mx-auto px-8 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="size-8 bg-primary rounded-md" />
            <span className="font-semibold text-lg">Better</span>
          </Link>

          <div className="flex items-center gap-4">
            <Link href="/login">
              <Button variant="ghost">Entrar</Button>
            </Link>
            <Link href="/signup">
              <Button>Começar grátis</Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
