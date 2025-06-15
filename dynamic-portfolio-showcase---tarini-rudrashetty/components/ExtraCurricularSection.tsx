import React from 'react';
import { ExtraCurricular, LanguageProficiency } from '../types';
import Section from './Section';
import Card from './Card';

const MoreAboutMeIcon: React.FC<{className?: string}> = ({className}) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className || "w-8 h-8"}><path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" /></svg>
)

interface ExtraCurricularSectionProps {
  activities: ExtraCurricular[];
  languages: LanguageProficiency[];
}

const ExtraCurricularSection: React.FC<ExtraCurricularSectionProps> = ({ activities, languages }) => {
  return (
    <Section id="extra-curricular" title="More About Me" icon={<MoreAboutMeIcon className="w-8 h-8 text-cyan-400" />}>
      <div className="grid md:grid-cols-2 gap-8">
        {activities.length > 0 && (
          <div>
            <h3 className="text-2xl font-semibold text-slate-200 mb-4">Extra-Curricular Activities</h3>
            <div className="space-y-4">
              {activities.map((activity, index) => (
                <Card key={`activity-${index}`} className="border-l-4 border-rose-500">
                  <p className="font-medium text-rose-400">{activity.activity}</p>
                  <p className="text-sm text-slate-300 mt-1">{activity.description}</p>
                </Card>
              ))}
            </div>
          </div>
        )}
        {languages.length > 0 && (
          <div>
            <h3 className="text-2xl font-semibold text-slate-200 mb-4">Language Proficiency</h3>
            <div className="space-y-4">
              {languages.map((lang, index) => (
                <Card key={`lang-${index}`} className="border-l-4 border-indigo-500">
                  <p className="font-medium text-indigo-400">{lang.language}</p>
                  <p className="text-sm text-slate-300 mt-1">{lang.proficiency}</p>
                </Card>
              ))}
            </div>
          </div>
        )}
      </div>
    </Section>
  );
};

export default ExtraCurricularSection;