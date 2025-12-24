import React from 'react';
import PageHeader from './PageHeader';
import { ShieldCheck, Eye, Compass, Scale, Star, Heart, Shield, Users, ArrowRight, Info } from 'lucide-react';
import Button from './Button';

const Validators: React.FC = () => {
  return (
    <div className="pt-20 min-h-screen bg-regen-cream font-sans">
      <PageHeader 
        title="Validators & Stewards" 
        subtitle="Caring for trust, accountability and coherence in the ecosystem."
        backgroundImage="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop"
      />

      <div className="container mx-auto px-6 py-16 md:py-24">
        <div className="max-w-4xl mx-auto space-y-24">
          
          {/* SECTION 1 — INTRODUCTION */}
          <section className="text-center">
            <div className="prose prose-lg text-regen-stone mx-auto space-y-6">
              <p className="text-xl leading-relaxed">
                Regenerative systems depend on trust.
              </p>
              <p>
                Validators and stewards exist to protect that trust — not through authority or control, but through responsibility, care and accountability.
              </p>
              <p className="font-medium text-regen-dark italic border-l-4 border-regen-accent pl-6 text-left md:text-center md:border-l-0 md:pl-0">
                Within BeRegen, these roles support the integrity of impact validation, governance processes and shared infrastructure, ensuring that regeneration remains grounded, fair and aligned with real-world practice.
              </p>
            </div>
          </section>

          {/* SECTION 2 — WHO ARE VALIDATORS & STEWARDS */}
          <section className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-sm border border-stone-100">
            <div className="flex items-center gap-4 mb-8">
              <Users className="w-8 h-8 text-regen-accent" />
              <h2 className="text-3xl font-serif font-bold text-regen-dark">Who are Validators & Stewards</h2>
            </div>
            <div className="prose prose-lg text-regen-stone max-w-none space-y-6">
              <p>
                Validators and stewards are participants who take on additional responsibility within the ecosystem.
              </p>
              <div className="flex flex-wrap justify-center gap-x-8 gap-y-2 text-sm font-bold uppercase tracking-widest text-regen-dark/60 border-y border-stone-100 py-6 mb-6">
                <span>They are not executives</span>
                <span>They do not own the system</span>
                <span>They do not act above communities</span>
              </div>
              <p className="text-center font-bold text-regen-dark text-xl">
                Their role is to help the ecosystem remain coherent, trustworthy and accountable as it grows.
              </p>
            </div>
          </section>

          {/* SECTION 3 — THE ROLES */}
          <section className="grid md:grid-cols-2 gap-8">
            {/* Validators */}
            <div className="bg-regen-sand p-8 md:p-10 rounded-[2.5rem] flex flex-col h-full">
              <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-regen-accent mb-6 shadow-sm">
                <Eye className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-serif font-bold text-regen-dark mb-4">What Validators do</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Validators support the integrity of impact recognition. Their responsibilities may include:
              </p>
              <ul className="space-y-3 flex-grow">
                {[
                  "reviewing impact submissions and documentation",
                  "supporting validation processes with contextual awareness",
                  "helping identify inconsistencies or misalignment",
                  "contributing to trust signals and reputation flows",
                  "acting with care, neutrality and transparency"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-regen-stone">
                    <div className="w-1.5 h-1.5 mt-1.5 bg-regen-accent rounded-full shrink-0"></div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-8 text-sm italic text-regen-dark/70 font-medium">
                Validation is contextual, not extractive. It respects local knowledge and lived experience.
              </p>
            </div>

            {/* Stewards */}
            <div className="bg-regen-dark p-8 md:p-10 rounded-[2.5rem] flex flex-col h-full text-white">
              <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center text-regen-highlight mb-6 backdrop-blur-sm border border-white/10">
                <ShieldCheck className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-serif font-bold mb-4">What Stewards do</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Stewards care for the health of coordination and governance processes. Their responsibilities may include:
              </p>
              <ul className="space-y-3 flex-grow">
                {[
                  "supporting governance flows defined by GOPR",
                  "helping facilitate discussions and resolution processes",
                  "caring for documentation and shared understanding",
                  "protecting the ecosystem from capture or misuse",
                  "ensuring accountability without concentration of power"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-gray-400">
                    <div className="w-1.5 h-1.5 mt-1.5 bg-regen-highlight rounded-full shrink-0"></div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-8 text-sm italic text-regen-highlight/80 font-medium">
                Stewardship is an ongoing practice, not a fixed position.
              </p>
            </div>
          </section>

          {/* SECTION 4 — HOW THESE ROLES EMERGE */}
          <section className="py-16 border-y border-stone-200">
            <h2 className="text-3xl font-serif font-bold text-regen-dark mb-12 text-center">How these roles emerge</h2>
            <p className="text-lg text-regen-stone text-center mb-12 max-w-2xl mx-auto">
              Validators and stewards are not appointed through status, payment or external authority.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
              {[
                { icon: <Activity className="w-5 h-5" />, title: "Consistent contribution" },
                { icon: <Shield className="w-5 h-5" />, title: "Demonstrated responsibility" },
                { icon: <Star className="w-5 h-5" />, title: "Earned reputation" },
                { icon: <Handshake className="w-5 h-5" />, title: "Peer recognition" },
                { icon: <Leaf className="w-5 h-5" />, title: "Alignment with principles" }
              ].map((item, idx) => (
                <div key={idx} className="flex flex-col items-center text-center p-6 bg-white rounded-3xl border border-stone-100 shadow-sm">
                  <div className="text-regen-accent mb-4">
                    {item.icon}
                  </div>
                  <span className="text-xs font-bold text-regen-dark uppercase tracking-wider">{item.title}</span>
                </div>
              ))}
            </div>
            <p className="text-center font-bold text-regen-dark mt-12 text-xl italic">
              Access and responsibility grow together.
            </p>
          </section>

          {/* SECTION 5 — RELATIONSHIP WITH GOPR */}
          <section className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-sm border border-stone-100">
            <div className="flex items-center gap-4 mb-8">
              <Scale className="w-8 h-8 text-regen-accent" />
              <h2 className="text-3xl font-serif font-bold text-regen-dark">Relationship with Governance (GOPR)</h2>
            </div>
            <div className="prose prose-lg text-regen-stone max-w-none space-y-6">
              <p>
                Validators and stewards operate within the governance framework defined by GOPR. Their role is to support:
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  "reputation-weighted coordination",
                  "optimistic execution with safeguards",
                  "transparent accountability processes",
                  "fair dispute resolution when needed"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3 p-4 bg-regen-sage/30 rounded-2xl">
                    <div className="w-1.5 h-1.5 bg-regen-accent rounded-full shrink-0"></div>
                    <span className="text-sm font-medium text-regen-dark">{item}</span>
                  </div>
                ))}
              </div>
              <p className="text-center font-bold text-regen-dark pt-4">
                They do not replace governance. They help governance function with integrity.
              </p>
            </div>
          </section>

          {/* SECTION 6 — BECOMING A VALIDATOR */}
          <section className="bg-regen-sand p-8 md:p-12 rounded-[2.5rem]">
            <h2 className="text-3xl font-serif font-bold text-regen-dark mb-8">Becoming a Validator or Steward</h2>
            <div className="prose prose-lg text-regen-stone max-w-none space-y-6">
              <p>
                Participation as a validator or steward is gradual. It may begin through:
              </p>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                  "fieldwork participation",
                  "documentation and learning",
                  "supporting validation processes",
                  "community contribution"
                ].map((item, idx) => (
                  <div key={idx} className="bg-white/50 p-6 rounded-2xl border border-white flex flex-col items-center text-center">
                    <span className="text-xs font-bold text-regen-dark uppercase tracking-widest">{item}</span>
                  </div>
                ))}
              </div>
              <p className="text-center text-sm font-medium pt-4">
                As the ecosystem evolves, clearer pathways and tooling will support these roles — always grounded in contribution and trust.
              </p>
            </div>
          </section>

          {/* SECTION 7 — CLOSING */}
          <section className="text-center py-12">
            <h2 className="text-3xl font-serif font-bold text-regen-dark mb-8">A role of care, not power</h2>
            <div className="prose prose-lg text-regen-stone mx-auto space-y-6 mb-12">
              <p>
                Validators and stewards do not hold power over others.
              </p>
              <p className="text-xl font-medium text-regen-dark">
                They hold responsibility toward the ecosystem.
              </p>
              <p className="leading-relaxed">
                Their work is often quiet, relational and continuous — but essential for long-term resilience.
              </p>
              <p className="text-2xl font-serif italic text-regen-dark pt-8">
                “If you feel called to care for shared infrastructure and collective trust, there may be a place for you in this role.”
              </p>
            </div>
            <Button href="/contact" variant="primary" size="lg">
              Get in touch to learn more
            </Button>
          </section>

        </div>
      </div>
    </div>
  );
};

export default Validators;

// Minimal Activity helper as it's not imported by default from some lucide versions
const Activity = ({ className }: { className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="24" height="24" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
  </svg>
);

const Leaf = ({ className }: { className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="24" height="24" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8a13 13 0 0 1-10 10Z" />
    <path d="M9 21c0-4.5 2-9 2-9" />
  </svg>
);

const Handshake = ({ className }: { className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="24" height="24" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="m11 17 2 2 6-6" />
    <path d="m18 14 1.5 1.5a1.5 1.5 0 0 1-2.12 2.12L16 16.25" />
    <path d="m13 13-3-3" />
    <path d="m9 18 2 2" />
    <path d="m14 14-3-3" />
    <path d="M7 21a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v2" />
    <path d="M7 18h10" />
    <path d="M7 14h8" />
    <path d="M7 10h4" />
    <path d="M7 6h12" />
  </svg>
);