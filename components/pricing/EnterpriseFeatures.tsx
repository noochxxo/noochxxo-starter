import { Crown, LucideProps } from "lucide-react";
import { Button } from "../ui/button";
import { Card } from "../ui/card";
import { ForwardRefExoticComponent, RefAttributes } from "react";

interface Feature {
  title: string;
  description: string;
  icon: ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>
  >;
}

type Props = {
  enterpriseFeatures: Feature[];
};

export const EnterpriseFeatures = ({ enterpriseFeatures }: Props) => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Enterprise Solutions
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Advanced capabilities designed for large organizations with complex
            requirements.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {enterpriseFeatures.map((feature, index) => (
            <Card key={index} className="card p-8 flex items-start space-x-6">
              <div className="w-12 h-12 bg-gradient-to-r from-cosmic-600 to-nebula-600 rounded-lg flex items-center justify-center flex-shrink-0">
                <feature.icon className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Card className="card p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Scale?
            </h3>
            <p className="text-gray-300 mb-6">
              Get a custom quote tailored to your organization's specific needs
              and requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="primary-btn">
                <Crown />
                Contact Sales
              </Button>
              <Button variant="outline" size="lg" className="outline-btn">
                Schedule Demo
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};
