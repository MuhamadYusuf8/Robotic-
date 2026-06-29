'use client';

import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Play, ChevronDown } from 'lucide-react';
import Button from '@/components/shared/Button';
import { fadeInUp, staggerContainer, heroTextVariants } from '@/lib/utils/animations';

export default function HeroSection() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mountRef.current) return;
    const container = mountRef.current;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, container.clientWidth / container.clientHeight, 0.1, 1000);
    camera.position.z = 3;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);
    container.appendChild(renderer.domElement);

    // Create particles
    const particleCount = 2000;
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);
    const sizes = new Float32Array(particleCount);

    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 20;

      // Mix blue and white
      const isBlue = Math.random() > 0.3;
      if (isBlue) {
        colors[i * 3] = 0;
        colors[i * 3 + 1] = 0.77;
        colors[i * 3 + 2] = 1;
      } else {
        colors[i * 3] = 0.94;
        colors[i * 3 + 1] = 0.96;
        colors[i * 3 + 2] = 1;
      }

      sizes[i] = Math.random() * 2 + 0.5;
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    geometry.setAttribute('size', new THREE.BufferAttribute(sizes, 1));

    const material = new THREE.PointsMaterial({
      size: 0.03,
      vertexColors: true,
      transparent: true,
      opacity: 0.7,
      sizeAttenuation: true,
    });

    const particles = new THREE.Points(geometry, material);
    scene.add(particles);

    // Secondary particle layer (slower, larger)
    const positions2 = new Float32Array(400 * 3);
    for (let i = 0; i < 400; i++) {
      positions2[i * 3] = (Math.random() - 0.5) * 15;
      positions2[i * 3 + 1] = (Math.random() - 0.5) * 15;
      positions2[i * 3 + 2] = (Math.random() - 0.5) * 8;
    }
    const geo2 = new THREE.BufferGeometry();
    geo2.setAttribute('position', new THREE.BufferAttribute(positions2, 3));
    const mat2 = new THREE.PointsMaterial({ size: 0.06, color: 0x00c4ff, transparent: true, opacity: 0.3 });
    const particles2 = new THREE.Points(geo2, mat2);
    scene.add(particles2);

    let mouseX = 0;
    let mouseY = 0;
    const handleMouseMove = (e: MouseEvent) => {
      mouseX = (e.clientX / window.innerWidth - 0.5) * 0.5;
      mouseY = -(e.clientY / window.innerHeight - 0.5) * 0.5;
    };
    window.addEventListener('mousemove', handleMouseMove);

    let time = 0;
    let animId: number;
    const animate = () => {
      animId = requestAnimationFrame(animate);
      time += 0.003;

      particles.rotation.y = time * 0.05 + mouseX * 0.3;
      particles.rotation.x = time * 0.02 + mouseY * 0.2;
      particles2.rotation.y = -time * 0.03 + mouseX * 0.1;
      particles2.rotation.x = time * 0.015;

      renderer.render(scene, camera);
    };
    animate();

    const handleResize = () => {
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      renderer.dispose();
      if (container.contains(renderer.domElement)) container.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden scanline-overlay">
      {/* Three.js particle background */}
      <div ref={mountRef} className="absolute inset-0 z-0" />

      {/* Background gradients */}
      <div className="absolute inset-0 z-[1]">
        <div className="absolute inset-0 bg-gradient-to-b from-bg-primary/60 via-transparent to-bg-primary" />
        <div className="absolute inset-0 bg-gradient-to-r from-bg-primary/40 via-transparent to-bg-primary/40" />
        <div className="absolute inset-0 bg-radial-glow" />
      </div>

      {/* Grid pattern */}
      <div className="absolute inset-0 z-[1] bg-grid opacity-20" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center pt-20">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center gap-6 lg:gap-8"
        >
          {/* Eyebrow */}
          <motion.div variants={heroTextVariants}>
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-accent-blue/30 bg-accent-blue/5">
              <div className="w-1.5 h-1.5 rounded-full bg-accent-blue animate-pulse" />
              <span className="font-orbitron text-xs font-semibold text-accent-blue tracking-[0.3em] uppercase">
                Next-Generation Robotics
              </span>
              <div className="w-1.5 h-1.5 rounded-full bg-accent-blue animate-pulse" />
            </div>
          </motion.div>

          {/* H1 */}
          <motion.div variants={heroTextVariants}>
            <h1 className="text-text-primary max-w-5xl">
              <span className="block gradient-text">THE FUTURE OF</span>
              <span className="block text-text-primary">INDUSTRIAL AUTOMATION</span>
            </h1>
          </motion.div>

          {/* Subtext */}
          <motion.p
            variants={heroTextVariants}
            className="text-text-secondary text-lg lg:text-xl max-w-2xl leading-relaxed"
          >
            PURTC delivers precision-engineered autonomous robots that redefine what&apos;s possible in
            manufacturing, logistics, healthcare, and beyond. Trusted by 200+ enterprises across 47 countries.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row items-center gap-4 mt-4">
            <Link href="/products">
              <Button
                variant="primary"
                size="lg"
                glowEffect
                icon={<ArrowRight size={16} />}
                iconPosition="right"
              >
                Explore Our Robots
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                variant="outline"
                size="lg"
                icon={<Play size={14} fill="currentColor" />}
                iconPosition="left"
              >
                Watch Demo
              </Button>
            </Link>
          </motion.div>

          {/* Stats preview */}
          <motion.div
            variants={fadeInUp}
            className="flex items-center gap-8 mt-8 pt-8 border-t border-white/10"
          >
            {[
              { value: '500+', label: 'Robots Deployed' },
              { value: '47', label: 'Countries' },
              { value: '99.7%', label: 'Uptime' },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="font-orbitron text-2xl font-bold text-accent-blue">{stat.value}</div>
                <div className="text-text-secondary text-xs tracking-wider mt-0.5">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
      >
        <span className="font-orbitron text-[10px] text-text-secondary tracking-[0.3em]">SCROLL</span>
        <ChevronDown size={16} className="text-accent-blue" />
      </motion.div>
    </section>
  );
}
