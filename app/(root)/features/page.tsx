import Link from 'next/link';
import { 
  Zap, Shield, Users, BarChart3, Sparkles, Rocket, 
  Globe, Lock, Cloud, Smartphone, Code, Palette,
  ArrowRight, Check, Star, Layers, Database, Cpu,
  Headphones, Award, Infinity, Target, Brain, Workflow
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

export default function FeaturesPage() {
  const heroFeatures = [
    {
      icon: Zap,
      title: 'Lightning Performance',
      description: 'Experience blazing-fast load times with our optimized infrastructure and global CDN network.',
      gradient: 'from-yellow-500 to-orange-500',
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level encryption and security protocols to keep your data safe and compliant.',
      gradient: 'from-green-500 to-emerald-500',
    },
    {
      icon: Users,
      title: 'Team Collaboration',
      description: 'Seamless real-time collaboration tools that bring your team together across the universe.',
      gradient: 'from-blue-500 to-cyan-500',
    },
  ];

  const coreFeatures = [
    {
      category: 'Development',
      icon: Code,
      features: [
        {
          name: 'Advanced Code Editor',
          description: 'Syntax highlighting, auto-completion, and intelligent code suggestions.',
          icon: Code,
        },
        {
          name: 'Version Control',
          description: 'Built-in Git integration with branch management and merge conflict resolution.',
          icon: Layers,
        },
        {
          name: 'API Management',
          description: 'Create, test, and deploy APIs with comprehensive documentation tools.',
          icon: Database,
        },
        {
          name: 'Real-time Preview',
          description: 'See your changes instantly with hot reload and live preview capabilities.',
          icon: Smartphone,
        },
      ],
    },
    {
      category: 'Analytics & Insights',
      icon: BarChart3,
      features: [
        {
          name: 'Advanced Analytics',
          description: 'Deep insights into user behavior, performance metrics, and business intelligence.',
          icon: BarChart3,
        },
        {
          name: 'Custom Dashboards',
          description: 'Build personalized dashboards with drag-and-drop widgets and real-time data.',
          icon: Target,
        },
        {
          name: 'Performance Monitoring',
          description: 'Track application performance, uptime, and user experience metrics.',
          icon: Cpu,
        },
        {
          name: 'Predictive Analytics',
          description: 'AI-powered insights to predict trends and optimize your business strategy.',
          icon: Brain,
        },
      ],
    },
    {
      category: 'Design & Creativity',
      icon: Palette,
      features: [
        {
          name: 'Design System',
          description: 'Comprehensive component library with customizable themes and styles.',
          icon: Palette,
        },
        {
          name: 'Asset Management',
          description: 'Organize, optimize, and deploy your digital assets with intelligent compression.',
          icon: Globe,
        },
        {
          name: 'Template Library',
          description: 'Access hundreds of professionally designed templates for rapid prototyping.',
          icon: Star,
        },
        {
          name: 'Brand Guidelines',
          description: 'Maintain consistent branding across all your projects and team members.',
          icon: Award,
        },
      ],
    },
    {
      category: 'Infrastructure',
      icon: Cloud,
      features: [
        {
          name: 'Global CDN',
          description: 'Lightning-fast content delivery with edge locations worldwide.',
          icon: Globe,
        },
        {
          name: 'Auto Scaling',
          description: 'Automatically scale resources based on demand with zero downtime.',
          icon: Infinity,
        },
        {
          name: 'Database Management',
          description: 'Managed databases with automatic backups, scaling, and optimization.',
          icon: Database,
        },
        {
          name: 'Workflow Automation',
          description: 'Automate repetitive tasks with visual workflow builder and triggers.',
          icon: Workflow,
        },
      ],
    },
  ];

  const enterpriseFeatures = [
    {
      title: 'Advanced Security',
      description: 'SOC 2 compliance, SSO integration, and advanced threat protection.',
      icon: Lock,
      features: ['Multi-factor Authentication', 'Role-based Access Control', 'Audit Logs', 'Data Encryption'],
    },
    {
      title: 'Priority Support',
      description: '24/7 dedicated support with guaranteed response times and expert assistance.',
      icon: Headphones,
      features: ['Dedicated Account Manager', 'Phone Support', 'Custom Training', 'SLA Guarantees'],
    },
    {
      title: 'Custom Integrations',
      description: 'Seamlessly connect with your existing tools and enterprise systems.',
      icon: Layers,
      features: ['API Webhooks', 'Custom Connectors', 'Enterprise SSO', 'Data Migration'],
    },
  ];

  const stats = [
    { value: '99.9%', label: 'Uptime Guarantee', icon: Shield },
    { value: '<100ms', label: 'Average Response Time', icon: Zap },
    { value: '150+', label: 'Integrations Available', icon: Layers },
    { value: '24/7', label: 'Expert Support', icon: Headphones },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-cosmic-950 via-nebula-950 to-stardust-950">
      {/* Hero Section */}
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
              Discover the comprehensive suite of tools and capabilities that make CosmicApp the ultimate platform for modern development teams.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Button size="lg" className="primary-btn text-lg px-8 py-4">
                <Rocket />
                Start Free Trial
              </Button>
              <Button variant="outline" size="lg" className="outline-btn text-lg px-8 py-4">
                Schedule Demo
              </Button>
            </div>
          </div>

          {/* Hero Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {heroFeatures.map((feature, index) => (
              <Card key={index} className="card animate-glow p-8 text-center group hover:scale-105 transition-all duration-300">
                <div className={`w-16 h-16 bg-gradient-to-r ${feature.gradient} rounded-full flex items-center justify-center mx-auto mb-6 group-hover:animate-pulse`}>
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-300 leading-relaxed">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 border-y border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-cosmic-600 to-nebula-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="h-6 w-6 text-white" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-gray-300 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Features Section */}
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
              From development tools to analytics, design systems to infrastructure - we've got every aspect of your workflow covered.
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
                    <h3 className="text-3xl font-bold text-white">{category.category}</h3>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {category.features.map((feature, featureIndex) => (
                    <Card key={featureIndex} className="card p-6 group hover:scale-105 transition-all duration-300">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-stardust-600 to-cosmic-600 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:animate-pulse">
                          <feature.icon className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <h4 className="text-xl font-semibold text-white mb-3">{feature.name}</h4>
                          <p className="text-gray-300 leading-relaxed">{feature.description}</p>
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

      {/* Enterprise Features */}
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
              Advanced features and dedicated support for organizations that need enterprise-level capabilities.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {enterpriseFeatures.map((feature, index) => (
              <Card key={index} className="card animate-glow p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cosmic-600 to-nebula-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-300 mb-6">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.features.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-center text-sm text-gray-300">
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

      {/* AI-Powered Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-cosmic-600 to-nebula-600 rounded-lg flex items-center justify-center">
                  <Sparkles className="h-6 w-6 text-white" />
                </div>
                <span className="text-cosmic-400 font-semibold">AI-Powered Intelligence</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Smart Automation
                <span className="block bg-gradient-to-r from-cosmic-400 to-nebula-400 bg-clip-text text-transparent">
                  That Learns
                </span>
              </h2>
              
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Our AI engine continuously learns from your patterns and preferences, automatically optimizing workflows, suggesting improvements, and predicting potential issues before they occur.
              </p>

              <div className="space-y-4 mb-8">
                {[
                  'Intelligent code completion and suggestions',
                  'Automated testing and quality assurance',
                  'Predictive scaling and resource optimization',
                  'Smart error detection and resolution',
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
                    <div className="w-8 h-8 bg-gradient-to-r from-nebula-500 to-stardust-500 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                    <div className="h-4 bg-gradient-to-r from-nebula-500/50 to-stardust-500/50 rounded flex-1"></div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-gradient-to-r from-stardust-500 to-cosmic-500 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
                    <div className="h-4 bg-gradient-to-r from-stardust-500/50 to-cosmic-500/50 rounded flex-1"></div>
                  </div>
                  <div className="mt-6 p-4 bg-white/5 rounded-lg border border-white/10">
                    <div className="flex items-center space-x-2 mb-2">
                      <Brain className="h-5 w-5 text-cosmic-400" />
                      <span className="text-cosmic-400 font-medium">AI Suggestion</span>
                    </div>
                    <p className="text-gray-300 text-sm">
                      Based on your usage patterns, consider optimizing your database queries for 23% better performance.
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
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
              Join thousands of teams already building amazing products with our comprehensive platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="text-lg px-8 py-4 primary-btn">
                <Link href="/sign-up" >
                  <Rocket />
                    Start Free Trial
                </Link>
              </Button>
              
              <Button variant="outline" size="lg" className="text-lg px-8 py-4 outline-btn">
                Contact Sales
              </Button>
            </div>
            <p className="text-gray-400 text-sm mt-4">
              No credit card required • 14-day free trial • Cancel anytime
            </p>
          </Card>
        </div>
      </section>
    </div>
  );
}