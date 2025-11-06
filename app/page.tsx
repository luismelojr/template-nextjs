import { Navigation } from "@/components/navigation";
import { HeroSection } from "@/components/hero-section";
import { SocialProofSection } from "@/components/social-proof-section";
import { FeaturesSection } from "@/components/features-section";
import { TechStackSection } from "@/components/tech-stack-section";
import { CTASection } from "@/components/cta-section";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <SocialProofSection />
      <FeaturesSection />
      <TechStackSection />
      <CTASection />
      <Footer />
    </div>
  );
}
