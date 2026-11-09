// app/components/FeaturedProject.tsx
"use client";

import React from "react";
import Image from "next/image";
import { motion } from "motion/react";
import type { FeaturedProjectType } from "../data/projects";
import { CheckCircleIcon, ExternalLinkIcon } from "./icons/icons";

// Full-width block for the flagship project: a browser-framed screenshot,
// what it is, my role, engineering highlights, tech stack and a live link.
const FeaturedProject = ({ project }: { project: FeaturedProjectType }) => {
  // "https://tcgdrop.co.uk/" -> "tcgdrop.co.uk" for the button and frame
  const host = new URL(project.liveUrl).hostname.replace(/^www\./, "");

  return (
    <motion.article
      aria-labelledby="featured-project-title"
      className="relative overflow-hidden rounded-box bg-base-200 p-6 md:p-10 shadow-xl ring-1 ring-primary/30"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {/* Soft red glow in the corner (decorative) */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-primary/15 blur-3xl"
      />

      {/* --- Intro: label, title, role, summary and live link --- */}
      <div className="relative flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-3xl">
          <div className="flex flex-wrap items-center gap-3">
            <span className="badge badge-primary font-semibold uppercase tracking-wider">
              Flagship project
            </span>
            <span className="inline-flex items-center gap-2 text-sm text-base-content/80">
              <span className="relative flex h-2.5 w-2.5" aria-hidden="true">
                <span className="absolute inline-flex h-full w-full rounded-full bg-success opacity-75 motion-safe:animate-ping" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-success" />
              </span>
              {project.status}
            </span>
          </div>

          <h3
            id="featured-project-title"
            className="mt-4 text-4xl md:text-5xl font-bold tracking-tight"
          >
            {project.title}
          </h3>
          <p className="mt-2 font-mono text-sm uppercase tracking-wider text-accent text-balance">
            {project.role}
          </p>
          <p className="mt-4 text-lg leading-relaxed text-base-content/80 text-pretty">
            {project.description}
          </p>
        </div>

        <motion.a
          href={project.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary shrink-0 self-start shadow-lg lg:self-auto"
          whileHover={{
            scale: 1.05,
            y: -2,
            boxShadow: "0 5px 15px rgba(220, 38, 38, 0.3)",
          }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 300, damping: 15 }}
        >
          Visit {host}
          <ExternalLinkIcon className="h-4 w-4" />
          <span className="sr-only">(opens in a new tab)</span>
        </motion.a>
      </div>

      {/* --- Screenshot + stack | highlights --- */}
      <div className="relative mt-8 grid gap-8 lg:grid-cols-2 lg:items-center lg:gap-10">
        <div>
          {/* Browser-style frame so the screenshot reads as a live website */}
          <div className="overflow-hidden rounded-xl border border-base-300 bg-base-300 shadow-2xl">
            <div className="flex items-center gap-2 px-4 py-2.5" aria-hidden="true">
              <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
              <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
              <span className="h-3 w-3 rounded-full bg-[#28c840]" />
              <span className="ml-3 flex-1 truncate rounded-md bg-base-100 px-3 py-1 text-center font-mono text-xs text-base-content/60">
                {host}
              </span>
            </div>
            <Image
              src={project.imageUrl}
              alt={project.imageAlt}
              width={1600}
              height={900}
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="h-auto w-full"
            />
          </div>

          <ul className="mt-6 flex flex-wrap gap-2" aria-label="Tech stack">
            {project.techStack.map((tech) => (
              <li key={tech} className="badge badge-accent badge-outline">
                {tech}
              </li>
            ))}
          </ul>
        </div>

        <ul className="space-y-4">
          {project.highlights.map((highlight) => (
            <li key={highlight.title} className="flex gap-3">
              <CheckCircleIcon className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
              <p className="leading-relaxed text-base-content/80 text-pretty">
                <span className="font-semibold text-base-content">
                  {highlight.title}.
                </span>{" "}
                {highlight.text}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </motion.article>
  );
};

export default FeaturedProject;
