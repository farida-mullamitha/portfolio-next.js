'use client';
import React from 'react';
import dynamic from 'next/dynamic';

const AnimatedNumbers = dynamic(
  () => {
    return import('react-animated-numbers');
  },
  { ssr: false },
);

const EducationSection = () => {
  return (
    <>
      <section id="eduction">
        <h2 className="text-left text-4xl font-bold text-white mt-4 mb-8 md:mb-12">Education</h2>
        <div className="flex flex-row">
          <div className="border-[#33353F] border-2 rounded-lg py-5 px-16 cursor-pointer shadow-sm shadow-blue-900 ">
            <h1 className="font-extrabold text-2xl">Government Engineering College, Dahod</h1>
            <p className="font-bold text-lg">
              B.E.- Computer Engineering <span className="font-thin ml-10">CGPA : (8.1/10)</span>
            </p>
            <span className="font-thin text-lg">October 2021 - May 2025</span>
          </div>
        </div>
      </section>
    </>
  );
};

export default EducationSection;
