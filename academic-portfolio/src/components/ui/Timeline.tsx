import type { TimelineItem } from '../../types';

export function Timeline({ items }: { items: TimelineItem[] }) {
  return (
    <ol className="relative border-l border-slate-200 dark:border-slate-800">
      {items.map((item) => (
        <li className="ml-6 pb-10 last:pb-0" key={`${item.year}-${item.title}`}>
          <span className="absolute -left-2 mt-1 h-4 w-4 rounded-full border-4 border-white bg-signal-blue dark:border-slate-950" />
          <div className="flex flex-wrap items-center gap-3">
            <time className="rounded-full bg-slate-100 px-3 py-1 text-sm font-semibold text-ink-700 dark:bg-slate-800 dark:text-slate-200">
              {item.year}
            </time>
            {item.type && <span className="text-sm text-signal-teal">{item.type}</span>}
          </div>
          <h3 className="mt-3 text-xl font-semibold text-ink-900 dark:text-white">{item.title}</h3>
          <p className="mt-1 font-medium text-ink-700 dark:text-slate-300">{item.organization}</p>
          <p className="mt-2 leading-7 text-ink-500 dark:text-slate-400">{item.description}</p>
        </li>
      ))}
    </ol>
  );
}
