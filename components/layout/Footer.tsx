import Link from 'next/link';
import { Bot, Mail, Phone, MapPin } from 'lucide-react';

const TwitterIcon = ({ size = 24 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
);
const LinkedinIcon = ({ size = 24 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
);
const YoutubeIcon = ({ size = 24 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"/><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"/></svg>
);
const GithubIcon = ({ size = 24 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>
);
const footerLinks = {
  Products: [
    { label: 'ATLAS X1', href: '/products/atlas-x1' },
    { label: 'HELIX M3', href: '/products/helix-m3' },
    { label: 'SWIFT L7', href: '/products/swift-l7' },
    { label: 'SENTINEL D2', href: '/products/sentinel-d2' },
    { label: 'All Products', href: '/products' },
  ],
  Company: [
    { label: 'Technology', href: '/technology' },
    { label: 'Case Studies', href: '/case-studies' },
    { label: 'About Us', href: '/about' },
    { label: 'Careers', href: '/careers' },
    { label: 'Press', href: '/press' },
  ],
  Support: [
    { label: 'Contact Us', href: '/contact' },
    { label: 'Documentation', href: '/docs' },
    { label: 'Service Plans', href: '/service' },
    { label: 'Training', href: '/training' },
    { label: 'Partners', href: '/partners' },
  ],
};

const socialLinks = [
  { icon: TwitterIcon, href: 'https://twitter.com', label: 'Twitter' },
  { icon: LinkedinIcon, href: 'https://linkedin.com', label: 'LinkedIn' },
  { icon: YoutubeIcon, href: 'https://youtube.com', label: 'YouTube' },
  { icon: GithubIcon, href: 'https://github.com', label: 'GitHub' },
];

export default function Footer() {
  return (
    <footer className="relative bg-bg-primary border-t border-white/5 overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 bg-grid opacity-20 pointer-events-none" />

      {/* Top glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-2xl h-px bg-gradient-to-r from-transparent via-accent-blue/50 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 pt-16 pb-8">
        {/* Newsletter bar */}
        <div className="glass rounded-lg p-6 lg:p-8 mb-16 flex flex-col lg:flex-row items-center gap-6">
          <div className="flex-1 text-center lg:text-left">
            <h3 className="text-text-primary mb-1">Stay Ahead of Automation</h3>
            <p className="text-text-secondary text-sm">
              Get the latest robotics insights, product launches, and industry news.
            </p>
          </div>
          <div className="flex gap-3 w-full lg:w-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="input-premium flex-1 lg:w-64 px-4 py-3 rounded-sm text-sm"
              aria-label="Newsletter email"
            />
            <button
              className="px-6 py-3 bg-accent-blue text-bg-primary font-orbitron text-xs tracking-widest font-semibold rounded-sm
                hover:brightness-110 transition-all duration-300 whitespace-nowrap"
            >
              Subscribe
            </button>
          </div>
        </div>

        {/* Main footer grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <Bot size={28} className="text-accent-blue" />
              <div>
                <div className="font-orbitron text-xl font-bold text-text-primary tracking-[0.1em]">PURTC</div>
                <div className="font-orbitron text-[9px] text-accent-blue tracking-[0.3em]">ROBOTICS</div>
              </div>
            </Link>

            <p className="text-text-secondary text-sm leading-relaxed mb-6 max-w-sm">
              Engineering the future of autonomous robotics for industrial, medical, logistics, and defense applications. Trusted by 200+ enterprises worldwide.
            </p>

            <div className="space-y-3 mb-6">
              <a href="mailto:contact@purtc.com" className="flex items-center gap-3 text-text-secondary hover:text-accent-blue transition-colors text-sm group">
                <Mail size={14} className="group-hover:text-accent-blue flex-shrink-0" />
                contact@purtc.com
              </a>
              <a href="tel:+18005463926" className="flex items-center gap-3 text-text-secondary hover:text-accent-blue transition-colors text-sm group">
                <Phone size={14} className="group-hover:text-accent-blue flex-shrink-0" />
                +1 (800) PURTC-ROBO
              </a>
              <div className="flex items-start gap-3 text-text-secondary text-sm">
                <MapPin size={14} className="flex-shrink-0 mt-0.5" />
                <span>1 Robotics Way, San Francisco, CA 94105</span>
              </div>
            </div>

            {/* Social links */}
            <div className="flex gap-3">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-sm border border-white/10 flex items-center justify-center
                    text-text-secondary hover:text-accent-blue hover:border-accent-blue/50
                    transition-all duration-300 hover:shadow-glow-blue"
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-orbitron text-xs font-semibold text-text-primary tracking-[0.2em] uppercase mb-6">
                {category}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-text-secondary text-sm hover:text-accent-blue transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Section divider */}
        <div className="section-divider mb-8" />

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-text-secondary text-xs font-orbitron tracking-wider">
            © 2024 PURTC ROBOTICS. ALL RIGHTS RESERVED.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="text-text-secondary text-xs hover:text-text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-text-secondary text-xs hover:text-text-primary transition-colors">
              Terms of Service
            </Link>
            <Link href="/security" className="text-text-secondary text-xs hover:text-text-primary transition-colors">
              Security
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
