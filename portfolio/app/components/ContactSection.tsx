// src/components/ContactSection.tsx
"use client";

import React from "react";
import { motion } from "motion/react";
import {
  LinkedInIcon,
  InstagramIcon,
  GithubIcon,
} from "../components/icons/icons";

// Reusable animation variants
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const ContactSection = () => {
  // --- IMPORTANT: Replace with your actual URLs ---
  const yourEmail = "karatedon@live.co.uk";
  const yourLinkedIn =
    "https://www.linkedin.com/in/antoni-christodoulou-582110177";
  const yourInstagram = "https://www.instagram.com/4antoni/";
  // ---

  return (
    <motion.section
      id="contact"
      className="py-20 md:py-28 bg-base-200 rounded-box mb-10 shadow-xl overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ staggerChildren: 0.15 }}
    >
      <div className="container mx-auto px-4 text-center">
        <motion.h2
          variants={itemVariants}
          className="text-3xl md:text-4xl font-bold mb-6 text-base-content"
        >
          Get In Touch
        </motion.h2>

        <motion.p
          variants={itemVariants}
          className="text-lg text-base-content/80 mb-10 max-w-xl mx-auto"
        >
          Have a project in mind, a question, or just want to connect? Feel free
          to reach out!
        </motion.p>

        {/* Email Button */}
        <motion.div variants={itemVariants} className="mb-10">
          <motion.a
            href={`mailto:${yourEmail}`}
            className="btn btn-primary shadow-lg text-lg px-8 py-3" // Using primary red, slightly larger button
            whileHover={{
              scale: 1.05,
              y: -2,
              boxShadow: "0 5px 15px rgba(220, 38, 38, 0.3)",
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300, damping: 15 }}
          >
            Email Me
          </motion.a>
        </motion.div>

        {/* Social Links */}
        <motion.div
          variants={itemVariants}
          className="flex justify-center items-center gap-6 md:gap-8" // Spacing for social icons
        >
          <motion.a
            href={yourLinkedIn}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            whileHover={{ scale: 1.2, y: -3, color: "var(--color-primary)" }} // Use theme color on hover
            whileTap={{ scale: 0.9 }}
            className="text-base-content/70 hover:text-base-content" // Start slightly muted
          >
            <LinkedInIcon className="w-7 h-7 md:w-8 md:h-8" />{" "}
          </motion.a>

          <motion.a
            href={yourInstagram}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram Profile"
            whileHover={{ scale: 1.2, y: -3, color: "var(--color-primary)" }}
            whileTap={{ scale: 0.9 }}
            className="text-base-content/70 hover:text-base-content"
          >
            <InstagramIcon className="w-7 h-7 md:w-8 md:h-8" />
          </motion.a>

          {
            <motion.a
              href={`https://github.com/AntoniDev97`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              whileHover={{ scale: 1.2, y: -3, color: "var(--color-primary)" }}
              whileTap={{ scale: 0.9 }}
              className="text-base-content/70 hover:text-base-content"
            >
              <GithubIcon className="w-7 h-7 md:w-8 md:h-8" />
            </motion.a>
          }
        </motion.div>
      </div>
    </motion.section>
  );
};

export default ContactSection;
