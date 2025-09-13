// app/projects/page.tsx
import React from "react";
import Image from "next/image";

interface Project {
  title: string;
  description: string;
  tech: string[];
  github?: string;
  demo?: string;
  image?: string; // optional screenshot
  featured?: boolean;
}

const projects: Project[] = [
  {
    title: "Habit Calendar Tracker",
    description:
      "React + Firebase app for daily habit tracking with streaks, charts, and a color-coded calendar. Authentication via Google Login.",
    tech: ["React", "Firebase", "Charts", "React Date Picker", "Auth"],
    demo: "https://calendar-tracker-nine.vercel.app/",
    featured: true,
    image: "/calender-preview.png",
  },
  {
    title: "Digital Clock UI",
    description:
      "Multiple clock styles (7-segment, dot-matrix) built with React + TypeScript. Demonstrates custom rendering logic and modular component design.",
    tech: ["React", "TypeScript", "CSS", "Canvas"],
    github: "https://github.com/Skywalker9248/clocks",
    demo: "https://clocks-pi.vercel.app/",
    featured: false,
  },
  {
    title: "Calculator App",
    description:
      "A simple calculator app built with React to show consistency in building small utilities.",
    tech: ["React", "CSS"],
    github: "https://github.com/Skywalker9248/ReactCalc",
    demo: "https://reactcalc-alpha.vercel.app/",
    featured: false,
  },
];

const ProjectsPage: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-12 text-center">My Projects</h1>

      {/* Featured Project */}
      {projects
        .filter((p) => p.featured)
        .map((project) => (
          <div
            key={project.title}
            className="mb-16 p-6 border rounded-xl shadow-lg bg-white dark:bg-gray-900 hover:shadow-2xl hover:scale-[1.01] transition-all duration-300"
          >
            {project.image && (
              <div className="mb-4 max-w-[300px] mx-auto"> {/* Added container with max width */}
                <Image
                  src={project.image}
                  alt={project.title}
                  width={300}
                  height={650}
                  className="rounded-lg object-contain" /* Added object-contain */
                  priority
                />
              </div>
            )}
            <h2 className="text-3xl font-semibold mb-3">{project.title}</h2>
            <p className="mb-3 text-gray-700 dark:text-gray-300">
              {project.description}
            </p>
            <p className="mb-5 font-mono text-sm text-gray-600 dark:text-gray-400">
              Tech: {project.tech.join(", ")}
            </p>
            <div className="flex flex-wrap gap-3">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition"
                >
                  GitHub
                </a>
              )}
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-500 transition"
                >
                  Live Demo
                </a>
              )}
            </div>
          </div>
        ))}

      {/* Side Projects */}
      <h2 className="text-3xl font-semibold mb-8">Side Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects
          .filter((p) => !p.featured)
          .map((project) => (
            <div
              key={project.title}
              className="p-5 border rounded-xl shadow-md bg-white dark:bg-gray-900 hover:shadow-xl hover:scale-[1.02] transition-all duration-300"
            >
              {project.image && (
                <div className="mb-3 max-w-[200px] mx-auto"> {/* Added container with max width */}
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={200}
                    height={433}
                    className="rounded-md object-contain" /* Added object-contain */
                    priority
                  />
                </div>
              )}
              <h3 className="text-xl font-medium mb-2">{project.title}</h3>
              <p className="mb-2 text-gray-700 dark:text-gray-300">
                {project.description}
              </p>
              <p className="mb-4 font-mono text-sm text-gray-600 dark:text-gray-400">
                Tech: {project.tech.join(", ")}
              </p>
              <div className="flex flex-wrap gap-3">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1.5 bg-gray-800 text-white rounded-md hover:bg-gray-700 transition text-sm"
                  >
                    GitHub
                  </a>
                )}
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1.5 bg-blue-600 text-white rounded-md hover:bg-blue-500 transition text-sm"
                  >
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default ProjectsPage;
