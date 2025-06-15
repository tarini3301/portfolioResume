import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

const Card: React.FC<CardProps> = ({ children, className, onClick }) => {
  return (
    <div
      className={`bg-slate-800/70 backdrop-blur-sm shadow-xl shadow-purple-900/30 rounded-xl p-6 transition-all duration-300 hover:shadow-cyan-500/40 hover:scale-[1.02] ${onClick ? 'cursor-pointer' : ''} ${className || ''}`}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export default Card;