import { Separator } from "@/components/ui/separator";
import { GithubIcon, TwitterIcon } from "lucide-react";
import Link from "next/link";

const footerSections = [
  {
    title: "Product",
    links: [
      { title: "Overview", href: "#" },
      { title: "Features", href: "#features" },
      { title: "Pricing", href: "#pricing" },
      { title: "Integrations", href: "#" },
      { title: "FAQ", href: "#faq" },
    ],
  },
  {
    title: "Company",
    links: [
      { title: "About", href: "#" },
      { title: "Careers", href: "#" },
      { title: "Contact", href: "#contact" },
      { title: "Blog", href: "#" },
    ],
  },
  {
    title: "Legal",
    links: [
      { title: "Terms", href: "#" },
      { title: "Privacy", href: "#" },
    ],
  },
];

const Footer = () => {
  return (
    <footer className="mt-12 xs:mt-20 dark bg-background border-t">
      <div className="max-w-screen-xl mx-auto py-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-x-8 gap-y-10 px-6">
        <div className="col-span-full md:col-span-2">
          {/* NiaClone Logo */}
          <span className="text-3xl font-bold text-accent">NiaClone</span>
          <p className="mt-4 text-muted-foreground max-w-xs">
            AI-powered product discovery for startups, PMs, and tech teams. YC-inspired. Built for speed and clarity.
          </p>
        </div>
        {footerSections.map(({ title, links }) => (
          <div key={title}>
            <h6 className="font-semibold text-foreground">{title}</h6>
            <ul className="mt-6 space-y-4">
              {links.map(({ title, href }) => (
                <li key={title}>
                  <Link
                    href={href}
                    className="text-muted-foreground hover:text-accent"
                  >
                    {title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <Separator />
      <div className="max-w-screen-xl mx-auto py-8 flex flex-col-reverse sm:flex-row items-center justify-between gap-x-2 gap-y-5 px-6">
        {/* Copyright */}
        <span className="text-muted-foreground text-center xs:text-start">
          &copy; {new Date().getFullYear()} NiaClone. All rights reserved.
        </span>
        <div className="flex items-center gap-5 text-muted-foreground">
          <Link href="https://twitter.com/niaclone" target="_blank">
            <TwitterIcon className="h-5 w-5 hover:text-accent" />
          </Link>
          <Link href="https://github.com/niaclone" target="_blank">
            <GithubIcon className="h-5 w-5 hover:text-accent" />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
