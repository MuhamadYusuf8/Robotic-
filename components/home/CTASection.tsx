'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Users, Calendar } from 'lucide-react';
import Button from '@/components/shared/Button';
import { staggerContainer, fadeInUp, scaleIn } from '@/lib/utils/animations';

export default function CTASection() {
  return (
    <section className="py-24 lg:py-32 relative overflow-hidden bg-bg-primary">
      {/* Background effects */}
      <div className="absolute inset-0 bg-grid opacity-10 pointer-events-none" />
      <div className="absolute inset-0 bg-radial-glow opacity-40" />
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
              {/* Logo */}
              <motion.div variants={fadeInUp} className="flex justify-center mb-8">
                <div className="relative w-20 h-20 drop-shadow-[0_0_20px_rgba(0,196,255,0.4)]">
                  <Image src="/logo.png" alt="PURTC" fill className="object-contain" />
                </div>
              </motion.div>

              <motion.p variants={fadeInUp} className="font-orbitron text-xs font-semibold text-accent-blue tracking-[0.3em] uppercase mb-4">
                Open for President University Students
              </motion.p>

              <motion.h2 variants={fadeInUp} className="text-text-primary mb-6 max-w-3xl mx-auto">
                Ready to Join{' '}
                <span className="text-accent-blue glow-blue-text">PURTC?</span>
              </motion.h2>

              <motion.p variants={fadeInUp} className="text-text-secondary text-lg leading-relaxed max-w-2xl mx-auto mb-10">
                Be part of a student community passionate about technology and robotics.
                Find your division, develop your skills, and leave a real mark with us.
              </motion.p>

              <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link href="/join">
                  <Button
                    variant="primary"
                    size="lg"
                    glowEffect
                    icon={<ArrowRight size={16} />}
                    iconPosition="right"
                  >
                    Join PURTC
                  </Button>
                </Link>
                <Link href="/divisions">
                  <Button variant="ghost" size="lg" icon={<Users size={14} />} iconPosition="left">
                    View Divisions
                  </Button>
                </Link>
              </motion.div>

              {/* Trust indicators */}
              <motion.div variants={fadeInUp} className="flex flex-wrap items-center justify-center gap-6 mt-12 pt-8 border-t border-white/10">
                {[
                  { icon: <Users size={14} />, text: '39 Active Members' },
                  { icon: <Calendar size={14} />, text: 'Weekly Programs' },
                  { icon: <ArrowRight size={14} />, text: '7 Divisions Available' },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 text-text-secondary text-sm">
                    <span className="text-accent-blue">{item.icon}</span>
                    {item.text}
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
