'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Mail, Lock, User, Eye, EyeOff } from 'lucide-react';
import { fadeInUp, staggerContainer } from '@/lib/utils/animations';

export default function RegisterPage() {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  // Password strength logic
  const getStrength = (pass: string) => {
    let score = 0;
    if (!pass) return score;
    if (pass.length >= 8) score += 1;
    if (/[A-Z]/.test(pass)) score += 1;
    if (/[a-z]/.test(pass)) score += 1;
    if (/[0-9]/.test(pass)) score += 1;
    if (/[^A-Za-z0-9]/.test(pass)) score += 1;
    return score; // Max 5
  };

  const strength = getStrength(password);
  
  const getStrengthColor = () => {
    if (strength === 0) return 'bg-white/10';
    if (strength <= 2) return 'bg-red-500 shadow-[0_0_10px_rgba(239,68,68,0.5)]';
    if (strength <= 3) return 'bg-yellow-500 shadow-[0_0_10px_rgba(234,179,8,0.5)]';
    if (strength <= 4) return 'bg-accent-blue shadow-[0_0_10px_rgba(0,196,255,0.5)]';
    return 'bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.5)]';
  };

  const getStrengthLabel = () => {
    if (strength === 0) return '';
    if (strength <= 2) return 'Weak';
    if (strength <= 3) return 'Fair';
    if (strength <= 4) return 'Good';
    return 'Strong';
  };

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
                Join <span className="text-accent-blue">PURTC</span>
              </h1>
              <p className="text-text-secondary text-sm">
                Create an account to start your journey in robotics and technology.
              </p>
            </div>

            <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
              <div className="space-y-4">
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <User className="h-5 w-5 text-text-secondary" />
                  </div>
                  <input
                    type="text"
                    className="w-full pl-12 pr-4 py-3 rounded-lg input-premium text-sm"
                    placeholder="Full Name"
                    required
                  />
                </div>
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
                <div>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <Lock className="h-5 w-5 text-text-secondary" />
                    </div>
                    <input
                      type={showPassword ? "text" : "password"}
                      className="w-full pl-12 pr-12 py-3 rounded-lg input-premium text-sm"
                      placeholder="Password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute inset-y-0 right-0 pr-4 flex items-center text-text-secondary hover:text-text-primary transition-colors"
                    >
                      {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                    </button>
                  </div>
                  
                  {/* Password strength indicator */}
                  {password && (
                    <div className="mt-3">
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-xs text-text-secondary">Password Strength:</span>
                        <span className={`text-xs font-semibold ${
                          strength <= 2 ? 'text-red-500' :
                          strength <= 3 ? 'text-yellow-500' :
                          strength <= 4 ? 'text-accent-blue' :
                          'text-green-500'
                        }`}>
                          {getStrengthLabel()}
                        </span>
                      </div>
                      <div className="flex gap-1 h-1 w-full rounded-full overflow-hidden bg-white/5">
                        {[1, 2, 3, 4, 5].map((level) => (
                          <div 
                            key={level} 
                            className={`flex-1 transition-all duration-300 ${level <= strength ? getStrengthColor() : 'bg-transparent'}`} 
                          />
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <Lock className="h-5 w-5 text-text-secondary" />
                  </div>
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    className="w-full pl-12 pr-12 py-3 rounded-lg input-premium text-sm"
                    placeholder="Confirm Password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute inset-y-0 right-0 pr-4 flex items-center text-text-secondary hover:text-text-primary transition-colors"
                  >
                    {showConfirmPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                  </button>
                </div>
              </div>

              <div className="flex items-center text-sm mt-2">
                <label className="flex items-start space-x-2 cursor-pointer">
                  <input type="checkbox" className="mt-1 rounded border-border bg-bg-secondary text-accent-blue focus:ring-accent-blue" required />
                  <span className="text-text-secondary text-xs">
                    I agree to the <a href="#" className="text-accent-blue hover:underline">Terms of Service</a> and <a href="#" className="text-accent-blue hover:underline">Privacy Policy</a>
                  </span>
                </label>
              </div>

              <button
                type="submit"
                className="w-full py-3 px-4 mt-4 bg-accent-blue/10 hover:bg-accent-blue/20 border border-accent-blue/30 text-accent-blue rounded-lg font-orbitron font-semibold tracking-wide transition-all duration-300 flex items-center justify-center space-x-2 btn-glow"
              >
                <span>Create Account</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </form>

            <div className="mt-8 pt-6 border-t border-white/10 text-center">
              <p className="text-text-secondary text-sm">
                Already have an account?{' '}
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
