import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';

export default function NotFound() {
  const t = useTranslations('notFound');

  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-6xl md:text-8xl font-bold text-muted-foreground/30">
          404
        </h1>
        <h2 className="mt-4 text-2xl md:text-3xl font-bold text-foreground">
          {t('title')}
        </h2>
        <p className="mt-4 text-lg text-muted-foreground">
          {t('description')}
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity"
        >
          {t('backHome')}
        </Link>
      </div>
    </section>
  );
}
