// src/components/GithubRepoSection.tsx

import GithubRepoCard from "./GithubRepoCard";
import { GithubIcon } from "../icons/icons";

const GITHUB_USERNAME = "AntoniDev97";

// Define type for GitHub Repo data (can also be moved to a types file)
interface GithubRepo {
  id: number;
  name: string;
  description: string | null;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  html_url: string;
}

// Fetch GitHub Repos function (specific to this component)
async function getGithubRepos(username: string): Promise<GithubRepo[]> {
  try {
    const res = await fetch(
      `https://api.github.com/users/${username}/repos?sort=pushed&direction=desc&per_page=3`,
      {
        next: { revalidate: 3600 }, // Revalidate data every hour
        // Add Authorization header here if using a token for rate limits
      }
    );
    if (!res.ok) {
      console.error(`GitHub API Error: ${res.status} ${res.statusText}`);
      return [];
    }
    const data = await res.json();
    // Basic validation that data is an array
    return Array.isArray(data) ? (data as GithubRepo[]) : [];
  } catch (error) {
    console.error("Failed to fetch GitHub repos:", error);
    return []; // Return empty array on any fetch error
  }
}

// Make this an async Server Component
export default async function GithubRepoSection() {
  const repos = await getGithubRepos(GITHUB_USERNAME);

  // Don't render section if there's no data
  if (!repos || repos.length === 0) {
    // Optionally render a placeholder or message here
    console.log("No GitHub repos found or fetch failed.");
    return null;
  }

  return (
    <section
      id="github-repos"
      className="py-16 md:py-24 bg-base-200 rounded-box mb-10"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 md:mb-16">
          Latest GitHub Activity
        </h2>
        {/* Grid for Repo Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {repos.map((repo) => (
            <GithubRepoCard key={repo.id} {...repo} />
          ))}
        </div>
        <div className="text-center mt-12">
          <a
            href={`https://github.com/${GITHUB_USERNAME}?tab=repositories`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline btn-secondary" // Use DaisyUI button style
          >
            View All Repositories on GitHub{" "}
            <GithubIcon className="inline-block w-4 h-4 ml-2" />
          </a>
        </div>
      </div>
    </section>
  );
}
