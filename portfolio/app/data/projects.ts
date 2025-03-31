// src/data/projects.ts

// Define a type for your project data structure
export interface ProjectType {
  title: string;
  description: string;
  imageUrl: string;
  liveUrl: string;
  repoUrl?: string; // Optional repository URL
  techStack: string[];
}

// Define and export your projects array
export const projects: ProjectType[] = [
  {
    title: "DC Reflections",
    description:
      "Professional aesthetics clinic website built with a modern tech stack, focusing on clear service presentation and user experience.", // Keep your updated description
    imageUrl: "/images/dcreflections-homepage-screenshot.png",
    liveUrl: "https://www.dcreflections.co.uk/",
    //repoUrl: "https://github.com/AntoniDev97",
    techStack: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "DaisyUI",
      "Framer Motion",
      "MongoDB",
    ],
  },
  // Add future project objects here:
  // {
  //   title: "Another Project",
  //   description: "Description...",
  //   imageUrl: "/images/another-project.png",
  //   liveUrl: "...",
  //   techStack: ["Tech1", "Tech2"],
  // },
];