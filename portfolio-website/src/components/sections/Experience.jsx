
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
          subtitle="Experience"
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

          {/* Card 2: Club President - Redesigned Dark Card */}
          <Card className="md:col-span-1 row-span-2 !bg-[#212121] border border-white/5 text-white p-6 flex flex-col gap-6 relative overflow-hidden group">

            {/* Top Section - Glass/Light Dark */}
            <div className="bg-white/5 rounded-2xl p-5 border border-white/5 relative z-10 backdrop-blur-sm">
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-lg bg-[#F0F0F0] flex items-center justify-center">
                  <Users className="w-5 h-5 text-[#121212]" />
                </div>
                <span className="px-3 py-1 rounded-full border border-white/10 text-[10px] font-bold uppercase tracking-wider text-gray-400 bg-white/5">
                  Sep 2023 – Jun 2025
                </span>
              </div>

              <h3 className="text-2xl font-bold mb-1">Club President</h3>
              <p className="text-gray-400 text-sm font-medium">AI & Cyber Security Club</p>
            </div>

            {/* List Content */}
            <div className="flex flex-col gap-4 relative z-10">
              <ul className="space-y-4">
                <li className="flex gap-3 items-start">
                  <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[var(--color-accent-primary)] shrink-0" />
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Lead Python and Machine Learning workshops for <span className="text-white font-bold">200+ technology enthusiasts</span>, fostering technical skill development.
                  </p>
                </li>
                <li className="flex gap-3 items-start">
                  <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gray-600 shrink-0" />
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Developed proof-of-concept for <span className="text-white font-bold">AI-powered autonomous drone system</span> for industrial inspection applications.
                  </p>
                </li>
                <li className="flex gap-3 items-start">
                  <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gray-600 shrink-0" />
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Manage cross-functional teams developing projects in classical ML, computer vision, and Python development.
                  </p>
                </li>
              </ul>
            </div>

            {/* Bottom/Decoration */}
            <div className="mt-auto pt-4 border-t border-white/5 flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-widest text-[#0099ff] underline decoration-[#0099ff]/30">
                Impact
              </span>
              <div className="flex -space-x-2">
                <div className="w-6 h-6 rounded-full bg-gray-700 border border-[#212121]" />
                <div className="w-6 h-6 rounded-full bg-gray-600 border border-[#212121]" />
                <div className="w-6 h-6 rounded-full bg-[var(--color-accent-primary)] border border-[#212121] flex items-center justify-center text-[8px] font-bold text-black">
                  +200
                </div>
              </div>
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
