import { cn } from "@/lib/utils";
import { Card } from "../ui/card";
import { Check, Link, LucideProps, Star, X } from "lucide-react";
import { Button } from "../ui/button";
import { ForwardRefExoticComponent, RefAttributes } from "react";

interface Feature {
  name: string;
  included: boolean;
}

interface Price {
  monthly: number;
  yearly: number;
};

interface Plans {
  name: string;
  description: string;
  icon: ForwardRefExoticComponent<Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>>;
  price: Price;
  popular: boolean;
  features: Feature[];
  cta: string;
  gradient: string;
}

enum BillingCycle {
  Monthly = "monthly",
  Yearly = "yearly"
}


type Props = {
  plans: Plans[];
  billingCycle: BillingCycle;
};

export const PricingPlans = ({ plans, billingCycle }: Props) => {
  return (
    <section className="pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={cn(
                "card p-8 relative",
                plan.popular
                  ? "ring-2 ring-cosmic-500 scale-105 animate-glow"
                  : ""
              )}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-cosmic-600 to-nebula-600 text-white px-4 py-2 rounded-full text-sm font-medium flex items-center space-x-2">
                    <Star className="h-4 w-4" />
                    <span>Most Popular</span>
                  </div>
                </div>
              )}

              {/* Plan Header */}
              <div className="text-center mb-8">
                <div
                  className={`w-16 h-16 bg-gradient-to-r ${plan.gradient} rounded-full flex items-center justify-center mx-auto mb-4`}
                >
                  <plan.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">
                  {plan.name}
                </h3>
                <p className="text-gray-300 text-sm mb-6">{plan.description}</p>

                <div className="flex items-baseline justify-center">
                  <span className="text-5xl font-bold text-white">
                    ${plan.price[billingCycle]}
                  </span>
                  <span className="text-gray-400 ml-2">
                    /{billingCycle === "monthly" ? "month" : "year"}
                  </span>
                </div>

                {billingCycle === "yearly" && (
                  <p className="text-green-400 text-sm mt-2">
                    Save ${plan.price.monthly * 12 - plan.price.yearly} per year
                  </p>
                )}
              </div>

              {/* Features List */}
              <div className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center">
                    {feature.included ? (
                      <Check className="h-5 w-5 text-green-400 mr-3 flex-shrink-0" />
                    ) : (
                      <X className="h-5 w-5 text-gray-500 mr-3 flex-shrink-0" />
                    )}
                    <span
                      className={`text-sm ${
                        feature.included ? "text-gray-300" : "text-gray-500"
                      }`}
                    >
                      {feature.name}
                    </span>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <Button
                asChild
                size="lg"
                className={cn(
                  "justify-center w-full",
                  plan.popular ? "primary-btn" : "outline-btn"
                )}
              >
                <Link href={plan.name === "Enterprise" ? "" : "/sign-up"}>
                  {plan.cta}
                </Link>
              </Button>

              {plan.name !== "Enterprise" && (
                <p className="text-gray-400 text-xs text-center mt-3">
                  14-day free trial • No credit card required
                </p>
              )}
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
