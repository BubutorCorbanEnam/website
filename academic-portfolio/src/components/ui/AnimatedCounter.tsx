import { useCounter } from '../../hooks/useCounter';

export function AnimatedCounter({ value, label }: { value: number; label: string }) {
  const count = useCounter(value);
  return (
    <div className="rounded-lg border border-slate-200 bg-white/80 p-5 text-center shadow-sm backdrop-blur dark:border-slate-800 dark:bg-slate-900/80">
      <strong className="block text-3xl font-semibold text-ink-900 dark:text-white">{count}+</strong>
      <span className="mt-1 block text-sm text-ink-500 dark:text-slate-400">{label}</span>
    </div>
  );
}
