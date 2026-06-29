/* eslint-disable @typescript-eslint/no-explicit-any */
export const fadeInUp: any = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

export const fadeInDown: any = {
  hidden: { opacity: 0, y: -40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

export const fadeInLeft: any = {
  hidden: { opacity: 0, x: -60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

export const fadeInRight: any = {
  hidden: { opacity: 0, x: 60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

export const staggerContainer: any = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

export const staggerContainerFast: any = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

export const fadeIn: any = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.6 },
  },
};

export const scaleIn: any = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5 },
  },
};

export const scaleInBounce: any = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
      type: "spring",
      stiffness: 200,
      damping: 20,
    },
  },
};

export const slideInFromBottom: any = {
  hidden: { opacity: 0, y: 100 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
};

export const heroTextVariants: any = {
  hidden: { opacity: 0, y: 60, filter: "blur(10px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
  },
};

export const navbarVariants: any = {
  top: {
    backgroundColor: "rgba(5, 5, 8, 0)",
    borderBottomColor: "rgba(200, 208, 224, 0)",
    backdropFilter: "blur(0px)",
  },
  scrolled: {
    backgroundColor: "rgba(5, 5, 8, 0.9)",
    borderBottomColor: "rgba(200, 208, 224, 0.12)",
    backdropFilter: "blur(20px)",
  },
};

export const cardHoverVariants: any = {
  rest: { y: 0, boxShadow: "0 4px 40px rgba(0,0,0,0.6)" },
  hover: {
    y: -8,
    boxShadow: "0 20px 60px rgba(0, 196, 255, 0.2)",
    transition: { duration: 0.3, ease: "easeOut" },
  },
};

export const glowPulse: any = {
  initial: { boxShadow: "0 0 5px rgba(0, 196, 255, 0.3)" },
  animate: {
    boxShadow: [
      "0 0 5px rgba(0, 196, 255, 0.3)",
      "0 0 30px rgba(0, 196, 255, 0.8)",
      "0 0 5px rgba(0, 196, 255, 0.3)",
    ],
    transition: { duration: 2, repeat: Infinity, ease: "easeInOut" },
  },
};

export const drawLine: any = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: {
    pathLength: 1,
    opacity: 1,
    transition: { duration: 1.5, ease: "easeInOut" },
  },
};

export const menuSlideIn: any = {
  hidden: { x: "100%" },
  visible: {
    x: 0,
    transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
  },
  exit: {
    x: "100%",
    transition: { duration: 0.3, ease: [0.64, 0, 0.78, 0] },
  },
};
