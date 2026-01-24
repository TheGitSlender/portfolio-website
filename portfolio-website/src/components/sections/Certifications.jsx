/**
 * Certifications Section
 * Student.AI Light Theme
 */

import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { certifications } from '../../data/certifications';

const Certifications = () => {
  return (
    <section id="certifications" className="py-24 bg-white">
      <div className="container-main">
        {/* Header (Optional if needed, but keeping it minimal) */}
        <div className="mb-16">
          <h2 className="text-4xl font-black tracking-tighter mb-4">Credentials.</h2>
          <div className="h-1 w-12 bg-[var(--color-accent-orange)]" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert) => (
            <div key={cert.id} className="group relative p-8 rounded-[2rem] border border-gray-200 hover:border-black transition-colors bg-white">
              <div className="flex justify-between items-start mb-6">
                <span className={`text-[10px] font-bold uppercase tracking-widest px-2 py-1 rounded ${cert.type === 'award' ? 'bg-orange-100 text-orange-600' : 'bg-gray-100 text-gray-600'}`}>
                  {cert.type}
                </span>
                {cert.status === 'in-progress' && (
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[var(--color-accent-orange)]">In Progress</span>
                )}
              </div>

              <h3 className="text-xl font-bold mb-2 group-hover:text-[var(--color-accent-orange)] transition-colors">{cert.title}</h3>
              <p className="text-sm text-gray-500 font-medium mb-4">{cert.issuer} • {cert.date}</p>
              <p className="text-sm text-gray-500 mb-6">{cert.description}</p>

              {cert.credentialUrl && (
                <a href={cert.credentialUrl} target="_blank" className="text-xs font-bold uppercase tracking-widest flex items-center gap-1 hover:gap-2 transition-all">
                  View <ExternalLink size={12} />
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
