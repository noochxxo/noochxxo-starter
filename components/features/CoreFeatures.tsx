import React, { ForwardRefExoticComponent, RefAttributes } from "react";
import { Card } from "../ui/card";
import { LucideProps } from "lucide-react";

interface Feature {
  name: string;
  description: string;
  icon: ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>
  >;
}

interface CoreFeature {
  category: string;
  icon: ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>
  >;
  features: Feature[];
}

type Props = {
  coreFeatures: CoreFeature[];
};

export const CoreFeatures = ({ coreFeatures }: Props) => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Everything You Need to
            <span className="block bg-gradient-to-r from-cosmic-400 to-nebula-400 bg-clip-text text-transparent">
              Build Amazing Products
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            From development tools to analytics, design systems to
            infrastructure - we've got every aspect of your workflow covered.
          </p>
        </div>

        <div className="space-y-20">
          {coreFeatures.map((category, categoryIndex) => (
            <div key={categoryIndex}>
              <div className="flex items-center justify-center mb-12">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-cosmic-600 to-nebula-600 rounded-lg flex items-center justify-center">
                    <category.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-white">
                    {category.category}
                  </h3>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {category.features.map((feature, featureIndex) => (
                  <Card
                    key={featureIndex}
                    className="card p-6 group hover:scale-105 transition-all duration-300"
                  >
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-stardust-600 to-cosmic-600 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:animate-pulse">
                        <feature.icon className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h4 className="text-xl font-semibold text-white mb-3">
                          {feature.name}
                        </h4>
                        <p className="text-gray-300 leading-relaxed">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
