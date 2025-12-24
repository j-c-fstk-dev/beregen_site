import React from 'react';
import PageHeader from './PageHeader';
import { Rocket, ShieldCheck, Zap, Users, Info, ArrowRight, Heart, Microscope } from 'lucide-react';
import Button from './Button';

const EarlyAccess: React.FC = () => {
  return (
    <div className="pt-20 min-h-screen bg-regen-cream font-sans">
      <PageHeader 
        title="Early Access" 
        subtitle="A careful entry into a living regenerative infrastructure."
        backgroundImage="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2672&auto=format&fit=crop"
      />

      <div className="container mx-auto px-6 py-16 md:py-24">
        <div className="max-w-4xl mx-auto space-y-24">
          
          {/* SECTION 1 — INTRODUCTION */}
          <section className="text-center">
            <div className="prose prose-lg text-regen-stone mx-auto space-y-6">
              <p className="text-xl leading-relaxed">
                Early access at BeRegen is not a product launch.
              </p>
              <p>
                It is an invitation to participate in an ecosystem that is still being shaped — with care, responsibility and real-world feedback.
              </p>
              <p className="font-medium text-regen-dark italic border-l-4 border-regen-accent pl-6 text-left md:text-center md:border-l-0 md:pl-0">
                BeRegen is intentionally developed in phases. Some parts are active, others are in testing, and many are still evolving. Early access exists to ensure that growth happens with integrity, not speed.
              </p>
            </div>
          </section>

          {/* SECTION 2 — WHAT EARLY ACCESS MEANS */}
          <section className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-sm border border-stone-100">
            <div className="flex items-center gap-4 mb-8">
              <Zap className="w-8 h-8 text-regen-accent" />
              <h2 className="text-3xl font-serif font-bold text-regen-dark">What early access means</h2>
            </div>
            <div className="prose prose-lg text-regen-stone max-w-none space-y-6">
              <p>
                Early access allows aligned participants to:
              </p>
              <ul className="space-y-4 marker:text-regen-accent">
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 mt-2.5 bg-regen-accent rounded-full shrink-0"></div>
                  <span>engage with tools and processes that are still evolving</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 mt-2.5 bg-regen-accent rounded-full shrink-0"></div>
                  <span>contribute feedback grounded in real practice</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 mt-2.5 bg-regen-accent rounded-full shrink-0"></div>
                  <span>participate in pilots, fieldwork and testing phases</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 mt-2.5 bg-regen-accent rounded-full shrink-0"></div>
                  <span>help shape validation, governance and coordination flows</span>
                </li>
              </ul>
              
              <div className="flex flex-wrap justify-center gap-x-8 gap-y-2 text-sm font-bold uppercase tracking-widest text-regen-dark/60 pt-8 border-t border-stone-100">
                <span>It is not open onboarding</span>
                <span>It is not a promise of immediate functionality</span>
                <span>It is a shared learning phase</span>
              </div>
            </div>
          </section>

          {/* SECTION 3 — WHAT IS AVAILABLE NOW */}
          <section>
            <h2 className="text-3xl font-serif font-bold text-regen-dark mb-12 text-center">What is available now</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-regen-sand p-8 rounded-3xl border border-stone-100 flex flex-col group">
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-regen-accent mb-6 shadow-sm">
                  <Microscope className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-regen-dark mb-4">Current Focus Areas</h3>
                <ul className="space-y-3 text-sm text-gray-600">
                  <li className="flex items-center gap-2"><ArrowRight className="w-4 h-4 text-regen-accent" /> RegenImpactHub MVP (internal testing phase)</li>
                  <li className="flex items-center gap-2"><ArrowRight className="w-4 h-4 text-regen-accent" /> Fieldwork participation through BeRegen IRL</li>
                  <li className="flex items-center gap-2"><ArrowRight className="w-4 h-4 text-regen-accent" /> Validation and documentation pilots</li>
                  <li className="flex items-center gap-2"><ArrowRight className="w-4 h-4 text-regen-accent" /> Governance experimentation through GOPR principles</li>
                  <li className="flex items-center gap-2"><ArrowRight className="w-4 h-4 text-regen-accent" /> Education via RegenFlix (in development)</li>
                </ul>
              </div>

              <div className="bg-regen-dark text-white p-8 rounded-3xl flex flex-col justify-center">
                <p className="text-xl font-serif italic mb-6">
                  “Some features are manual. Some flows are experimental. Not everything is public or automated — by design.”
                </p>
                <div className="h-1 w-12 bg-regen-highlight rounded-full"></div>
              </div>
            </div>
          </section>

          {/* SECTION 4 — WHO EARLY ACCESS IS FOR */}
          <section className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-sm border border-stone-100">
            <div className="flex items-center gap-4 mb-8">
              <Users className="w-8 h-8 text-regen-accent" />
              <h2 className="text-3xl font-serif font-bold text-regen-dark">Who early access is for</h2>
            </div>
            <div className="grid sm:grid-cols-2 gap-6">
              {[
                "regenerative projects and communities working on the ground",
                "educators, researchers and practitioners",
                "validators, stewards and governance contributors",
                "aligned partners interested in pilots or research",
                "funders and institutions exploring long-term collaboration"
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-3 p-4 bg-regen-sage/30 rounded-2xl">
                  <div className="w-1.5 h-1.5 bg-regen-accent rounded-full shrink-0 mt-2"></div>
                  <span className="text-sm font-medium text-regen-dark leading-snug">{item}</span>
                </div>
              ))}
            </div>
            <p className="mt-8 text-center text-sm font-bold uppercase tracking-widest text-regen-dark/40 italic">
              It is not designed for speculation, extraction or short-term gains.
            </p>
          </section>

          {/* SECTION 5 — HOW ACCESS WORKS */}
          <section className="bg-regen-sand p-8 md:p-12 rounded-[2.5rem]">
            <div className="flex items-center gap-4 mb-8">
              <ShieldCheck className="w-8 h-8 text-regen-accent" />
              <h2 className="text-3xl font-serif font-bold text-regen-dark">How access works</h2>
            </div>
            <div className="prose prose-lg text-regen-stone max-w-none space-y-6">
              <p>
                Early access is relational, not transactional. Participation usually begins through:
              </p>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                  "fieldwork engagement",
                  "contribution to documentation",
                  "validation pathways",
                  "direct conversation"
                ].map((item, idx) => (
                  <div key={idx} className="bg-white/50 p-6 rounded-2xl border border-white flex flex-col items-center text-center">
                    <span className="text-xs font-bold text-regen-dark uppercase tracking-widest">{item}</span>
                  </div>
                ))}
              </div>
              <p className="text-center font-bold text-regen-dark pt-8 text-xl">
                Access grows gradually, alongside contribution and trust.
              </p>
            </div>
          </section>

          {/* SECTION 6 — A NOTE ON EXPECTATIONS */}
          <section className="text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-regen-sand text-regen-stone text-xs font-bold uppercase tracking-widest mb-8">
              <Info className="w-4 h-4" />
              <span>A note on expectations</span>
            </div>
            <div className="prose prose-lg text-regen-stone mx-auto space-y-6 mb-12">
              <p className="text-xl font-serif text-regen-dark italic">
                “BeRegen is a small, care-driven ecosystem.”
              </p>
              <div className="grid sm:grid-cols-3 gap-8 pt-4">
                <div className="space-y-2">
                  <p className="font-bold text-regen-dark uppercase tracking-tighter text-sm">Depth over Scale</p>
                  <p className="text-sm">Prioritizing meaningful relationships.</p>
                </div>
                <div className="space-y-2">
                  <p className="font-bold text-regen-dark uppercase tracking-tighter text-sm">Presence over Speed</p>
                  <p className="text-sm">Moving at the pace of trust.</p>
                </div>
                <div className="space-y-2">
                  <p className="font-bold text-regen-dark uppercase tracking-tighter text-sm">Integrity over Visibility</p>
                  <p className="text-sm">Ensuring what is built is real.</p>
                </div>
              </div>
              <p className="pt-8 text-lg font-medium text-regen-dark">
                Early access means entering a process — not consuming a finished system.
              </p>
            </div>
          </section>

          {/* SECTION 7 — REQUEST EARLY ACCESS */}
          <section className="bg-regen-dark text-white p-12 md:p-16 rounded-[3rem] shadow-xl relative overflow-hidden text-center">
            <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none" 
                 style={{ backgroundImage: 'radial-gradient(#ffffff 0.5px, transparent 0.5px)', backgroundSize: '20px 20px' }}></div>
            <div className="relative z-10 max-w-2xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">Request Early Access</h2>
              <p className="text-xl text-gray-300 mb-10 leading-relaxed">
                If you feel aligned with the principles, pace and responsibility of this work, you may request early access. 
              </p>
              <p className="text-sm text-regen-highlight font-medium mb-12 uppercase tracking-widest">
                This starts a conversation — not an automatic approval.
              </p>
              <Button href="/contact" variant="accent" size="lg" className="flex gap-2 mx-auto group">
                <Rocket className="w-5 h-5 group-hover:scale-110 transition-transform" />
                Request Early Access
              </Button>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
};

export default EarlyAccess;