"use client";

import HeroSection from "@/components/sections/home/HeroSection";
import StatisticsSection from "@/components/sections/home/StatisticsSection";
import ServicesSection from "@/components/sections/home/ServicesSection";
import CTABanner from "@/components/ui/CTABanner";
import TestimonialsSection from "@/components/sections/home/TestimonialsSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <StatisticsSection />
      <ServicesSection />
      <TestimonialsSection />
      <CTABanner />
    </>
  );
}
