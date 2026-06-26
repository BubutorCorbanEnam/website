import { Download } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { PageHeader } from '../components/ui/PageHeader';
import { Section } from '../components/ui/Section';
import { downloads } from '../data/content';

export function Downloads() {
  return (
    <>
      <PageHeader title="Downloads" description="Working placeholder files for CV, statements, datasets, slides, certificates, portfolio, and code samples." />
      <Section>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {downloads.map((item) => (
            <Card key={item.title}>
              <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-ink-700 dark:bg-slate-800 dark:text-slate-200">{item.type}</span>
              <h2 className="mt-4 text-xl font-semibold text-ink-900 dark:text-white">{item.title}</h2>
              <p className="mt-2 min-h-12 text-sm leading-6 text-ink-500 dark:text-slate-400">{item.description}</p>
              <div className="mt-5">
                <Button href={item.href} variant="secondary" icon={<Download size={16} />}>
                  Download
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </Section>
    </>
  );
}
