
import React from 'react';
import { Brain, Globe, AlertTriangle, Lightbulb, Search, Speech } from 'lucide-react';

const XplainProblemSection: React.FC = () => {
  return (
    <div className="space-y-12 animate-[fadeIn_0.5s_ease-out]">

      {/* Header & Subhead */}
      <div>
        <h2 className="text-2xl md:text-3xl font-heading font-black text-ink mb-3 flex items-center gap-3">
          <span className="text-primary">01.</span> Problem & Motivation
        </h2>
        <p className="text-ink text-lg">
          Why computer-mediated real-time conversations are more demanding for non-native speakers, and why reactive support falls short.
        </p>
      </div>

      {/* Conceptual Flow Container */}
      {/* Added ml-12 on mobile to account for the absolute left icons (-left-[43px]) */}
      <div className="relative border-l-2 border-slate-200 pl-8 md:pl-12 space-y-10 ml-12 md:ml-16 py-2">

        {/* 1. Cognitive Baseline */}
        <div className="relative">
          <div className="absolute -left-[48px] md:-left-[65px] top-0 w-8 h-8 md:w-10 md:h-10 bg-white border-2 border-slate-200 rounded-full flex items-center justify-center text-slate-400 shadow-sm z-10">
            <Brain className="w-4 h-4 md:w-5 md:h-5" />
          </div>
          <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-4">COGNITIVE DEMANDS OF REAL-TIME, COMPUTER-MEDIATED CONVERSATION</h3>
          <p className="text-ink-light text-lg md:text-md leading-relaxed">
            Live conversations require participants to process incoming speech <span className="text-ink font-bold">(comprehension)</span>, anticipate upcoming intent <span className="text-ink font-bold">(prediction)</span>, and formulate appropriate responses <span className="text-ink font-bold">(production)</span> within milliseconds. In computer-mediated settings such as <span className="text-ink font-bold">video conferencing</span>, now common in remote and hybrid workplaces, these demands are amplified by reduced visual and auditory cues. These issues and requirements altogether increase demands on predictive processing, making it harder to stay aligned and respond in a timely manner during meetings, classrooms, and interviews.
          </p>
        </div>

        {/* 2. NNS Experience */}
        <div className="relative">
          <div className="absolute -left-[48px] md:-left-[65px] top-0 w-8 h-8 md:w-10 md:h-10 bg-white border-2 border-slate-200 rounded-full flex items-center justify-center text-slate-400 shadow-sm z-10">
            <Globe className="w-4 h-4 md:w-5 md:h-5" />
          </div>
          <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-3">IMPACT OF LANGUAGE AND DOMAIN GAPS</h3>
          <div className="space-y-4">
            <p className="text-ink-light text-lg md:text-md leading-relaxed">
              For non-native speakers and participants unfamiliar with domain-specific language, even small comprehension gaps such as unfamiliar terminology, idioms, or cultural references can disrupt response planning and timing. These challenges increase cognitive load and make spontaneous participation more difficult.
            </p>
          </div>
        </div>

        {/* 3. Attribution Bias */}
        <div className="relative">
          <div className="absolute -left-[48px] md:-left-[65px] top-0 w-8 h-8 md:w-10 md:h-10 bg-white border-2 border-slate-200 rounded-full flex items-center justify-center text-slate-400 shadow-sm z-10">
            <Speech className="w-4 h-4 md:w-5 md:h-5" />
          </div>
          <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-3">ATTRIBUTION BIAS</h3>
          <p className="text-ink-light text-lg md:text-md leading-relaxed">
            In professional and educational contexts, hesitation or delayed responses are often misinterpreted as <span className="text-ink font-bold">disengagement or lack of preparation</span> rather than increased cognitive effort. Interviews and prior studies show that international students frequently avoid asking questions during live classes and instead spend additional time reviewing materials afterward. Similar patterns appear in multilingual or cross-functional workplaces, contributing to uneven participation and slower decision-making.
          </p>
        </div>

        {/* 4. Reactive Limits */}
        <div className="relative">
          <div className="absolute -left-[48px] md:-left-[65px] top-0 w-8 h-8 md:w-10 md:h-10 bg-white border-2 border-slate-200 rounded-full flex items-center justify-center text-slate-400 shadow-sm z-10">
            <AlertTriangle className="w-4 h-4 md:w-5 md:h-5" />
          </div>
          <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-3">LIMITATIONS OF REACTIVE SUPPORT</h3>
          <p className="text-ink-light text-lg md:text-md leading-relaxed">
            Most existing tools provide reactive support through transcripts, translation, or search. These require users to pause, shift attention, or revisit content <span className="text-ink font-bold">after the fact</span>, limiting their usefulness when continuity and timing are critical during live interaction.          </p>
        </div>

        {/* 5. Proactive Relevance */}
        <div className="relative">
          <div className="absolute -left-[48px] md:-left-[65px] top-0 w-8 h-8 md:w-10 md:h-10 bg-primary-light border-2 border-primary rounded-full flex items-center justify-center text-primary-dark shadow-sm z-10">
            <Lightbulb className="w-4 h-4 md:w-5 md:h-5" />
          </div>
          <h3 className="text-sm font-bold text-primary uppercase tracking-widest mb-3">Why Proactive Support?</h3>
          <p className="text-ink-light text-lg md:text-md leading-relaxed">
            Proactive support can offload predictive demands by anticipating potential linguistic, cultural, or domain-related knowledge gaps as conversations unfold. Timely, context-aware assistance can support comprehension, response planning, and alignment <span className="text-ink font-bold">during interaction</span> rather than after communication breakdowns occur.
          </p>
        </div>

      </div>

      {/* Problem Statement */}
      <div className="mt-8 bg-ink text-white p-6 md:p-10 rounded-3xl shadow-card relative overflow-hidden">
        {/* Decorative background element */}
        <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary opacity-20 rounded-full blur-3xl"></div>

        <div className="relative z-10">
          <div className="flex items-center gap-3 mb-4 text-primary font-bold uppercase tracking-widest text-xs">
            <Search className="w-4 h-4" /> Problem Statement
          </div>
          <h3 className="text-lg md:text-2xl font-heading font-bold leading-relaxed">
            How might we design a proactive AI system that anticipates and scaffolds prediction during real-time turn-taking to reduce comprehension, production, and participation barriers faced by non-native speakers in live conversations?
          </h3>
        </div>
      </div>

    </div>
  );
};

export default XplainProblemSection;
