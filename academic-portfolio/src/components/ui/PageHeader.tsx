import { motion } from 'framer-motion';
import { ChevronRight, Home } from 'lucide-react';
import { Link } from 'react-router-dom';

type PageHeaderProps = {
  title: string;
  description: string;
};

export function PageHeader({ title, description }: PageHeaderProps) {
  return (
    <header className="border-b border-slate-200 bg-slate-50/80 pt-28 dark:border-slate-800 dark:bg-slate-950/70">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2 text-sm text-ink-500 dark:text-slate-400">
          <Link className="inline-flex items-center gap-1 hover:text-signal-blue" to="/">
            <Home aria-hidden size={16} /> Home
          </Link>
          <ChevronRight aria-hidden size={16} />
          <span aria-current="page">{title}</span>
        </nav>
        <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <h1 className="max-w-4xl text-balance text-4xl font-semibold text-ink-900 dark:text-white sm:text-5xl">{title}</h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-ink-700 dark:text-slate-300">{description}</p>
        </motion.div>
      </div>
    </header>
  );
}
