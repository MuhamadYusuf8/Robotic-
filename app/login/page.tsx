'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Mail, Lock, User } from 'lucide-react';
import { fadeInUp, staggerContainer } from '@/lib/utils/animations';

export default function LoginPage() {
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
          {/* Scanline overlay for cyberpunk feel */}
          <div className="absolute inset-0 scanline-overlay opacity-30 pointer-events-none" />
          
          <div className="relative z-10">
            <div className="text-center mb-10">
              <Link href="/" className="inline-block mb-6">
                <div className="w-12 h-12 rounded-full bg-accent-blue/10 border border-accent-blue/30 flex items-center justify-center mx-auto glow-blue">
                   <User className="text-accent-blue w-6 h-6" />
                </div>
              </Link>
              <h1 className="text-3xl font-orbitron font-bold text-text-primary mb-2">
                Welcome <span className="text-accent-blue">Back</span>
              </h1>
              <p className="text-text-secondary text-sm">
                Access your PURTC dashboard and continue building the future.
              </p>
            </div>

            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
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
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <Lock className="h-5 w-5 text-text-secondary" />
                  </div>
                  <input
                    type="password"
                    className="w-full pl-12 pr-4 py-3 rounded-lg input-premium text-sm"
                    placeholder="Password"
                    required
                  />
                </div>
              </div>

              <div className="flex items-center justify-between text-sm">
                <label className="flex items-center space-x-2 cursor-pointer">
                  <input type="checkbox" className="rounded border-border bg-bg-secondary text-accent-blue focus:ring-accent-blue" />
                  <span className="text-text-secondary">Remember me</span>
                </label>
                <Link href="/forgot-password" className="text-accent-blue hover:text-accent-blue/80 transition-colors">
                  Forgot password?
                </Link>
              </div>

              <button
                type="submit"
                className="w-full py-3 px-4 bg-accent-blue/10 hover:bg-accent-blue/20 border border-accent-blue/30 text-accent-blue rounded-lg font-orbitron font-semibold tracking-wide transition-all duration-300 flex items-center justify-center space-x-2 btn-glow"
              >
                <span>Sign In</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </form>

            <div className="mt-8 pt-6 border-t border-white/10 text-center">
              <p className="text-text-secondary text-sm">
                Don't have an account?{' '}
                <Link href="/register" className="text-accent-blue hover:text-accent-blue/80 font-medium transition-colors">
                  Join PURTC
                </Link>
              </p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
