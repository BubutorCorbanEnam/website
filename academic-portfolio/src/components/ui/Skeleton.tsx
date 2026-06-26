export function SkeletonLoader() {
  return (
    <div className="grid gap-4 sm:grid-cols-3" aria-label="Loading placeholder">
      {[0, 1, 2].map((item) => (
        <div className="h-36 animate-pulse rounded-lg bg-slate-200 dark:bg-slate-800" key={item} />
      ))}
    </div>
  );
}
