// src/components/PcSpecsSection.tsx
"use client";

import React from "react";
import { motion } from "motion/react";

// Import the icons you just added to icons.tsx
import {
  ComputerIcon,
  GPUIcon,
  CPUIcon,
  MemoryIcon,
  M2SsdIcon,
  SataSsdIcon,
  HddIcon,
  BoltIcon,
  PcCaseIcon,
  FanIcon,
  DisplayIcon,
  KeyboardIcon,
  MouseIcon,
  MotherboardIcon,
} from "../components/icons/pcSpecsIcons";

// Define the structure for your spec data
interface SpecItem {
  category: string;
  name: string;
  icon: React.ComponentType<{ className?: string }>;
}

// --- YOUR PC SPECS DATA ---
// Populate this array with your actual components
const specsData: SpecItem[] = [
  { category: "CPU", name: "AMD Ryzen 7 1700X", icon: CPUIcon },
  { category: "GPU", name: "NVIDIA RTX 3070 FE", icon: GPUIcon },
  {
    category: "RAM",
    name: "Corsair Vengeance 16GB DDR4 3200MHz",
    icon: MemoryIcon,
  },
  {
    category: "Motherboard",
    name: "Asus Rog Strix B350-F Gaming",
    icon: MotherboardIcon,
  },
  { category: "SSD 1", name: "Samsung 960 EVO 250GB", icon: M2SsdIcon },
  { category: "SSD 2", name: "Samsung 850 EVO 250GB", icon: SataSsdIcon },
  { category: "HDD", name: "Toshiba HDWD120 2TB", icon: HddIcon },
  { category: "PSU", name: "EVGA SuperNOVA 750 G3 750W Gold", icon: BoltIcon },
  { category: "Case", name: "Corsair Carbide SPEC-ALPHA", icon: PcCaseIcon },
  { category: "CPU Cooler", name: "Corsair H100i V2 AIO", icon: FanIcon },
  {
    category: "Monitor",
    name: 'Acer Predator XB271HU 27" QHD 165Hz',
    icon: DisplayIcon,
  },
  {
    category: "Keyboard",
    name: "Corsair K70 RGB LUX MX Brown",
    icon: KeyboardIcon,
  },
  { category: "Mouse", name: "Logitech G502 Hero SE", icon: MouseIcon },
];

// Animation variants for staggering
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.9, y: 15 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

const PcSpecsSection = () => {
  return (
    <motion.section
      id="setup"
      // Use bg-base-200 for contrast
      className="py-16 md:py-24 bg-base-200 rounded-box mb-10 shadow-lg overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={containerVariants} // Apply container variants for staggering children
    >
      <div className="container mx-auto px-4">
        <motion.h2
          // Animate heading separately or use itemVariants
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-center mb-12 md:mb-16"
        >
          My Setup / Gear{" "}
          <ComputerIcon className="inline-block w-8 h-8 ml-2 fill-current" />
        </motion.h2>

        {/* Grid layout for spec items */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
          variants={containerVariants} // This applies stagger to direct children (the motion.div items)
        >
          {specsData.map((spec, index) => (
            <motion.div
              key={index}
              className="flex items-center p-4 bg-base-300 rounded-lg shadow hover:shadow-primary/20 transition-shadow duration-300" // Use base-300 for item cards
              variants={itemVariants} // Apply item variants for individual animation
              whileHover={{ scale: 1.03 }} // Simple scale on hover
              transition={{ type: "spring", stiffness: 400, damping: 15 }} // Add spring to hover
            >
              <spec.icon className="w-8 h-8 mr-4 text-primary flex-shrink-0" />{" "}
              {/* Icon (Primary Color) */}
              <div>
                <div className="text-xs uppercase text-base-content/60 tracking-wider">
                  {spec.category}
                </div>
                <div className="text-base md:text-lg font-medium text-base-content">
                  {spec.name}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default PcSpecsSection;
