import React from 'react';
import PageHeader from './PageHeader';
import { 
  Coins, 
  ShieldCheck, 
  Layers, 
  Compass, 
  Clock, 
  Info, 
  Handshake, 
  RefreshCw,
  Heart,
  Target,
  Scale
} from 'lucide-react';
import Button from './Button';

const RegenFund: React.FC = () => {
  return (
    <div className="pt-20 min-h-screen bg-regen-cream font-sans">
      <PageHeader 
        title="RegenFund" 
        subtitle="Aligning resources with verified regenerative contribution."
        backgroundImage="https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?q=80&w=2671&auto=format&fit=crop"
      />

      <div className="container mx-auto px-6 py-16 md:py-24">
        <div className="max-w-4xl mx-auto space-y-24">
          
          {/* SECTION 1 — INTRODUCTION */}
          <section className="text-center">
            <div className="prose prose-lg text-regen-stone mx-auto space-y-6">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-regen-dark leading-tight">
                Regenerative work needs resources — but not extractive finance.
              </h2>
              <p className="text-xl leading-relaxed">
                RegenFund is a planned future layer of the BeRegen ecosystem.
              </p>
              <p>
                It is designed to explore ways of aligning financial resources with verified regenerative impact, contribution and responsibility.
              </p>
              <div className="pt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="p-4 bg-red-50 text-red-700 rounded-2xl border border-red-100 text-xs font-bold uppercase tracking-widest">Not a traditional fund</div>
                <div className="p-4 bg-red-50 text-red-700 rounded-2xl border border-red-100 text-xs font-bold uppercase tracking-widest">Not an investment vehicle</div>
                <div className="p-4 bg-red-50 text-red-700 rounded-2xl border border-red-100 text-xs font-bold uppercase tracking-widest">No promised returns</div>
              </div>
              <p className="mt-8 text-sm font-medium text-regen-dark/60 italic">
                It exists to support, not to speculate.
              </p>
            </div>
          </section>

          {/* SECTION 2 — WHY REGENFUND EXISTS */}
          <section className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-sm border border-stone-100">
            <div className="flex items-center gap-4 mb-10">
              <Target className="w-8 h-8 text-amber-600" />
              <h2 className="text-3xl font-serif font-bold text-regen-dark">Why RegenFund exists</h2>
            </div>
            
            <p className="text-lg text-regen-stone mb-10 leading-relaxed">
              Across regenerative ecosystems, access to resources is often disconnected from real impact. 
              RegenFund exists to explore alternative approaches where:
            </p>
            
            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  title: "Resources follow contribution",
                  desc: "Verified regenerative actions become the primary signal for resource flow.",
                  icon: <RefreshCw className="w-6 h-6" />
                },
                {
                  title: "Reduced due diligence",
                  desc: "Trust and transparency in documentation lower the barrier for support.",
                  icon: <ShieldCheck className="w-6 h-6" />
                },
                {
                  title: "Alignment with responsibility",
                  desc: "Funding flows are tied to long-term accountability and proven integrity.",
                  icon: <Scale className="w-6 h-6" />
                },
                {
                  title: "Community autonomy",
                  desc: "Resources are provided in a way that respects local context and project independence.",
                  icon: <Heart className="w-6 h-6" />
                }
              ].map((item, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="w-12 h-12 bg-amber-50 rounded-2xl flex items-center justify-center text-amber-600 shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-regen-dark mb-1">{item.title}</h4>
                    <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <p className="mt-12 text-center text-lg font-serif italic text-regen-dark border-t border-stone-50 pt-8">
              “The goal is not scale for its own sake — but coherence.”
            </p>
          </section>

          {/* SECTION 3 — ECOSYSTEM RELATIONSHIP */}
          <section className="bg-regen-dark text-white p-8 md:p-12 rounded-[2.5rem] relative overflow-hidden">
             <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/10 rounded-full blur-[100px] pointer-events-none"></div>
             <div className="relative z-10">
               <div className="flex items-center gap-4 mb-10">
                 <Layers className="w-8 h-8 text-amber-500" />
                 <h2 className="text-3xl font-serif font-bold">Relationship with the ecosystem</h2>
               </div>
               
               <p className="text-lg text-gray-300 mb-10">
                 RegenFund is designed to integrate with other layers of BeRegen:
               </p>

               <div className="grid sm:grid-cols-2 gap-8">
                 <div className="space-y-4">
                   <div className="flex items-center gap-3 text-amber-500 font-bold uppercase tracking-widest text-xs">
                     <ShieldCheck className="w-4 h-4" /> RegenImpactHub
                   </div>
                   <p className="text-sm text-gray-300 leading-relaxed">Impact data and reputation provide signals for alignment.</p>
                 </div>
                 <div className="space-y-4">
                   <div className="flex items-center gap-3 text-amber-500 font-bold uppercase tracking-widest text-xs">
                     <Scale className="w-4 h-4" /> Governance (GOPR)
                   </div>
                   <p className="text-sm text-gray-300 leading-relaxed">Decision-making follows contribution and accountability, not capital weight.</p>
                 </div>
                 <div className="space-y-4">
                   <div className="flex items-center gap-3 text-amber-500 font-bold uppercase tracking-widest text-xs">
                     <Compass className="w-4 h-4" /> Fieldwork
                   </div>
                   <p className="text-sm text-gray-300 leading-relaxed">Funding exploration remains grounded in real territories and practices.</p>
                 </div>
                 <div className="space-y-4">
                   <div className="flex items-center gap-3 text-amber-500 font-bold uppercase tracking-widest text-xs">
                     <Handshake className="w-4 h-4" /> Stewardship
                   </div>
                   <p className="text-sm text-gray-300 leading-relaxed">RegenFund does not override governance. It follows it.</p>
                 </div>
               </div>
             </div>
          </section>

          {/* SECTION 4 — CURRENT STATUS */}
          <section className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-sm border border-stone-100">
             <div className="flex flex-col md:flex-row gap-8 items-start">
               <div className="w-16 h-16 bg-amber-50 rounded-2xl flex items-center justify-center text-amber-600 shrink-0">
                 <Clock className="w-8 h-8" />
               </div>
               <div>
                 <h2 className="text-3xl font-serif font-bold text-regen-dark mb-4">Current status</h2>
                 <p className="text-lg text-regen-stone mb-8">RegenFund is currently in planning and research.</p>
                 
                 <div className="space-y-4">
                   <p className="text-xs font-bold text-amber-600 uppercase tracking-widest">Important notice:</p>
                   <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-3">
                     {[
                       "no funding mechanisms are active",
                       "no applications are open",
                       "no financial commitments are offered",
                       "grants & donations being explored"
                     ].map((item, idx) => (
                       <div key={idx} className="flex items-center gap-3 p-3 bg-stone-50 rounded-xl border border-stone-100">
                         <div className="w-1.5 h-1.5 bg-amber-500 rounded-full shrink-0"></div>
                         <span className="text-xs font-medium text-regen-dark">{item}</span>
                       </div>
                     ))}
                   </div>
                 </div>
                 <p className="mt-8 text-sm text-gray-500 italic">
                   Exploration includes non-extractive and impact-led community-aligned funding models.
                 </p>
               </div>
             </div>
          </section>

          {/* SECTION 5 — LONG TERM PERSPECTIVE */}
          <section className="bg-regen-sand p-8 md:p-12 rounded-[2.5rem] border border-white text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white text-regen-stone text-xs font-bold uppercase tracking-widest mb-8">
              <Info className="w-4 h-4 text-amber-600" />
              <span>A long-term perspective</span>
            </div>
            <div className="prose prose-lg text-regen-stone mx-auto space-y-6">
              <p className="text-xl">
                RegenFund is not designed for urgency.
              </p>
              <p>
                It will evolve only if and when conditions of trust, verification and governance are mature enough to support it responsibly.
              </p>
              <p className="font-bold text-regen-dark">
                Resources should strengthen regeneration — not distort it.
              </p>
              <div className="pt-8 text-2xl font-serif font-bold text-regen-dark">
                “More information will be shared as the planning phase progresses.”
              </div>
            </div>
          </section>

          {/* SECTION 6 — CONTACT */}
          <section className="bg-regen-dark text-white p-12 md:p-16 rounded-[3rem] shadow-xl relative overflow-hidden text-center">
            <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none" 
                 style={{ backgroundImage: 'radial-gradient(#ffffff 0.5px, transparent 0.5px)', backgroundSize: '20px 20px' }}></div>
            <div className="relative z-10 max-w-2xl mx-auto">
              <Coins className="w-12 h-12 text-amber-500 mx-auto mb-8" />
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">Interested in aligned funding?</h2>
              <p className="text-xl text-gray-300 mb-10 leading-relaxed">
                If you represent an institution or a project interested in the research and development of non-extractive regenerative finance, let’s stay connected.
              </p>
              <Button href="/contact" variant="accent" size="lg" className="mx-auto group bg-amber-600 hover:bg-amber-700">
                Register Interest in RegenFund
              </Button>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
};

export default RegenFund;
