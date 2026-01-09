import React from 'react';
import PageHeader from './PageHeader';
import Button from './Button';

const About: React.FC = () => {
  return (
    <div className="pt-20 min-h-screen bg-regen-cream">
      <PageHeader
        title="Why BeRegen Exists"
        subtitle="We build tools, knowledge and infrastructure that make regenerative action understandable, applicable and verifiable — for anyone, anywhere."
      />
      <div className="container mx-auto px-6 py-16 md:py-24">
        <div className="max-w-4xl mx-auto">

          {/* Section 1 — Our Purpose */}
          <section className="mb-16 md:mb-24">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-regen-dark mb-8">Our Purpose</h2>
            <div className="space-y-6 text-lg md:text-xl text-regen-stone leading-relaxed font-light">
              <p>Regeneration is not an idea. It is a practice.</p>
              <p>It happens in homes, farms, communities, organizations, research groups and local movements.</p>
              <p>But despite its presence, regenerative action remains invisible, uncoordinated and difficult to measure.</p>
              <p className="font-medium text-regen-dark">BeRegen was created to change this.</p>
              <p>We exist to give people, projects and companies the tools they need to learn, act and demonstrate real impact — with clarity, accountability and accessibility.</p>
              <p>From personal habits to territorial projects, from individuals to enterprises, BeRegen supports the entire spectrum of regenerative action through technology, education and collaboration.</p>
              <p className="font-medium text-regen-dark italic">Our purpose is simple: make regeneration part of everyday life, and make real impact visible and verifiable.</p>
            </div>
          </section>

          {/* Section 2 — What We Are Building */}
          <section className="mb-16 md:mb-24">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-regen-dark mb-8">What We Are Building</h2>
            <div className="space-y-6 text-lg md:text-xl text-regen-stone leading-relaxed font-light">
              <p>BeRegen is structured as a growing ecosystem of tools and layers that work together:</p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 mt-2.5 bg-regen-accent rounded-full shrink-0"></span>
                  <span><strong>RegenHub</strong> — A reputation and impact layer that enables identity, validation and verifiable credentials — including offline participation and enterprise support through the LEAP module. <Button href="/regenimpacthub" variant="link" className="p-0 h-auto font-normal underline">Learn more</Button></span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 mt-2.5 bg-regen-accent rounded-full shrink-0"></span>
                  <span><strong>RegenApp</strong> — A practice-oriented app designed to help users build regenerative habits and follow structured journeys. <Button href="/regenapp" variant="link" className="p-0 h-auto font-normal underline">Learn more</Button></span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 mt-2.5 bg-regen-accent rounded-full shrink-0"></span>
                  <span><strong>RegenFlix</strong> — A digital learning space for short courses, guides and practical content created directly from field experience. <Button href="/regenflix" variant="link" className="p-0 h-auto font-normal underline">Learn more</Button></span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 mt-2.5 bg-regen-accent rounded-full shrink-0"></span>
                  <span><strong>RegenFund</strong> — A future mechanism for incentives, collaboration and reputation-driven support across the ecosystem. <Button href="/regenfund" variant="link" className="p-0 h-auto font-normal underline">Learn more</Button></span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 mt-2.5 bg-regen-accent rounded-full shrink-0"></span>
                  <span><strong>Fieldwork & Documentation</strong> — Methods and structures that turn real regenerative work into accessible knowledge, shared openly and through Patreon. <Button href="/fieldwork" variant="link" className="p-0 h-auto font-normal underline">Learn more</Button></span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 mt-2.5 bg-regen-accent rounded-full shrink-0"></span>
                  <span><strong>BeRegenStore</strong> — Digital and physical tools that complement learning and enable supporters to contribute. <Button href="/store" variant="link" className="p-0 h-auto font-normal underline">Learn more</Button></span>
                </li>
              </ul>
              <p className="font-medium text-regen-dark italic">Together, these layers form a coherent system designed to support learning, action, validation and long-term accountability.</p>
            </div>
          </section>

          {/* Section 3 — How We Work */}
          <section className="mb-16 md:mb-24">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-regen-dark mb-8">How We Work</h2>
            <div className="space-y-6 text-lg md:text-xl text-regen-stone leading-relaxed font-light">
              <p>BeRegen blends technology, education and real-world practice.</p>
              <p>Our work follows three guiding principles:</p>
              <ol className="space-y-6 list-decimal list-inside">
                <li className="pl-4">
                  <strong className="text-regen-dark">Simplicity and Accessibility</strong><br/>
                  Regeneration must be easy to understand and apply. Everything we develop follows this principle.
                </li>
                <li className="pl-4">
                  <strong className="text-regen-dark">Verifiable Impact</strong><br/>
                  Real change requires evidence. Our tools focus on reputation, validation and transparent documentation.
                </li>
                <li className="pl-4">
                  <strong className="text-regen-dark">Collaboration Over Competition</strong><br/>
                  We partner with regenerative projects, stewards, companies and global networks to create shared infrastructure — not isolated solutions.
                </li>
              </ol>
            </div>
          </section>

          {/* Section 4 — Who We Are */}
          <section className="mb-16 md:mb-24">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-regen-dark mb-8">Who We Are</h2>
            <div className="space-y-6 text-lg md:text-xl text-regen-stone leading-relaxed font-light">
              <p>BeRegen is developed by a couple dedicated to researching, designing and building regenerative systems across education, technology and community practice.</p>
              <p>We combine technical development, field documentation, educational design and ecosystem coordination in a single integrated effort.</p>
              <p>This core team leads the entire structure of BeRegen, while the ecosystem grows through the support of partners, contributors and early community members.</p>
              <div className="pt-6">
                <Button href="/team" variant="accent">Meet Us</Button>
              </div>
            </div>
          </section>

          {/* Section 5 — Our Vision */}
          <section className="mb-16 md:mb-24">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-regen-dark mb-8">Our Vision</h2>
            <div className="space-y-6 text-lg md:text-xl text-regen-stone leading-relaxed font-light">
              <p>A world where:</p>
              <ul className="space-y-3 list-disc list-inside pl-6">
                <li>people understand how to regenerate their lives, communities and environments</li>
                <li>projects and organizations can verify and demonstrate real impact</li>
                <li>regenerative practices are recognized, rewarded and widely accessible</li>
                <li>collaboration becomes the default way of working</li>
              </ul>
              <p className="font-medium text-regen-dark italic pt-4">BeRegen is not a platform or a collection of tools. It is an infrastructure for a regenerative way of living, working and creating value.</p>
            </div>
          </section>

          {/* Section 6 — Join the Journey */}
          <section className="mb-16 md:mb-24">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-regen-dark mb-8">Join the Journey</h2>
            <div className="space-y-6 text-lg md:text-xl text-regen-stone leading-relaxed font-light">
              <p>Whether you're an individual, a project, an enterprise or a researcher, there is a place for you in this ecosystem.</p>
              <p>Supporters help build the infrastructure. Validators help build trust. Partners help expand the network. Practitioners help evolve the methods. And everyone contributes to a more regenerative world.</p>
              <div className="flex flex-col sm:flex-row gap-4 pt-6">
                <Button href="/ecosystem" variant="primary">Explore Ecosystem</Button>
                <Button href="/contact" variant="outline">Contact Us</Button>
                <Button href="/support" variant="ghost">Support BeRegen</Button>
              </div>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
};

export default About;