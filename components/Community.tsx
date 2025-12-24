import React from 'react';
import PageHeader from './PageHeader';
import { Users, Heart, MessageCircle } from 'lucide-react';

const Community: React.FC = () => {
  return (
    <div className="pt-20 min-h-screen bg-regen-cream">
      <PageHeader 
        title="Community" 
        subtitle="The Heart of the Ecosystem."
      />
      <div className="container mx-auto px-6 py-16">
        <div className="max-w-4xl mx-auto space-y-8">
           <div className="bg-white p-8 rounded-2xl flex items-start gap-6 shadow-sm">
              <Heart className="w-8 h-8 text-regen-accent shrink-0" />
              <div>
                 <h3 className="text-xl font-bold mb-2">Patreon</h3>
                 <p className="text-gray-600">Join our core supporter group for behind-the-scenes access and intimate updates.</p>
              </div>
           </div>
           
           <div className="bg-white p-8 rounded-2xl flex items-start gap-6 shadow-sm">
              <MessageCircle className="w-8 h-8 text-indigo-500 shrink-0" />
              <div>
                 <h3 className="text-xl font-bold mb-2">Discord</h3>
                 <p className="text-gray-600">Exclusive community channels for discussion, coordination, and learning.</p>
              </div>
           </div>

           <div className="bg-white p-8 rounded-2xl flex items-start gap-6 shadow-sm">
              <Users className="w-8 h-8 text-emerald-500 shrink-0" />
              <div>
                 <h3 className="text-xl font-bold mb-2">Validator Network</h3>
                 <p className="text-gray-600">A decentralized network of partners verifying impact on the ground.</p>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};

export default Community;