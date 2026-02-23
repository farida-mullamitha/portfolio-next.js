'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';
import GithubIcon from '../../../public/github-icon.svg';
import LinkedinIcon from '../../../public/linkedin-icon.svg';

const HeroSection = () => {
  return (
    <section className="relative text-white overflow-hidden">

      {/* Green Glow Background */}
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-green-500/10 blur-[140px] rounded-full"></div>
      <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-emerald-400/10 blur-[140px] rounded-full"></div>

      <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16 py-28 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="z-10 text-center lg:text-left"
        >
          {/* Badge */}
          <div className="inline-block px-4 py-1 mb-6 rounded-full bg-green-500/10 border border-green-500/20 text-sm text-green-400">
            🚀 Available for Full Stack Roles
          </div>

          <p className="text-gray-400 text-lg">Hi, I'm</p>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mt-2 leading-tight">
            Farida Mullamitha
          </h1>

          <h2 className="mt-5 text-2xl sm:text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-500">
            Full Stack Engineer building scalable, secure systems.
          </h2>

          <p className="text-gray-400 text-base sm:text-lg mt-6 max-w-xl mx-auto lg:mx-0">
            1+ year experience designing secure authentication systems,
            optimizing React applications, and building production-grade APIs
            with Node.js & PostgreSQL.
          </p>

          {/* Buttons */}
          <div className="flex gap-4 flex-wrap mt-10 justify-center lg:justify-start">
            <Link
              href="/#projects"
              className="px-8 py-3 rounded-full bg-gradient-to-r from-green-500 to-emerald-600 text-black font-semibold shadow-lg shadow-green-500/20 hover:shadow-green-500/40 transition duration-300 hover:scale-105"
            >
              View Projects →
            </Link>

            <Link
              href="https://drive.google.com/file/d/1rVE2ltAI00T8JCZnxHlta0qkUNzQsVCI/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 rounded-full border border-gray-700 text-white hover:border-green-400 transition duration-300"
            >
              Download CV
            </Link>
          </div>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-3 mt-10 justify-center lg:justify-start">
            {['React', 'Next.js', 'Node.js', 'TypeScript', 'PostgreSQL'].map((tech) => (
              <span
                key={tech}
                className="px-4 py-1.5 bg-[#0f0f0f] rounded-full text-sm text-gray-300 border border-gray-800 hover:border-green-400 transition duration-300"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-6 mt-10 justify-center lg:justify-start">
            <a
              href="https://github.com/farida-mullamitha"
              target="_blank"
              rel="noopener noreferrer"
              className="opacity-70 hover:opacity-100 hover:scale-110 transition duration-300"
            >
              <Image src={GithubIcon} alt="GitHub" width={28} height={28} />
            </a>

            <a
              href="https://linkedin.com/in/farida-mullamitha"
              target="_blank"
              rel="noopener noreferrer"
              className="opacity-70 hover:opacity-100 hover:scale-110 transition duration-300"
            >
              <Image src={LinkedinIcon} alt="LinkedIn" width={28} height={28} />
            </a>
          </div>
        </motion.div>

        {/* RIGHT SIDE IMAGE */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="flex justify-center z-10"
        >
          <motion.div
            animate={{
              boxShadow: [
                '0 0 40px rgba(34,197,94,0.3)',
                '0 0 70px rgba(34,197,94,0.5)',
                '0 0 40px rgba(34,197,94,0.3)',
              ],
            }}
            transition={{ duration: 4, repeat: Infinity }}
            className="rounded-full bg-gradient-to-br from-green-500/20 to-emerald-500/20 p-1 w-[280px] h-[280px] lg:w-[400px] lg:h-[400px] relative"
          >
            <div className="rounded-full bg-[#0f0f0f] w-full h-full relative overflow-hidden">
              <Image
                src="/images/hero-image.png"
                alt="Farida Mullamitha"
                fill
                className="object-cover"
                priority
              />
            </div>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
};

export default HeroSection;