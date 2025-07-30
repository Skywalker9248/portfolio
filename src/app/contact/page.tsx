'use client';

import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#202123] text-white flex flex-col items-center justify-center px-6 py-20">
      <h1 className="text-4xl font-bold mb-8">📬 Get in Touch</h1>
      <p className="text-gray-300 mb-12 text-center max-w-md">
        Feel free to reach out if you’d like to collaborate, have a question, or just want to connect professionally.
      </p>

      <div className="space-y-6 text-lg">
        <a
          href="mailto:ronsunny19@gmail.com"
          className="flex items-center gap-4 text-gray-300 hover:text-white"
        >
          <FaEnvelope /> ronsunny19@gmail.com
        </a>
        <a
          href="https://github.com/Skywalker9248"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-4 text-gray-300 hover:text-white"
        >
          <FaGithub /> github.com/Skywalker9248
        </a>
        <a
          href="https://www.linkedin.com/in/ron-sunny"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-4 text-gray-300 hover:text-white"
        >
          <FaLinkedin /> linkedin.com/in/ron-sunny
        </a>
      </div>
    </div>
  );
}
