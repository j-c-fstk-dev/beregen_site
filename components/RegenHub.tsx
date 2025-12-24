
import React from 'react';
import { Compass, Map, BookOpen, Users } from 'lucide-react';
import Button from './Button';

const RegenImpactHubSection: React.FC = () => {
  return (
    <section id="regenimpacthub" className="py-24 bg-[#081c18] relative overflow-hidden text-white">
      {/* Abstract Glowing Orbs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-regen-accent/20 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          <div className="lg:w-1/2">
             <div className="inline-flex items-center gap-2 mb-6">
                <span className="w-2 h-2 rounded-full bg-regen-highlight animate-pulse"></span>
                <span className="text-regen-highlight font-mono text-sm tracking-widest uppercase">Fieldwork</span>
             </div>
            <h2 className="text-4xl md:text-6xl font-serif font-bold mb-6 leading-tight">
              Regeneration happens on the ground
            </h2>
            
            <p className="text-gray-300 text-lg mb-8 leading-relaxed border-l-4 border-regen-accent pl-6">
              BeRegen is not built only through theory or laboratories.<br/>
              It grows from on-the-ground experiences.
            </p>
            
            <div className="grid sm:grid-cols-1 gap-4 mb-8">
              <div className="flex items-center gap-4 group">
                <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-regen-highlight group-hover:bg-regen-accent group-hover:text-white transition-colors duration-300">
                  <Map className="w-5 h-5" />
                </div>
                <span className="text-gray-300 group-hover:text-white transition-colors">Territorial journeys</span>
              </div>
              <div className="flex items-center gap-4 group">
                <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-regen-highlight group-hover:bg-regen-accent group-hover:text-white transition-colors duration-300">
                  <BookOpen className="w-5 h-5" />
                </div>
                <span className="text-gray-300 group-hover:text-white transition-colors">Living documentation</span>
              </div>
              <div className="flex items-center gap-4 group">
                <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-regen-highlight group-hover:bg-regen-accent group-hover:text-white transition-colors duration-300">
                  <Users className="w-5 h-5" />
                </div>
                <span className="text-gray-300 group-hover:text-white transition-colors">Direct learning with communities</span>
              </div>
            </div>

            <p className="text-xl font-serif italic text-white mb-10">
              "Practice informs technology — never the other way around."
            </p>

            <Button href="/fieldwork" variant="accent">
               Discover the Fieldwork
            </Button>
          </div>

          <div className="lg:w-1/2 relative">
             {/* Fieldwork Image */}
             <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-2">
                <img 
                  src="https://images.unsplash.com/photo-1596788069359-54b67060505b?q=80&w=2574&auto=format&fit=crop" 
                  alt="Fieldwork and Nature" 
                  className="w-full h-auto rounded-2xl opacity-90 hover:opacity-100 transition-opacity duration-500"
                />
                
                {/* Floating UI Elements */}
                <div className="absolute bottom-8 left-8 bg-black/60 backdrop-blur-md p-4 rounded-xl border border-white/10 flex items-center gap-4 shadow-xl">
                   <div className="bg-teal-500/20 p-2 rounded-lg">
                      <Compass className="w-6 h-6 text-regen-highlight" />
                   </div>
                   <div>
                      <div className="text-xs text-gray-400 uppercase tracking-wider">Active Location</div>
                      <div className="text-white font-mono font-bold">Mantiqueira Range, BR</div>
                   </div>
                </div>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default RegenImpactHubSection;
