'use client';
import React, { useTransition, useState } from 'react';
import { motion } from 'framer-motion';
import TabButton from './TabButton';

const TAB_DATA = [
  {
    title: 'Skills',
    id: 'skills',
    content: (
      <ul className="space-y-4 text-sm sm:text-base text-gray-300">
        <li>
          <span className="font-semibold text-primary-400">Frontend:</span>{' '}
          React, Next.js, JavaScript, Tailwind CSS
        </li>
        <li>
          <span className="font-semibold text-primary-400">Backend:</span>{' '}
          Node.js, Express.js, REST APIs, JWT Authentication
        </li>
        <li>
          <span className="font-semibold text-primary-400">Database:</span>{' '}
          PostgreSQL, MongoDB, Sequelize, Data Modeling
        </li>
        <li>
          <span className="font-semibold text-primary-400">DevOps:</span>{' '}
          Git, GitHub, Docker (Basics), Vercel
        </li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState('skills');
  const [isPending, startTransition] = useTransition();

  const handleTabChange = id => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section id="about" className="py-24">
      <div className="max-w-6xl mx-auto px-4 grid lg:grid-cols-2 gap-16 items-start">
        
        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-white">
            About Me
          </h2>

          <p className="text-gray-400 leading-relaxed text-base sm:text-lg max-w-xl">
            Full Stack Engineer with 1+ year of experience building scalable,
            secure and high-performance web applications. At Netviss, I work
            across frontend and backend systems, focusing on clean architecture,
            optimized performance and production reliability.
          </p>
        </motion.div>

        {/* RIGHT SIDE */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-md"
        >
          <div className="flex gap-4 mb-8">
            <TabButton
              selectTab={() => handleTabChange('skills')}
              active={tab === 'skills'}
            >
              Skills
            </TabButton>
          </div>

          <div>{TAB_DATA.find(t => t.id === tab).content}</div>
        </motion.div>

      </div>
    </section>
  );
};

export default AboutSection;