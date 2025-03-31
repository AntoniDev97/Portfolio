// src/components/ProjectCard.tsx
"use client";

import React from "react";
import { motion } from "motion/react";
import Image from "next/image";

// Define the expected properties for the card
interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string; // URL for the project screenshot
  liveUrl: string; // URL to the live site
  repoUrl?: string; // Optional URL to the code repository
  techStack: string[]; // Array of technologies used
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  imageUrl,
  liveUrl,
  repoUrl,
  techStack,
}) => {
  return (
    <motion.div
      className="card bg-base-200 shadow-xl overflow-hidden h-full flex flex-col" // DaisyUI card, theme bg, shadow, ensure flex column for footer alignment
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }} // Animate when it comes into view
      viewport={{ once: true, amount: 0.3 }} // Trigger animation once, when 30% visible
      transition={{ duration: 0.6, ease: "easeOut" }}
      whileHover={{ y: -5, boxShadow: "0 10px 20px rgba(0, 0, 0, 0.3)" }} // Subtle lift and shadow on hover
    >
      <figure className="aspect-video overflow-hidden">
        {/* Use figure for semantic image container */}
        {/* Use Next.js Image component */}
        <Image
          src={imageUrl}
          alt={`${title} screenshot`}
          width={600} // Provide appropriate width
          height={338} // Provide corresponding height (for 16:9)
          className="object-cover w-full h-full transition-transform duration-300 ease-in-out group-hover:scale-105" // Basic zoom on hover parent
          priority // Prioritize loading if it's one of the first images
        />
      </figure>
      <div className="card-body p-6 flex-grow">
        {/* Card content area, make it grow */}
        <h2 className="card-title text-2xl font-semibold">{title}</h2>
        <p className="text-base-content/80 mt-2 mb-4 flex-grow">
          {description}
        </p>
        {/* Allow paragraph to grow */}
        <div className="card-actions justify-start flex-wrap gap-2 mb-4">
          {/* Tech stack badges */}
          {techStack.map((tech) => (
            // Using secondary color (burgundy) for badges
            <div key={tech} className="badge badge-secondary badge-outline">
              {tech}
            </div>
          ))}
        </div>
      </div>
      {/* Actions pushed to the bottom */}
      <div className="card-actions justify-end p-6 pt-0">
        {/* Links/Buttons area */}
        <a
          href={liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary btn-sm" // Red button
        >
          Live Site
        </a>
        {repoUrl && ( // Conditionally render repo button if URL exists
          <a
            href={repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-ghost btn-sm" // Less prominent button
          >
            GitHub Repo
          </a>
        )}
      </div>
    </motion.div>
  );
};

export default ProjectCard;
