import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { CircleCheck } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: 29,
    description:
      "For individuals and small teams getting started with AI-powered product discovery.",
    features: [
      "1 seat included",
      "Unlimited product indexing",
      "Personalized recommendations",
      "Slack, Zapier, Notion integrations",
      "Email support",
    ],
    buttonText: "Start free trial",
  },
  {
    name: "Growth",
    price: 49,
    isPopular: true,
    description:
      "Best for growing teams who need advanced integrations and collaboration.",
    features: [
      "Everything in Starter",
      "Up to 10 seats",
      "API access",
      "Advanced analytics",
      "Priority support",
    ],
    buttonText: "Start free trial",
  },
  {
    name: "Enterprise",
    price: "Custom",
    description:
      "Custom solutions for large organizations and advanced security needs.",
    features: [
      "Unlimited seats",
      "Dedicated onboarding",
      "Custom integrations",
      "SAML/SSO",
      "Dedicated support",
    ],
    buttonText: "Contact sales",
  },
];

const Pricing = () => {
  return (
    <div id="pricing" className="max-w-screen-lg mx-auto py-12 xs:py-20 px-6">
      <h1 className="text-4xl xs:text-5xl font-bold text-center tracking-tight">
        Pricing
      </h1>
      <div className="mt-8 xs:mt-14 grid grid-cols-1 lg:grid-cols-3 items-center gap-8 lg:gap-0">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={cn(
              "relative bg-card border p-7 rounded-xl lg:rounded-none lg:first:rounded-l-xl lg:last:rounded-r-xl",
              {
                "bg-accent/20 border-[2px] border-accent py-12 !rounded-xl shadow-xl":
                  plan.isPopular,
              }
            )}
          >
            {plan.isPopular && (
              <Badge className="absolute top-0 right-1/2 translate-x-1/2 -translate-y-1/2 bg-accent text-accent-foreground">
                Most Popular
              </Badge>
            )}
            <h3 className="text-lg font-medium">{plan.name}</h3>
            <p className="mt-2 text-4xl font-bold">{typeof plan.price === 'number' ? `$${plan.price}/mo` : plan.price}</p>
            <p className="mt-4 font-medium text-muted-foreground">
              {plan.description}
            </p>
            <Separator className="my-6" />
            <ul className="space-y-2">
              {plan.features.map((feature) => (
                <li key={feature} className="flex items-start gap-2">
                  <CircleCheck className="h-4 w-4 mt-1 text-accent" />
                  {feature}
                </li>
              ))}
            </ul>
            <Button
              variant={plan.isPopular ? "default" : "outline"}
              size="lg"
              className={cn("w-full mt-6 rounded-full", plan.isPopular ? "bg-accent text-accent-foreground hover:bg-accent/80" : "")}
              asChild={plan.buttonText === "Start free trial"}
            >
              {plan.buttonText === "Start free trial" ? (
                <a href="/signup">{plan.buttonText}</a>
              ) : (
                plan.buttonText
              )}
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
