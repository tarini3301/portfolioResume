import React from 'react';
import { PortfolioData } from '../types';
import { LinkedInIcon, GitHubIcon, EmailIcon, PhoneIcon, CodeChefIcon, LeetCodeIcon } from './icons';

interface HeaderProps {
  data: Pick<PortfolioData, 'name' | 'title' | 'contact' | 'profileImageUrl'>;
}

const Header: React.FC<HeaderProps> = ({ data }) => {
  return (
    <header className="bg-gradient-to-br from-indigo-800 via-purple-800 to-pink-700 text-white py-16 md:py-24 text-center shadow-2xl shadow-purple-500/30">
      <div className="container mx-auto px-4 md:px-6">
        <img 
          src={data.profileImageUrl} 
          alt={data.name} 
          className="w-32 h-32 md:w-40 md:h-40 rounded-full mx-auto mb-6 border-4 border-cyan-400 shadow-xl shadow-cyan-500/30"
        />
        <h1 className="text-4xl md:text-5xl font-bold mb-2 text-slate-100">{data.name}</h1>
        <p className="text-xl md:text-2xl font-light mb-6 text-indigo-200">{data.title}</p>
        <div className="flex justify-center space-x-5">
          <a href={`mailto:${data.contact.email}`} aria-label="Email" className="hover:text-cyan-300 transition-colors">
            <EmailIcon className="w-7 h-7" />
          </a>
          <a href={`https://linkedin.com/in/${data.contact.linkedin}`} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-cyan-300 transition-colors">
            <LinkedInIcon className="w-7 h-7" />
          </a>
          <a href={`https://github.com/${data.contact.github}`} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="hover:text-cyan-300 transition-colors">
            <GitHubIcon className="w-7 h-7" />
          </a>
          {data.contact.phone && (
             <a href={`tel:${data.contact.phone}`} aria-label="Phone" className="hover:text-cyan-300 transition-colors">
                <PhoneIcon className="w-7 h-7" />
             </a>
          )}
          {data.contact.codechef && (
            <a href={`https://www.codechef.com/users/${data.contact.codechef}`} target="_blank" rel="noopener noreferrer" aria-label="CodeChef" className="hover:text-cyan-300 transition-colors">
              <CodeChefIcon className="w-7 h-7" />
            </a>
          )}
          {data.contact.leetcode && (
            <a href={`https://leetcode.com/${data.contact.leetcode}`} target="_blank" rel="noopener noreferrer" aria-label="LeetCode" className="hover:text-cyan-300 transition-colors">
              <LeetCodeIcon className="w-7 h-7" />
            </a>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;