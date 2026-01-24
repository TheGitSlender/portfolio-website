
import { motion } from 'framer-motion';
import { Database, Shield, Cloud, Lock } from 'lucide-react';
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
          {/* Card 1: Model Architecture */}
          <Card className="bg-white text-black border-none p-8 group">
            <div className="w-12 h-12 rounded-xl bg-[var(--color-accent-primary)]/10 text-[var(--color-accent-primary)] flex items-center justify-center mb-6">
              <Database className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Model Architecture</h3>
            <p className="text-gray-600 mb-6 font-medium">
              Designing efficient transformer models and CNNs tailored for specific industry datasets.
            </p>
            <div className="flex flex-wrap gap-2">
              {['PyTorch', 'Transformers', 'Lightning AI'].map(tech => (
                <span key={tech} className="px-3 py-1 bg-gray-100 rounded-lg text-sm font-bold text-gray-700">{tech}</span>
              ))}
            </div>
          </Card>

          {/* Card 2: Cyber Defense */}
          <Card className="bg-white text-black border-none p-8 group shadow-xl">
            <div className="w-12 h-12 rounded-xl bg-[var(--color-accent-primary)]/10 text-[var(--color-accent-primary)] flex items-center justify-center mb-6">
              <Lock className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Cyber Defense</h3>
            <p className="text-gray-600 mb-6 font-medium">
              Implementing robust security protocols and zero-trust architectures for distributed systems.
            </p>
            <div className="flex flex-wrap gap-2">
              {['Zero-Trust', 'Wazuh', 'Forensics'].map(tech => (
                <span key={tech} className="px-3 py-1 bg-gray-100 rounded-lg text-sm font-bold text-gray-700">{tech}</span>
              ))}
            </div>
          </Card>

          {/* Card 3: MLOps & Cloud */}
          <Card className="bg-white text-black border-none p-8 group">
            <div className="w-12 h-12 rounded-xl bg-[var(--color-accent-primary)]/10 text-[var(--color-accent-primary)] flex items-center justify-center mb-6">
              <Cloud className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold mb-4">MLOps & Cloud</h3>
            <p className="text-gray-600 mb-6 font-medium">
              Scalable deployment using Kubernetes, AWS, and GCP with automated CI/CD pipelines.
            </p>
            <div className="flex flex-wrap gap-2">
              {['Docker', 'AWS', 'CI/CD'].map(tech => (
                <span key={tech} className="px-3 py-1 bg-gray-100 rounded-lg text-sm font-bold text-gray-700">{tech}</span>
              ))}
            </div>
          </Card>

          {/* Card 4: Red Teaming AI */}
          <Card className="bg-white text-black border-none p-8 group">
            <div className="w-12 h-12 rounded-xl bg-rose-100 text-rose-600 flex items-center justify-center mb-6">
              <Shield className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Red Teaming AI</h3>
            <p className="text-gray-600 mb-6 font-medium">
              Evaluating LLM vulnerabilities, including prompt injection and training data extraction.
            </p>
            <div className="flex flex-wrap gap-2">
              {['Adversarial AI', 'Prompt Injection', 'Privacy'].map(tech => (
                <span key={tech} className="px-3 py-1 bg-gray-100 rounded-lg text-sm font-bold text-gray-700">{tech}</span>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;
