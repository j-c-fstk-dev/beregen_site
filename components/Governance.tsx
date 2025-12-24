import React from 'react';
import PageHeader from './PageHeader';
import Button from './Button';
import { Scale, AlertCircle, ShieldCheck, Zap, Users, Activity, RefreshCw, FileText } from 'lucide-react';

const Governance: React.FC = () => {
  return (
    <div className="pt-20 min-h-screen bg-regen-cream font-sans">
      <PageHeader 
        title="Governance (GOPR)" 
        subtitle="Governance Optimistic weighted by Reputation"
        backgroundImage="https://images.unsplash.com/photo-1575320294868-b422fa77c3e8?q=80&w=2670&auto=format&fit=crop"
      />
      
      {/* SECTION — INTRODUCTION */}
      <section className="py-16 md:py-24 container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
           <Scale className="w-16 h-16 text-regen-accent mx-auto mb-6" />
           <h2 className="text-3xl md:text-5xl font-serif font-bold text-regen-dark mb-8 leading-tight">
             Governance that protects trust, not power.
           </h2>
           <div className="text-xl text-gray-600 leading-relaxed space-y-6 text-left md:text-center">
             <p>
               Regenerative systems only scale when trust is preserved. Governance is not an accessory to the BeRegen ecosystem — it is a foundational layer.
             </p>
             <p>
               GOPR (Governance Optimistic weighted by Reputation) is the governance framework used by the BeRegen ecosystem, designed to support fair decision-making, accountability and coordination without concentrating power or relying on financial dominance.
             </p>
             <p className="font-medium text-regen-dark">
               It exists to ensure that regenerative action is recognized, protected and guided by contribution, responsibility and collective oversight — not speculation or control.
             </p>
           </div>
        </div>
      </section>

      {/* SECTION — WHY GOVERNANCE MATTERS */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
             <h2 className="text-3xl font-serif font-bold text-regen-dark mb-8">Why governance matters in regenerative systems</h2>
             <p className="text-lg text-gray-600 mb-8">
               Most decentralized and community-driven initiatives fail not because of lack of vision, but because of weak governance.
             </p>
             
             <div className="bg-red-50 p-8 rounded-3xl border border-red-100 mb-8">
               <h3 className="font-bold text-red-800 mb-4 flex items-center gap-2">
                 Common failures include:
               </h3>
               <ul className="space-y-3 text-red-900/80">
                 <li className="flex gap-3">
                   <span className="w-1.5 h-1.5 mt-2 bg-red-400 rounded-full shrink-0"></span>
                   Decision-making dominated by capital or influence
                 </li>
                 <li className="flex gap-3">
                   <span className="w-1.5 h-1.5 mt-2 bg-red-400 rounded-full shrink-0"></span>
                   Low participation due to complexity or fatigue
                 </li>
                 <li className="flex gap-3">
                   <span className="w-1.5 h-1.5 mt-2 bg-red-400 rounded-full shrink-0"></span>
                   Lack of accountability for harmful or extractive behavior
                 </li>
                 <li className="flex gap-3">
                   <span className="w-1.5 h-1.5 mt-2 bg-red-400 rounded-full shrink-0"></span>
                   Slow or fragile execution of collective decisions
                 </li>
                 <li className="flex gap-3">
                   <span className="w-1.5 h-1.5 mt-2 bg-red-400 rounded-full shrink-0"></span>
                   No clear way to resolve disputes when conflicts arise
                 </li>
               </ul>
             </div>
             
             <p className="text-lg text-gray-600 border-l-4 border-regen-accent pl-6 italic">
               In regenerative ecosystems, these failures directly undermine trust — and without trust, regeneration cannot scale.<br/><br/>
               GOPR was created to address these challenges at the structural level.
             </p>
          </div>
        </div>
      </section>

      {/* SECTION — WHAT IS GOPR */}
      <section className="py-16 md:py-24 bg-regen-sand relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
           <div className="max-w-5xl mx-auto">
             <h2 className="text-3xl md:text-4xl font-serif font-bold text-regen-dark mb-12 text-center">What is GOPR?</h2>
             <p className="text-xl text-center text-gray-600 mb-12 max-w-3xl mx-auto">
               GOPR is a governance framework built around three core ideas:
             </p>
             
             <div className="grid md:grid-cols-3 gap-8">
               <div className="bg-white p-8 rounded-3xl shadow-sm hover:-translate-y-1 transition-transform duration-300">
                  <div className="w-12 h-12 bg-teal-100 rounded-2xl flex items-center justify-center text-regen-accent mb-6">
                    <Users className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-regen-dark mb-4">Contribution over capital</h3>
                  <p className="text-gray-600">Influence should reflect participation, responsibility and proven contribution — not token ownership or financial weight.</p>
               </div>
               
               <div className="bg-white p-8 rounded-3xl shadow-sm hover:-translate-y-1 transition-transform duration-300">
                  <div className="w-12 h-12 bg-amber-100 rounded-2xl flex items-center justify-center text-amber-600 mb-6">
                    <Zap className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-regen-dark mb-4">Fast execution with safety</h3>
                  <p className="text-gray-600">Decisions should move forward efficiently, while still allowing challenges, review and correction when needed.</p>
               </div>
               
               <div className="bg-white p-8 rounded-3xl shadow-sm hover:-translate-y-1 transition-transform duration-300">
                  <div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-600 mb-6">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-regen-dark mb-4">Accountability by design</h3>
                  <p className="text-gray-600">Actions that affect the ecosystem must carry responsibility, transparency and consequences.</p>
               </div>
             </div>
             
             <p className="text-center mt-12 text-lg text-gray-600">
               Rather than relying on pure on-chain voting or informal social consensus, GOPR combines reputation, optimistic execution and dispute resolution into a coherent governance flow.
             </p>
           </div>
        </div>
      </section>

      {/* SECTION — HOW GOPR WORKS (HIGH-LEVEL) */}
      <section className="py-16 md:py-24 bg-regen-cream">
        <div className="container mx-auto px-6">
           <div className="max-w-4xl mx-auto">
             <h2 className="text-3xl font-serif font-bold text-regen-dark mb-10">How GOPR works (high-level)</h2>
             <p className="text-lg text-gray-600 mb-8">At a conceptual level, GOPR follows this structure:</p>
             
             <div className="space-y-8">
               {[
                 { title: "1. Proposals are created", desc: "Ideas, changes or actions are proposed by participants — supported by structured documentation and context." },
                 { title: "2. Reputation-weighted signaling", desc: "Input and approval are weighted by reputation and contribution, not by financial power." },
                 { title: "3. Optimistic execution", desc: "Approved decisions move forward by default, reducing delays and friction." },
                 { title: "4. Challenge and review window", desc: "If a decision is harmful, incorrect or misaligned, it can be challenged within a defined period." },
                 { title: "5. Resolution and accountability", desc: "Disputes are resolved through predefined rules and neutral processes, ensuring fairness and transparency." }
               ].map((step, idx) => (
                 <div key={idx}>
                   <h3 className="text-xl font-bold text-regen-dark mb-2">{step.title}</h3>
                   <p className="text-gray-600">{step.desc}</p>
                 </div>
               ))}
             </div>
             
             <p className="mt-8 text-lg font-medium text-regen-dark">This approach keeps the system efficient without sacrificing safety.</p>
           </div>
        </div>
      </section>

      {/* SECTION — RELATIONSHIP WITH THE REGENIMPACTHUB */}
      <section className="py-16 md:py-24 bg-white border-y border-stone-100">
        <div className="container mx-auto px-6">
           <div className="max-w-4xl mx-auto">
             <h2 className="text-3xl font-serif font-bold text-regen-dark mb-6">Relationship with the RegenImpactHub</h2>
             <p className="text-lg text-gray-600 mb-8 leading-relaxed">
               The RegenImpactHub is the operational layer where identity, reputation and impact verification are built.
               <br/><br/>
               GOPR defines how decisions around that system are made.
             </p>
             
             <div className="bg-regen-sage p-8 rounded-3xl mb-8">
                <h4 className="font-bold text-regen-dark mb-4">In practice:</h4>
                <ul className="space-y-4 text-gray-700">
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 w-1.5 h-1.5 bg-regen-accent rounded-full shrink-0"></span>
                    The RegenImpactHub provides the signals (identity, contribution, validation history)
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 w-1.5 h-1.5 bg-regen-accent rounded-full shrink-0"></span>
                    GOPR uses those signals to guide governance processes
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 w-1.5 h-1.5 bg-regen-accent rounded-full shrink-0"></span>
                    Governance decisions shape how validation, participation and coordination evolve over time
                  </li>
                </ul>
             </div>
             
             <div className="prose prose-stone text-gray-600 max-w-none">
                <p>
                  While the RegenImpactHub MVP is currently in testing and not yet open for third-party impact registration, GOPR is already shaping the governance principles that will guide its evolution.
                </p>
                <p>
                  This ensures that as the platform grows, it does so with clear rules and aligned incentives from the beginning.
                </p>
             </div>
           </div>
        </div>
      </section>

      {/* SECTION — CURRENT STATUS */}
      <section className="py-16 md:py-24 bg-regen-dark text-white">
        <div className="container mx-auto px-6">
           <div className="max-w-4xl mx-auto">
             <div className="flex items-center gap-4 mb-8">
               <Activity className="w-8 h-8 text-regen-highlight" />
               <h2 className="text-3xl font-serif font-bold">Current status and roadmap alignment</h2>
             </div>
             
             <p className="text-xl text-gray-300 mb-8 font-light leading-relaxed">
               GOPR is currently implemented as a governance framework and design layer, not yet as a fully automated protocol.
             </p>
             
             <div className="bg-white/5 p-8 rounded-3xl border border-white/10 mb-8">
               <h4 className="text-regen-highlight font-bold mb-6 uppercase tracking-wider text-sm">At this stage:</h4>
               <ul className="space-y-4 text-gray-300">
                 <li className="flex items-center gap-3"><div className="w-2 h-2 bg-regen-highlight rounded-full"></div> Governance principles are defined</li>
                 <li className="flex items-center gap-3"><div className="w-2 h-2 bg-regen-highlight rounded-full"></div> Roles and responsibilities are mapped</li>
                 <li className="flex items-center gap-3"><div className="w-2 h-2 bg-regen-highlight rounded-full"></div> Decision flows are documented</li>
                 <li className="flex items-center gap-3"><div className="w-2 h-2 bg-regen-highlight rounded-full"></div> Community participation pathways are being prepared</li>
               </ul>
             </div>
             
             <p className="text-gray-300 leading-relaxed text-lg">
               Automation, advanced tooling and deeper integration with impact validation will be introduced gradually, in alignment with the RegenImpactHub roadmap.
               <br/><br/>
               This phased approach prioritizes trust, learning and real-world feedback over premature technical complexity.
             </p>
           </div>
        </div>
      </section>

      {/* SECTION — WHO PARTICIPATES */}
      <section className="py-16 md:py-24 bg-regen-cream">
        <div className="container mx-auto px-6">
           <div className="max-w-4xl mx-auto">
             <h2 className="text-3xl font-serif font-bold text-regen-dark mb-8">Who participates in governance?</h2>
             <p className="text-lg text-gray-600 mb-10 leading-relaxed">Governance within BeRegen is designed to be inclusive but responsible.</p>
             
             <div className="grid sm:grid-cols-2 gap-6 mb-12">
               <div className="bg-white p-8 rounded-2xl shadow-sm border border-stone-50">
                 <h4 className="font-bold text-regen-dark mb-3 text-lg">Contributors</h4>
                 <p className="text-gray-600">People actively building, researching or documenting regenerative work.</p>
               </div>
               <div className="bg-white p-8 rounded-2xl shadow-sm border border-stone-50">
                 <h4 className="font-bold text-regen-dark mb-3 text-lg">Validators & Stewards</h4>
                 <p className="text-gray-600">Participants supporting verification, review and accountability.</p>
               </div>
               <div className="bg-white p-8 rounded-2xl shadow-sm border border-stone-50">
                 <h4 className="font-bold text-regen-dark mb-3 text-lg">Partners</h4>
                 <p className="text-gray-600">Organizations aligned with regenerative principles and long-term collaboration.</p>
               </div>
               <div className="bg-white p-8 rounded-2xl shadow-sm border border-stone-50">
                 <h4 className="font-bold text-regen-dark mb-3 text-lg">Core maintainers</h4>
                 <p className="text-gray-600">Responsible for safeguarding the integrity and direction of the ecosystem.</p>
               </div>
             </div>
             
             <p className="text-center font-bold text-regen-dark text-xl">Participation grows with contribution, not status.</p>
           </div>
        </div>
      </section>

      {/* SECTION — GOVERNANCE AS LIVING INFRASTRUCTURE */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-6 text-center">
           <div className="max-w-3xl mx-auto">
             <RefreshCw className="w-12 h-12 text-regen-accent mx-auto mb-6" />
             <h2 className="text-3xl md:text-4xl font-serif font-bold text-regen-dark mb-8">Governance as living infrastructure</h2>
             <div className="text-xl text-gray-600 space-y-6 leading-relaxed">
               <p>GOPR is not a fixed rulebook.</p>
               <p>
                 It is a living governance framework that evolves alongside the ecosystem it supports — informed by practice, feedback and real-world constraints.
               </p>
               <p className="text-2xl font-serif italic text-regen-dark pt-4">
                 By grounding governance in contribution, transparency and responsibility, BeRegen aims to create coordination systems that regenerate trust instead of eroding it.
               </p>
             </div>
           </div>
        </div>
      </section>

      {/* SECTION — GET INVOLVED */}
      <section className="py-24 bg-regen-accent text-white">
         <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-5xl font-serif font-bold mb-10">Get involved</h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto mb-12 leading-relaxed">
              If you care about how regenerative systems make decisions — not just what they build — there are several ways to engage:
            </p>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto text-left mb-16">
               <div className="bg-white/10 p-6 rounded-2xl backdrop-blur-sm border border-white/20">
                  <h4 className="font-bold mb-2 text-lg">Follow</h4>
                  <p className="text-sm text-white/80">Follow the evolution of governance practices.</p>
               </div>
               <div className="bg-white/10 p-6 rounded-2xl backdrop-blur-sm border border-white/20">
                  <h4 className="font-bold mb-2 text-lg">Participate</h4>
                  <p className="text-sm text-white/80">Participate as a validator or steward.</p>
               </div>
               <div className="bg-white/10 p-6 rounded-2xl backdrop-blur-sm border border-white/20">
                  <h4 className="font-bold mb-2 text-lg">Contribute</h4>
                  <p className="text-sm text-white/80">Contribute to documentation and frameworks.</p>
               </div>
               <div className="bg-white/10 p-6 rounded-2xl backdrop-blur-sm border border-white/20">
                  <h4 className="font-bold mb-2 text-lg">Partner</h4>
                  <p className="text-sm text-white/80">Partner with the ecosystem at an institutional level.</p>
               </div>
            </div>
            
            <div className="max-w-2xl mx-auto border-t border-white/20 pt-12">
               <p className="text-2xl md:text-3xl font-serif italic mb-10 leading-relaxed">
                 "Governance is not a layer above the system. <br/>
                 It is the system learning how to take care of itself."
               </p>
               <Button href="/contact" variant="primary" className="bg-white text-regen-accent hover:bg-gray-100">
                  Contact Us to Learn More
               </Button>
            </div>
         </div>
      </section>

      {/* SECTION — LONG-TERM VISION */}
      <section className="py-24 bg-stone-50 border-t border-stone-200">
         <div className="container mx-auto px-6 text-center">
            <div className="max-w-3xl mx-auto">
               <div className="flex justify-center mb-8">
                 <FileText className="w-12 h-12 text-stone-400" />
               </div>
               <h2 className="text-sm font-bold tracking-widest uppercase text-regen-stone mb-8">Long-Term Governance Vision</h2>
               
               <p className="text-xl text-gray-700 mb-10 leading-relaxed font-medium">
                 GOPR is designed as a long-term governance framework, not a fixed or fully deployed protocol.
               </p>

               <div className="text-left max-w-lg mx-auto bg-white p-8 rounded-3xl shadow-sm border border-stone-200 mb-10">
                  <p className="text-gray-600 mb-6 font-medium">
                    For those interested in the deeper architectural, economic and coordination design behind GOPR, we maintain a governance whitepaper that documents:
                  </p>
                  <ul className="space-y-4 text-gray-600">
                    <li className="flex items-start gap-3"><div className="w-1.5 h-1.5 mt-2 bg-regen-accent rounded-full shrink-0"></div> the long-term governance vision</li>
                    <li className="flex items-start gap-3"><div className="w-1.5 h-1.5 mt-2 bg-regen-accent rounded-full shrink-0"></div> design principles and trade-offs</li>
                    <li className="flex items-start gap-3"><div className="w-1.5 h-1.5 mt-2 bg-regen-accent rounded-full shrink-0"></div> reputation-based influence models</li>
                    <li className="flex items-start gap-3"><div className="w-1.5 h-1.5 mt-2 bg-regen-accent rounded-full shrink-0"></div> optimistic execution and dispute resolution</li>
                    <li className="flex items-start gap-3"><div className="w-1.5 h-1.5 mt-2 bg-regen-accent rounded-full shrink-0"></div> how governance can evolve alongside real-world impact systems</li>
                  </ul>
               </div>

               <div className="mb-12 max-w-xl mx-auto">
                 <p className="text-sm text-gray-500 italic leading-relaxed">
                   This document is a research and design reference.<br/>
                   It does not represent a commitment to immediate or full implementation.
                 </p>
               </div>

               <Button href="/whitepaper" variant="outline" className="border-regen-stone text-regen-stone hover:bg-regen-stone hover:text-white hover:border-regen-stone">
                  Read the GOPR Whitepaper
               </Button>
            </div>
         </div>
      </section>

    </div>
  );
};

export default Governance;