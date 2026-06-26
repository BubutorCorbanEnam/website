import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

type SectionProps = {
  eyebrow?: string;
  title?: string;
  description?: string;
  children: ReactNode;
  className?: string;
};

export function Section({ eyebrow, title, description, children, className = '' }: SectionProps) {
  return (
    <section className={`mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8 ${className}`}>
      {(eyebrow || title || description) && (
        <motion.div
          className="mb-10 max-w-3xl"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
        >
          {eyebrow && <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-signal-teal">{eyebrow}</p>}
          {title && <h2 className="text-balance text-3xl font-semibold text-ink-900 dark:text-white sm:text-4xl">{title}</h2>}
          {description && <p className="mt-4 text-lg leading-8 text-ink-700 dark:text-slate-300">{description}</p>}
        </motion.div>
      )}
      {children}
    </section>
  );
}
