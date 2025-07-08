import Link from "next/link";
import { Button } from "../ui/button";
import { Card } from "../ui/card";
import { Rocket } from "lucide-react";

export const CTASection = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <Card className="card p-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Experience
            <span className="block bg-gradient-to-r from-cosmic-400 to-nebula-400 bg-clip-text text-transparent">
              The Future?
            </span>
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join thousands of teams already building amazing products with our
            comprehensive platform.
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
              Contact Sales
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
