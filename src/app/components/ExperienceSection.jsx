'use client';
import React from 'react';
import { motion } from 'framer-motion';

const ExperienceSection = () => {
  return (
    <section id="experience" className="relative py-28 bg-black overflow-hidden">
      {/* Background Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-green-500/5 blur-[140px] rounded-full" />

      <div className="relative max-w-6xl mx-auto px-6">
        <h2 className="text-center text-4xl sm:text-5xl font-bold mb-16">
          <span className="text-white">Work</span> <span className="text-green-400">Experience</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Netviss */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white/5 border border-green-500/20 rounded-2xl p-8 backdrop-blur-xl hover:border-green-400/40 transition duration-500 hover:-translate-y-2"
          >
            <h3 className="text-xl font-bold text-white mb-2">Full Stack Engineer | Netviss</h3>
            <span className="text-green-400 text-sm">Feb 2025 – Present</span>

            <p className="text-gray-300 mt-4 leading-relaxed">
              Working across frontend and backend systems to build scalable, secure, and production-grade web
              applications. Contributing to architecture design, API development, performance optimization, and
              deployment workflows while ensuring clean code practices and system reliability.
            </p>
          </motion.div>

          {/* Rethinking Web */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="bg-white/5 border border-green-500/20 rounded-2xl p-8 backdrop-blur-xl hover:border-green-400/40 transition duration-500 hover:-translate-y-2"
          >
            <h3 className="text-xl font-bold text-white mb-2">Full Stack Web Developer Intern | Rethinking Web</h3>
            <span className="text-green-400 text-sm">June 2024 - September 2024</span>

            <p className="text-gray-300 mt-4 leading-relaxed">
              Contributed to frontend and backend development using React.js, Tailwind CSS, Node.js, and Express. Built
              responsive user interfaces, integrated APIs, and managed PostgreSQL and MongoDB databases while working on
              real-world client projects.
            </p>
          </motion.div>

          {/* ERPNext Python Developer */}
          {/* ERPNext Freelancer */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white/5 border border-green-500/20 rounded-2xl p-8 backdrop-blur-xl hover:border-green-400/40 transition duration-500 hover:-translate-y-2 md:col-span-2"
          >
            <h3 className="text-xl font-bold text-white mb-2">Freelance Python Developer (ERPNext)</h3>
            <span className="text-green-400 text-sm">June 2025 – November 2025</span>

            <p className="text-gray-300 mt-4 leading-relaxed">
              Delivered ERPNext customizations and backend solutions for clients, developing tailored modules using
              Python and the Frappe framework. Implemented business logic, optimized database workflows, and handled
              system integrations to streamline enterprise resource planning processes.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
