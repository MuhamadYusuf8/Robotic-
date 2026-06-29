'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function LoadingScreen() {
  const [isVisible, setIsVisible] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Check sessionStorage to not show again on navigation
    const hasLoaded = sessionStorage.getItem('purtc-loaded');
    if (hasLoaded) return;

    setIsVisible(true);

    // Progress animation
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + Math.random() * 12;
      });
    }, 80);

    // Hide after 2.8 seconds
    const timer = setTimeout(() => {
      setIsVisible(false);
      sessionStorage.setItem('purtc-loaded', 'true');
    }, 2800);

    return () => {
      clearTimeout(timer);
      clearInterval(interval);
    };
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-bg-primary"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.8, ease: 'easeInOut' } }}
        >
          {/* Background grid */}
          <div className="absolute inset-0 bg-grid opacity-30" />

          {/* Radial glow */}
          <div className="absolute inset-0 bg-radial-glow opacity-40" />

          <div className="relative z-10 flex flex-col items-center gap-8">
            {/* Logo animation */}
            <motion.div
              className="flex flex-col items-center gap-3"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              {/* SVG Logo */}
              <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                <motion.path
                  d="M40 8 L68 24 L68 56 L40 72 L12 56 L12 24 Z"
                  stroke="#00c4ff"
                  strokeWidth="2"
                  fill="none"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{ duration: 1.5, ease: 'easeInOut' }}
                />
                <motion.path
                  d="M40 20 L55 29 L55 47 L40 56 L25 47 L25 29 Z"
                  stroke="#00c4ff"
                  strokeWidth="1.5"
                  fill="rgba(0,196,255,0.1)"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{ duration: 1.5, delay: 0.3, ease: 'easeInOut' }}
                />
                <motion.circle
                  cx="40"
                  cy="38"
                  r="6"
                  fill="#00c4ff"
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.4, delay: 1.2 }}
                />
                <motion.line x1="40" y1="20" x2="40" y2="32" stroke="#00c4ff" strokeWidth="1"
                  initial={{ scaleY: 0 }} animate={{ scaleY: 1 }} transition={{ delay: 1 }} />
                <motion.line x1="40" y1="44" x2="40" y2="56" stroke="#00c4ff" strokeWidth="1"
                  initial={{ scaleY: 0 }} animate={{ scaleY: 1 }} transition={{ delay: 1.1 }} />
              </svg>

              <motion.div
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
              >
                <h1 className="font-orbitron text-3xl font-bold text-text-primary tracking-[0.15em]">
                  PURTC
                </h1>
                <p className="font-orbitron text-xs text-accent-blue tracking-[0.3em] mt-1">
                  ROBOTICS
                </p>
              </motion.div>
            </motion.div>

            {/* Loading text */}
            <motion.p
              className="font-orbitron text-xs text-text-secondary tracking-[0.2em] uppercase"
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 1, 0.5, 1] }}
              transition={{ delay: 0.8, duration: 1.5, repeat: Infinity }}
            >
              Initializing Systems...
            </motion.p>

            {/* Progress bar */}
            <div className="w-64">
              <div className="flex justify-between mb-1">
                <span className="font-orbitron text-xs text-text-secondary">LOADING</span>
                <span className="font-orbitron text-xs text-accent-blue">
                  {Math.min(Math.floor(progress), 100)}%
                </span>
              </div>
              <div className="h-px bg-white/10 w-full">
                <motion.div
                  className="h-full bg-accent-blue shadow-glow-blue"
                  style={{ width: `${Math.min(progress, 100)}%` }}
                  transition={{ duration: 0.1 }}
                />
              </div>
            </div>

            {/* Scanning lines */}
            <motion.div
              className="absolute left-0 right-0 h-px bg-accent-blue/30"
              animate={{ top: ['0%', '100%'] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
