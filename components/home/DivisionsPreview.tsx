'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Microscope, Clapperboard, Megaphone, Users, MonitorSpeaker, Shield, type LucideIcon } from 'lucide-react';
import { staggerContainer, fadeInUp } from '@/lib/utils/animations';
import { divisions } from '@/lib/data/divisions';
import SectionTitle from '@/components/shared/SectionTitle';

const iconMap: Record<string, LucideIcon> = {
  Microscope,
  Clapperboard,
  Megaphone,
  Users,
  MonitorSpeaker,
  Shield,
};

export default function DivisionsPreview() {
  return (
    <section className="py-24 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-bg-secondary/50 to-bg-primary" />
      <div className="absolute inset-0 bg-grid opacity-10 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <SectionTitle
          eyebrow="Organizational Structure"
          title="PURTC Divisions"
          subtitle="Find the division that fits you best. From technology research to creative design — every member has a place in PURTC."
          align="center"
        />

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-16"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
        >
          {divisions.map((div) => {
            const Icon = iconMap[div.icon] || Microscope;
            return (
              <motion.div
                key={div.id}
                variants={fadeInUp}
                className="group relative glass rounded-xl p-6 border border-white/5 hover:border-accent-blue/30 transition-all duration-300 hover:-translate-y-1 cursor-pointer"
              >
                {/* Color accent top */}
                <div
                  className="absolute top-0 left-0 right-0 h-0.5 rounded-t-xl opacity-60 group-hover:opacity-100 transition-opacity"
                  style={{ background: `linear-gradient(90deg, transparent, ${div.color}, transparent)` }}
                />

                {/* Icon */}
                <div
                  className="w-12 h-12 rounded-lg flex items-center justify-center mb-4 transition-all duration-300"
                  style={{ background: `${div.color}15`, border: `1px solid ${div.color}30` }}
                >
                  <Icon size={22} className="flex-shrink-0" style={{ color: div.color } as React.CSSProperties} />
                </div>

                {/* Short name badge */}
                <span
                  className="inline-block font-orbitron text-[10px] tracking-[0.2em] px-2 py-0.5 rounded mb-3 font-semibold"
                  style={{ color: div.color, background: `${div.color}15` }}
                >
                  {div.shortName}
                </span>

                <h3 className="font-orbitron text-sm font-semibold text-text-primary mb-2 leading-tight">
                  {div.name}
                </h3>
                <p className="text-text-secondary text-xs leading-relaxed">
                  {div.description}
                </p>

                {/* Focus areas */}
                <div className="flex flex-wrap gap-1.5 mt-4">
                  {div.focusAreas.slice(0, 2).map((area) => (
                    <span
                      key={area}
                      className="text-[10px] px-2 py-0.5 rounded-full border border-white/10 text-text-secondary"
                    >
                      {area}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* CTA */}
        <motion.div
          className="text-center mt-12"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <Link
            href="/divisions"
            className="inline-flex items-center gap-2 font-orbitron text-xs tracking-[0.2em] text-accent-blue hover:text-text-primary transition-colors uppercase group"
          >
            View All Divisions
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
