import { useParams, Link, Navigate, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowUpRight, Zap, Shield, Globe } from 'lucide-react';
import { getProjectById, getNextProjectId } from '../data/projects';

// Project detail images
import wazuhDetail from '../assets/pictures/llm_project_details.png';
import segmentatorDetail from '../assets/pictures/3d_CV_projectdetails.png';
import ctfDetail from '../assets/pictures/ctf_project_details.jpg';

const detailImages = {
  'wazuh-llm': wazuhDetail,
  '3d-segmentator': segmentatorDetail,
  'ctf-achievements': ctfDetail,
};

const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = getProjectById(id);

  // Ensure scroll to top on mount or id change
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    // Backup for some browsers or delayed rendering
    setTimeout(() => {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    }, 10);
  }, [id]);

  if (!project) return <Navigate to="/404" replace />;


  const {
    title,
    fullDescription,
    architectureDescription,
    category,
    technologies,
    thumbnail,
    highlights, // Using highlights as 'System Core' features
    techStack,
    links,
    duration,
  } = project;

  const nextProjectId = getNextProjectId(id);

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
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tighter leading-[0.9] mb-6 text-[var(--color-text-primary)]">
              {title}.
            </h1>
            <p className="text-base md:text-lg text-[var(--color-text-secondary)] max-w-xl leading-relaxed">
              {fullDescription}
            </p>
          </div>

          {links?.demo && (
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

        {/* Hero Image */}
        <div className="w-full aspect-video md:aspect-[21/9] bg-white rounded-[2rem] mb-24 relative overflow-hidden flex items-center justify-center shadow-xl border border-gray-100">
          {detailImages[id] ? (
            <img
              src={detailImages[id]}
              alt={title}
              className={`absolute inset-0 w-full h-full object-cover ${id === 'wazuh-llm' ? 'object-[center_70%]' : ''} ${id === 'ctf-achievements' ? 'object-[center_30%]' : ''}`}
            />
          ) : (
            <div className="text-center relative z-10">
              <h2 className="text-[var(--color-text-primary)] text-4xl md:text-6xl font-bold mb-4">{title}</h2>
              <div className="h-16 w-1 bg-gradient-to-b from-gray-300 to-transparent mx-auto mb-2" />
              <p className="text-gray-500 text-xs tracking-[0.3em] uppercase">Advanced Technology // Real-world Impact</p>
            </div>
          )}
        </div>

        {/* Content Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-32">
          <div className="lg:col-span-4">
            <span className="bg-black text-white text-xs font-bold px-2 py-1 uppercase mb-4 inline-block">Architecture</span>
            <h2 className="text-3xl font-bold leading-tight">
              Next-gen<br />technical depth.
            </h2>
          </div>
          <div className="lg:col-span-8 space-y-8">
            <p className="text-[var(--color-text-secondary)] text-base leading-relaxed">
              {architectureDescription || fullDescription}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8 border-t border-gray-200">
              {techStack && techStack.map((item, idx) => (
                <div key={idx}>
                  <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1 block">{item.label}</span>
                  <span className="text-xl font-bold">{item.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* System Core (Highlights) */}
        <div className="mb-24">
          <span className="bg-[var(--color-text-primary)] text-[var(--color-bg-primary)] text-xs font-bold px-2 py-1 uppercase mb-6 inline-block">Features</span>
          <h2 className="text-4xl font-bold mb-12">Core Highlights.</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {highlights.map((highlight, idx) => (
              <div key={idx} className="bento-card p-8 min-h-[180px] flex flex-col justify-between">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-10 h-10 rounded-full bg-[var(--color-accent-primary)]/10 flex items-center justify-center text-[var(--color-accent-primary)]">
                    {idx % 3 === 0 && <Shield size={20} />}
                    {idx % 3 === 1 && <Zap size={20} />}
                    {idx % 3 === 2 && <Globe size={20} />}
                  </div>
                  <h3 className="text-xl font-bold">{highlight.title}</h3>
                </div>
                <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
                  {highlight.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Next Project Nav */}
        <div className="flex justify-center pb-20">
          <Link to={`/project/${nextProjectId}`} className="bg-gray-100 hover:bg-gray-200 transition-colors px-12 py-5 rounded-full text-sm font-bold uppercase tracking-widest flex items-center gap-3">
            Next Project <ArrowUpRight size={18} />
          </Link>
        </div>

      </div>
    </motion.div>
  );
};

export default ProjectDetail;

