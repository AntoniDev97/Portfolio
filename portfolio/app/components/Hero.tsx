// src/components/Hero.tsx
"use client";

import React from "react";
import { motion } from "motion/react";
import Link from "next/link";
import { GithubIcon } from "../components/icons/icons";

// Animation Variants (assuming defined above)
const containerVariants = {
  /* ... */
};
const itemVariants = {
  /* ... */
};

const Hero = () => {
  const githubUsername = "AntoniDev97";

  return (
    <div className="hero py-20 md:py-28 bg-base-200 rounded-box my-10 shadow-xl">
      <div className="hero-content text-center">
        <motion.div
          className="max-w-xl"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1
            variants={itemVariants}
            className="text-5xl sm:text-6xl md:text-7xl font-bold font-mono tracking-tight"
          >
            Hello there!
          </motion.h1>
          <motion.p
            variants={itemVariants}
            className="py-6 text-lg md:text-xl text-base-content/80"
          >
            I'm Antoni Christodoulou, a Full Stack Developer passionate about
            building creative, functional, and modern web applications.
          </motion.p>

          {/* Wrapper for buttons with spacing */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center items-center gap-4 mt-4"
          >
            {/*"See My Work" Button */}
            <Link href="/#projects">
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

            {/* --- GitHub Button --- */}
            <motion.a
              href={`https://github.com/${githubUsername}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary text-lg px-6 shadow-lg flex items-center gap-2"
              whileHover={{
                scale: 1.05,
                y: -2,
                boxShadow: "0 5px 15px rgba(153, 27, 27, 0.3)",
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300, damping: 15 }}
            >
              <GithubIcon className="w-5 h-5" />
              GitHub
            </motion.a>
            {/* --- End GitHub Button --- */}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
