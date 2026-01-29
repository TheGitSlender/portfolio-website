/**
 * Skills Section
 *
 * Displays skill domains in an accordion format.
 * Each domain expands to show architecture and tools.
 */

import { useState } from 'react';
import DomainAccordion from './DomainAccordion';
import SectionBadge from '../ui/SectionBadge';
import AnimatedHeading from '../ui/AnimatedHeading';
import { skillDomains } from '../../data/skills';

const Skills = () => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="skills" className="py-24 bg-[var(--color-bg-primary)]">
      <div className="container-main">
        {/* Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-16 gap-8">
          <div className="max-w-3xl">
            <SectionBadge className="mb-6">
              // SKILLSET STACKS //
            </SectionBadge>
            <AnimatedHeading>
              Technical Depth.
            </AnimatedHeading>
          </div>
          <p className="text-[var(--color-text-secondary)] max-w-sm text-sm md:text-base font-medium leading-relaxed italic lg:text-right">
            Specialized expertise across the modern engineering stack. Vertically integrated for maximum efficiency.
          </p>
        </div>

        {/* Domain Accordions */}
        <div className="max-w-6xl mx-auto">
          {skillDomains.map((domain, index) => (
            <DomainAccordion
              key={domain.id}
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
