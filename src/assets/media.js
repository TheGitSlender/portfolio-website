/**
 * Media registry
 *
 * Single place where image assets are imported and keyed by content id, so
 * data files stay free of bundler imports and every component resolves
 * images the same way.
 *
 * Projects without an entry render a generated cover (see ProjectCover).
 */

import portrait from './pictures/pfp.webp';

import wazuhCover from './pictures/wazuh_carousel.webp';
import segmentatorCover from './pictures/3d_CV_carousel.webp';
import ctfCover from './pictures/carousel_ctf.webp';
import medicoreCover from './pictures/medicore_carousel.webp';
import aegisCover from './pictures/aegis_carousel.webp';
import callpilotCover from './pictures/callpilot_cover.webp';

import wazuhDetail from './pictures/llm_project_details.webp';
import segmentatorDetail from './pictures/3d_CV_projectdetails.webp';
import ctfDetail from './pictures/ctf_project_details.webp';
import medicoreDetail from './pictures/medicore_consultation.webp';
import aegisDetail from './pictures/aegis_page.webp';
import callpilotDetail from './pictures/callpilot_mainpage.webp';

import smartFactoryImg from './pictures/3d_CV_experience.webp';
import presidentImg from './pictures/president_experience.webp';

export { portrait };

/** Card covers (home gallery, achievement previews, next-project teaser) */
const projectCovers = {
  'wazuh-llm': wazuhCover,
  '3d-segmentator': segmentatorCover,
  'ctf-achievements': ctfCover,
  medicore: medicoreCover,
  aegis: aegisCover,
  // A card-sized crop of the CallPilot main page (the old carousel asset was a thin banner)
  callpilot: callpilotCover,
};

/**
 * Detail page hero images. `fit: 'contain'` frames tall screenshots instead
 * of cropping them into a landscape box.
 */
const projectDetails = {
  'wazuh-llm': { src: wazuhDetail },
  '3d-segmentator': { src: segmentatorDetail },
  'ctf-achievements': { src: ctfDetail },
  medicore: { src: medicoreDetail, fit: 'contain' },
  aegis: { src: aegisDetail },
  callpilot: { src: callpilotDetail },
};

const experienceImages = {
  '3d-smart-factory': smartFactoryImg,
  'ai-club-president': presidentImg,
};

export const getProjectCover = (id) => projectCovers[id] ?? null;
export const getProjectDetailMedia = (id) => projectDetails[id] ?? null;
export const getExperienceImage = (id) => experienceImages[id] ?? null;
