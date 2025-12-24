import React from 'react';
import PageHeader from './PageHeader';
import { 
  Shield, 
  Eye, 
  Lock, 
  Mail, 
  Globe, 
  Info, 
  ShieldCheck, 
  FileText, 
  ExternalLink,
  Users,
  Zap,
  RefreshCw
} from 'lucide-react';

const Legal: React.FC = () => {
  const sections = [
    {
      id: "1",
      title: "Who we are",
      icon: <Users className="w-5 h-5" />,
      content: (
        <>
          <p>BeRegen is a regenerative infrastructure initiative focused on education, coordination and impact validation.</p>
          <div className="mt-4 flex items-center gap-2 text-regen-accent font-medium">
            <Mail className="w-4 h-4" />
            <a href="mailto:beregenerative.life@gmail.com">beregenerative.life@gmail.com</a>
          </div>
        </>
      )
    },
    {
      id: "2",
      title: "Information we collect",
      icon: <FileText className="w-5 h-5" />,
      content: (
        <>
          <p>We collect only what is necessary to operate responsibly.</p>
          <p className="mt-2">This may include:</p>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>contact information you voluntarily provide (email, name, message)</li>
            <li>basic technical data (browser type, device, anonymized usage data)</li>
            <li>information submitted through forms or direct communication</li>
          </ul>
          <p className="mt-4 text-sm italic">We do not collect sensitive personal data unless explicitly required and consented.</p>
        </>
      )
    },
    {
      id: "3",
      title: "How we use information",
      icon: <Zap className="w-5 h-5" />,
      content: (
        <>
          <p>Information is used to:</p>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>respond to inquiries and requests</li>
            <li>communicate about participation, collaboration or support</li>
            <li>improve the clarity and functionality of the ecosystem</li>
            <li>maintain security and operational integrity</li>
          </ul>
          <p className="mt-4 font-bold text-regen-dark">We do not sell, rent or trade personal data.</p>
        </>
      )
    },
    {
      id: "4",
      title: "Cookies and analytics",
      icon: <Eye className="w-5 h-5" />,
      content: (
        <>
          <p>BeRegen may use minimal analytics tools to understand site usage.</p>
          <p className="mt-2">These tools are used only to improve usability and performance. We avoid invasive tracking, behavioral profiling or advertising cookies.</p>
        </>
      )
    },
    {
      id: "5",
      title: "Data sharing",
      icon: <Globe className="w-5 h-5" />,
      content: (
        <>
          <p>We do not share personal data with third parties except when:</p>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>required by law</li>
            <li>necessary for essential technical operations</li>
            <li>explicitly consented by the user</li>
          </ul>
          <p className="mt-4">Any integration with external tools follows public-good and data-minimization principles.</p>
        </>
      )
    },
    {
      id: "6",
      title: "Data storage and security",
      icon: <Lock className="w-5 h-5" />,
      content: (
        <>
          <p>We take reasonable measures to protect information from unauthorized access, misuse or loss.</p>
          <p className="mt-2">However, no digital system is completely risk-free. We continuously evaluate practices to improve safety and resilience.</p>
        </>
      )
    },
    {
      id: "7",
      title: "Your rights",
      icon: <ShieldCheck className="w-5 h-5" />,
      content: (
        <>
          <p>Depending on your jurisdiction, you may have the right to:</p>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>access your data</li>
            <li>request correction or deletion</li>
            <li>withdraw consent</li>
            <li>request information about data usage</li>
          </ul>
          <p className="mt-4">To exercise these rights, contact us by email.</p>
        </>
      )
    },
    {
      id: "8",
      title: "External links",
      icon: <ExternalLink className="w-5 h-5" />,
      content: (
        <>
          <p>BeRegen may link to external platforms (Patreon, Giveth, GitHub, etc.).</p>
          <p className="mt-2 font-medium">We are not responsible for the privacy practices of external sites.</p>
        </>
      )
    },
    {
      id: "9",
      title: "Changes to this policy",
      icon: <RefreshCw className="w-5 h-5" />,
      content: (
        <>
          <p>This Privacy Policy may be updated as the ecosystem evolves.</p>
          <p className="mt-2">Changes will be reflected on this page with an updated date.</p>
        </>
      )
    },
    {
      id: "10",
      title: "Contact",
      icon: <Mail className="w-5 h-5" />,
      content: (
        <>
          <p>For privacy-related questions or requests:</p>
          <p className="mt-2 font-bold text-regen-dark">Email: <a href="mailto:beregenerative.life@gmail.com" className="text-regen-accent hover:underline">beregenerative.life@gmail.com</a></p>
        </>
      )
    }
  ];

  return (
    <div className="pt-20 min-h-screen bg-regen-cream font-sans">
      <PageHeader 
        title="Privacy Policy" 
        subtitle="Last updated: 2025"
        backgroundImage="https://images.unsplash.com/photo-1557683316-973673baf926?q=80&w=2629&auto=format&fit=crop"
      />

      <div className="container mx-auto px-6 py-16 md:py-24">
        <div className="max-w-4xl mx-auto">
          
          <section className="mb-16 text-center">
             <div className="prose prose-lg text-regen-stone mx-auto space-y-6">
                <p className="text-xl leading-relaxed">
                  BeRegen values privacy, care and responsibility.
                </p>
                <p>
                  This Privacy Policy explains how we collect, use and protect information when you interact with the BeRegen ecosystem.
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

          <section className="mt-24 text-center">
             <p className="text-regen-stone italic text-sm">
               Infrastructure must earn trust through practice.
             </p>
          </section>

        </div>
      </div>
    </div>
  );
};

export default Legal;
