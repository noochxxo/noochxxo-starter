'use client'

import { useState } from 'react';
import Link from 'next/link';
import { 
  Check, X, Star, Crown, Rocket, Zap, Shield, Users, 
  BarChart3, Cloud, Headphones, ArrowRight, Sparkles,
  Globe, Lock, Database, Cpu, Brain, Infinity
} from 'lucide-react';
import { Card } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

export default function PricingPage() {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');

  const plans = [
    {
      name: 'Starter',
      description: 'Perfect for individuals and small projects',
      icon: Rocket,
      price: {
        monthly: 9,
        yearly: 90,
      },
      popular: false,
      features: [
        { name: '5 Projects', included: true },
        { name: '10GB Storage', included: true },
        { name: 'Basic Analytics', included: true },
        { name: 'Community Support', included: true },
        { name: 'SSL Certificates', included: true },
        { name: 'Basic Templates', included: true },
        { name: 'API Access', included: false },
        { name: 'Custom Domains', included: false },
        { name: 'Priority Support', included: false },
        { name: 'Advanced Security', included: false },
        { name: 'Team Collaboration', included: false },
        { name: 'White-label Options', included: false },
      ],
      cta: 'Start Free Trial',
      gradient: 'from-blue-600 to-cyan-600',
    },
    {
      name: 'Pro',
      description: 'Ideal for growing teams and businesses',
      icon: Star,
      price: {
        monthly: 29,
        yearly: 290,
      },
      popular: true,
      features: [
        { name: 'Unlimited Projects', included: true },
        { name: '100GB Storage', included: true },
        { name: 'Advanced Analytics', included: true },
        { name: 'Priority Support', included: true },
        { name: 'SSL Certificates', included: true },
        { name: 'Premium Templates', included: true },
        { name: 'API Access', included: true },
        { name: 'Custom Domains', included: true },
        { name: 'Team Collaboration', included: true },
        { name: 'Advanced Security', included: false },
        { name: 'White-label Options', included: false },
        { name: 'Dedicated Manager', included: false },
      ],
      cta: 'Start Pro Trial',
      gradient: 'from-cosmic-600 to-nebula-600',
    },
    {
      name: 'Enterprise',
      description: 'For large organizations with advanced needs',
      icon: Crown,
      price: {
        monthly: 99,
        yearly: 990,
      },
      popular: false,
      features: [
        { name: 'Unlimited Everything', included: true },
        { name: '1TB Storage', included: true },
        { name: 'Enterprise Analytics', included: true },
        { name: '24/7 Dedicated Support', included: true },
        { name: 'SSL Certificates', included: true },
        { name: 'Custom Templates', included: true },
        { name: 'Full API Access', included: true },
        { name: 'Unlimited Domains', included: true },
        { name: 'Advanced Collaboration', included: true },
        { name: 'Enterprise Security', included: true },
        { name: 'White-label Options', included: true },
        { name: 'Dedicated Manager', included: true },
      ],
      cta: 'Contact Sales',
      gradient: 'from-purple-600 to-pink-600',
    },
  ];

  const addOns = [
    {
      name: 'Extra Storage',
      description: '50GB additional storage space',
      price: 19,
      icon: Database,
      features: ['50GB Additional Storage', 'Automatic Backups', 'CDN Optimization'],
    },
    {
      name: 'Premium Support',
      description: 'Priority support with faster response times',
      price: 39,
      icon: Headphones,
      features: ['Priority Queue', 'Phone Support', 'Dedicated Slack Channel'],
    },
    {
      name: 'AI Assistant',
      description: 'Advanced AI-powered development assistance',
      price: 49,
      icon: Brain,
      features: ['Code Generation', 'Smart Suggestions', 'Automated Testing'],
    },
    {
      name: 'Advanced Security',
      description: 'Enhanced security features and compliance',
      price: 59,
      icon: Shield,
      features: ['SOC 2 Compliance', 'Advanced Threat Protection', 'Audit Logs'],
    },
  ];

  const enterpriseFeatures = [
    {
      title: 'Custom Integrations',
      description: 'Seamlessly connect with your existing enterprise tools and workflows.',
      icon: Globe,
    },
    {
      title: 'Dedicated Infrastructure',
      description: 'Private cloud deployment with guaranteed performance and uptime.',
      icon: Cloud,
    },
    {
      title: 'Advanced Analytics',
      description: 'Enterprise-grade analytics with custom reporting and insights.',
      icon: BarChart3,
    },
    {
      title: 'Compliance & Security',
      description: 'Meet industry standards with SOC 2, GDPR, and HIPAA compliance.',
      icon: Lock,
    },
  ];

  const faqs = [
    {
      question: 'Can I change my plan at any time?',
      answer: 'Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately, and we\'ll prorate any billing differences.',
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept all major credit cards, PayPal, and for Enterprise customers, we also support bank transfers and purchase orders.',
    },
    {
      question: 'Is there a free trial available?',
      answer: 'Yes! All plans come with a 14-day free trial. No credit card required to start, and you can cancel anytime during the trial period.',
    },
    {
      question: 'What happens if I exceed my storage limit?',
      answer: 'We\'ll notify you when you\'re approaching your limit. You can either upgrade your plan or purchase additional storage add-ons.',
    },
    {
      question: 'Do you offer discounts for non-profits or educational institutions?',
      answer: 'Yes, we offer special pricing for qualified non-profit organizations and educational institutions. Contact our sales team for details.',
    },
    {
      question: 'Can I cancel my subscription at any time?',
      answer: 'Absolutely. You can cancel your subscription at any time from your account settings. Your access will continue until the end of your billing period.',
    },
  ];

  const getDiscountPercentage = () => {
    return billingCycle === 'yearly' ? 17 : 0; // Roughly 2 months free
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-cosmic-950 via-nebula-950 to-stardust-950">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="animate-float">
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cosmic-400 via-nebula-400 to-stardust-400 bg-clip-text text-transparent mb-6">
              Simple, Transparent
              <span className="block">Pricing</span>
            </h1>
          </div>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Choose the perfect plan for your needs. Start free, scale as you grow, and unlock the full potential of our cosmic platform.
          </p>

          {/* Billing Toggle */}
          <div className="flex items-center justify-center mb-12">
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-2 flex items-center space-x-2">
              <button
                onClick={() => setBillingCycle('monthly')}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  billingCycle === 'monthly'
                    ? 'bg-gradient-to-r from-cosmic-600 to-nebula-600 text-white shadow-lg'
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setBillingCycle('yearly')}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 relative ${
                  billingCycle === 'yearly'
                    ? 'bg-gradient-to-r from-cosmic-600 to-nebula-600 text-white shadow-lg'
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                Yearly
                {billingCycle === 'yearly' && (
                  <span className="absolute -top-2 -right-2 bg-gradient-to-r from-green-500 to-emerald-500 text-white text-xs px-2 py-1 rounded-full">
                    Save {getDiscountPercentage()}%
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <Card 
                key={index} 
                className={cn('card p-8 relative', plan.popular ? 'ring-2 ring-cosmic-500 scale-105 animate-glow': '')}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-cosmic-600 to-nebula-600 text-white px-4 py-2 rounded-full text-sm font-medium flex items-center space-x-2">
                      <Star className="h-4 w-4" />
                      <span>Most Popular</span>
                    </div>
                  </div>
                )}

                {/* Plan Header */}
                <div className="text-center mb-8">
                  <div className={`w-16 h-16 bg-gradient-to-r ${plan.gradient} rounded-full flex items-center justify-center mx-auto mb-4`}>
                    <plan.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 text-sm mb-6">{plan.description}</p>
                  
                  <div className="flex items-baseline justify-center">
                    <span className="text-5xl font-bold text-white">
                      ${plan.price[billingCycle]}
                    </span>
                    <span className="text-gray-400 ml-2">
                      /{billingCycle === 'monthly' ? 'month' : 'year'}
                    </span>
                  </div>
                  
                  {billingCycle === 'yearly' && (
                    <p className="text-green-400 text-sm mt-2">
                      Save ${(plan.price.monthly * 12) - plan.price.yearly} per year
                    </p>
                  )}
                </div>

                {/* Features List */}
                <div className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center">
                      {feature.included ? (
                        <Check className="h-5 w-5 text-green-400 mr-3 flex-shrink-0" />
                      ) : (
                        <X className="h-5 w-5 text-gray-500 mr-3 flex-shrink-0" />
                      )}
                      <span className={`text-sm ${feature.included ? 'text-gray-300' : 'text-gray-500'}`}>
                        {feature.name}
                      </span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <Button
                  asChild
                  size="lg"
                  className={cn('justify-center w-full', plan.popular ? 'primary-btn' : 'outline-btn')}
                >
                  <Link href={plan.name === 'Enterprise' ? '' : '/sign-up'}>
                    {plan.cta}
                  </Link>
                </Button>

                {plan.name !== 'Enterprise' && (
                  <p className="text-gray-400 text-xs text-center mt-3">
                    14-day free trial • No credit card required
                  </p>
                )}
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Add-ons Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Powerful Add-ons
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Enhance your plan with additional features and capabilities tailored to your specific needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {addOns.map((addon, index) => (
              <Card key={index} className="card p-6 text-center hover:scale-105 transition-transform duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-stardust-600 to-cosmic-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <addon.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{addon.name}</h3>
                <p className="text-gray-300 text-sm mb-4">{addon.description}</p>
                <div className="text-2xl font-bold text-cosmic-400 mb-4">${addon.price}/mo</div>
                <ul className="space-y-2 mb-6">
                  {addon.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="text-xs text-gray-400 flex items-center">
                      <Check className="h-3 w-3 text-green-400 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button variant="outline" size="sm" className='w-full outline-btn'>
                  Add to Plan
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Enterprise Features */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Enterprise Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Advanced capabilities designed for large organizations with complex requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {enterpriseFeatures.map((feature, index) => (
              <Card key={index} className="card p-8 flex items-start space-x-6">
                <div className="w-12 h-12 bg-gradient-to-r from-cosmic-600 to-nebula-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Card className="card p-8 max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-white mb-4">Ready to Scale?</h3>
              <p className="text-gray-300 mb-6">
                Get a custom quote tailored to your organization's specific needs and requirements.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className='primary-btn'>
                  <Crown />
                  Contact Sales
                </Button>
                <Button variant="outline" size="lg" className='outline-btn'>
                  Schedule Demo
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-300">
              Everything you need to know about our pricing and plans.
            </p>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <Card key={index} className="card p-6">
                <h3 className="text-lg font-semibold text-white mb-3">{faq.question}</h3>
                <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-300 mb-4">Still have questions?</p>
            <Button variant="outline" className='outline-btn'>
              <Headphones />
              Contact Support
            </Button>
          </div>
        </div>
      </section>

      {/* Final CTA */}
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
              Join thousands of teams building the future with our platform. Start your free trial today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="text-lg px-8 py-4 primary-btn">
                <Link href="/sign-up">
                  <Rocket />
                  Start Free Trial
                </Link>
              </Button>
              
              <Button variant="outline" size="lg" className="text-lg px-8 py-4 outline-btn">
                View All Features
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