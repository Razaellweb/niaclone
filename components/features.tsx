import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Zap, UserCheck, Layers, Bot } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "AI-ranked Results",
    description:
      "Find the right tools 10x faster with AI-powered, relevance-ranked results tailored to your needs.",
    accent: "bg-accent/80 text-accent-foreground",
  },
  {
    icon: UserCheck,
    title: "Personalized Recommendations",
    description:
      "Get suggestions by role, stack, and use case—built for founders, PMs, and tech teams.",
    accent: "bg-primary/80 text-primary-foreground",
  },
  {
    icon: Layers,
    title: "Deep Product Profiles",
    description:
      "Explore detailed product pages with pricing, integrations, comparisons, and more.",
    accent: "bg-accent/60 text-accent-foreground",
  },
  {
    icon: Bot,
    title: "Automate Evaluation",
    description:
      "Connect Slack, Zapier, Notion, and API to automate your product evaluation workflows.",
    accent: "bg-primary/60 text-primary-foreground",
  },
];

const Features = () => {
  return (
    <div
      id="features"
      className="max-w-screen-xl mx-auto w-full py-12 xs:py-20 px-6"
    >
      <h2 className="text-3xl xs:text-4xl md:text-5xl md:leading-[3.5rem] font-bold tracking-tight sm:max-w-xl sm:text-center sm:mx-auto">
        Discover, Compare, and Automate Product Research
      </h2>
      <div className="mt-8 xs:mt-14 w-full mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-x-10 gap-y-12">
        {features.map((feature) => (
          <Card
            key={feature.title}
            className="flex flex-col border rounded-xl overflow-hidden shadow-none bg-card"
          >
            <CardHeader>
              <div className={`w-12 h-12 flex items-center justify-center rounded-full mb-2 ${feature.accent}`}>
                <feature.icon className="w-7 h-7" />
              </div>
              <h4 className="!mt-3 text-xl font-bold tracking-tight">
                {feature.title}
              </h4>
              <p className="mt-1 text-muted-foreground text-sm xs:text-[17px]">
                {feature.description}
              </p>
            </CardHeader>
            <CardContent className="mt-auto px-0 pb-0" />
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Features;
