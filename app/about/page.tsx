'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { staggerContainer, fadeInUp, fadeInLeft, fadeInRight } from '@/lib/utils/animations';
import SectionTitle from '@/components/shared/SectionTitle';
import { Target, Eye, Heart, Zap, Globe, Users, BookOpen } from 'lucide-react';

const missions = [
  {
    icon: Zap,
    title: 'Inspiring Future Leaders',
    description: 'Inspire and empower future robotics leaders who innovate with strong character.',
  },
  {
    icon: Globe,
    title: 'Driving Technological Progress',
    description: 'Drive technological advancement for a better world through real research and development.',
  },
  {
    icon: Users,
    title: 'Fostering Collaboration',
    description: 'Build innovation through collaborative partnerships with students, faculty, and external communities.',
  },
  {
    icon: Heart,
    title: 'Advancing Human Well-being',
    description: 'Improve human well-being through impactful technology solutions.',
  },
  {
    icon: BookOpen,
    title: 'Nurturing Talent',
    description: 'Develop and nurture the next generation of robotics and technology talent.',
  },
];

const values = [
  { label: 'Innovation', color: '#00c4ff' },
  { label: 'Collaboration', color: '#7c3aed' },
  { label: 'Excellence', color: '#10b981' },
  { label: 'Integrity', color: '#f59e0b' },
  { label: 'Impact', color: '#ec4899' },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-bg-primary">
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-15 pointer-events-none" />
        <div className="absolute inset-0 bg-radial-glow opacity-30" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-px bg-gradient-to-r from-transparent via-accent-blue/50 to-transparent" />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="text-center"
          >
            <motion.p variants={fadeInUp} className="font-orbitron text-xs font-semibold text-accent-blue tracking-[0.3em] uppercase mb-4">
              About Us
            </motion.p>
            <motion.h1 variants={fadeInUp} className="text-text-primary mb-6">
              President University<br />
              <span className="text-accent-blue glow-blue-text">Robotic &amp; Technology Club</span>
            </motion.h1>
            <motion.p variants={fadeInUp} className="text-text-secondary text-lg max-w-3xl mx-auto leading-relaxed">
              PURTC was born from the passion of a group of students who believe that technology is the key to change.
              Established on October 25th, we began our journey with 16 members and one determination: to build a community that
              doesn&apos;t just learn technology, but also uses it to create real impact.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Vision */}
            <motion.div
              variants={fadeInLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="glass rounded-2xl p-10 border border-white/5"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-accent-blue/10 border border-accent-blue/30 flex items-center justify-center">
                  <Eye size={24} className="text-accent-blue" />
                </div>
                <div>
                  <p className="font-orbitron text-[10px] tracking-[0.25em] text-accent-blue uppercase">Our</p>
                  <h2 className="font-orbitron text-2xl text-text-primary">Vision</h2>
                </div>
              </div>
              <p className="text-text-secondary leading-relaxed">
                To establish ourselves as a preeminent institution dedicated to the advancement of robotics and technology,
                serving as a catalyst for innovation, research, and development. Our vision is to be a global leader in shaping
                the future of technology, driving positive societal impact, and fostering a culture of excellence and collaboration
                within the field.
              </p>
            </motion.div>

            {/* Missions */}
            <motion.div
              variants={fadeInRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-xl bg-accent-blue/10 border border-accent-blue/30 flex items-center justify-center">
                  <Target size={24} className="text-accent-blue" />
                </div>
                <div>
                  <p className="font-orbitron text-[10px] tracking-[0.25em] text-accent-blue uppercase">Our</p>
                  <h2 className="font-orbitron text-2xl text-text-primary">Mission</h2>
                </div>
              </div>
              <div className="space-y-4">
                {missions.map((mission, i) => {
                  const Icon = mission.icon;
                  return (
                    <motion.div
                      key={i}
                      variants={fadeInUp}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      className="flex gap-4 glass rounded-xl p-4 border border-white/5 hover:border-accent-blue/20 transition-colors"
                    >
                      <div className="w-8 h-8 rounded-lg bg-accent-blue/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Icon size={16} className="text-accent-blue" />
                      </div>
                      <div>
                        <h4 className="font-orbitron text-sm text-text-primary mb-1">{mission.title}</h4>
                        <p className="text-text-secondary text-sm leading-relaxed">{mission.description}</p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 relative bg-bg-secondary/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionTitle
            eyebrow="Our Values"
            title="Core Values"
            subtitle="The values that form the foundation of every step PURTC takes in creating and building community."
            align="center"
          />
          <motion.div
            className="flex flex-wrap justify-center gap-4 mt-12"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {values.map((val) => (
              <motion.div
                key={val.label}
                variants={fadeInUp}
                className="glass rounded-xl px-8 py-5 border border-white/5 hover:scale-105 transition-transform"
                style={{ borderColor: `${val.color}20` }}
              >
                <div className="w-2 h-2 rounded-full mx-auto mb-3" style={{ background: val.color }} />
                <p className="font-orbitron text-sm font-semibold" style={{ color: val.color }}>
                  {val.label}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Cabinet Photo */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionTitle
            eyebrow="Ardentis Cabinet"
            title="PURTC Leadership Team"
            subtitle="Behind every program and innovation at PURTC, there are them — 39 dedicated members building this club together."
            align="center"
          />

          {/* Group photo */}
          <motion.div
            className="mt-12 relative rounded-2xl overflow-hidden border border-white/10"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="relative aspect-[16/9] w-full">
              <Image
                src="/assets/Ardentis_Cabinet.webp"
                alt="PURTC Ardentis Cabinet — 39 Active Members"
                fill
                className="object-cover"
                priority
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-bg-primary/80 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6">
                <p className="font-orbitron text-xs tracking-[0.2em] text-accent-blue uppercase mb-1">Ardentis Cabinet</p>
                <p className="text-text-primary font-orbitron text-xl font-bold">39 Active Members</p>
                <p className="text-text-secondary text-sm">President University Robotic &amp; Technology Club</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
