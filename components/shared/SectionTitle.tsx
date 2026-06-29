'use client';

import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '@/lib/utils/animations';

interface SectionTitleProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center' | 'right';
  accentWord?: string;
  className?: string;
}

export default function SectionTitle({
  eyebrow,
  title,
  subtitle,
  align = 'center',
  accentWord,
  className = '',
}: SectionTitleProps) {
  const alignClass = {
    left: 'items-start text-left',
    center: 'items-center text-center',
    right: 'items-end text-right',
  };

  const titleWithAccent = accentWord
    ? title.split(accentWord).map((part, i, arr) => (
        <span key={i}>
          {part}
          {i < arr.length - 1 && (
            <span className="text-accent-blue glow-blue-text">{accentWord}</span>
          )}
        </span>
      ))
    : title;

  return (
    <motion.div
      className={`flex flex-col gap-4 ${alignClass[align]} ${className}`}
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
    >
      {eyebrow && (
        <motion.p
          variants={fadeInUp}
          className="font-orbitron text-xs font-semibold tracking-[0.25em] text-accent-blue uppercase"
        >
          {eyebrow}
        </motion.p>
      )}

      <motion.h2 variants={fadeInUp} className="text-text-primary">
        {titleWithAccent}
      </motion.h2>

      {eyebrow && (
        <motion.div
          variants={fadeInUp}
          className={`h-0.5 w-20 bg-gradient-to-r from-accent-blue to-transparent ${
            align === 'center' ? 'mx-auto' : align === 'right' ? 'ml-auto' : ''
          }`}
        />
      )}

      {subtitle && (
        <motion.p
          variants={fadeInUp}
          className="text-text-secondary text-lg max-w-2xl leading-relaxed"
        >
          {subtitle}
        </motion.p>
      )}
    </motion.div>
  );
}
