'use client';

import { useEffect, useRef } from 'react';
import * as THREE from 'three';

interface RobotViewer3DProps {
  className?: string;
  interactive?: boolean;
}

export default function RobotViewer3D({ className = '', interactive = true }: RobotViewer3DProps) {
  const mountRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<{
    scene: THREE.Scene;
    camera: THREE.PerspectiveCamera;
    renderer: THREE.WebGLRenderer;
    robot: THREE.Group;
    animId: number;
    mouseX: number;
    mouseY: number;
  } | null>(null);

  useEffect(() => {
    if (!mountRef.current) return;
    const container = mountRef.current;
    const w = container.clientWidth;
    const h = container.clientHeight;

    // Scene setup
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x050508, 0.02);

    const camera = new THREE.PerspectiveCamera(60, w / h, 0.1, 1000);
    camera.position.set(0, 1, 5);
    camera.lookAt(0, 0, 0);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(w, h);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);
    renderer.shadowMap.enabled = true;
    container.appendChild(renderer.domElement);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0x00c4ff, 0.3);
    scene.add(ambientLight);

    const pointLight1 = new THREE.PointLight(0x00c4ff, 2, 20);
    pointLight1.position.set(3, 3, 3);
    scene.add(pointLight1);

    const pointLight2 = new THREE.PointLight(0xc8d0e0, 1, 20);
    pointLight2.position.set(-3, 1, -2);
    scene.add(pointLight2);

    const rimLight = new THREE.DirectionalLight(0x00c4ff, 0.5);
    rimLight.position.set(0, 5, -5);
    scene.add(rimLight);

    // Robot group
    const robot = new THREE.Group();
    scene.add(robot);

    // Materials
    const bodyMat = new THREE.MeshStandardMaterial({
      color: 0x0f1225,
      metalness: 0.9,
      roughness: 0.1,
      emissive: 0x00c4ff,
      emissiveIntensity: 0.05,
    });

    const accentMat = new THREE.MeshStandardMaterial({
      color: 0x00c4ff,
      metalness: 0.8,
      roughness: 0.2,
      emissive: 0x00c4ff,
      emissiveIntensity: 0.5,
    });

    const darkMat = new THREE.MeshStandardMaterial({
      color: 0x050508,
      metalness: 0.95,
      roughness: 0.05,
    });

    // Build robot body
    // Torso
    const torso = new THREE.Mesh(new THREE.BoxGeometry(1.2, 1.4, 0.7), bodyMat);
    torso.position.y = 1.5;
    robot.add(torso);

    // Chest panel glow
    const chestPanel = new THREE.Mesh(new THREE.BoxGeometry(0.7, 0.5, 0.05), accentMat);
    chestPanel.position.set(0, 1.6, 0.38);
    robot.add(chestPanel);

    // Head
    const head = new THREE.Mesh(new THREE.BoxGeometry(0.8, 0.7, 0.65), bodyMat);
    head.position.y = 2.6;
    robot.add(head);

    // Eyes (glow)
    const eyeGeo = new THREE.BoxGeometry(0.2, 0.1, 0.05);
    const eyeLeft = new THREE.Mesh(eyeGeo, accentMat);
    eyeLeft.position.set(-0.2, 2.65, 0.36);
    robot.add(eyeLeft);

    const eyeRight = new THREE.Mesh(eyeGeo, accentMat);
    eyeRight.position.set(0.2, 2.65, 0.36);
    robot.add(eyeRight);

    // Neck
    const neck = new THREE.Mesh(new THREE.CylinderGeometry(0.15, 0.18, 0.3, 8), darkMat);
    neck.position.y = 2.25;
    robot.add(neck);

    // Hips
    const hips = new THREE.Mesh(new THREE.BoxGeometry(1.0, 0.4, 0.6), darkMat);
    hips.position.y = 0.75;
    robot.add(hips);

    // Left arm
    const leftShoulder = new THREE.Mesh(new THREE.SphereGeometry(0.2, 12, 12), bodyMat);
    leftShoulder.position.set(-0.8, 2.15, 0);
    robot.add(leftShoulder);

    const leftUpperArm = new THREE.Mesh(new THREE.CylinderGeometry(0.13, 0.11, 0.8, 8), bodyMat);
    leftUpperArm.position.set(-0.85, 1.7, 0);
    robot.add(leftUpperArm);

    const leftElbow = new THREE.Mesh(new THREE.SphereGeometry(0.13, 8, 8), darkMat);
    leftElbow.position.set(-0.85, 1.25, 0);
    robot.add(leftElbow);

    const leftForearm = new THREE.Mesh(new THREE.CylinderGeometry(0.1, 0.09, 0.7, 8), bodyMat);
    leftForearm.position.set(-0.85, 0.85, 0);
    robot.add(leftForearm);

    // Right arm
    const rightShoulder = new THREE.Mesh(new THREE.SphereGeometry(0.2, 12, 12), bodyMat);
    rightShoulder.position.set(0.8, 2.15, 0);
    robot.add(rightShoulder);

    const rightUpperArm = new THREE.Mesh(new THREE.CylinderGeometry(0.13, 0.11, 0.8, 8), bodyMat);
    rightUpperArm.position.set(0.85, 1.7, 0);
    robot.add(rightUpperArm);

    const rightElbow = new THREE.Mesh(new THREE.SphereGeometry(0.13, 8, 8), darkMat);
    rightElbow.position.set(0.85, 1.25, 0);
    robot.add(rightElbow);

    const rightForearm = new THREE.Mesh(new THREE.CylinderGeometry(0.1, 0.09, 0.7, 8), bodyMat);
    rightForearm.position.set(0.85, 0.85, 0);
    robot.add(rightForearm);

    // Legs
    const leftThigh = new THREE.Mesh(new THREE.CylinderGeometry(0.18, 0.15, 0.8, 8), bodyMat);
    leftThigh.position.set(-0.3, 0.2, 0);
    robot.add(leftThigh);

    const leftKnee = new THREE.Mesh(new THREE.SphereGeometry(0.15, 8, 8), darkMat);
    leftKnee.position.set(-0.3, -0.25, 0);
    robot.add(leftKnee);

    const leftShin = new THREE.Mesh(new THREE.CylinderGeometry(0.12, 0.14, 0.7, 8), bodyMat);
    leftShin.position.set(-0.3, -0.65, 0);
    robot.add(leftShin);

    const leftFoot = new THREE.Mesh(new THREE.BoxGeometry(0.25, 0.12, 0.4), darkMat);
    leftFoot.position.set(-0.3, -1.05, 0.05);
    robot.add(leftFoot);

    const rightThigh = new THREE.Mesh(new THREE.CylinderGeometry(0.18, 0.15, 0.8, 8), bodyMat);
    rightThigh.position.set(0.3, 0.2, 0);
    robot.add(rightThigh);

    const rightKnee = new THREE.Mesh(new THREE.SphereGeometry(0.15, 8, 8), darkMat);
    rightKnee.position.set(0.3, -0.25, 0);
    robot.add(rightKnee);

    const rightShin = new THREE.Mesh(new THREE.CylinderGeometry(0.12, 0.14, 0.7, 8), bodyMat);
    rightShin.position.set(0.3, -0.65, 0);
    robot.add(rightShin);

    const rightFoot = new THREE.Mesh(new THREE.BoxGeometry(0.25, 0.12, 0.4), darkMat);
    rightFoot.position.set(0.3, -1.05, 0.05);
    robot.add(rightFoot);

    // Accent details (stripe lines)
    const stripeGeo = new THREE.BoxGeometry(1.22, 0.04, 0.05);
    for (let i = 0; i < 3; i++) {
      const stripe = new THREE.Mesh(stripeGeo, accentMat);
      stripe.position.set(0, 1.2 + i * 0.3, 0.38);
      robot.add(stripe);
    }

    // Base platform
    const base = new THREE.Mesh(new THREE.CylinderGeometry(1.2, 1.4, 0.08, 32), darkMat);
    base.position.y = -1.12;
    robot.add(base);

    // Grid rings
    for (let r = 0.5; r <= 1.2; r += 0.35) {
      const ringGeo = new THREE.TorusGeometry(r, 0.005, 8, 64);
      const ring = new THREE.Mesh(ringGeo, accentMat);
      ring.rotation.x = Math.PI / 2;
      ring.position.y = -1.08;
      robot.add(ring);
    }

    robot.position.y = -0.5;

    // Particle field around robot
    const particleCount = 300;
    const positions = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount; i++) {
      const r = 2.5 + Math.random() * 2;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.random() * Math.PI;
      positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = r * Math.cos(phi) - 0.5;
      positions[i * 3 + 2] = r * Math.sin(phi) * Math.sin(theta);
    }
    const particleGeo = new THREE.BufferGeometry();
    particleGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    const particleMat = new THREE.PointsMaterial({ color: 0x00c4ff, size: 0.02, transparent: true, opacity: 0.6 });
    const particles = new THREE.Points(particleGeo, particleMat);
    scene.add(particles);

    // Mouse tracking
    let mouseX = 0;
    let mouseY = 0;
    let targetRotX = 0;
    let targetRotY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      if (!interactive) return;
      const rect = container.getBoundingClientRect();
      mouseX = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
      mouseY = -((e.clientY - rect.top) / rect.height - 0.5) * 2;
    };

    container.addEventListener('mousemove', handleMouseMove);

    // Animate
    let time = 0;
    const animate = () => {
      const animId = requestAnimationFrame(animate);
      sceneRef.current!.animId = animId;
      time += 0.008;

      // Hover animation
      robot.position.y = -0.5 + Math.sin(time * 0.8) * 0.08;

      // Mouse interaction
      if (interactive) {
        targetRotY += (mouseX * 0.4 - targetRotY) * 0.05;
        targetRotX += (mouseY * 0.2 - targetRotX) * 0.05;
        robot.rotation.y = targetRotY;
        robot.rotation.x = targetRotX;
      } else {
        robot.rotation.y += 0.005;
      }

      // Animate eye glow
      const eyeIntensity = 0.5 + Math.sin(time * 2) * 0.3;
      (eyeLeft.material as THREE.MeshStandardMaterial).emissiveIntensity = eyeIntensity;
      (eyeRight.material as THREE.MeshStandardMaterial).emissiveIntensity = eyeIntensity;

      // Light orbiting
      pointLight1.position.x = Math.cos(time) * 3;
      pointLight1.position.z = Math.sin(time) * 3;

      particles.rotation.y += 0.001;

      renderer.render(scene, camera);
    };

    const animId = requestAnimationFrame(animate);

    sceneRef.current = {
      scene, camera, renderer, robot,
      animId, mouseX, mouseY,
    };

    // Resize handler
    const handleResize = () => {
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      container.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animId);
      renderer.dispose();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, [interactive]);

  return (
    <div
      ref={mountRef}
      className={`w-full h-full ${className}`}
      style={{ cursor: interactive ? 'grab' : 'default' }}
    />
  );
}
