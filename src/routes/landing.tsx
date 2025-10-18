import React from 'react';
import { LandingNavbar } from '../components/landing/LandingNavbar';
import { HeroSection } from '../components/landing/HeroSection';
import { FeaturesSection } from '../components/landing/FeaturesSection';
import { TestimonialsSection } from '../components/landing/TestimonialsSection';
import { CTASection, FinalCTASection } from '../components/landing/CTASection';
import { Footer } from '../components/landing/Footer';

export function LandingPage() {
  return (
    <div className="min-h-screen bg-white">
      <LandingNavbar />
      <HeroSection />
      <FeaturesSection />
      <TestimonialsSection />
      <CTASection />
      <FinalCTASection />
      <Footer />
    </div>
  );
}