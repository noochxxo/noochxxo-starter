import { LucideProps, Rocket } from "lucide-react";
import { Button } from "../ui/button";
import { Card } from "../ui/card";
import { ForwardRefExoticComponent, RefAttributes } from "react";

interface HeroFeature {
    icon: ForwardRefExoticComponent<Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>>;
    title: string;
    description: string;
    gradient: string;
};

type Props = {
  heroFeatures: HeroFeature[];
};

export const HeroSection = ({
  heroFeatures
}: Props) => {
  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="animate-float">
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cosmic-400 via-nebula-400 to-stardust-400 bg-clip-text text-transparent mb-6">
              Powerful Features
              <span className="block">Built for Scale</span>
            </h1>
          </div>

          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Discover the comprehensive suite of tools and capabilities that make
            CosmicApp the ultimate platform for modern development teams.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button size="lg" className="primary-btn text-lg px-8 py-4">
              <Rocket />
              Start Free Trial
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="outline-btn text-lg px-8 py-4"
            >
              Schedule Demo
            </Button>
          </div>
        </div>

        {/* Hero Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {heroFeatures.map((feature, index) => (
            <Card
              key={index}
              className="card animate-glow p-8 text-center group hover:scale-105 transition-all duration-300"
            >
              <div
                className={`w-16 h-16 bg-gradient-to-r ${feature.gradient} rounded-full flex items-center justify-center mx-auto mb-6 group-hover:animate-pulse`}
              >
                <feature.icon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-300 leading-relaxed">
                {feature.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
