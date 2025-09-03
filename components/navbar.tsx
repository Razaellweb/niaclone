import Link from "next/link";
import { Button } from "@/components/ui/button";
import ThemeToggle from "@/components/theme-toggle";

export const Navbar = () => {
  return (
    <nav className="w-full border-b border-accent/40 bg-background/80 backdrop-blur sticky top-0 z-30">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between px-6 py-4">
        <Link href="/" className="text-2xl font-bold text-accent tracking-tight">
          NiaClone
        </Link>
        <div className="flex items-center gap-4">
          <ThemeToggle />
          <Button
            size="lg"
            className="rounded-full bg-accent text-accent-foreground hover:bg-accent/80 font-semibold shadow-md"
            asChild
          >
            <a href="/signup">Start free trial</a>
          </Button>
        </div>
      </div>
    </nav>
  );
};
