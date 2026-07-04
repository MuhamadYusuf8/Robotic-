import Link from 'next/link';
import Image from 'next/image';
import { Mail, MapPin } from 'lucide-react';

const InstagramIcon = ({ size = 24 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
  </svg>
);

const footerLinks = {
  Navigation: [
    { label: 'Home', href: '/' },
    { label: 'About PURTC', href: '/about' },
    { label: 'Divisions', href: '/divisions' },
    { label: 'Projects', href: '/projects' },
    { label: 'Events', href: '/events' },
  ],
  'Join Us': [
    { label: 'Join PURTC', href: '/join' },
    { label: 'Open Recruitment', href: '/join#recruitment' },
    { label: 'FAQ', href: '/join#faq' },
    { label: 'Contact', href: '/contact' },
  ],
  Divisions: [
    { label: 'Technology Research', href: '/divisions#technology-research' },
    { label: 'Program & Production', href: '/divisions#program-production' },
    { label: 'Multimedia & Design', href: '/divisions#multimedia-design' },
    { label: 'Communication', href: '/divisions#communication' },
    { label: 'HRD', href: '/divisions#hrd' },
  ],
};

const socialLinks = [
  { icon: InstagramIcon, href: 'https://instagram.com/purtc_presuniv', label: 'Instagram' }
];

export default function Footer() {
  return (
    <footer className="relative bg-bg-primary border-t border-white/5 overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 bg-grid opacity-20 pointer-events-none" />

      {/* Top glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-2xl h-px bg-gradient-to-r from-transparent via-accent-blue/50 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 pt-16 pb-8">
        {/* Join bar */}
        <div className="glass rounded-lg p-6 lg:p-8 mb-16 flex flex-col lg:flex-row items-center gap-6">
          <div className="flex-1 text-center lg:text-left">
            <h3 className="text-text-primary mb-1">Ready to Join PURTC?</h3>
            <p className="text-text-secondary text-sm">
              Be part of the technology & robotics community at President University. Build. Innovate. Lead.
            </p>
          </div>
          <div className="flex gap-3 w-full lg:w-auto">
            <Link
              href="/join"
              className="px-6 py-3 bg-accent-blue text-bg-primary font-orbitron text-xs tracking-widest font-semibold rounded-sm
                hover:brightness-110 transition-all duration-300 whitespace-nowrap w-full lg:w-auto text-center"
            >
              Join Now
            </Link>
            <Link
              href="/events"
              className="px-6 py-3 border border-accent-blue/50 text-accent-blue font-orbitron text-xs tracking-widest font-semibold rounded-sm
                hover:bg-accent-blue/10 transition-all duration-300 whitespace-nowrap w-full lg:w-auto text-center"
            >
              View Events
            </Link>
          </div>
        </div>

        {/* Main footer grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <div className="relative w-12 h-12">
                <Image src="/logo.png" alt="PURTC Logo" fill className="object-contain" />
              </div>
              <div>
                <div className="font-orbitron text-base font-bold text-text-primary tracking-[0.1em]">PURTC</div>
                <div className="font-orbitron text-[8px] text-accent-blue tracking-[0.25em] leading-tight">PRESIDENT UNIVERSITY<br/>ROBOTICS & TECHNOLOGY CLUB</div>
              </div>
            </Link>

            <p className="text-text-secondary text-sm leading-relaxed mb-6 max-w-sm">
              Student community for technology and robotics at President University, Cikarang.
              We build, innovate, and lead — together.
            </p>

            <div className="space-y-3 mb-6">
              <a href="mailto:presrobotech@gmail.com" className="flex items-center gap-3 text-text-secondary hover:text-accent-blue transition-colors text-sm group">
                <Mail size={14} className="group-hover:text-accent-blue flex-shrink-0" />
                presrobotech@gmail.com
              </a>
              <div className="flex items-start gap-3 text-text-secondary text-sm">
                <MapPin size={14} className="flex-shrink-0 mt-0.5" />
                <span>President University, Cikarang, West Java</span>
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
            © 2026 PURTC — PART OF PRESIDENT UNIVERSITY, CIKARANG.
          </p>
        </div>
        
      </div>
    </footer>
  );
}
