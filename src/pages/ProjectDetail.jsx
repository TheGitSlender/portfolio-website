/**
 * ProjectDetail Page
 *
 * Long-form case study for one project: Back button, kinetic title, meta
 * strip, a cover that wipes in uncropped, overview, metrics, architecture,
 * numbered highlights, impact quote, and a "keep exploring" carousel of the
 * other projects with a second Back button.
 */

import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowUpRight, Github, Trophy } from 'lucide-react';
import PageTransition from '../components/motion/PageTransition';
import SplitText from '../components/motion/SplitText';
import RollText from '../components/motion/RollText';
import Reveal from '../components/motion/Reveal';
import Counter from '../components/motion/Counter';
import ImageReveal from '../components/motion/ImageReveal';
import ProjectCover from '../components/projects/ProjectCover';
import ProjectCarousel from '../components/projects/ProjectCarousel';
import { Eyebrow } from '../components/ui/SectionIntro';
import { getProjectById, getProjectTitleParts, getProjectNumber, projects } from '../data/projects';
import { getAchievementForProject } from '../data/achievements';
import { getProjectDetailMedia } from '../assets/media';
import { fadeUp, lineDraw, stagger, viewportOnce } from '../config/animations';

const toParagraphs = (text) =>
  text
    .split(/\n+/)
    .map((paragraph) => paragraph.trim())
    .filter(Boolean);

const DetailCover = ({ project }) => {
  const media = getProjectDetailMedia(project.id);

  if (!media) {
    return <ProjectCover project={project} className="aspect-[16/9] rounded-[2rem]" />;
  }
  if (media.fit === 'contain') {
    return (
      <Reveal className="flex justify-center rounded-[2rem] bg-surface-muted p-6 md:p-12">
        <img
          src={media.src}
          alt={project.title}
          className="max-h-[75vh] w-auto rounded-2xl shadow-lift"
          draggable={false}
          decoding="async"
        />
      </Reveal>
    );
  }
  return (
    <ImageReveal
      src={media.src}
      alt={project.title}
      className="rounded-[2rem] border border-line bg-surface-muted shadow-card"
    />
  );
};

const MetaItem = ({ label, children }) => (
  <motion.div variants={fadeUp} className="relative pt-4">
    <motion.span variants={lineDraw} className="absolute inset-x-0 top-0 h-px origin-left bg-line-strong" />
    <p className="eyebrow text-fg-subtle">{label}</p>
    <p className="mt-2 font-medium">{children}</p>
  </motion.div>
);

/** Returns to the projects section of the landing page */
const BackButton = ({ solid = false }) => (
  <Link
    to="/#projects"
    className={`group/roll inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition-colors ${
      solid
        ? 'bg-fg text-bg hover:bg-accent hover:text-white'
        : 'border border-line-strong text-fg hover:border-fg'
    }`}
  >
    <ArrowLeft
      size={15}
      className="transition-transform duration-500 ease-expo group-hover/roll:-translate-x-1"
    />
    <RollText>Back</RollText>
  </Link>
);

const MoreProjects = ({ currentId }) => (
  <section className="border-t border-line py-[clamp(4rem,8vw,7rem)]">
    <div className="container-main flex flex-wrap items-end justify-between gap-8">
      <div>
        <Reveal>
          <Eyebrow index="04" label="Keep exploring" className="text-fg-muted" />
        </Reveal>
        <SplitText
          as="h2"
          text="More *work*"
          className="mt-6 text-[clamp(2.5rem,6vw,5.5rem)] font-semibold leading-[0.92] tracking-[-0.045em]"
        />
        <Reveal>
          <p className="mt-4 max-w-md text-fg-muted">
            Pick another project to dive into, or head back to the landing page.
          </p>
        </Reveal>
      </div>
      <Reveal delay={0.1}>
        <BackButton solid />
      </Reveal>
    </div>
    <Reveal className="mt-12">
      <ProjectCarousel excludeId={currentId} />
    </Reveal>
  </section>
);

const ProjectDetail = () => {
  const { id } = useParams();
  const project = getProjectById(id);

  if (!project) return <Navigate to="/404" replace />;

  const {
    fullDescription,
    architectureDescription,
    category,
    technologies,
    highlights,
    techStack,
    metrics,
    links,
    duration,
    date,
    impact,
  } = project;
  const { name, tagline } = getProjectTitleParts(project);
  const award = getAchievementForProject(project.id);
  const [lead, ...paragraphs] = toParagraphs(fullDescription);

  return (
    <PageTransition>
      <article className="pt-[calc(var(--nav-h)+2.5rem)]">
        {/* Header */}
        <header className="container-main">
          <BackButton />

          <Reveal className="mt-12">
            <Eyebrow
              index={`${getProjectNumber(project.id)}/${String(projects.length).padStart(2, '0')}`}
              label={category}
              className="text-fg-muted"
            />
          </Reveal>

          <SplitText
            as="h1"
            text={name}
            play
            delay={0.35}
            className="mt-6 text-[clamp(3rem,10vw,9.5rem)] font-semibold leading-[0.9] tracking-[-0.055em]"
          />
          {tagline && (
            <SplitText
              as="p"
              by="word"
              text={tagline}
              play
              delay={0.6}
              className="mt-4 max-w-4xl font-serif text-[clamp(1.5rem,3.2vw,3rem)] italic leading-[1.1] text-fg-muted"
            />
          )}

          <div className="mt-10 flex flex-wrap items-center gap-3">
            {award && (
              <Reveal className="flex items-center gap-2 rounded-full bg-accent px-4 py-2 font-mono text-[11px] uppercase tracking-wider text-white">
                <Trophy size={13} />
                {award.place} · {award.event}
              </Reveal>
            )}
            {links?.github && (
              <a
                href={links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="group/roll flex items-center gap-2 rounded-full bg-fg px-5 py-2.5 text-sm font-medium text-bg transition-colors hover:bg-accent hover:text-white"
              >
                <Github size={15} />
                <RollText>Source code</RollText>
              </a>
            )}
            {links?.demo && (
              <a
                href={links.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="group/roll flex items-center gap-2 rounded-full border border-line-strong px-5 py-2.5 text-sm font-medium transition-colors hover:border-fg"
              >
                <RollText>Live demo</RollText>
                <ArrowUpRight size={15} />
              </a>
            )}
          </div>

          <motion.div
            className="mt-14 grid grid-cols-2 gap-6 md:grid-cols-4"
            variants={stagger(0.08, 0.5)}
            initial="hidden"
            animate="visible"
          >
            <MetaItem label="Category">{category}</MetaItem>
            <MetaItem label="Year">{date}</MetaItem>
            <MetaItem label="Timeline">{duration}</MetaItem>
            <MetaItem label="Stack">{technologies.slice(0, 3).join(', ')}</MetaItem>
          </motion.div>
        </header>

        {/* Cover */}
        <div className="container-main mt-16 md:mt-20">
          <DetailCover project={project} />
        </div>

        {/* Overview */}
        <section className="container-main mt-[clamp(5rem,10vw,9rem)] grid gap-10 lg:grid-cols-12">
          <Reveal className="lg:col-span-4">
            <Eyebrow index="01" label="Overview" className="text-fg-muted" />
          </Reveal>
          <div className="lg:col-span-8">
            <Reveal>
              <p className="text-[clamp(1.4rem,2.6vw,2.25rem)] font-medium leading-[1.25] tracking-[-0.03em]">
                {lead}
              </p>
            </Reveal>
            {paragraphs.map((paragraph, i) => (
              <Reveal key={i} delay={0.1}>
                <p className="mt-6 text-base leading-relaxed text-fg-muted md:text-lg">{paragraph}</p>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Metrics */}
        {metrics?.length > 0 && (
          <motion.section
            className="container-main mt-[clamp(4rem,8vw,7rem)] grid gap-10 sm:grid-cols-3"
            variants={stagger(0.1)}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            {metrics.map((metric) => (
              <motion.div key={metric.label} variants={fadeUp} className="relative pt-6">
                <motion.span
                  variants={lineDraw}
                  className="absolute inset-x-0 top-0 h-px origin-left bg-line-strong"
                />
                <Counter
                  value={metric.value}
                  className="block text-[clamp(2.5rem,5vw,4.5rem)] font-semibold leading-none tracking-[-0.05em]"
                />
                <p className="eyebrow mt-4 text-fg-subtle">{metric.label}</p>
              </motion.div>
            ))}
          </motion.section>
        )}

        {/* Architecture */}
        <section className="container-main mt-[clamp(5rem,10vw,9rem)] grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Reveal>
              <Eyebrow index="02" label="Architecture" className="text-fg-muted" />
            </Reveal>
            <SplitText
              as="h2"
              text="How it *works*"
              className="mt-6 text-[clamp(2.25rem,4.5vw,4rem)] font-semibold leading-[0.95] tracking-[-0.045em]"
            />
          </div>
          <div className="lg:col-span-8">
            <Reveal>
              <p className="text-base leading-relaxed text-fg-muted md:text-lg">
                {architectureDescription || fullDescription}
              </p>
            </Reveal>
            {techStack && (
              <motion.dl
                className="mt-10 grid gap-4 sm:grid-cols-3"
                variants={stagger(0.08)}
                initial="hidden"
                whileInView="visible"
                viewport={viewportOnce}
              >
                {techStack.map((item) => (
                  <motion.div
                    key={item.label}
                    variants={fadeUp}
                    className="rounded-2xl border border-line bg-surface p-5"
                  >
                    <dt className="eyebrow text-fg-subtle">{item.label}</dt>
                    <dd className="mt-2 text-xl font-semibold tracking-[-0.02em]">{item.value}</dd>
                  </motion.div>
                ))}
              </motion.dl>
            )}
          </div>
        </section>

        {/* Highlights */}
        <section className="container-main mt-[clamp(5rem,10vw,9rem)]">
          <Reveal>
            <Eyebrow index="03" label="Highlights" className="text-fg-muted" />
          </Reveal>
          <ol className="mt-10 border-b border-line">
            {highlights.map((highlight, i) => (
              <motion.li
                key={highlight.title}
                className="group/hl relative grid gap-3 py-8 md:grid-cols-12 md:gap-8"
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={viewportOnce}
              >
                <motion.span
                  variants={lineDraw}
                  className="absolute inset-x-0 top-0 h-px origin-left bg-line-strong"
                />
                <span className="font-mono text-sm text-accent md:col-span-1">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3 className="text-2xl font-semibold tracking-[-0.03em] transition-transform duration-500 ease-expo group-hover/hl:translate-x-2 md:col-span-5 md:text-3xl">
                  {highlight.title}
                </h3>
                <p className="leading-relaxed text-fg-muted md:col-span-6">{highlight.description}</p>
              </motion.li>
            ))}
          </ol>
        </section>

        {/* Impact */}
        {impact && (
          <section className="container-main mt-[clamp(5rem,10vw,9rem)]">
            <Reveal as="blockquote" className="relative mx-auto max-w-5xl text-center">
              <span className="block font-serif text-[6rem] leading-none text-accent" aria-hidden="true">
                “
              </span>
              <p className="-mt-6 font-serif text-[clamp(1.75rem,3.6vw,3.25rem)] italic leading-[1.15]">
                {impact}
              </p>
            </Reveal>
          </section>
        )}

        {/* Technologies */}
        <section className="container-main mb-[clamp(5rem,10vw,8rem)] mt-[clamp(5rem,10vw,8rem)]">
          <Reveal>
            <p className="eyebrow mb-5 text-fg-subtle">Built with</p>
          </Reveal>
          <motion.ul
            className="flex flex-wrap gap-2.5"
            variants={stagger(0.04)}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            {technologies.map((tech) => (
              <motion.li
                key={tech}
                variants={fadeUp}
                className="rounded-full border border-line-strong px-4 py-2 text-sm font-medium"
              >
                {tech}
              </motion.li>
            ))}
          </motion.ul>
        </section>

        <MoreProjects currentId={project.id} />
      </article>
    </PageTransition>
  );
};

export default ProjectDetail;
