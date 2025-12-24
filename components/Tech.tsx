import React from 'react';
import PageHeader from './PageHeader';
import { 
  Cpu, 
  Layers, 
  ShieldCheck, 
  Globe, 
  RefreshCw, 
  AlertCircle, 
  Terminal, 
  Network, 
  Database,
  Smartphone,
  Eye,
  Lock,
  Zap,
  Mail,
  Scale
} from 'lucide-react';
import Button from './Button';

const Tech: React.FC = () => {
  const principles = [
    {
      title: "Local-first & offline-aware",
      desc: "The system prioritizes participation over connectivity. Tools are designed to work in low-bandwidth or offline contexts whenever possible, synchronizing later without excluding communities.",
      icon: <Smartphone className="w-6 h-6" />
    },
    {
      title: "Modular by design",
      desc: "No single component is mandatory. Modules can evolve independently, integrate with external tools, or be replaced over time without breaking the ecosystem.",
      icon: <Layers className="w-6 h-6" />
    },
    {
      title: "Interoperable & open",
      desc: "BeRegen integrates with open standards, public-good protocols and external infrastructures rather than reinventing everything internally.",
      icon: <Network className="w-6 h-6" />
    },
    {
      title: "Human-in-the-loop",
      desc: "Automation supports — it does not replace — human judgment, contextual validation and community care.",
      icon: <ShieldCheck className="w-6 h-6" />
    },
    {
      title: "Progressive decentralization",
      desc: "Not everything is on-chain from day one. Decentralization increases as trust, validation and governance mature.",
      icon: <RefreshCw className="w-6 h-6" />
    }
  ];

  const layers = [
    { name: "Field layer", desc: "Real-world action, fieldwork, documentation and lived regenerative practice." },
    { name: "Application layer", desc: "Web applications, PWAs and interfaces used for documentation, validation, learning and coordination." },
    { name: "Data & validation layer", desc: "Identity, reputation, impact records, validation logic and audit trails." },
    { name: "Governance layer", desc: "Decision-making, accountability and coordination flows defined through GOPR." },
    { name: "Integration layer", desc: "APIs and connectors to external Web3, ReFi and public-good infrastructure." }
  ];

  return (
    <div className="pt-20 min-h-screen bg-regen-cream font-sans">
      <PageHeader 
        title="Tech" 
        subtitle="Technical principles, architecture and design choices behind BeRegen."
        backgroundImage="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2670&auto=format&fit=crop"
      />

      <div className="container mx-auto px-6 py-16 md:py-24">
        <div className="max-w-4xl mx-auto space-y-24">
          
          {/* SECTION 1 — INTRODUCTION */}
          <section className="text-center">
            <div className="prose prose-lg text-regen-stone mx-auto space-y-6">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-regen-dark">Building regenerative infrastructure with care, openness and realism.</h2>
              <p className="text-xl leading-relaxed">
                BeRegen is not built as a single application or closed platform. 
                It is designed as a modular, evolving infrastructure that connects real-world regenerative action with digital coordination — without sacrificing inclusion, transparency or trust.
              </p>
              <p className="font-medium text-regen-dark italic border-l-4 border-regen-accent pl-6 text-left md:text-center md:border-l-0 md:pl-0">
                The technical layer exists to serve life on the ground, not the other way around.
              </p>
            </div>
          </section>

          {/* SECTION 2 — DESIGN PRINCIPLES */}
          <section className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-sm border border-stone-100">
            <div className="flex items-center gap-4 mb-8">
              <Cpu className="w-8 h-8 text-regen-accent" />
              <h2 className="text-3xl font-serif font-bold text-regen-dark">Design principles</h2>
            </div>
            <p className="text-lg text-regen-stone mb-10">
              BeRegen’s technical architecture follows a set of explicit principles that guide every decision:
            </p>
            <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8">
              {principles.map((p, idx) => (
                <div key={idx} className="space-y-3">
                  <div className="flex items-center gap-3 text-regen-dark">
                    <div className="p-2 bg-regen-sage rounded-lg text-regen-accent">
                      {p.icon}
                    </div>
                    <h3 className="font-bold">{p.title}</h3>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">{p.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* SECTION 3 — HIGH LEVEL ARCHITECTURE */}
          <section>
            <h2 className="text-3xl font-serif font-bold text-regen-dark mb-12 text-center">High-level architecture</h2>
            <p className="text-lg text-regen-stone mb-12 text-center">BeRegen operates as a layered system:</p>
            
            <div className="space-y-4 max-w-2xl mx-auto">
              {layers.map((layer, idx) => (
                <div key={idx} className="relative flex items-center group">
                  <div className="hidden md:flex absolute -left-12 w-8 h-8 rounded-full border-2 border-regen-accent/20 items-center justify-center text-[10px] font-bold text-regen-accent/40 bg-white">
                    {idx + 1}
                  </div>
                  <div className="w-full bg-white p-6 rounded-2xl border border-stone-100 shadow-sm transition-all duration-300 group-hover:border-regen-accent group-hover:shadow-md">
                    <h4 className="font-bold text-regen-dark mb-1">{layer.name}</h4>
                    <p className="text-sm text-gray-600">{layer.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <p className="mt-12 text-center text-regen-stone italic font-medium">
              Each layer reinforces the others, without centralizing control.
            </p>
          </section>

          {/* SECTION 4 — REGEN IMPACT HUB */}
          <section className="bg-regen-dark text-white p-8 md:p-12 rounded-[2.5rem] relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-regen-accent/10 rounded-full blur-[100px] pointer-events-none"></div>
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-8">
                <Database className="w-8 h-8 text-regen-highlight" />
                <h2 className="text-3xl font-serif font-bold">RegenImpactHub (core infrastructure)</h2>
              </div>
              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                The RegenImpactHub is the core technical layer of the ecosystem.
              </p>
              <div className="mb-8">
                <p className="text-sm font-bold text-regen-highlight uppercase tracking-widest mb-4">Current focus areas include:</p>
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    "regenerative identity creation",
                    "impact documentation and submission flows",
                    "early reputation signals (RegenScore)",
                    "hybrid validation logic (human + community + AI-assisted)",
                    "offline-aware data capture and synchronization",
                    "cryptographic proof-of-origin for records"
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-3 p-3 bg-white/5 rounded-xl border border-white/10">
                      <div className="w-1.5 h-1.5 bg-regen-highlight rounded-full shrink-0"></div>
                      <span className="text-xs font-medium text-gray-200">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <p className="text-gray-400 italic text-sm leading-relaxed">
                The current version is an early MVP in testing, intentionally limited in scope to validate assumptions before scaling. Public onboarding and third-party submissions will be introduced gradually.
              </p>
            </div>
          </section>

          {/* SECTION 5 — GOVERNANCE & COORDINATION */}
          <section className="flex flex-col md:flex-row gap-8 items-start">
            <div className="w-14 h-14 bg-indigo-50 rounded-2xl flex items-center justify-center text-indigo-600 shrink-0">
              <Scale className="w-7 h-7" />
            </div>
            <div className="prose prose-lg text-regen-stone max-w-none">
              <h2 className="text-2xl font-serif font-bold text-regen-dark mb-4">Governance & coordination (GOPR)</h2>
              <p>
                Governance is implemented as an external, modular framework. GOPR (Governance Optimistic weighted by Reputation) defines:
              </p>
              <ul className="text-sm space-y-2">
                <li>• how decisions are proposed and discussed</li>
                <li>• how reputation influences coordination</li>
                <li>• how optimistic execution and challenge windows work</li>
                <li>• how accountability and dispute resolution are handled</li>
              </ul>
              <p className="pt-4 font-medium text-regen-dark">
                The technical systems do not hard-code governance power. They expose signals and constraints that governance processes interpret and apply.
              </p>
            </div>
          </section>

          {/* SECTION 6 — TECH STACK */}
          <section className="bg-regen-sand p-8 md:p-12 rounded-[2.5rem]">
            <div className="flex items-center gap-4 mb-8">
              <Terminal className="w-8 h-8 text-regen-accent" />
              <h2 className="text-3xl font-serif font-bold text-regen-dark">Technology stack (current)</h2>
            </div>
            <p className="text-regen-stone mb-8">
              BeRegen uses a pragmatic hybrid stack, combining Web2 and Web3 where each makes sense.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { title: "Modern web frameworks", desc: "For interfaces and PWAs" },
                { title: "Decentralized identity", desc: "Verifiable credential standards" },
                { title: "Hybrid computation", desc: "Off-chain with on-chain verification" },
                { title: "Decentralized storage", desc: "IPFS and open storage for records" },
                { title: "Interoperability APIs", desc: "Connectors for external ecosystems" }
              ].map((item, idx) => (
                <div key={idx} className="bg-white/60 p-5 rounded-2xl border border-white">
                  <h4 className="font-bold text-regen-dark text-sm mb-1">{item.title}</h4>
                  <p className="text-xs text-gray-500">{item.desc}</p>
                </div>
              ))}
            </div>
            <p className="mt-8 text-xs text-gray-500 italic">
              Specific tools and providers may evolve. What remains constant are the principles of openness, auditability and replaceability.
            </p>
          </section>

          {/* SECTION 7 — AUDITABILITY */}
          <section className="text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-regen-sand text-regen-stone text-xs font-bold uppercase tracking-widest mb-8">
              <Eye className="w-4 h-4" />
              <span>Auditability & transparency</span>
            </div>
            <div className="prose prose-lg text-regen-stone mx-auto space-y-6">
              <p className="text-xl leading-relaxed">
                All critical actions in the system generate records.
              </p>
              <p className="font-medium text-regen-dark">
                Not all data is public. But everything is traceable, auditable and accountable.
              </p>
              <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs font-bold uppercase tracking-widest text-regen-dark/40 py-6 border-y border-stone-100">
                <span>impact submissions</span>
                <span>validation decisions</span>
                <span>reputation changes</span>
                <span>governance actions</span>
                <span>system updates</span>
              </div>
              <p className="pt-6 leading-relaxed">
                Transparency is not exposure. It is the ability to verify processes without violating context, privacy or safety.
              </p>
            </div>
          </section>

          {/* SECTION 8 — AVOIDANCE */}
          <section className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-sm border border-stone-100">
            <div className="flex items-center gap-4 mb-8">
              <AlertCircle className="w-10 h-10 text-red-400" />
              <h2 className="text-3xl font-serif font-bold text-regen-dark">What this tech layer avoids</h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                "closed, proprietary systems",
                "forced tokenization",
                "premature automation",
                "tech-first decision-making",
                "extractive data models"
              ].map((item, idx) => (
                <div key={idx} className="bg-red-50/30 p-4 rounded-xl border border-red-100/20 text-center">
                  <span className="text-xs font-bold text-red-900/60 uppercase tracking-tight">{item}</span>
                </div>
              ))}
            </div>
            <p className="mt-10 text-center text-xl font-serif text-regen-dark italic">
              “Infrastructure must earn trust through practice.”
            </p>
          </section>

          {/* SECTION 9 — EVOLVING ECOSYSTEM */}
          <section className="text-center">
            <h2 className="text-3xl font-serif font-bold text-regen-dark mb-8">An evolving technical ecosystem</h2>
            <div className="prose prose-lg text-regen-stone mx-auto space-y-6 mb-12">
              <p>The BeRegen tech stack is not finished — and is not meant to be.</p>
              <div className="flex flex-wrap justify-center gap-4 text-xs font-bold uppercase tracking-tighter text-regen-accent">
                <span>field feedback</span>
                <span className="text-stone-300">•</span>
                <span>community participation</span>
                <span className="text-stone-300">•</span>
                <span>governance processes</span>
                <span className="text-stone-300">•</span>
                <span>ethical review</span>
                <span className="text-stone-300">•</span>
                <span>technical experimentation</span>
              </div>
              <p className="text-2xl font-serif font-bold text-regen-dark pt-8">
                “What matters is not building fast — but building something that can be trusted to last.”
              </p>
            </div>
          </section>

          {/* SECTION 10 — CONTRIBUTION CTA */}
          <section className="bg-regen-dark text-white p-12 md:p-16 rounded-[3rem] shadow-xl relative overflow-hidden text-center">
            <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none" 
                 style={{ backgroundImage: 'radial-gradient(#ffffff 0.5px, transparent 0.5px)', backgroundSize: '20px 20px' }}></div>
            <div className="relative z-10 max-w-2xl mx-auto">
              <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center text-regen-highlight mx-auto mb-8 backdrop-blur-sm">
                <Globe className="w-8 h-8" />
              </div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">Interested in contributing?</h2>
              <p className="text-xl text-gray-300 mb-10 leading-relaxed">
                We collaborate with aligned developers, researchers and infrastructure partners who respect:
              </p>
              <div className="flex flex-wrap justify-center gap-6 text-sm font-bold uppercase tracking-widest text-regen-highlight mb-12">
                <span>open standards</span>
                <span>public-good values</span>
                <span>regenerative principles</span>
                <span>long-term responsibility</span>
              </div>
              <p className="text-gray-400 mb-12">
                If your work intersects with regenerative systems, coordination infrastructure or ethical technology, there may be space to collaborate.
              </p>
              <Button href="/contact" variant="accent" size="lg" className="flex gap-2 mx-auto group">
                <Mail className="w-5 h-5" />
                Get in touch to explore collaboration
              </Button>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
};

export default Tech;