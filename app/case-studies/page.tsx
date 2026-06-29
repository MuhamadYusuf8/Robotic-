'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, TrendingUp, Clock, BarChart2, Filter } from 'lucide-react';
import { caseStudies } from '@/lib/data/caseStudies';
import SectionTitle from '@/components/shared/SectionTitle';
import { staggerContainer, scaleIn } from '@/lib/utils/animations';

type Industry = 'All' | 'Manufacturing' | 'Healthcare' | 'Logistics' | 'Mining';

const industryColors: Record<string, string> = {
  Manufacturing: 'text-accent-blue border-accent-blue/40 bg-accent-blue/10',
  Healthcare: 'text-emerald-400 border-emerald-400/40 bg-emerald-400/10',
  Logistics: 'text-yellow-400 border-yellow-400/40 bg-yellow-400/10',
  Mining: 'text-orange-400 border-orange-400/40 bg-orange-400/10',
};

const filters: Industry[] = ['All', 'Manufacturing', 'Healthcare', 'Logistics', 'Mining'];

export default function CaseStudiesPage() {
  const [activeFilter, setActiveFilter] = useState<Industry>('All');

  const filtered = activeFilter === 'All'
    ? caseStudies
    : caseStudies.filter((c) => c.industry === activeFilter);

  return (
    <div className="min-h-screen bg-bg-primary pt-20">
      {/* Hero */}
      <section className="relative py-24 lg:py-28 bg-bg-secondary overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-15 pointer-events-none" />
        <div className="absolute inset-0 bg-radial-glow opacity-30" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent-blue/40 to-transparent" />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <SectionTitle
            eyebrow="Case Studies"
            title="Real Results, Real Impact"
            subtitle="See how PURTC robots are transforming operations for enterprises worldwide. Every deployment backed by measurable ROI."
            align="center"
          />
        </div>
      </section>

      {/* Filter bar */}
      <div className="sticky top-20 z-30 bg-bg-primary/90 backdrop-blur-md border-b border-white/5 py-4">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center gap-4 flex-wrap">
          <div className="flex items-center gap-2 text-text-secondary">
            <Filter size={14} />
            <span className="font-orbitron text-xs tracking-wider">INDUSTRY</span>
          </div>
          <div className="flex gap-2 flex-wrap">
            {filters.map((f) => (
              <button
                key={f}
                id={`case-filter-${f.toLowerCase()}`}
                onClick={() => setActiveFilter(f)}
                className={`px-4 py-1.5 rounded-sm font-orbitron text-xs tracking-wider uppercase transition-all duration-300
                  ${activeFilter === f
                    ? 'bg-accent-blue text-bg-primary'
                    : 'border border-white/10 text-text-secondary hover:border-accent-blue/40 hover:text-text-primary'
                  }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Grid */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            {filtered.map((study) => (
              <motion.article
                key={study.slug}
                variants={scaleIn}
                className="group bg-bg-card border border-white/5 rounded-xl overflow-hidden
                  hover:border-accent-blue/30 transition-all duration-300 hover:shadow-glow-blue"
              >
                {/* Image placeholder */}
                <div className="relative h-48 bg-gradient-to-br from-bg-primary to-bg-secondary overflow-hidden">
                  <div className="absolute inset-0 bg-grid opacity-20" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="font-orbitron text-6xl font-black text-accent-blue/10 select-none">
                      {study.industry.toUpperCase().slice(0, 3)}
                    </div>
                  </div>

                  {/* Industry badge */}
                  <div className="absolute top-4 left-4">
                    <span className={`badge px-3 py-1 rounded-full border text-[10px] ${industryColors[study.industry]}`}>
                      {study.industry}
                    </span>
                  </div>

                  {/* Metrics overlay */}
                  <div className="absolute bottom-4 right-4">
                    <div className="flex items-center gap-1 bg-bg-primary/80 backdrop-blur-sm px-3 py-1.5 rounded-full border border-accent-blue/30">
                      <TrendingUp size={12} className="text-accent-blue" />
                      <span className="font-orbitron text-xs text-accent-blue font-bold">{study.metrics.roi} ROI</span>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <p className="text-text-secondary text-xs font-orbitron tracking-wider mb-2">{study.client}</p>
                  <h2 className="font-orbitron text-base font-bold text-text-primary mb-3 leading-tight">
                    {study.title}
                  </h2>
                  <p className="text-text-secondary text-sm leading-relaxed mb-6 line-clamp-3">
                    {study.results}
                  </p>

                  {/* Metrics */}
                  <div className="grid grid-cols-3 gap-3 mb-6 p-3 bg-bg-primary/60 rounded-md">
                    {[
                      { icon: TrendingUp, label: 'ROI', value: study.metrics.roi },
                      { icon: Clock, label: 'Time Saved', value: study.metrics.timeSaved.split('/')[0] },
                      { icon: BarChart2, label: 'Error Reduction', value: study.metrics.errorReduction },
                    ].map(({ icon: Icon, label, value }) => (
                      <div key={label} className="text-center">
                        <Icon size={11} className="text-accent-blue mx-auto mb-1" />
                        <div className="font-orbitron text-[9px] text-text-secondary">{label}</div>
                        <div className="font-orbitron text-xs text-text-primary font-bold">{value}</div>
                      </div>
                    ))}
                  </div>

                  {/* Quote */}
                  <blockquote className="text-text-secondary text-xs italic border-l-2 border-accent-blue/40 pl-3 mb-6 line-clamp-2">
                    &quot;{study.quote}&quot;
                  </blockquote>

                  <div className="flex items-center justify-between">
                    <span className="font-orbitron text-[10px] text-text-secondary tracking-wider">
                      {study.robotUsed}
                    </span>
                    <Link
                      href={`/case-studies/${study.slug}`}
                      className="flex items-center gap-2 text-accent-blue font-orbitron text-xs tracking-wider
                        hover:gap-3 transition-all duration-200"
                    >
                      Read Full Study
                      <ArrowRight size={13} />
                    </Link>
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
