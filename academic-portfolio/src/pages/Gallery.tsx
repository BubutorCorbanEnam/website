import { useState } from 'react';
import { Lightbox } from '../components/ui/Lightbox';
import { PageHeader } from '../components/ui/PageHeader';
import { Section } from '../components/ui/Section';
import { gallery } from '../data/content';

export function Gallery() {
  const [active, setActive] = useState<{ src: string; caption: string } | null>(null);
  return (
    <>
      <PageHeader title="Gallery" description="Conference, teaching, fieldwork, poster, and research-life image placeholders." />
      <Section>
        <div className="columns-1 gap-6 sm:columns-2 lg:columns-3">
          {gallery.map((item) => (
            <button className="mb-6 block w-full break-inside-avoid text-left" type="button" onClick={() => setActive(item)} key={item.src}>
              <img className="w-full rounded-lg border border-slate-200 object-cover dark:border-slate-800" src={item.src} alt={item.caption} />
              <span className="mt-2 block text-sm text-ink-500 dark:text-slate-400">{item.caption}</span>
            </button>
          ))}
        </div>
      </Section>
      <Lightbox image={active?.src ?? null} caption={active?.caption ?? ''} onClose={() => setActive(null)} />
    </>
  );
}
