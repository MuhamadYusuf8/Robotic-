'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Bot } from 'lucide-react';
import Button from '@/components/shared/Button';
import { menuSlideIn } from '@/lib/utils/animations';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/products', label: 'Products' },
  { href: '/technology', label: 'Technology' },
  { href: '/case-studies', label: 'Case Studies' },
  { href: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  return (
    <>
      <motion.nav
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
        animate={{
          backgroundColor: isScrolled ? 'rgba(5, 5, 8, 0.92)' : 'rgba(5, 5, 8, 0)',
          borderBottomColor: isScrolled ? 'rgba(200, 208, 224, 0.12)' : 'rgba(200, 208, 224, 0)',
          backdropFilter: isScrolled ? 'blur(20px)' : 'blur(0px)',
        }}
        style={{ borderBottomWidth: '1px', borderBottomStyle: 'solid' }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative">
                <Bot
                  size={28}
                  className="text-accent-blue transition-all duration-300 group-hover:drop-shadow-glow"
                />
                <div className="absolute inset-0 bg-accent-blue/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-orbitron text-xl font-bold text-text-primary tracking-[0.1em]">
                  PURTC
                </span>
                <span className="font-orbitron text-[9px] text-accent-blue tracking-[0.3em]">
                  ROBOTICS
                </span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative font-orbitron text-xs tracking-[0.15em] uppercase transition-colors duration-300 group
                    ${pathname === link.href ? 'text-accent-blue' : 'text-text-secondary hover:text-text-primary'}
                  `}
                >
                  {link.label}
                  <span
                    className={`absolute -bottom-1 left-0 h-px bg-accent-blue transition-all duration-300
                      ${pathname === link.href ? 'w-full' : 'w-0 group-hover:w-full'}
                    `}
                  />
                </Link>
              ))}
            </nav>

            {/* CTA Button */}
            <div className="hidden lg:flex items-center gap-4">
              <Link href="/contact">
                <Button variant="outline" size="sm" glowEffect className="border-accent-blue/70">
                  Request Demo
                </Button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              id="mobile-menu-toggle"
              className="lg:hidden text-text-secondary hover:text-text-primary transition-colors p-2"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle mobile menu"
            >
              <AnimatePresence mode="wait">
                {mobileOpen ? (
                  <motion.div key="close" initial={{ rotate: -90 }} animate={{ rotate: 0 }} exit={{ rotate: 90 }} transition={{ duration: 0.2 }}>
                    <X size={24} />
                  </motion.div>
                ) : (
                  <motion.div key="open" initial={{ rotate: 90 }} animate={{ rotate: 0 }} exit={{ rotate: -90 }} transition={{ duration: 0.2 }}>
                    <Menu size={24} />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              className="fixed inset-0 bg-black/60 z-40 lg:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              className="fixed top-0 right-0 bottom-0 w-80 z-50 lg:hidden flex flex-col glass-dark"
              variants={menuSlideIn}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <div className="flex items-center justify-between p-6 border-b border-white/10">
                <span className="font-orbitron text-text-primary tracking-[0.15em]">MENU</span>
                <button onClick={() => setMobileOpen(false)} className="text-text-secondary hover:text-text-primary">
                  <X size={20} />
                </button>
              </div>

              <nav className="flex flex-col p-6 gap-2 flex-1">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.07, duration: 0.3 }}
                  >
                    <Link
                      href={link.href}
                      className={`block py-4 px-3 font-orbitron text-sm tracking-[0.15em] uppercase border-b border-white/5
                        transition-colors duration-300 hover:text-accent-blue hover:pl-5
                        ${pathname === link.href ? 'text-accent-blue' : 'text-text-secondary'}
                      `}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
              </nav>

              <div className="p-6 border-t border-white/10">
                <Link href="/contact" className="block">
                  <Button variant="primary" size="md" glowEffect className="w-full justify-center">
                    Request Demo
                  </Button>
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
