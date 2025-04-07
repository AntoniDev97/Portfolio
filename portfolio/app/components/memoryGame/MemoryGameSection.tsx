// src/components/MemoryGameSection.tsx
"use client";

import React, { useState, useEffect, useCallback } from "react";
// --- Correct import for Framer Motion ---
import { motion } from "motion/react";
import Card from "./Card";
import {
  ReactIcon,
  NodejsIcon,
  NextjsIcon,
  TypescriptIcon,
  MongoDbIcon,
  TailwindcssIcon,
} from "../icons/tech-icons"; // Adjust path as needed

// Define card structure
interface CardData {
  id: string;
  value: string;
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
    // highScore persists across resets in the same session
  }, []);

  // Initial setup
  useEffect(() => {
    setupGame();
  }, [setupGame]);

  // --- Check for matches when two cards are flipped ---
  useEffect(() => {
    // Only proceed if exactly two cards are flipped
    if (flippedIndexes.length === 2) {
      setIsChecking(true); // Prevent further clicks
      setMoves((prev) => prev + 1); // Increment move count for the attempt

      const [firstIndex, secondIndex] = flippedIndexes;
      const firstCard = cards[firstIndex];
      const secondCard = cards[secondIndex];

      if (firstCard.value === secondCard.value) {
        // Match found
        const updatedCards = cards.map(
          (card) =>
            card.value === firstCard.value
              ? { ...card, isMatched: true, isFlipped: true }
              : card // Keep matched cards flipped
        );
        setCards(updatedCards);
        setFlippedIndexes([]); // Clear flipped cards immediately
        setIsChecking(false); // Allow clicks again

        // Check for game over using the updated card state
        const allMatched = updatedCards.every((card) => card.isMatched);
        if (allMatched) {
          setIsGameOver(true);
          // Update High Score State (No LocalStorage)
          const finalMoves = moves + 1; // Use updated moves count
          if (highScore === null || finalMoves < highScore) {
            setHighScore(finalMoves);
          }
        }
      } else {
        // No match - flip back after a delay
        const timeoutId = setTimeout(() => {
          setCards((prevCards) =>
            prevCards.map((card, index) =>
              // Only flip back cards that are in the current flippedIndexes pair
              index === firstIndex || index === secondIndex
                ? { ...card, isFlipped: false }
                : card
            )
          );
          setFlippedIndexes([]); // Clear flipped cards after timeout
          setIsChecking(false); // Allow clicks again after timeout
        }, 1000); // 1 second delay
        // Cleanup timeout if dependencies change before timeout finishes
        return () => clearTimeout(timeoutId);
      }
    }
    // --- Dependency Array ---
    // This effect should ONLY re-run when the cards being evaluated change,
    // which happens when `flippedIndexes` gets 2 items, or `cards` state updates.
  }, [flippedIndexes, cards]);
  // --- End match checking effect ---

  const handleCardClick = (index: number) => {
    // Prevent clicking under various conditions
    if (
      isChecking ||
      cards[index].isFlipped ||
      cards[index].isMatched ||
      flippedIndexes.length >= 2
    ) {
      return;
    }

    // Flip the clicked card
    setCards((prevCards) =>
      prevCards.map((card, i) =>
        i === index ? { ...card, isFlipped: true } : card
      )
    );

    // Add index to the list of flipped cards
    setFlippedIndexes((prev) => [...prev, index]);
  };

  // --- JSX Rendering ---
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
        {/* Heading and Intro Text */}
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

        {/* Game Stats & Controls */}
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

        {/* Game Grid */}
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
                // Disable clicking if checking pair OR if card is already revealed
                isDisabled={isChecking || card.isFlipped || card.isMatched}
                onClick={() => handleCardClick(index)}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Game Over Message */}
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
