'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Zap, Shield, Activity } from 'lucide-react';
import { staggerContainer, fadeInUp, scaleIn } from '@/lib/utils/animations';
import { products } from '@/lib/data/products';
import Button from '@/components/shared/Button';
import SectionTitle from '@/components/shared/SectionTitle';

const categoryColors: Record<string, string> = {
  Industrial: 'text-accent-blue border-accent-blue/40 bg-accent-blue/10',
  Medical: 'text-emerald-400 border-emerald-400/40 bg-emerald-400/10',
  Logistics: 'text-accent-gold border-accent-gold/40 bg-accent-gold/10',
  Defense: 'text-red-400 border-red-400/40 bg-red-400/10',
};

const featuredProducts = products.filter((p) => p.featured).slice(0, 3);

export default function ProductTeaser() {
  return (
    <section className="py-24 lg:py-32 relative bg-bg-secondary">
      {/* Top gradient */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent-blue/30 to-transparent" />
      <div className="absolute inset-0 bg-grid opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <SectionTitle
          eyebrow="Our Products"
          title="Engineered for the Extraordinary"
          subtitle="Six categories of precision robots, each purpose-built for industry-specific challenges. Where performance is non-negotiable."
          align="center"
          accentWord="Extraordinary"
          className="mb-16"
        />

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
        >
          {featuredProducts.map((product) => (
            <motion.div
              key={product.slug}
              variants={scaleIn}
              className="group relative bg-bg-card border border-white/5 rounded-lg overflow-hidden card-hover"
            >
              {/* Top glow accent */}
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent-blue/50 to-transparent 
                opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Category badge */}
              <div className="p-6 pb-0">
                <span className={`badge inline-block px-3 py-1 rounded-full border text-[10px] mb-4 ${categoryColors[product.category]}`}>
                  {product.category}
                </span>

                {/* Product visual placeholder */}
                <div className="relative w-full aspect-[4/3] mb-4 bg-gradient-to-br from-bg-primary to-bg-secondary rounded-md overflow-hidden flex items-center justify-center">
                  <div className="absolute inset-0 bg-grid opacity-20" />
                  {/* Abstract robot silhouette SVG */}
                  <svg viewBox="0 0 120 140" className="w-2/3 h-2/3 opacity-60" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="35" y="15" width="50" height="35" rx="4" fill="rgba(0,196,255,0.15)" stroke="#00c4ff" strokeWidth="1"/>
                    <rect x="42" y="20" width="36" height="10" rx="2" fill="rgba(0,196,255,0.3)"/>
                    <circle cx="50" cy="35" r="4" fill="#00c4ff" opacity="0.8"/>
                    <circle cx="70" cy="35" r="4" fill="#00c4ff" opacity="0.8"/>
                    <rect x="30" y="55" width="60" height="50" rx="4" fill="rgba(0,196,255,0.1)" stroke="#00c4ff" strokeWidth="1"/>
                    <rect x="38" y="63" width="44" height="12" rx="2" fill="rgba(0,196,255,0.2)"/>
                    <rect x="10" y="58" width="16" height="40" rx="4" fill="rgba(0,196,255,0.1)" stroke="#00c4ff" strokeWidth="1"/>
                    <rect x="94" y="58" width="16" height="40" rx="4" fill="rgba(0,196,255,0.1)" stroke="#00c4ff" strokeWidth="1"/>
                    <rect x="35" y="110" width="20" height="30" rx="4" fill="rgba(0,196,255,0.1)" stroke="#00c4ff" strokeWidth="1"/>
                    <rect x="65" y="110" width="20" height="30" rx="4" fill="rgba(0,196,255,0.1)" stroke="#00c4ff" strokeWidth="1"/>
                  </svg>

                  {/* Glow */}
                  <div className="absolute inset-0 bg-radial-glow opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              </div>

              <div className="p-6 pt-2">
                <h3 className="text-text-primary mb-1 font-orbitron text-lg tracking-wider">{product.name}</h3>
                <p className="text-accent-blue text-xs font-orbitron mb-3 tracking-wide">{product.tagline}</p>
                <p className="text-text-secondary text-sm leading-relaxed mb-6 line-clamp-2">
                  {product.description}
                </p>

                {/* Quick specs */}
                <div className="grid grid-cols-3 gap-3 mb-6 p-3 bg-bg-primary/60 rounded-md">
                  {[
                    { icon: Zap, label: 'Speed', value: product.specs.speed },
                    { icon: Activity, label: 'Payload', value: product.specs.payload },
                    { icon: Shield, label: 'Battery', value: product.specs.battery },
                  ].map(({ icon: Icon, label, value }) => (
                    <div key={label} className="text-center">
                      <Icon size={12} className="text-accent-blue mx-auto mb-1" />
                      <div className="font-orbitron text-[10px] text-text-secondary">{label}</div>
                      <div className="font-orbitron text-xs text-text-primary font-semibold">{value}</div>
                    </div>
                  ))}
                </div>

                <Link href={`/products/${product.slug}`} className="block">
                  <button className="w-full flex items-center justify-between px-4 py-3 border border-accent-blue/30
                    text-accent-blue font-orbitron text-xs tracking-wider uppercase rounded-sm
                    hover:bg-accent-blue/10 hover:border-accent-blue/60 transition-all duration-300 group/btn">
                    View Details
                    <ArrowRight size={14} className="transform group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          className="text-center mt-12"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <Link href="/products">
            <Button variant="ghost" size="lg" icon={<ArrowRight size={16} />} iconPosition="right">
              View All Products
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
