import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Terminal } from "lucide-react";

export function CTASection() {
  return (
    <section className="py-24 bg-muted/20">
      <div className="max-w-screen-xl mx-auto px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to start building?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Get started in minutes with our complete setup guide and documentation.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Card className="p-8">
            <div className="flex items-center gap-3 mb-6">
              <Terminal className="size-6 text-primary" />
              <h3 className="text-xl font-semibold">Quick Start</h3>
            </div>

            <div className="space-y-4">
              <div className="bg-zinc-950 dark:bg-zinc-900 rounded-lg p-4 font-mono text-sm">
                <div className="flex items-center gap-2 text-zinc-400 mb-2">
                  <span className="text-green-400">$</span>
                  <span>Clone the repository</span>
                </div>
                <code className="text-zinc-100">
                  git clone https://github.com/yourusername/better.git
                </code>
              </div>

              <div className="bg-zinc-950 dark:bg-zinc-900 rounded-lg p-4 font-mono text-sm">
                <div className="flex items-center gap-2 text-zinc-400 mb-2">
                  <span className="text-green-400">$</span>
                  <span>Install dependencies</span>
                </div>
                <code className="text-zinc-100">npm install</code>
              </div>

              <div className="bg-zinc-950 dark:bg-zinc-900 rounded-lg p-4 font-mono text-sm">
                <div className="flex items-center gap-2 text-zinc-400 mb-2">
                  <span className="text-green-400">$</span>
                  <span>Start PostgreSQL</span>
                </div>
                <code className="text-zinc-100">docker-compose up -d</code>
              </div>

              <div className="bg-zinc-950 dark:bg-zinc-900 rounded-lg p-4 font-mono text-sm">
                <div className="flex items-center gap-2 text-zinc-400 mb-2">
                  <span className="text-green-400">$</span>
                  <span>Run migrations</span>
                </div>
                <code className="text-zinc-100">npx prisma migrate dev</code>
              </div>

              <div className="bg-zinc-950 dark:bg-zinc-900 rounded-lg p-4 font-mono text-sm">
                <div className="flex items-center gap-2 text-zinc-400 mb-2">
                  <span className="text-green-400">$</span>
                  <span>Start the development server</span>
                </div>
                <code className="text-zinc-100">npm run dev</code>
              </div>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/signup">
                <Button size="lg" className="text-base">
                  Começar agora
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="text-base">
                View on GitHub
              </Button>
            </div>
          </Card>
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-muted-foreground">
            Open source and free to use. MIT License.
          </p>
        </div>
      </div>
    </section>
  );
}
