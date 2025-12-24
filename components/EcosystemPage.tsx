
import React from 'react';
import { Sprout, Video, Smartphone, LayoutGrid, Users, Heart, Share2, Globe, ShieldCheck, Zap, Leaf, Scale, ArrowRight } from 'lucide-react';
import Button from './Button';

const EcosystemPage: React.FC = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-regen-dark relative overflow-hidden text-white py-24 md:py-32">
        {/* Abstract Constellation Background */}
        <div className="absolute inset-0 opacity-20" 
             style={{ 
               backgroundImage: 'radial-gradient(circle at center, #0d9488 1px, transparent 1px)', 
               backgroundSize: '40px 40px' 
             }}>
        </div>
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-regen-accent/20 rounded-full blur-[120px]"></div>

        <div className="container mx-auto px-6 relative z-10 text-center">
          
          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-8 leading-tight">
            Ecosystem
          </h1>
          
          <h2 className="text-2xl md:text-3xl font-serif text-regen-highlight mb-6">
            <span className="text-regen-highlight">A connected, living regenerative infrastructure</span>
          </h2>
          
          <div className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto font-light leading-relaxed space-y-6">
            <p>
              BeRegen is not a single product or platform.
              It is a modular ecosystem designed to support regenerative action at multiple levels — from individual practice to community coordination and institutional engagement.
            </p>
            <p className="text-lg text-gray-400 border-t border-white/10 pt-6">
              Each module can stand on its own.<br/>
              Together, they form a living infrastructure for regeneration.
            </p>
          </div>
        </div>
      </section>

      {/* Why an ecosystem? */}
      <section id="why" className="py-24 bg-regen-cream relative">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
             <h2 className="text-3xl md:text-4xl font-serif font-bold text-regen-dark mb-8">Why an ecosystem?</h2>
             <div className="prose prose-lg text-regen-stone leading-relaxed">
                <p className="mb-6 text-xl">
                  Regenerative work already exists everywhere — in territories, relationships, cultures and daily practices.
                  <br/>
                  <span className="font-bold text-regen-dark">What is missing is not effort, but connection.</span>
                </p>
                <p className="mb-6">
                  Most initiatives operate in isolation, without shared infrastructure for:
                </p>
                <ul className="grid sm:grid-cols-2 gap-4 mb-8">
                  <li className="flex items-center gap-2"><div className="w-2 h-2 bg-regen-accent rounded-full"></div> visibility</li>
                  <li className="flex items-center gap-2"><div className="w-2 h-2 bg-regen-accent rounded-full"></div> recognition</li>
                  <li className="flex items-center gap-2"><div className="w-2 h-2 bg-regen-accent rounded-full"></div> coordination</li>
                  <li className="flex items-center gap-2"><div className="w-2 h-2 bg-regen-accent rounded-full"></div> learning</li>
                  <li className="flex items-center gap-2"><div className="w-2 h-2 bg-regen-accent rounded-full"></div> long-term sustainability</li>
                </ul>
                <p className="font-medium text-regen-dark border-l-4 border-regen-accent pl-4 italic">
                  BeRegen exists to connect these layers without centralizing control.
                </p>
             </div>
          </div>
        </div>
      </section>

      {/* How the ecosystem works */}
      <section className="py-24 bg-regen-sand relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-20"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-regen-dark mb-6">How the ecosystem works</h2>
            <p className="text-xl text-gray-600">The BeRegen ecosystem is organized as a set of interdependent layers:</p>
          </div>

          <div className="bg-white rounded-[3rem] p-8 md:p-16 shadow-2xl relative">
             <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-teal-500 via-emerald-500 to-amber-500"></div>
             
             {/* Flow Visualization */}
             {/* Added mt-10 for extra spacing from the top bar */}
             <div className="flex flex-wrap justify-center items-center gap-4 text-lg md:text-xl font-bold text-regen-dark mb-12 mt-10">
                <span 
                  className="bg-regen-sage px-4 py-2 rounded-lg animate-flow transition-colors duration-500" 
                  style={{ animationDelay: '0s' }}
                >
                  Action
                </span> 
                
                <ArrowRight className="text-regen-accent" />
                
                <span 
                  className="bg-regen-sage px-4 py-2 rounded-lg animate-flow transition-colors duration-500" 
                  style={{ animationDelay: '1.5s' }}
                >
                  Recognition
                </span>
                
                <ArrowRight className="text-regen-accent" />
                
                <span 
                  className="bg-regen-sage px-4 py-2 rounded-lg animate-flow transition-colors duration-500" 
                  style={{ animationDelay: '3.0s' }}
                >
                  Governance
                </span>
                
                <ArrowRight className="text-regen-accent" />
                
                <span 
                  className="bg-regen-sage px-4 py-2 rounded-lg animate-flow transition-colors duration-500" 
                  style={{ animationDelay: '4.5s' }}
                >
                  Resources
                </span>
                
                <ArrowRight className="text-regen-accent" />
                
                <span 
                  className="bg-regen-sage px-4 py-2 rounded-lg animate-flow transition-colors duration-500" 
                  style={{ animationDelay: '6.0s' }}
                >
                  Learning
                </span>
             </div>

             <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
               <div className="p-6 bg-gray-50 rounded-2xl">
                 <h4 className="font-bold text-regen-dark mb-2">Action</h4>
                 <p className="text-gray-600">Happens in the real world</p>
               </div>
               <div className="p-6 bg-gray-50 rounded-2xl">
                 <h4 className="font-bold text-regen-dark mb-2">Recognition</h4>
                 <p className="text-gray-600">Makes impact visible and verifiable</p>
               </div>
               <div className="p-6 bg-gray-50 rounded-2xl">
                 <h4 className="font-bold text-regen-dark mb-2">Governance</h4>
                 <p className="text-gray-600">Enables fair and accountable decisions</p>
               </div>
               <div className="p-6 bg-gray-50 rounded-2xl">
                 <h4 className="font-bold text-regen-dark mb-2">Resources</h4>
                 <p className="text-gray-600">Support what proves valuable</p>
               </div>
               <div className="p-6 bg-gray-50 rounded-2xl">
                 <h4 className="font-bold text-regen-dark mb-2">Learning</h4>
                 <p className="text-gray-600">Feeds back into practice</p>
               </div>
             </div>
             
             <div className="mt-12 text-center pt-8 border-t border-gray-100">
               <p className="text-xl font-serif text-regen-dark italic">"This creates continuous regenerative cycles grounded in reality."</p>
             </div>
          </div>
        </div>
      </section>

      {/* Core Modules */}
      <section id="modules" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
             <span className="text-regen-accent font-bold tracking-widest uppercase text-sm">Ecosystem Architecture</span>
             <h2 className="text-4xl md:text-5xl font-serif font-bold text-regen-dark mt-2">Core Modules</h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            
            {/* RegenImpactHub */}
            <div className="bg-gradient-to-br from-[#081c18] to-regen-dark rounded-[2.5rem] p-10 text-white relative overflow-hidden group hover:-translate-y-1 transition-transform duration-500 shadow-xl col-span-1 lg:col-span-2">
               <div className="absolute top-0 right-0 w-64 h-64 bg-teal-500/10 rounded-full blur-3xl group-hover:bg-teal-500/20 transition-colors"></div>
               <div className="flex flex-col md:flex-row gap-8">
                 <div className="flex-1">
                   <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mb-6 text-regen-highlight relative z-10">
                      <ShieldCheck className="w-8 h-8" />
                   </div>
                   <h3 className="text-3xl font-serif font-bold mb-2">RegenImpactHub</h3>
                   <p className="text-regen-highlight text-sm font-medium uppercase tracking-wider mb-6">Identity, reputation and impact validation</p>
                   
                   <p className="text-gray-300 leading-relaxed mb-6">
                     RegenImpactHub is the core connective layer of the BeRegen ecosystem.
                     It is designed to register real-world regenerative actions and gradually transform them into verifiable impact and reputation.
                   </p>
                   
                   <p className="text-gray-300 leading-relaxed mb-6">
                     The current version is an early MVP, focused on validating the core concepts and workflows.
                     Some features are live and being tested, while others are still under development.
                   </p>
                   
                   <div className="mb-6">
                     <p className="text-sm font-bold text-white mb-2">Current capabilities include:</p>
                     <ul className="text-sm text-gray-300 grid sm:grid-cols-2 gap-2">
                       <li>• Regenerative identity creation</li>
                       <li>• Internal impact submission flows</li>
                       <li>• Early reputation signals (RegenScore)</li>
                       <li>• Validation logic experimentation</li>
                       <li>• Offline-aware design</li>
                     </ul>
                   </div>
                   
                   <p className="text-sm text-gray-400 italic mb-8">
                     Support for third-party impact submissions and broader public onboarding is planned for the next development phases.
                   </p>

                   <div className="flex flex-wrap items-center gap-4">
                      <span className="inline-block px-3 py-1 rounded-full bg-green-900/50 text-green-300 text-xs font-bold border border-green-700/50">Status: Active (MVP in testing)</span>
                      <Button href="/regenimpacthub" variant="accent" size="sm">Discover RegenImpactHub</Button>
                   </div>
                 </div>
               </div>
            </div>

            {/* Governance (GOPR) */}
            <div className="bg-blue-900 rounded-[2.5rem] p-10 text-white relative overflow-hidden group hover:-translate-y-1 transition-transform duration-500 shadow-xl">
               <div className="absolute bottom-0 right-0 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl"></div>
               <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mb-6 text-blue-300 relative z-10">
                  <Scale className="w-8 h-8" />
               </div>
               <h3 className="text-3xl font-serif font-bold mb-2">Governance (GOPR)</h3>
               <p className="text-blue-300 text-sm font-medium uppercase tracking-wider mb-6">Reputation-based decision-making</p>
               <p className="text-blue-100 leading-relaxed mb-6">
                 The BeRegen ecosystem uses an external governance infrastructure designed for fairness, efficiency and resilience.
                 <br/><br/>
                 GOPR (Governance Optimistic weighted by Reputation) replaces token-based control with reputation, optimistic execution and accountability mechanisms.
               </p>
               <div className="mb-6 bg-blue-800/50 p-4 rounded-xl">
                 <p className="font-bold text-blue-200 mb-2">It enables:</p>
                 <ul className="text-sm text-blue-100 space-y-1">
                   <li>• Decisions weighted by contribution, not capital</li>
                   <li>• Fast execution with built-in safeguards</li>
                   <li>• Dispute resolution without blocking operations</li>
                 </ul>
               </div>
               <p className="text-sm text-blue-200 mb-6">Governance evolves alongside the ecosystem and is applied progressively as the infrastructure matures.</p>
               
               <div className="mt-auto pt-6 border-t border-white/10 flex flex-wrap gap-4 items-center">
                 <span className="text-xs font-bold text-blue-300 uppercase">Status: In development</span>
                 <Button href="/governance" variant="outline" size="sm" className="border-blue-400 text-blue-100 hover:bg-blue-800 hover:border-blue-300">Learn about the governance infrastructure (GOPR)</Button>
               </div>
            </div>

            {/* RegenFlix */}
            <div className="bg-indigo-900 rounded-[2.5rem] p-10 text-white relative overflow-hidden group hover:-translate-y-1 transition-transform duration-500 shadow-xl">
               <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-500/20 rounded-full blur-3xl"></div>
               <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mb-6 text-indigo-300 relative z-10">
                  <Video className="w-8 h-8" />
               </div>
               <h3 className="text-3xl font-serif font-bold mb-2">RegenFlix</h3>
               <p className="text-indigo-300 text-sm font-medium uppercase tracking-wider mb-6">Regenerative education</p>
               <p className="text-indigo-100 leading-relaxed mb-6">
                 RegenFlix is the educational layer of the BeRegen ecosystem.
                 It focuses exclusively on structured learning and practical knowledge for applying regenerative principles.
               </p>
               <ul className="text-sm text-indigo-100 space-y-2 mb-6 list-disc pl-4">
                 <li>Short courses and learning pathways</li>
                 <li>Practical guides and educational content</li>
                 <li>Frameworks for regenerative practice</li>
               </ul>
               <div className="pt-6 border-t border-white/10">
                 <p className="text-sm text-indigo-300">Personal storytelling and behind-the-scenes experiences are shared through Patreon, not RegenFlix.</p>
                 <span className="text-xs font-bold text-indigo-300 uppercase mt-4 block">Status: In development</span>
               </div>
            </div>

            {/* RegenApp */}
            <div className="bg-emerald-900 rounded-[2.5rem] p-10 text-white relative overflow-hidden group hover:-translate-y-1 transition-transform duration-500 shadow-xl">
               <div className="absolute top-0 left-1/2 w-64 h-64 bg-emerald-500/20 rounded-full blur-3xl"></div>
               <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mb-6 text-emerald-300 relative z-10">
                  <Zap className="w-8 h-8" />
               </div>
               <h3 className="text-3xl font-serif font-bold mb-2">RegenApp</h3>
               <p className="text-emerald-300 text-sm font-medium uppercase tracking-wider mb-6">Daily regenerative practice</p>
               <p className="text-emerald-100 leading-relaxed mb-6">
                 RegenApp supports small, consistent actions that cultivate regenerative presence in everyday life.
                 <br/><br/>
                 Through habits, micro-actions and thematic journeys, it connects individual practice with collective impact.
               </p>
               <div className="pt-6 border-t border-white/10 mt-auto">
                 <span className="text-xs font-bold text-emerald-300 uppercase">Status: Planned</span>
               </div>
            </div>

             {/* RegenFund */}
             <div className="bg-amber-900 rounded-[2.5rem] p-10 text-white relative overflow-hidden group hover:-translate-y-1 transition-transform duration-500 shadow-xl">
               <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/20 rounded-full blur-3xl"></div>
               <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mb-6 text-amber-300 relative z-10">
                  <LayoutGrid className="w-8 h-8" />
               </div>
               <h3 className="text-3xl font-serif font-bold mb-2">RegenFund</h3>
               <p className="text-amber-300 text-sm font-medium uppercase tracking-wider mb-6">Community-aligned finance</p>
               <p className="text-amber-100 leading-relaxed mb-6">
                 RegenFund is the future financial layer of the ecosystem.
                 It is designed to support grants, incentives and funding mechanisms aligned with verified regenerative impact.
               </p>
               <div className="pt-6 border-t border-white/10 mt-auto">
                 <p className="text-sm text-amber-300 font-bold italic">"Capital follows contribution — not speculation."</p>
                 <span className="text-xs font-bold text-amber-300 uppercase mt-4 block">Status: Planned</span>
               </div>
            </div>

          </div>
        </div>
      </section>

      {/* A living system */}
      <section className="py-24 bg-regen-cream">
        <div className="container mx-auto px-6">
           <div className="max-w-4xl mx-auto text-center">
             <h2 className="text-3xl md:text-5xl font-serif font-bold text-regen-dark mb-8">A living system</h2>
             <p className="text-xl text-gray-600 mb-8 leading-relaxed">
               BeRegen is intentionally built as an open, evolving system.
             </p>
             <div className="grid md:grid-cols-3 gap-6 text-left mb-12">
               <div className="bg-white p-6 rounded-2xl shadow-sm">
                 <Sprout className="w-8 h-8 text-regen-accent mb-4" />
                 <p className="text-gray-700 font-medium">Modules may mature at different speeds</p>
               </div>
               <div className="bg-white p-6 rounded-2xl shadow-sm">
                 <Share2 className="w-8 h-8 text-regen-accent mb-4" />
                 <p className="text-gray-700 font-medium">Integrate external standards and tools</p>
               </div>
               <div className="bg-white p-6 rounded-2xl shadow-sm">
                 <Globe className="w-8 h-8 text-regen-accent mb-4" />
                 <p className="text-gray-700 font-medium">Adapt to local and cultural contexts</p>
               </div>
             </div>
             <p className="text-2xl font-serif text-regen-dark italic">
               "What matters is not uniformity, but coherence."
             </p>
           </div>
        </div>
      </section>

      {/* Join the ecosystem CTA */}
      <section className="py-24 bg-regen-accent text-white text-center">
         <div className="container mx-auto px-6">
            <h2 className="text-3xl md:text-5xl font-serif font-bold mb-8">Join the ecosystem</h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto mb-10 leading-relaxed">
              The BeRegen ecosystem grows through participation, contribution and shared stewardship.
              Whether you engage through practice, validation, partnership or support, you are part of a living regenerative system.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button href="/participate" variant="primary" className="bg-white text-regen-accent hover:bg-gray-100">Participate</Button>
              <Button href="/governance" variant="outline" className="border-white text-white hover:bg-white hover:text-regen-accent">Explore Governance</Button>
            </div>
            
            <p className="mt-12 text-white/70 text-sm max-w-2xl mx-auto">
              BeRegen does not seek to control regeneration. It exists to connect what already works, while allowing each layer and infrastructure to evolve independently.
            </p>
         </div>
      </section>
    </div>
  );
};

export default EcosystemPage;
