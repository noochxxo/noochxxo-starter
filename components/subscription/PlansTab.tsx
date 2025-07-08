import { availablePlans, currentSubscription } from "@/mock_data";
import { calculateSavings } from "./utils";
import { Card } from "../ui/card";
import { cn } from "@/lib/utils";
import { Check } from "lucide-react";
import { Button } from "../ui/button";

export const PlansTab = () => (
  <div className="space-y-6">
    <Card className="card p-6">
      <h3 className="text-xl font-semibold text-white mb-6">Available Plans</h3>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {availablePlans.map((plan) => {
          const isCurrentPlan = plan.name === currentSubscription.planName;
          const savings = calculateSavings(
            plan.price.monthly,
            plan.price.yearly
          );

          return (
            <Card
              key={plan.name}
              className={cn(
                "card p-6 relative",
                plan.popular ? "ring-2 ring-cosmic-500" : ""
              )}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-cosmic-600 to-nebula-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="text-center mb-6">
                <div
                  className={`w-12 h-12 bg-gradient-to-r ${plan.gradient} rounded-lg flex items-center justify-center mx-auto mb-4`}
                >
                  <plan.icon className="h-6 w-6 text-white" />
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">
                  {plan.name}
                </h4>
                <div className="space-y-2">
                  <div className="flex items-baseline justify-center">
                    <span className="text-3xl font-bold text-white">
                      ${plan.price.monthly}
                    </span>
                    <span className="text-gray-400 ml-1">/month</span>
                  </div>
                  <div className="text-sm text-gray-400">
                    or ${plan.price.yearly}/year (save ${savings.amount})
                  </div>
                </div>
              </div>

              <ul className="space-y-3 mb-6">
                {plan.features.map((feature, index) => (
                  <li
                    key={index}
                    className="flex items-center text-sm text-gray-300"
                  >
                    <Check className="h-4 w-4 text-green-400 mr-2 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>

              <Button
                variant={isCurrentPlan ? "outline" : "default"}
                disabled={isCurrentPlan}
                className={cn(
                  "justify-center w-full",
                  isCurrentPlan ? "outline-btn" : "primary-btn"
                )}
              >
                {isCurrentPlan ? "Current Plan" : "Switch to This Plan"}
              </Button>
            </Card>
          );
        })}
      </div>
    </Card>
  </div>
);
