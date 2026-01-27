import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Brain, Cloud, Shield, ChevronRight, Cpu, Network, Lock, Database, Code, Globe, Zap, Box, Terminal } from 'lucide-react';

const DomainAccordion = ({ domain, index, isOpen, toggle }) => {
  const Icon = domain.icon;

  return (
    <div className={`mb-4 transition-all duration-500 rounded-[2rem] overflow-hidden ${isOpen ? 'bg-white shadow-2xl' : 'bg-white shadow-sm hover:shadow-md'
      }`}>
      <button
        onClick={toggle}
        className="w-full text-left p-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-6"
      >
        <div className="flex flex-col gap-2">
          <span className="text-[#ff3700] text-[10px] font-black uppercase tracking-[0.2em]">
            DOMAIN 0{index + 1}
          </span>
          <h3 className="text-3xl md:text-4xl font-black tracking-tighter text-black uppercase">
            {domain.title}
          </h3>
        </div>

        <div className="flex items-center gap-6 self-end md:self-auto">
          <div className={`p-4 rounded-2xl transition-all duration-500 ${isOpen ? 'bg-[#ff3700] text-white shadow-[0_10px_20px_rgba(255,55,0,0.3)]' : 'text-[#ff3700] bg-white shadow-sm'
            }`}>
            <Icon size={28} strokeWidth={2} />
          </div>
          <motion.div
            animate={{ rotate: isOpen ? 90 : 0 }}
            className={`transition-colors duration-500 ${isOpen ? 'text-black' : 'text-gray-300'}`}
          >
            <ChevronRight size={24} />
          </motion.div>
        </div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.04, 0.62, 0.23, 0.98] }}
          >
            <div className="px-8 pb-12 pt-4 grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Core Architecture */}
              <div>
                <h4 className="text-[#ff3700] text-sm font-black uppercase tracking-[0.1em] mb-8">
                  Core Architecture
                </h4>
                <ul className="space-y-4">
                  {domain.architecture.map((item, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#ff3700]" />
                      <span className="text-xl font-bold text-black tracking-tight">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Primary Tools */}
              <div>
                <h4 className="text-[#ff3700] text-sm font-black uppercase tracking-[0.1em] mb-8">
                  Primary Tools
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {domain.tools.map((tool, i) => {
                    const ToolIcon = tool.icon || Database;
                    return (
                      <div key={i} className="flex items-center gap-3 p-4 bg-gray-50/50 border border-gray-100 rounded-2xl shadow-sm hover:border-[#ff3700]/20 transition-all hover:bg-white">
                        <div className="text-[#ff3700]">
                          <ToolIcon size={18} strokeWidth={2.5} />
                        </div>
                        <span className="text-sm font-bold text-gray-800">{tool.name}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const Skills = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const domains = [
    {
      title: "Artificial Intelligence",
      icon: Brain,
      architecture: [
        "Transformer Models & LLMs",
        "Computer Vision Pipelines",
        "Natural Language Processing",
        "Reinforcement Learning"
      ],
      tools: [
        { name: "PyTorch", icon: Cpu },
        { name: "TensorFlow", icon: Zap },
        { name: "HuggingFace", icon: Globe },
        { name: "LangChain", icon: Code },
        { name: "Lightning AI", icon: Zap },
        { name: "Pinecone", icon: Database }
      ]
    },
    {
      title: "Cloud Architectures",
      icon: Cloud,
      architecture: [
        "Container Orchestration",
        "Distributed Systems",
        "Multi-Cloud Strategy",
        "Serverless Computing"
      ],
      tools: [
        { name: "AWS", icon: Cloud },
        { name: "Docker", icon: Box },
        { name: "GIT CI/CD", icon: Code },
        { name: "n8n", icon: Zap },
        { name: "GCP", icon: Cloud },
        { name: "MongoDB/ OracleDB", icon: Database }
      ]
    },
    {
      title: "Cybersecurity",
      icon: Shield,
      architecture: [
        "OS & Memory Forensics",
        "Network Traffic Analysis",
        "Penetration Testing",
        "Threat Modeling"
      ],
      tools: [
        { name: "Fortinet Security", icon: Shield },
        { name: "Volatility", icon: Cpu },
        { name: "Wazuh (Open Source SIEM)", icon: Terminal },
        { name: "Ghidra", icon: Code },
        { name: "Burp Suite", icon: Lock },
        { name: "Wireshark", icon: Network }
      ]
    }
  ];

  return (
    <section id="skills" className="py-24 bg-[var(--color-bg-primary)]">
      <div className="container-main">
        {/* Technical Depth Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-16 gap-8">
          <div className="max-w-3xl">
            <span className="inline-block bg-black text-white text-[10px] font-black uppercase tracking-[0.2em] px-3 py-1 mb-6 rounded-sm">
              // SKILLSET STACKS //
            </span>
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter leading-[0.9] text-black">
              Technical Depth.
            </h2>
          </div>
          <p className="text-gray-500 max-w-sm text-sm md:text-base font-medium leading-relaxed italic lg:text-right">
            Specialized expertise across the modern engineering stack. Vertically integrated for maximum efficiency.
          </p>
        </div>

        {/* Accordions */}
        <div className="max-w-6xl mx-auto">
          {domains.map((domain, index) => (
            <DomainAccordion
              key={index}
              domain={domain}
              index={index}
              isOpen={openIndex === index}
              toggle={() => setOpenIndex(openIndex === index ? -1 : index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
