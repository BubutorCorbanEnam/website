import { Card } from '../components/ui/Card';
import { PageHeader } from '../components/ui/PageHeader';
import { Section } from '../components/ui/Section';
import { skills } from '../data/content';

export function Skills() {
  return (
    <>
      <PageHeader title="Skills" description="Programming, statistics, econometrics, machine learning, GIS, writing, visualization, software, and languages." />
      <Section>
        <div className="grid gap-6 lg:grid-cols-2">
          {skills.map((skill) => (
            <Card key={skill.group}>
              <div className="flex items-center justify-between gap-4">
                <h2 className="text-xl font-semibold text-ink-900 dark:text-white">{skill.group}</h2>
                <span className="text-sm font-semibold text-signal-blue">{skill.level}%</span>
              </div>
              <div className="mt-4 h-3 overflow-hidden rounded-full bg-slate-100 dark:bg-slate-800" aria-label={`${skill.group} proficiency ${skill.level}%`}>
                <div className="h-full rounded-full bg-signal-blue" style={{ width: `${skill.level}%` }} />
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {skill.items.map((item) => (
                  <span className="rounded-full border border-slate-200 px-3 py-1 text-xs text-ink-500 dark:border-slate-800 dark:text-slate-400" key={item}>
                    {item}
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
