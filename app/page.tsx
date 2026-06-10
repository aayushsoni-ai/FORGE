"use client";

import { HeroSection } from "@/components/sections/HeroSection";
import { BrowserMockupSection } from "@/components/sections/BrowserMockupSection";
import { FeaturesSection } from "@/components/sections/FeaturesSection";
import { HowItWorksSection } from "@/components/sections/HowItWorksSection";
import { PricingSection } from "@/components/sections/PricingSection";
import { CTASection } from "@/components/sections/CTASection";
import { FooterSection } from "@/components/sections/FooterSection";

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] selection:bg-white/20">
      <HeroSection />
      <BrowserMockupSection />
      <FeaturesSection />
      <HowItWorksSection />
      <PricingSection />
      <CTASection />

      <FooterSection />
    </main>
  );
}
