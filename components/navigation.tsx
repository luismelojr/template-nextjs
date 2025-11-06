"use client";

import Link from "next/link";

export function Navigation() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-sm border-b">
      <div className="max-w-screen-xl mx-auto px-8 py-4">
        <div className="flex items-center justify-center">
          <Link href="/" className="flex items-center gap-2">
            <div className="size-8 bg-primary rounded-md" />
            <span className="font-semibold text-lg">Better</span>
          </Link>
        </div>
      </div>
    </nav>
  );
}
