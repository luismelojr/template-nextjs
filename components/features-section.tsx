import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Database, Lock, Zap, Code2, Layers, Shield } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Next.js 16 App Router",
    description: "Built with the latest Next.js features including Server Components and Server Actions for optimal performance.",
  },
  {
    icon: Database,
    title: "Prisma + PostgreSQL",
    description: "Type-safe database queries with Prisma ORM and PostgreSQL for reliable data management.",
  },
  {
    icon: Lock,
    title: "Better Auth",
    description: "Complete authentication system with email/password, sessions, and social providers ready to configure.",
  },
  {
    icon: Code2,
    title: "Hono API",
    description: "Lightning-fast API routes with Hono.js, including type-safe RPC client for frontend integration.",
  },
  {
    icon: Layers,
    title: "shadcn/ui + Magic UI",
    description: "Beautiful, accessible components with shadcn/ui and animated Magic UI components built-in.",
  },
  {
    icon: Shield,
    title: "Type-Safe Validation",
    description: "End-to-end type safety with TypeScript and Zod schemas for bulletproof API validation.",
  },
];

export function FeaturesSection() {
  return (
    <section id="features" className="py-24 bg-muted/20">
      <div className="max-w-screen-xl mx-auto px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Everything you need to start building
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A production-ready boilerplate with modern tools and best practices built-in.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <Card key={feature.title} className="border-2 hover:border-primary/50 transition-colors">
                <CardHeader>
                  <div className="size-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Icon className="size-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                  <CardDescription className="text-base">{feature.description}</CardDescription>
                </CardHeader>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
