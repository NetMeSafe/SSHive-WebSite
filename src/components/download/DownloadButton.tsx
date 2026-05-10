'use client';

import { Download } from 'lucide-react';
import { AppStoreLink } from './AppStoreLink';

export function DownloadButton({ label }: { label: string }) {
  return (
    <AppStoreLink className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-primary text-primary-foreground text-lg font-semibold hover:opacity-90 transition-opacity shadow-lg shadow-primary/20">
      <Download className="w-6 h-6" />
      {label}
    </AppStoreLink>
  );
}
