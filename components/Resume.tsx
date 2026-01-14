
import React from 'react';
import { Download, Briefcase, GraduationCap, Award } from 'lucide-react';
import Button from './Button';

const Resume: React.FC = () => {
  return (
    <div className="pt-10 pb-24 w-full animate-[fadeIn_0.5s_ease-out]">
      
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-16">
        <div>
          <h1 className="font-heading text-4xl md:text-5xl font-extrabold text-ink mb-2">Resume</h1>
          <p className="text-ink-light font-bold text-lg">Tran Le • Senior Product Designer & Researcher</p>
        </div>
        <Button variant="ink" onClick={() => window.print()}>
          <Download className="w-4 h-4" /> Download PDF
        </Button>
      </div>

      <div className="space-y-12">
        
        {/* Experience */}
        <section>
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2 bg-primary-light rounded-lg text-primary-dark">
              <Briefcase className="w-6 h-6" />
            </div>
            <h2 className="text-2xl font-heading font-black text-ink">Experience</h2>
          </div>

          <div className="space-y-8 border-l-2 border-slate-100 pl-8 ml-3">
            <div className="relative max-w-4xl">
              <div className="absolute -left-[39px] top-1 w-5 h-5 rounded-full border-4 border-white bg-primary shadow-sm"></div>
              <h3 className="text-xl font-bold text-ink">Senior UX Designer</h3>
              <div className="text-sm font-bold text-primary mb-2">TechCorp Inc. • 2023 - Present</div>
              <p className="text-ink-light leading-relaxed">
                Leading the accessibility initiative for the core SaaS product. Redesigned the design system to be WCAG 2.1 AA compliant. Conducted user research with over 50 enterprise clients to inform the 2024 roadmap.
              </p>
            </div>

            <div className="relative max-w-4xl">
              <div className="absolute -left-[39px] top-1 w-5 h-5 rounded-full border-4 border-white bg-slate-300"></div>
              <h3 className="text-xl font-bold text-ink">Product Designer</h3>
              <div className="text-sm font-bold text-slate-500 mb-2">EdTech Solutions • 2021 - 2023</div>
              <p className="text-ink-light leading-relaxed">
                Designed gamified learning experiences for K-12 students. Increased student engagement by 25% through iterative prototyping and A/B testing of new reward mechanisms.
              </p>
            </div>
             <div className="relative max-w-4xl">
              <div className="absolute -left-[39px] top-1 w-5 h-5 rounded-full border-4 border-white bg-slate-300"></div>
              <h3 className="text-xl font-bold text-ink">UX Researcher Intern</h3>
              <div className="text-sm font-bold text-slate-500 mb-2">Google • Summer 2020</div>
              <p className="text-ink-light leading-relaxed">
                Supported the Material Design team in analyzing usability metrics for mobile navigation patterns.
              </p>
            </div>
          </div>
        </section>

        {/* Education */}
        <section>
          <div className="flex items-center gap-3 mb-8">
             <div className="p-2 bg-primary-light rounded-lg text-primary-dark">
              <GraduationCap className="w-6 h-6" />
            </div>
            <h2 className="text-2xl font-heading font-black text-ink">Education</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-3xl border-2 border-slate-100 shadow-sm">
              <h3 className="text-lg font-bold text-ink">M.S. Human-Computer Interaction</h3>
              <div className="text-sm text-slate-500 font-bold mb-2">University of Washington • 2021</div>
              <p className="text-sm text-ink-light">Specialization in Accessible Computing</p>
            </div>
            <div className="bg-white p-6 rounded-3xl border-2 border-slate-100 shadow-sm">
              <h3 className="text-lg font-bold text-ink">B.S. Cognitive Science</h3>
              <div className="text-sm text-slate-500 font-bold mb-2">UC San Diego • 2019</div>
              <p className="text-sm text-ink-light">Minor in Design</p>
            </div>
          </div>
        </section>

        {/* Skills */}
        <section>
           <div className="flex items-center gap-3 mb-6">
             <div className="p-2 bg-primary-light rounded-lg text-primary-dark">
              <Award className="w-6 h-6" />
            </div>
            <h2 className="text-2xl font-heading font-black text-ink">Skills</h2>
          </div>
          
          <div className="flex flex-wrap gap-3">
             {['Figma', 'React', 'TypeScript', 'User Research', 'Prototyping', 'Accessibility (WCAG)', 'HTML/CSS', 'Motion Design', 'Unity', 'Data Analysis'].map(skill => (
               <span key={skill} className="px-4 py-2 bg-white border-2 border-slate-100 rounded-xl text-ink font-bold text-sm shadow-sm">
                 {skill}
               </span>
             ))}
          </div>
        </section>

      </div>
    </div>
  );
};

export default Resume;
