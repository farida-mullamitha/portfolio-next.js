'use client';
import React from 'react';
import { motion } from 'framer-motion';

const AboutSection = () => {
  return (
    <section
      id="about"
      className="relative py-32 bg-black overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-20 right-0 w-[500px] h-[400px] bg-green-500/5 blur-[140px] rounded-full" />

      <div className="relative max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">

        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-8">
            <span className="text-white">About</span>{' '}
            <span className="text-green-400">Me</span>
          </h2>

          <p className="text-gray-300 leading-relaxed text-lg">
            Full Stack Engineer with 1+ year of experience building scalable,
            secure and high-performance web applications. I specialize in
            creating modern frontend systems and reliable backend architectures
            with production-level performance and clean code practices.
          </p>

          <div className="mt-8 h-[2px] w-20 bg-green-400"></div>
        </motion.div>

        {/* RIGHT SIDE CARD */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
          className="relative bg-white/5 border border-green-500/20 rounded-2xl p-10 backdrop-blur-xl hover:border-green-400/40 transition duration-500"
        >
          <h3 className="text-2xl font-semibold text-white mb-6">
            Technical Expertise
          </h3>

          <ul className="space-y-5 text-gray-300 text-base">

            <li>
              <span className="text-green-400 font-semibold">
                Frontend:
              </span>{' '}
              React, Next.js, JavaScript, Tailwind CSS
            </li>

            <li>
              <span className="text-green-400 font-semibold">
                Backend:
              </span>{' '}
              Node.js, Express.js, REST APIs, JWT Authentication
            </li>

            <li>
              <span className="text-green-400 font-semibold">
                Database:
              </span>{' '}
              PostgreSQL, MongoDB, Sequelize
            </li>

            <li>
              <span className="text-green-400 font-semibold">
                DevOps:
              </span>{' '}
              Git, Docker (Basics), Vercel
            </li>

          </ul>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;