import React from 'react';
import PageHeader from './PageHeader';
import { 
  Smartphone, 
  Zap, 
  RefreshCw, 
  Heart, 
  Layers, 
  Compass, 
  ShieldCheck, 
  BookOpen, 
  Info,
  Clock,
  Sparkles,
  ArrowRight
} from 'lucide-react';
import Button from './Button';

const RegenApp: React.FC = () => {
  return (
    <div className="pt-20 min-h-screen bg-regen-cream font-sans">
      <PageHeader 
        title="RegenApp" 
        subtitle="Daily regenerative practice — grounded, intentional and human."
        backgroundImage="https://images.unsplash.com/photo-1512428559083-a401c3049550?q=80&w=2670&auto=format&fit=crop"
      />

      <div className="container mx-auto px-6 py-16 md:py-24">
        <div className="max-w-4xl mx-auto space-y-24">
          
          {/* SECTION 1 — INTRODUCTION */}
          <section className="text-center">
            <div className="prose prose-lg text-regen-stone mx-auto space-y-6">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-regen-dark">
                Regeneration does not happen only in systems or platforms.
              </h2>
              <p className="text-xl leading-relaxed">
                It begins in daily choices, rhythms and ways of being present.
              </p>
              <p>
                RegenApp is the future practice layer of the BeRegen ecosystem — designed to support small, consistent regenerative actions in everyday life, without abstraction or pressure.
              </p>
              <div className="pt-8 flex flex-col items-center gap-4">
                <div className="bg-emerald-50 text-emerald-700 px-6 py-3 rounded-full text-sm font-bold uppercase tracking-widest border border-emerald-100 flex items-center gap-2">
                  <Smartphone className="w-5 h-5" />
                  Cultivating Presence, Responsibility and Continuity
                </div>
                <p className="text-sm font-medium text-regen-dark/40 italic">
                  This is not a productivity app.
                </p>
              </div>
            </div>
          </section>

          {/* SECTION 2 — INTENDED SUPPORT */}
          <section className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-sm border border-stone-100">
            <div className="flex items-center gap-4 mb-10">
              <Zap className="w-8 h-8 text-regen-accent" />
              <h2 className="text-3xl font-serif font-bold text-regen-dark">What RegenApp is intended to support</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  title: "Daily regenerative habits",
                  desc: "Small, actionable micro-steps that integrate into your existing daily rhythms.",
                  icon: <RefreshCw className="w-6 h-6" />
                },
                {
                  title: "Thematic journeys",
                  desc: "Paths aligned with ecological cycles and seasonal rhythms for deeper connection.",
                  icon: <Compass className="w-6 h-6" />
                },
                {
                  title: "Reflection & intention",
                  desc: "A quiet space for intentional practice and internal check-ins.",
                  icon: <BookOpen className="w-6 h-6" />
                },
                {
                  title: "Action-to-Impact connection",
                  desc: "Visualizing the bridge between individual action and collective impact.",
                  icon: <Layers className="w-6 h-6" />
                }
              ].map((item, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="w-12 h-12 bg-regen-sage rounded-2xl flex items-center justify-center text-regen-accent shrink-0">
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
              “The focus is not performance — but continuity and care.”
            </p>
          </section>

          {/* SECTION 3 — ECOSYSTEM FIT */}
          <section>
            <h2 className="text-3xl font-serif font-bold text-regen-dark mb-12 text-center">How RegenApp fits the ecosystem</h2>
            <div className="grid sm:grid-cols-2 gap-6">
              {[
                {
                  title: "Fieldwork",
                  desc: "Grounded in lived experience and real-world practice.",
                  icon: <Compass className="w-5 h-5" />,
                  color: "bg-regen-sage text-regen-accent"
                },
                {
                  title: "RegenImpactHub",
                  desc: "Everyday actions may later connect to identity, reputation and validated impact.",
                  icon: <ShieldCheck className="w-5 h-5" />,
                  color: "bg-blue-50 text-blue-600"
                },
                {
                  title: "Education (RegenFlix)",
                  desc: "Practices are informed by shared learning and field-based knowledge.",
                  icon: <BookOpen className="w-5 h-5" />,
                  color: "bg-indigo-50 text-indigo-600"
                },
                {
                  title: "Governance (GOPR)",
                  desc: "Individual practice remains autonomous — never governed or scored.",
                  icon: <Layers className="w-5 h-5" />,
                  color: "bg-stone-50 text-stone-600"
                }
              ].map((item, idx) => (
                <div key={idx} className="bg-white p-6 rounded-3xl border border-stone-100 flex items-start gap-4 hover:shadow-md transition-shadow">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${item.color}`}>
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-regen-dark mb-1">{item.title}</h4>
                    <p className="text-xs text-gray-500 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* SECTION 4 — CURRENT STATUS */}
          <section className="bg-regen-dark text-white p-8 md:p-12 rounded-[2.5rem] relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-regen-highlight/10 rounded-full blur-[100px] pointer-events-none"></div>
            <div className="relative z-10">
              <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center text-regen-highlight shrink-0 backdrop-blur-sm border border-white/10">
                  <Clock className="w-8 h-8" />
                </div>
                <div>
                  <h2 className="text-3xl font-serif font-bold mb-4">Current status</h2>
                  <p className="text-lg text-gray-300 mb-8">RegenApp is currently in development.</p>
                  
                  <div className="space-y-4">
                    <p className="text-xs font-bold text-regen-highlight uppercase tracking-widest">Ongoing progress:</p>
                    <div className="grid sm:grid-cols-2 gap-3">
                      {[
                        "conceptual design is ongoing",
                        "practice frameworks being explored",
                        "no public app is available yet",
                        "no onboarding is open"
                      ].map((item, idx) => (
                        <div key={idx} className="flex items-center gap-3 p-3 bg-white/5 rounded-xl border border-white/10">
                          <div className="w-1.5 h-1.5 bg-regen-highlight rounded-full shrink-0"></div>
                          <span className="text-xs font-medium text-gray-200">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <p className="mt-8 text-sm text-gray-400 italic">
                    Development is intentionally slow, reflective and feedback-driven.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* SECTION 5 — INTENTION */}
          <section className="bg-regen-sand p-8 md:p-12 rounded-[2.5rem] border border-white text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white text-regen-stone text-xs font-bold uppercase tracking-widest mb-8">
              <Info className="w-4 h-4 text-regen-accent" />
              <span>A note on intention</span>
            </div>
            <div className="prose prose-lg text-regen-stone mx-auto space-y-6">
              <p className="text-xl">
                RegenApp is not designed to optimize behavior, extract data or enforce routines.
              </p>
              <p>
                It exists to support people who are already cultivating regenerative ways of living — quietly, consistently and with care.
              </p>
              <div className="pt-8 text-2xl font-serif font-bold text-regen-dark">
                “More information will be shared as the project matures.”
              </div>
            </div>
          </section>

          {/* SECTION 6 — CTA/STAY UPDATED */}
          <section className="bg-regen-dark text-white p-12 md:p-16 rounded-[3rem] shadow-xl relative overflow-hidden text-center">
            <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none" 
                 style={{ backgroundImage: 'radial-gradient(#ffffff 0.5px, transparent 0.5px)', backgroundSize: '20px 20px' }}></div>
            <div className="relative z-10 max-w-2xl mx-auto">
              <Sparkles className="w-12 h-12 text-regen-highlight mx-auto mb-8" />
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">Stay connected to the evolution</h2>
              <p className="text-xl text-gray-300 mb-10 leading-relaxed">
                As we define the practices and architecture of RegenApp, we will share updates through our primary communication channels.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button href="/contact" variant="accent" size="lg" className="flex gap-2 group">
                  Register Interest
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button href="/support" variant="outline" className="border-white text-white hover:bg-white hover:text-regen-dark">
                  Support through Patreon
                </Button>
              </div>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
};

export default RegenApp;