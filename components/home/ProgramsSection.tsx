'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Calendar, ArrowRight, Clock, CheckCircle2, Sparkles } from 'lucide-react';
import { staggerContainer, fadeInUp } from '@/lib/utils/animations';
import { events } from '@/lib/data/events';
import SectionTitle from '@/components/shared/SectionTitle';

const statusConfig = {
  ongoing: { label: 'Active', color: '#10b981', bg: '#10b98115' },
  upcoming: { label: 'Upcoming', color: '#00c4ff', bg: '#00c4ff15' },
  'coming-soon': { label: 'Coming Soon', color: '#f59e0b', bg: '#f59e0b15' },
  past: { label: 'Completed', color: '#64748b', bg: '#64748b15' },
  pending: { label: 'Pending', color: '#64748b', bg: '#64748b15' },
};

export default function ProgramsSection() {
  const featuredEvents = events.filter((e) => e.status !== 'past').slice(0, 2);

  return (
    <section className="py-24 lg:py-32 relative overflow-hidden bg-bg-primary">
      <div className="absolute inset-0 bg-grid opacity-10 pointer-events-none" />
      {/* Top glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-px bg-gradient-to-r from-transparent via-accent-blue/30 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <SectionTitle
          eyebrow="Active Programs"
          title="Activities & Programs"
          subtitle="Programs designed to develop the potential of every PURTC member — from weekly sessions to intensive workshops."
          align="center"
        />

        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-16"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
        >
          {featuredEvents.map((event) => {
            const status = statusConfig[event.status];
            return (
              <motion.div
                key={event.id}
                variants={fadeInUp}
                className="group relative glass rounded-2xl overflow-hidden border border-white/5 hover:border-accent-blue/20 transition-all duration-500"
              >
                {/* Top accent bar */}
                <div className="h-1 bg-gradient-to-r from-accent-blue via-accent-blue/60 to-transparent" />

                <div className="p-8">
                  {/* Status + date row */}
                  <div className="flex items-center justify-between mb-6">
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
                    <div className="flex items-center gap-1.5 text-text-secondary text-xs">
                      <Calendar size={12} />
                      <span>{event.dateDisplay}</span>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="font-orbitron text-xl font-bold text-text-primary mb-1">
                    {event.title}
                  </h3>
                  {event.subtitle && (
                    <p className="text-accent-blue text-xs font-orbitron tracking-wider mb-4">{event.subtitle}</p>
                  )}

                  <p className="text-text-secondary text-sm leading-relaxed mb-6">
                    {event.description}
                  </p>

                  {/* Highlights */}
                  {event.highlights && (
                    <div className="space-y-2 mb-6">
                      {event.highlights.map((h) => (
                        <div key={h} className="flex items-start gap-2.5">
                          <div className="w-1 h-1 rounded-full bg-accent-blue mt-2 flex-shrink-0" />
                          <span className="text-text-secondary text-sm">{h}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {event.tags.map((tag) => (
                      <span key={tag} className="text-[11px] px-2.5 py-1 rounded-full border border-white/10 text-text-secondary">
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Footer */}
                  {event.division && (
                    <div className="flex items-center justify-between pt-4 border-t border-white/5">
                      <span className="text-xs text-text-secondary">
                        By <span className="text-accent-blue">{event.division}</span>
                      </span>
                      {event.registrationUrl ? (
                        <Link
                          href={event.registrationUrl}
                          className="inline-flex items-center gap-1.5 font-orbitron text-[10px] tracking-widest text-accent-blue hover:text-text-primary transition-colors group"
                        >
                          Register <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                        </Link>
                      ) : (
                        <span className="font-orbitron text-[10px] tracking-widest text-text-secondary">
                          {event.status === 'coming-soon' ? 'Announcement coming soon' : 'Open for members'}
                        </span>
                      )}
                    </div>
                  )}
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
            href="/events"
            className="inline-flex items-center gap-2 font-orbitron text-xs tracking-[0.2em] text-accent-blue hover:text-text-primary transition-colors uppercase group"
          >
            View All Events
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
