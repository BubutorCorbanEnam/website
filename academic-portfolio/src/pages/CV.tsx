import { Download, Printer } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { PageHeader } from '../components/ui/PageHeader';
import { Section } from '../components/ui/Section';
import { siteConfig } from '../config/site';
import { awards, education, publications, skills, timeline } from '../data/content';

export function CV() {
  return (
    <>
      <PageHeader title="CV" description="Print-friendly curriculum vitae with downloadable placeholder PDF." />
      <Section className="print:py-4">
        <div className="mb-6 flex flex-wrap gap-3 print:hidden">
          <Button href={siteConfig.cv} icon={<Download size={16} />}>
            Download PDF
          </Button>
          <Button variant="secondary" onClick={() => window.print()} icon={<Printer size={16} />}>
            Print
          </Button>
        </div>
        <Card className="print:border-0 print:shadow-none">
          <h2 className="text-3xl font-semibold text-ink-900 dark:text-white">{siteConfig.name}</h2>
          <p className="mt-2 text-ink-500 dark:text-slate-400">{siteConfig.title}</p>
          <p className="mt-2 text-sm text-ink-500 dark:text-slate-400">{siteConfig.email} · {siteConfig.location}</p>
          <hr className="my-6 border-slate-200 dark:border-slate-800" />
          <CVSection title="Education" items={education.map((item) => `${item.degree}, ${item.institution} (${item.years})`)} />
          <CVSection title="Experience" items={timeline.map((item) => `${item.title}, ${item.organization} (${item.year})`)} />
          <CVSection title="Publications" items={publications.map((item) => `${item.title}. ${item.journal}, ${item.year}.`)} />
          <CVSection title="Awards" items={awards} />
          <CVSection title="Skills" items={skills.map((skill) => `${skill.group}: ${skill.items.join(', ')}`)} />
        </Card>
      </Section>
    </>
  );
}

function CVSection({ title, items }: { title: string; items: string[] }) {
  return (
    <section className="mb-8">
      <h3 className="text-lg font-semibold text-ink-900 dark:text-white">{title}</h3>
      <ul className="mt-3 space-y-2">
        {items.map((item) => (
          <li className="text-sm leading-6 text-ink-700 dark:text-slate-300" key={item}>
            {item}
          </li>
        ))}
      </ul>
    </section>
  );
}
