import React from 'react';
import PageHeader from './PageHeader';
import { 
  Scale, 
  Shield, 
  Handshake, 
  Globe, 
  FileText, 
  ExternalLink, 
  Info, 
  ShieldAlert, 
  Mail,
  RefreshCw,
  Lock,
  Zap,
  Users,
  Compass
} from 'lucide-react';

const TermsOfService: React.FC = () => {
  const sections = [
    {
      id: "1",
      title: "About BeRegen",
      icon: <Info className="w-5 h-5" />,
      content: (
        <div className="space-y-4">
          <p>BeRegen is a regenerative infrastructure initiative focused on education, fieldwork, coordination, governance experimentation and impact validation.</p>
          <p>BeRegen is not a commercial platform, marketplace or investment product. It operates as a values-driven ecosystem designed to support real-world regenerative practice and public-good infrastructure.</p>
        </div>
      )
    },
    {
      id: "2",
      title: "Scope of the ecosystem",
      icon: <Compass className="w-5 h-5" />,
      content: (
        <div className="space-y-4">
          <p>BeRegen may include, but is not limited to:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>educational content and documentation</li>
            <li>fieldwork activities and learning routes</li>
            <li>experimental digital tools and prototypes</li>
            <li>early-stage infrastructure for identity, reputation and impact validation</li>
            <li>community participation, research and collaboration pathways</li>
          </ul>
          <p className="italic text-sm text-regen-stone/70">Some components may be experimental, incomplete or evolving.</p>
        </div>
      )
    },
    {
      id: "3",
      title: "No guarantees or warranties",
      icon: <ShieldAlert className="w-5 h-5" />,
      content: (
        <div className="space-y-4">
          <p>BeRegen is provided “as is” and “as available”.</p>
          <p>We do not guarantee uninterrupted access, error-free systems, automated functionality, or specific outcomes such as funding, validation or recognition.</p>
          <p className="font-bold text-regen-dark">Participation is based on learning, contribution and shared responsibility — not guaranteed results.</p>
        </div>
      )
    },
    {
      id: "4",
      title: "Participation and responsibility",
      icon: <Users className="w-5 h-5" />,
      content: (
        <div className="space-y-4">
          <p>By engaging with BeRegen, you agree to:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>act in good faith and with respect toward people, communities and ecosystems</li>
            <li>avoid extractive, misleading, abusive or harmful behavior</li>
            <li>respect local context, consent and community autonomy</li>
            <li>engage responsibly with shared infrastructure and governance processes</li>
          </ul>
          <p className="text-sm italic">BeRegen reserves the right to limit or discontinue participation that violates these principles.</p>
        </div>
      )
    },
    {
      id: "5",
      title: "Governance and decision-making",
      icon: <Scale className="w-5 h-5" />,
      content: (
        <div className="space-y-4">
          <p>Governance within BeRegen follows contribution-based and responsibility-driven principles, including the GOPR framework.</p>
          <p className="font-medium text-regen-dark">Financial support does not grant governance power, control or preferential influence.</p>
          <p>Participation and responsibility may evolve over time based on contribution, reputation and alignment.</p>
        </div>
      )
    },
    {
      id: "6",
      title: "Intellectual property and content",
      icon: <FileText className="w-5 h-5" />,
      content: (
        <div className="space-y-4">
          <p>Unless otherwise stated:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>BeRegen-owned content may not be misrepresented or sold without permission</li>
            <li>Educational and documentation materials may be shared under open or attribution-based principles when specified</li>
            <li>Contributors retain rights to their own work unless explicitly agreed otherwise</li>
          </ul>
          <p>Use of content must respect attribution, context and intent.</p>
        </div>
      )
    },
    {
      id: "7",
      title: "External platforms and links",
      icon: <ExternalLink className="w-5 h-5" />,
      content: (
        <div className="space-y-4">
          <p>BeRegen may link to or integrate with third-party platforms (such as Patreon, Giveth, GitHub or Web3 tools).</p>
          <p className="font-medium">BeRegen is not responsible for third-party availability, policies or actions.</p>
        </div>
      )
    },
    {
      id: "8",
      title: "No financial or legal advice",
      icon: <Zap className="w-5 h-5" />,
      content: (
        <div className="space-y-4">
          <p>Nothing within BeRegen constitutes financial, legal or investment advice.</p>
          <p>BeRegen does not offer investment products, profit guarantees or speculative opportunities.</p>
        </div>
      )
    },
    {
      id: "9",
      title: "Limitation of liability",
      icon: <Shield className="w-5 h-5" />,
      content: (
        <div className="space-y-4">
          <p>To the maximum extent permitted by law, BeRegen is not liable for indirect damages, loss of data, opportunity or outcomes resulting from participation.</p>
          <p className="font-bold text-regen-dark">Use of the ecosystem is voluntary and at your own risk.</p>
        </div>
      )
    },
    {
      id: "10",
      title: "Changes to these terms",
      icon: <RefreshCw className="w-5 h-5" />,
      content: (
        <div className="space-y-4">
          <p>These Terms may evolve as the ecosystem grows.</p>
          <p>Updates will be reflected on this page with a revised date.</p>
        </div>
      )
    },
    {
      id: "11",
      title: "Contact",
      icon: <Mail className="w-5 h-5" />,
      content: (
        <div className="space-y-4">
          <p>For questions regarding these Terms:</p>
          <div className="flex items-center gap-2 text-regen-accent font-bold">
            <Mail className="w-4 h-4" />
            <a href="mailto:beregenerative.life@gmail.com" className="hover:underline">beregenerative.life@gmail.com</a>
          </div>
        </div>
      )
    }
  ];

  return (
    <div className="pt-20 min-h-screen bg-regen-cream font-sans">
      <PageHeader 
        title="Terms of Service" 
        subtitle="Last updated: 2025"
        backgroundImage="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2670&auto=format&fit=crop"
      />

      <div className="container mx-auto px-6 py-16 md:py-24">
        <div className="max-w-4xl mx-auto">
          
          <section className="mb-16 text-center">
             <div className="prose prose-lg text-regen-stone mx-auto space-y-6">
                <h2 className="text-3xl font-serif font-bold text-regen-dark">Welcome to BeRegen.</h2>
                <p className="text-xl leading-relaxed">
                  These Terms of Service (“Terms”) govern your access to and use of the BeRegen website, platforms, content and related services (collectively, the “Ecosystem”).
                </p>
                <p className="font-medium text-regen-dark border-l-4 border-regen-accent pl-6 text-left md:text-center md:border-l-0 md:pl-0">
                  By accessing or interacting with BeRegen, you agree to these Terms. If you do not agree, please do not use the ecosystem.
                </p>
             </div>
          </section>

          <div className="space-y-12">
            {sections.map((section) => (
              <div key={section.id} className="bg-white p-8 md:p-10 rounded-[2.5rem] shadow-sm border border-stone-100 flex flex-col md:flex-row gap-8 items-start">
                <div className="w-12 h-12 bg-regen-sage rounded-xl flex items-center justify-center text-regen-accent shrink-0 shadow-sm">
                  {section.icon}
                </div>
                <div className="flex-1">
                  <h2 className="text-xl md:text-2xl font-serif font-bold text-regen-dark mb-4 flex items-center gap-3">
                    <span className="text-regen-accent/40 text-sm font-sans tracking-widest">{section.id}.</span>
                    {section.title}
                  </h2>
                  <div className="prose prose-stone text-regen-stone leading-relaxed max-w-none">
                    {section.content}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <section className="mt-24 text-center space-y-8">
             <div className="max-w-2xl mx-auto p-10 bg-regen-dark text-white rounded-[3rem] shadow-xl">
               <p className="text-xl md:text-2xl font-serif italic mb-6">
                 "Regeneration requires trust, responsibility and care. These Terms exist to protect those conditions — not to replace them."
               </p>
               <div className="w-12 h-1 bg-regen-highlight mx-auto rounded-full"></div>
             </div>
             <p className="text-regen-stone italic text-sm">
               Infrastructure must earn trust through practice.
             </p>
          </section>

        </div>
      </div>
    </div>
  );
};

export default TermsOfService;