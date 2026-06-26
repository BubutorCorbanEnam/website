import { Copy, Download } from 'lucide-react';
import { useMemo, useState } from 'react';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { PageHeader } from '../components/ui/PageHeader';
import { Section } from '../components/ui/Section';
import { publications } from '../data/content';

export function Publications() {
  const types = useMemo(() => ['All', ...Array.from(new Set(publications.map((publication) => publication.type)))], []);
  const [type, setType] = useState('All');
  const filtered = type === 'All' ? publications : publications.filter((publication) => publication.type === type);

  return (
    <>
      <PageHeader title="Publications" description="Journal articles, conference papers, working papers, chapters, reports, books, and theses." />
      <Section>
        <div className="mb-8 flex flex-wrap gap-2" role="tablist" aria-label="Publication type filters">
          {types.map((item) => (
            <button className={`rounded-full px-4 py-2 text-sm font-semibold ${type === item ? 'bg-ink-900 text-white dark:bg-white dark:text-ink-900' : 'bg-slate-100 text-ink-700 dark:bg-slate-800 dark:text-slate-200'}`} type="button" onClick={() => setType(item)} key={item}>
              {item}
            </button>
          ))}
        </div>
        <div className="space-y-6">
          {filtered.map((publication) => (
            <Card key={publication.title}>
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-signal-teal">{publication.type}</p>
              <h2 className="mt-2 text-2xl font-semibold text-ink-900 dark:text-white">{publication.title}</h2>
              <p className="mt-2 text-ink-700 dark:text-slate-300">{publication.authors}</p>
              <p className="mt-2 text-sm text-ink-500 dark:text-slate-400">
                {publication.journal}, {publication.volume}({publication.issue}), {publication.pages}, {publication.year}. DOI: {publication.doi}
              </p>
              <p className="mt-4 leading-7 text-ink-500 dark:text-slate-400">{publication.abstract}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {publication.keywords.map((keyword) => (
                  <span className="rounded-full border border-slate-200 px-3 py-1 text-xs text-ink-500 dark:border-slate-800 dark:text-slate-400" key={keyword}>
                    {keyword}
                  </span>
                ))}
              </div>
              <details className="mt-4">
                <summary className="cursor-pointer text-sm font-semibold text-signal-blue">BibTeX and citation</summary>
                <pre className="mt-3 overflow-x-auto rounded-md bg-slate-100 p-4 text-xs dark:bg-slate-950">{publication.bibtex}</pre>
                <p className="mt-3 text-sm text-ink-500 dark:text-slate-400">{publication.citation}</p>
              </details>
              <div className="mt-5 flex flex-wrap gap-3">
                <Button href={publication.pdf} variant="secondary" icon={<Download size={16} />}>
                  PDF
                </Button>
                <Button
                  variant="ghost"
                  icon={<Copy size={16} />}
                  onClick={() => {
                    navigator.clipboard.writeText(publication.citation);
                    window.dispatchEvent(new CustomEvent('toast', { detail: 'Citation copied.' }));
                  }}
                >
                  Citation
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </Section>
    </>
  );
}
