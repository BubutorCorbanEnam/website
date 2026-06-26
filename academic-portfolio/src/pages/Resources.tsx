import { Card } from '../components/ui/Card';
import { PageHeader } from '../components/ui/PageHeader';
import { Section } from '../components/ui/Section';
import { resources } from '../data/content';

export function Resources() {
  return (
    <>
      <PageHeader title="Resources" description="Books, datasets, software, useful links, tutorials, and courses." />
      <Section>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {resources.map((resource) => (
            <Card key={resource.group}>
              <h2 className="text-xl font-semibold text-ink-900 dark:text-white">{resource.group}</h2>
              <ul className="mt-4 space-y-2">
                {resource.items.map((item) => (
                  <li className="text-sm text-ink-500 dark:text-slate-400" key={item}>
                    {item}
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </Section>
    </>
  );
}
