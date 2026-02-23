'use client';

import Link from 'next/link';
import React, { useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';

const navLinks = [
  { title: 'About', path: '#about' },
  { title: 'Experience', path: '#experience' },
  { title: 'Projects', path: '#projects' },
  { title: 'Education', path: '#education' },
  { title: 'Contact', path: '#contact' },
];

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-lg border-b border-green-500/10">

      <div className="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between">

        {/* Logo */}
        <Link
          href="/"
          className="text-xl font-semibold tracking-wide text-white hover:text-green-400 transition duration-300"
        >
          Farida
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link, index) => (
            <Link
              key={index}
              href={link.path}
              className="relative text-gray-300 hover:text-green-400 transition duration-300 group"
            >
              {link.title}
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-green-400 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
        </div>

        {/* Mobile Button */}
        <div className="md:hidden">
          <button
            onClick={() => setNavbarOpen(!navbarOpen)}
            className="text-white hover:text-green-400 transition duration-300"
          >
            {navbarOpen ? (
              <XMarkIcon className="h-6 w-6" />
            ) : (
              <Bars3Icon className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {navbarOpen && (
        <div className="md:hidden bg-black border-t border-green-500/10">
          <div className="flex flex-col items-center py-6 space-y-6">
            {navLinks.map((link, index) => (
              <Link
                key={index}
                href={link.path}
                onClick={() => setNavbarOpen(false)}
                className="text-gray-300 hover:text-green-400 transition duration-300 text-lg"
              >
                {link.title}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;