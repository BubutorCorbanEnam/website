import { PageHeader } from '../components/ui/PageHeader';
import { Section } from '../components/ui/Section';
import { Timeline } from '../components/ui/Timeline';
import { timeline } from '../data/content';

export function Experience() {
  return (
    <>
      <PageHeader title="Experience" description="Employment, assistantships, consulting, industry, volunteer work, internships, and leadership roles." />
      <Section>
        <Timeline items={timeline} />
      </Section>
    </>
  );
}
