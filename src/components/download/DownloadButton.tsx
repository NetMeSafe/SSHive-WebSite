'use client';

import { Download } from 'lucide-react';
import { posthog } from '@/lib/posthog';
import { DOWNLOAD_URL, APP_VERSION } from '@/lib/constants';

export function DownloadButton({ label }: { label: string }) {
  const handleClick = () => {
    posthog.capture('dmg_download_clicked', {
      version: APP_VERSION,
      source_page: 'download',
    });
  };

  return (
    <a
      href={DOWNLOAD_URL}
      onClick={handleClick}
      className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-primary text-primary-foreground text-lg font-semibold hover:opacity-90 transition-opacity shadow-lg shadow-primary/20"
    >
      <Download className="w-6 h-6" />
      {label}
    </a>
  );
}
