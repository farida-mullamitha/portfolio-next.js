'use client';
import React from 'react';

const EducationSection = () => {
  return (
    <section id="education" className="py-28 bg-black">
      <div className="max-w-5xl mx-auto px-6">

        <h2 className="text-5xl font-bold text-white mb-16">
          Education
        </h2>

        <div className="border-l-2 border-green-500 pl-8 relative">

          {/* timeline dot */}
          <div className="absolute -left-[9px] top-2 w-4 h-4 bg-green-500 rounded-full" />

          <h3 className="text-2xl font-semibold text-white">
            Bachelor of Engineering – Computer Engineering
          </h3>

          <p className="text-gray-400 mt-2">
            Government Engineering College, Dahod
          </p>

          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mt-4 text-sm text-gray-400">
            <span>October 2021 – May 2025</span>
            <span>CGPA: 8.5 / 10</span>
          </div>

        </div>

      </div>
    </section>
  );
};

export default EducationSection;