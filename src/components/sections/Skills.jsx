
import { motion } from 'framer-motion';
import { Database, Shield, Cloud, Code, Globe, Wrench } from 'lucide-react';
import Card from '../ui/Card';
import SectionHeader from '../ui/SectionHeader';
import { skillCategories } from '../../data/skills';

const Skills = () => {
  return (
    <section id="skills" className="py-24 bg-[var(--color-bg-primary)]">
      <div className="container-main">
        <SectionHeader
          title="What I Do."
          subtitle="Expertise"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories.map((category, index) => {
            // Map common icons to Lucide components if they exist
            const Icon = {
              Brain: Database,
              Code: Code, // Will need to import Code if not there
              Sparkles: Cloud, // Fallbacks
              Wrench: Database,
              Shield: Shield,
              Globe: Database
            }[category.icon] || Database;

            return (
              <Card key={category.name} className="bg-white text-black border-none p-8 group">
                <div className="w-12 h-12 rounded-xl bg-[var(--color-accent-primary)]/10 text-[var(--color-accent-primary)] flex items-center justify-center mb-6">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold mb-4">{category.name}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map(skill => (
                    <span
                      key={skill.name}
                      className="px-3 py-1 bg-gray-100 rounded-lg text-sm font-bold text-gray-700"
                      title={`Proficiency: ${skill.proficiency}`}
                    >
                      {skill.name}
                    </span>
                  ))}
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
