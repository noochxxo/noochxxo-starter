import { Dispatch, SetStateAction } from "react";
import { Button } from "../ui/button";

enum BillingCycle {
  Monthly = "monthly",
  Yearly = "yearly"
}

type Props = {
  billingCycle: string;
  setBillingCycle: Dispatch<SetStateAction<BillingCycle>>
  getDiscountPercentage: () => number;
};

export const HeroSection = ({
  billingCycle,
  setBillingCycle,
  getDiscountPercentage
}: Props) => {
  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <div className="animate-float">
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cosmic-400 via-nebula-400 to-stardust-400 bg-clip-text text-transparent mb-6">
            Simple, Transparent
            <span className="block">Pricing</span>
          </h1>
        </div>

        <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
          Choose the perfect plan for your needs. Start free, scale as you grow,
          and unlock the full potential of our cosmic platform.
        </p>

        {/* Billing Toggle */}
        <div className="flex items-center justify-center mb-12">
          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-2 flex items-center space-x-2">
            <Button
              onClick={() => setBillingCycle(BillingCycle.Monthly)}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                billingCycle === "monthly"
                  ? "bg-gradient-to-r from-cosmic-600 to-nebula-600 text-white shadow-lg"
                  : "text-gray-300 hover:text-white"
              }`}
            >
              Monthly
            </Button>
            <Button
              onClick={() => setBillingCycle(BillingCycle.Yearly)}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 relative ${
                billingCycle === "yearly"
                  ? "bg-gradient-to-r from-cosmic-600 to-nebula-600 text-white shadow-lg"
                  : "text-gray-300 hover:text-white"
              }`}
            >
              Yearly
              {billingCycle === "yearly" && (
                <span className="absolute -top-2 -right-2 bg-gradient-to-r from-green-500 to-emerald-500 text-white text-xs px-2 py-1 rounded-full">
                  Save {getDiscountPercentage()}%
                </span>
              )}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
