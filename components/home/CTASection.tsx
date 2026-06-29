'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Bot } from 'lucide-react';
import Button from '@/components/shared/Button';
import { staggerContainer, fadeInUp, scaleIn } from '@/lib/utils/animations';

export default function CTASection() {
  return (
    <section className="py-24 lg:py-32 relative overflow-hidden bg-bg-primary">
      {/* Background effects */}
      <div className="absolute inset-0 bg-grid opacity-10 pointer-events-none" />
      <div className="absolute inset-0 bg-radial-glow opacity-40" />

      {/* Animated lines */}
      <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent-blue/20 to-transparent" />

      <div className="relative max-w-5xl mx-auto px-6 lg:px-8">
        <motion.div
          className="glass rounded-2xl overflow-hidden"
          variants={scaleIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          {/* Top accent */}
          <div className="h-px bg-gradient-to-r from-transparent via-accent-blue to-transparent" />

          <div className="p-12 lg:p-16 text-center relative">
            {/* Glow effect inside card */}
            <div className="absolute inset-0 bg-radial-glow opacity-30 pointer-events-none" />

            <motion.div
              className="relative z-10"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.div variants={fadeInUp} className="inline-flex items-center justify-center w-20 h-20 rounded-full
                border border-accent-blue/30 bg-accent-blue/10 mb-8 mx-auto">
                <Bot size={36} className="text-accent-blue" />
              </motion.div>

              <motion.p variants={fadeInUp} className="font-orbitron text-xs font-semibold text-accent-blue tracking-[0.3em] uppercase mb-4">
                Ready to Transform?
              </motion.p>

              <motion.h2 variants={fadeInUp} className="text-text-primary mb-6 max-w-3xl mx-auto">
                Experience the Future of{' '}
                <span className="text-accent-blue glow-blue-text">Automation</span>{' '}
                Today
              </motion.h2>

              <motion.p variants={fadeInUp} className="text-text-secondary text-lg leading-relaxed max-w-2xl mx-auto mb-10">
                Schedule a personalized demo with our robotics engineers. We&apos;ll analyze your operations and
                show you exactly how PURTC can transform your productivity and ROI.
              </motion.p>

              <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link href="/contact">
                  <Button
                    variant="primary"
                    size="lg"
                    glowEffect
                    icon={<ArrowRight size={16} />}
                    iconPosition="right"
                  >
                    Request a Demo
                  </Button>
                </Link>
                <Link href="/case-studies">
                  <Button variant="ghost" size="lg">
                    See Case Studies
                  </Button>
                </Link>
              </motion.div>

              {/* Trust indicators */}
              <motion.div variants={fadeInUp} className="flex flex-wrap items-center justify-center gap-6 mt-12 pt-8 border-t border-white/10">
                {[
                  'No commitment required',
                  'Response within 24 hours',
                  '30-day pilot program available',
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 text-text-secondary text-sm">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent-blue" />
                    {item}
                  </div>
                ))}
              </motion.div>
            </motion.div>
          </div>

          {/* Bottom accent */}
          <div className="h-px bg-gradient-to-r from-transparent via-accent-blue to-transparent" />
        </motion.div>
      </div>
    </section>
  );
}
