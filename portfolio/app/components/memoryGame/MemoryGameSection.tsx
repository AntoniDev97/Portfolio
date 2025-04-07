// app/components/MemoryGameSection.tsx
"use client";

import React, { useState, useEffect, useCallback } from "react";
import { motion } from "motion/react";
import Card from "./Card"; // Import the Card component
// Import the icons you want to use from your LOCAL icons file
import {
  ReactIcon,
  NodejsIcon,
  NextjsIcon,
  TypescriptIcon,
  MongoDbIcon,
  TailwindcssIcon,
} from "../icons/tech-icons";

// Define card structure
interface CardData {
  id: string; // Unique instance ID (e.g., 'react-1', 'react-2')
  value: string; // Identifier for matching pairs (e.g., 'react')
  iconComponent: React.ComponentType<{ className?: string }>;
  isFlipped: boolean;
  isMatched: boolean;
}

// Define the pairs of icons
const iconPairs = [
  { value: "react", icon: ReactIcon },
  { value: "nextjs", icon: NextjsIcon },
  { value: "typescript", icon: TypescriptIcon },
  { value: "nodejs", icon: NodejsIcon },
  { value: "tailwind", icon: TailwindcssIcon },
  { value: "mongodb", icon: MongoDbIcon },
  // Add more pairs here if desired (ensure total is even)
];

// Fisher-Yates Shuffle function
const shuffleArray = (array: CardData[]) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

// Function to create the initial deck
const createDeck = (): CardData[] => {
  const deck: CardData[] = [];
  iconPairs.forEach((pair) => {
    deck.push({
      id: `${pair.value}-1`,
      value: pair.value,
      iconComponent: pair.icon,
      isFlipped: false,
      isMatched: false,
    });
    deck.push({
      id: `${pair.value}-2`,
      value: pair.value,
      iconComponent: pair.icon,
      isFlipped: false,
      isMatched: false,
    });
  });
  return shuffleArray(deck);
};

const MemoryGameSection = () => {
  const [cards, setCards] = useState<CardData[]>([]);
  const [flippedIndexes, setFlippedIndexes] = useState<number[]>([]);
  const [moves, setMoves] = useState(0);
  const [isChecking, setIsChecking] = useState(false);
  const [isGameOver, setIsGameOver] = useState(false);
  const [highScore, setHighScore] = useState<number | null>(null); // Session high score

  const setupGame = useCallback(() => {
    setCards(createDeck());
    setFlippedIndexes([]);
    setMoves(0);
    setIsChecking(false);
    setIsGameOver(false);
    // High score persists across resets in this session
  }, []);

  // Initial setup
  useEffect(() => {
    setupGame();
  }, [setupGame]);

  // --- Effect 1: Check for matches & Set Game Over ---
  // Runs when cards are flipped
  useEffect(() => {
    let timeoutId: NodeJS.Timeout | null = null;

    if (flippedIndexes.length === 2) {
      setIsChecking(true);
      setMoves((prev) => prev + 1); // Increment moves on every attempt

      const [firstIndex, secondIndex] = flippedIndexes;
      // Add checks for card existence before accessing value
      const firstCard = cards[firstIndex];
      const secondCard = cards[secondIndex];

      if (!firstCard || !secondCard) {
        console.error("Card data missing for flipped index.");
        setIsChecking(false);
        setFlippedIndexes([]);
      } else if (firstCard.value === secondCard.value) {
        // Match found
        const updatedCards = cards.map((card) =>
          card.value === firstCard.value
            ? { ...card, isMatched: true, isFlipped: true }
            : card
        );
        setCards(updatedCards); // Update card state
        setFlippedIndexes([]); // Clear flipped immediately
        setIsChecking(false); // Allow clicks again

        // Check for game over *using the just updated state*
        const allMatched = updatedCards.every((card) => card.isMatched);
        if (allMatched) {
          setIsGameOver(true); // Set game over flag, high score handled in separate effect
        }
      } else {
        // No match - flip back after a delay
        timeoutId = setTimeout(() => {
          setCards((prevCards) =>
            prevCards.map((card, index) =>
              index === firstIndex || index === secondIndex
                ? { ...card, isFlipped: false }
                : card
            )
          );
          setFlippedIndexes([]);
          setIsChecking(false);
        }, 1000);
      }
    }

    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId); // Cleanup timeout
      }
    };
  }, [flippedIndexes, cards]);
  // --- End Effect 1 ---

  // --- Effect 2: Update High Score on Game Over ---
  // Runs only when isGameOver state changes
  useEffect(() => {
    if (isGameOver) {
      // Compare final 'moves' state with 'highScore' state
      if (highScore === null || moves < highScore) {
        setHighScore(moves); // Update the high score state
      }
    }
    // This effect correctly depends on the values it reads/uses
  }, [isGameOver, moves, highScore]);
  // --- End Effect 2 ---

  const handleCardClick = (index: number) => {
    if (
      isChecking ||
      cards[index]?.isFlipped ||
      cards[index]?.isMatched ||
      flippedIndexes.length >= 2
    ) {
      return;
    }
    setCards((prevCards) =>
      prevCards.map((card, i) =>
        i === index ? { ...card, isFlipped: true } : card
      )
    );
    setFlippedIndexes((prev) => [...prev, index]);
  };

  // --- JSX Rendering (No changes needed from previous working version) ---
  return (
    <motion.section
      id="game"
      className="py-16 md:py-24 bg-base-100 rounded-box mb-10 overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 text-center">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
        >
          Quick Game?
        </motion.h2>
        <motion.p
          className="mb-8 text-base-content/70"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Test your memory with some tech icons!
        </motion.p>

        <div className="flex flex-wrap justify-center items-center gap-6 mb-8">
          <div className="text-lg">
            Moves: <span className="font-bold text-primary">{moves}</span>
          </div>
          <div className="text-lg">
            Best (Session):{" "}
            <span className="font-bold text-secondary">
              {highScore === null ? "-" : highScore}
            </span>
          </div>
          <button className="btn btn-secondary btn-sm" onClick={setupGame}>
            Reset
          </button>
        </div>

        <motion.div
          className="grid grid-cols-4 md:grid-cols-6 gap-3 md:gap-4 max-w-xl mx-auto"
          initial="hidden"
          animate="visible"
          variants={{ visible: { transition: { staggerChildren: 0.05 } } }}
        >
          {cards.map((card, index) => (
            <motion.div
              key={card.id}
              variants={{
                hidden: { opacity: 0, scale: 0.8 },
                visible: { opacity: 1, scale: 1 },
              }}
            >
              <Card
                {...card}
                isDisabled={isChecking || card.isFlipped || card.isMatched}
                onClick={() => handleCardClick(index)}
              />
            </motion.div>
          ))}
        </motion.div>

        {isGameOver && (
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.5, type: "spring" }}
            className="mt-8 text-2xl font-bold text-success"
          >
            You Win! Final Moves: {moves}{" "}
            {highScore === moves ? "(Best This Session!)" : ""} 🎉
          </motion.div>
        )}
      </div>
    </motion.section>
  );
};

export default MemoryGameSection;
