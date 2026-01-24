/**
 * Project Detail Page
 * Match Reference: 'AI Intrusion Detection' layout.
 */

import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowUpRight, Zap, Shield, Globe } from 'lucide-react';
import { getProjectById } from '../data/projects';

const ProjectDetail = () => {
  const { id } = useParams();
  const project = getProjectById(id);

  if (!project) return <Navigate to="/404" replace />;

  const {
    title,
    fullDescription,
    category,
    technologies,
    thumbnail,
    highlights, // Using highlights as 'System Core' features
    links,
    duration,
  } = project;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-24 pb-20 bg-[var(--color-bg-primary)]"
    >
      <div className="container-main">
        {/* Back Link */}
        <Link to="/#projects" className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] mb-12">
          <ArrowLeft size={14} /> Back to Projects
        </Link>

        {/* Header Section */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-8 mb-16">
          <div className="max-w-3xl">
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tighter leading-[0.9] mb-6 text-[var(--color-text-primary)]">
              {title}.
            </h1>
            <p className="text-lg md:text-xl text-[var(--color-text-secondary)] max-w-xl leading-relaxed">
              {fullDescription.split('.')[0]}. Next-generation platform utilizing deep learning to identify threats in real-time.
            </p>
          </div>

          {links.demo && (
            <a href={links.demo} target="_blank" className="btn btn-primary rounded-full px-8 py-4 font-bold flex items-center gap-3 shrink-0 group">
              See the system live
              <span className="bg-white/20 rounded-full p-1 group-hover:rotate-45 transition-transform">
                <ArrowUpRight size={16} />
              </span>
            </a>
          )}
        </div>

        {/* Metadata Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {/* Category */}
          <div className="bento-card p-6 rounded-[1.5rem]">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-[var(--color-accent-primary)] text-[10px] font-bold uppercase tracking-widest">// CATEGORY //</span>
              <div className="flex gap-1">
                <div className="w-1 h-1 bg-[var(--color-accent-primary)] rounded-full" />
                <div className="w-1 h-1 bg-[var(--color-accent-secondary)] rounded-full" />
              </div>
            </div>
            <p className="text-xl font-bold">{category}</p>
          </div>

          {/* Stack */}
          <div className="bento-card p-6 rounded-[1.5rem]">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-[var(--color-accent-primary)] text-[10px] font-bold uppercase tracking-widest">// STACK //</span>
              <div className="flex gap-1">
                <div className="w-1 h-1 bg-[var(--color-accent-primary)] rounded-full" />
                <div className="w-1 h-1 bg-[var(--color-accent-secondary)] rounded-full" />
              </div>
            </div>
            <p className="text-xl font-bold truncate">{technologies.slice(0, 3).join(', ')}</p>
          </div>

          {/* Timeline */}
          <div className="bento-card p-6 rounded-[1.5rem]">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-[var(--color-accent-primary)] text-[10px] font-bold uppercase tracking-widest">// TIMELINE //</span>
              <div className="flex gap-1">
                <div className="w-1 h-1 bg-[var(--color-accent-primary)] rounded-full" />
                <div className="w-1 h-1 bg-[var(--color-accent-secondary)] rounded-full" />
              </div>
            </div>
            <p className="text-xl font-bold">{duration || "3 Months"}</p>
          </div>
        </div>

        {/* Hero Image (Blue Card) */}
        <div className="w-full aspect-video md:aspect-[21/9] bg-[#1a33cc] rounded-[2rem] mb-24 relative overflow-hidden flex items-center justify-center shadow-xl">
          {thumbnail ? (
            <img src={thumbnail} alt="Project Hero" className="absolute inset-0 w-full h-full object-cover opacity-80 mix-blend-overlay" />
          ) : (
            // Abstract Representation if no image
            <div className="text-center relative z-10">
              <h2 className="text-white text-4xl md:text-6xl font-bold mb-4">Network Traffic</h2>
              <div className="h-16 w-1 bg-gradient-to-b from-white to-transparent mx-auto mb-2" />
              <p className="text-blue-100/80 text-xs tracking-[0.3em] uppercase">Encrypted Data Flow // Active Protection</p>
            </div>
          )}
          {/* Grid Overlay */}
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-soft-light" />
        </div>

        {/* Content Section: "Solving modern threat vectors" */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-32">
          <div className="lg:col-span-4">
            <span className="bg-black text-white text-xs font-bold px-2 py-1 uppercase mb-4 inline-block">Challenge</span>
            <h2 className="text-4xl font-bold leading-tight">
              Solving modern<br />threat vectors.
            </h2>
          </div>
          <div className="lg:col-span-8 space-y-8">
            <p className="text-[var(--color-text-secondary)] text-lg leading-relaxed">
              Traditional rule-based systems are increasingly failing to stop polymorphic threats and zero-day exploits. We needed to build a solution that doesn't just look for known signatures, but understands normal network behavior.
            </p>
            <p className="text-[var(--color-text-secondary)] text-lg leading-relaxed">
              By leveraging unsupervised learning on massive packet-level datasets, our system can detect anomalies that deviate from baseline operations within milliseconds, triggering automated isolation protocols.
            </p>

            <div className="grid grid-cols-2 gap-8 pt-8 border-t border-gray-200">
              <div>
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1 block">PRECISION</span>
                <span className="text-3xl font-bold">99.8%</span>
              </div>
              <div>
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1 block">LATENCY</span>
                <span className="text-3xl font-bold">&lt; 14ms</span>
              </div>
            </div>
          </div>
        </div>

        {/* System Core (Highlights) */}
        <div className="mb-24">
          <span className="bg-[var(--color-text-primary)] text-[var(--color-bg-primary)] text-xs font-bold px-2 py-1 uppercase mb-6 inline-block">Features</span>
          <h2 className="text-5xl font-bold mb-12">System Core.</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {highlights.slice(0, 3).map((highlight, idx) => (
              <div key={idx} className="bento-card p-8 min-h-[280px] flex flex-col justify-between">
                <div>
                  {idx === 0 && <Shield size={28} />}
                  {idx === 1 && <Zap size={28} />}
                  {idx === 2 && <Globe size={28} />}
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3">
                    {idx === 0 ? "Neural Filtering" : idx === 1 ? "Instant Mitigation" : "Edge Scalability"}
                  </h3>
                  <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
                    {highlight}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Next Project Nav */}
        <div className="flex justify-center pb-20">
          <Link to="/#projects" className="bg-gray-100 hover:bg-gray-200 transition-colors px-8 py-3 rounded-full text-xs font-bold uppercase tracking-widest flex items-center gap-2">
            Next Project <ArrowUpRight size={14} />
          </Link>
        </div>

      </div>
    </motion.div>
  );
};

export default ProjectDetail;
