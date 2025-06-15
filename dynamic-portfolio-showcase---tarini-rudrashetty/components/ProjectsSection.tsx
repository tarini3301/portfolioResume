import React from 'react';
import { ProjectEntry } from '../types';
import Section from './Section';
import Card from './Card';
import { ExternalLinkIcon } from './icons';

const ProjectsIcon: React.FC<{className?: string}> = ({className}) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className || "w-8 h-8"}><path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" /></svg>
)

interface ProjectsSectionProps {
  projects: ProjectEntry[];
}

const ProjectsSection: React.FC<ProjectsSectionProps> = ({ projects }) => {
  return (
    <Section id="projects" title="Projects" className="bg-slate-900/40" icon={<ProjectsIcon />}>
      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <Card key={index} className="flex flex-col border-t-2 border-pink-600">
            {project.imageUrl && (
              <img src={project.imageUrl} alt={project.name} className="w-full h-48 object-cover rounded-t-lg mb-4 opacity-80 group-hover:opacity-100 transition-opacity" />
            )}
            <h3 className="text-xl font-semibold text-pink-400 mb-2">{project.name}</h3>
            <p className="text-slate-300 text-sm leading-relaxed mb-3 flex-grow">{project.description}</p>
            {project.technologies && project.technologies.length > 0 && (
              <div className="mb-4">
                <h4 className="text-xs font-semibold text-slate-400 uppercase mb-1">Technologies:</h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map(tech => (
                    <span key={tech} className="bg-purple-600/50 text-purple-200 px-2.5 py-1 rounded-full text-xs font-medium shadow-md">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}
            <div className="mt-auto flex space-x-4 pt-2">
              {project.sourceCodeUrl && (
                <a href={project.sourceCodeUrl} target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-300 font-medium inline-flex items-center text-sm">
                  Source Code <ExternalLinkIcon className="ml-1 w-4 h-4" />
                </a>
              )}
              {project.liveUrl && (
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-300 font-medium inline-flex items-center text-sm">
                  Live Demo <ExternalLinkIcon className="ml-1 w-4 h-4" />
                </a>
              )}
              {project.researchPaperUrl && (
                <a href={project.researchPaperUrl} target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-300 font-medium inline-flex items-center text-sm">
                  Research Paper <ExternalLinkIcon className="ml-1 w-4 h-4" />
                </a>
              )}
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
};

export default ProjectsSection;