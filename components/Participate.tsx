import React from 'react';
import PageHeader from './PageHeader';
import Button from './Button';
import { 
  Users, 
  MapPin, 
  ShieldCheck, 
  Handshake, 
  Heart, 
  ArrowRight, 
  Info, 
  Star 
} from 'lucide-react';

const Participate: React.FC = () => {
  return (
    <div className="pt-20 min-h-screen bg-regen-cream font-sans">
      <PageHeader 
        title="Participate in the BeRegen Ecosystem" 
        subtitle="Multiple ways to engage — grounded in contribution, responsibility and real-world action."
        backgroundImage="https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=2574&auto=format&fit=crop"
      />

      {/* SECTION 1 — INTRODUCTION */}
      <section className="py-16 md:py-24 container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
           <Users className="w-16 h-16 text-regen-accent mx-auto mb-8" />
           <div className="text-xl md:text-2xl text-regen-stone leading-relaxed space-y-6">
             <p>
               BeRegen grows through participation, not spectatorship.
             </p>
             <p>
               This ecosystem exists to support people and communities who are already regenerating territories, relationships and ways of living — and to offer clear pathways for those who want to contribute responsibly.
             </p>
             <p className="text-2xl font-serif italic text-regen-dark pt-4">
               Participation is not symbolic.<br />
               It is practical, progressive and aligned with real contribution.
             </p>
           </div>
        </div>
      </section>

      {/* SECTION 2 — PARTICIPATION PATHWAYS */}
      <section className="py-16 md:py-24 bg-regen-sand relative">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto mb-16 text-center">
             <h2 className="text-3xl md:text-5xl font-serif font-bold text-regen-dark mb-6">Ways to participate</h2>
             <p className="text-xl text-gray-600 leading-relaxed">
               There is no single entry point into BeRegen.<br/>
               Different roles serve different layers of the ecosystem — from on-the-ground action to validation, coordination and long-term support.
             </p>
          </div>

          <div className="space-y-12">
            {/* SUBSECTION — BeRegen IRL · The Regenerative Route */}
            <div className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-sm border border-stone-100 group transition-all duration-300">
               <div className="flex flex-col md:flex-row gap-8 items-start">
                  <div className="w-14 h-14 bg-teal-50 rounded-2xl flex items-center justify-center text-regen-accent shrink-0">
                    <MapPin className="w-7 h-7" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-serif font-bold text-regen-dark mb-4">BeRegen IRL — The Regenerative Route</h3>
                    <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                      BeRegen IRL is the field layer of the ecosystem.
                      <br/><br/>
                      Through a series of on-the-ground visits, learning circles and community gatherings, we connect regenerative projects with digital infrastructure for identity, reputation and coordination.
                    </p>
                    <div className="bg-regen-sage p-6 rounded-2xl mb-8">
                       <p className="font-bold text-regen-dark mb-3">These encounters serve as:</p>
                       <ul className="space-y-2 text-gray-700">
                         <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-regen-accent rounded-full"></div> living learning spaces</li>
                         <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-regen-accent rounded-full"></div> cultural and educational exchanges</li>
                         <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-regen-accent rounded-full"></div> the onboarding pipeline and pilot for the RegenImpactHub</li>
                       </ul>
                    </div>
                    <p className="text-gray-600 italic mb-8">Each visit documents real-world regenerative action and feeds validated data into the ecosystem.</p>
                    <Button href="/early-access" variant="accent">Join the Regenerative Route</Button>
                  </div>
               </div>
            </div>

            {/* SUBSECTION — Validators & Stewards */}
            <div className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-sm border border-stone-100 group transition-all duration-300">
               <div className="flex flex-col md:flex-row gap-8 items-start">
                  <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 shrink-0">
                    <ShieldCheck className="w-7 h-7" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-serif font-bold text-regen-dark mb-4">Validators & Stewards</h3>
                    <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                      Validators and stewards help preserve trust within the ecosystem by reviewing impact, supporting accountability and safeguarding governance processes.
                    </p>
                    <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                      <div className="flex items-start gap-3">
                        <ArrowRight className="w-5 h-5 text-blue-600 mt-1" />
                        <span className="text-gray-700">review and validation of impact submissions</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <ArrowRight className="w-5 h-5 text-blue-600 mt-1" />
                        <span className="text-gray-700">accountability processes</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <ArrowRight className="w-5 h-5 text-blue-600 mt-1" />
                        <span className="text-gray-700">care for governance and coordination flows</span>
                      </div>
                    </div>
                    <p className="text-gray-600 italic mb-8 border-l-4 border-blue-600 pl-6">
                      This role grows with reputation and responsibility. It is not based on authority or status, but on contribution and integrity.
                    </p>
                    <Button href="/validators" variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-600">Become a Validator or Steward</Button>
                  </div>
               </div>
            </div>

            {/* SUBSECTION — Partners */}
            <div className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-sm border border-stone-100 group transition-all duration-300">
               <div className="flex flex-col md:flex-row gap-8 items-start">
                  <div className="w-14 h-14 bg-indigo-50 rounded-2xl flex items-center justify-center text-indigo-600 shrink-0">
                    <Handshake className="w-7 h-7" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-serif font-bold text-regen-dark mb-4">Partners</h3>
                    <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                      Institutional and community partners collaborate with BeRegen to support long-term regenerative infrastructure.
                    </p>
                    <div className="bg-stone-50 p-6 rounded-2xl mb-8">
                       <p className="font-bold text-regen-dark mb-3">Partnerships may include:</p>
                       <ul className="space-y-2 text-gray-700">
                         <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-indigo-600 rounded-full"></div> research and pilots</li>
                         <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-indigo-600 rounded-full"></div> education and documentation</li>
                         <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-indigo-600 rounded-full"></div> infrastructure development</li>
                         <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-indigo-600 rounded-full"></div> funding and grants aligned with verified impact</li>
                       </ul>
                    </div>
                    <p className="text-gray-600 italic mb-8">We prioritize partnerships grounded in shared values and long-term commitment.</p>
                    <Button href="/partners" variant="outline" className="border-indigo-600 text-indigo-600 hover:bg-indigo-600">Explore Partnerships</Button>
                  </div>
               </div>
            </div>

            {/* SUBSECTION — Supporters */}
            <div className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-sm border border-stone-100 group transition-all duration-300">
               <div className="flex flex-col md:flex-row gap-8 items-start">
                  <div className="w-14 h-14 bg-red-50 rounded-2xl flex items-center justify-center text-red-500 shrink-0">
                    <Heart className="w-7 h-7" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-serif font-bold text-regen-dark mb-4">Support the Ecosystem</h3>
                    <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                      Supporters help sustain the ecosystem financially and culturally.
                    </p>
                    <div className="grid sm:grid-cols-2 gap-4 mb-8">
                       <div className="p-4 bg-red-50/50 rounded-xl">
                          <p className="text-sm font-bold text-red-900 mb-1">Fieldwork</p>
                          <p className="text-xs text-red-800/70">Support visits and documentation</p>
                       </div>
                       <div className="p-4 bg-red-50/50 rounded-xl">
                          <p className="text-sm font-bold text-red-900 mb-1">Infrastructure</p>
                          <p className="text-xs text-red-800/70">Development of open tools</p>
                       </div>
                       <div className="p-4 bg-red-50/50 rounded-xl">
                          <p className="text-sm font-bold text-red-900 mb-1">Education</p>
                          <p className="text-xs text-red-800/70">Creation of content and guides</p>
                       </div>
                       <div className="p-4 bg-red-50/50 rounded-xl">
                          <p className="text-sm font-bold text-red-900 mb-1">Accessibility</p>
                          <p className="text-xs text-red-800/70">Resources for local communities</p>
                       </div>
                    </div>
                    <p className="text-gray-600 italic mb-8">Support does not grant control. It sustains independence and integrity.</p>
                    <div className="flex flex-wrap gap-4">
                      <Button href="/support" variant="accent">Support via Patreon</Button>
                      <Button href="/support" variant="outline" className="border-red-500 text-red-500 hover:bg-red-500">Support via Giveth</Button>
                      <Button href="/store" variant="ghost">Visit the Store</Button>
                    </div>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3 — PRINCIPLES OF PARTICIPATION */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
             <div className="flex items-center gap-4 mb-10">
                <Star className="w-8 h-8 text-regen-accent" />
                <h2 className="text-3xl font-serif font-bold text-regen-dark">How participation works</h2>
             </div>
             
             <div className="grid md:grid-cols-2 gap-8 mb-10">
                {[
                  { title: "Contribution-based", desc: "Participation grows with contribution, not influence." },
                  { title: "Responsible", desc: "Responsibility increases with access." },
                  { title: "Transparent", desc: "Trust is built through transparency and continuity." },
                  { title: "Living", desc: "The ecosystem evolves through practice and feedback." }
                ].map((principle, idx) => (
                  <div key={idx} className="flex gap-4">
                     <div className="w-2 h-2 bg-regen-accent rounded-full mt-2 shrink-0"></div>
                     <div>
                        <h4 className="font-bold text-regen-dark mb-1">{principle.title}</h4>
                        <p className="text-gray-600">{principle.desc}</p>
                     </div>
                  </div>
                ))}
             </div>
             <p className="text-gray-600 italic border-l-4 border-regen-accent pl-6">
               Most participation pathways gradually connect to the RegenImpactHub as contribution and reputation evolve.
             </p>
          </div>
        </div>
      </section>

      {/* SECTION 4 — CLOSING */}
      <section className="py-24 bg-regen-cream text-center relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl mx-auto">
             <div className="flex justify-center mb-8">
                <Info className="w-12 h-12 text-regen-accent/50" />
             </div>
             <div className="text-xl md:text-2xl text-regen-stone leading-relaxed font-light mb-12">
               <p className="mb-6">
                 BeRegen does not ask people to believe in regeneration.
               </p>
               <p>
                 It exists to support those who are already practicing it — and to connect them through shared infrastructure.
               </p>
             </div>
             <p className="text-2xl md:text-3xl font-serif font-bold text-regen-dark mb-12">
               If you feel aligned, there is a place for you here.
             </p>
             <Button href="/contact" variant="primary" size="lg">
                Get in touch to participate
             </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Participate;