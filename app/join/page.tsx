'use client';

import { motion } from 'framer-motion';
import { staggerContainer, fadeInUp } from '@/lib/utils/animations';
import { CheckCircle2, ChevronDown, ChevronUp, ExternalLink } from 'lucide-react';
import { useState } from 'react';
import Link from 'next/link';

const steps = [
  {
    number: '01',
    title: 'Stay Informed',
    description:
      'Follow Instagram @purtc_presuniv for the latest Open Recruitment information. Recruitment announcements will be shared through the official PURTC account.',
    icon: '📱',
  },
  {
    number: '02',
    title: 'Fill Out the Application',
    description:
      'Register through the Google Form shared during Open Recruitment. Fill in your personal details and choose the division you want to join.',
    icon: '📝',
  },
  {
    number: '03',
    title: 'Selection Process',
    description:
      'Participate in the selection process organized by the PURTC HRD team. The selection is designed to find members who are passionate and committed.',
    icon: '🎯',
  },
  {
    number: '04',
    title: 'Welcome to PURTC!',
    description:
      'Congratulations on joining! You will receive onboarding from the HRD team and can immediately participate in Weekly Training.',
    icon: '🚀',
  },
];

const requirements = [
  'Active student at President University',
  'Have an interest in technology and/or robotics',
  'Willing to actively commit to club activities',
  'Open to learning new things and collaborating in a team',
];

const faqs = [
  {
    q: 'Do I need a technical/programming background to join?',
    a: 'Not at all! PURTC has various divisions — from Communication, Multimedia, to HRD. You can join based on your passion and skillset, not just coding.',
  },
  {
    q: 'When is Open Recruitment held?',
    a: 'Open Recruitment is held periodically. Follow Instagram @purtc_presuniv for the latest schedule information. Announcements will be shared well before the registration period opens.',
  },
  {
    q: 'Are there any fees/dues to join?',
    a: 'For detailed information regarding membership fees, please contact us directly via email presrobotech@gmail.com or DM Instagram @purtc_presuniv.',
  },
  {
    q: 'Can non-technical members contribute to PURTC?',
    a: 'Absolutely! The Communication, Multimedia & Design, HRD, Secretary, and Treasurer divisions require skills beyond coding. Your contributions in design, communication, or administration are equally important.',
  },
  {
    q: 'Is it only for students from certain majors?',
    a: 'PURTC is open to all active President University students from all majors and batches. Diversity of backgrounds actually strengthens our team.',
  },
];

export default function JoinPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-bg-primary">
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-15 pointer-events-none" />
        <div className="absolute inset-0 bg-radial-glow opacity-50" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-px bg-gradient-to-r from-transparent via-accent-blue/50 to-transparent" />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <motion.div variants={staggerContainer} initial="hidden" animate="visible">
            <motion.p variants={fadeInUp} className="font-orbitron text-xs font-semibold text-accent-blue tracking-[0.3em] uppercase mb-4">
              Open Recruitment
            </motion.p>
            <motion.h1 variants={fadeInUp} className="text-text-primary mb-6">
              Join{' '}
              <span className="text-accent-blue glow-blue-text">PURTC</span>
            </motion.h1>
            <motion.p variants={fadeInUp} className="text-text-secondary text-lg max-w-2xl mx-auto mb-10">
              Be part of the best student technology community at President University.
              Build. Innovate. Lead. — together with us.
            </motion.p>

            {/* Status notice */}
            <motion.div
              variants={fadeInUp}
              className="inline-flex items-center gap-3 px-6 py-3 rounded-full border border-amber-400/30 bg-amber-400/5 mx-auto"
            >
              <div className="w-2 h-2 rounded-full bg-amber-400" />
              <span className="font-orbitron text-xs text-amber-400 tracking-[0.2em]">
                OPEN RECRUITMENT NOT YET OPEN — FOLLOW OUR INSTAGRAM
              </span>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Steps */}
      <section id="recruitment" className="pb-20 relative">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="font-orbitron text-xs text-accent-blue tracking-[0.3em] uppercase mb-3">Registration Process</p>
            <h2 className="text-text-primary">How to Join</h2>
          </div>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {steps.map((step, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                className="relative glass rounded-2xl p-6 border border-white/5 hover:border-accent-blue/20 transition-all text-center group"
              >
                {/* Connector line */}
                {i < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-px bg-gradient-to-r from-accent-blue/50 to-transparent z-10" />
                )}

                <div className="text-3xl mb-4">{step.icon}</div>
                <div className="font-orbitron text-4xl font-bold text-accent-blue/20 mb-3 group-hover:text-accent-blue/30 transition-colors">
                  {step.number}
                </div>
                <h4 className="font-orbitron text-sm font-semibold text-text-primary mb-3">{step.title}</h4>
                <p className="text-text-secondary text-xs leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Button */}
          <motion.div
            className="text-center mt-10"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <a
              href="https://instagram.com/purtc_presuniv"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-accent-blue text-bg-primary font-orbitron text-xs tracking-widest font-semibold rounded-sm hover:brightness-110 transition-all duration-300 shadow-glow-blue"
            >
              Follow on Instagram <ExternalLink size={14} />
            </a>
          </motion.div>
        </div>
      </section>

      {/* Requirements */}
      <section className="py-20 bg-bg-secondary/30 relative">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="font-orbitron text-xs text-accent-blue tracking-[0.3em] uppercase mb-3">Requirements</p>
            <h2 className="text-text-primary">Who Can Join?</h2>
          </div>

          <motion.div
            className="glass rounded-2xl p-8 border border-white/5"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {requirements.map((req, i) => (
                <motion.div
                  key={i}
                  variants={fadeInUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle2 size={18} className="text-accent-blue flex-shrink-0 mt-0.5" />
                  <p className="text-text-secondary text-sm leading-relaxed">{req}</p>
                </motion.div>
              ))}
            </div>

            <div className="mt-6 pt-6 border-t border-white/10 text-center">
              <p className="text-text-secondary text-sm">
                Not a President University student but want to collaborate?{' '}
                <Link href="/contact" className="text-accent-blue hover:underline">
                  Contact us
                </Link>
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-20">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="font-orbitron text-xs text-accent-blue tracking-[0.3em] uppercase mb-3">FAQ</p>
            <h2 className="text-text-primary">Frequently Asked Questions</h2>
          </div>

          <motion.div
            className="space-y-3"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                className="glass rounded-xl border border-white/5 overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-5 text-left hover:bg-white/3 transition-colors"
                >
                  <span className="font-orbitron text-sm text-text-primary pr-4">{faq.q}</span>
                  {openFaq === i ? (
                    <ChevronUp size={16} className="text-accent-blue flex-shrink-0" />
                  ) : (
                    <ChevronDown size={16} className="text-text-secondary flex-shrink-0" />
                  )}
                </button>
                {openFaq === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="px-5 pb-5 border-t border-white/5"
                  >
                    <p className="text-text-secondary text-sm leading-relaxed pt-4">{faq.a}</p>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
