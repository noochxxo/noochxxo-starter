
import Link from 'next/link';
import { Zap, Shield, Rocket, Users, BarChart3, Sparkles } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="animate-float">
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cosmic-400 via-nebula-400 to-stardust-400 bg-clip-text text-transparent mb-6">
              Welcome to the
              <span className="block">Cosmic Future</span>
            </h1>
          </div>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Experience the next generation of digital innovation with our cutting-edge platform designed for the stars.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button size="lg" className="text-lg px-8 py-4 primary-btn">
              <Rocket />
              Launch Your Journey
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-4 outline-btn">
              Explore Features
            </Button>
          </div>

          {/* Hero Visual */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-cosmic-600/20 to-nebula-600/20 rounded-full blur-3xl animate-pulse-slow"></div>
            <div className="relative bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 max-w-4xl mx-auto">
              <div className="grid grid-cols-3 gap-4 opacity-60">
                <div className="h-4 bg-gradient-to-r from-cosmic-500 to-nebula-500 rounded"></div>
                <div className="h-4 bg-gradient-to-r from-nebula-500 to-stardust-500 rounded"></div>
                <div className="h-4 bg-gradient-to-r from-stardust-500 to-cosmic-500 rounded"></div>
                <div className="h-16 bg-gradient-to-b from-cosmic-500/50 to-transparent rounded col-span-2"></div>
                <div className="h-16 bg-gradient-to-b from-nebula-500/50 to-transparent rounded"></div>
                <div className="h-8 bg-gradient-to-r from-stardust-500/50 to-cosmic-500/50 rounded"></div>
                <div className="h-8 bg-gradient-to-r from-cosmic-500/50 to-nebula-500/50 rounded col-span-2"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Powerful Features for
              <span className="block bg-gradient-to-r from-cosmic-400 to-nebula-400 bg-clip-text text-transparent">
                Modern Teams
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Everything you need to build, scale, and succeed in the digital cosmos.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="card group hover:scale-105 transition-transform duration-300 animate-glow">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cosmic-600 to-nebula-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:animate-pulse">
                  <Zap className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Lightning Fast</h3>
                <p className="text-gray-300">
                  Experience blazing-fast performance with our optimized infrastructure built for speed.
                </p>
              </div>
            </Card>

            <Card className="card group hover:scale-105 transition-transform duration-300 animate-glow">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-nebula-600 to-stardust-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:animate-pulse">
                  <Shield className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Enterprise Security</h3>
                <p className="text-gray-300">
                  Bank-level security with end-to-end encryption and advanced threat protection.
                </p>
              </div>
            </Card>

            <Card className="card group hover:scale-105 transition-transform duration-300 animate-glow">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-stardust-600 to-cosmic-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:animate-pulse">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Team Collaboration</h3>
                <p className="text-gray-300">
                  Seamless collaboration tools that bring your team together across the universe.
                </p>
              </div>
            </Card>

            <Card className="card group hover:scale-105 transition-transform duration-300 animate-glow">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cosmic-600 to-stardust-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:animate-pulse">
                  <BarChart3 className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Advanced Analytics</h3>
                <p className="text-gray-300">
                  Deep insights and analytics to help you make data-driven decisions.
                </p>
              </div>
            </Card>

            <Card className="card group hover:scale-105 transition-transform duration-300 animate-glow">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-nebula-600 to-cosmic-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:animate-pulse">
                  <Sparkles className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">AI-Powered</h3>
                <p className="text-gray-300">
                  Harness the power of artificial intelligence to automate and optimize workflows.
                </p>
              </div>
            </Card>

            <Card className="card group hover:scale-105 transition-transform duration-300 animate-glow">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-stardust-600 to-nebula-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:animate-pulse">
                  <Rocket className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Scalable Infrastructure</h3>
                <p className="text-gray-300">
                  Scale from startup to enterprise with our flexible, cloud-native architecture.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <Card className="card p-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Launch?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of teams already building the future with our platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              
                <Button asChild size="lg" className="text-lg px-8 py-4 primary-btn">
                  <Link href="/sign-up">
                    <Rocket />
                    Start Your Journey
                  </Link>
                </Button>
              
              <Button variant="outline" size="lg" className="text-lg px-8 py-4 outline-btn">
                Schedule Demo
              </Button>
            </div>
          </Card>
        </div>
      </section>
    </>
  );
}