// app/components/ScrollProgressBar.tsx
"use client";

import React from "react";
import { motion, useScroll, useSpring } from "motion/react";

const ScrollProgressBar = () => {
  // Track scroll progress of the whole page
  const { scrollYProgress } = useScroll();

  // Apply spring physics for a smoother, less rigid progress bar
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 150,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[5px] bg-primary origin-left z-[60]" // Use primary red, fixed top, high z-index
      style={{ scaleX }} // Bind the horizontal scale to scroll progress
    />
  );
};

export default ScrollProgressBar;
