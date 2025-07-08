import { Link, Rocket, Sparkles } from "lucide-react";
import { Card } from "../ui/card";
import { Button } from "../ui/button";

export const FinalCTA = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <Card className="card p-12">
          <div className="flex items-center justify-center mb-6">
            <div className="w-16 h-16 bg-gradient-to-r from-cosmic-600 to-nebula-600 rounded-full flex items-center justify-center">
              <Sparkles className="h-8 w-8 text-white" />
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Start Your Cosmic Journey
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join thousands of teams building the future with our platform. Start
            your free trial today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="text-lg px-8 py-4 primary-btn">
              <Link href="/sign-up">
                <Rocket />
                Start Free Trial
              </Link>
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="text-lg px-8 py-4 outline-btn"
            >
              View All Features
            </Button>
          </div>
          <p className="text-gray-400 text-sm mt-4">
            No credit card required • 14-day free trial • Cancel anytime
          </p>
        </Card>
      </div>
    </section>
  );
};
