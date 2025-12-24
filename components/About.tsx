import React from 'react';
import PageHeader from './PageHeader';

const About: React.FC = () => {
  return (
    <div className="pt-20 min-h-screen bg-regen-cream">
      <PageHeader 
        title="About BeRegen" 
        subtitle="Making Regeneration Understandable, Practical and Part of Everyday Life."
      />
      <div className="container mx-auto px-6 py-16">
        <div className="max-w-4xl mx-auto space-y-12">
          <section className="prose prose-lg text-regen-stone">
            <p className="text-xl font-light leading-relaxed">
              BeRegen develops tools, knowledge and pathways that help people, projects and organizations understand, apply and verify regenerative practices — with clarity, responsibility and purpose.
            </p>
            <h3>Our Origin</h3>
            <p>
              Regenerative action already happens every day in thousands of places — families, schools, farms, communities, initiatives and small businesses. Yet much of this work remains scattered, under-documented and without the infrastructure needed for genuine collaboration and fair recognition.
            </p>
            <p>
              BeRegen was created to connect technology, education and social coordination into a single ecosystem — providing concrete resources so anyone or any community can learn, act and have their impact recognized safely and verifiably.
            </p>
            <p>
              BeRegen is intentionally designed as an ecosystem rather than a single solution. Instead of centralizing everything into one platform, it connects complementary layers — learning, identity, governance and resources — and integrates external infrastructures where appropriate, allowing each part to evolve independently while remaining coherent.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default About;