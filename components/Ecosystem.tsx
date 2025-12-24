
import React from 'react';
import { ShieldCheck, Scale, Video, Smartphone, LayoutGrid, ArrowRight } from 'lucide-react';
import Button from './Button';
import { useNavigate } from 'react-router-dom';

const Ecosystem: React.FC = () => {
  const navigate = useNavigate();

  const modules = [
    {
      title: "RegenImpactHub",
      desc: "Identity, reputation and regenerative impact validation. Where real-world actions become visible, verifiable and recognized.",
      status: "Active",
      icon: <ShieldCheck className="w-8 h-8" />,
      color: "bg-teal-50 text-regen-accent",
      link: "/regenimpacthub"
    },
    {
      title: "Governance (GOPR)",
      desc: "An external governance infrastructure based on reputation, optimistic execution and collective accountability. Used by the BeRegen ecosystem and designed to serve communities beyond it.",
      status: "In development",
      icon: <Scale className="w-8 h-8" />,
      color: "bg-blue-50 text-blue-600",
      link: "/governance"
    },
    {
      title: "RegenFlix",
      desc: "Structured learning and regenerative education. Courses and practical frameworks that help apply regenerative principles in real-world contexts.",
      status: "In development",
      icon: <Video className="w-8 h-8" />,
      color: "bg-indigo-50 text-indigo-600",
      link: "/regenflix"
    },
    {
      title: "RegenApp",
      desc: "Daily regenerative practices and micro-actions. Small habits that connect individual presence with collective impact.",
      status: "Planned",
      icon: <Smartphone className="w-8 h-8" />,
      color: "bg-emerald-50 text-emerald-600",
      link: "/regenapp"
    },
    {
      title: "RegenFund",
      desc: "Funding aligned with real impact. Future mechanisms for support, incentives and resources based on verified actions.",
      status: "Planned",
      icon: <LayoutGrid className="w-8 h-8" />,
      color: "bg-amber-50 text-amber-600",
      link: "/regenfund"
    }
  ];

  return (
    <section id="ecosystem" className="py-24 bg-regen-sand relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute top-0 left-0 w-full h-full opacity-30 pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(#0d9488 0.5px, transparent 0.5px)', backgroundSize: '24px 24px' }}></div>

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Section 3: How the Ecosystem Works */}
        <div className="text-center mb-20 max-w-4xl mx-auto">
          <span className="inline-block py-1 px-3 rounded-full bg-regen-accent/10 text-regen-accent text-xs font-bold tracking-widest uppercase mb-4">How the Ecosystem Works</span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-regen-dark mb-8">
            A living, modular and interconnected system
          </h2>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            BeRegen operates as a layered infrastructure:
          </p>
          <div className="flex flex-wrap justify-center items-center gap-3 text-lg font-medium text-regen-dark">
            <span>Action</span> <ArrowRight className="w-4 h-4 text-regen-accent"/>
            <span>Recognition</span> <ArrowRight className="w-4 h-4 text-regen-accent"/>
            <span>Governance</span> <ArrowRight className="w-4 h-4 text-regen-accent"/>
            <span>Resources</span> <ArrowRight className="w-4 h-4 text-regen-accent"/>
            <span>Learning</span>
          </div>
          <p className="text-gray-500 mt-6 italic">
            Each layer depends on the others — governance coordinates value, recognition makes impact visible, learning feeds practice, and resources support what proves meaningful.
          </p>
        </div>

        {/* Section 4: The Modules */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {modules.map((mod, idx) => (
            <div key={idx} className="bg-white rounded-[2.5rem] p-8 shadow-xl shadow-stone-200/50 hover:shadow-2xl hover:-translate-y-1 transition-all duration-500 border border-stone-100 flex flex-col h-full relative overflow-hidden group">
              <div className={`w-16 h-16 ${mod.color} rounded-2xl flex items-center justify-center mb-6 relative z-10 group-hover:rotate-12 transition-transform`}>
                {mod.icon}
              </div>
              
              <h3 className="text-2xl font-serif font-bold text-regen-dark mb-2 relative z-10">{mod.title}</h3>
              
              <p className="text-gray-600 mb-6 leading-relaxed flex-grow relative z-10">
                {mod.desc}
              </p>
              
              <div className="mt-auto pt-6 border-t border-gray-100 relative z-10 flex justify-between items-center">
                <span className={`text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider ${
                  mod.status === 'Active' ? 'bg-green-100 text-green-700' :
                  mod.status === 'In development' ? 'bg-blue-100 text-blue-700' :
                  'bg-gray-100 text-gray-600'
                }`}>
                  {mod.status}
                </span>
                <Button href={mod.link} variant="ghost" size="sm" className="p-0 hover:bg-transparent hover:text-regen-accent">
                   <ArrowRight className="w-5 h-5" />
                </Button>
              </div>
            </div>
          ))}
          
          {/* CTA Card */}
          <div className="bg-regen-dark rounded-[2.5rem] p-8 flex flex-col items-center justify-center text-center text-white h-full">
            <h3 className="text-2xl font-serif font-bold mb-4">Ready to dive deeper?</h3>
            <p className="text-gray-300 mb-8">Discover how these modules interact to create impact.</p>
            <Button href="/ecosystem" variant="accent">Explore the Ecosystem</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Ecosystem;
