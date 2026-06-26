import { Mail, MapPin, Phone } from 'lucide-react';
import { useState } from 'react';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { PageHeader } from '../components/ui/PageHeader';
import { Section } from '../components/ui/Section';
import { siteConfig, socialLinks } from '../config/site';
import { faqs } from '../data/content';

export function Contact() {
  const [errors, setErrors] = useState<Record<string, string>>({});

  return (
    <>
      <PageHeader title="Contact" description="Professional contact form, office hours, location placeholder, social links, and FAQ." />
      <Section>
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <Card>
            <form
              className="grid gap-4"
              onSubmit={(event) => {
                event.preventDefault();
                const form = new FormData(event.currentTarget);
                const nextErrors: Record<string, string> = {};
                ['name', 'email', 'message'].forEach((field) => {
                  if (!String(form.get(field) ?? '').trim()) nextErrors[field] = 'This field is required.';
                });
                if (Object.keys(nextErrors).length) {
                  setErrors(nextErrors);
                  return;
                }
                setErrors({});
                window.dispatchEvent(new CustomEvent('toast', { detail: 'Message placeholder submitted.' }));
                event.currentTarget.reset();
              }}
            >
              <label className="grid gap-2 text-sm font-semibold text-ink-700 dark:text-slate-300">
                Name
                <input className="field" name="name" autoComplete="name" aria-invalid={Boolean(errors.name)} />
                {errors.name && <span className="text-sm text-signal-rose">{errors.name}</span>}
              </label>
              <label className="grid gap-2 text-sm font-semibold text-ink-700 dark:text-slate-300">
                Email
                <input className="field" name="email" type="email" autoComplete="email" aria-invalid={Boolean(errors.email)} />
                {errors.email && <span className="text-sm text-signal-rose">{errors.email}</span>}
              </label>
              <label className="grid gap-2 text-sm font-semibold text-ink-700 dark:text-slate-300">
                Topic
                <select className="field" name="topic">
                  <option>Research collaboration</option>
                  <option>Speaking invitation</option>
                  <option>Data request</option>
                  <option>Teaching</option>
                </select>
              </label>
              <label className="grid gap-2 text-sm font-semibold text-ink-700 dark:text-slate-300">
                Message
                <textarea className="field min-h-36" name="message" aria-invalid={Boolean(errors.message)} />
                {errors.message && <span className="text-sm text-signal-rose">{errors.message}</span>}
              </label>
              <Button type="submit">Send message</Button>
            </form>
          </Card>
          <div className="space-y-6">
            <Card>
              <h2 className="text-xl font-semibold text-ink-900 dark:text-white">Contact details</h2>
              <p className="mt-4 flex gap-3 text-sm text-ink-500 dark:text-slate-400"><Mail size={18} /> {siteConfig.email}</p>
              <p className="mt-3 flex gap-3 text-sm text-ink-500 dark:text-slate-400"><Phone size={18} /> {siteConfig.phone}</p>
              <p className="mt-3 flex gap-3 text-sm text-ink-500 dark:text-slate-400"><MapPin size={18} /> {siteConfig.address}</p>
              <p className="mt-4 text-sm text-ink-500 dark:text-slate-400">Office hours: {siteConfig.officeHours}</p>
              <div className="mt-5 flex gap-3">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a className="icon-button" href={social.href} target="_blank" rel="noreferrer" aria-label={social.label} key={social.label}>
                      <Icon aria-hidden />
                    </a>
                  );
                })}
              </div>
            </Card>
            <Card className="min-h-56 bg-academic-grid bg-[length:36px_36px]">
              <h2 className="text-xl font-semibold text-ink-900 dark:text-white">Map placeholder</h2>
              <p className="mt-3 text-sm text-ink-500 dark:text-slate-400">{siteConfig.location}</p>
            </Card>
          </div>
        </div>
      </Section>
      <Section eyebrow="FAQ" title="Common questions">
        <div className="space-y-4">
          {faqs.map((faq) => (
            <details className="rounded-lg border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900" key={faq.question}>
              <summary className="cursor-pointer font-semibold text-ink-900 dark:text-white">{faq.question}</summary>
              <p className="mt-3 text-sm leading-6 text-ink-500 dark:text-slate-400">{faq.answer}</p>
            </details>
          ))}
        </div>
      </Section>
    </>
  );
}
