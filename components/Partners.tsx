import React from 'react';
import PageHeader from './PageHeader';
import { Building2, Users, Cpu, Coins, Handshake, ShieldCheck, Globe, Info, Mail } from 'lucide-react';
import Button from './Button';

const Partners: React.FC = () => {
  return (
    <div className="pt-20 min-h-screen bg-regen-cream font-sans">
      <PageHeader 
        title="Partners in Regeneration" 
        subtitle="Collaboration grounded in trust, responsibility and long-term commitment."
        backgroundImage="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2670&auto=format&fit=crop"
      />

      <div className="container mx-auto px-6 py-16 md:py-24">
        <div className="max-w-4xl mx-auto space-y-24">
          
          {/* SECTION 1 — INTRODUCTION */}
          <section className="text-center">
            <div className="prose prose-lg text-regen-stone mx-auto space-y-6">
              <p className="text-xl leading-relaxed">
                BeRegen collaborates with partners who understand that regeneration is not a market opportunity, but a long-term responsibility.
              </p>
              <p>
                We do not seek transactional sponsorships or extractive partnerships.
                We work with institutions, communities and organizations willing to support shared infrastructure, real-world impact and collective learning — without capture or control.
              </p>
              <p className="font-medium text-regen-dark italic border-l-4 border-regen-accent pl-6 text-left md:text-center md:border-l-0 md:pl-0">
                Partnerships within BeRegen are relational, contextual and guided by contribution.
              </p>
            </div>
          </section>

          {/* SECTION 2 — WHY PARTNER WITH BEREGEN */}
          <section className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-sm border border-stone-100">
            <h2 className="text-3xl font-serif font-bold text-regen-dark mb-8">Why partner with BeRegen</h2>
            <div className="prose prose-lg text-regen-stone max-w-none space-y-6">
              <p>
                BeRegen exists to connect regenerative practice with open coordination infrastructure.
              </p>
              <p className="font-bold text-regen-dark">Partners engage with an ecosystem that:</p>
              
              <ul className="space-y-4 marker:text-regen-accent">
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 mt-2.5 bg-regen-accent rounded-full shrink-0"></div>
                  <span>operates in direct contact with territories and communities</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 mt-2.5 bg-regen-accent rounded-full shrink-0"></div>
                  <span>builds public-good infrastructure for impact verification and coordination</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 mt-2.5 bg-regen-accent rounded-full shrink-0"></div>
                  <span>prioritizes inclusion, offline-first access and cultural context</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 mt-2.5 bg-regen-accent rounded-full shrink-0"></div>
                  <span>aligns governance with reputation and responsibility, not capital</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 mt-2.5 bg-regen-accent rounded-full shrink-0"></div>
                  <span>values learning, iteration and real-world feedback</span>
                </li>
              </ul>
              
              <p className="font-bold text-regen-dark mt-8 text-center text-xl">
                Partnership is not about visibility.<br/>
                It is about coherence.
              </p>
            </div>
          </section>

          {/* SECTION 3 — TYPES OF PARTNERSHIPS */}
          <section>
            <h2 className="text-3xl font-serif font-bold text-regen-dark mb-12 text-center">Types of partnerships</h2>
            <div className="grid md:grid-cols-2 gap-8">
              
              {/* Institutional Partners */}
              <div className="bg-white p-8 rounded-3xl shadow-sm border border-stone-100 flex flex-col group">
                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 mb-6 group-hover:scale-110 transition-transform">
                  <Building2 className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-regen-dark mb-4">Institutional Partners</h3>
                <p className="text-gray-600 leading-relaxed">
                  Foundations, NGOs, universities and aligned organizations supporting research, pilots, governance experimentation and long-term infrastructure.
                </p>
              </div>

              {/* Community Partners */}
              <div className="bg-white p-8 rounded-3xl shadow-sm border border-stone-100 flex flex-col group">
                <div className="w-12 h-12 bg-regen-sage rounded-xl flex items-center justify-center text-regen-accent mb-6 group-hover:scale-110 transition-transform">
                  <Users className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-regen-dark mb-4">Community Partners</h3>
                <p className="text-gray-600 leading-relaxed">
                  Local initiatives, regenerative projects, cooperatives and collectives engaging through fieldwork, documentation and shared learning.
                </p>
              </div>

              {/* Technical & Infrastructure Partners */}
              <div className="bg-white p-8 rounded-3xl shadow-sm border border-stone-100 flex flex-col group">
                <div className="w-12 h-12 bg-indigo-50 rounded-xl flex items-center justify-center text-indigo-600 mb-6 group-hover:scale-110 transition-transform">
                  <Cpu className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-regen-dark mb-4">Technical & Infrastructure Partners</h3>
                <p className="text-gray-600 leading-relaxed">
                  Open-source projects, protocol teams and infrastructure providers aligned with public goods, interoperability and ethical technology.
                </p>
              </div>

              {/* Funding & Grant Partners */}
              <div className="bg-white p-8 rounded-3xl shadow-sm border border-stone-100 flex flex-col group">
                <div className="w-12 h-12 bg-amber-50 rounded-xl flex items-center justify-center text-amber-600 mb-6 group-hover:scale-110 transition-transform">
                  <Coins className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-regen-dark mb-4">Funding & Grant Partners</h3>
                <p className="text-gray-600 leading-relaxed">
                  Organizations supporting regenerative infrastructure through grants and non-extractive funding models.
                </p>
              </div>

            </div>
            <p className="mt-12 text-center text-gray-500 italic">
              All partnerships are evaluated based on values alignment, responsibility and long-term intent.
            </p>
          </section>

          {/* SECTION 4 — HOW PARTNERSHIPS WORK */}
          <section className="bg-regen-sand p-8 md:p-12 rounded-[2.5rem]">
            <div className="flex items-center gap-4 mb-8">
              <Handshake className="w-8 h-8 text-regen-accent" />
              <h2 className="text-3xl font-serif font-bold text-regen-dark">How partnerships work</h2>
            </div>
            <div className="prose prose-lg text-regen-stone max-w-none space-y-6">
              <p>
                Partnerships with BeRegen are not plug-and-play.
              </p>
              <p>
                They are built through dialogue, clarity and mutual understanding.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-x-12 gap-y-6 mt-8">
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 mt-2.5 bg-regen-accent rounded-full shrink-0"></div>
                  <span className="text-regen-dark font-medium">shared definition of scope and expectations</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 mt-2.5 bg-regen-accent rounded-full shrink-0"></div>
                  <span className="text-regen-dark font-medium">respect for local context and community autonomy</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 mt-2.5 bg-regen-accent rounded-full shrink-0"></div>
                  <span className="text-regen-dark font-medium">clear boundaries around governance and decision-making</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 mt-2.5 bg-regen-accent rounded-full shrink-0"></div>
                  <span className="text-regen-dark font-medium">transparency about funding, roles and responsibilities</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 mt-2.5 bg-regen-accent rounded-full shrink-0"></div>
                  <span className="text-regen-dark font-medium">alignment with regenerative principles over time</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-8 pt-10">
                <div className="flex-1 bg-white/50 p-6 rounded-2xl border border-white/80">
                  <p className="text-sm font-bold text-regen-dark uppercase tracking-widest mb-2 flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4" /> Support
                  </p>
                  <p className="text-gray-600">does not grant control.</p>
                </div>
                <div className="flex-1 bg-white/50 p-6 rounded-2xl border border-white/80">
                  <p className="text-sm font-bold text-regen-dark uppercase tracking-widest mb-2 flex items-center gap-2">
                    <Globe className="w-4 h-4" /> Collaboration
                  </p>
                  <p className="text-gray-600">does not override governance.</p>
                </div>
              </div>
            </div>
          </section>

          {/* SECTION 5 — A LIVING PARTNERSHIP MODEL */}
          <section className="text-center">
            <h2 className="text-3xl font-serif font-bold text-regen-dark mb-8">A living partnership model</h2>
            <div className="prose prose-lg text-regen-stone mx-auto space-y-6 mb-12">
              <p>
                BeRegen partnerships evolve alongside the ecosystem.
              </p>
              <p>
                Some collaborations are time-bound. Others grow into long-term stewardship.
              </p>
              <p className="text-xl font-medium text-regen-dark italic">
                “What matters is not permanence, but integrity.”
              </p>
              <p className="pt-8 text-regen-stone">
                If your organization is interested in supporting regenerative infrastructure without extracting value or imposing agendas, there may be space to collaborate.
              </p>
            </div>
            
            <div className="bg-regen-dark text-white p-12 md:p-16 rounded-[3rem] shadow-xl relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none" 
                   style={{ backgroundImage: 'radial-gradient(#ffffff 0.5px, transparent 0.5px)', backgroundSize: '20px 20px' }}></div>
              <div className="relative z-10">
                <h3 className="text-2xl md:text-3xl font-serif font-bold mb-6">Explore collaboration with BeRegen</h3>
                <Button href="/contact" variant="accent" size="lg" className="flex gap-2">
                  <Mail className="w-5 h-5" />
                  Get in touch
                </Button>
              </div>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
};

export default Partners;