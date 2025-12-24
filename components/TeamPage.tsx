import React from 'react';
import PageHeader from './PageHeader';
import { Users, Heart, Shield, Globe, Zap, Mail, Rocket } from 'lucide-react';
import Button from './Button';

const TeamPage: React.FC = () => {
  return (
    <div className="pt-20 min-h-screen bg-regen-cream font-sans">
      <PageHeader 
        title="Meet the Team Behind BeRegen" 
        subtitle="A small core team stewarding a living regenerative infrastructure."
        backgroundImage="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2671&auto=format&fit=crop"
      />

      <div className="container mx-auto px-6 py-16 md:py-24">
        <div className="max-w-4xl mx-auto space-y-24">
          
          {/* SECTION — INTRODUCTION */}
          <section className="text-center">
            <div className="prose prose-lg text-regen-stone mx-auto">
              <p className="text-xl leading-relaxed">
                BeRegen is not built by a large organization or a traditional institution. <br className="hidden md:block" />
                It is stewarded by a small core team working in close relationship with territories, communities and regenerative practitioners.
              </p>
              <p className="font-medium text-regen-dark mt-6">
                Our role is not to control regeneration — but to listen, connect, document and build infrastructure that supports what is already alive.
              </p>
            </div>
          </section>

          {/* SECTION — THE STORY BEHIND BEREGEN */}
          <section className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-sm border border-stone-100">
            <h2 className="text-3xl font-serif font-bold text-regen-dark mb-8">The Story Behind BeRegen</h2>
            <div className="prose prose-lg text-regen-stone max-w-none space-y-6">
              <p>
                BeRegen emerged from lived experience.
              </p>
              <p>
                After years working close to nature — with families, educators, small producers and regenerative communities — we observed a recurring pattern: real regenerative work was happening everywhere, but remained invisible, under-documented and disconnected from long-term resources and coordination.
              </p>
              <p>
                At the same time, our involvement in the Web3 and ReFi ecosystem revealed powerful tools for coordination: decentralized identity, public goods funding, verifiable credentials, reputation systems and collective governance.
              </p>
              <p className="font-medium text-regen-dark border-l-4 border-regen-accent pl-6 italic">
                BeRegen was created as a bridge between these worlds — grounding open digital infrastructure in real ecological practice, cultural context and human relationships.
              </p>
            </div>
          </section>

          {/* SECTION — CORE TEAM */}
          <section>
            <div className="flex items-center gap-4 mb-12">
              <Users className="w-8 h-8 text-regen-accent" />
              <h2 className="text-3xl font-serif font-bold text-regen-dark">Core Team</h2>
            </div>

            <div className="space-y-16">
              {/* Profile: Natalia */}
              <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="w-full md:w-1/3">
                  <img 
                    src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&w=987&auto=format&fit=crop" 
                    alt="Natalia Cembranelli Medeiros" 
                    className="rounded-3xl shadow-md w-full aspect-[4/5] object-cover"
                  />
                </div>
                <div className="w-full md:w-2/3">
                  <h3 className="text-2xl font-serif font-bold text-regen-dark">Natalia Cembranelli Medeiros</h3>
                  <p className="text-regen-accent font-medium mb-6">Co-Founder • Regenerative Educator • Fieldwork & Narrative Steward</p>
                  
                  <div className="prose prose-lg text-regen-stone space-y-4">
                    <p>
                      Natalia is an educator, researcher and regenerative practitioner with more than a decade of experience working with families, schools and nature-based initiatives in Brazil.
                    </p>
                    <p>
                      Her work integrates regenerative living, education, storytelling and community stewardship, drawing from ecological practice, Waldorf-inspired pedagogy and lived field experience.
                    </p>
                    <div className="bg-regen-sage p-6 rounded-2xl border border-teal-100 mt-6">
                      <p className="font-bold text-regen-dark mb-3">Within BeRegen, Natalia leads:</p>
                      <ul className="list-disc pl-5 space-y-1 text-sm md:text-base">
                        <li>Fieldwork and territorial relationships</li>
                        <li>Regenerative education pathways</li>
                        <li>Narrative, documentation and cultural coherence</li>
                        <li>Human-centered design across the ecosystem</li>
                      </ul>
                    </div>
                    <p className="text-sm italic mt-4">
                      She ensures that every layer of BeRegen remains grounded, accessible and accountable to real places and people.
                    </p>
                  </div>
                </div>
              </div>

              {/* Profile: Jorge */}
              <div className="flex flex-col md:flex-row-reverse gap-8 items-start">
                <div className="w-full md:w-1/3">
                  <img 
                    src="https://images.unsplash.com/photo-1507206130118-b5907f817163?q=80&w=987&auto=format&fit=crop" 
                    alt="Jorge Medeiros" 
                    className="rounded-3xl shadow-md w-full aspect-[4/5] object-cover"
                  />
                </div>
                <div className="w-full md:w-2/3">
                  <h3 className="text-2xl font-serif font-bold text-regen-dark">Jorge Medeiros</h3>
                  <p className="text-regen-accent font-medium mb-6">Co-Founder • Full-Stack Developer • ReFi & Coordination Infrastructure</p>
                  
                  <div className="prose prose-lg text-regen-stone space-y-4">
                    <p>
                      Jorge has been active in the Web3 and ReFi ecosystem since 2017, working as a developer, researcher and community builder.
                    </p>
                    <p>
                      He is a co-founder of Greenpill Brasil (GPBrasil), contributor to multiple ReFi initiatives, and an active participant in Gitcoin Grants and public goods funding ecosystems.
                    </p>
                    <div className="bg-stone-50 p-6 rounded-2xl border border-stone-200 mt-6">
                      <p className="font-bold text-regen-dark mb-3">Within BeRegen, Jorge leads:</p>
                      <ul className="list-disc pl-5 space-y-1 text-sm md:text-base">
                        <li>Technical architecture of the RegenImpactHub</li>
                        <li>Identity, reputation and validation systems</li>
                        <li>Governance and coordination models (GOPR)</li>
                        <li>Interoperability with Web3 public-good infrastructure</li>
                      </ul>
                    </div>
                    <p className="text-sm italic mt-4">
                      His focus is building hybrid systems that connect on-chain coordination with off-chain regenerative impact — without sacrificing inclusion, transparency or local context.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* SECTION — EXTENDED NETWORK & COLLABORATORS */}
          <section className="bg-regen-sand p-8 md:p-12 rounded-[2.5rem]">
            <div className="flex items-center gap-4 mb-8">
              <Globe className="w-8 h-8 text-regen-accent" />
              <h2 className="text-3xl font-serif font-bold text-regen-dark">Extended Network & Collaborators</h2>
            </div>
            <div className="prose prose-lg text-regen-stone max-w-none">
              <p className="mb-6">
                BeRegen grows through relationships, not headcount.
              </p>
              <p className="mb-6">
                We collaborate with educators, regenerative farmers, ecologists, artists, developers, researchers and community projects across Brazil and Latin America.
              </p>
              <p className="font-medium text-regen-dark italic">
                This extended network informs the ecosystem through fieldwork, validation, learning and shared practice — shaping BeRegen as a collective, evolving infrastructure.
              </p>
            </div>
          </section>

          {/* SECTION — OUR VALUES AS A TEAM */}
          <section>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-serif font-bold text-regen-dark">Our Values as a Team</h2>
            </div>
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="bg-white p-8 rounded-2xl border border-stone-100 shadow-sm flex flex-col items-center text-center">
                <Heart className="w-8 h-8 text-red-400 mb-4" />
                <h4 className="font-bold text-regen-dark mb-2">Regeneration First</h4>
                <p className="text-sm text-gray-600">Everything we build must restore life, not extract from it.</p>
              </div>
              <div className="bg-white p-8 rounded-2xl border border-stone-100 shadow-sm flex flex-col items-center text-center">
                <Zap className="w-8 h-8 text-regen-accent mb-4" />
                <h4 className="font-bold text-regen-dark mb-2">Human-Centered Technology</h4>
                <p className="text-sm text-gray-600">Technology exists to support people and places — not replace them.</p>
              </div>
              <div className="bg-white p-8 rounded-2xl border border-stone-100 shadow-sm flex flex-col items-center text-center">
                <Shield className="w-8 h-8 text-blue-500 mb-4" />
                <h4 className="font-bold text-regen-dark mb-2">Radical Transparency</h4>
                <p className="text-sm text-gray-600">We build in the open and remain accountable to the communities we serve.</p>
              </div>
              <div className="bg-white p-8 rounded-2xl border border-stone-100 shadow-sm flex flex-col items-center text-center">
                <Users className="w-8 h-8 text-amber-600 mb-4" />
                <h4 className="font-bold text-regen-dark mb-2">Community-Rooted Practice</h4>
                <p className="text-sm text-gray-600">BeRegen exists for small places, real people and grounded impact.</p>
              </div>
            </div>
          </section>

          {/* SECTION — WORK WITH US */}
          <section className="text-center bg-regen-dark text-white p-12 md:p-16 rounded-[3rem] shadow-xl relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none" 
                 style={{ backgroundImage: 'radial-gradient(#ffffff 0.5px, transparent 0.5px)', backgroundSize: '20px 20px' }}></div>
            
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">Work With Us</h2>
              <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
                We collaborate with partners, stewards, developers, educators and institutions aligned with regenerative principles and long-term responsibility.
              </p>
              <p className="text-lg text-regen-highlight font-medium mb-12">
                If your work intersects with regeneration, education, coordination or public-good infrastructure, there may be a place to collaborate.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-6">
                <Button href="/contact" variant="accent" size="lg" className="flex gap-2">
                  <Mail className="w-5 h-5" />
                  Get in touch
                </Button>
                <Button href="/early-access" variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-regen-dark flex gap-2">
                  <Rocket className="w-5 h-5" />
                  Start a pilot
                </Button>
              </div>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
};

export default TeamPage;