/**
 * Hero option: Classic
 *
 * The oversized split name over the ambient dot field, with the statement,
 * CTAs and badge underneath.
 */

import ClassicLayout from './ClassicLayout';
import { HeroShell } from './HeroParts';

const HeroClassic = () => <HeroShell>{(progress) => <ClassicLayout progress={progress} />}</HeroShell>;

export default HeroClassic;
