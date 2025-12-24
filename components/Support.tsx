import React from 'react';
import PageHeader from './PageHeader';
import { Heart, Coins, ShoppingBag, Info, ShieldCheck, Map, Globe, BookOpen, Zap } from 'lucide-react';
import Button from './Button';

const Support: React.FC = () => {
  return (
    <div className="pt-20 min-h-screen bg-regen-cream font-sans">
      <PageHeader 
        title="Support the BeRegen Ecosystem" 
        subtitle="Support is not control. Support is care for shared infrastructure."
        backgroundImage="https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?q=80&w=2672&auto=format&fit=crop"
      />

      <div className="container mx-auto px-6 py-16 md:py-24">
        <div className="max-w-4xl mx-auto space-y-24">
          
          {/* SECTION 1 — INTRODUCTION */}
          <section className="text-center">
            <div className="prose prose-lg text-regen-stone mx-auto space-y-6">
              <p className="text-xl leading-relaxed">
                BeRegen is a living regenerative infrastructure — not a product, not a platform owned by investors, and not a short-term initiative.
              </p>
              <p>
                To remain independent, accessible and aligned with regenerative principles, the ecosystem relies on conscious, values-aligned support.
              </p>
              <p className="font-medium text-regen-dark italic border-l-4 border-regen-accent pl-6 text-left md:text-center md:border-l-0 md:pl-0">
                Supporting BeRegen means sustaining the conditions that allow regenerative work to remain visible, verifiable and connected — without capture, extraction or centralization.
              </p>
            </div>
          </section>

          {/* SECTION 2 — WHY SUPPORT MATTERS */}
          <section className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-sm border border-stone-100">
            <h2 className="text-3xl font-serif font-bold text-regen-dark mb-8">Why support matters</h2>
            <div className="prose prose-lg text-regen-stone max-w-none space-y-6">
              <p>
                Regenerative infrastructure requires ongoing care.
              </p>
              <p>
                Fieldwork, documentation, validation systems, education and open coordination tools all demand time, attention and continuity.
              </p>
              <p>
                Unlike extractive platforms, BeRegen does not monetize user data, lock participation behind paywalls or optimize for growth at any cost.
              </p>
              
              <div className="bg-regen-sage p-8 rounded-3xl mt-8">
                <p className="font-bold text-regen-dark mb-4">Support allows us to:</p>
                <ul className="space-y-3 marker:text-regen-accent">
                  <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-regen-accent rounded-full shrink-0"></div> maintain and improve open infrastructure</li>
                  <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-regen-accent rounded-full shrink-0"></div> sustain fieldwork and documentation routes</li>
                  <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-regen-accent rounded-full shrink-0"></div> develop inclusive and offline-first tools</li>
                  <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-regen-accent rounded-full shrink-0"></div> produce open educational content</li>
                  <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-regen-accent rounded-full shrink-0"></div> remain accountable to communities, not capital</li>
                </ul>
              </div>
              
              <p className="font-bold text-regen-dark mt-8 text-center text-xl">
                Support protects independence.
              </p>
            </div>
          </section>

          {/* SECTION 3 — HOW SUPPORT WORKS */}
          <section className="bg-regen-sand p-8 md:p-12 rounded-[2.5rem]">
            <div className="flex items-center gap-4 mb-8">
              <ShieldCheck className="w-8 h-8 text-regen-accent" />
              <h2 className="text-3xl font-serif font-bold text-regen-dark">How support works</h2>
            </div>
            <div className="prose prose-lg text-regen-stone max-w-none space-y-6">
              <p>
                Support does not grant governance power, decision-making authority or preferential influence.
              </p>
              <p>
                Governance within BeRegen follows contribution, responsibility and accountability pathways defined through GOPR — not financial weight.
              </p>
              <div className="flex flex-col sm:flex-row gap-8 pt-6">
                <div className="flex-1 bg-white/50 p-6 rounded-2xl border border-white/80">
                  <p className="text-sm font-bold text-regen-dark uppercase tracking-widest mb-2">Support</p>
                  <p className="text-gray-600">sustains the ecosystem.</p>
                </div>
                <div className="flex-1 bg-white/50 p-6 rounded-2xl border border-white/80">
                  <p className="text-sm font-bold text-regen-dark uppercase tracking-widest mb-2">Governance</p>
                  <p className="text-gray-600">protects its integrity.</p>
                </div>
              </div>
            </div>
          </section>

          {/* SECTION 4 — WAYS TO SUPPORT */}
          <section>
            <h2 className="text-3xl font-serif font-bold text-regen-dark mb-12 text-center">Ways to support</h2>
            <div className="grid md:grid-cols-3 gap-8">
              
              {/* Patreon */}
              <div className="bg-white p-8 rounded-3xl shadow-sm border border-stone-100 flex flex-col items-center text-center">
                <div className="w-14 h-14 bg-red-50 rounded-2xl flex items-center justify-center text-red-500 mb-6">
                  <Heart className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-regen-dark mb-4">Patreon — Ongoing Support</h3>
                <p className="text-gray-600 mb-8 flex-grow">
                  Patreon supports the continuity of fieldwork, documentation, research and educational content. It allows individuals to contribute regularly.
                </p>
                <Button href="#" variant="accent" className="w-full">Support via Patreon</Button>
              </div>

              {/* Giveth */}
              <div className="bg-white p-8 rounded-3xl shadow-sm border border-stone-100 flex flex-col items-center text-center">
                <div className="w-14 h-14 bg-yellow-50 rounded-2xl flex items-center justify-center text-yellow-600 mb-6">
                  <Coins className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-regen-dark mb-4">Giveth — Public Goods Funding</h3>
                <p className="text-gray-600 mb-8 flex-grow">
                  Giveth enables transparent, on-chain donations aligned with public-good values, supporting infrastructure and open coordination efforts.
                </p>
                <Button href="#" variant="outline" className="w-full border-yellow-600 text-yellow-600 hover:bg-yellow-600">Support via Giveth</Button>
              </div>

              {/* Store */}
              <div className="bg-white p-8 rounded-3xl shadow-sm border border-stone-100 flex flex-col items-center text-center">
                <div className="w-14 h-14 bg-regen-sage rounded-2xl flex items-center justify-center text-regen-accent mb-6">
                  <ShoppingBag className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-regen-dark mb-4">Store — Circular Support</h3>
                <p className="text-gray-600 mb-8 flex-grow">
                  Purchases support local economies while sustaining the ecosystem through regenerative and artisanal products created with partner communities.
                </p>
                <Button href="/store" variant="ghost" className="w-full border border-stone-200">Visit the Store</Button>
              </div>

            </div>
          </section>

          {/* SECTION 5 — WHAT SUPPORT SUSTAINS */}
          <section className="py-16 border-y border-stone-100">
            <h2 className="text-3xl font-serif font-bold text-regen-dark mb-12 text-center">What support sustains</h2>
            <div className="grid sm:grid-cols-2 gap-10">
              <div className="flex gap-4">
                <div className="shrink-0 w-10 h-10 rounded-full bg-regen-accent/10 flex items-center justify-center text-regen-accent">
                  <Map className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-regen-dark mb-2">Fieldwork & Presence</h4>
                  <p className="text-sm text-gray-600 leading-relaxed">Travel, visits and on-the-ground learning with regenerative communities.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="shrink-0 w-10 h-10 rounded-full bg-regen-accent/10 flex items-center justify-center text-regen-accent">
                  <Zap className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-regen-dark mb-2">Infrastructure</h4>
                  <p className="text-sm text-gray-600 leading-relaxed">Development and maintenance of open, inclusive digital tools.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="shrink-0 w-10 h-10 rounded-full bg-regen-accent/10 flex items-center justify-center text-regen-accent">
                  <BookOpen className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-regen-dark mb-2">Education & Documentation</h4>
                  <p className="text-sm text-gray-600 leading-relaxed">Creation of guides, learning pathways and open knowledge.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="shrink-0 w-10 h-10 rounded-full bg-regen-accent/10 flex items-center justify-center text-regen-accent">
                  <Globe className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-regen-dark mb-2">Accessibility</h4>
                  <p className="text-sm text-gray-600 leading-relaxed">Ensuring participation beyond connectivity, geography or privilege.</p>
                </div>
              </div>
            </div>
          </section>

          {/* SECTION 6 — A REGENERATIVE APPROACH TO SUPPORT */}
          <section className="text-center">
            <h2 className="text-3xl font-serif font-bold text-regen-dark mb-8">A regenerative approach to support</h2>
            <div className="prose prose-lg text-regen-stone mx-auto space-y-6 mb-12">
              <p>
                Support in BeRegen is relational, not transactional.
              </p>
              <div className="flex flex-wrap justify-center gap-x-8 gap-y-2 text-sm font-bold uppercase tracking-widest text-regen-dark/60">
                <span>No tiers of power</span>
                <span>No preferential treatment</span>
                <span>No extraction of value</span>
              </div>
              <p>
                Only shared responsibility for something that serves the commons.
              </p>
              <p className="text-xl font-medium text-regen-dark">
                If you believe regenerative systems deserve infrastructure that reflects their values, your support helps make that possible.
              </p>
            </div>
            <Button href="/contact" variant="primary" size="lg">
              Get in touch to support
            </Button>
          </section>

        </div>
      </div>
    </div>
  );
};

export default Support;