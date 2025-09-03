import {
  Accordion,
  AccordionContent,
  AccordionItem,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { PlusIcon } from "lucide-react";

const faq = [
  {
    question: "How does NiaClone personalize product recommendations?",
    answer:
      "NiaClone uses advanced AI to analyze your role, tech stack, and use case, surfacing the most relevant tools for your needs.",
  },
  {
    question: "What integrations are available?",
    answer:
      "NiaClone integrates with Slack, Zapier, Notion, Google Workspace, and offers API access for workflow automation.",
  },
  {
    question: "How is pricing structured?",
    answer:
      "We offer simple, pay-per-seat pricing with unlimited indexing and access to all features. See our pricing section for details.",
  },
  {
    question: "Is my data private and secure?",
    answer:
      "Yes. We use industry-standard encryption and never share your data with third parties. Your privacy and security are our top priorities.",
  },
  {
    question: "Can I try NiaClone before purchasing?",
    answer:
      "Absolutely! Start your free trial instantly—no credit card required.",
  },
  {
    question: "Who is NiaClone for?",
    answer:
      "NiaClone is built for startup founders, product managers, and tech early adopters who want to discover and evaluate SaaS products faster.",
  },
];

const FAQ = () => {
  return (
    <div id="faq" className="w-full max-w-screen-xl mx-auto py-8 xs:py-16 px-6">
      <h2 className="md:text-center text-3xl xs:text-4xl md:text-5xl !leading-[1.15] font-bold tracking-tighter">
        Frequently Asked Questions
      </h2>
      <p className="mt-1.5 md:text-center xs:text-lg text-muted-foreground">
        Answers to common questions about NiaClone and AI product discovery.
      </p>

      <div className="min-h-[550px] md:min-h-[320px] xl:min-h-[300px]">
        <Accordion
          type="single"
          collapsible
          className="mt-8 space-y-4 md:columns-2 gap-4"
        >
          {faq.map(({ question, answer }, index) => (
            <AccordionItem
              key={question}
              value={`question-${index}`}
              className="bg-accent/10 py-1 px-4 rounded-xl border-none !mt-0 !mb-4 break-inside-avoid"
            >
              <AccordionPrimitive.Header className="flex">
                <AccordionPrimitive.Trigger
                  className={cn(
                    "flex flex-1 items-center justify-between py-4 font-semibold tracking-tight transition-all hover:underline [&[data-state=open]>svg]:rotate-45",
                    "text-start text-lg"
                  )}
                >
                  {question}
                  <PlusIcon className="h-5 w-5 shrink-0 text-muted-foreground transition-transform duration-200" />
                </AccordionPrimitive.Trigger>
              </AccordionPrimitive.Header>
              <AccordionContent className="text-[15px]">
                {answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
};

export default FAQ;
