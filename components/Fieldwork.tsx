import React from 'react';
import PageHeader from './PageHeader';
import Button from './Button';
import { Compass, MapPin, Users, BookOpen, Heart, ArrowRight, Microscope } from 'lucide-react';

const Fieldwork: React.FC = () => {
  return (
    <div className="pt-20 min-h-screen bg-regen-cream font-sans">
      <PageHeader 
        title="Fieldwork" 
        subtitle="Regeneration happens on the ground."
        backgroundImage="https://images.unsplash.com/photo-1596788069359-54b67060505b?q=80&w=2574&auto=format&fit=crop"
      />

      {/* SECTION 1 — INTRODUCTION */}
      <section className="py-16 md:py-24 container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
           <Compass className="w-16 h-16 text-regen-accent mx-auto mb-8" />
           <div className="text-xl md:text-2xl text-regen-stone leading-relaxed space-y-6">
             <p>
               BeRegen is not built only through theory, platforms or laboratories.
             </p>
             <p>
               It grows from direct contact with territories, communities and real regenerative practices.
             </p>
             <p>
               Fieldwork is the living foundation of the BeRegen ecosystem — where learning, validation and infrastructure meet reality.
             </p>
             <p className="text-2xl font-serif italic text-regen-dark pt-4">
               “Practice informs technology — never the other way around.”
             </p>
           </div>
        </div>
      </section>

      {/* SECTION 2 — WHAT FIELDWORK MEANS IN BEREGEN */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
             <div className="flex items-center gap-4 mb-8">
               <Microscope className="w-8 h-8 text-regen-accent" />
               <h2 className="text-3xl font-serif font-bold text-regen-dark">What we mean by fieldwork</h2>
             </div>
             
             <div className="prose prose-lg text-regen-stone max-w-none space-y-6">
                <p>
                  Fieldwork in BeRegen is not extraction, observation or data collection detached from context.
                </p>
                <p>
                  It is a process of presence, listening and shared experience.
                </p>
                <div className="bg-regen-sage p-8 rounded-3xl border border-stone-100">
                  <p className="font-bold text-regen-dark mb-4">Through fieldwork, we:</p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 mt-2.5 bg-regen-accent rounded-full shrink-0"></div>
                      <span>visit regenerative projects and communities</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 mt-2.5 bg-regen-accent rounded-full shrink-0"></div>
                      <span>learn directly from local practices and knowledge</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 mt-2.5 bg-regen-accent rounded-full shrink-0"></div>
                      <span>document actions with care and consent</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 mt-2.5 bg-regen-accent rounded-full shrink-0"></div>
                      <span>co-create understanding instead of imposing frameworks</span>
                    </li>
                  </ul>
                </div>
                <p className="font-medium text-regen-dark italic border-l-4 border-regen-accent pl-6">
                  Every visit is both a learning moment and a contribution to the ecosystem.
                </p>
             </div>
          </div>
        </div>
      </section>

      {/* SECTION 3 — THE REGENERATIVE ROUTE (IRL) */}
      <section className="py-16 md:py-24 bg-regen-sand relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-8">
               <MapPin className="w-8 h-8 text-regen-accent" />
               <h2 className="text-3xl font-serif font-bold text-regen-dark">BeRegen IRL — The Regenerative Route</h2>
            </div>
            
            <div className="text-lg text-regen-stone space-y-6 leading-relaxed">
              <p>
                The BeRegen IRL series is the field layer of the ecosystem.
              </p>
              <p>
                It is a living route of visits, gatherings and learning circles that connect regenerative initiatives with digital infrastructure for identity, reputation and coordination.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6 pt-6">
                {[
                  "creates a space for exchange and education",
                  "documents real-world regenerative practices",
                  "serves as an onboarding point for the RegenImpactHub",
                  "feeds verified data into the ecosystem"
                ].map((item, idx) => (
                  <div key={idx} className="bg-white/50 p-6 rounded-2xl border border-white/80 flex items-start gap-3">
                    <ArrowRight className="w-5 h-5 text-regen-accent mt-1 shrink-0" />
                    <span className="font-medium text-regen-dark">Each stop {item}</span>
                  </div>
                ))}
              </div>
              
              <p className="text-2xl font-serif text-regen-dark italic pt-8 text-center">
                Fieldwork is not an event. It is a continuous journey.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4 — FIELDWORK AS INFRASTRUCTURE */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
             <div className="flex items-center gap-4 mb-8">
               <Users className="w-8 h-8 text-regen-accent" />
               <h2 className="text-3xl font-serif font-bold text-regen-dark">From field experience to shared infrastructure</h2>
             </div>
             
             <div className="prose prose-lg text-regen-stone max-w-none space-y-6">
                <p>
                  Fieldwork is how BeRegen avoids abstraction and centralization.
                </p>
                <div className="bg-stone-50 p-8 rounded-3xl border border-stone-100">
                  <p className="font-bold text-regen-dark mb-4">Insights gathered on the ground inform:</p>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-regen-accent rounded-full shrink-0"></div> how impact is documented</li>
                    <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-regen-accent rounded-full shrink-0"></div> how validation flows are designed</li>
                    <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-regen-accent rounded-full shrink-0"></div> how governance principles evolve</li>
                    <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-regen-accent rounded-full shrink-0"></div> how educational content is created</li>
                  </ul>
                </div>
                <p>
                  This ensures that infrastructure remains accountable to reality, culture and place.
                </p>
             </div>
          </div>
        </div>
      </section>

      {/* SECTION 5 — WHERE FIELDWORK IS HAPPENING */}
      <section className="py-16 md:py-24 bg-regen-dark text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
             <MapPin className="w-12 h-12 text-regen-highlight mx-auto mb-6" />
             <h2 className="text-3xl md:text-4xl font-serif font-bold mb-8">Current Field Location</h2>
             
             <div className="bg-white/5 p-10 rounded-[3rem] border border-white/10 backdrop-blur-sm">
                <p className="text-regen-highlight font-mono uppercase tracking-widest text-sm mb-4">Active territory:</p>
                <p className="text-2xl md:text-4xl font-serif font-bold mb-8 leading-tight">
                  Vale do Paraíba & Serra da Mantiqueira — Brazil
                </p>
                
                <div className="text-left max-w-lg mx-auto space-y-4 text-gray-300">
                  <p>This region serves as the initial pilot territory for:</p>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-regen-highlight rounded-full"></div> the RegenImpactHub MVP</li>
                    <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-regen-highlight rounded-full"></div> governance and validation flows</li>
                    <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-regen-highlight rounded-full"></div> inclusive and offline-first tooling</li>
                    <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-regen-highlight rounded-full"></div> regenerative storytelling and documentation</li>
                  </ul>
                </div>
             </div>
             
             <p className="mt-12 text-gray-400 italic">Future routes will expand across Brazil and Latin America.</p>
          </div>
        </div>
      </section>

      {/* SECTION 6 — HOW TO ENGAGE THROUGH FIELDWORK */}
      <section className="py-16 md:py-24 bg-regen-cream">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
             <div className="flex items-center gap-4 mb-10">
               <Heart className="w-8 h-8 text-regen-accent" />
               <h2 className="text-3xl font-serif font-bold text-regen-dark">Engaging with the fieldwork layer</h2>
             </div>
             
             <p className="text-lg text-regen-stone mb-12">There are several ways to connect through fieldwork:</p>
             
             <div className="grid sm:grid-cols-2 gap-6 mb-16">
               <div className="bg-white p-8 rounded-2xl shadow-sm border border-stone-100">
                 <p className="font-bold text-regen-dark mb-2">Host</p>
                 <p className="text-gray-600">Host a visit or learning circle in your project.</p>
               </div>
               <div className="bg-white p-8 rounded-2xl shadow-sm border border-stone-100">
                 <p className="font-bold text-regen-dark mb-2">Participate</p>
                 <p className="text-gray-600">Participate in a local gathering or learning circle.</p>
               </div>
               <div className="bg-white p-8 rounded-2xl shadow-sm border border-stone-100">
                 <p className="font-bold text-regen-dark mb-2">Support</p>
                 <p className="text-gray-600">Support documentation, logistics and travel for field routes.</p>
               </div>
               <div className="bg-white p-8 rounded-2xl shadow-sm border border-stone-100">
                 <p className="font-bold text-regen-dark mb-2">Collaborate</p>
                 <p className="text-gray-600">Collaborate as a research, documentation or validation partner.</p>
               </div>
             </div>
             
             <p className="text-center text-lg text-regen-stone italic mb-12">
               Fieldwork participation is relational, contextual and based on mutual respect.
             </p>
             
             <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
               <Button href="/early-access" variant="accent">Join the Regenerative Route</Button>
               <Button href="/contact" variant="outline">Host a Field Visit</Button>
               <Button href="/contact" variant="ghost">Get in touch</Button>
             </div>
          </div>
        </div>
      </section>

      {/* SECTION 7 — CLOSING */}
      <section className="py-24 bg-white border-t border-stone-100">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-3xl mx-auto">
             <p className="text-xl md:text-2xl text-regen-stone leading-relaxed font-light mb-8">
               Fieldwork keeps the BeRegen ecosystem grounded.
             </p>
             <p className="text-xl md:text-2xl text-regen-stone leading-relaxed font-light mb-12">
               It is where regeneration stops being a concept and becomes lived experience — shared, documented and protected through infrastructure.
             </p>
             <p className="text-3xl font-serif font-bold text-regen-dark">
               Without fieldwork, there is no regeneration to scale.
             </p>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Fieldwork;