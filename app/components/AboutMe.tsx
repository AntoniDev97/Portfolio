// src/components/AboutMeSection.tsx
"use client";

import React from "react";
import { motion } from "motion/react";
import Image from "next/image";

// Reusable animation variants for paragraphs/elements
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const AboutMeSection = () => {
  return (
    <section
      id="about"
      className="py-16 md:py-24 bg-base-100 rounded-box mb-10"
    >
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
        >
          About Me
        </motion.h2>

        <div className="flex flex-col lg:flex-row items-start gap-10 lg:gap-16">
          {/* Text Content Column */}
          <motion.div
            className="lg:w-2/3 space-y-6 text-lg text-base-content/90"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            transition={{ staggerChildren: 0.15 }}
          >
            {/* Paragraphs remain the same */}
            <motion.p variants={itemVariants}>
              Hello there! {`I'm`} Antoni, a dedicated Full Stack Developer
              based near Colchester, England. I graduated with First Class
              Honours in Computer Science from the University of Essex, building
              a strong theoretical foundation for my practical work.
            </motion.p>
            <motion.p variants={itemVariants}>
              In my current role, my focus is on enhancing our internal web
              systems which boost colleague efficiency. I actively develop new
              features and automate manual workflows using ASP.NET, C#, SQL
              Server, and Bootstrap, contributing to the ongoing modernisation
              and improvement of the application. I enjoy the challenge of
              improving code quality, performance, and maintainability.
            </motion.p>
            <motion.p variants={itemVariants}>
              Alongside my day job, I founded DoniCodes Ltd in 2026 and built{" "}
              <a
                href="https://tcgdrop.co.uk/"
                target="_blank"
                rel="noopener noreferrer"
                className="link link-hover text-accent font-semibold"
              >
                TCG Drop
              </a>
              , a live platform that runs stock drops for trading card shops. I
              took it from idea to production with Next.js, TypeScript, Supabase
              and Stripe, and I run it day to day, from payments and security to
              supporting the shops that use it.
            </motion.p>
            <motion.p variants={itemVariants}>
              Outside of coding, I keep active with hobbies like the Gym,
              Fishing, Metal Detecting, Football, and Badminton. And of course,{" "}
              {`there's`} my cat, who often supervises my work!
            </motion.p>
          </motion.div>
          {/* Image Column - Changed to Grid */}
          <motion.div
            className="lg:w-1/3 w-full" // Takes remaining width on large screens
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ staggerChildren: 0.2, delayChildren: 0.3 }} // Stagger images in grid
          >
            {/* Grid container for images */}
            <div className="grid grid-cols-2 gap-4">
              {/* 2 columns, adjust gap as needed */}
              {/* Cat Image */}
              <motion.div
                variants={itemVariants}
                className="aspect-square" // Make container square for potentially non-square images
                whileHover={{ scale: 1.05, transition: { duration: 0.3 } }} // Simple scale on hover
              >
                <Image
                  src="/images/cat.jpg"
                  alt="My Cat"
                  width={250}
                  height={250}
                  className="rounded-lg shadow-lg object-cover w-full h-full border border-base-300" // Cover square area
                />
              </motion.div>
              {/* Catfish Image */}
              <motion.div
                variants={itemVariants}
                className="aspect-square"
                whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
              >
                <Image
                  src="/images/catfish.jpg"
                  alt="A Catfish from fishing"
                  width={250}
                  height={250}
                  className="rounded-lg shadow-lg object-cover w-full h-full border border-base-300"
                />
              </motion.div>
              {/* Add more motion.div > Image blocks here for future images */}
              {/* Example:
               <motion.div variants={itemVariants} className="aspect-square" whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}>
                 <Image src="/images/hobby_3.jpg" alt="Third hobby" width={250} height={250} className="rounded-lg shadow-lg object-cover w-full h-full border border-base-300"/>
               </motion.div>
               <motion.div variants={itemVariants} className="aspect-square" whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}>
                 <Image src="/images/hobby_4.jpg" alt="Fourth hobby" width={250} height={250} className="rounded-lg shadow-lg object-cover w-full h-full border border-base-300"/>
               </motion.div>
              */}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutMeSection;
