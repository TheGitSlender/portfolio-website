/**
 * Contact Section
 *
 * Full-bleed accent block: a kinetic headline, the email as a huge link with
 * a copy-to-clipboard control, a magnetic call-to-action disc, and socials.
 */

import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowUpRight, Check, Copy } from 'lucide-react';
import SplitText from '../motion/SplitText';
import RollText from '../motion/RollText';
import Reveal from '../motion/Reveal';
import { Eyebrow } from '../ui/SectionIntro';
import { contactInfo, contactContent, socialLinks } from '../../data/contact';
import { ease } from '../../config/animations';

const COPIED_RESET_MS = 2200;

const CopyEmailButton = () => {
  const [copied, setCopied] = useState(false);
  const timer = useRef(null);

  useEffect(() => () => clearTimeout(timer.current), []);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(contactInfo.email);
      setCopied(true);
      clearTimeout(timer.current);
      timer.current = setTimeout(() => setCopied(false), COPIED_RESET_MS);
    } catch {
      // Clipboard unavailable (permissions/insecure context): fall back to mailto
      window.location.href = `mailto:${contactInfo.email}`;
    }
  };

  return (
    <button
      type="button"
      onClick={handleCopy}
      className="relative flex h-11 items-center gap-2 overflow-hidden rounded-full border border-white/35 px-5 text-sm font-medium transition-colors hover:bg-white hover:text-accent"
      aria-live="polite"
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={copied ? 'copied' : 'copy'}
          className="flex items-center gap-2"
          initial={{ y: 16, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -16, opacity: 0 }}
          transition={{ duration: 0.3, ease: ease.expo }}
        >
          {copied ? <Check size={15} /> : <Copy size={15} />}
          {copied ? contactContent.emailCopiedMessage : contactContent.emailCTA}
        </motion.span>
      </AnimatePresence>
    </button>
  );
};

const Contact = () => {
  const socials = socialLinks.filter((link) => link.platform !== 'Email');

  return (
    <section
      id="contact"
      className="relative overflow-hidden rounded-t-[clamp(2rem,5vw,4rem)] bg-accent text-white selection:bg-ink"
    >
      <div className="container-main py-[clamp(5rem,10vw,9rem)]">
        <Reveal>
          <Eyebrow index="07" label="Contact" className="text-white/75 [&_span:first-child]:text-white" />
        </Reveal>

        <SplitText
          as="h2"
          text={contactContent.heading}
          className="mt-8 max-w-[14ch] text-[clamp(3.25rem,10vw,10rem)] font-semibold leading-[0.88] tracking-[-0.055em] text-white"
        />

        <div className="mt-16 grid gap-12 md:grid-cols-12 md:items-end">
          <div className="md:col-span-8">
            <Reveal>
              <p className="mb-8 max-w-lg text-lg leading-relaxed text-white/85">
                {contactContent.subheading}
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <a
                href={`mailto:${contactInfo.email}`}
                className="group/mail relative inline-block break-all text-[clamp(1.5rem,4.4vw,4rem)] font-medium leading-tight tracking-[-0.035em]"
              >
                {contactInfo.email}
                <span className="absolute -bottom-1 left-0 h-[2px] w-full origin-right scale-x-0 bg-white transition-transform duration-700 ease-expo group-hover/mail:origin-left group-hover/mail:scale-x-100" />
              </a>
            </Reveal>
            <Reveal delay={0.2} className="mt-8 flex flex-wrap items-center gap-3">
              <CopyEmailButton />
              {socials.map((link) => (
                <a
                  key={link.platform}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/roll flex h-11 items-center gap-1.5 rounded-full border border-white/35 px-5 text-sm font-medium transition-colors hover:bg-white hover:text-accent"
                >
                  <RollText>{link.platform}</RollText>
                  <ArrowUpRight size={14} />
                </a>
              ))}
            </Reveal>
          </div>

          <Reveal delay={0.25} className="md:col-span-4 md:justify-self-end">
            <a
              href={`mailto:${contactInfo.email}`}
              className="group/roll flex h-44 w-44 flex-col items-center justify-center gap-2 rounded-full bg-ink text-paper transition-colors duration-500 hover:bg-paper hover:text-ink md:h-52 md:w-52"
            >
              <ArrowUpRight
                size={26}
                className="transition-transform duration-500 ease-expo group-hover/roll:rotate-45"
              />
              <RollText className="text-base font-medium">{contactContent.primaryCTA}</RollText>
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default Contact;
