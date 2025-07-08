import React, { ForwardRefExoticComponent, RefAttributes } from "react";
import { Card } from "../ui/card";
import { Check, LucideProps } from "lucide-react";

interface EnterpriseFeature {
  title: string;
  description: string;
  icon: ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>
  >;
  features: string[];
};

type Props = {
  enterpriseFeatures: EnterpriseFeature[];
};

export const EnterpriseFeatures = ({
  enterpriseFeatures
}: Props) => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Enterprise-Grade
            <span className="block bg-gradient-to-r from-cosmic-400 to-nebula-400 bg-clip-text text-transparent">
              Solutions
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Advanced features and dedicated support for organizations that need
            enterprise-level capabilities.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {enterpriseFeatures.map((feature, index) => (
            <Card key={index} className="card animate-glow p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-cosmic-600 to-nebula-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <feature.icon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-300 mb-6">{feature.description}</p>
              <ul className="space-y-2">
                {feature.features.map((item, itemIndex) => (
                  <li
                    key={itemIndex}
                    className="flex items-center text-sm text-gray-300"
                  >
                    <Check className="h-4 w-4 text-green-400 mr-2 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
