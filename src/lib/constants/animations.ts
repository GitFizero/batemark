/** Shared animation constants to avoid magic numbers across components */

export const DURATION = {
  fast: 0.3,
  normal: 0.4,
  slow: 0.5,
  entrance: 0.6,
} as const;

export const DELAY = {
  stagger: {
    fast: 0.05,
    normal: 0.06,
    slow: 0.1,
    relaxed: 0.15,
  },
  section: 0.2,
  content: 0.3,
  cta: 0.8,
} as const;

export const FADE_UP = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: DURATION.entrance },
} as const;

export const FADE_UP_SMALL = {
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0 },
} as const;
