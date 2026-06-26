import { Link } from 'react-router-dom';
import type { ReactNode } from 'react';

type ButtonProps = {
  children: ReactNode;
  href?: string;
  variant?: 'primary' | 'secondary' | 'ghost';
  icon?: ReactNode;
  type?: 'button' | 'submit';
  onClick?: () => void;
  ariaLabel?: string;
};

const variants = {
  primary: 'bg-ink-900 text-white hover:bg-signal-blue dark:bg-white dark:text-ink-900 dark:hover:bg-slate-200',
  secondary:
    'border border-slate-300 bg-white text-ink-900 hover:border-signal-blue hover:text-signal-blue dark:border-slate-700 dark:bg-slate-900 dark:text-white',
  ghost: 'text-ink-700 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-800'
};

export function Button({ children, href, variant = 'primary', icon, type = 'button', onClick, ariaLabel }: ButtonProps) {
  const className = `inline-flex min-h-11 items-center justify-center gap-2 rounded-lg px-4 py-2 text-sm font-semibold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-signal-blue ${variants[variant]}`;

  if (href) {
    const external = href.startsWith('http') || href.startsWith('/downloads');
    if (external) {
      return (
        <a className={className} href={href} aria-label={ariaLabel} target={href.startsWith('http') ? '_blank' : undefined} rel="noreferrer">
          {icon}
          {children}
        </a>
      );
    }
    return (
      <Link className={className} to={href} aria-label={ariaLabel}>
        {icon}
        {children}
      </Link>
    );
  }

  return (
    <button className={className} type={type} onClick={onClick} aria-label={ariaLabel}>
      {icon}
      {children}
    </button>
  );
}
