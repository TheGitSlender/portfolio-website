/**
 * Emphasis parsing
 *
 * Copy in /src/data can mark words with *asterisks* to render them in the
 * italic serif accent. This turns a string into a list of words, each flagged
 * with whether it sits inside an emphasis run. Trailing punctuation after the
 * closing asterisk ("*secure.*", "*Axon,*" or "*Axon*,") stays on the word.
 */

const CLOSING = /^(.*)\*([.,;:!?)]*)$/;

export const parseEmphasis = (text) => {
  let inEmphasis = false;

  return text
    .split(/\s+/)
    .filter(Boolean)
    .map((raw) => {
      let word = raw;
      let em = inEmphasis;

      if (word.startsWith('*')) {
        word = word.slice(1);
        em = true;
        inEmphasis = true;
      }

      const closing = word.match(CLOSING);
      if (closing) {
        word = closing[1] + closing[2];
        inEmphasis = false;
      }

      return { word, em };
    });
};

/** Plain text with the emphasis markers removed (for screen readers, titles) */
export const stripEmphasis = (text) => text.replace(/\*/g, '');
