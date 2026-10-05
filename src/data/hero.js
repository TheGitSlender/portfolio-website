/**
 * Hero Data
 *
 * Copy for the hero options. Facts come from the other data files; this
 * file only holds hero-specific flavour text.
 */

/** Hand-written margin notes for the "Annotated" hero */
export const heroNotes = {
  // Next to the first name
  intro: "hi, that's me",
  // Left of the surname; "{role} @ {company}" is filled from experience.js
  founderSuffix: 'pre-seed, MIT Venture Lab',
  // Above the CTA; filled from the top achievement
  winPrefix: 'psst —',
};

/**
 * Illustrative utterances for the "Voice wave" hero, one per voice project.
 * Each links to the project it represents.
 */
export const voiceSamples = [
  { text: 'Walk me through how you would shard this service.', projectId: 'interviewforge' },
  { text: 'The patient is allergic to penicillin. Is amoxicillin safe?', projectId: 'medicore' },
  { text: 'When should I irrigate the olive grove this week?', projectId: 'jarvislfla7' },
  { text: 'Find me a dentist tomorrow morning, within five kilometres.', projectId: 'callpilot' },
];
