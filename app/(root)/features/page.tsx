import Link from 'next/link';
import { LucideProps } from 'lucide-react';
import { coreFeatures, enterpriseFeatures, heroFeatures, productStats } from '@/mock_data';
import { AIPoweredSection, CoreFeatures, CTASection, EnterpriseFeatures, HeroSection, StatsSection } from '@/components/features';
import { ForwardRefExoticComponent, RefAttributes } from 'react';

interface Feature {
  name: string;
  description: string;
  icon: ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>
  >;
};

interface EnterpriseFeature {
  title: string;
  description: string;
  icon: ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>
  >;
  features: string[];
};

interface CoreFeature {
  category: string;
  icon: ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>
  >;
  features: Feature[];
};

export default function FeaturesPage() {

  return (
    <div className="min-h-screen bg-gradient-to-br from-cosmic-950 via-nebula-950 to-stardust-950">
      {/* Hero Section */}
      <HeroSection heroFeatures={heroFeatures} />

      {/* Stats Section */}
      <StatsSection productStats={productStats} />

      {/* Core Features Section */}
      <CoreFeatures coreFeatures={coreFeatures as CoreFeature[]} />

      {/* Enterprise Features */}
      <EnterpriseFeatures enterpriseFeatures={enterpriseFeatures as EnterpriseFeature[]} />

      {/* AI-Powered Section */}
      <AIPoweredSection />

      {/* CTA Section */}
      <CTASection />
    </div>
  );
}