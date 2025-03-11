import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Check } from "lucide-react";

enum PopularPlanType {
  NO = 0,
  YES = 1,
}

interface PricingProps {
  title: string;
  popular: PopularPlanType;
  price: number;
  description: string;
  buttonText: string;
  benefitList: string[];
}

const pricingList: PricingProps[] = [
  {
    title: "Free",
    popular: PopularPlanType.NO,
    price: 0,
    description: "Unlimited code analysis with basic insights.",
    buttonText: "Get Started",
    benefitList: [
      "Unlimited code analysis",
      "Standard time complexity reports",
      "Basic AI suggestions",
      "Community support",
    ],
  },
  {
    title: "Pro",
    popular: PopularPlanType.YES,
    price: 0.99,
    description: "Advanced AI-powered code analysis with optimal solutions.",
    buttonText: "Upgrade Now",
    benefitList: [
      "Everything in Free",
      "Best AI model for deep analysis",
      "Code optimization suggestions",
      "Detailed performance insights",
      "Priority support",
    ],
  },
  {
    title: "Ultimate",
    popular: PopularPlanType.NO,
    price: 1.99,
    description: "Full access to AI analysis and documentation references.",
    buttonText: "Go Ultimate",
    benefitList: [
      "Everything in Pro",
      "In-depth documentation references",
      "Historical analysis tracking",
      "Exclusive AI model access",
      "24/7 premium support",
    ],
  },
];

export const Pricing = () => {
  return (
    <section id="pricing" className="container py-24 sm:py-32">
      <h2 className="text-4xl md:text-5xl font-bold text-center">
        Get
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          {" "}
          Unlimited{" "}
        </span>
        Code Analysis
      </h2>
      <h3 className="text-xl text-center text-muted-foreground pt-4 pb-8">
        Choose the plan that fits your coding needs.
      </h3>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {pricingList.map((pricing: PricingProps) => (
          <Card
            key={pricing.title}
            className={`p-6 ${
              pricing.popular === PopularPlanType.YES
                ? "drop-shadow-lg border border-primary"
                : ""
            }`}
          >
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                {pricing.title}
                {pricing.popular === PopularPlanType.YES && (
                  <Badge variant="secondary" className="text-sm text-primary">
                    Most Popular
                  </Badge>
                )}
              </CardTitle>
              <div className="text-3xl font-bold">
                ${pricing.price}{" "}
                <span className="text-muted-foreground">/mo</span>
              </div>
              <CardDescription>{pricing.description}</CardDescription>
            </CardHeader>

            <CardContent>
              <Button className="w-full text-lg py-3">
                {pricing.buttonText}
              </Button>
            </CardContent>

            <hr className="w-4/5 m-auto my-4" />

            <CardFooter className="flex flex-col space-y-3">
              {pricing.benefitList.map((benefit: string) => (
                <div key={benefit} className="flex items-center">
                  <Check className="text-green-500" />
                  <span className="ml-2">{benefit}</span>
                </div>
              ))}
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
};
