import { ArrowUp, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import { navItems, siteConfig, socialLinks } from '../../config/site';
import { Button } from '../ui/Button';

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-950">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-[1.2fr_0.8fr_1fr] lg:px-8">
        <div>
          <h2 className="text-xl font-semibold text-ink-900 dark:text-white">{siteConfig.name}</h2>
          <p className="mt-3 max-w-sm leading-7 text-ink-500 dark:text-slate-400">{siteConfig.bio}</p>
          <div className="mt-5 flex gap-3">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <a className="icon-button" href={social.href} aria-label={social.label} target="_blank" rel="noreferrer" key={social.label}>
                  <Icon aria-hidden />
                </a>
              );
            })}
          </div>
        </div>
        <nav aria-label="Footer navigation">
          <h3 className="font-semibold text-ink-900 dark:text-white">Explore</h3>
          <div className="mt-4 grid grid-cols-2 gap-2">
            {navItems.slice(0, 12).map((item) => (
              <Link className="text-sm text-ink-500 hover:text-signal-blue dark:text-slate-400" to={item.path} key={item.path}>
                {item.label}
              </Link>
            ))}
          </div>
        </nav>
        <div>
          <h3 className="font-semibold text-ink-900 dark:text-white">Newsletter</h3>
          <p className="mt-3 text-sm leading-6 text-ink-500 dark:text-slate-400">Placeholder for research updates, papers, and teaching notes.</p>
          <form
            className="mt-4 flex gap-2"
            onSubmit={(event) => {
              event.preventDefault();
              window.dispatchEvent(new CustomEvent('toast', { detail: 'Newsletter signup placeholder saved.' }));
            }}
          >
            <input className="field" type="email" required placeholder="Email address" aria-label="Email address" />
            <Button type="submit" ariaLabel="Subscribe" icon={<Mail size={16} />}>
              Join
            </Button>
          </form>
          <button className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-signal-blue" type="button" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <ArrowUp size={16} aria-hidden /> Back to top
          </button>
        </div>
      </div>
      <div className="border-t border-slate-200 py-5 text-center text-sm text-ink-500 dark:border-slate-800 dark:text-slate-400">
        Copyright {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
      </div>
    </footer>
  );
}
