// app/components/SkillsSection.tsx
"use client";

import React from "react";
import { motion } from "motion/react";

// --- Import ONLY from the new tech-icons file ---
import {
  HTMLIcon,
  ReactIcon,
  ReactIconTitle,
  NodejsIcon,
  MySqlIcon,
  DatabaseIcon,
  ServerIcon,
  CloudIcon,
  MotionDevIcon,
  BootstrapIcon,
  NextjsIcon,
  JavascriptIcon,
  TypescriptIcon,
  MongoDbIcon,
  SqlServerIcon,
  CsharpIcon,
  DotNetIcon,
  TailwindcssIcon,
  DaisyuiIcon,
  PostgresqlIcon,
  SupabaseIcon,
  StripeIcon,
  VercelIcon,
} from "./icons/tech-icons";
import { GithubIcon } from "./icons/icons";

// Define Skill structure
interface Skill {
  name: string;
  icon: React.ComponentType<{ className?: string }>;
}

// Define Categories and Skills (CUSTOMIZE THIS!)
// References the icon components imported above
const skillCategories: {
  title: string;
  icon: React.ComponentType<{ className?: string }>;
  skills: Skill[];
}[] = [
  {
    title: "Frontend",
    icon: ReactIconTitle,
    skills: [
      { name: "React", icon: ReactIcon },
      { name: "Next.js", icon: NextjsIcon },
      { name: "TypeScript", icon: TypescriptIcon },
      { name: "Tailwind CSS", icon: TailwindcssIcon },
      { name: "DaisyUI", icon: DaisyuiIcon },
      { name: "Motion", icon: MotionDevIcon },
      { name: "Bootstrap", icon: BootstrapIcon },
      { name: "HTML", icon: HTMLIcon },
    ],
  },
  {
    title: "Backend & Languages",
    icon: ServerIcon,
    skills: [
      { name: "C#", icon: CsharpIcon },
      { name: ".NET / ASP.NET MVC", icon: DotNetIcon },
      { name: "Node.js", icon: NodejsIcon },
      { name: "Javascript", icon: JavascriptIcon },
      // TypeScript could also fit here
    ],
  },
  {
    title: "Databases",
    icon: DatabaseIcon,
    skills: [
      { name: "PostgreSQL", icon: PostgresqlIcon },
      { name: "SQL Server", icon: SqlServerIcon },
      { name: "MongoDB", icon: MongoDbIcon },
      { name: "MySQL", icon: MySqlIcon },
    ],
  },
  {
    // The production stack behind TCG Drop
    title: "Platforms & Payments",
    icon: CloudIcon,
    skills: [
      { name: "Supabase", icon: SupabaseIcon },
      { name: "Stripe", icon: StripeIcon },
      { name: "Vercel", icon: VercelIcon },
      { name: "GitHub", icon: GithubIcon },
    ],
  },
];

// Animation Variants (remain the same)
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const SkillsSection = () => {
  return (
    <motion.section
      id="skills"
      className="py-16 md:py-24 bg-base-100 rounded-box mb-10"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
    >
      <div className="container mx-auto px-4">
        <motion.h2
          variants={itemVariants}
          className="text-3xl md:text-4xl font-bold text-center mb-12 md:mb-16"
        >
          My Tech Stack & Skills
        </motion.h2>

        {/* 2x2 from md up: four narrow columns cut labels off ("Postgre...") */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
          {skillCategories.map((category) => (
            <motion.div
              key={category.title}
              variants={itemVariants}
              className="bg-base-200 p-6 rounded-lg shadow-md flex flex-col"
            >
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2 text-primary">
                <category.icon className="w-5 h-5 " />
                {category.title}
              </h3>
              <div className="grid grid-cols-2 gap-4 flex-grow content-start">
                {category.skills.map((skill) => (
                  <motion.div
                    key={skill.name}
                    className="flex items-center gap-2 p-2 bg-base-300 rounded hover:bg-secondary hover:text-secondary-content transition-colors duration-200 cursor-default"
                    whileHover={{ scale: 1.05 }}
                    title={skill.name}
                  >
                    <skill.icon className="w-5 h-5 flex-shrink-0 text-accent" />
                    <span className="text-sm truncate">{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default SkillsSection;
