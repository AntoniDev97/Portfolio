// src/app/page.tsx

import Hero from "./components/Hero";
import ProjectCard from "./components/ProjectCard";
import { projects } from "./data/projects";
import GithubRepoSection from "./components/githubRepo/GithubRepoSection";
import AboutMe from "./components/AboutMe";
import ContactSection from "./components/ContactSection";

export default function HomePage() {
  return (
    <>
      <Hero />

      {/* --- Projects Section --- */}
      <section id="projects" className="py-16 md:py-24 bg-base-100 rounded-box">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 md:mb-16">
            Featured Project
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-8 max-w-2xl mx-auto">
            {/* Map over the imported projects array */}
            {projects.map((project, index) => (
              <ProjectCard
                key={index} // Using index is okay for static lists, consider unique ID if data changes
                title={project.title}
                description={project.description}
                imageUrl={project.imageUrl}
                liveUrl={project.liveUrl}
                repoUrl={project.repoUrl}
                techStack={project.techStack}
              />
            ))}
          </div>
        </div>
      </section>
      {/* --- End Projects Section --- */}

      {/* --- About Me Section --- */}
      <AboutMe />

      {/* --- Dynamic GitHub Section (Render the dedicated component) --- */}
      <GithubRepoSection />

      {/* --- Contact Section Component --- */}
      <ContactSection />
    </>
  );
}
