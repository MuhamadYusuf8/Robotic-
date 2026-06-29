'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Zap, Shield, Activity, Filter } from 'lucide-react';
import { products } from '@/lib/data/products';
import SectionTitle from '@/components/shared/SectionTitle';
import { staggerContainer, scaleIn } from '@/lib/utils/animations';

type Category = 'All' | 'Industrial' | 'Medical' | 'Logistics' | 'Defense';

const categoryColors: Record<string, string> = {
  Industrial: 'text-accent-blue border-accent-blue/40 bg-accent-blue/10',
  Medical: 'text-emerald-400 border-emerald-400/40 bg-emerald-400/10',
  Logistics: 'text-yellow-400 border-yellow-400/40 bg-yellow-400/10',
  Defense: 'text-red-400 border-red-400/40 bg-red-400/10',
};

const filterBtns: Category[] = ['All', 'Industrial', 'Medical', 'Logistics', 'Defense'];

export default function ProductsPage() {
  const [activeFilter, setActiveFilter] = useState<Category>('All');

  const filtered = activeFilter === 'All'
    ? products
    : products.filter((p) => p.category === activeFilter);

  return (
    <div className="min-h-screen bg-bg-primary pt-20">
      {/* Hero banner */}
      <div className="relative py-20 lg:py-28 bg-bg-secondary overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-15 pointer-events-none" />
        <div className="absolute inset-0 bg-radial-glow opacity-30" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent-blue/40 to-transparent" />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <SectionTitle
            eyebrow="Our Product Line"
            title="The PURTC Robot Family"
            subtitle="Six precision-engineered robotic systems covering Industrial, Medical, Logistics, and Defense applications. Each built to redefine what's possible in its category."
            align="center"
          />
        </div>
      </div>

      {/* Filter bar */}
      <div className="sticky top-20 z-30 bg-bg-primary/90 backdrop-blur-md border-b border-white/5 py-4">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center gap-4 flex-wrap">
          <div className="flex items-center gap-2 text-text-secondary">
            <Filter size={14} />
            <span className="font-orbitron text-xs tracking-wider">FILTER</span>
          </div>
          <div className="flex gap-2 flex-wrap">
            {filterBtns.map((cat) => (
              <button
                key={cat}
                id={`filter-${cat.toLowerCase()}`}
                onClick={() => setActiveFilter(cat)}
                className={`px-4 py-1.5 rounded-sm font-orbitron text-xs tracking-wider uppercase transition-all duration-300
                  ${activeFilter === cat
                    ? 'bg-accent-blue text-bg-primary'
                    : 'border border-white/10 text-text-secondary hover:border-accent-blue/40 hover:text-text-primary'
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>
          <div className="ml-auto text-text-secondary font-orbitron text-xs">
            {filtered.length} MODELS
          </div>
        </div>
      </div>

      {/* Product grid */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            {filtered.map((product) => (
              <motion.article
                key={product.slug}
                variants={scaleIn}
                className="group relative bg-bg-card border border-white/5 rounded-lg overflow-hidden
                  hover:border-accent-blue/30 transition-all duration-300 hover:shadow-glow-blue"
              >
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent-blue/50 to-transparent
                  opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Image area */}
                <div className="relative aspect-[16/10] bg-gradient-to-br from-bg-primary to-bg-secondary overflow-hidden">
                  <div className="absolute inset-0 bg-grid opacity-20" />
                  {/* Robot illustration */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <svg viewBox="0 0 160 180" className="w-1/2 opacity-70" fill="none">
                      <rect x="45" y="18" width="70" height="45" rx="6" fill="rgba(0,196,255,0.12)" stroke="#00c4ff" strokeWidth="1.5"/>
                      <rect x="55" y="26" width="50" height="14" rx="3" fill="rgba(0,196,255,0.25)"/>
                      <circle cx="67" cy="47" r="5" fill="#00c4ff" opacity="0.9"/>
                      <circle cx="93" cy="47" r="5" fill="#00c4ff" opacity="0.9"/>
                      <rect x="38" y="68" width="84" height="66" rx="6" fill="rgba(0,196,255,0.08)" stroke="#00c4ff" strokeWidth="1.5"/>
                      <rect x="50" y="80" width="60" height="16" rx="3" fill="rgba(0,196,255,0.2)"/>
                      <rect x="14" y="72" width="20" height="52" rx="5" fill="rgba(0,196,255,0.08)" stroke="#00c4ff" strokeWidth="1.5"/>
                      <rect x="126" y="72" width="20" height="52" rx="5" fill="rgba(0,196,255,0.08)" stroke="#00c4ff" strokeWidth="1.5"/>
                      <rect x="47" y="140" width="26" height="38" rx="5" fill="rgba(0,196,255,0.08)" stroke="#00c4ff" strokeWidth="1.5"/>
                      <rect x="87" y="140" width="26" height="38" rx="5" fill="rgba(0,196,255,0.08)" stroke="#00c4ff" strokeWidth="1.5"/>
                    </svg>
                  </div>
                  <div className="absolute inset-0 bg-radial-glow opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Featured badge */}
                  {product.featured && (
                    <div className="absolute top-3 right-3 px-2 py-1 bg-accent-blue text-bg-primary font-orbitron text-[9px] tracking-wider rounded-sm">
                      FEATURED
                    </div>
                  )}
                </div>

                <div className="p-6">
                  {/* Category */}
                  <span className={`badge inline-block px-2.5 py-1 rounded-full border text-[10px] mb-3 ${categoryColors[product.category]}`}>
                    {product.category}
                  </span>

                  <h2 className="font-orbitron text-xl font-bold text-text-primary tracking-wide mb-1">{product.name}</h2>
                  <p className="text-accent-blue font-orbitron text-xs tracking-wide mb-3">{product.tagline}</p>
                  <p className="text-text-secondary text-sm leading-relaxed mb-5 line-clamp-2">{product.description}</p>

                  {/* Specs grid */}
                  <div className="grid grid-cols-3 gap-2 p-3 bg-bg-primary/60 rounded-md mb-5">
                    {[
                      { icon: Zap, label: 'Speed', value: product.specs.speed },
                      { icon: Activity, label: 'Payload', value: product.specs.payload },
                      { icon: Shield, label: 'Battery', value: product.specs.battery },
                    ].map(({ icon: Icon, label, value }) => (
                      <div key={label} className="text-center">
                        <Icon size={11} className="text-accent-blue mx-auto mb-1" />
                        <div className="font-orbitron text-[9px] text-text-secondary">{label}</div>
                        <div className="font-orbitron text-[10px] text-text-primary font-semibold">{value}</div>
                      </div>
                    ))}
                  </div>

                  {/* Price + CTA */}
                  <div className="flex items-center justify-between">
                    <span className="font-orbitron text-[10px] text-text-secondary tracking-wider">
                      {product.price}
                    </span>
                    <Link
                      href={`/products/${product.slug}`}
                      className="flex items-center gap-2 text-accent-blue font-orbitron text-xs tracking-wider
                        hover:gap-3 transition-all duration-200"
                    >
                      View Details
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
