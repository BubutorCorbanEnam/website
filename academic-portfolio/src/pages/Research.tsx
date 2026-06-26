import { Card } from '../components/ui/Card';
import { PageHeader } from '../components/ui/PageHeader';
import { Section } from '../components/ui/Section';
import { researchThemes } from '../data/content';

const groups = ['Current Work', 'Past Work', 'Methodologies', 'Datasets', 'Software', 'Impact', 'Collaborators', 'Grant Pipeline'];

export function Research() {
  return (
    <>
      <PageHeader title="Research" description="Themes, methods, datasets, software, collaborators, impact, and grant placeholders." />
      <Section eyebrow="Themes" title="Research themes">
        <div className="grid gap-6 md:grid-cols-2">
          {researchThemes.map((theme) => (
            <Card key={theme.title}>
              <h2 className="text-xl font-semibold text-ink-900 dark:text-white">{theme.title}</h2>
              <p className="mt-3 leading-7 text-ink-500 dark:text-slate-400">{theme.description}</p>
            </Card>
          ))}
        </div>
      </Section>
      <Section eyebrow="Research System" title="Workstreams and infrastructure">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {groups.map((group) => (
            <Card key={group}>
              <h3 className="font-semibold text-ink-900 dark:text-white">{group}</h3>
              <p className="mt-2 text-sm leading-6 text-ink-500 dark:text-slate-400">Placeholder entries for {group.toLowerCase()} can be edited in the central content file.</p>
            </Card>
          ))}
        </div>
      </Section>
    </>
  );
}
