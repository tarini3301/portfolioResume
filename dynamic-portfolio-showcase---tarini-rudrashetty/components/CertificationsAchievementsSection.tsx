import React from 'react';
import { Certification, Achievement } from '../types';
import Section from './Section';
import Card from './Card';

const CertsIcon: React.FC<{className?: string}> = ({className}) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className || "w-8 h-8"}><path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-4.5A3.375 3.375 0 0012.75 9H11.25A3.375 3.375 0 007.5 12.375V18.75m0 0H6.375c-.621 0-1.125-.504-1.125-1.125V12.375c0-.621.504-1.125 1.125-1.125h9.25c.621 0 1.125.504 1.125 1.125v5.25c0 .621-.504 1.125-1.125 1.125h-1.125" /></svg>
)

interface CertificationsAchievementsSectionProps {
  certifications: Certification[];
  achievements: Achievement[];
}

const CertificationsAchievementsSection: React.FC<CertificationsAchievementsSectionProps> = ({ certifications, achievements }) => {
  return (
    <Section id="certs-achievements" title="Certifications & Achievements" className="bg-slate-900/40" icon={<CertsIcon className="w-8 h-8 text-cyan-400" />}>
      <div className="grid md:grid-cols-2 gap-8">
        {certifications.length > 0 && (
          <div>
            <h3 className="text-2xl font-semibold text-slate-200 mb-4">Certifications</h3>
            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <Card key={`cert-${index}`} className="border-l-4 border-cyan-500">
                  <p className="font-medium text-cyan-400">{cert.name}</p>
                  {cert.issuer && <p className="text-sm text-slate-400">{cert.issuer}</p>}
                </Card>
              ))}
            </div>
          </div>
        )}
        {achievements.length > 0 && (
          <div>
            <h3 className="text-2xl font-semibold text-slate-200 mb-4">Achievements</h3>
            <div className="space-y-4">
              {achievements.map((ach, index) => (
                <Card key={`ach-${index}`} className="border-l-4 border-fuchsia-500">
                  <p className="font-medium text-fuchsia-400">{ach.title}</p>
                  {ach.description && <p className="text-sm text-slate-300 mt-1">{ach.description}</p>}
                  {ach.year && <p className="text-xs text-slate-400 mt-1">({ach.year})</p>}
                </Card>
              ))}
            </div>
          </div>
        )}
      </div>
    </Section>
  );
};

export default CertificationsAchievementsSection;