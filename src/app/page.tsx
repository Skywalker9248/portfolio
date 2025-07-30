"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiRedux,
  SiPostman,
  SiTailwindcss,
  SiBootstrap,
  SiMui,
} from "react-icons/si";

// Skill list
const skills = [
  { name: "React", icon: <SiReact size={20} /> },
  { name: "Next.js", icon: <SiNextdotjs size={20} /> },
  { name: "Node.js", icon: <SiNodedotjs size={20} /> },
  { name: "Redux", icon: <SiRedux size={20} /> },
  { name: "REST API", icon: <SiPostman size={20} /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss size={20} /> },
  { name: "Bootstrap", icon: <SiBootstrap size={20} /> },
  { name: "Material UI", icon: <SiMui size={20} /> },
];

export default function Home() {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToProfile = () => {
    const profile = document.getElementById("profile");
    if (profile) {
      profile.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="relative min-h-[100vh] bg-[#202123] text-white">
      <AnimatePresence>
        {!isScrolled && (
          <motion.div
            initial={{ opacity: 1, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -100, scale: 0.95 }}
            transition={{ duration: 0.6 }}
            className="fixed top-0 left-0 right-0 h-screen flex items-center justify-center bg-[#111] text-white z-50"
          >
            <div className="relative min-h-screen min-w-screen flex items-center justify-center overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-[#0f172a] to-black z-0" />

              <div className="relative z-10 text-center px-4">
                <h1 className="text-5xl font-bold mb-4">
                  Hi, I&#39;m Ron Sunny 👋
                </h1>
                <p className="text-xl text-gray-400 mb-6">
                  React Developer focused on building clean, functional web apps
                  using modern tools like Next.js, Redux, and Node.js.
                </p>
                <div className="flex justify-center gap-4 flex-wrap">
                  <button
                    onClick={scrollToProfile}
                    className="bg-white text-black px-6 py-2 rounded hover:bg-gray-200 transition cursor-pointer"
                  >
                    My Profile
                  </button>
                  <a
                    href="/resume.pdf"
                    className="border border-white text-white px-6 py-2 rounded hover:bg-white hover:text-black transition"
                    download
                  >
                    Download Resume
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <div
        className="pt-[100vh] bg-[#202123] text-center max-w-2xl mx-auto px-4 pb-[50px]"
        id="content"
      >
        <div className="mb-20">
          <h2 className="text-3xl font-semibold mb-4">
            Welcome to My Portfolio
          </h2>
          <p className="text-gray-400">
            Scroll through to explore my tech stack, background, and the
            projects I&#39;ve worked on.
          </p>
        </div>
        <div id="profile">
          <h3 className="text-2xl font-semibold mb-4">Tech Stack</h3>
          <p className="text-gray-400 mb-6">
            I work mainly with React, and have experience with REST APIs, state
            management, styling libraries, and backend basics.
          </p>

          <div className="grid sm:grid-cols-2 gap-4 mt-6">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="group bg-gray-800 text-gray-100 px-4 py-3 rounded flex justify-between items-center shadow hover:bg-gray-700 transition"
              >
                <span className="text-sm">{skill.name}</span>
                <span className="text-gray-300 transition-transform duration-500 group-hover:rotate-[360deg]">
                  {skill.icon}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
