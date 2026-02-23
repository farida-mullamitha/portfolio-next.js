'use client';
import React from 'react';
import dynamic from 'next/dynamic';

const AnimatedNumbers = dynamic(
  () => {
    return import('react-animated-numbers');
  },
  { ssr: false },
);

// const achievementsList = [
//   {
//     metric: 'Projects',
//     value: '100',
//     postfix: '+',
//   },
//   {
//     prefix: '~',
//     metric: 'Users',
//     value: '100,000',
//   },
//   {
//     metric: 'Awards',
//     value: '7',
//   },
//   {
//     metric: 'Years',
//     value: '5',
//   },
// ];

const ExperienceSection = () => {
  return (
    <>
      <section id="experience">
        <div className="py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
          <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">Experience</h2>
          <div className="flex flex-col sm:flex-row gap-6 justify-between w-full">
            <div className="border-[#33353F] border-2 rounded-lg py-2 px-2 cursor-pointer w-full shadow-sm shadow-blue-900 transition-all hover:scale-90">
              <h1 className="font-extrabold">Full Stack Web Developer Intern (On-Site) | Rethinking Web Vadodara</h1>
              <span className="font-thin">June 2024 (present)</span>
              <p className="font-medium">
                As an intern at Rethinking Web, I contributed to both frontend and backend development of web
                applications. I worked with React.js and Tailwind CSS to create responsive, user-friendly interfaces,
                and used Node.js and Express for backend development, handling API integrations and database management
                with PostgreSQL and MongoDB. This experience allowed me to enhance my skills across the full web
                development stack.
              </p>
            </div>
            <div className="border-[#33353F] border-2 rounded-lg py-2 px-2 cursor-pointer w-full shadow-sm shadow-blue-900 transition-all hover:scale-90">
              <h1 className="font-extrabold">
                {' '}
                Data Science Intern (Remote) | IBM SkillsBuild and CSRBOX Micro-Internship
              </h1>
              <span className="font-thin">March 2024</span>
              <p className="font-medium">
                During this remote micro-internship, I gained hands-on experience in data science, focusing on data
                wrangling, exploratory data analysis, and basic machine learning. I worked on real-world datasets,
                applied statistical methods, and developed predictive models, enhancing my practical skills in data
                science and analytics.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ExperienceSection;
