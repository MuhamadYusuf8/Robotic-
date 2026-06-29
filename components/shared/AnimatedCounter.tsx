'use client';

import { useEffect, useRef, useState } from 'react';
import { useInView } from 'framer-motion';

interface AnimatedCounterProps {
  target: number;
  suffix?: string;
  duration?: number;
  isDecimal?: boolean;
  className?: string;
}

function easeOutQuart(t: number): number {
  return 1 - Math.pow(1 - t, 4);
}

export default function AnimatedCounter({
  target,
  suffix = '',
  duration = 2000,
  isDecimal = false,
  className = '',
}: AnimatedCounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const startTime = useRef<number | null>(null);
  const animationFrame = useRef<number | null>(null);

  useEffect(() => {
    if (!isInView) return;

    const animate = (timestamp: number) => {
      if (startTime.current === null) startTime.current = timestamp;
      const elapsed = timestamp - startTime.current;
      const progress = Math.min(elapsed / duration, 1);
      const easedProgress = easeOutQuart(progress);

      const currentValue = easedProgress * target;
      setCount(isDecimal ? parseFloat(currentValue.toFixed(1)) : Math.floor(currentValue));

      if (progress < 1) {
        animationFrame.current = requestAnimationFrame(animate);
      } else {
        setCount(target);
      }
    };

    animationFrame.current = requestAnimationFrame(animate);

    return () => {
      if (animationFrame.current) cancelAnimationFrame(animationFrame.current);
    };
  }, [isInView, target, duration, isDecimal]);

  return (
    <span ref={ref} className={className}>
      {isDecimal ? count.toFixed(1) : count}
      {suffix}
    </span>
  );
}
