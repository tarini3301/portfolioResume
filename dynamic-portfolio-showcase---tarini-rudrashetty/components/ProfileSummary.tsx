import React from 'react';
import Section from './Section';

interface ProfileSummaryProps {
  summary: string;
}

const ProfileSummary: React.FC<ProfileSummaryProps> = ({ summary }) => {
  return (
    <Section id="summary" title="Profile Summary" className="bg-indigo-950/30">
      <p className="text-lg text-slate-300 leading-relaxed">
        {summary}
      </p>
    </Section>
  );
};

export default ProfileSummary;