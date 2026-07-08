'use client';

import type { MouseEvent, ReactNode } from 'react';

const APP_ID = '6760705487';
const HTTPS_URL = `https://apps.apple.com/app/sshive/id${APP_ID}`;

function getNativeUrl(): string {
  if (typeof window === 'undefined' || typeof navigator === 'undefined') {
    return HTTPS_URL;
  }
  const ua = navigator.userAgent || '';
  // iPhone, iPad, iPod (and iPad on iPadOS that masquerades as Mac with touch)
  const isIOS =
    /iPhone|iPad|iPod/.test(ua) ||
    (/Macintosh/.test(ua) && navigator.maxTouchPoints > 1);
  if (isIOS) {
    return `itms-apps://apps.apple.com/app/sshive/id${APP_ID}`;
  }
  // macOS desktop
  if (/Macintosh|Mac OS X/.test(ua)) {
    return `macappstore://apps.apple.com/app/sshive/id${APP_ID}?mt=12`;
  }
  // Other platforms: stay on the web view
  return HTTPS_URL;
}

interface Props {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}

// The href stays on the universal HTTPS URL (what crawlers and no-JS users
// see); the native itms-apps/macappstore scheme is resolved at click time.
export function AppStoreLink({ children, className, onClick }: Props) {
  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    onClick?.();
    const native = getNativeUrl();
    if (native !== HTTPS_URL) {
      event.preventDefault();
      window.location.href = native;
    }
  };

  return (
    <a
      href={HTTPS_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      onClick={handleClick}
    >
      {children}
    </a>
  );
}
