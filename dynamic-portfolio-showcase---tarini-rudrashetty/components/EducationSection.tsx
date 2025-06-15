import React from 'react';
import { EducationEntry } from '../types';
import Section from './Section';
import Card from './Card';
import { AcademicCapIcon } from './icons';

interface EducationSectionProps {
  education: EducationEntry[];
}

const EducationSection: React.FC<EducationSectionProps> = ({ education }) => {
  return (
    <Section id="education" title="Education" icon={<AcademicCapIcon className="w-8 h-8" />}>
      <div className="space-y-6">
        {education.map((edu, index) => (
          <Card key={index} className="border-l-4 border-purple-500">
            <h3 className="text-xl font-semibold text-purple-400">{edu.degree}</h3>
            {edu.specialization && <p className="text-md font-medium text-purple-300">{edu.specialization}</p>}
            <p className="text-slate-300">{edu.institution}</p>
            <p className="text-sm text-slate-400 mt-1">{edu.duration} | {edu.grade}</p>
          </Card>
        ))}
      </div>
    </Section>
  );
};

export default EducationSection;