/**
 * RollText
 *
 * Hover roll: every character slides up and is replaced by a copy rising
 * from below, with a small per-character delay. Pure CSS transitions.
 *
 * The hover trigger is the nearest ancestor with the `group/roll` class,
 * so the whole button/link (not just the text) activates the effect.
 */

const RollText = ({ children, className = '' }) => {
  const text = String(children);
  const chars = [...text];

  return (
    <span className={`relative inline-flex overflow-hidden ${className}`}>
      <span className="sr-only">{text}</span>
      <span aria-hidden="true" className="inline-flex">
        {chars.map((char, index) => {
          const glyph = char === ' ' ? ' ' : char;
          const style = { transitionDelay: `${index * 16}ms` };
          return (
            <span key={index} className="relative inline-block">
              <span
                className="inline-block transition-transform duration-500 ease-expo group-hover/roll:-translate-y-full"
                style={style}
              >
                {glyph}
              </span>
              <span
                className="absolute left-0 top-full inline-block transition-transform duration-500 ease-expo group-hover/roll:-translate-y-full"
                style={style}
              >
                {glyph}
              </span>
            </span>
          );
        })}
      </span>
    </span>
  );
};

export default RollText;
