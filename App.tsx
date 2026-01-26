
import React, { useState, useEffect } from 'react';
import Hero from './components/Hero';
import ProjectCard from './components/ProjectCard';
import ProjectDetail from './components/ProjectDetail';
import Navbar from './components/Navbar';
import About from './components/About';
import { Project, SectionId, View } from './types';
import { Linkedin, Mail, Heart, Github } from 'lucide-react';

const projects: Project[] = [
  {
    id: 1,
    title: "XPLAIN",
    context: "Communication & Collaborative Technologies Lab",
    problem: "How might we design a proactive AI system that anticipates and scaffolds prediction during real-time turn-taking to reduce comprehension, production, and participation barriers faced by non-native speakers in computer-mediated live conversations?",
    image: `${import.meta.env.BASE_URL}images/xplain-cover.png`,
    tags: ["CSCW", "AI-Mediated Communication", "Inclusive Design", "Wizard-of-Oz", "Psycholinguistics", "Mixed-Methods Data Analysis"],
    year: "Feb 2025–present",
    description: "A proactive AI assistant that scaffolds comprehension, idea formation, and alignment for non-native speakers in computer-mediated live conversations.",
    role: "Research Assistant",
    team: "1 Professor, 1 PhD student, 5 undergraduate students",
    duration: "Feb 2025–present",
    tools: ["Figma", "ATLAS.ti", "R", "Qualtrics"],
    contextOverview: (
      <>
        <p>
          XPLAIN is a long-running HCI research project with Professor Susan Fussell examining how proactive AI content prediction and generation can support non-native speakers in real-time video meetings. I contributed to the design, prototyping, and evaluation of XPLAIN across multiple Wizard-of-Oz studies, spanning literature review, conversational scenario design, interface design and prototyping, survey development, user studies, and data analysis.
        </p>

        <p className="mt-4">
          <span className="text-ink font-bold">
            This project is mentioned in this paper:
          </span>{" "}
          <a
            href="https://dl.acm.org/doi/10.1145/3715070.3749273"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary underline hover:text-primary-dark"
          >
            https://dl.acm.org/doi/10.1145/3715070.3749273
          </a>{" "}
          <span className="text-ink font-bold">(CSCW Companion ’25)</span>
        </p>
      </>
    ),
  },
  {
    id: 2,
    title: "Designing for the Communication Needs of International Students in U.S. Healthcare Settings",
    context: "Computing & Global Development Course",
    problem: "How do international students experience communication challenges in U.S. healthcare, how effective are existing tools and strategies, and what unmet needs and design opportunities emerge across students, interpreters, and providers?",
    image: `${import.meta.env.BASE_URL}images/health-international-students.png`,
    tags: ["Social Computing", "ICTD", "Inclusive Design", "Health Communication"],
    year: "Aug–Dec 2025",
  },
  {
    id: 3,
    title: "Reposet",
    context: "Human-Computer Interaction Course",
    problem: "How might we help students reuse and restyle what they already own by reducing outfit decision effort while adapting to daily context and motivating sustainable wardrobe rotation?",
    image: `${import.meta.env.BASE_URL}images/reposet-cover.png`,
    tags: ["UX/UI Design", "Product Design", "Mobile App"],
    year: "Aug–Dec 2025",
    description: "A context-aware wardrobe system that supports outfit planning, clothing rotation, and sustainable reuse in everyday student life.",
    role: "UX/UI Designer",
    team: "4 designers",
    duration: "Aug–Dec 2025",
    tools: ["Figma"],
    contextOverview: <>
      Many college students own many clothes but repeatedly wear only a small subset due to rushed mornings, cluttered closets, and decision fatigue. Reposet is a wardrobe companion designed to help students dress more intentionally using what they already own, while staying prepared for changing weather, especially in places like Cornell with highly variable conditions, alongside shifting schedules and social contexts typical of student life. I contributed across the full HCI cycle, including user research, design, prototyping, and evaluation. <span className="text-ink font-bold">The project received an A.</span>
    </>,
  },
  {
    id: 4,
    title: "Duolingo’s Note-Taking Feature Case Study",
    context: "Digital Product Design Course",
    problem: "How might we design for long-term memory and meaningful language recall, not just daily engagement, in Duolingo's fast-paced learning environment?",
    image: `${import.meta.env.BASE_URL}images/duolingo-cover.png`,
    tags: ["UX/UI Design", "Product Design", "Mobile App", "EdTech"],
    year: "Feb–May 2025",
  },
];

// Helper to parse the current hash into a View
const getViewFromHash = (): View => {
  // Ensure window exists (for safety)
  if (typeof window === 'undefined') return 'works';

  const hash = window.location.hash.replace('#', '');
  if (hash === 'about') return 'about';
  if (hash === 'resume') return 'resume';
  if (hash.startsWith('project/')) {
    const id = parseInt(hash.split('/')[1]);
    if (!isNaN(id)) return { type: 'project', id };
  }
  return 'works';
};

const App: React.FC = () => {
  // Initialize state based on current URL hash - using lazy init to avoid window access issues during module load
  const [currentView, setCurrentView] = useState<View>(() => getViewFromHash());
  const [targetScrollId, setTargetScrollId] = useState<number | null>(null);

  // 1. Listen for URL hash changes (Browser Back/Forward)
  useEffect(() => {
    const handleHashChange = () => {
      const newView = getViewFromHash();
      // Only update if different to avoid redundancy
      setCurrentView(prev => {
        if (JSON.stringify(prev) !== JSON.stringify(newView)) {
          return newView;
        }
        return prev;
      });
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // 2. Update URL hash when State changes (UI Navigation)
  useEffect(() => {
    let targetHash = '';
    if (currentView === 'works') targetHash = 'works';
    else if (currentView === 'about') targetHash = 'about';
    else if (currentView === 'resume') targetHash = 'resume';
    else if (typeof currentView === 'object' && currentView.type === 'project') {
      targetHash = `project/${currentView.id}`;
    }

    const currentHash = window.location.hash.replace('#', '');
    if (currentHash !== targetHash) {
      // Use pushState to update URL without triggering hashchange event loop
      window.history.pushState(null, '', `#${targetHash}`);
    }
  }, [currentView]);

  // Handle scrolling when switching back to works
  useEffect(() => {
    if (currentView === 'works') {
      // If there is a targetScrollId, wait a bit for rendering then scroll to it.

      if (targetScrollId) {
        // Attempt to scroll to the target card
        const attemptScroll = (attempts: number) => {
          const el = document.getElementById(`project-card-${targetScrollId}`);
          if (el) {
            // Found it! Scroll and clear target
            el.scrollIntoView({ behavior: 'smooth', block: 'center' });
            setTargetScrollId(null);
          } else if (attempts > 0) {
            // Not found yet, try again shortly
            setTimeout(() => attemptScroll(attempts - 1), 100);
          } else {
            // Give up, clear target
            setTargetScrollId(null);
          }
        };
        // Start attempts
        setTimeout(() => attemptScroll(5), 100);
      }
    }
  }, [currentView, targetScrollId]);

  const handleNextProject = () => {
    // Per user request: "View Other Projects" on any page just anchors to the Works section 
    // (beginning of XPLAIN card which is ID 1)
    setTargetScrollId(1);
    setCurrentView('works');
  };

  const renderContent = () => {
    if (typeof currentView === 'object' && currentView.type === 'project') {
      const project = projects.find(p => p.id === currentView.id);
      if (project) {
        return (
          <ProjectDetail
            project={project}
            onBack={() => {
              setCurrentView('works');
              window.scrollTo(0, 0);
            }}
            onNext={handleNextProject}
          />
        );
      }
    }

    switch (currentView) {
      case 'about':
        return <About />;
      case 'works':
      default:
        return (
          <div className="animate-[fadeIn_0.5s_ease-out]">
            <Hero scrollTo={() => {
              const el = document.getElementById('works-grid');
              el?.scrollIntoView({ behavior: 'smooth' });
            }} />
            <section id="works-grid" className="space-y-16 pt-8 scroll-mt-24">
              {projects.map(project => (
                <div id={`project-card-${project.id}`} key={project.id}>
                  <ProjectCard
                    project={project}
                    onClick={(id) => {
                      if (id === 2) {
                        // Healthcare Project - Opens PDF
                        window.open(
                          `${import.meta.env.BASE_URL}documents/healthcare-international-students.pdf`,
                          '_blank'
                        );
                      } else if (id === 4) {
                        // Duolingo - Opens Website Link
                        window.open('https://medium.com/@trannble/write-it-down-remember-it-later-designing-duolingos-note-taking-experience-9f8f5ce9a174', '_blank');
                      } else {
                        // Standard Projects - Opens Detail View
                        setCurrentView({ type: 'project', id });
                        window.scrollTo(0, 0);
                      }
                    }}
                  />
                </div>
              ))}
            </section>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-paper text-ink font-sans selection:bg-primary-light selection:text-primary-dark relative">

      <Navbar currentView={currentView} onChangeView={(view) => {
        if (view === 'resume') {
          window.open(`${import.meta.env.BASE_URL}documents/tran-le-resume.pdf`, '_blank');
        } else {
          setCurrentView(view);
          window.scrollTo(0, 0);
        }
      }} />

      <main className="max-w-[1600px] mx-auto px-[30px] lg:px-20 xl:px-32 mb-32 pt-28">
        {renderContent()}
      </main>

      <footer id={SectionId.FOOTER} className="bg-ink text-white py-12 px-[30px] lg:px-20 xl:px-32 mt-12 relative overflow-hidden rounded-t-[2.5rem]">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-1 bg-primary rounded-b-full"></div>
        <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-primary opacity-10 rounded-full blur-3xl animate-pulse"></div>

        <div className="max-w-4xl mx-auto flex flex-col items-center text-center relative z-10 space-y-8">
          <div className="flex items-center gap-3">
            <h2 className="font-heading text-2xl md:text-3xl font-bold">
              Thanks for visiting my portfolio!
            </h2>
            <Heart className="w-8 h-8 text-primary fill-current" />
          </div>
          <div className="flex items-center gap-4">
            <a href="mailto:@tnl22@cornell.edu" className="p-3 bg-white/10 rounded-full hover:bg-primary hover:text-white transition-colors text-white" aria-label="Email">
              <Mail className="w-5 h-5" />
            </a>
            <a href="https://www.linkedin.com/in/tranle3010/" className="p-3 bg-white/10 rounded-full hover:bg-primary hover:text-white transition-colors text-white" aria-label="LinkedIn">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="https://github.com/betatran3010" className="p-3 bg-white/10 rounded-full hover:bg-primary hover:text-white transition-colors text-white" aria-label="GitHub">
              <Github className="w-5 h-5" />
            </a>
          </div>
          <div className="flex flex-col md:flex-row items-center gap-2 md:gap-6 text-slate-400 font-bold text-sm">
            <span>Let's connect at tnl22@cornell.edu!</span>
          </div>
          <div className="flex flex-col md:flex-row items-center gap-2 md:gap-6 text-slate-400 font-bold text-sm">
            <span>© 2026 Tran Le</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
