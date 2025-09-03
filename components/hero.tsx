import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="min-h-[calc(100vh-4rem)] w-full flex items-center justify-center overflow-hidden border-b border-accent">
      <div className="max-w-screen-xl w-full flex flex-col lg:flex-row mx-auto items-center justify-between gap-y-14 gap-x-10 px-6 py-12 lg:py-0">
        <div className="max-w-xl">
          <Badge className="rounded-full py-1 border-none bg-accent text-accent-foreground text-base font-semibold">
            YC-inspired
          </Badge>
          <h1 className="mt-6 max-w-[20ch] text-3xl xs:text-4xl sm:text-5xl lg:text-[2.75rem] xl:text-5xl font-bold !leading-[1.2] tracking-tight">
            NiaClone
          </h1>
          <p className="mt-4 text-xl font-semibold text-primary">
            AI product discovery for builders
          </p>
          <p className="mt-6 max-w-[60ch] xs:text-lg text-muted-foreground">
            NiaClone is a YC-quality AI-powered product discovery platform for startups and PMs. Find the right tools faster with personalized recommendations and deep product insights.
          </p>
          <div className="mt-12 flex flex-col sm:flex-row items-center gap-4">
            <Button
              size="lg"
              className="w-full sm:w-auto rounded-full text-base bg-accent text-accent-foreground hover:bg-accent/80 shadow-lg"
              asChild
            >
              <a href="/signup">
                Start free trial <ArrowUpRight className="!h-5 !w-5 ml-2" />
              </a>
            </Button>
          </div>
        </div>
        <div className="relative lg:max-w-lg xl:max-w-xl w-full bg-accent/10 rounded-xl aspect-square flex items-center justify-center">
          <Image
            src="/niaclone-hero-dark.png"
            fill
            alt="NiaClone product discovery dashboard preview"
            className="object-cover rounded-xl shadow-xl"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
