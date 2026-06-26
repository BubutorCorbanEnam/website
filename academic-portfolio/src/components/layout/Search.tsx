import { Search, X } from 'lucide-react';
import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { searchSite } from '../../utils/search';

export function GlobalSearch({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [query, setQuery] = useState('');
  const results = useMemo(() => searchSite(query), [query]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 bg-ink-900/60 p-4 backdrop-blur-sm" role="dialog" aria-modal="true" aria-label="Global search">
      <div className="mx-auto mt-24 max-w-2xl rounded-lg bg-white p-4 shadow-soft dark:bg-slate-950">
        <div className="flex items-center gap-3 border-b border-slate-200 pb-3 dark:border-slate-800">
          <Search aria-hidden className="text-ink-500" />
          <input
            className="min-h-11 flex-1 bg-transparent text-base text-ink-900 outline-none placeholder:text-ink-500 dark:text-white"
            autoFocus
            placeholder="Search publications, projects, posts..."
            value={query}
            onChange={(event) => setQuery(event.target.value)}
          />
          <button className="icon-button" type="button" aria-label="Close search" onClick={onClose}>
            <X aria-hidden />
          </button>
        </div>
        <div className="max-h-96 overflow-y-auto py-3">
          {query && results.length === 0 && <p className="p-3 text-sm text-ink-500 dark:text-slate-400">No results found.</p>}
          {results.map((item) => (
            <Link
              className="block rounded-lg p-3 transition hover:bg-slate-100 dark:hover:bg-slate-900"
              to={item.href}
              onClick={onClose}
              key={`${item.type}-${item.title}`}
            >
              <span className="text-xs font-semibold uppercase tracking-[0.16em] text-signal-teal">{item.type}</span>
              <strong className="mt-1 block text-ink-900 dark:text-white">{item.title}</strong>
              <span className="mt-1 block text-sm text-ink-500 dark:text-slate-400">{item.description}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
