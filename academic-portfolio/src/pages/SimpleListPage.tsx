import { Card } from '../components/ui/Card';
import { PageHeader } from '../components/ui/PageHeader';
import { Section } from '../components/ui/Section';

export function SimpleListPage({ title, description, items }: { title: string; description: string; items: string[] }) {
  return (
    <>
      <PageHeader title={title} description={description} />
      <Section>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <Card key={item}>
              <h2 className="text-lg font-semibold text-ink-900 dark:text-white">{item}</h2>
              <p className="mt-3 text-sm leading-6 text-ink-500 dark:text-slate-400">Placeholder details for {item.toLowerCase()} can be updated in the central content file.</p>
            </Card>
          ))}
        </div>
      </Section>
    </>
  );
}
