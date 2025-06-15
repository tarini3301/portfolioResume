import React from 'react';
import { portfolioData } from './data/portfolioData';
import Header from './components/Header';
import ProfileSummary from './components/ProfileSummary';
import EducationSection from './components/EducationSection';
import ExperienceSection from './components/ExperienceSection';
import PositionsSection from './components/PositionsSection';
import ProjectsSection from './components/ProjectsSection';
import SkillsSection from './components/SkillsSection';
import CertificationsAchievementsSection from './components/CertificationsAchievementsSection';
import ExtraCurricularSection from './components/ExtraCurricularSection';
import AiQueryBox from './components/AiQueryBox';
import Footer from './components/Footer';

// Navigation component
const Navigation: React.FC = () => {
    const navItems = [
        { id: "summary", label: "Summary" },
        { id: "ai-query", label: "Ask AI" },
        { id: "experience", label: "Experience" },
        { id: "projects", label: "Projects" },
        { id: "education", label: "Education" },
        { id: "skills", label: "Skills" },
        { id: "positions", label: "Roles" },
        { id: "certs-achievements", label: "Certs/Achievements" },
    ];

    return (
        <nav className="sticky top-0 bg-slate-900/70 backdrop-blur-md shadow-lg shadow-purple-500/10 z-50 py-3">
            <div className="container mx-auto px-4 md:px-6 flex justify-center">
                <ul className="flex space-x-3 sm:space-x-4 overflow-x-auto pb-2 sm:pb-0">
                    {navItems.map(item => (
                        <li key={item.id}>
                            <a 
                                href={`#${item.id}`} 
                                className="text-slate-300 hover:text-cyan-400 px-2 py-2 sm:px-3 text-sm sm:text-base font-medium transition-colors whitespace-nowrap"
                            >
                                {item.label}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
};


const App: React.FC = () => {
  const { 
    name, title, contact, profileImageUrl,
    profileSummary, education, experience, positions, 
    projects, technicalSkills, certifications, 
    achievements, extraCurricular, languageProficiency 
  } = portfolioData;

  return (
    <div className="flex flex-col min-h-screen">
      <Header data={{ name, title, contact, profileImageUrl }} />
      <Navigation />
      <main className="flex-grow">
        <ProfileSummary summary={profileSummary} />
        <AiQueryBox portfolioData={portfolioData} />
        <ExperienceSection experience={experience} />
        <ProjectsSection projects={projects} />
        <EducationSection education={education} />
        <SkillsSection skills={technicalSkills} />
        <PositionsSection positions={positions} />
        <CertificationsAchievementsSection certifications={certifications} achievements={achievements} />
        <ExtraCurricularSection activities={extraCurricular} languages={languageProficiency} />
      </main>
      <Footer name={name} />
    </div>
  );
};

export default App;