// src/components/Navbar.tsx
"use client";

import React from "react";
import { motion } from "motion/react";
import Link from "next/link";

const Navbar = () => {
  return (
    <motion.nav
      // Using DaisyUI component & theme classes.
      // These rely on @plugin "daisyui" working AND CSS variables being set in globals.css
      className="navbar bg-base-200 shadow-lg sticky top-0 z-50" // bg-base-200 uses --b2
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="navbar-start">
        <Link
          href="/"
          className="font-mono uppercase text-2xl font-medium tracking-widest px-1 transition-opacity duration-300 ease-in-out hover:opacity-80"
          aria-label="Homepage Logo"
        >
          <span className="text-secondary font-normal">&lt;</span>{" "}
          <span className="font-bold text-base-content">Doni</span>{" "}
          <span className="text-primary font-normal ml-1">Codes</span>{" "}
          <span className="text-secondary font-normal">/&gt;</span>{" "}
        </Link>
      </div>
      <div className="navbar-end space-x-2">
        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          {/* btn-primary uses --p and --pc variables */}
          <Link href="/#projects" className="btn btn-primary btn-sm">
            Projects
          </Link>
        </motion.div>
        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          {/* btn-secondary uses --s and --sc variables */}
          <Link href="/#contact" className="btn btn-secondary btn-sm">
            Contact
          </Link>
        </motion.div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
