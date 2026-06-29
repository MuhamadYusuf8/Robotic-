'use client';

import { useState, Suspense } from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';
import { Download, Zap, Shield, Activity, Check, ChevronRight } from 'lucide-react';
import type { Product } from '@/lib/data/products';
import Button from '@/components/shared/Button';
import { staggerContainer, fadeInLeft, fadeInRight, fadeInUp } from '@/lib/utils/animations';

const RobotViewer3D = dynamic(() => import('@/components/shared/RobotViewer3D'), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full flex items-center justify-center">
      <div className="font-orbitron text-xs text-text-secondary animate-pulse tracking-widest">
        LOADING 3D MODEL...
      </div>
    </div>
  ),
});

type Tab = 'overview' | 'specifications' | 'applications' | 'downloads';

interface Props {
  product: Product;
}

export default function ProductDetailClient({ product }: Props) {
  const [activeTab, setActiveTab] = useState<Tab>('overview');

  const tabs: { id: Tab; label: string }[] = [
    { id: 'overview', label: 'Overview' },
    { id: 'specifications', label: 'Specifications' },
    { id: 'applications', label: 'Applications' },
    { id: 'downloads', label: 'Downloads' },
  ];

  const specRows = Object.entries(product.specs).map(([key, value]) => ({
    key: key.replace(/_/g, ' ').toUpperCase(),
    value,
  }));

  return (
    <div className="min-h-screen bg-bg-primary pt-20">
      {/* Breadcrumb */}
      <div className="border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-4 flex items-center gap-2 text-xs font-orbitron text-text-secondary">
          <Link href="/" className="hover:text-accent-blue transition-colors">Home</Link>
          <ChevronRight size={12} />
          <Link href="/products" className="hover:text-accent-blue transition-colors">Products</Link>
          <ChevronRight size={12} />
          <span className="text-text-primary">{product.name}</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        <motion.div
          className="grid lg:grid-cols-2 gap-12 items-start"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          {/* LEFT: 3D Viewer */}
          <motion.div variants={fadeInLeft} className="sticky top-28">
            <div className="relative aspect-square rounded-xl overflow-hidden bg-bg-card border border-white/10">
              <div className="absolute inset-0 bg-grid opacity-20" />
              <Suspense fallback={
                <div className="flex items-center justify-center h-full">
                  <span className="font-orbitron text-xs text-text-secondary animate-pulse">LOADING...</span>
                </div>
              }>
                <RobotViewer3D interactive={true} />
              </Suspense>

              {/* Corner decorations */}
              {['top-0 left-0', 'top-0 right-0', 'bottom-0 left-0', 'bottom-0 right-0'].map((pos, i) => (
                <div key={i} className={`absolute ${pos} w-6 h-6 border-accent-blue/60 ${
                  pos.includes('top') && pos.includes('left') ? 'border-t-2 border-l-2' :
                  pos.includes('top') ? 'border-t-2 border-r-2' :
                  pos.includes('left') ? 'border-b-2 border-l-2' : 'border-b-2 border-r-2'
                }`} />
              ))}

              {/* Interaction hint */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 font-orbitron text-[9px] text-text-secondary tracking-widest
                bg-bg-primary/80 px-3 py-1 rounded-full border border-white/10">
                DRAG TO ROTATE
              </div>
            </div>

            {/* Quick specs strip */}
            <div className="grid grid-cols-3 gap-3 mt-4">
              {[
                { icon: Zap, label: 'Speed', value: product.specs.speed },
                { icon: Activity, label: 'Payload', value: product.specs.payload },
                { icon: Shield, label: 'Battery', value: product.specs.battery },
              ].map(({ icon: Icon, label, value }) => (
                <div key={label} className="p-4 bg-bg-card border border-white/5 rounded-md text-center">
                  <Icon size={16} className="text-accent-blue mx-auto mb-2" />
                  <div className="font-orbitron text-[10px] text-text-secondary">{label}</div>
                  <div className="font-orbitron text-sm text-text-primary font-semibold mt-0.5">{value}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT: Product info */}
          <motion.div variants={fadeInRight}>
            {/* Header */}
            <div className="mb-6">
              <div className="flex items-center gap-3 mb-3">
                <span className="font-orbitron text-[10px] text-accent-blue tracking-[0.2em] border border-accent-blue/40 px-2 py-1 rounded-sm">
                  {product.category}
                </span>
                <span className="font-orbitron text-[10px] text-accent-gold tracking-[0.2em] border border-accent-gold/40 px-2 py-1 rounded-sm">
                  {product.specs.dof}
                </span>
              </div>
              <h1 className="text-text-primary mb-2 text-4xl lg:text-5xl">{product.name}</h1>
              <p className="text-accent-blue font-orbitron tracking-wide text-sm mb-4">{product.tagline}</p>
              <div className="h-0.5 w-16 bg-gradient-to-r from-accent-blue to-transparent" />
            </div>

            {/* Tabs */}
            <div className="flex gap-0 mb-6 border-b border-white/10">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  id={`tab-${tab.id}`}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-4 py-3 font-orbitron text-[10px] tracking-widest uppercase border-b-2 transition-all duration-300
                    ${activeTab === tab.id
                      ? 'border-accent-blue text-accent-blue'
                      : 'border-transparent text-text-secondary hover:text-text-primary'
                    }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Tab content */}
            <div className="min-h-64 mb-8">
              {activeTab === 'overview' && (
                <motion.div variants={staggerContainer} initial="hidden" animate="visible">
                  <motion.p variants={fadeInUp} className="text-text-secondary leading-relaxed mb-6 text-base">
                    {product.longDescription}
                  </motion.p>
                  <motion.div variants={fadeInUp}>
                    <h3 className="font-orbitron text-xs text-text-secondary tracking-[0.2em] uppercase mb-4">
                      Key Features
                    </h3>
                    <ul className="space-y-3">
                      {product.features.map((f, i) => (
                        <motion.li
                          key={i}
                          variants={fadeInUp}
                          className="flex items-start gap-3 text-text-secondary text-sm"
                        >
                          <Check size={14} className="text-accent-blue flex-shrink-0 mt-0.5" />
                          {f}
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>
                </motion.div>
              )}

              {activeTab === 'specifications' && (
                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
                  <table className="w-full text-sm">
                    <tbody>
                      {specRows.map(({ key, value }, i) => (
                        <tr
                          key={key}
                          className={`border-b border-white/5 ${i % 2 === 0 ? 'bg-bg-card/50' : ''}`}
                        >
                          <td className="py-3 px-4 font-orbitron text-[11px] text-text-secondary tracking-wider w-1/2">{key}</td>
                          <td className="py-3 px-4 font-semibold text-text-primary">{value}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </motion.div>
              )}

              {activeTab === 'applications' && (
                <motion.div
                  className="grid grid-cols-1 sm:grid-cols-2 gap-3"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  {product.applications.map((app, i) => (
                    <div
                      key={i}
                      className="p-4 bg-bg-card border border-white/5 rounded-md flex items-center gap-3
                        hover:border-accent-blue/30 transition-colors"
                    >
                      <div className="w-2 h-2 rounded-full bg-accent-blue flex-shrink-0" />
                      <span className="text-text-secondary text-sm">{app}</span>
                    </div>
                  ))}
                </motion.div>
              )}

              {activeTab === 'downloads' && (
                <motion.div className="space-y-3" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                  {[
                    { name: `${product.name} Datasheet`, size: '2.4 MB', type: 'PDF' },
                    { name: `${product.name} Technical Manual`, size: '18.7 MB', type: 'PDF' },
                    { name: `${product.name} 3D Model (STEP)`, size: '45.2 MB', type: 'STEP' },
                    { name: 'PURTC Connect SDK', size: '8.1 MB', type: 'ZIP' },
                  ].map((file, i) => (
                    <div key={i}
                      className="flex items-center justify-between p-4 bg-bg-card border border-white/5 rounded-md
                        hover:border-accent-blue/30 transition-colors group cursor-pointer">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-accent-blue/10 border border-accent-blue/30 rounded flex items-center justify-center">
                          <span className="font-orbitron text-[9px] text-accent-blue">{file.type}</span>
                        </div>
                        <div>
                          <div className="text-text-primary text-sm">{file.name}</div>
                          <div className="text-text-secondary text-xs">{file.size}</div>
                        </div>
                      </div>
                      <Download size={15} className="text-text-secondary group-hover:text-accent-blue transition-colors" />
                    </div>
                  ))}
                </motion.div>
              )}
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="flex-1">
                <Button variant="primary" size="lg" glowEffect className="w-full justify-center">
                  Request Demo for {product.name}
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="outline" size="lg">
                  Get Pricing
                </Button>
              </Link>
            </div>

            <p className="text-text-secondary text-xs mt-3 font-orbitron tracking-wider text-center">
              {product.price}
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
