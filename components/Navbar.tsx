
import React, { useState } from 'react';
import { View } from '../types';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  currentView: View;
  onChangeView: (view: View) => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentView, onChangeView }) => {
  const [isOpen, setIsOpen] = useState(false);
  const isWorksActive = currentView === 'works' || (typeof currentView === 'object' && currentView.type === 'project');
  const isAboutActive = currentView === 'about';
  const isResumeActive = currentView === 'resume';

  const handleNavClick = (view: View) => {
    onChangeView(view);
    setIsOpen(false);
  };

  const navLinks = [
    { label: 'Works', view: 'works' as const, active: isWorksActive },
    { label: 'About', view: 'about' as const, active: isAboutActive },
    { label: 'Resume', view: 'resume' as const, active: isResumeActive },
  ];

  return (
    <>
      <nav className="absolute top-6 left-1/2 -translate-x-1/2 bg-white/90 backdrop-blur-md z-50 border-2 border-slate-100 rounded-full py-3 px-6 shadow-card flex items-center justify-between gap-6 md:gap-8 transition-all w-[90vw] md:w-auto max-w-screen-xl">
        <div 
          onClick={() => handleNavClick('works')}
          className="font-heading font-black text-xl tracking-tight text-ink cursor-pointer flex items-center gap-1 shrink-0"
        >
          <span className="text-primary">●</span> Tran Le
        </div>
        
        {/* Desktop Separator & Links */}
        <div className="hidden md:flex items-center gap-1 h-4 w-0.5 bg-slate-200 rounded-full mx-2"></div>
        
        <div className="hidden md:flex gap-6 text-sm font-bold text-ink-light items-center">
          {navLinks.map((link) => (
            <button 
              key={link.label}
              onClick={() => handleNavClick(link.view)} 
              className={`transition-colors ${link.active ? 'text-primary' : 'hover:text-primary'}`}
            >
              {link.label}
            </button>
          ))}
          <a 
            href="https://www.linkedin.com/in/tranle3010/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:text-primary transition-colors"
          >
            LinkedIn
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button 
          className="md:hidden text-ink hover:text-primary transition-colors p-1"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <>
          <div 
            className="fixed inset-0 z-30" 
            onClick={() => setIsOpen(false)}
          />
          <div className="fixed top-24 left-1/2 -translate-x-1/2 w-[90vw] bg-white rounded-2xl shadow-xl border-2 border-slate-100 z-40 p-4 flex flex-col gap-2 md:hidden animate-[fadeIn_0.2s_ease-out]">
             {navLinks.map((link) => (
              <button 
                key={link.label}
                onClick={() => handleNavClick(link.view)} 
                className={`p-3 text-left font-bold rounded-xl transition-colors ${link.active ? 'bg-primary-light text-primary-dark' : 'hover:bg-slate-50 text-ink'}`}
              >
                {link.label}
              </button>
            ))}
            <div className="h-px bg-slate-100 my-1"></div>
            <a 
              href="https://www.linkedin.com/in/tranle3010/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="p-3 text-left font-bold rounded-xl hover:bg-slate-50 text-ink"
            >
              LinkedIn
            </a>
          </div>
        </>
      )}
    </>
  );
};

export default Navbar;
