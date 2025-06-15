import React from 'react';
import { ExperienceEntry } from '../types';
import Section from './Section';
import Card from './Card';
import { BriefcaseIcon } from './icons';


interface ExperienceSectionProps {
  experience: ExperienceEntry[];
}

const ExperienceSection: React.FC<ExperienceSectionProps> = ({ experience }) => {
  return (
    <Section id="experience" title="Experience" className="bg-slate-900/40" icon={<BriefcaseIcon className="w-8 h-8 text-cyan-400" />}>
      <div className="space-y-8">
        {experience.map((exp, index) => (
          <Card key={index} className="border-l-4 border-blue-500">
            <div className="flex items-start space-x-4">
              {exp.logoUrl && <img src={exp.logoUrl} alt={`${exp.company} logo`} className="w-12 h-12 rounded-md object-contain bg-slate-700 p-1" />}
              <div>
                <h3 className="text-xl font-semibold text-blue-400">{exp.role}</h3>
                <p className="text-md font-medium text-slate-300">{exp.company}</p>
                <p className="text-sm text-slate-400 mb-2">{exp.duration}</p>
              </div>
            </div>
            <ul className="list-disc list-inside text-slate-300 space-y-1 pl-1 mt-2">
              {exp.description.map((desc, i) => (
                <li key={i}>{desc}</li>
              ))}
            </ul>
          </Card>
        ))}
      </div>
    </Section>
  );
};

export default ExperienceSection;