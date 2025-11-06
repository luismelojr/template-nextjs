import Link from "next/link";
import { Button } from "@/components/ui/button";
import { AnimatedGridPattern } from "@/components/ui/animated-grid-pattern";
import { cn } from "@/lib/utils";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Animated Background */}
      <AnimatedGridPattern
        numSquares={30}
        maxOpacity={0.1}
        duration={3}
        repeatDelay={1}
        className={cn(
          "[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]",
          "inset-x-0 inset-y-[-30%] h-[200%] skew-y-12"
        )}
      />

      <div className="relative z-10 max-w-screen-xl mx-auto px-8 py-16">
        <div className="flex flex-col items-center text-center gap-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border bg-background/50 backdrop-blur-sm">
            <span className="size-2 bg-green-500 rounded-full animate-pulse" />
            <span className="text-sm font-medium">Production-ready Next.js boilerplate</span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight max-w-4xl">
            Build your <span className="text-primary">SaaS faster</span> with Better
          </h1>

          {/* Description */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl">
            A complete Next.js boilerplate with authentication, database, API routes, and beautiful UI components.
            Everything you need to ship your product quickly.
          </p>

          {/* CTA Button */}
          <div className="flex gap-4 mt-4">
            <Link href="/signup">
              <Button size="lg" className="text-base">
                Começar grátis
              </Button>
            </Link>
            <Button size="lg" variant="outline" className="text-base">
              View on GitHub
            </Button>
          </div>

          {/* Hero Image Placeholder */}
          <div className="mt-16 w-full max-w-5xl">
            <div className="relative aspect-video rounded-xl border bg-gradient-to-br from-primary/20 via-background to-secondary/20 shadow-2xl overflow-hidden">
              <div className="absolute inset-0 bg-grid-white/10" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-4xl font-bold text-muted-foreground/20">
                  Your Product Preview
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
