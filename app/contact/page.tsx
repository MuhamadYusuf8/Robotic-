'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, MessageCircle, CheckCircle, AlertCircle, Send } from 'lucide-react';

const LinkedinIcon = ({ size = 24, className = "" }: { size?: number, className?: string }) => (
  <svg width={size} height={size} className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
);
import SectionTitle from '@/components/shared/SectionTitle';
import Button from '@/components/shared/Button';
import { staggerContainer, fadeInLeft, fadeInRight } from '@/lib/utils/animations';

const industries = [
  'Automotive', 'Aerospace', 'Healthcare', 'Logistics & Warehousing',
  'Food & Beverage', 'Pharmaceutical', 'Mining & Resources', 'Electronics',
  'Defense', 'Other',
];

const robotModels = ['ATLAS X1', 'HELIX M3', 'SWIFT L7', 'SENTINEL D2', 'PURTCARM PRO', 'AERO SCOUT', 'Not sure yet'];

interface FormData {
  name: string;
  company: string;
  email: string;
  phone: string;
  industry: string;
  model: string;
  message: string;
}

interface FormErrors {
  name?: string;
  company?: string;
  email?: string;
  message?: string;
}

export default function ContactPage() {
  const [formData, setFormData] = useState<FormData>({
    name: '', company: '', email: '', phone: '',
    industry: '', model: '', message: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Full name is required';
    if (!formData.company.trim()) newErrors.company = 'Company name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!formData.message.trim()) newErrors.message = 'Please describe your use case';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setSubmitting(true);
    await new Promise((r) => setTimeout(r, 1500));
    setSubmitting(false);
    setSubmitted(true);
  };

  const inputClass = (field: keyof FormErrors) => `
    input-premium w-full px-4 py-3 rounded-sm text-sm transition-all duration-300
    ${errors[field] ? 'border-red-400/60 focus:border-red-400' : ''}
  `;

  return (
    <div className="min-h-screen bg-bg-primary pt-20">
      {/* Hero */}
      <section className="relative py-20 lg:py-24 bg-bg-secondary overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-15 pointer-events-none" />
        <div className="absolute inset-0 bg-radial-glow opacity-30" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent-blue/40 to-transparent" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <SectionTitle
            eyebrow="Get In Touch"
            title="Request a Demo"
            subtitle="Talk to our robotics engineers. We'll analyze your operations and design a custom automation solution."
            align="center"
          />
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <motion.div
          className="grid lg:grid-cols-5 gap-12"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          {/* LEFT: Form */}
          <motion.div variants={fadeInLeft} className="lg:col-span-3">
            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="glass rounded-xl p-12 text-center h-full flex flex-col items-center justify-center gap-6"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: 'spring', stiffness: 200, damping: 20, delay: 0.2 }}
                  >
                    <CheckCircle size={64} className="text-accent-blue" />
                  </motion.div>
                  <div>
                    <h2 className="text-text-primary mb-3">Request Received!</h2>
                    <p className="text-text-secondary leading-relaxed">
                      Thank you, <strong className="text-text-primary">{formData.name}</strong>. Our team will
                      review your inquiry and contact you within 24 business hours.
                    </p>
                  </div>
                  <button
                    onClick={() => { setSubmitted(false); setFormData({ name: '', company: '', email: '', phone: '', industry: '', model: '', message: '' }); }}
                    className="text-accent-blue font-orbitron text-xs tracking-wider hover:underline"
                  >
                    Submit another request
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  onSubmit={handleSubmit}
                  className="space-y-5"
                  noValidate
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Name */}
                    <div>
                      <label htmlFor="contact-name" className="block font-orbitron text-[10px] text-text-secondary tracking-[0.2em] uppercase mb-2">
                        Full Name *
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="John Smith"
                        className={inputClass('name')}
                      />
                      {errors.name && <p className="text-red-400 text-xs mt-1 flex items-center gap-1"><AlertCircle size={10} />{errors.name}</p>}
                    </div>

                    {/* Company */}
                    <div>
                      <label htmlFor="contact-company" className="block font-orbitron text-[10px] text-text-secondary tracking-[0.2em] uppercase mb-2">
                        Company *
                      </label>
                      <input
                        id="contact-company"
                        type="text"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="Acme Industries"
                        className={inputClass('company')}
                      />
                      {errors.company && <p className="text-red-400 text-xs mt-1 flex items-center gap-1"><AlertCircle size={10} />{errors.company}</p>}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Email */}
                    <div>
                      <label htmlFor="contact-email" className="block font-orbitron text-[10px] text-text-secondary tracking-[0.2em] uppercase mb-2">
                        Work Email *
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="j.smith@acme.com"
                        className={inputClass('email')}
                      />
                      {errors.email && <p className="text-red-400 text-xs mt-1 flex items-center gap-1"><AlertCircle size={10} />{errors.email}</p>}
                    </div>

                    {/* Phone */}
                    <div>
                      <label htmlFor="contact-phone" className="block font-orbitron text-[10px] text-text-secondary tracking-[0.2em] uppercase mb-2">
                        Phone
                      </label>
                      <input
                        id="contact-phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+1 (555) 000-0000"
                        className="input-premium w-full px-4 py-3 rounded-sm text-sm"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Industry */}
                    <div>
                      <label htmlFor="contact-industry" className="block font-orbitron text-[10px] text-text-secondary tracking-[0.2em] uppercase mb-2">
                        Industry
                      </label>
                      <select
                        id="contact-industry"
                        value={formData.industry}
                        onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
                        className="input-premium w-full px-4 py-3 rounded-sm text-sm bg-bg-card"
                      >
                        <option value="">Select industry</option>
                        {industries.map((ind) => (
                          <option key={ind} value={ind}>{ind}</option>
                        ))}
                      </select>
                    </div>

                    {/* Model */}
                    <div>
                      <label htmlFor="contact-model" className="block font-orbitron text-[10px] text-text-secondary tracking-[0.2em] uppercase mb-2">
                        Robot Model
                      </label>
                      <select
                        id="contact-model"
                        value={formData.model}
                        onChange={(e) => setFormData({ ...formData, model: e.target.value })}
                        className="input-premium w-full px-4 py-3 rounded-sm text-sm bg-bg-card"
                      >
                        <option value="">Select model</option>
                        {robotModels.map((m) => (
                          <option key={m} value={m}>{m}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="contact-message" className="block font-orbitron text-[10px] text-text-secondary tracking-[0.2em] uppercase mb-2">
                      Describe Your Use Case *
                    </label>
                    <textarea
                      id="contact-message"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell us about your automation challenges, production volume, and what you're hoping to achieve..."
                      rows={5}
                      className={`${inputClass('message')} resize-none`}
                    />
                    {errors.message && <p className="text-red-400 text-xs mt-1 flex items-center gap-1"><AlertCircle size={10} />{errors.message}</p>}
                  </div>

                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    glowEffect
                    disabled={submitting}
                    icon={submitting ? undefined : <Send size={14} />}
                    iconPosition="right"
                    className="w-full justify-center"
                  >
                    {submitting ? 'Sending...' : 'Send Request'}
                  </Button>

                  <p className="text-text-secondary text-xs text-center">
                    By submitting, you agree to our{' '}
                    <a href="/privacy" className="text-accent-blue hover:underline">Privacy Policy</a>.
                    We never share your data.
                  </p>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>

          {/* RIGHT: Contact info */}
          <motion.div variants={fadeInRight} className="lg:col-span-2 space-y-6">
            <div className="glass rounded-xl p-6">
              <h3 className="font-orbitron text-sm font-semibold text-text-primary mb-6 tracking-wide">
                Contact Information
              </h3>
              <div className="space-y-5">
                {[
                  { icon: Mail, label: 'Email', value: 'contact@purtc.com', href: 'mailto:contact@purtc.com' },
                  { icon: Phone, label: 'Phone', value: '+1 (800) PURTC-ROBO', href: 'tel:+18005463926' },
                  { icon: MapPin, label: 'Address', value: '1 Robotics Way\nSan Francisco, CA 94105', href: '#' },
                  { icon: Clock, label: 'Hours', value: 'Mon–Fri: 8AM–8PM PST\nSat: 10AM–4PM PST', href: '#' },
                ].map(({ icon: Icon, label, value, href }) => (
                  <div key={label} className="flex items-start gap-4">
                    <div className="p-2 rounded-md bg-accent-blue/10 border border-accent-blue/20 flex-shrink-0">
                      <Icon size={16} className="text-accent-blue" />
                    </div>
                    <div>
                      <div className="font-orbitron text-[10px] text-text-secondary tracking-wider mb-1">{label}</div>
                      {href !== '#' ? (
                        <a href={href} className="text-text-primary text-sm hover:text-accent-blue transition-colors whitespace-pre-line">
                          {value}
                        </a>
                      ) : (
                        <p className="text-text-primary text-sm whitespace-pre-line">{value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Map placeholder */}
            <div className="glass rounded-xl overflow-hidden h-48 flex items-center justify-center border border-white/5">
              <div className="text-center">
                <MapPin size={32} className="text-accent-blue/40 mx-auto mb-2" />
                <p className="font-orbitron text-xs text-text-secondary tracking-wider">
                  SAN FRANCISCO, CA
                </p>
              </div>
            </div>

            {/* Social links */}
            <div className="glass rounded-xl p-6">
              <h3 className="font-orbitron text-xs text-text-secondary tracking-[0.2em] uppercase mb-4">
                Connect With Us
              </h3>
              <div className="grid grid-cols-2 gap-3">
                <a href="https://wa.me/18005463926" target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 bg-bg-primary/60 rounded-md border border-white/5
                    hover:border-green-400/40 hover:text-green-400 text-text-secondary transition-all duration-300">
                  <MessageCircle size={16} />
                  <span className="font-orbitron text-xs">WhatsApp</span>
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 bg-bg-primary/60 rounded-md border border-white/5
                    hover:border-blue-400/40 hover:text-blue-400 text-text-secondary transition-all duration-300">
                  <LinkedinIcon size={16} />
                  <span className="font-orbitron text-xs">LinkedIn</span>
                </a>
              </div>
            </div>

            {/* Response time */}
            <div className="p-4 border border-accent-blue/20 bg-accent-blue/5 rounded-xl">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-accent-blue animate-pulse flex-shrink-0" />
                <p className="text-text-secondary text-sm">
                  <span className="text-text-primary font-semibold">Typical response: &lt; 24 hours</span> on business days.
                  For urgent inquiries, call us directly.
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
