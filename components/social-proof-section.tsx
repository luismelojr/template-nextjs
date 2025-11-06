import { Marquee } from "@/components/ui/marquee";

const companies = [
  { name: "Google", logo: "G" },
  { name: "Microsoft", logo: "M" },
  { name: "GitHub", logo: "GH" },
  { name: "Uber", logo: "U" },
  { name: "Notion", logo: "N" },
  { name: "Stripe", logo: "S" },
  { name: "Vercel", logo: "▲" },
  { name: "Netflix", logo: "NF" },
];

function CompanyCard({ name, logo }: { name: string; logo: string }) {
  return (
    <div className="flex items-center justify-center w-40 h-20 mx-4 rounded-lg border bg-background/50 backdrop-blur-sm">
      <div className="flex flex-col items-center gap-1">
        <span className="text-2xl font-bold text-foreground/80">{logo}</span>
        <span className="text-xs text-muted-foreground">{name}</span>
      </div>
    </div>
  );
}

export function SocialProofSection() {
  return (
    <section className="py-16 border-y bg-muted/20">
      <div className="max-w-screen-xl mx-auto px-8">
        <div className="text-center mb-12">
          <p className="text-sm font-semibold text-muted-foreground tracking-wider uppercase">
            Trusted by teams from around the world
          </p>
        </div>

        <Marquee className="[--duration:40s]" pauseOnHover>
          {companies.map((company) => (
            <CompanyCard key={company.name} {...company} />
          ))}
        </Marquee>
      </div>
    </section>
  );
}
