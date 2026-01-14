
import React from 'react';
import { Project } from '../types';
import { ArrowRight, FlaskConical } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
  onClick: (id: number) => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, onClick }) => {
  return (
    <div 
      onClick={() => onClick(project.id)}
      className="group relative w-full cursor-pointer md:h-[480px] flex flex-col"
    >
      {/* Background Offset - Always Primary (Cyan) */}
      <div className="absolute inset-0 bg-primary-light rounded-[2.5rem] transform translate-x-2 translate-y-2 transition-transform duration-300 group-hover:translate-x-4 group-hover:translate-y-4"></div>
      
      {/* Layout Container */}
      <div className="relative bg-white rounded-[2.5rem] border-2 border-slate-100 overflow-hidden flex flex-col md:flex-row h-full transition-all duration-300 group-hover:-translate-y-1 group-hover:border-primary/30 group-hover:shadow-card">
        
        {/* Visual Area */}
        <div className="w-full md:w-[45%] h-64 md:h-full relative bg-slate-50 overflow-hidden border-b-2 md:border-b-0 md:border-r-2 border-slate-100 shrink-0">
          <div className="absolute inset-0 bg-primary/5 mix-blend-multiply transition-opacity group-hover:opacity-0"></div>
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-full object-cover transition-transform duration-700"
          />
           <div className="absolute top-6 left-6">
             <span className="bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-2xl text-xs font-black text-ink uppercase tracking-widest shadow-sm border-2 border-slate-100 flex items-center gap-2">
              <FlaskConical className="w-3 h-3 text-primary" />
              {project.context}
            </span>
          </div>
        </div>

        {/* Content Area */}
        <div className="flex-1 p-6 md:p-8 flex flex-col justify-between h-full">
          
          <div className="space-y-4">
            <div className="flex justify-between items-start">
              <h3 className="text-2xl md:text-3xl font-heading font-extrabold text-ink group-hover:text-primary transition-colors leading-tight">
                {project.title}
              </h3>
              <span className="bg-slate-100 text-slate-500 px-3 py-1 rounded-full text-xs font-black tabular-nums shrink-0 ml-2">
                {project.year}
              </span>
            </div>
            
            <div className="bg-paper p-4 md:p-5 rounded-2xl border-2 border-slate-100 group-hover:border-primary-light/50 group-hover:bg-primary-light/10 transition-colors">
              <p className="text-ink font-bold text-base md:text-lg leading-snug">
                <span className="text-primary font-black mr-1">Q.</span> "{project.problem}"
              </p>
            </div>
          </div>

          <div className="flex flex-col xl:flex-row justify-between items-start xl:items-center gap-4 pt-4 mt-auto">
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag, idx) => (
                <span 
                  key={idx} 
                  className="px-2.5 py-1 bg-white border-2 border-slate-100 text-slate-500 text-[10px] md:text-xs font-bold rounded-xl whitespace-nowrap group-hover:border-primary-light group-hover:text-primary-dark transition-colors"
                >
                  #{tag}
                </span>
              ))}
            </div>
            
            <button className="flex items-center gap-2 px-5 py-2 bg-ink text-white rounded-full font-bold text-sm transition-all duration-300 shadow-cute hover:shadow-cute-hover shrink-0">
              View Project <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
