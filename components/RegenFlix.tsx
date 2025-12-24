import React from 'react';
import PageHeader from './PageHeader';
import { 
  Video, 
  BookOpen, 
  GraduationCap, 
  AlertCircle, 
  Layers, 
  RefreshCw, 
  Users, 
  Globe, 
  Mail, 
  Heart,
  ArrowRight,
  ShieldCheck,
  Compass
} from 'lucide-react';
import Button from './Button';

const RegenFlix: React.FC = () => {
  return (
    <div className="pt-20 min-h-screen bg-regen-cream font-sans">
      <PageHeader 
        title="RegenFlix" 
        subtitle="Regenerative education grounded in real-world practice."
        backgroundImage="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?q=80&w=2670&auto=format&fit=crop"
      />

      <div className="container mx-auto px-6 py-16 md:py-24">
        <div className="max-w-4xl mx-auto space-y-24">
          
          {/* SECTION 1 — INTRODUCTION */}
          <section className="text-center">
            <div className="prose prose-lg text-regen-stone mx-auto space-y-6">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-regen-dark">Learning regeneration through lived experience, not abstraction.</h2>
              <p className="text-xl leading-relaxed">
                RegenFlix is the educational layer of the BeRegen ecosystem.
              </p>
              <p>
                It exists to transform real-world regenerative practice, fieldwork and collective learning into structured, accessible educational content — without simplifying complexity or detaching knowledge from context.
              </p>
              <div className="pt-8 flex justify-center">
                <div className="px-6 py-3 bg-regen-dark text-white rounded-full text-sm font-bold uppercase tracking-widest flex items-center gap-3 shadow-lg">
                  <Video className="w-5 h-5 text-regen-highlight" />
                  Education as Infrastructure
                </div>
              </div>
            </div>
          </section>

          {/* SECTION 2 — WHAT IT IS vs WHAT IT IS NOT */}
          <section className="grid md:grid-cols-2 gap-8">
            {/* What it is */}
            <div className="bg-white p-8 md:p-10 rounded-[2.5rem] shadow-sm border border-stone-100 flex flex-col h-full">
              <div className="w-14 h-14 bg-regen-sage rounded-2xl flex items-center justify-center text-regen-accent mb-6 shadow-sm">
                <GraduationCap className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-serif font-bold text-regen-dark mb-6">What RegenFlix is</h3>
              <p className="text-gray-600 mb-8 leading-relaxed">Designed to host and support:</p>
              <ul className="space-y-4 flex-grow">
                {[
                  "educational courses and learning pathways",
                  "practical frameworks for regenerative practice",
                  "documentation-based learning derived from fieldwork",
                  "open educational materials for communities and educators"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-regen-stone">
                    <div className="w-1.5 h-1.5 mt-2 bg-regen-accent rounded-full shrink-0"></div>
                    <span className="text-sm font-medium">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-8 text-sm italic text-regen-dark/70 font-medium">
                All content is grounded in lived experience and real regenerative contexts.
              </p>
            </div>

            {/* What it is not */}
            <div className="bg-regen-sand p-8 md:p-10 rounded-[2.5rem] flex flex-col h-full">
              <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-red-400 mb-6 shadow-sm">
                <AlertCircle className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-serif font-bold text-regen-dark mb-6">What RegenFlix is not</h3>
              <ul className="space-y-4 flex-grow">
                {[
                  "personal vlogging or intimate storytelling",
                  "influencer-driven content",
                  "a marketing channel",
                  "a speculative media product"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-regen-stone">
                    <div className="w-1.5 h-1.5 mt-2 bg-red-300 rounded-full shrink-0"></div>
                    <span className="text-sm font-medium">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 p-6 bg-white/50 rounded-2xl border border-white">
                <p className="text-xs text-gray-500 leading-relaxed">
                  Personal journeys, behind-the-scenes reflections and narratives live on <span className="font-bold text-regen-dark">Patreon</span> — not on RegenFlix. 
                </p>
                <p className="text-xs text-gray-500 mt-2">
                  This separation protects educational integrity and avoids conflating learning with promotion.
                </p>
              </div>
            </div>
          </section>

          {/* SECTION 3 — HOW IT CONNECTS */}
          <section className="bg-regen-dark text-white p-8 md:p-12 rounded-[2.5rem] relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-regen-accent/10 rounded-full blur-[100px] pointer-events-none"></div>
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-10">
                <Layers className="w-8 h-8 text-regen-highlight" />
                <h2 className="text-3xl font-serif font-bold">How RegenFlix connects to the ecosystem</h2>
              </div>
              
              <div className="grid md:grid-cols-3 gap-8">
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-regen-highlight font-bold uppercase tracking-widest text-xs">
                    <Compass className="w-4 h-4" /> Fieldwork
                  </div>
                  <p className="text-sm text-gray-300 leading-relaxed">Educational content is informed directly by on-the-ground experience.</p>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-regen-highlight font-bold uppercase tracking-widest text-xs">
                    <ShieldCheck className="w-4 h-4" /> RegenImpactHub
                  </div>
                  <p className="text-sm text-gray-300 leading-relaxed">Learning materials are aligned with real impact documentation and validation flows.</p>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-regen-highlight font-bold uppercase tracking-widest text-xs">
                    <RefreshCw className="w-4 h-4" /> Governance (GOPR)
                  </div>
                  <p className="text-sm text-gray-300 leading-relaxed">Educational frameworks help participants understand coordination, responsibility and governance processes.</p>
                </div>
              </div>

              <p className="mt-12 text-center text-xl font-serif italic text-white/90">
                "RegenFlix turns practice into shared knowledge — and shared knowledge back into practice."
              </p>
            </div>
          </section>

          {/* SECTION 4 — CURRENT STATUS */}
          <section className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-sm border border-stone-100">
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="w-16 h-16 bg-regen-sand rounded-2xl flex items-center justify-center text-regen-accent shrink-0">
                <RefreshCw className="w-8 h-8 animate-spin-slow" />
              </div>
              <div>
                <h2 className="text-3xl font-serif font-bold text-regen-dark mb-4">Current status</h2>
                <p className="text-lg text-regen-stone mb-8">RegenFlix is currently in development.</p>
                
                <p className="text-sm font-bold text-regen-dark/40 uppercase tracking-widest mb-4">Initial focus areas include:</p>
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    "educational frameworks derived from fieldwork",
                    "learning pathways for regenerative practice",
                    "introductory materials for impact, identity and coordination",
                    "open documentation and guides"
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-3 p-4 bg-regen-sage/30 rounded-2xl">
                      <div className="w-1.5 h-1.5 bg-regen-accent rounded-full shrink-0"></div>
                      <span className="text-sm font-medium text-regen-dark">{item}</span>
                    </div>
                  ))}
                </div>
                <p className="mt-8 text-sm text-gray-500 italic">
                  Content will be released progressively, prioritizing quality, coherence and accessibility over volume.
                </p>
              </div>
            </div>
          </section>

          {/* SECTION 5 — WHO IT IS FOR */}
          <section className="text-center">
            <h2 className="text-3xl font-serif font-bold text-regen-dark mb-12">Who RegenFlix is for</h2>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {[
                { name: "Educators", icon: <GraduationCap className="w-5 h-5" /> },
                { name: "Practitioners", icon: <RefreshCw className="w-5 h-5" /> },
                { name: "Organizers", icon: <Users className="w-5 h-5" /> },
                { name: "Researchers", icon: <BookOpen className="w-5 h-5" /> },
                { name: "Projects", icon: <Heart className="w-5 h-5" /> }
              ].map((item, idx) => (
                <div key={idx} className="bg-white p-6 rounded-2xl border border-stone-100 flex flex-col items-center gap-3 group hover:border-regen-accent transition-colors">
                  <div className="text-regen-accent/40 group-hover:text-regen-accent transition-colors">
                    {item.icon}
                  </div>
                  <span className="text-xs font-bold text-regen-dark uppercase tracking-widest">{item.name}</span>
                </div>
              ))}
            </div>
            <p className="mt-10 text-lg text-regen-stone max-w-2xl mx-auto">
              RegenFlix is designed for those who want to learn regeneration deeply — not consume it passively.
            </p>
          </section>

          {/* SECTION 6 — EDUCATION AS A COMMONS */}
          <section className="bg-regen-sand p-8 md:p-12 rounded-[2.5rem] text-center border border-white">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white text-regen-stone text-xs font-bold uppercase tracking-widest mb-8">
              <Globe className="w-4 h-4 text-regen-accent" />
              <span>Education as a commons</span>
            </div>
            <div className="prose prose-lg text-regen-stone mx-auto space-y-6">
              <p>RegenFlix is built with public-good principles. Whenever possible, content will be:</p>
              <div className="flex flex-wrap justify-center gap-x-8 gap-y-2 text-sm font-bold uppercase tracking-widest text-regen-dark/60">
                <span>openly accessible</span>
                <span>shareable</span>
                <span>grounded in attribution</span>
                <span>community aligned</span>
              </div>
              <p className="text-2xl font-serif font-bold text-regen-dark pt-8">
                “Knowledge grows stronger when it circulates responsibly.”
              </p>
            </div>
          </section>

          {/* SECTION 7 — INTERESTED? */}
          <section className="bg-regen-dark text-white p-12 md:p-16 rounded-[3rem] shadow-xl relative overflow-hidden text-center">
            <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none" 
                 style={{ backgroundImage: 'radial-gradient(#ffffff 0.5px, transparent 0.5px)', backgroundSize: '20px 20px' }}></div>
            <div className="relative z-10 max-w-2xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">Interested in RegenFlix?</h2>
              <p className="text-xl text-gray-300 mb-10 leading-relaxed">
                If you are interested in learning, contributing or collaborating on educational content aligned with regenerative principles, RegenFlix will become a shared space for that work.
              </p>
              <Button href="/contact" variant="accent" size="lg" className="flex gap-2 mx-auto group">
                <Mail className="w-5 h-5" />
                Get in touch to learn more
              </Button>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
};

export default RegenFlix;
