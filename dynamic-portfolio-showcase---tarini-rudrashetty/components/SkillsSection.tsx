import React from 'react';
import { Skills } from '../types';
import Section from './Section';
import Card from './Card';

const SkillsIcon: React.FC<{className?: string}> = ({className}) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className || "w-8 h-8"}><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" /></svg>
)

interface SkillsSectionProps {
  skills: Skills;
}

const SkillCategory: React.FC<{ title: string; items: string[] }> = ({ title, items }) => (
  <div className="mb-4">
    <h4 className="text-md font-semibold text-indigo-300 mb-2">{title}</h4>
    <div className="flex flex-wrap gap-2">
      {items.map(skill => (
        <span key={skill} className="bg-indigo-600/70 text-indigo-100 px-3 py-1 rounded-full text-sm font-medium shadow-md shadow-indigo-500/20">
          {skill}
        </span>
      ))}
    </div>
  </div>
);

const SkillsSection: React.FC<SkillsSectionProps> = ({ skills }) => {
  return (
    <Section id="skills" title="Technical Skills" icon={<SkillsIcon />}>
      <Card className="bg-slate-800">
        {skills.languages.length > 0 && <SkillCategory title="Languages" items={skills.languages} />}
        {skills.librariesFrameworks.length > 0 && <SkillCategory title="Libraries & Frameworks" items={skills.librariesFrameworks} />}
        {skills.toolsPlatforms.length > 0 && <SkillCategory title="Tools & Platforms" items={skills.toolsPlatforms} />}
        {skills.concepts.length > 0 && <SkillCategory title="Concepts" items={skills.concepts} />}
        {skills.other.length > 0 && <SkillCategory title="Other" items={skills.other} />}
      </Card>
    </Section>
  );
};

export default SkillsSection;