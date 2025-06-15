import React from 'react';
import { PositionEntry } from '../types';
import Section from './Section';
import Card from './Card';
// Using a generic UsersIcon as a placeholder, can be changed.
const PositionsIcon: React.FC<{className?: string}> = ({className}) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className || "w-8 h-8"}><path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 9.75c0 1.242.013 2.48.037 3.716.03.123.064.245.103.365A11.916 11.916 0 0012 16.5c.343 0 .68-.016 1.013-.047.039-.12.073-.242.103-.365A15.003 15.003 0 0021 9.75zm-9-4.5a.75.75 0 00-.75-.75H10.5a.75.75 0 000 1.5h.75a.75.75 0 00.75-.75z" /></svg>
)


interface PositionsSectionProps {
  positions: PositionEntry[];
}

const PositionsSection: React.FC<PositionsSectionProps> = ({ positions }) => {
  return (
    <Section id="positions" title="Positions of Responsibility" icon={<PositionsIcon className="w-8 h-8 text-cyan-400" />}>
      <div className="space-y-6">
        {positions.map((pos, index) => (
          <Card key={index} className="border-l-4 border-pink-500">
            <h3 className="text-xl font-semibold text-pink-400">{pos.role}</h3>
            <p className="text-md font-medium text-slate-300">{pos.organization}</p>
            <p className="text-sm text-slate-400 mb-2">{pos.duration}</p>
            {pos.description.length > 0 && (
                <ul className="list-disc list-inside text-slate-300 space-y-1 pl-1 mt-2">
                {pos.description.map((desc, i) => (
                    <li key={i}>{desc}</li>
                ))}
                </ul>
            )}
          </Card>
        ))}
      </div>
    </Section>
  );
};

export default PositionsSection;