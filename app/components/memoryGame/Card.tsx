// app/components/memoryGame/Card.tsx
"use client";

import React from "react";
import { motion } from "motion/react";

interface CardProps {
  id: string; // Unique ID for the card instance
  iconComponent: React.ComponentType<{ className?: string }>; // The icon to display
  isFlipped: boolean;
  isMatched: boolean;
  isDisabled: boolean; // Prevent clicking if already matched or checking pair
  onClick: () => void;
}

const Card: React.FC<CardProps> = ({
  iconComponent: Icon,
  isFlipped,
  isMatched,
  isDisabled,
  onClick,
}) => {
  const flipVariants = {
    flipped: { rotateY: 180 },
    unflipped: { rotateY: 0 },
  };

  return (
    <motion.div
      className="aspect-square cursor-pointer"
      onClick={() =>
        !isDisabled && !isFlipped && !isMatched ? onClick() : null
      }
      style={{ perspective: 1000 }}
      // --- Add Hover Effect ---
      // Apply only if the card is interactive (not matched or already flipped)
      whileHover={
        !isFlipped && !isMatched && !isDisabled ? { scale: 1.08, y: -3 } : {}
      }
      // ---
    >
      <motion.div
        className="relative w-full h-full rounded-lg shadow-md"
        style={{ transformStyle: "preserve-3d" }}
        variants={flipVariants}
        animate={isFlipped || isMatched ? "flipped" : "unflipped"}
        transition={{ duration: 0.4, ease: "easeInOut" }}
      >
        {/* Card Back */}
        <div
          className={`absolute w-full h-full bg-secondary rounded-lg flex items-center justify-center p-2 ${
            isFlipped || isMatched ? "z-0" : "z-10"
          }`}
          style={{ backfaceVisibility: "hidden" }}
        >
          <span className="text-3xl text-secondary-content opacity-50">?</span>
        </div>

        {/* Card Front */}
        <div
          className={`absolute w-full h-full bg-base-300 rounded-lg flex items-center justify-center p-3 ${
            isFlipped || isMatched ? "z-10" : "z-0"
          }`}
          style={{
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
            opacity: isMatched ? 0.5 : 1,
          }}
        >
          <Icon className="w-3/5 h-3/5 text-primary" />
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Card;
