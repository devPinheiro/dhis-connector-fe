import React from 'react';
import { ScaleNavbar } from '../components/scale/ScaleNavbar';
import { ScaleHero } from '../components/scale/ScaleHero';
import { TrustedBy } from '../components/scale/TrustedBy';
import { ProductOverview } from '../components/scale/ProductOverview';
import { ValueProposition } from '../components/scale/ValueProposition';
import { UseCases } from '../components/scale/UseCases';
import { MetricsSection } from '../components/scale/MetricsSection';
import { TestimonialsSection } from '../components/scale/TestimonialsSection';
import { ScaleCTA, ScaleFooter } from '../components/scale/ScaleCTA';

export function ScalePage() {
  return (
    <div className="min-h-screen bg-black">
      <ScaleNavbar />
      <ScaleHero />
      <TrustedBy />
      <ProductOverview />
      <ValueProposition />
      <UseCases />
      <MetricsSection />
      <TestimonialsSection />
      <ScaleCTA />
      <ScaleFooter />
    </div>
  );
}