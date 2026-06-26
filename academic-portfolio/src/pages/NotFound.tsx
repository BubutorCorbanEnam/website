import { Button } from '../components/ui/Button';

export function NotFound() {
  return (
    <section className="mx-auto flex min-h-[70vh] max-w-3xl flex-col items-center justify-center px-4 pt-28 text-center">
      <p className="text-sm font-semibold uppercase tracking-[0.18em] text-signal-teal">404</p>
      <h1 className="mt-4 text-5xl font-semibold text-ink-900 dark:text-white">Page not found</h1>
      <p className="mt-4 text-lg leading-8 text-ink-500 dark:text-slate-400">The page may have moved, or the placeholder route has not been added yet.</p>
      <div className="mt-8">
        <Button href="/">Return home</Button>
      </div>
    </section>
  );
}
