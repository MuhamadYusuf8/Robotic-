'use client';

import { motion } from 'framer-motion';
import { staggerContainer, fadeInUp } from '@/lib/utils/animations';
import { stats } from '@/lib/data/stats';
import AnimatedCounter from '@/components/shared/AnimatedCounter';

export default function StatsSection() {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-bg-secondary to-bg-primary" />
      <div className="absolute inset-0 bg-grid opacity-15 pointer-events-none" />

      {/* Horizontal glow lines */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent-blue/40 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent-blue/20 to-transparent" />

      {/* Center glow */}
      <div className="absolute inset-0 bg-radial-glow opacity-30" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-0 md:divide-x md:divide-white/10"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="flex flex-col items-center text-center px-8"
            >
              <div className="relative mb-3">
                {/* Glow behind number */}
                <div className="absolute inset-0 bg-accent-blue/10 blur-2xl rounded-full scale-150" />
                <div className="relative font-orbitron text-4xl lg:text-5xl xl:text-6xl font-bold text-accent-blue glow-blue-text">
                  <AnimatedCounter
                    target={stat.value}
                    suffix={stat.suffix}
                    duration={2000}
                  />
                </div>
              </div>

              <h3 className="font-orbitron text-sm lg:text-base text-text-primary font-semibold tracking-wide mb-1">
                {stat.label}
              </h3>
              <p className="text-text-secondary text-xs tracking-wider">
                {stat.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
