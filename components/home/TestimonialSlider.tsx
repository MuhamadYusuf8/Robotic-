'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';
import { testimonials } from '@/lib/data/stats';
import SectionTitle from '@/components/shared/SectionTitle';

export default function TestimonialSlider() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  const next = () => {
    setDirection(1);
    setCurrent((c) => (c + 1) % testimonials.length);
  };

  const prev = () => {
    setDirection(-1);
    setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
  };

  const variants = {
    enter: (d: number) => ({ x: d > 0 ? 80 : -80, opacity: 0, scale: 0.95 }),
    center: { x: 0, opacity: 1, scale: 1 },
    exit: (d: number) => ({ x: d > 0 ? -80 : 80, opacity: 0, scale: 0.95 }),
  };

  return (
    <section className="py-24 lg:py-32 relative bg-bg-secondary overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-10 pointer-events-none" />
      <div className="absolute inset-0 bg-radial-glow opacity-20" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent-blue/30 to-transparent" />

      <div className="relative max-w-5xl mx-auto px-6 lg:px-8">
        <SectionTitle
          eyebrow="Client Stories"
          title="Trusted by Industry Leaders"
          subtitle="What enterprise clients say about deploying PURTC robotics systems."
          align="center"
          className="mb-16"
        />

        <div className="relative">
          {/* Large quote mark */}
          <div className="absolute -top-8 -left-4 opacity-10">
            <Quote size={80} className="text-accent-blue" />
          </div>

          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={current}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="glass rounded-xl p-8 lg:p-12"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {Array(testimonials[current].rating).fill(0).map((_, i) => (
                  <Star key={i} size={16} className="text-accent-gold fill-accent-gold" />
                ))}
              </div>

              <blockquote className="text-text-primary text-xl lg:text-2xl leading-relaxed mb-8 font-light">
                &quot;{testimonials[current].quote}&quot;
              </blockquote>

              <div className="flex items-center gap-4">
                {/* Avatar placeholder */}
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-accent-blue/30 to-bg-card border border-accent-blue/30
                  flex items-center justify-center flex-shrink-0">
                  <span className="font-orbitron text-lg font-bold text-accent-blue">
                    {testimonials[current].name.charAt(0)}
                  </span>
                </div>
                <div>
                  <div className="font-orbitron text-sm font-semibold text-text-primary tracking-wide">
                    {testimonials[current].name}
                  </div>
                  <div className="text-accent-blue text-xs font-orbitron tracking-wider">
                    {testimonials[current].role}
                  </div>
                  <div className="text-text-secondary text-xs mt-0.5">
                    {testimonials[current].company}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex items-center justify-between mt-8">
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => { setDirection(i > current ? 1 : -1); setCurrent(i); }}
                  className={`h-0.5 transition-all duration-300 ${i === current ? 'w-8 bg-accent-blue' : 'w-4 bg-white/20 hover:bg-white/40'}`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>

            <div className="flex gap-3">
              <button
                onClick={prev}
                className="w-11 h-11 rounded-sm border border-white/10 flex items-center justify-center
                  text-text-secondary hover:text-accent-blue hover:border-accent-blue/40
                  transition-all duration-300 hover:shadow-glow-blue"
                aria-label="Previous testimonial"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                onClick={next}
                className="w-11 h-11 rounded-sm border border-white/10 flex items-center justify-center
                  text-text-secondary hover:text-accent-blue hover:border-accent-blue/40
                  transition-all duration-300 hover:shadow-glow-blue"
                aria-label="Next testimonial"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
