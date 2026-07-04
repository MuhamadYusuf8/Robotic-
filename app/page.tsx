import type { Metadata } from 'next';
import dynamic from 'next/dynamic';
import StatsSection from '@/components/home/StatsSection';
import DivisionsPreview from '@/components/home/DivisionsPreview';
import ProgramsSection from '@/components/home/ProgramsSection';
import TimelineSection from '@/components/home/TimelineSection';
import CTASection from '@/components/home/CTASection';

const HeroSection = dynamic(() => import('@/components/home/HeroSection'), {
  ssr: false,
});

export const metadata: Metadata = {
  icons: {
    // FIXED: Changed 'public/logo.png' to '/logo.png'
    icon: '/logo.png',
    shortcut: '/logo.png', // Optional: Helps older browsers
    apple: '/logo.png',    // Optional: For iOS home screen bookmarks
  },
  title: 'PURTC — President University Robotic & Technology Club',
  description:
    'PURTC is a student community for technology and robotics at President University, Cikarang. Build. Innovate. Lead.',
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <DivisionsPreview />
      <ProgramsSection />
      <TimelineSection />
      <CTASection />
    </>
  );
}
