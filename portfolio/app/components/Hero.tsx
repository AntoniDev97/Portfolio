// src/components/Hero.tsx
"use client";

import React from "react";
import { motion } from "motion/react";
import Link from "next/link";

// Animation Variants remain the same
const containerVariants = {
  /* ... */
};
const itemVariants = {
  /* ... */
};

const Hero = () => {
  return (
    <div className="hero py-20 md:py-28 bg-base-200 rounded-box my-10 shadow-xl">
      {/* bg-base-200 uses --b2 */}
      <div className="hero-content text-center">
        <motion.div
          className="max-w-xl" // Adjusted width
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1
            variants={itemVariants}
            className="text-5xl sm:text-6xl md:text-7xl font-bold font-mono tracking-tighter"
          >
            {/* Text uses --bc */}
            Hello there!
          </motion.h1>
          <motion.p
            variants={itemVariants}
            className="py-6 text-lg md:text-xl text-base-content/80"
          >
            {/* text-base-content uses --bc */}
            I'm Antoni Christodoulou, a Full Stack Developer passionate about
            building creative, functional, and modern web applications.
          </motion.p>
          <motion.div variants={itemVariants}>
            <Link href="/#projects">
              {/* btn-primary uses --p and --pc variables */}
              <motion.button
                className="btn btn-primary text-lg px-6 shadow-lg"
                whileHover={{
                  scale: 1.05,
                  y: -2,
                  boxShadow: "0 5px 15px rgba(220, 38, 38, 0.3)",
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300, damping: 15 }}
              >
                See My Work
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
