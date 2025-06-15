import React from 'react';

interface FooterProps {
  name: string;
}

const Footer: React.FC<FooterProps> = ({ name }) => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-slate-950 text-slate-400 py-8 text-center border-t border-t-indigo-800">
      <div className="container mx-auto px-4 md:px-6">
        <p>&copy; {currentYear} {name}. All rights reserved.</p>
        <p className="text-sm mt-1">Built with React, Tailwind CSS, and Gemini AI. Cosmos Theme.</p>
      </div>
    </footer>
  );
};

export default Footer;