import type { Metadata } from 'next';
import dynamic from 'next/dynamic';
import StatsSection from '@/components/home/StatsSection';
import ProductTeaser from '@/components/home/ProductTeaser';
import TechHighlight from '@/components/home/TechHighlight';
import TestimonialSlider from '@/components/home/TestimonialSlider';
import CTASection from '@/components/home/CTASection';

const HeroSection = dynamic(() => import('@/components/home/HeroSection'), {
  ssr: false,
});

export const metadata: Metadata = {
  title: 'PURTC Robotics — Next-Generation Industrial Automation',
  description:
    'PURTC Robotics delivers cutting-edge autonomous robots for industrial automation, logistics, and enterprise operations. Trusted by 200+ enterprises across 47 countries.',
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <ProductTeaser />
      <TechHighlight />
      <TestimonialSlider />
      <CTASection />
    </>
  );
}
