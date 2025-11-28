// src/components/ProjectCard.tsx
"use client";

import React from "react";
import { motion } from "motion/react";
import Image from "next/image";

interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
  liveUrl: string;
  repoUrl?: string;
  techStack: string[];
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
      className="group card bg-base-200 shadow-xl overflow-hidden h-full flex flex-col"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut", delay: 0.1 },
      }}
      viewport={{ once: true, amount: 0.3 }}
      whileHover={{
        boxShadow: "0 0 25px 8px rgba(220, 38, 38, 0.4)",
      }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      <figure className="aspect-video overflow-hidden relative">
        <Image
          src={imageUrl}
          alt={`${title} screenshot`}
          width={600}
          height={338}
          className="object-cover w-full h-full transition-transform duration-500 ease-in-out group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out"></div>
      </figure>

      <div className="card-body p-6 flex-grow">
        <h2 className="card-title text-2xl font-semibold">{title}</h2>
        <p className="text-base-content/80 mt-2 mb-4 flex-grow">
          {description}
        </p>
        <div className="card-actions justify-start flex-wrap gap-2 mb-4">
          {techStack.map((tech) => (
            <div key={tech} className="badge badge-secondary badge-outline">
              {tech}
            </div>
          ))}
        </div>
      </div>

      <div className="card-actions justify-end p-6 pt-0 space-x-2">
        <motion.a
          href={liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary btn-sm"
          whileHover={{ scale: 1.1, filter: "brightness(1.1)" }}
          whileTap={{ scale: 0.95 }}
        >
          Live Site
        </motion.a>
        {repoUrl && (
          <motion.a
            href={repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-ghost btn-sm"
            whileHover={{
              scale: 1.1,
              backgroundColor: "rgba(255, 255, 255, 0.1)",
            }}
            whileTap={{ scale: 0.95 }}
          >
            GitHub Repo
          </motion.a>
        )}
      </div>
    </motion.div>
  );
};

export default ProjectCard;
