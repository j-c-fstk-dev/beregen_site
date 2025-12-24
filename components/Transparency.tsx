import React from 'react';
import PageHeader from './PageHeader';
import { FileText } from 'lucide-react';

const Transparency: React.FC = () => {
  return (
    <div className="pt-20 min-h-screen bg-regen-cream">
      <PageHeader 
        title="Transparency" 
        subtitle="Openness is our policy."
      />
      <div className="container mx-auto px-6 py-16">
        <div className="max-w-3xl mx-auto text-center py-12">
           <FileText className="w-16 h-16 text-stone-300 mx-auto mb-6" />
           <p className="text-gray-500 text-lg">
             We are committed to transparent reporting on our impact, funds, and decision-making processes. Reports and data will be published here.
           </p>
        </div>
      </div>
    </div>
  );
};

export default Transparency;