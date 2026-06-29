'use client';

import { motion } from 'framer-motion';
import { ButtonHTMLAttributes, ReactNode } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  glowEffect?: boolean;
  children: ReactNode;
  icon?: ReactNode;
  iconPosition?: 'left' | 'right';
}

const sizeStyles = {
  sm: 'px-4 py-2 text-xs',
  md: 'px-6 py-3 text-sm',
  lg: 'px-8 py-4 text-base',
};

const variantStyles = {
  primary: `
    bg-accent-blue text-bg-primary font-semibold
    hover:brightness-110
    relative overflow-hidden
  `,
  outline: `
    border border-accent-blue text-accent-blue
    hover:bg-accent-blue hover:text-bg-primary
    bg-transparent
  `,
  ghost: `
    text-text-secondary hover:text-accent-blue
    bg-transparent hover:bg-white/5
  `,
};

export default function Button({
  variant = 'primary',
  size = 'md',
  glowEffect = false,
  children,
  icon,
  iconPosition = 'left',
  className = '',
  ...props
}: ButtonProps) {
  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`
        inline-flex items-center gap-2 rounded-sm font-orbitron tracking-widest uppercase
        transition-all duration-300 cursor-pointer
        ${sizeStyles[size]}
        ${variantStyles[variant]}
        ${glowEffect ? 'shadow-glow-blue hover:shadow-glow-blue-lg' : ''}
        ${className}
      `}
      {...(props as React.ComponentProps<typeof motion.button>)}
    >
      {icon && iconPosition === 'left' && <span className="flex-shrink-0">{icon}</span>}
      {children}
      {icon && iconPosition === 'right' && <span className="flex-shrink-0">{icon}</span>}

      {variant === 'primary' && (
        <span className="absolute inset-0 bg-white/10 opacity-0 hover:opacity-100 transition-opacity duration-300" />
      )}
    </motion.button>
  );
}
