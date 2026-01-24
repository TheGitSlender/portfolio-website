
import { motion } from 'framer-motion';
import { ArrowUpRight, Cloud, Shield, Users, Trophy } from 'lucide-react';
import Card from '../ui/Card';
import SectionHeader from '../ui/SectionHeader';
import { experiences } from '../../data/experience';

const Experience = () => {
  // Get relevant experiences
  const clubPresident = experiences.find(e => e.id === 'ai-club-president');
  const scaleAi = experiences.find(e => e.id === 'scale-ai');

  return (
    <section id="experience" className="py-24 bg-[var(--color-bg-primary)]">
      <div className="container-main">
        <SectionHeader
          title="Polyvalence Showcase."
          subtitle="Experience & Leadership"
          className="mb-16"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">

          {/* Card 1: Recent Role (Scale AI) - Large White Card */}
          <Card className="md:col-span-2 row-span-1 border-none bg-white text-black p-8 flex flex-col justify-between group">
            <div className="flex justify-between items-start">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-2 block">Recent Role</span>
                <h3 className="text-3xl font-bold mb-2">{scaleAi?.role}</h3>
                <p className="text-xl font-medium text-gray-700">{scaleAi?.company}</p>
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-gray-500">2024 — Present</span>
            </div>

            <div className="mt-8">
              <p className="text-gray-600 mb-6 max-w-lg">
                {scaleAi?.description[0]}
              </p>
              <div className="flex flex-wrap gap-2">
                {scaleAi?.skills.slice(0, 3).map(skill => (
                  <span key={skill} className="px-3 py-1 bg-gray-100 rounded-full text-xs font-bold">{skill}</span>
                ))}
              </div>
            </div>
          </Card>

          {/* Card 2: Club President - Orange Card */}
          <Card className="md:col-span-1 row-span-2 bg-orange-600 border-none text-white p-8 flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/4 blur-3xl pointer-events-none" />

            <div>
              <div className="inline-block px-3 py-1 bg-white/20 rounded-full text-xs font-bold uppercase tracking-wider mb-6">Leadership</div>
              <h3 className="text-3xl font-bold mb-4">{clubPresident?.role}</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                {clubPresident?.description[0]}
              </p>
            </div>

            <div>
              <div className="flex -space-x-3 mb-6">
                {[1, 2, 3].map(i => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-orange-600 bg-gray-300" />
                ))}
                <div className="w-10 h-10 rounded-full border-2 border-orange-600 bg-black flex items-center justify-center text-xs font-bold">
                  +200
                </div>
              </div>
              <div className="text-sm font-bold uppercase tracking-wider">AI & Cyber Security Club</div>
            </div>
          </Card>

          {/* Card 3: Cybersecurity - Small Card */}
          <Card className="md:col-span-1 row-span-1 bg-[var(--color-bg-secondary)] border-[var(--color-border-subtle)] p-6 flex flex-col justify-between">
            <div className="w-12 h-12 rounded-xl bg-black text-white flex items-center justify-center">
              <Shield className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-xl font-bold mb-2">Cybersecurity</h4>
              <p className="text-sm text-[var(--color-text-secondary)]">Certified in ethical hacking and defense-in-depth strategies.</p>
            </div>
            <div className="flex gap-2 mt-4">
              <span className="text-[10px] font-bold uppercase px-2 py-1 bg-white border border-gray-200 rounded">SIEM</span>
              <span className="text-[10px] font-bold uppercase px-2 py-1 bg-white border border-gray-200 rounded">Pentesting</span>
            </div>
          </Card>

          {/* Card 4: Cloud Computing - Small Card */}
          <Card className="md:col-span-1 row-span-1 bg-[var(--color-bg-secondary)] border-[var(--color-border-subtle)] p-6 flex flex-col justify-between">
            <div className="w-12 h-12 rounded-xl bg-black text-white flex items-center justify-center">
              <Cloud className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-xl font-bold mb-2">Cloud Computing</h4>
              <p className="text-sm text-[var(--color-text-secondary)]">Architecting serverless and containerized solutions.</p>
            </div>
            <div className="flex gap-2 mt-4">
              <span className="text-[10px] font-bold uppercase px-2 py-1 bg-white border border-gray-200 rounded">AWS</span>
              <span className="text-[10px] font-bold uppercase px-2 py-1 bg-white border border-gray-200 rounded">Docker</span>
            </div>
          </Card>

        </div>
      </div>
    </section>
  );
};

export default Experience;
