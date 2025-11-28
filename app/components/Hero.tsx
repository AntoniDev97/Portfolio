// src/components/Hero.tsx
"use client";

import React from "react";
import { motion } from "motion/react";
import Link from "next/link";
import Image from "next/image";
import { GithubIcon } from "../components/icons/icons";

// Animation Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15, // Stagger children slightly more
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const Hero = () => {
  const githubUsername = "AntoniDev97";

  return (
    // Using DaisyUI component & theme classes
    <div className="hero min-h-[70vh] md:min-h-[60vh] bg-base-200 rounded-box my-10 shadow-xl overflow-hidden">
      <div className="hero-content flex-col lg:flex-row-reverse items-center justify-center gap-10 lg:gap-16 w-full max-w-4xl mx-auto px-4">
        {/* Use flex, reverse row on large screens, add gap */}
        {/* Text and Button Content Block */}
        <motion.div
          className="text-center lg:text-left max-w-md lg:max-w-lg" // Align text left on large screens
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1
            variants={itemVariants}
            className="text-5xl sm:text-6xl font-bold font-mono tracking-tight"
          >
            Hello there!
          </motion.h1>
          <motion.p
            variants={itemVariants}
            className="py-6 text-lg md:text-xl text-base-content/80"
          >
            {`I'm`} Antoni Christodoulou, a Full Stack Developer passionate
            about building creative, functional, and modern web applications.
          </motion.p>
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row justify-center lg:justify-start items-center gap-4 mt-4" // Stack buttons vertically on small screens, row on larger
          >
            {/* Buttons */}
            <Link href="/#projects" className="w-full sm:w-auto">
              {/* Ensure button takes width on small screens */}
              <motion.button
                className="btn btn-primary w-full sm:w-auto text-lg px-6 shadow-lg" // Added w-full sm:w-auto
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
            <motion.a
              href={`https://github.com/${githubUsername}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary w-full sm:w-auto text-lg px-6 shadow-lg flex items-center justify-center gap-2" // Added w-full sm:w-auto, justify-center
              whileHover={{
                scale: 1.05,
                y: -2,
                boxShadow: "0 5px 15px rgba(153, 27, 7, 0.3)",
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300, damping: 15 }}
            >
              <GithubIcon className="w-5 h-5" />
              GitHub
            </motion.a>
          </motion.div>
        </motion.div>
        {/* Image Block */}
        <motion.div
          className="w-48 h-48 sm:w-56 sm:h-56 lg:w-72 lg:h-72 flex-shrink-0" // Define size, prevent shrinking
          variants={itemVariants} // Animate this div
          initial="hidden" // Set initial here if not inheriting from parent animate
          animate="visible" // Set animate here if not inheriting
        >
          <Image
            src="/images/me.jpg"
            alt="Antoni Christodoulou profile picture"
            width={300}
            height={300}
            className="rounded-full object-cover w-full h-full shadow-lg border-4 border-base-300"
            priority // Prioritize loading hero image
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
