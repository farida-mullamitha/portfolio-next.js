import React from "react";

const Footer = () => {
  return (
    <footer className="border-t border-white/10 py-8 bg-black">
      <div className="max-w-5xl mx-auto px-6 flex flex-col sm:flex-row justify-between items-center text-sm text-gray-500">

        <p>
          © {new Date().getFullYear()} Farida Mullamitha
        </p>

        <p>
          Built with Next.js & Tailwind CSS
        </p>

      </div>
    </footer>
  );
};

export default Footer;