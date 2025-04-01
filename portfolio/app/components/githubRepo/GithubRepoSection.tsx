// src/components/GithubRepoSection.tsx

import GithubRepoCard from "./GithubRepoCard";
import { GithubIcon, BookmarkIcon, FollowersIcon } from "../icons/icons";

// --- IMPORTANT: Replace with your GitHub username ---
const GITHUB_USERNAME = "AntoniDev97"; // Updated with your username
// ---

// Define types for API data
interface GithubRepo {
  id: number;
  name: string;
  description: string | null;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  html_url: string;
}

interface GithubUser {
  public_repos: number;
  followers: number;
}

// Fetch GitHub Repos function
async function getGithubRepos(username: string): Promise<GithubRepo[]> {
  // Keep cache revalidation
  const revalidateTime = 3600; // 1 hour
  try {
    const res = await fetch(
      `https://api.github.com/users/${username}/repos?sort=pushed&direction=desc&per_page=3`,
      {
        next: { revalidate: revalidateTime },
        // Add Authorization header here if using a token
      }
    );
    if (!res.ok) throw new Error(`GitHub API Error (Repos): ${res.status}`);
    const data = await res.json();
    return Array.isArray(data) ? (data as GithubRepo[]) : [];
  } catch (error) {
    console.error("Failed to fetch GitHub repos:", error);
    return [];
  }
}

// Fetch GitHub User Stats function
async function getGithubUser(username: string): Promise<GithubUser | null> {
  const revalidateTime = 3600 * 6; // Revalidate user stats less often (e.g., 6 hours)
  try {
    const res = await fetch(`https://api.github.com/users/${username}`, {
      next: { revalidate: revalidateTime },
      // Add Authorization header here if using a token
    });
    if (!res.ok) throw new Error(`GitHub API Error (User): ${res.status}`);
    const data = await res.json();
    // Select only the fields we need
    return {
      public_repos: data.public_repos,
      followers: data.followers,
    } as GithubUser;
  } catch (error) {
    console.error("Failed to fetch GitHub user data:", error);
    return null;
  }
}

// Make this an async Server Component
export default async function GithubRepoSection() {
  // Fetch data concurrently
  const [repos, userStats] = await Promise.all([
    getGithubRepos(GITHUB_USERNAME),
    getGithubUser(GITHUB_USERNAME),
  ]);

  // Determine if we have anything to show
  const hasRepos = repos && repos.length > 0;
  const hasStats = userStats !== null;

  // Don't render section if all fetches failed
  if (!hasRepos && !hasStats) {
    console.log("No GitHub repos or user stats found / fetch failed.");
    return null;
  }

  return (
    <section
      id="github-activity" // Renamed ID slightly
      className="py-16 md:py-24 bg-base-200 rounded-box mb-10"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
          GitHub Insights
        </h2>

        {/* --- Display Stats --- */}
        {hasStats && (
          <div className="flex justify-center items-center gap-6 md:gap-10 mb-12 md:mb-16 text-center">
            <div className="text-center">
              <BookmarkIcon className="w-6 h-6 mx-auto mb-1 text-secondary" />{" "}
              {/* Use Icon */}
              <div className="text-2xl font-bold">{userStats.public_repos}</div>
              <div className="text-sm text-base-content/70">Repositories</div>
            </div>
            <div className="text-center">
              <FollowersIcon className="w-6 h-6 mx-auto mb-1 text-secondary" />{" "}
              {/* Use Icon */}
              <div className="text-2xl font-bold">{userStats.followers}</div>
              <div className="text-sm text-base-content/70">Followers</div>
            </div>
            {/* Add more stats here if needed */}
          </div>
        )}
        {/* --- End Stats Display --- */}

        {/* --- Display Repo Cards --- */}
        {hasRepos && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {repos.map((repo) => (
              <GithubRepoCard key={repo.id} {...repo} />
            ))}
          </div>
        )}
        {/* --- End Repo Cards --- */}

        <div className="text-center mt-12">
          <a
            href={`https://github.com/${GITHUB_USERNAME}?tab=repositories`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline btn-secondary" // Kept secondary outline
          >
            View All Repositories on GitHub{" "}
            <GithubIcon className="inline-block w-4 h-4 ml-2" />
          </a>
        </div>
      </div>
    </section>
  );
}
