'use client';

import { motion } from 'framer-motion';
import { staggerContainer, fadeInUp } from '@/lib/utils/animations';
import { timeline } from '@/lib/data/events';
import SectionTitle from '@/components/shared/SectionTitle';

const badgeColors: Record<string, string> = {
  'Founding': '#00c4ff',
  'Cabinet I': '#7c3aed',
  'First Program': '#f59e0b',
  'Cabinet II': '#10b981',
  'Active': '#00c4ff',
};

export default function TimelineSection() {
  return (
    <section className="py-24 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-bg-primary to-bg-secondary" />
      <div className="absolute inset-0 bg-grid opacity-10 pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-6 lg:px-8">
        <SectionTitle
          eyebrow="Our Journey"
          title="PURTC History"
          subtitle="From 16 founding members to 39 active members — PURTC's journey is a story of passion that keeps growing."
          align="center"
        />

        <motion.div
          className="relative mt-16"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
        >
          {/* Vertical line */}
          <div className="absolute left-6 lg:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-accent-blue/60 via-accent-blue/20 to-transparent" />

          <div className="space-y-12">
            {timeline.map((item, index) => {
              const isLeft = index % 2 === 0;
              const color = badgeColors[item.badge ?? ''] || '#00c4ff';

              return (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className={`relative flex items-start gap-8 ${isLeft ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}
                >
                  {/* Left/Right spacer on desktop */}
                  <div className="hidden lg:block flex-1" />

                  {/* Center dot */}
                  <div className="relative flex-shrink-0 z-10">
                    <div
                      className="w-12 h-12 rounded-full flex items-center justify-center border-2"
                      style={{ background: `${color}15`, borderColor: `${color}50` }}
                    >
                      <div className="w-3 h-3 rounded-full" style={{ background: color }} />
                    </div>
                    {/* Glow */}
                    <div
                      className="absolute inset-0 rounded-full blur-md opacity-30"
                      style={{ background: color }}
                    />
                  </div>

                  {/* Card */}
                  <div className="flex-1 lg:max-w-[calc(50%-3rem)]">
                    <div className="glass rounded-xl p-6 border border-white/5 hover:border-white/10 transition-colors">
                      {/* Badge + period */}
                      <div className="flex items-center gap-2 mb-3">
                        {item.badge && (
                          <span
                            className="font-orbitron text-[10px] tracking-[0.15em] px-2 py-0.5 rounded font-semibold"
                            style={{ color, background: `${color}20` }}
                          >
                            {item.badge}
                          </span>
                        )}
                        <span className="text-text-secondary text-xs">{item.period}</span>
                      </div>

                      <h3 className="font-orbitron text-base font-semibold text-text-primary mb-2">
                        {item.title}
                      </h3>
                      <p className="text-text-secondary text-sm leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
