import { Badge } from "@/components/ui/badge";

const techStack = {
  frontend: [
    { name: "Next.js 16", color: "bg-black dark:bg-white text-white dark:text-black" },
    { name: "React 19", color: "bg-blue-500 text-white" },
    { name: "TypeScript", color: "bg-blue-600 text-white" },
    { name: "Tailwind CSS 4", color: "bg-cyan-500 text-white" },
    { name: "shadcn/ui", color: "bg-zinc-800 text-white" },
    { name: "Magic UI", color: "bg-purple-600 text-white" },
  ],
  backend: [
    { name: "Hono.js", color: "bg-orange-500 text-white" },
    { name: "Prisma ORM", color: "bg-teal-600 text-white" },
    { name: "PostgreSQL", color: "bg-blue-700 text-white" },
    { name: "Better Auth", color: "bg-green-600 text-white" },
  ],
  tools: [
    { name: "React Query", color: "bg-red-500 text-white" },
    { name: "Zod", color: "bg-indigo-600 text-white" },
    { name: "Docker", color: "bg-blue-500 text-white" },
    { name: "ESLint", color: "bg-purple-500 text-white" },
  ],
};

function TechStackCategory({ title, items }: { title: string; items: typeof techStack.frontend }) {
  return (
    <div>
      <h3 className="text-lg font-semibold mb-4 text-foreground/80">{title}</h3>
      <div className="flex flex-wrap gap-2">
        {items.map((tech) => (
          <Badge key={tech.name} variant="secondary" className={`${tech.color} text-sm px-3 py-1.5`}>
            {tech.name}
          </Badge>
        ))}
      </div>
    </div>
  );
}

export function TechStackSection() {
  return (
    <section className="py-24">
      <div className="max-w-screen-xl mx-auto px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Built with modern technologies
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Carefully selected stack for maximum developer experience and production readiness.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          <TechStackCategory title="Frontend" items={techStack.frontend} />
          <TechStackCategory title="Backend & Database" items={techStack.backend} />
          <TechStackCategory title="Developer Tools" items={techStack.tools} />
        </div>

        <div className="mt-16 p-8 rounded-xl border bg-muted/20">
          <h3 className="text-xl font-semibold mb-4">What's Included</h3>
          <ul className="grid md:grid-cols-2 gap-3 text-sm text-muted-foreground">
            <li className="flex items-center gap-2">
              <span className="size-1.5 rounded-full bg-primary" />
              Complete CRUD API examples with Hono
            </li>
            <li className="flex items-center gap-2">
              <span className="size-1.5 rounded-full bg-primary" />
              Type-safe API client with RPC
            </li>
            <li className="flex items-center gap-2">
              <span className="size-1.5 rounded-full bg-primary" />
              Authentication with Better Auth
            </li>
            <li className="flex items-center gap-2">
              <span className="size-1.5 rounded-full bg-primary" />
              Prisma schema with migrations
            </li>
            <li className="flex items-center gap-2">
              <span className="size-1.5 rounded-full bg-primary" />
              Docker Compose for PostgreSQL
            </li>
            <li className="flex items-center gap-2">
              <span className="size-1.5 rounded-full bg-primary" />
              Zod validation schemas
            </li>
            <li className="flex items-center gap-2">
              <span className="size-1.5 rounded-full bg-primary" />
              React Query setup with hooks
            </li>
            <li className="flex items-center gap-2">
              <span className="size-1.5 rounded-full bg-primary" />
              ESLint + TypeScript configured
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
