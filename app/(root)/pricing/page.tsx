'use client'

import { ForwardRefExoticComponent, RefAttributes, useState } from 'react';
import { LucideProps } from 'lucide-react';
import { addOns, pricingEnterpriseFeatures, faqs, plans } from '@/mock_data';
import { 
  AddOnsSection,
  EnterpriseFeatures,
  FAQSection,
  FinalCTA,
  HeroSection,
  PricingPlans
} from '@/components/pricing';

enum BillingCycle {
  Monthly = "monthly",
  Yearly = "yearly"
}

interface Feature {
  title: string;
  description: string;
  icon: ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>
  >;
}

export default function PricingPage() {
  const [billingCycle, setBillingCycle] = useState<BillingCycle>(BillingCycle.Monthly);

  const getDiscountPercentage = () => {
    return billingCycle === 'yearly' ? 17 : 0; // Roughly 2 months free
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-cosmic-950 via-nebula-950 to-stardust-950">
      {/* Hero Section */}
      <HeroSection
        billingCycle={billingCycle}
        setBillingCycle={setBillingCycle}
        getDiscountPercentage={getDiscountPercentage}
      />

      {/* Pricing Plans */}
      <PricingPlans
        plans={plans}
        billingCycle={billingCycle}
      />

      {/* Add-ons Section */}
      <AddOnsSection addOns={addOns} />

      {/* Enterprise Features */}
      <EnterpriseFeatures enterpriseFeatures={pricingEnterpriseFeatures as Feature[]} />

      {/* FAQ Section */}
      <FAQSection faqs={faqs} />

      {/* Final CTA */}
      <FinalCTA />
    </div>
  );
}