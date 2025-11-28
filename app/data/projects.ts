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
      "Professional aesthetics clinic website built with a modern tech stack, focusing on clear service presentation and user experience.",
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
  {
    title: "Ethan Proctor Portfolio",
    description:
      "Professional portfolio website for a talented graphic designer, showcasing creative work and design expertise.",
    imageUrl: "/images/fletchPlay.webp",
    liveUrl: "https://www.ethanproctor.co.uk/",
    techStack: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
    ],
  },
  {
    title: "VouchAbout",
    description:
      "Local business advertisement directory helping local businesses connect with their community and grow their presence.",
    imageUrl: "/images/vouchAboutLogo.svg",
    liveUrl: "https://www.vouchabout.co.uk/",
    techStack: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Firebase"
    ],
  },
];