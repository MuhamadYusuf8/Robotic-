'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { staggerContainer, fadeInUp } from '@/lib/utils/animations';
import { events } from '@/lib/data/events';
import { Calendar, Clock, CheckCircle2, Sparkles, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const statusConfig = {
  ongoing: { label: 'Active', color: '#10b981', bg: '#10b98115' },
  upcoming: { label: 'Upcoming', color: '#00c4ff', bg: '#00c4ff15' },
  'coming-soon': { label: 'Coming Soon', color: '#f59e0b', bg: '#f59e0b15' },
  past: { label: 'Completed', color: '#64748b', bg: '#64748b15' },
  pending: { label: 'Pending', color: '#64748b', bg: '#64748b15' },
};


type TabType = 'all' | 'active' | 'soon' | 'completed' | 'pending';

export default function EventsPage() {
  const [activeTab, setActiveTab] = useState<TabType>('all');

  const filteredEvents = events.filter((e) => {
    if (activeTab === 'all') return true;
    if (activeTab === 'active') return e.status === 'ongoing';
    if (activeTab === 'soon') return e.status === 'coming-soon' || e.status === 'upcoming';
    if (activeTab === 'completed') return e.status === 'past';
    if (activeTab === 'pending') return e.status === 'pending';
    return true;
  });

  const tabs: { key: TabType; label: string }[] = [
    { key: 'all', label: 'All' },
    { key: 'active', label: 'Active' },
    { key: 'soon', label: 'Coming Soon' },
    { key: 'completed', label: 'Completed' },
    { key: 'pending', label: 'Pending' },
  ];

  return (
    <div className="min-h-screen bg-bg-primary">
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-15 pointer-events-none" />
        <div className="absolute inset-0 bg-radial-glow opacity-30" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-px bg-gradient-to-r from-transparent via-accent-blue/50 to-transparent" />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <motion.div variants={staggerContainer} initial="hidden" animate="visible">
            <motion.p variants={fadeInUp} className="font-orbitron text-xs font-semibold text-accent-blue tracking-[0.3em] uppercase mb-4">
              Activities & Programs
            </motion.p>
            <motion.h1 variants={fadeInUp} className="text-text-primary mb-6">
              <span className="text-accent-blue glow-blue-text">PURTC</span> Events
            </motion.h1>
            <motion.p variants={fadeInUp} className="text-text-secondary text-lg max-w-2xl mx-auto">
              From consistent weekly sessions to intensive workshops — PURTC is always actively creating and growing.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Tabs + Events */}
      <section className="pb-24 relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Tab bar */}
          <div className="flex justify-center gap-2 mb-12">
            {tabs.map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`font-orbitron text-xs tracking-[0.15em] px-5 py-2.5 rounded-full transition-all duration-300 ${activeTab === tab.key
                    ? 'bg-accent-blue text-bg-primary shadow-glow-blue'
                    : 'border border-white/10 text-text-secondary hover:text-text-primary hover:border-white/20'
                  }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Events */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6"
            >
              {filteredEvents.length === 0 ? (
                <div className="col-span-3 text-center py-16">
                  <p className="text-text-secondary font-orbitron text-sm tracking-wider">No events found.</p>
                </div>
              ) : (
                filteredEvents.map((event) => {
                  const status = statusConfig[event.status];
                  return (
                    <motion.div
                      key={event.id}
                      layout
                      variants={fadeInUp}
                      initial="hidden"
                      animate="visible"
                      className="glass rounded-2xl overflow-hidden border border-white/5 hover:border-accent-blue/20 transition-all duration-300 flex flex-col"
                    >
                      <div className="h-1 bg-gradient-to-r from-accent-blue via-accent-blue/60 to-transparent" />
                      <div className="p-6 flex flex-col flex-1">
                        <div className="flex items-center justify-between mb-5">
                          <span
                            className="inline-flex items-center gap-1.5 font-orbitron text-[10px] tracking-[0.15em] px-3 py-1.5 rounded-full font-semibold"
                            style={{ color: status.color, background: status.bg }}
                          >
                            {event.status === 'ongoing' && <div className="w-1.5 h-1.5 rounded-full bg-current animate-pulse" />}
                            {event.status === 'coming-soon' && <Sparkles size={10} />}
                            {event.status === 'upcoming' && <Clock size={10} />}
                            {event.status === 'past' && <CheckCircle2 size={10} />}
                            {status.label}
                          </span>
                          <div className="flex items-center gap-1 text-text-secondary text-xs">
                            <Calendar size={11} />
                            <span>{event.dateDisplay}</span>
                          </div>
                        </div>

                        <h3 className="font-orbitron text-base font-bold text-text-primary mb-1">{event.title}</h3>
                        {event.subtitle && (
                          <p className="text-accent-blue text-[11px] font-orbitron tracking-wider mb-3">{event.subtitle}</p>
                        )}
                        <p className="text-text-secondary text-sm leading-relaxed flex-1 mb-4">{event.description}</p>

                        {event.highlights && (
                          <div className="space-y-1.5 mb-4">
                            {event.highlights.slice(0, 3).map((h) => (
                              <div key={h} className="flex items-start gap-2">
                                <div className="w-1 h-1 rounded-full bg-accent-blue mt-2 flex-shrink-0" />
                                <span className="text-text-secondary text-xs">{h}</span>
                              </div>
                            ))}
                          </div>
                        )}

                        <div className="flex flex-wrap gap-1.5 mb-4">
                          {event.tags.map((tag) => (
                            <span key={tag} className="text-[10px] px-2 py-0.5 rounded-full border border-white/10 text-text-secondary">
                              {tag}
                            </span>
                          ))}
                        </div>

                        {event.division && (
                          <div className="flex items-center justify-between pt-4 border-t border-white/5 mt-auto">
                            <span className="text-xs text-text-secondary">
                              By <span className="text-accent-blue">{event.division}</span>
                            </span>
                            {event.status === 'ongoing' ? (
                              <span className="font-orbitron text-[10px] tracking-widest text-green-400">Open for members</span>
                            ) : event.status === 'coming-soon' ? (
                              <span className="font-orbitron text-[10px] tracking-widest text-amber-400">Announcement coming soon</span>
                            ) : null}
                          </div>
                        )}
                      </div>
                    </motion.div>
                  );
                })
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>


      {/* CTA */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="font-orbitron text-xs text-accent-blue tracking-[0.3em] uppercase mb-4">Don&apos;t Miss Out</p>
          <h2 className="text-text-primary mb-6">Stay Updated with PURTC</h2>
          <p className="text-text-secondary mb-8">
            Follow our Instagram for the latest event updates, or join as a member for direct access to all programs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://instagram.com/purtc_presuniv"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-accent-blue text-bg-primary font-orbitron text-xs tracking-widest font-semibold rounded-sm hover:brightness-110 transition-all"
            >
              <ArrowRight size={14} /> Follow Instagram
            </a>
            <Link
              href="/join"
              className="inline-flex items-center gap-2 px-6 py-3 border border-accent-blue/50 text-accent-blue font-orbitron text-xs tracking-widest font-semibold rounded-sm hover:bg-accent-blue/10 transition-all"
            >
              Join PURTC
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
