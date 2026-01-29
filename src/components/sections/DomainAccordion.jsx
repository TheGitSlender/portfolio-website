/**
 * DomainAccordion
 *
 * An expandable accordion item for skill domains.
 * Shows domain title, icon, and expands to reveal architecture and tools.
 *
 * @param {object} domain - Domain data with title, icon, architecture, tools
 * @param {number} index - Domain index (for numbering)
 * @param {boolean} isOpen - Whether accordion is expanded
 * @param {function} toggle - Function to toggle open state
 */

import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import * as LucideIcons from 'lucide-react';
import { accordionContent, durations } from '../../config/animations';

const DomainAccordion = ({ domain, index, isOpen, toggle }) => {
  const Icon = LucideIcons[domain.icon] || LucideIcons.Box;

  return (
    <div
      className={`
        mb-4 transition-all duration-500 rounded-[2rem] overflow-hidden
        ${isOpen ? 'bg-[var(--color-surface-card)] shadow-2xl' : 'bg-[var(--color-surface-card)] shadow-sm hover:shadow-md'}
      `}
    >
      {/* Accordion Header */}
      <button
        onClick={toggle}
        className="w-full text-left p-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-6"
      >
        <div className="flex flex-col gap-2">
          <span className="text-[var(--color-accent-primary)] text-[10px] font-black uppercase tracking-[0.2em]">
            DOMAIN 0{index + 1}
          </span>
          <h3 className="text-3xl md:text-4xl font-black tracking-tighter text-[var(--color-text-primary)] uppercase">
            {domain.title}
          </h3>
        </div>

        <div className="flex items-center gap-6 self-end md:self-auto">
          <div
            className={`
              p-4 rounded-2xl transition-all duration-500
              ${isOpen
                ? 'bg-[var(--color-accent-primary)] text-white shadow-[0_10px_20px_rgba(255,55,0,0.3)]'
                : 'text-[var(--color-accent-primary)] bg-[var(--color-surface-card)] shadow-sm'
              }
            `}
          >
            <Icon size={28} strokeWidth={2} />
          </div>
          <motion.div
            animate={{ rotate: isOpen ? 90 : 0 }}
            transition={{ duration: durations.fast }}
            className={`transition-colors duration-500 ${isOpen ? 'text-[var(--color-text-primary)]' : 'text-[var(--color-text-muted)]'}`}
          >
            <ChevronRight size={24} />
          </motion.div>
        </div>
      </button>

      {/* Accordion Content */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={accordionContent.initial}
            animate={accordionContent.animate}
            exit={accordionContent.exit}
            transition={accordionContent.transition}
          >
            <div className="px-8 pb-12 pt-4 grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Core Architecture */}
              <div>
                <h4 className="text-[var(--color-accent-primary)] text-sm font-black uppercase tracking-[0.1em] mb-8">
                  Core Architecture
                </h4>
                <ul className="space-y-4">
                  {domain.architecture.map((item, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent-primary)]" />
                      <span className="text-xl font-bold text-[var(--color-text-primary)] tracking-tight">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Primary Tools */}
              <div>
                <h4 className="text-[var(--color-accent-primary)] text-sm font-black uppercase tracking-[0.1em] mb-8">
                  Primary Tools
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {domain.tools.map((tool, i) => {
                    const ToolIcon = LucideIcons[tool.icon] || LucideIcons.Database;
                    return (
                      <div
                        key={i}
                        className="flex items-center gap-3 p-4 bg-[var(--color-surface-muted)] border border-[var(--color-border-default)] rounded-2xl shadow-sm hover:border-[var(--color-accent-primary)]/20 transition-all hover:bg-[var(--color-surface-card)]"
                      >
                        <div className="text-[var(--color-accent-primary)]">
                          <ToolIcon size={18} strokeWidth={2.5} />
                        </div>
                        <span className="text-sm font-bold text-[var(--color-text-primary)]">
                          {tool.name}
                        </span>
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

export default DomainAccordion;
