import React from 'react';
import { Quote } from 'lucide-react';

const Introduction: React.FC = () => {
  return (
    <section id="about" className="py-24 md:py-36 bg-regen-cream relative">
      {/* Decorative element */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-regen-highlight/20 rounded-full blur-3xl opacity-50 -translate-y-1/2 translate-x-1/2"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-16 items-start">
          
          {/* Section 1: The Problem */}
          <div className="md:w-1/2 relative">
             <div className="relative z-10">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-regen-dark leading-tight mb-6">
                  Regeneration is already happening.<br/>
                  <span className="text-regen-accent italic">But often in isolation.</span>
                </h2>
             </div>
             <div className="space-y-6 text-lg text-regen-stone leading-relaxed font-light">
               <p>
                 Every day, families, schools, small producers, local initiatives and communities regenerate territories, relationships and ways of living.
               </p>
               <div className="pl-6 border-l-2 border-regen-accent/30">
                 <p className="font-medium text-regen-dark mb-2">Yet much of this work remains:</p>
                 <ul className="list-disc pl-5 space-y-2">
                   <li>Scattered</li>
                   <li>Under-documented</li>
                   <li>Without fair recognition</li>
                   <li>Without the infrastructure needed for genuine collaboration</li>
                 </ul>
               </div>
             </div>
          </div>

          {/* Section 2: The Proposal */}
          <div className="md:w-1/2 bg-white p-8 md:p-10 rounded-3xl shadow-lg border border-stone-100">
            <h3 className="text-xl font-bold text-regen-accent uppercase tracking-widest mb-4">The BeRegen Proposal</h3>
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-regen-dark mb-6">
              Connecting scattered actions into a unified ecosystem
            </h2>
            <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
              <p>
                BeRegen was created to integrate technology, education and social coordination into a single infrastructure — enabling anyone or any community to:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 mt-2.5 bg-regen-accent rounded-full shrink-0"></span>
                  <span>Learn regenerative practices</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 mt-2.5 bg-regen-accent rounded-full shrink-0"></span>
                  <span>Act consistently over time</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 mt-2.5 bg-regen-accent rounded-full shrink-0"></span>
                  <span>Have their impact recognized in a safe and verifiable way</span>
                </li>
              </ul>
              <p className="font-medium text-regen-dark italic border-t border-stone-100 pt-6">
                We do not build isolated solutions.<br/>
                We build interconnected layers.
              </p>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Introduction;