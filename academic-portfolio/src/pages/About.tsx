import { siteConfig } from '../config/site';
import { timeline } from '../data/content';
import { Card } from '../components/ui/Card';
import { PageHeader } from '../components/ui/PageHeader';
import { Section } from '../components/ui/Section';
import { Timeline } from '../components/ui/Timeline';

export function About() {
  return (
    <>
      <PageHeader title="About" description="Biography, research philosophy, career journey, personal interests, and values." />
      <Section>
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <img className="rounded-lg border border-slate-200 object-cover shadow-soft dark:border-slate-800" src={siteConfig.profileImage} alt={`${siteConfig.name} placeholder portrait`} />
          <div className="space-y-6 text-lg leading-8 text-ink-700 dark:text-slate-300">
            <p>{siteConfig.bio}</p>
            <p>
              My work combines statistical rigor, careful research design, and human-centered communication. I am especially interested in doctoral research that links causal inference, public policy, and responsible data infrastructure.
            </p>
            <div className="grid gap-4 md:grid-cols-2">
              <Card>
                <h2 className="text-xl font-semibold text-ink-900 dark:text-white">Mission</h2>
                <p className="mt-2 text-base leading-7 text-ink-500 dark:text-slate-400">{siteConfig.mission}</p>
              </Card>
              <Card>
                <h2 className="text-xl font-semibold text-ink-900 dark:text-white">Vision</h2>
                <p className="mt-2 text-base leading-7 text-ink-500 dark:text-slate-400">{siteConfig.vision}</p>
              </Card>
            </div>
          </div>
        </div>
      </Section>
      <Section eyebrow="Philosophy" title="Research values">
        <div className="grid gap-6 md:grid-cols-3">
          {['Transparency', 'Rigor', 'Usefulness', 'Equity', 'Humility', 'Reproducibility'].map((value) => (
            <Card key={value}>
              <h3 className="text-lg font-semibold text-ink-900 dark:text-white">{value}</h3>
              <p className="mt-2 text-sm leading-6 text-ink-500 dark:text-slate-400">Placeholder description for how this value shapes research practice.</p>
            </Card>
          ))}
        </div>
      </Section>
      <Section eyebrow="Journey" title="Professional timeline">
        <Timeline items={timeline} />
      </Section>
    </>
  );
}
