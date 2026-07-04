'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Mail, KeyRound } from 'lucide-react';
import { fadeInUp, staggerContainer } from '@/lib/utils/animations';

export default function ForgotPasswordPage() {
  return (
    <div className="min-h-screen pt-32 pb-20 relative overflow-hidden flex items-center justify-center noise-overlay">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-bg-primary to-bg-secondary" />
      <div className="absolute inset-0 bg-grid opacity-15 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent-blue/10 rounded-full blur-[100px] pointer-events-none" />

      <motion.div 
        className="relative z-10 w-full max-w-md px-6"
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        {/* Card */}
        <motion.div 
          variants={fadeInUp}
          className="glass-dark rounded-2xl p-8 md:p-10 glow-border relative overflow-hidden"
        >
          {/* Scanline overlay */}
          <div className="absolute inset-0 scanline-overlay opacity-30 pointer-events-none" />
          
          <div className="relative z-10">
            <div className="text-center mb-10">
              <Link href="/login" className="inline-block mb-6">
                <div className="w-12 h-12 rounded-full bg-accent-blue/10 border border-accent-blue/30 flex items-center justify-center mx-auto glow-blue">
                   <KeyRound className="text-accent-blue w-6 h-6" />
                </div>
              </Link>
              <h1 className="text-3xl font-orbitron font-bold text-text-primary mb-2">
                Reset <span className="text-accent-blue">Password</span>
              </h1>
              <p className="text-text-secondary text-sm">
                Enter your email and we'll send you instructions to reset your password.
              </p>
            </div>

            <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
              <div className="space-y-4">
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <Mail className="h-5 w-5 text-text-secondary" />
                  </div>
                  <input
                    type="email"
                    className="w-full pl-12 pr-4 py-3 rounded-lg input-premium text-sm"
                    placeholder="Email Address"
                    required
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-3 px-4 mt-4 bg-accent-blue/10 hover:bg-accent-blue/20 border border-accent-blue/30 text-accent-blue rounded-lg font-orbitron font-semibold tracking-wide transition-all duration-300 flex items-center justify-center space-x-2 btn-glow"
              >
                <span>Send Reset Link</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </form>

            <div className="mt-8 pt-6 border-t border-white/10 text-center">
              <p className="text-text-secondary text-sm">
                Remember your password?{' '}
                <Link href="/login" className="text-accent-blue hover:text-accent-blue/80 font-medium transition-colors">
                  Sign In
                </Link>
              </p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
