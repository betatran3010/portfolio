
import React, { useEffect } from 'react';
import { Project } from '../types';
import { ArrowLeft, Clock, Wrench, Users, CheckCircle2, UserCircle2 } from 'lucide-react';
import Button from './Button';
import XplainProblemSection from './XplainProblemSection';
import XplainSolutionSection from './XplainSolutionSection';
import XplainTranslationSection from './XplainTranslationSection';
import XplainPersonalizationSection from './XplainPersonalizationSection';
import ReposetDetailSection from './ReposetDetailSection';

interface ProjectDetailProps {
  project: Project;
  onBack: () => void;
  onNext?: () => void;
}

const ProjectDetail: React.FC<ProjectDetailProps> = ({ project, onBack, onNext }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Define sections dynamically based on the project
  const isXplain = project.id === 1;
  const isReposet = project.id === 3;

  // Dynamic Theme Logic
  const theme = isReposet ? {
    accent: 'text-orange-500',
    accentBg: 'bg-orange-100',
    accentBorder: 'border-orange-200',
    text: 'text-stone-600',
    heading: 'text-stone-800',
    border: 'border-orange-100',
    paper: 'bg-orange-50/30',
    iconColor: 'text-orange-500',
    heroShadow: 'shadow-orange-200/50',
    backBtn: 'hover:text-orange-600 hover:bg-orange-50',
    tagBg: 'bg-stone-100',
    tagText: 'text-stone-500',
    roleIcon: 'text-orange-500',
  } : {
    accent: 'text-primary',
    accentBg: 'bg-primary-light',
    accentBorder: 'border-primary/20',
    text: 'text-ink-light',
    heading: 'text-ink',
    border: 'border-slate-100',
    paper: 'bg-paper',
    iconColor: 'text-primary',
    heroShadow: 'shadow-card',
    backBtn: 'hover:text-primary hover:bg-primary-light/50',
    tagBg: 'bg-slate-100',
    tagText: 'text-slate-500',
    roleIcon: 'text-primary'
  };

  return (
    <div className="pt-10 pb-24 w-full animate-[fadeIn_0.5s_ease-out]">
      <Button variant="ghost" onClick={onBack} className={`mb-8 pl-0 hover:bg-transparent ${theme.backBtn}`}>
        <ArrowLeft className="w-5 h-5" /> Back to Works
      </Button>

      {/* Hero Header */}
      <div className="space-y-6 mb-12">
        <div className="flex flex-wrap gap-3">
          <span className={`px-3 py-1 ${theme.accentBg} ${theme.accent} font-black text-xs uppercase tracking-widest rounded-lg`}>
            {project.context}
          </span>
          <span className={`px-3 py-1 ${theme.tagBg} ${theme.tagText} font-black text-xs uppercase tracking-widest rounded-lg`}>
            {project.year}
          </span>
        </div>
        
        <h1 className={`text-3xl sm:text-4xl md:text-6xl font-heading font-extrabold ${theme.heading} leading-tight`}>
          {project.title}
        </h1>
        
        <p className={`text-lg md:text-2xl font-bold max-w-3xl leading-relaxed ${theme.text}`}>
          {project.description}
        </p>
      </div>

      {/* Hero Image */}
      <div className={`w-full h-full rounded-[2rem] md:rounded-[2.5rem] overflow-hidden border-2 ${theme.border} mb-8 ${theme.heroShadow} shadow-lg`}>
        <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
      </div>

      {/* Context Box */}
      {project.contextOverview && (
        <div className={`${theme.paper} p-6 rounded-2xl border-2 ${theme.border} mb-12`}>
          <h3 className={`font-heading font-bold text-sm ${theme.accent} uppercase tracking-widest mb-2`}>Project Context</h3>
          <p className={`${theme.heading} font-medium leading-relaxed`}>
            {project.contextOverview}
          </p>
        </div>
      )}

      {/* Project Meta Grid */}
      <div className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-20 bg-white p-6 md:p-8 rounded-[2rem] border-2 ${theme.border} shadow-sm`}>
        <div className="space-y-2">
          <div className={`flex items-center gap-2 ${theme.roleIcon} font-bold uppercase text-xs tracking-widest`}>
            <Users className="w-4 h-4" /> Role
          </div>
          <p className={`font-heading font-bold text-base md:text-lg leading-tight ${theme.heading}`}>{project.role}</p>
        </div>
        <div className="space-y-2">
          <div className={`flex items-center gap-2 ${theme.roleIcon} font-bold uppercase text-xs tracking-widest`}>
            <UserCircle2 className="w-4 h-4" /> Team
          </div>
          <p className={`font-heading font-bold text-base md:text-lg leading-tight ${theme.heading}`}>{project.team || 'Solo Project'}</p>
        </div>
        <div className="space-y-2">
          <div className={`flex items-center gap-2 ${theme.roleIcon} font-bold uppercase text-xs tracking-widest`}>
            <Clock className="w-4 h-4" /> Timeline
          </div>
          <p className={`font-heading font-bold text-base md:text-lg leading-tight ${theme.heading}`}>{project.duration}</p>
        </div>
        <div className="space-y-2">
          <div className={`flex items-center gap-2 ${theme.roleIcon} font-bold uppercase text-xs tracking-widest`}>
            <Wrench className="w-4 h-4" /> Tools
          </div>
          <div className="flex flex-wrap gap-1.5">
            {project.tools?.map(t => (
              <span key={t} className={`${theme.tagBg} ${theme.tagText} px-2 py-0.5 rounded-md text-xs font-bold`}>{t}</span>
            ))}
          </div>
        </div>
      </div>

      {/* Case Study Content - Full Width */}
      <div className={`w-full max-w-6xl mx-auto space-y-24 text-lg leading-relaxed ${theme.text}`}>
          
          {isXplain ? (
            <>
               <section>
                <XplainProblemSection />
              </section>
              <section>
                <XplainSolutionSection />
              </section>
              <section>
                 <XplainPersonalizationSection />
              </section>
              <section>
                 <XplainTranslationSection />
              </section>
            </>
          ) : isReposet ? (
            <ReposetDetailSection />
          ) : null}

      </div>
      
      {/* Footer Navigation */}
      <div className={`mt-24 pt-12 border-t-2 ${theme.border} flex justify-center`}>
         <Button onClick={onNext || onBack} variant="ink">View Other Projects</Button>
      </div>

    </div>
  );
};

export default ProjectDetail;
