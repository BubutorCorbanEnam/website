import { Search } from 'lucide-react';
import { useMemo, useState } from 'react';
import { Card } from '../components/ui/Card';
import { PageHeader } from '../components/ui/PageHeader';
import { Section } from '../components/ui/Section';
import { blogPosts } from '../data/content';

export function Blog() {
  const [query, setQuery] = useState('');
  const filtered = useMemo(
    () => blogPosts.filter((post) => `${post.title} ${post.excerpt} ${post.category} ${post.tags.join(' ')}`.toLowerCase().includes(query.toLowerCase())),
    [query]
  );

  return (
    <>
      <PageHeader title="Blog" description="Research notes, methods essays, reading lists, tutorials, and professional updates." />
      <Section>
        <label className="mb-8 flex max-w-xl items-center gap-3 rounded-lg border border-slate-200 bg-white px-4 py-3 dark:border-slate-800 dark:bg-slate-900">
          <Search aria-hidden className="text-ink-500" />
          <span className="sr-only">Search blog posts</span>
          <input className="flex-1 bg-transparent outline-none" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search articles..." />
        </label>
        <div className="grid gap-6 md:grid-cols-3">
          {filtered.map((post) => (
            <Card key={post.title} className={post.featured ? 'md:col-span-2' : ''}>
              <img className="aspect-video w-full rounded-md object-cover" src={post.image} alt="" />
              <p className="mt-4 text-xs font-semibold uppercase tracking-[0.16em] text-signal-teal">{post.category}</p>
              <h2 className="mt-2 text-xl font-semibold text-ink-900 dark:text-white">{post.title}</h2>
              <p className="mt-2 leading-7 text-ink-500 dark:text-slate-400">{post.excerpt}</p>
              <p className="mt-3 text-sm text-ink-500 dark:text-slate-400">
                {post.date} · {post.readingTime}
              </p>
            </Card>
          ))}
        </div>
        <div className="mt-8 flex justify-center gap-2" aria-label="Pagination">
          {[1, 2, 3].map((page) => (
            <button className="rounded-md border border-slate-200 px-4 py-2 text-sm font-semibold dark:border-slate-800" type="button" key={page}>
              {page}
            </button>
          ))}
        </div>
      </Section>
    </>
  );
}
