"use client";
import React from "react";
import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/outline";
import { ArrowUpRightIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const EmailSection = () => {
  return (
    <section id="contact" className="py-28 bg-black">
      <div className="max-w-5xl mx-auto px-6">

        <h2 className="text-5xl font-bold text-white mb-12">
          Let’s <span className="text-green-400">Connect</span>
        </h2>

        <p className="text-gray-400 max-w-2xl mb-12 leading-relaxed">
          I’m currently open to full-time opportunities and impactful
          engineering roles. If you'd like to discuss a project,
          collaboration, or opportunity — feel free to reach out directly.
        </p>

        {/* Contact Info */}
        <div className="space-y-6 mb-12">

          {/* Email */}
          <a
            href="mailto:your-email@gmail.com"
            className="flex items-center gap-4 text-white text-lg hover:text-green-400 transition"
          >
            <EnvelopeIcon className="h-6 w-6" />
            your-email@gmail.com
          </a>

          {/* Phone */}
          <a
            href="tel:+919876543210"
            className="flex items-center gap-4 text-white text-lg hover:text-green-400 transition"
          >
            <PhoneIcon className="h-6 w-6" />
            +91 98765 43210
          </a>

        </div>

        {/* Social Links */}
        <div className="flex flex-col sm:flex-row gap-8 text-gray-300">

          <Link
            href="https://github.com/yourusername"
            target="_blank"
            className="flex items-center gap-2 hover:text-green-400 transition"
          >
            GitHub
            <ArrowUpRightIcon className="h-4 w-4" />
          </Link>

          <Link
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            className="flex items-center gap-2 hover:text-green-400 transition"
          >
            LinkedIn
            <ArrowUpRightIcon className="h-4 w-4" />
          </Link>

        </div>

      </div>
    </section>
  );
};

export default EmailSection;