import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQProps {
  question: string;
  answer: string;
  value: string;
}


const FAQList: FAQProps[] = [
  {
    question: "How does the AI-powered code analysis work?",
    answer:
      "Our AI model evaluates your code, identifying inefficiencies and suggesting optimizations.",
    value: "item-1",
  },
  {
    question: "Is there a limit to how many times I can use the free version?",
    answer:
      "No, you can analyze an unlimited number of code snippets using the free version.",
    value: "item-2",
  },
  {
    question: "What benefits do I get with the Pro plan?",
    answer:
      "The Pro plan offers deeper insights, better AI recommendations, and priority support.",
    value: "item-3",
  },
  {
    question: "Can I upgrade or downgrade my plan anytime?",
    answer:
      "Yes, you can switch between plans at any time through your account settings.",
    value: "item-4",
  },
  {
    question: "Do you provide refunds if I'm not satisfied?",
    answer: "We offer a 7-day refund policy for Pro and Ultimate plans.",
    value: "item-5",
  },
];

export const FAQ = () => {
  return (
    <section
      id="faq"
      className="container py-24 sm:py-32"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        Frequently Asked{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Questions
        </span>
      </h2>

      <Accordion
        type="single"
        collapsible
        className="w-full AccordionRoot"
      >
        {FAQList.map(({ question, answer, value }: FAQProps) => (
          <AccordionItem
            key={value}
            value={value}
          >
            <AccordionTrigger className="text-left">
              {question}
            </AccordionTrigger>

            <AccordionContent>{answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>

      <h3 className="font-medium mt-4">
        Still have questions?{" "}
        <a
          rel="noreferrer noopener"
          href="#"
          className="text-primary transition-all border-primary hover:border-b-2"
        >
          Contact us
        </a>
      </h3>
    </section>
  );
};
