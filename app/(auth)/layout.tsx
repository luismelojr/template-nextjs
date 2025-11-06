import { AnimatedGridPattern } from "@/components/ui/animated-grid-pattern";
import { Toaster } from "@/components/ui/sonner";
import { cn } from "@/lib/utils";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden py-12">
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

      {/* Content */}
      <div className="relative z-10 w-full max-w-md px-4">
        {children}
        <Toaster />
      </div>
    </div>
  );
}
