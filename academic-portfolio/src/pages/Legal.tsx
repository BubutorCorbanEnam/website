import { PageHeader } from '../components/ui/PageHeader';
import { Section } from '../components/ui/Section';

export function Legal({ type }: { type: 'privacy' | 'terms' }) {
  const isPrivacy = type === 'privacy';
  return (
    <>
      <PageHeader title={isPrivacy ? 'Privacy Policy' : 'Terms of Use'} description={isPrivacy ? 'Placeholder privacy policy for a static academic portfolio.' : 'Placeholder terms for use of this academic portfolio.'} />
      <Section>
        <article className="prose prose-slate max-w-3xl dark:prose-invert">
          <p>Last updated: June 26, 2026.</p>
          <p>This static website does not include analytics, advertising trackers, paid services, or a backend database by default.</p>
          <p>Forms, downloads, newsletter signup, and cookie consent are placeholders and should be connected to approved institutional tools before collecting real data.</p>
          <p>All placeholder content should be reviewed and replaced before public launch.</p>
        </article>
      </Section>
    </>
  );
}
