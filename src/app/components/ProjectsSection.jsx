'use client';
import React from 'react';
import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';

const projects = [
  {
    title: "AI Integrated Diet Planner",
    description:
      "Full-stack AI application generating personalized diet plans using OpenAI APIs. Designed secure backend architecture with user authentication and data persistence.",
    tech: "Next.js • OpenAI API • Express • MongoDB",
    github: "#",
    featured: true,
  },
  {
    title: "Production-Level Authentication System",
    description:
      "Secure authentication system with JWT access & refresh tokens, role-based authorization, protected routes, and secure password hashing. Designed with scalable backend architecture using Node.js and Express.",
    tech: "React • Node • PostgreSQL",
    github: "#",
  },
  {
    title: "Admin Dashboard SaaS",
    description:
      "Full-stack admin dashboard with user management, pagination, search, analytics charts, and secure authentication. Designed with production-ready folder structure and deployment workflow.",
    tech: "React • REST APIs • PostgreSQL",
    github: "#",
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-32 bg-black">
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-5xl font-bold text-green-400 mb-20">
           Projects
        </h2>

        <div className="space-y-16">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}