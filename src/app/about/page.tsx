"use client";

import React from "react";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#202123] text-white py-20 w-full mx-w-3xl mx-auto px-[50px]">
      <h1 className="text-4xl font-bold mb-8 text-center">About Me</h1>

      {/* Intro */}
      <section className="mb-12">
        <p className="text-gray-300 text-lg leading-relaxed">
          Hey, I’m Ron — a React developer with{" "}
          <strong>3 years of hands-on experience</strong> building scalable,
          interactive UIs and managing production-grade apps. I work across
          frontend and backend boundaries, delivering full-featured experiences
          with tools like React, Next.js, Redux, Node.js, and Tailwind CSS.
        </p>
      </section>

      {/* Tools */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">What I Use</h2>
        <div className="flex flex-wrap gap-3">
          {[
            "React",
            "Next.js",
            "Node.js",
            "Redux",
            "REST API",
            "Tailwind CSS",
            "Bootstrap",
            "Styled Components",
            "GitHub",
            "Material UI",
          ].map((skill, i) => (
            <span
              key={i}
              className="bg-gray-800 px-4 py-2 rounded text-sm text-gray-200"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>

      {/* Experience */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Real-World Experience</h2>
        <ul className="text-gray-400 space-y-4 list-disc list-inside">
          <li>
            🧾 Co-developed a{" "}
            <strong>QR-based restaurant ordering platform</strong> — enabling
            contactless menu access and order placement directly from the table.
          </li>
          <li>
            💸 Expanded the system into a standalone{" "}
            <strong>QR-based payment app</strong> with integrated gateways like
            UPI, Razorpay, and more.
          </li>
          <li>
            📊 Worked on a business <strong>dashboard</strong>, integrating
            chart libraries to track sales and customer behavior insights.
          </li>
          <li>
            🎯 Designed and implemented a{" "}
            <strong>promotion feature layer</strong> in React — enabling dynamic
            discounts, banners, and campaign logic.
          </li>
        </ul>
      </section>

      {/* Strengths */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">
          What I Bring to the Table
        </h2>
        <ul className="text-gray-400 space-y-3 list-disc list-inside">
          <li>
            📦 Strong foundation in React — including{" "}
            <strong>custom hooks</strong>, state management, and component
            optimization
          </li>
          <li>
            🐞 Solid debugging and <strong>bug-fixing</strong> skills across
            both UI and logic layers
          </li>
          <li>🔌 Experience integrating and consuming REST APIs reliably</li>
          <li>
            🎨 Proficient in CSS frameworks like Tailwind and Bootstrap for
            responsive, accessible designs
          </li>
          <li>🧠 End-to-end ownership: from feature planning to delivery</li>
        </ul>
      </section>

      {/* Personal Highlights */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Beyond the Code</h2>
        <ul className="text-gray-400 space-y-4 list-disc list-inside">
          <li>
            🌐 My <strong>college project</strong> was selected and showcased at
            the <strong>Global Grad Show</strong> — an international platform
            for student innovations.
          </li>
          <li>
            ☁️ I’m actively exploring <strong>Cloud Technologies</strong> and have practical
            experience with <strong>Docker</strong> for containerized dev &
            deployment workflows.
          </li>
          <li>
            🤝 I’ve led project integrations — coordinating with tech leads,
            backend engineers, and designers to ship features smoothly.
          </li>
          <li>
            🤖 Currently learning <strong>Prompt Engineering</strong> to explore
            AI-powered development tools and workflows.
          </li>
        </ul>
      </section>
    </div>
  );
}
