import React from 'react';
import PageHeader from './PageHeader';
import Button from './Button';

const Whitepaper: React.FC = () => {
  return (
    <div className="pt-20 min-h-screen bg-white font-sans text-gray-800">
      <PageHeader 
        title="GOPR Whitepaper" 
        subtitle="Governance Optimistic weighted by Reputation"
        backgroundImage="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2672&auto=format&fit=crop"
      />
      
      <div className="container mx-auto px-6 py-16">
        <div className="max-w-3xl mx-auto">
          
          <div className="text-center mb-16">
             <span className="inline-block py-1 px-3 rounded-full bg-regen-sage text-regen-dark text-xs font-bold tracking-widest uppercase mb-4">Research & Design</span>
             <h2 className="text-2xl font-serif text-regen-stone italic">A long-term governance design for regenerative systems</h2>
          </div>

          <div className="prose prose-lg prose-stone mx-auto text-gray-700 leading-relaxed">
            
            {/* 1. Introduction */}
            <section className="mb-12">
              <h3 className="text-2xl font-serif font-bold text-regen-dark mb-4">1. Introduction</h3>
              <p className="mb-4">Governance is one of the most fragile layers in decentralized and regenerative systems.</p>
              <p className="mb-4">Many initiatives fail not due to lack of purpose or technical capacity, but because decision-making structures become captured, inefficient or misaligned with the values they were meant to protect.</p>
              <p className="mb-4">GOPR (Governance Optimistic weighted by Reputation) is a governance framework designed to address these failures by aligning influence with contribution, responsibility and long-term participation — rather than capital accumulation or speculative power.</p>
              <p className="mb-4">This whitepaper presents the long-term governance vision of GOPR.</p>
              <p className="font-bold text-regen-dark">It is a research and design document, not a product specification.</p>
            </section>

            {/* 2. Scope and Intent */}
            <section className="mb-12">
              <h3 className="text-2xl font-serif font-bold text-regen-dark mb-4">2. Scope and Intent</h3>
              <p className="mb-4">This document aims to:</p>
              <ul className="list-disc pl-5 mb-6 space-y-2 marker:text-regen-accent">
                <li>Describe the governance problems GOPR addresses</li>
                <li>Explain the design principles behind the framework</li>
                <li>Outline a modular governance architecture</li>
                <li>Present a long-term evolution path</li>
              </ul>
              <p className="mb-4">This document does not:</p>
              <ul className="list-disc pl-5 mb-6 space-y-2 marker:text-red-400">
                <li>guarantee full implementation</li>
                <li>define delivery timelines</li>
                <li>replace real-world experimentation</li>
              </ul>
              <p className="italic border-l-4 border-regen-accent pl-4">Governance is treated here as a living system.</p>
            </section>

            {/* 3. Core Governance Problems */}
            <section className="mb-12">
              <h3 className="text-2xl font-serif font-bold text-regen-dark mb-6">3. Core Governance Problems</h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-bold text-regen-dark mb-1">3.1 Capital-Dominated Governance</h4>
                  <p>Token-weighted systems often concentrate power in the hands of a few actors, undermining decentralization and trust.</p>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-regen-dark mb-1">3.2 Participation Fatigue</h4>
                  <p>Complex voting processes and constant proposals reduce engagement and lead to governance apathy.</p>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-regen-dark mb-1">3.3 Slow and Fragile Execution</h4>
                  <p>Even approved decisions often fail in execution due to coordination overhead and risk aversion.</p>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-regen-dark mb-1">3.4 Lack of Accountability</h4>
                  <p>Malicious or negligent behavior frequently carries little to no consequence.</p>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-regen-dark mb-1">3.5 Absence of Scalable Dispute Resolution</h4>
                  <p>Most systems rely on informal social consensus, which does not scale.</p>
                </div>
              </div>
            </section>

            {/* 4. Design Principles */}
            <section className="mb-12 bg-regen-sage/40 p-8 rounded-3xl border border-regen-sage">
              <h3 className="text-2xl font-serif font-bold text-regen-dark mb-4">4. Design Principles</h3>
              <p className="mb-6">GOPR is built on five foundational principles:</p>
              <ol className="list-decimal pl-5 space-y-3 font-medium text-regen-dark marker:text-regen-accent marker:font-bold">
                <li>Contribution over capital</li>
                <li>Optimistic execution with safeguards</li>
                <li>Accountability by design</li>
                <li>Dispute resolution without systemic paralysis</li>
                <li>Progressive decentralization through practice</li>
              </ol>
            </section>

            {/* 5. Reputation as Governance Signal */}
            <section className="mb-12">
              <h3 className="text-2xl font-serif font-bold text-regen-dark mb-4">5. Reputation as Governance Signal</h3>
              <p className="mb-4">GOPR replaces transferable voting power with non-transferable reputation signals derived from:</p>
              <ul className="list-disc pl-5 mb-4 space-y-2 marker:text-regen-accent">
                <li>validated contributions</li>
                <li>participation history</li>
                <li>stewardship roles</li>
                <li>impact verification</li>
              </ul>
              <p>Reputation is cumulative but subject to decay and contextual weighting, preventing permanent dominance.</p>
            </section>

            {/* 6. Optimistic Governance Model */}
            <section className="mb-12">
              <h3 className="text-2xl font-serif font-bold text-regen-dark mb-4">6. Optimistic Governance Model</h3>
              <p className="mb-4">Instead of requiring full consensus before action, GOPR adopts an optimistic model:</p>
              <ul className="list-disc pl-5 mb-4 space-y-2 marker:text-regen-accent">
                <li>Actions proceed by default once approved</li>
                <li>Challenges can be raised within defined windows</li>
                <li>Safeguards activate only when needed</li>
              </ul>
              <p>This reduces friction while maintaining system integrity.</p>
            </section>

            {/* 7. Accountability */}
            <section className="mb-12">
              <h3 className="text-2xl font-serif font-bold text-regen-dark mb-4">7. Accountability, Bonds and Slashing (Conceptual)</h3>
              <p className="mb-4">To align incentives, GOPR introduces optional mechanisms such as:</p>
              <ul className="list-disc pl-5 mb-4 space-y-2 marker:text-regen-accent">
                <li>role-based bonds</li>
                <li>economic accountability</li>
                <li>proportional slashing for harmful actions</li>
              </ul>
              <p>These mechanisms are design concepts, subject to experimentation and iteration.</p>
            </section>

             {/* 8. Relationship */}
             <section className="mb-12">
              <h3 className="text-2xl font-serif font-bold text-regen-dark mb-4">8. Relationship with Impact Systems</h3>
              <p className="mb-4">GOPR is designed to integrate with systems like the RegenImpactHub, where identity, contribution and impact are documented.</p>
              <p className="font-medium text-regen-dark">Governance decisions draw from real-world signals, not abstract voting alone.</p>
            </section>

            {/* 9. Phased Evolution */}
            <section className="mb-12">
              <h3 className="text-2xl font-serif font-bold text-regen-dark mb-4">9. Phased Evolution</h3>
              <p className="mb-4">GOPR evolves in stages:</p>
              <ol className="list-decimal pl-5 space-y-3 mb-6 marker:text-regen-accent marker:font-bold">
                <li>Governance principles and documentation</li>
                <li>Manual and social governance processes</li>
                <li>Partial automation</li>
                <li>Advanced governance tooling</li>
              </ol>
              <p>Each phase is informed by real-world feedback.</p>
            </section>

            {/* 10. Conclusion */}
            <section className="mb-16">
              <h3 className="text-2xl font-serif font-bold text-regen-dark mb-4">10. Conclusion</h3>
              <p className="mb-4">GOPR proposes governance not as control, but as collective care.</p>
              <p>By aligning influence with contribution and embedding accountability into system design, it offers a governance path capable of supporting regenerative systems over time.</p>
            </section>

            {/* Final Note */}
            <div className="bg-stone-50 border border-stone-100 rounded-3xl p-8 text-center mb-12">
              <h4 className="text-sm font-bold tracking-widest uppercase text-regen-stone mb-4">Final Note</h4>
              <p className="italic text-gray-600 mb-2">This whitepaper reflects a direction, not a destination.</p>
              <p className="font-bold text-regen-dark text-lg">Governance matures through practice.</p>
            </div>

            <div className="mt-12 text-center">
              <Button href="/governance" variant="outline">
                 Back to Governance Overview
              </Button>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Whitepaper;