/**
 * Skills Section
 *
 * Domain tabs with a shared sliding pill. Switching domains swaps the panel:
 * architecture lines rise from masks, tool chips pop in with a stagger.
 * Languages (programming and spoken) sit underneath.
 *
 * The first panel reveals when the section is first seen; after that every
 * tab switch animates straight away. (Gating each panel on its own
 * whileInView left a panel stuck hidden if it mounted mid-scroll.)
 */

import { useRef, useState } from 'react';
import { AnimatePresence, motion, useInView } from 'framer-motion';
import SectionIntro from '../ui/SectionIntro';
import Reveal from '../motion/Reveal';
import { getIcon } from '../ui/icons';
import { skillDomains, skillCategories } from '../../data/skills';
import { ease, maskUp, popIn, springs, stagger, tf } from '../../config/animations';

const programming = skillCategories.find((c) => c.name === 'Programming Languages');
const spoken = skillCategories.find((c) => c.name === 'Languages');

const panelVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.05 } },
  exit: { opacity: 0, transform: tf('translateY(-16px)'), transition: { duration: 0.25, ease: ease.smooth } },
};

const DomainPanel = ({ domain, play }) => (
  <motion.div
    key={domain.id}
    role="tabpanel"
    id={`panel-${domain.id}`}
    aria-labelledby={`tab-${domain.id}`}
    className="mt-12 grid gap-12 lg:grid-cols-12 lg:gap-10"
    variants={panelVariants}
    initial="hidden"
    animate={play ? 'visible' : 'hidden'}
    exit="exit"
  >
    <div className="lg:col-span-7">
      <p className="eyebrow mb-4 text-fg-subtle">Core architecture</p>
      <motion.ol variants={stagger(0.06)}>
        {domain.architecture.map((item, i) => (
          <li key={item} className="overflow-hidden border-b border-line">
            <motion.div variants={maskUp} className="flex items-baseline gap-5 py-4">
              <span className="font-mono text-xs text-accent">{String(i + 1).padStart(2, '0')}</span>
              <span className="text-[clamp(1.35rem,2.4vw,2.1rem)] font-medium tracking-[-0.03em]">
                {item}
              </span>
            </motion.div>
          </li>
        ))}
      </motion.ol>
    </div>

    <div className="lg:col-span-5">
      <p className="eyebrow mb-4 text-fg-subtle">Primary tools</p>
      <motion.ul className="flex flex-wrap gap-2.5" variants={stagger(0.035, 0.15)}>
        {domain.tools.map((tool) => {
          const Icon = getIcon(tool.icon);
          return (
            <motion.li
              key={tool.name}
              variants={popIn}
              className="flex items-center gap-2 rounded-full border border-line-strong bg-surface px-4 py-2.5 text-sm font-medium transition-colors duration-300 hover:border-accent hover:bg-accent hover:text-white"
            >
              <Icon size={15} strokeWidth={2} className="opacity-70" />
              {tool.name}
            </motion.li>
          );
        })}
      </motion.ul>
    </div>
  </motion.div>
);

const Skills = () => {
  const [activeId, setActiveId] = useState(skillDomains[0].id);
  const sectionRef = useRef(null);
  const seen = useInView(sectionRef, { once: true, amount: 0.15 });
  const active = skillDomains.find((domain) => domain.id === activeId);

  // WAI-ARIA tabs: arrows/Home/End move selection and focus together
  const handleTabKeys = (event) => {
    const index = skillDomains.findIndex((domain) => domain.id === activeId);
    const last = skillDomains.length - 1;
    const next = {
      ArrowRight: index === last ? 0 : index + 1,
      ArrowLeft: index === 0 ? last : index - 1,
      Home: 0,
      End: last,
    }[event.key];
    if (next === undefined) return;
    event.preventDefault();
    setActiveId(skillDomains[next].id);
    document.getElementById(`tab-${skillDomains[next].id}`)?.focus();
  };

  return (
    <section ref={sectionRef} id="skills" className="relative py-[clamp(5rem,10vw,9rem)]">
      <div className="container-main">
        <SectionIntro
          index="05"
          label="Stack"
          title="Technical *depth*"
          aside="Three domains I work across, and the tools I reach for in each."
        />

        <Reveal className="mt-12">
          <div
            role="tablist"
            aria-label="Skill domains"
            onKeyDown={handleTabKeys}
            className="no-scrollbar inline-flex max-w-full gap-1 overflow-x-auto rounded-full border border-line bg-surface/70 p-1.5 backdrop-blur"
          >
            {skillDomains.map((domain) => {
              const isActive = domain.id === activeId;
              const Icon = getIcon(domain.icon);
              return (
                <button
                  key={domain.id}
                  id={`tab-${domain.id}`}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  aria-controls={isActive ? `panel-${domain.id}` : undefined}
                  tabIndex={isActive ? 0 : -1}
                  onClick={() => setActiveId(domain.id)}
                  className="relative flex shrink-0 items-center gap-2 rounded-full px-4 py-2.5 text-sm font-medium sm:px-5"
                >
                  {isActive && (
                    <motion.span
                      layoutId="skills-pill"
                      className="absolute inset-0 rounded-full bg-fg"
                      transition={springs.snappy}
                    />
                  )}
                  <span
                    className={`relative flex items-center gap-2 transition-colors duration-300 ${
                      isActive ? 'text-bg' : 'text-fg-muted hover:text-fg'
                    }`}
                  >
                    <Icon size={15} className="hidden sm:block" />
                    <span className="sm:hidden">{domain.shortTitle ?? domain.title}</span>
                    <span className="hidden sm:inline">{domain.title}</span>
                  </span>
                </button>
              );
            })}
          </div>
        </Reveal>

        <AnimatePresence mode="wait">
          <DomainPanel key={active.id} domain={active} play={seen} />
        </AnimatePresence>

        {/* Languages */}
        <div className="mt-20 grid gap-10 border-t border-line pt-10 md:grid-cols-2">
          {[programming, spoken].filter(Boolean).map((category) => (
            <Reveal key={category.name}>
              <p className="eyebrow mb-4 text-fg-subtle">{category.name}</p>
              <ul className="flex flex-wrap gap-x-6 gap-y-2">
                {category.skills.map((skill) => (
                  <li key={skill.name} className="text-2xl font-medium tracking-[-0.03em]">
                    {skill.name}
                    {category === spoken && (
                      <span className="ml-2 font-serif text-lg italic text-fg-subtle">
                        {skill.proficiency}
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
