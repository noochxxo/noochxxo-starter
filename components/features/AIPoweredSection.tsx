import { Brain, Check, Sparkles } from "lucide-react";
import { Button } from "../ui/button";
import { Card } from "../ui/card";

export const AIPoweredSection = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-cosmic-600 to-nebula-600 rounded-lg flex items-center justify-center">
                <Sparkles className="h-6 w-6 text-white" />
              </div>
              <span className="text-cosmic-400 font-semibold">
                AI-Powered Intelligence
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Smart Automation
              <span className="block bg-gradient-to-r from-cosmic-400 to-nebula-400 bg-clip-text text-transparent">
                That Learns
              </span>
            </h2>

            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Our AI engine continuously learns from your patterns and
              preferences, automatically optimizing workflows, suggesting
              improvements, and predicting potential issues before they occur.
            </p>

            <div className="space-y-4 mb-8">
              {[
                "Intelligent code completion and suggestions",
                "Automated testing and quality assurance",
                "Predictive scaling and resource optimization",
                "Smart error detection and resolution",
              ].map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-gradient-to-r from-cosmic-500 to-nebula-500 rounded-full flex items-center justify-center">
                    <Check className="h-4 w-4 text-white" />
                  </div>
                  <span className="text-gray-300">{feature}</span>
                </div>
              ))}
            </div>

            <Button size="lg" className="text-lg px-8 py-4 primary-btn">
              <Brain />
              Explore AI Features
            </Button>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-cosmic-600/20 to-nebula-600/20 rounded-2xl blur-3xl animate-pulse-slow"></div>
            <Card className="card relative p-8">
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-gradient-to-r from-cosmic-500 to-nebula-500 rounded-full animate-pulse"></div>
                  <div className="h-4 bg-gradient-to-r from-cosmic-500/50 to-nebula-500/50 rounded flex-1"></div>
                </div>
                <div className="flex items-center space-x-3">
                  <div
                    className="w-8 h-8 bg-gradient-to-r from-nebula-500 to-stardust-500 rounded-full animate-pulse"
                    style={{ animationDelay: "0.5s" }}
                  ></div>
                  <div className="h-4 bg-gradient-to-r from-nebula-500/50 to-stardust-500/50 rounded flex-1"></div>
                </div>
                <div className="flex items-center space-x-3">
                  <div
                    className="w-8 h-8 bg-gradient-to-r from-stardust-500 to-cosmic-500 rounded-full animate-pulse"
                    style={{ animationDelay: "1s" }}
                  ></div>
                  <div className="h-4 bg-gradient-to-r from-stardust-500/50 to-cosmic-500/50 rounded flex-1"></div>
                </div>
                <div className="mt-6 p-4 bg-white/5 rounded-lg border border-white/10">
                  <div className="flex items-center space-x-2 mb-2">
                    <Brain className="h-5 w-5 text-cosmic-400" />
                    <span className="text-cosmic-400 font-medium">
                      AI Suggestion
                    </span>
                  </div>
                  <p className="text-gray-300 text-sm">
                    Based on your usage patterns, consider optimizing your
                    database queries for 23% better performance.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
