'use client';

import { motion } from 'framer-motion';
import { staggerContainer, fadeInUp } from '@/lib/utils/animations';
import { Mail, MapPin, MessageCircle } from 'lucide-react';

const InstagramIcon = ({ size = 24 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
  </svg>
);

const contactItems = [
  {
    icon: Mail,
    label: 'Email',
    value: 'presrobotech@gmail.com',
    href: 'mailto:presrobotech@gmail.com',
    color: '#00c4ff',
  },
  {
    icon: InstagramIcon,
    label: 'Instagram',
    value: '@purtc_presuniv',
    href: 'https://instagram.com/purtc_presuniv',
    color: '#ec4899',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'President University, Jl. Ki Hajar Dewantara, Cikarang, West Java',
    href: 'https://maps.google.com/?q=President+University+Cikarang',
    color: '#10b981',
  },
];

export default function ContactPage() {
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
              Contact Us
            </motion.p>
            <motion.h1 variants={fadeInUp} className="text-text-primary mb-6">
              Get in Touch with <span className="text-accent-blue glow-blue-text">PURTC</span>
            </motion.h1>
            <motion.p variants={fadeInUp} className="text-text-secondary text-lg max-w-2xl mx-auto">
              Have a question about PURTC? Want to collaborate? Or just want to say hi?
              We&apos;d love to hear from you.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Contact Grid */}
      <section className="pb-24">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Contact Cards */}
            <motion.div
              className="space-y-4"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {contactItems.map((item) => {
                const Icon = item.icon;
                return (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    target={item.href.startsWith('http') ? '_blank' : undefined}
                    rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    variants={fadeInUp}
                    className="flex items-start gap-5 glass rounded-xl p-6 border border-white/5 hover:border-white/15 transition-all duration-300 hover:-translate-y-0.5 group block"
                  >
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ background: `${item.color}15`, border: `1px solid ${item.color}30` }}
                    >
                      <Icon size={22} style={{ color: item.color }} />
                    </div>
                    <div>
                      <p className="font-orbitron text-[10px] tracking-[0.2em] uppercase mb-1" style={{ color: item.color }}>
                        {item.label}
                      </p>
                      <p className="text-text-primary text-sm group-hover:text-accent-blue transition-colors">
                        {item.value}
                      </p>
                    </div>
                  </motion.a>
                );
              })}
            </motion.div>

            {/* Message form */}
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="glass rounded-2xl p-8 border border-white/5"
            >
              <div className="flex items-center gap-3 mb-6">
                <MessageCircle size={20} className="text-accent-blue" />
                <h3 className="font-orbitron text-text-primary">Send a Message</h3>
              </div>
              <p className="text-text-secondary text-sm mb-6">
                Fill out the form below and we will get back to you shortly via the PURTC email.
              </p>

              <form
                className="space-y-4"
                onSubmit={(e) => {
                  e.preventDefault();
                  window.location.href = 'mailto:presrobotech@gmail.com';
                }}
              >
                <div>
                  <label className="block font-orbitron text-[10px] tracking-[0.2em] text-text-secondary uppercase mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    placeholder="Your name"
                    className="input-premium w-full px-4 py-3 rounded-sm text-sm"
                    required
                  />
                </div>
                <div>
                  <label className="block font-orbitron text-[10px] tracking-[0.2em] text-text-secondary uppercase mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="email@example.com"
                    className="input-premium w-full px-4 py-3 rounded-sm text-sm"
                    required
                  />
                </div>
                <div>
                  <label className="block font-orbitron text-[10px] tracking-[0.2em] text-text-secondary uppercase mb-2">
                    Subject
                  </label>
                  <select className="input-premium w-full px-4 py-3 rounded-sm text-sm">
                    <option value="">Select a subject</option>
                    <option value="recruitment">Open Recruitment</option>
                    <option value="collaboration">Collaboration / Partnership</option>
                    <option value="general">General Inquiry</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label className="block font-orbitron text-[10px] tracking-[0.2em] text-text-secondary uppercase mb-2">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Write your message here..."
                    className="input-premium w-full px-4 py-3 rounded-sm text-sm resize-none"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-accent-blue text-bg-primary font-orbitron text-xs tracking-widest font-semibold rounded-sm hover:brightness-110 transition-all duration-300 shadow-glow-blue"
                >
                  Send via Email
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
