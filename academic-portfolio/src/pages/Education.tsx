import { Card } from '../components/ui/Card';
import { PageHeader } from '../components/ui/PageHeader';
import { Section } from '../components/ui/Section';
import { education } from '../data/content';

export function Education() {
  return (
    <>
      <PageHeader title="Education" description="Degrees, universities, research focus, coursework, awards, dissertation, and supervisors." />
      <Section>
        <div className="grid gap-6 lg:grid-cols-2">
          {education.map((item) => (
            <Card key={item.degree}>
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-signal-teal">{item.years}</p>
              <h2 className="mt-2 text-2xl font-semibold text-ink-900 dark:text-white">{item.degree}</h2>
              <p className="mt-1 font-medium text-ink-700 dark:text-slate-300">{item.institution}</p>
              <p className="mt-3 leading-7 text-ink-500 dark:text-slate-400">{item.focus}</p>
              <p className="mt-3 text-sm text-ink-500 dark:text-slate-400">Supervisor: {item.supervisor}</p>
              <p className="mt-1 text-sm text-ink-500 dark:text-slate-400">Dissertation: {item.dissertation}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {item.courses.map((course) => (
                  <span className="rounded-full border border-slate-200 px-3 py-1 text-xs text-ink-500 dark:border-slate-800 dark:text-slate-400" key={course}>
                    {course}
                  </span>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </Section>
    </>
  );
}
