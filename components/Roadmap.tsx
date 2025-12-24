import React from 'react';
import PageHeader from './PageHeader';
import { Compass, ShieldCheck, Video, Coins, Globe, Info, Milestone, AlertCircle, RefreshCw } from 'lucide-react';

const Roadmap: React.FC = () => {
  const phases = [
    {
      id: 1,
      title: "Phase 1 — Grounding & Field Validation",
      status: "Active",
      focus: "Root the ecosystem in real territories, practices and relationships.",
      elements: [
        "BeRegen IRL fieldwork routes",
        "Documentation of regenerative practices",
        "Early identity and validation experiments",
        "RegenImpactHub MVP (internal testing)",
        "Initial governance principles (GOPR design layer)"
      ],
      icon: <Compass className="w-6 h-6" />,
      color: "border-regen-accent bg-regen-sage/50"
    },
    {
      id: 2,
      title: "Phase 2 — Validation & Coordination Infrastructure",
      status: "In Progress",
      focus: "Strengthen trust, validation and coordination flows.",
      elements: [
        "Expanded validation logic and workflows",
        "Reputation signals (RegenScore) refinement",
        "Governance experimentation via GOPR",
        "Early steward and validator pathways",
        "Improved offline-first tooling (RegenKernel evolution)"
      ],
      icon: <ShieldCheck className="w-6 h-6" />,
      color: "border-blue-200 bg-blue-50/30"
    },
    {
      id: 3,
      title: "Phase 3 — Education & Shared Knowledge",
      status: "In Development",
      focus: "Transform practice into accessible, reusable learning.",
      elements: [
        "RegenFlix educational content",
        "Learning pathways based on fieldwork",
        "Open documentation and guides",
        "Storytelling as shared infrastructure",
        "Knowledge exchange across territories"
      ],
      icon: <Video className="w-6 h-6" />,
      color: "border-indigo-200 bg-indigo-50/30"
    },
    {
      id: 4,
      title: "Phase 4 — Resource Alignment & Funding Flows",
      status: "Planned",
      focus: "Align resources with verified contribution.",
      elements: [
        "RegenFund exploration",
        "Grant and donation integrations",
        "Reduced due diligence through verified impact",
        "Support for community-aligned funding models"
      ],
      icon: <Coins className="w-6 h-6" />,
      color: "border-amber-200 bg-amber-50/30"
    },
    {
      id: 5,
      title: "Phase 5 — Interoperability & Ecosystem Expansion",
      status: "Future",
      focus: "Enable integration beyond BeRegen.",
      elements: [
        "Public APIs and interoperability layers",
        "Collaboration with external ecosystems",
        "Governance portability",
        "Cross-territory coordination"
      ],
      icon: <Globe className="w-6 h-6" />,
      color: "border-stone-200 bg-stone-50/30"
    }
  ];

  return (
    <div className="pt-20 min-h-screen bg-regen-cream font-sans">
      <PageHeader 
        title="Roadmap" 
        subtitle="A phased, learning-driven path for a living ecosystem."
        backgroundImage="https://images.unsplash.com/photo-1502082553048-f009c37129b9?q=80&w=2670&auto=format&fit=crop"
      />

      {/* INTRO SECTION */}
      <section className="py-16 md:py-24 container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center space-y-8">
           <div className="text-xl md:text-2xl text-regen-stone leading-relaxed space-y-6">
             <p>
               BeRegen is not built through rigid timelines or fixed deliverables.
             </p>
             <p>
               It evolves through phases of learning, fieldwork, validation and refinement — guided by real-world feedback, not abstract roadmaps.
             </p>
             <p className="font-bold text-regen-dark">
               This roadmap describes <span className="text-regen-accent">direction</span>, not deadlines.
             </p>
           </div>

           <div className="pt-12 border-t border-stone-200 max-w-2xl mx-auto">
             <h2 className="text-2xl font-serif font-bold text-regen-dark mb-6">How to read this roadmap</h2>
             <p className="text-gray-600 mb-6">Each phase represents a layer of maturity, not a finish line.</p>
             <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-sm text-regen-stone font-medium italic">
               <p>Phases may overlap.</p>
               <p>Some components evolve faster than others.</p>
               <p>Progress is measured by coherence, trust and usability — not speed.</p>
             </div>
           </div>
        </div>
      </section>

      {/* PHASES TIMELINE */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto space-y-12">
             {phases.map((phase) => (
               <div 
                 key={phase.id} 
                 className={`relative p-8 md:p-12 rounded-[2.5rem] border-2 shadow-sm transition-all duration-500 hover:shadow-md ${phase.color}`}
               >
                 <div className="flex flex-col md:flex-row gap-8 items-start">
                    {/* Icon & Status */}
                    <div className="shrink-0 flex flex-col items-center gap-4">
                       <div className="w-16 h-16 bg-white rounded-2xl shadow-sm flex items-center justify-center text-regen-accent border border-stone-100">
                          {phase.icon}
                       </div>
                       <span className={`text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full ${
                         phase.status === 'Active' ? 'bg-green-100 text-green-700' :
                         phase.status === 'In Progress' ? 'bg-blue-100 text-blue-700' :
                         phase.status === 'In Development' ? 'bg-indigo-100 text-indigo-700' :
                         'bg-gray-100 text-gray-500'
                       }`}>
                         {phase.status}
                       </span>
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                       <h3 className="text-2xl md:text-3xl font-serif font-bold text-regen-dark mb-4">{phase.title}</h3>
                       <div className="mb-8">
                         <p className="text-sm font-bold text-regen-dark/40 uppercase tracking-widest mb-2">Focus:</p>
                         <p className="text-lg text-regen-stone leading-relaxed font-medium">{phase.focus}</p>
                       </div>
                       
                       <div>
                         <p className="text-sm font-bold text-regen-dark/40 uppercase tracking-widest mb-4">Key elements:</p>
                         <ul className="grid sm:grid-cols-2 gap-y-3 gap-x-8">
                           {phase.elements.map((element, idx) => (
                             <li key={idx} className="flex items-start gap-3 text-regen-stone text-sm">
                               <div className="w-1.5 h-1.5 mt-1.5 bg-regen-accent rounded-full shrink-0"></div>
                               <span>{element}</span>
                             </li>
                           ))}
                         </ul>
                       </div>
                    </div>
                 </div>

                 {/* Phase Number background decoration */}
                 <div className="absolute top-8 right-12 text-8xl font-serif font-bold text-regen-dark/5 select-none pointer-events-none hidden md:block">
                   {phase.id}
                 </div>
               </div>
             ))}

             <div className="pt-12 text-center text-regen-stone/60 italic text-sm">
                This phase-based growth ensures that all infrastructure is accountable to lived reality before scaling.
             </div>
          </div>
        </div>
      </section>

      {/* AVOIDANCE SECTION */}
      <section className="py-16 md:py-24 bg-regen-sand">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto bg-white p-10 md:p-16 rounded-[3rem] shadow-sm border border-stone-100">
             <div className="flex items-center gap-4 mb-10">
                <AlertCircle className="w-10 h-10 text-red-400" />
                <h2 className="text-3xl font-serif font-bold text-regen-dark">What this roadmap avoids</h2>
             </div>
             
             <div className="prose prose-lg text-regen-stone max-w-none">
                <p className="mb-8">BeRegen intentionally avoids:</p>
                <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4">
                   {[
                     "rigid deadlines",
                     "growth-at-all-costs strategies",
                     "premature automation",
                     "extractive monetization models",
                     "governance driven by capital"
                   ].map((item, idx) => (
                     <div key={idx} className="flex items-center gap-3 p-4 bg-red-50/30 rounded-2xl border border-red-100/30">
                        <div className="w-1.5 h-1.5 bg-red-300 rounded-full shrink-0"></div>
                        <span className="text-sm font-bold text-red-900/70 uppercase tracking-tight">{item}</span>
                     </div>
                   ))}
                </div>
                <p className="mt-12 text-xl font-serif text-regen-dark italic text-center">
                  “Trust is built slowly — and lost quickly.”
                </p>
             </div>
          </div>
        </div>
      </section>

      {/* A LIVING ROADMAP NOTE */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
             <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-regen-sand text-regen-stone text-xs font-bold uppercase tracking-widest mb-8">
                <RefreshCw className="w-4 h-4" />
                <span>A living roadmap</span>
             </div>
             <div className="prose prose-lg text-regen-stone mx-auto space-y-6">
                <p className="text-xl leading-relaxed">
                  This roadmap will evolve. Changes are informed by:
                </p>
                <div className="flex flex-wrap justify-center gap-x-8 gap-y-2 text-sm font-bold uppercase tracking-widest text-regen-dark/60">
                  <span>field experience</span>
                  <span>community feedback</span>
                  <span>governance processes</span>
                  <span>technical constraints</span>
                  <span>ethical considerations</span>
                </div>
                <p className="text-3xl md:text-4xl font-serif font-bold text-regen-dark pt-12 leading-tight">
                  “What matters is not reaching the end — but staying coherent along the way.”
                </p>
             </div>
          </div>
        </div>
      </section>

      {/* SECTION 5 — CALL TO ACTION */}
      <section className="py-24 bg-regen-dark text-white text-center relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none" 
             style={{ backgroundImage: 'radial-gradient(#ffffff 0.5px, transparent 0.5px)', backgroundSize: '20px 20px' }}></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-2xl mx-auto">
             <p className="text-2xl md:text-3xl font-serif font-bold mb-8 leading-relaxed">
               Interested in joining the path?
             </p>
             <div className="w-12 h-1 bg-regen-highlight mx-auto rounded-full"></div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Roadmap;