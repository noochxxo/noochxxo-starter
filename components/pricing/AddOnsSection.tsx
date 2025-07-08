import { Check, LucideProps } from "lucide-react";
import { Card } from "../ui/card";
import { Button } from "../ui/button";
import { ForwardRefExoticComponent, RefAttributes } from "react";

interface Addon {
  name: string;
  description: string;
  price: number;
  icon: ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>
  >;
  features: string[];
}

type Props = {
  addOns: Addon[];
};

export const AddOnsSection = ({ addOns }: Props) => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Powerful Add-ons
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Enhance your plan with additional features and capabilities tailored
            to your specific needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {addOns.map((addon, index) => (
            <Card
              key={index}
              className="card p-6 text-center hover:scale-105 transition-transform duration-300"
            >
              <div className="w-12 h-12 bg-gradient-to-r from-stardust-600 to-cosmic-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                <addon.icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                {addon.name}
              </h3>
              <p className="text-gray-300 text-sm mb-4">{addon.description}</p>
              <div className="text-2xl font-bold text-cosmic-400 mb-4">
                ${addon.price}/mo
              </div>
              <ul className="space-y-2 mb-6">
                {addon.features.map((feature, featureIndex) => (
                  <li
                    key={featureIndex}
                    className="text-xs text-gray-400 flex items-center"
                  >
                    <Check className="h-3 w-3 text-green-400 mr-2 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
              <Button
                variant="outline"
                size="sm"
                className="w-full outline-btn"
              >
                Add to Plan
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
