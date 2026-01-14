
import React from 'react';
import { SectionId } from '../types';
import Button from './Button';
import { ArrowDown, Heart, Sprout, Flower } from 'lucide-react';

interface HeroProps {
  scrollTo: (id: SectionId) => void;
}

const Hero: React.FC<HeroProps> = ({ scrollTo }) => {
  return (
    <section className="pt-10 pb-16 w-full relative isolate">

      {/* Background Effect: Cute Digital Garden */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        {/* 1. Subtle Engineering Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#06b6d415_1px,transparent_1px),linear-gradient(to_bottom,#06b6d415_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>

        {/* 2. Floating Cute Icons */}
        {/* Heart Top Right */}
        <div className="absolute top-12 right-0 text-primary opacity-20 animate-float" style={{ animationDelay: '0s' }}>
          <Heart className="w-12 h-12 md:w-20 md:h-20 stroke-2 fill-primary/10 rotate-12" />
        </div>

        {/* Sprout Bottom Right */}
        <div className="absolute bottom-28 right-10 text-primary opacity-20 animate-float" style={{ animationDelay: '2s' }}>
          <Sprout className="w-8 h-8 md:w-16 md:h-16 stroke-2 fill-none" />
        </div>

        {/* Flower Top Left */}
        <div className="absolute top-3 left-4 md:left-1/4 text-primary opacity-15 animate-float" style={{ animationDelay: '1.5s' }}>
          <Flower className="w-10 h-10 md:w-14 md:h-14 stroke-2 rotate-12" />
        </div>

        {/* Small floating heart bottom left */}
        <div className="absolute bottom-28 left-0 md:left-20 text-primary opacity-20 animate-float" style={{ animationDelay: '3s' }}>
          <Heart className="w-6 h-6 md:w-10 md:h-10 fill-current stroke-none" />
        </div>
      </div>

      <div className="relative z-10 space-y-8 text-center md:text-left">

        <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-extrabold text-ink leading-[1.15] max-w-5xl mx-auto md:mx-0">
          Designing thoughtful digital user experiences driven by <br className="hidden md:block" />
          <span className="text-primary">behavioral research,</span> <br className="hidden md:block" />
          <span className="text-primary">cognitive insights,</span> <br className="hidden md:block" />
          <span className="text-primary">inclusive thinking,</span> <br className="hidden md:block" />
          and a <span className="text-primary">detail-oriented approach.</span> <br className="hidden md:block" />
        </h1>

        <div className="flex justify-center md:justify-start">
          <Button onClick={() => scrollTo(SectionId.WORKS)} variant="ghost" className="pl-0 gap-3 hover:bg-transparent text-ink hover:text-primary group">
            <div className="bg-white border-2 border-slate-100 group-hover:border-primary p-3 rounded-full shadow-sm transition-all group-hover:scale-110">
              <ArrowDown className="w-5 h-5 text-primary" />
            </div>
            <span className="text-sm font-black tracking-widest uppercase">Explore Research</span>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
