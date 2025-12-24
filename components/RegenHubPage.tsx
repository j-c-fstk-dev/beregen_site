import React from 'react';
import PageHeader from './PageHeader';
import { 
  Database, 
  Target, 
  WifiOff, 
  ShieldCheck, 
  Binary, 
  Scale, 
  Coins, 
  Info, 
  Globe 
} from 'lucide-react';

const RegenHubPage: React.FC = () => {
  return (
    <div className="pt-20 min-h-screen bg-regen-cream font-sans">
      <PageHeader 
        title="RegenImpactHub" 
        subtitle="Identity, Reputation and Impact Verification Infrastructure"
        backgroundImage="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2670&auto=format&fit=crop"
      />

      <div className="container mx-auto px-6 py-16 md:py-24">
        <div className="max-w-4xl mx-auto space-y-20">
          
          {/* SECTION — OVERVIEW */}
          <section className="flex flex-col md:flex-row gap-8 items-start">
            <div className="w-12 h-12 bg-regen-accent/10 rounded-xl flex items-center justify-center text-regen-accent shrink-0">
              <Database className="w-6 h-6" />
            </div>
            <div className="prose prose-lg text-regen-stone max-w-none">
              <h2 className="text-2xl font-serif font-bold text-regen-dark mb-4">Overview</h2>
              <p>
                The RegenImpactHub is the central infrastructure of the BeRegen ecosystem for registering, validating, coordinating and financing regenerative actions in the real world.
              </p>
              <p>
                It was designed to address one of the main bottlenecks of the global regenerative ecosystem: the fragmentation between real-world action, impact verification, governance, reputation and access to resources.
              </p>
              <p>
                By operating as a bridge between local impact, decentralized technology and systemic trust, the RegenImpactHub enables regenerative initiatives to be recognized, protected and supported without losing context, inclusion or integrity.
              </p>
            </div>
          </section>

          {/* SECTION — WHY IT MATTERS */}
          <section className="flex flex-col md:flex-row gap-8 items-start">
            <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center text-amber-600 shrink-0">
              <Target className="w-6 h-6" />
            </div>
            <div className="prose prose-lg text-regen-stone max-w-none">
              <h2 className="text-2xl font-serif font-bold text-regen-dark mb-4">Why it matters</h2>
              <p>
                Across the world, regenerative work is already happening — in farms, schools, territories, communities and small initiatives.
              </p>
              <p className="font-medium text-regen-dark mb-2">What is often missing is not action, but infrastructure:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>to document impact consistently</li>
                <li>to verify it responsibly</li>
                <li>to build long-term reputation</li>
                <li>to coordinate decisions</li>
                <li>to access funding fairly</li>
              </ul>
              <p>
                The RegenImpactHub exists to connect these layers into a coherent system, reducing fragmentation and enabling regenerative efforts to scale with trust.
              </p>
            </div>
          </section>

          {/* SECTION — INCLUSIVE & OFFLINE-FIRST BY DESIGN */}
          <section className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-sm border border-stone-100 flex flex-col md:flex-row gap-8 items-start">
            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 shrink-0">
              <WifiOff className="w-6 h-6" />
            </div>
            <div className="prose prose-lg text-regen-stone max-w-none">
              <h2 className="text-2xl font-serif font-bold text-regen-dark mb-4">Inclusive & offline-first by design</h2>
              <p>
                The RegenImpactHub is built with an offline-first and inclusive architecture.
              </p>
              <p>
                Impact records can be created locally, stored securely and synchronized later when connectivity becomes available. This design ensures that rural communities, traditional peoples and initiatives operating in low-connectivity environments are not excluded from recognition, governance or funding mechanisms.
              </p>
              <p>
                By combining Web2, Web3 and offline-first approaches, the platform prioritizes participation over technological privilege.
              </p>
            </div>
          </section>

          {/* SECTION — IDENTITY, REPUTATION & VALIDATION */}
          <section className="flex flex-col md:flex-row gap-8 items-start">
            <div className="w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center text-regen-accent shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div className="prose prose-lg text-regen-stone max-w-none">
              <h2 className="text-2xl font-serif font-bold text-regen-dark mb-4">Identity, reputation & validation</h2>
              <p>
                At its core, the RegenImpactHub provides a regenerative identity and reputation layer.
              </p>
              <p className="font-medium text-regen-dark mb-2">Participants — individuals, projects and organizations — build a verifiable history of real contributions through:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>decentralized identity and verifiable credentials</li>
                <li>impact attestations and validation records</li>
                <li>reputation signals such as the RegenScore</li>
              </ul>
              <p>
                Reputation reflects consistency, responsibility and proven impact over time, rather than financial capital or social influence.
              </p>
            </div>
          </section>

          {/* SECTION — HYBRID VALIDATION MODEL */}
          <section className="flex flex-col md:flex-row gap-8 items-start">
            <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center text-indigo-600 shrink-0">
              <Binary className="w-6 h-6" />
            </div>
            <div className="prose prose-lg text-regen-stone max-w-none">
              <h2 className="text-2xl font-serif font-bold text-regen-dark mb-4">Hybrid validation model</h2>
              <p>
                Validation within the RegenImpactHub follows a hybrid approach.
              </p>
              <p>
                Human review, community validation and AI-assisted analysis work together to preserve local context while increasing scalability and reducing bias.
              </p>
              <p>
                Validation mechanisms evolve progressively as projects mature and participants accumulate reputation, avoiding both excessive automation and centralized control.
              </p>
            </div>
          </section>

          {/* SECTION — GOVERNANCE & COORDINATION */}
          <section className="flex flex-col md:flex-row gap-8 items-start">
            <div className="w-12 h-12 bg-regen-dark/10 rounded-xl flex items-center justify-center text-regen-dark shrink-0">
              <Scale className="w-6 h-6" />
            </div>
            <div className="prose prose-lg text-regen-stone max-w-none">
              <h2 className="text-2xl font-serif font-bold text-regen-dark mb-4">Governance & coordination</h2>
              <p>
                Governance within the RegenImpactHub is guided by an external governance infrastructure: GOPR (Governance Optimistic weighted by Reputation).
              </p>
              <p>
                The RegenImpactHub provides the operational signals — identity, contribution history and validation data — while GOPR defines how decisions, priorities and coordination processes are handled.
              </p>
              <p>
                This separation ensures that governance remains accountable, resilient and aligned with long-term regenerative principles.
              </p>
            </div>
          </section>

          {/* SECTION — FUNDING & RESOURCE FLOWS */}
          <section className="flex flex-col md:flex-row gap-8 items-start">
            <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center text-green-700 shrink-0">
              <Coins className="w-6 h-6" />
            </div>
            <div className="prose prose-lg text-regen-stone max-w-none">
              <h2 className="text-2xl font-serif font-bold text-regen-dark mb-4">Funding & resource flows</h2>
              <p>
                The RegenImpactHub also acts as a connective layer to funding mechanisms.
              </p>
              <p>
                By generating reliable, verifiable and interoperable impact data, it reduces due diligence costs for funders and expands access to resources for local regenerative initiatives.
              </p>
              <p>
                Future integrations include grants, quadratic funding, recurring donations and regenerative financial instruments aligned with verified impact.
              </p>
            </div>
          </section>

          {/* SECTION — CURRENT STATUS */}
          <section className="bg-regen-dark text-white p-8 md:p-12 rounded-[2.5rem] shadow-xl flex flex-col md:flex-row gap-8 items-start">
            <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-regen-highlight shrink-0">
              <Info className="w-6 h-6" />
            </div>
            <div className="prose prose-lg prose-invert max-w-none">
              <h2 className="text-2xl font-serif font-bold text-white mb-4">Current status</h2>
              <p className="text-regen-highlight font-medium">
                The RegenImpactHub is currently in an early MVP phase.
              </p>
              <p className="mb-4 text-gray-300">At this stage:</p>
              <ul className="list-disc pl-5 space-y-2 text-gray-300">
                <li>core identity and validation flows are being tested</li>
                <li>internal impact registration is active</li>
                <li>reputation mechanisms are under experimentation</li>
                <li>third-party public onboarding is not yet open</li>
              </ul>
              <p className="text-gray-400 italic mt-6">
                Development follows a phased approach, prioritizing learning, trust and real-world feedback over premature scale.
              </p>
            </div>
          </section>

          {/* SECTION — A PUBLIC REGENERATIVE INFRASTRUCTURE */}
          <section className="flex flex-col md:flex-row gap-8 items-start pb-12">
            <div className="w-12 h-12 bg-regen-accent/10 rounded-xl flex items-center justify-center text-regen-accent shrink-0">
              <Globe className="w-6 h-6" />
            </div>
            <div className="prose prose-lg text-regen-stone max-w-none">
              <h2 className="text-2xl font-serif font-bold text-regen-dark mb-4">A public regenerative infrastructure</h2>
              <p>
                The RegenImpactHub is not merely a platform.
              </p>
              <p>
                It is designed as a public regenerative infrastructure — a system that recognizes, protects and scales actions that regenerate territories, communities and relationships.
              </p>
              <p>
                By connecting the physical and digital worlds without sacrificing inclusion, context or trust, it enables regeneration to grow with integrity.
              </p>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
};

export default RegenHubPage;