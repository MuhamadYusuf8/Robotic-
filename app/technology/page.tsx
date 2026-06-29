import type { Metadata } from 'next';
import TechnologyPageClient from './TechnologyPageClient';

export const metadata: Metadata = {
  title: 'Technology — PURTC Robotics',
  description: 'Discover the AI-powered technology behind PURTC robots. NeuroPath™ AI, precision engineering, and enterprise-grade safety systems.',
};

export default function TechnologyPage() {
  return <TechnologyPageClient />;
}
