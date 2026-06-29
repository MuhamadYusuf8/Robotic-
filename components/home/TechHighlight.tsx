'use client';

import { motion } from 'framer-motion';
import { Brain, Eye, Shield, Wifi } from 'lucide-react';
import { staggerContainer, fadeInLeft, fadeInRight, fadeInUp } from '@/lib/utils/animations';

import { techFeatures } from '@/lib/data/stats';

const iconMap: Record<string, typeof Brain> = {
  Brain,
  Eye,
  Shield,
  Wifi,
};

export default function TechHighlight() {
  return (
    <section className="py-24 lg:py-32 relative bg-bg-primary overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-10 pointer-events-none" />

      {/* Side glow accents */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-64 h-64 bg-accent-blue/10 rounded-full blur-[100px]" />
      <div className="absolute right-0 top-1/3 w-48 h-48 bg-accent-gold/5 rounded-full blur-[80px]" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Content */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
          >
            <motion.p variants={fadeInLeft} className="font-orbitron text-xs font-semibold text-accent-blue tracking-[0.25em] uppercase mb-4">
              Core Technology
            </motion.p>
            <motion.h2 variants={fadeInLeft} className="text-text-primary mb-6">
              Powered by{' '}
              <span className="text-accent-blue glow-blue-text">NeuroPath™</span>{' '}
              AI
            </motion.h2>
            <motion.div variants={fadeInLeft} className="h-0.5 w-20 bg-gradient-to-r from-accent-blue to-transparent mb-6" />
            <motion.p variants={fadeInLeft} className="text-text-secondary text-lg leading-relaxed mb-10">
              Our proprietary AI core processes 10,000+ sensor inputs per second, enabling robots to make
              autonomous decisions in real-time — safely navigating complex environments that were previously
              impossible to automate.
            </motion.p>

            <motion.div className="grid grid-cols-1 sm:grid-cols-2 gap-4" variants={staggerContainer}>
              {techFeatures.map((feature) => {
                const Icon = iconMap[feature.icon] || Brain;
                return (
                  <motion.div
                    key={feature.title}
                    variants={fadeInUp}
                    className="group p-5 rounded-lg bg-bg-card border border-white/5 hover:border-accent-blue/30
                      transition-all duration-300 hover:shadow-glow-blue cursor-default"
                  >
                    <div className="flex items-start gap-4">
                      <div className="p-2 rounded-md bg-accent-blue/10 border border-accent-blue/20 flex-shrink-0
                        group-hover:bg-accent-blue/20 transition-colors">
                        <Icon size={18} className="text-accent-blue" />
                      </div>
                      <div>
                        <h4 className="text-text-primary font-orbitron text-xs font-semibold tracking-wide mb-2">
                          {feature.title}
                        </h4>
                        <p className="text-text-secondary text-xs leading-relaxed">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </motion.div>

          {/* Right: Neural network visualization */}
          <motion.div
            variants={fadeInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            className="relative"
          >
            <div className="relative aspect-square max-w-md mx-auto">
              {/* Animated SVG neural network */}
              <svg viewBox="0 0 400 400" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Connection lines */}
                {[
                  [80, 100, 200, 80], [80, 160, 200, 80], [80, 220, 200, 160],
                  [80, 280, 200, 240], [80, 280, 200, 320],
                  [200, 80, 320, 120], [200, 80, 320, 200], [200, 160, 320, 120],
                  [200, 160, 320, 200], [200, 240, 320, 200], [200, 240, 320, 280],
                  [200, 320, 320, 280], [200, 320, 320, 360],
                ].map(([x1, y1, x2, y2], i) => (
                  <motion.line
                    key={i}
                    x1={x1} y1={y1} x2={x2} y2={y2}
                    stroke="#00c4ff"
                    strokeWidth="0.8"
                    strokeOpacity="0.3"
                    initial={{ pathLength: 0, opacity: 0 }}
                    whileInView={{ pathLength: 1, opacity: 1 }}
                    transition={{ duration: 1.5, delay: i * 0.07 }}
                    viewport={{ once: true }}
                  />
                ))}

                {/* Input nodes */}
                {[100, 160, 220, 280].map((y, i) => (
                  <motion.circle
                    key={`in-${i}`}
                    cx="80" cy={y} r="10"
                    fill="rgba(0,196,255,0.15)"
                    stroke="#00c4ff"
                    strokeWidth="1.5"
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.4, delay: 0.2 + i * 0.1 }}
                    viewport={{ once: true }}
                  />
                ))}

                {/* Hidden nodes */}
                {[80, 160, 240, 320].map((y, i) => (
                  <motion.circle
                    key={`hidden-${i}`}
                    cx="200" cy={y} r="14"
                    fill="rgba(0,196,255,0.2)"
                    stroke="#00c4ff"
                    strokeWidth="1.5"
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.4, delay: 0.6 + i * 0.1 }}
                    viewport={{ once: true }}
                    style={{ animationDelay: `${i * 0.5}s`, animationDuration: '3s', animationIterationCount: 'infinite' }}
                  />
                ))}

                {/* Output nodes */}
                {[120, 200, 280, 360].map((y, i) => (
                  <motion.circle
                    key={`out-${i}`}
                    cx="320" cy={y} r="10"
                    fill="rgba(0,196,255,0.15)"
                    stroke="#00c4ff"
                    strokeWidth="1.5"
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.4, delay: 1 + i * 0.1 }}
                    viewport={{ once: true }}
                  />
                ))}

                {/* Center glow */}
                <circle cx="200" cy="200" r="80" fill="rgba(0,196,255,0.03)" />
                <circle cx="200" cy="200" r="80" stroke="rgba(0,196,255,0.1)" strokeWidth="0.5" strokeDasharray="4 4" />
              </svg>

              {/* Floating labels */}
              <div className="absolute top-12 left-0 font-orbitron text-[10px] text-text-secondary tracking-widest">
                INPUT
              </div>
              <div className="absolute top-12 left-1/2 -translate-x-1/2 font-orbitron text-[10px] text-accent-blue tracking-widest">
                NEURAL CORE
              </div>
              <div className="absolute top-12 right-0 font-orbitron text-[10px] text-text-secondary tracking-widest">
                OUTPUT
              </div>

              {/* Animated pulse rings */}
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  className="absolute inset-0 rounded-full border border-accent-blue/10"
                  animate={{ scale: [1, 1.15, 1], opacity: [0.5, 0, 0.5] }}
                  transition={{ duration: 3, delay: i * 1, repeat: Infinity }}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
