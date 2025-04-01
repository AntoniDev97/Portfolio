// src/components/GithubRepoCard.tsx
"use client";

import React from "react";
import { motion } from "motion/react";
import { StarIcon, CodeBranchIcon } from "../icons/icons";

// Define the expected properties from GitHub API data
interface GithubRepoCardProps {
  name: string;
  description: string | null; // Description can be null
  language: string | null; // Primary language can be null
  stargazers_count: number;
  forks_count: number;
  html_url: string;
}

const GithubRepoCard: React.FC<GithubRepoCardProps> = ({
  name,
  description,
  language,
  stargazers_count,
  forks_count,
  html_url,
}) => {
  return (
    <motion.div
      className="card bg-base-300 shadow-lg overflow-hidden h-full flex flex-col p-6 hover:shadow-primary/30 transition-shadow duration-300"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="flex-grow mb-4">
        <a
          href={html_url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-lg font-semibold text-primary hover:underline mb-2 block truncate"
        >
          {name}
        </a>
        <p className="text-sm text-base-content/70 mb-4 line-clamp-3">
          {/* Limit description lines */}
          {description || "No description provided."}
        </p>
      </div>
      <div className="flex justify-between items-center text-sm text-base-content/60">
        <div className="flex items-center gap-4">
          {language && (
            <span className="badge badge-accent badge-sm font-mono">
              {language}
            </span>
          )}
          <span className="flex items-center gap-1">
            <StarIcon className="w-4 h-4" />
            {stargazers_count}
          </span>
          <span className="flex items-center gap-1">
            <CodeBranchIcon className="w-4 h-4" />
            {forks_count}
          </span>
        </div>
        <a
          href={html_url}
          target="_blank"
          rel="noopener noreferrer"
          className="link link-hover text-xs" // Simple link style
        >
          View Repo →
        </a>
      </div>
    </motion.div>
  );
};

export default GithubRepoCard;
