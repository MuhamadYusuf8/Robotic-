'use client';

import { motion } from 'framer-motion';
import { Brain, Eye, Shield, Wifi, Cpu, Activity, Lock, Globe } from 'lucide-react';
import SectionTitle from '@/components/shared/SectionTitle';
import { staggerContainer, fadeInUp, scaleIn } from '@/lib/utils/animations';
import Link from 'next/link';
import Button from '@/components/shared/Button';

const howItWorksSteps = [
  {
    num: '01',
    title: 'Sensor Fusion',
    description: 'Multi-modal sensors (LiDAR, RGB-D, IMU, force-torque) stream data to the NeuroPath™ processing core at 10,000 readings per second.',
  },
  {
    num: '02',
    title: 'AI Processing',
    description: 'Our on-board neural processor runs real-time inference on environment mapping, object recognition, and path optimization in under 5ms.',
  },
  {
    num: '03',
    title: 'Decision Engine',
    description: 'Probabilistic decision trees evaluate 500+ possible actions per second, selecting the optimal movement and task execution strategy.',
  },
  {
    num: '04',
    title: 'Precise Execution',
    description: 'Servo-actuated joints with closed-loop feedback execute movements with sub-millimeter precision and adaptive force control.',
  },
];

const techCapabilities = [
  { icon: Brain, title: 'NeuroPath™ AI', stat: '< 5ms', statLabel: 'Inference Latency', description: 'Proprietary neural network optimized for edge deployment. Processes sensor fusion from 12+ sources simultaneously.' },
  { icon: Eye, title: 'Omnivision™ System', stat: '99.97%', statLabel: 'Recognition Accuracy', description: 'Multi-spectral computer vision combining visible, thermal, and depth imaging for complete environmental awareness.' },
  { icon: Shield, title: 'Force-Safe™', stat: '0.01N', statLabel: 'Force Resolution', description: 'Industry-leading haptic feedback and collision avoidance enabling safe human-robot collaboration without cages.' },
  { icon: Wifi, title: 'PURTC Connect', stat: '< 1ms', statLabel: 'System Latency', description: 'Universal integration layer supporting OPC-UA, MQTT, REST API, and all major enterprise MES/WMS/ERP platforms.' },
  { icon: Cpu, title: 'Edge AI Chip', stat: '40 TOPS', statLabel: 'Processing Power', description: 'Custom PURTC silicon with dedicated neural processing units. No cloud dependency for core autonomy functions.' },
  { icon: Activity, title: 'Predictive Health', stat: '99.7%', statLabel: 'Uptime', description: 'ML-driven predictive maintenance analyzes 200+ parameters to predict failures 72+ hours in advance.' },
  { icon: Lock, title: 'Security Core', stat: 'AES-256', statLabel: 'Encryption', description: 'Military-grade encryption for all communications. Zero-trust architecture with hardware security modules.' },
  { icon: Globe, title: 'Fleet Intelligence', stat: '1000+', statLabel: 'Robot Fleet', description: 'Centralized fleet management with AI-optimized task distribution and real-time performance monitoring.' },
];

const certifications = [
  { name: 'ISO 10218', desc: 'Industrial Robot Safety' },
  { name: 'CE Marked', desc: 'European Conformity' },
  { name: 'UL Listed', desc: 'Safety Certification' },
  { name: 'RoHS', desc: 'Environmental Compliance' },
  { name: 'FDA 510(k)', desc: 'Medical Device (HELIX M3)' },
  { name: 'MIL-STD-810', desc: 'Defense Standard' },
];

export default function TechnologyPageClient() {
  return (
    <div className="min-h-screen bg-bg-primary pt-20">
      {/* Hero */}
      <section className="relative py-24 lg:py-32 bg-bg-secondary overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-15 pointer-events-none" />
        <div className="absolute inset-0 bg-radial-glow opacity-40" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent-blue/40 to-transparent" />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <SectionTitle
            eyebrow="Our Technology"
            title="AI-Powered Core"
            subtitle="Every PURTC robot is built on a foundation of proprietary AI and precision engineering that pushes the boundaries of autonomous robotics."
            align="center"
            accentWord="AI-Powered"
          />
        </div>
      </section>

      {/* Capabilities grid */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-grid opacity-10 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionTitle
            eyebrow="Capabilities"
            title="Eight Pillars of Excellence"
            subtitle="The technologies that make PURTC robots the most capable autonomous systems on the market."
            align="center"
            className="mb-16"
          />

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
          >
            {techCapabilities.map((cap, i) => {
              const Icon = cap.icon;
              return (
                <motion.div
                  key={i}
                  variants={scaleIn}
                  className="group p-6 bg-bg-card border border-white/5 rounded-lg
                    hover:border-accent-blue/30 transition-all duration-300 hover:shadow-glow-blue"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="p-3 rounded-md bg-accent-blue/10 border border-accent-blue/20 flex-shrink-0
                      group-hover:bg-accent-blue/20 transition-colors">
                      <Icon size={20} className="text-accent-blue" />
                    </div>
                  </div>
                  <div className="mb-3">
                    <div className="font-orbitron text-2xl font-bold text-accent-blue">{cap.stat}</div>
                    <div className="font-orbitron text-[10px] text-text-secondary tracking-wider">{cap.statLabel}</div>
                  </div>
                  <h3 className="font-orbitron text-sm font-semibold text-text-primary mb-2">{cap.title}</h3>
                  <p className="text-text-secondary text-xs leading-relaxed">{cap.description}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 lg:py-32 bg-bg-secondary relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-10 pointer-events-none" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent-blue/30 to-transparent" />

        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionTitle
            eyebrow="How It Works"
            title="From Sensor to Action in 5ms"
            subtitle="The real-time processing pipeline that powers every PURTC robot."
            align="center"
            className="mb-20"
          />

          <div className="relative">
            {/* Connector line */}
            <div className="hidden lg:block absolute top-12 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-transparent via-accent-blue/40 to-transparent" />

            <motion.div
              className="grid grid-cols-1 lg:grid-cols-4 gap-8"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
            >
              {howItWorksSteps.map((step, i) => (
                <motion.div
                  key={i}
                  variants={fadeInUp}
                  className="flex flex-col items-center text-center group"
                >
                  <div className="relative mb-6">
                    <div className="w-24 h-24 rounded-full border border-accent-blue/30 bg-bg-card
                      flex items-center justify-center transition-all duration-300
                      group-hover:border-accent-blue group-hover:shadow-glow-blue">
                      <span className="font-orbitron text-2xl font-bold text-accent-blue">{step.num}</span>
                    </div>
                    {i < howItWorksSteps.length - 1 && (
                      <div className="lg:hidden absolute left-1/2 top-full w-px h-8 bg-gradient-to-b from-accent-blue/40 to-transparent mt-2" />
                    )}
                  </div>
                  <h3 className="font-orbitron text-sm font-semibold text-text-primary mb-3">{step.title}</h3>
                  <p className="text-text-secondary text-sm leading-relaxed">{step.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-grid opacity-10 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionTitle
            eyebrow="Certifications"
            title="Standards & Compliance"
            subtitle="PURTC robots meet the strictest global safety and performance standards."
            align="center"
            className="mb-12"
          />

          <motion.div
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {certifications.map((cert, i) => (
              <motion.div
                key={i}
                variants={scaleIn}
                className="p-4 bg-bg-card border border-white/5 rounded-lg text-center
                  hover:border-accent-blue/30 transition-all duration-300 hover:shadow-glow-blue group"
              >
                <div className="font-orbitron text-sm font-bold text-accent-blue mb-2 group-hover:glow-blue-text">
                  {cert.name}
                </div>
                <div className="text-text-secondary text-xs leading-tight">{cert.desc}</div>
              </motion.div>
            ))}
          </motion.div>

          <div className="text-center mt-12">
            <Link href="/contact">
              <Button variant="outline" size="lg" glowEffect>
                Request Technical Documentation
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
