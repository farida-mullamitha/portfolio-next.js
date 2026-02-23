import React from "react";
import Link from "next/link";
import { ArrowUpRightIcon } from "@heroicons/react/24/outline";

export default function ProjectCard({ project }) {
  return (
    <div className={`group border-b border-white/10 pb-12 ${project.featured ? "pb-20" : ""}`}>

      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">

        <div className="max-w-2xl">
          <h3 className={`font-bold text-white group-hover:text-green-400 transition 
            ${project.featured ? "text-4xl" : "text-2xl"}`}>
            {project.title}
          </h3>

          <p className="text-gray-400 mt-4 leading-relaxed">
            {project.description}
          </p>

          <p className="text-green-400 text-sm mt-4">
            {project.tech}
          </p>
        </div>

        <Link
          href={project.github}
          className="flex items-center gap-2 text-white hover:text-green-400 transition"
        >
          View Project
          <ArrowUpRightIcon className="h-5 w-5" />
        </Link>

      </div>
    </div>
  );
}