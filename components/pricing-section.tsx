import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Basic",
    price: "$9",
    description: "Perfect for getting started",
    features: [
      "Up to 10 projects",
      "Basic analytics",
      "24/7 support",
      "1GB storage",
      "Community access",
    ],
    popular: false,
  },
  {
    name: "Premium",
    price: "$29",
    description: "Best for professionals",
    features: [
      "Unlimited projects",
      "Advanced analytics",
      "Priority support",
      "10GB storage",
      "AI-powered insights",
      "Custom integrations",
    ],
    popular: true,
  },
  {
    name: "Enterprise",
    price: "$99",
    description: "For large organizations",
    features: [
      "Unlimited everything",
      "Dedicated account manager",
      "24/7 phone support",
      "Unlimited storage",
      "Advanced security",
      "Custom contracts",
      "SLA guarantee",
    ],
    popular: false,
  },
  {
    name: "Ultimate",
    price: "Custom",
    description: "Tailored to your needs",
    features: [
      "Everything in Enterprise",
      "White-label solution",
      "On-premise deployment",
      "Custom development",
      "Training & onboarding",
      "Dedicated infrastructure",
    ],
    popular: false,
  },
];

function PricingCard({ name, price, description, features, popular }: typeof plans[0]) {
  return (
    <Card className={`relative ${popular ? "border-primary shadow-lg scale-105" : ""}`}>
      {popular && (
        <Badge className="absolute -top-3 left-1/2 -translate-x-1/2">
          Most Popular
        </Badge>
      )}
      <CardHeader>
        <CardTitle className="text-2xl">{name}</CardTitle>
        <CardDescription>{description}</CardDescription>
        <div className="mt-4">
          <span className="text-4xl font-bold">{price}</span>
          {price !== "Custom" && <span className="text-muted-foreground">/month</span>}
        </div>
      </CardHeader>
      <CardContent>
        <ul className="space-y-3">
          {features.map((feature) => (
            <li key={feature} className="flex items-start gap-2">
              <Check className="size-5 text-primary shrink-0 mt-0.5" />
              <span className="text-sm">{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter>
        <Button className="w-full" variant={popular ? "default" : "outline"}>
          {price === "Custom" ? "Contact Sales" : "Subscribe"}
        </Button>
      </CardFooter>
    </Card>
  );
}

export function PricingSection() {
  return (
    <section id="pricing" className="py-24">
      <div className="max-w-screen-xl mx-auto px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Simple, transparent pricing
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose the perfect plan for your needs. All plans include a 14-day free trial.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {plans.map((plan) => (
            <PricingCard key={plan.name} {...plan} />
          ))}
        </div>
      </div>
    </section>
  );
}
