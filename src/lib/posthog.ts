import posthog from 'posthog-js';

let initialized = false;

export function initPostHog() {
  if (typeof window === 'undefined' || initialized) return;

  const key = process.env.NEXT_PUBLIC_POSTHOG_KEY;
  if (!key) return;

  posthog.init(key, {
    api_host: 'https://eu.posthog.com',
    capture_pageview: true,
    capture_pageleave: true,
    autocapture: true,
    persistence: 'localStorage',
    loaded: (ph) => {
      if (process.env.NODE_ENV === 'development') ph.debug();
    },
  });
  initialized = true;
}

export { posthog };
