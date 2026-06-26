import { Menu, Monitor, Moon, Search, Sun, X } from 'lucide-react';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { navItems, siteConfig } from '../../config/site';
import type { ThemePreference } from '../../types';
import { GlobalSearch } from './Search';

export function Header({ theme, setTheme }: { theme: ThemePreference; setTheme: (theme: ThemePreference) => void }) {
  const [open, setOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  const themeOptions: { value: ThemePreference; icon: typeof Sun; label: string }[] = [
    { value: 'light', icon: Sun, label: 'Light theme' },
    { value: 'dark', icon: Moon, label: 'Dark theme' },
    { value: 'system', icon: Monitor, label: 'System theme' }
  ];

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-40 border-b border-slate-200/70 bg-white/85 backdrop-blur-xl dark:border-slate-800/80 dark:bg-slate-950/85">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
          <NavLink className="min-w-0 text-sm font-semibold uppercase tracking-[0.18em] text-ink-900 dark:text-white" to="/">
            {siteConfig.shortName}
          </NavLink>
          <nav className="hidden items-center gap-1 lg:flex" aria-label="Main navigation">
            {navItems.slice(0, 9).map((item) => (
              <NavLink
                className={({ isActive }) =>
                  `rounded-md px-3 py-2 text-sm font-medium transition ${
                    isActive ? 'bg-slate-100 text-signal-blue dark:bg-slate-800' : 'text-ink-700 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800'
                  }`
                }
                to={item.path}
                key={item.path}
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <button className="icon-button" type="button" aria-label="Open search" onClick={() => setSearchOpen(true)}>
              <Search aria-hidden size={19} />
            </button>
            <div className="hidden rounded-lg border border-slate-200 p-1 dark:border-slate-800 sm:flex" aria-label="Theme controls">
              {themeOptions.map((option) => {
                const Icon = option.icon;
                return (
                  <button
                    className={`rounded-md p-2 transition ${theme === option.value ? 'bg-ink-900 text-white dark:bg-white dark:text-ink-900' : 'text-ink-700 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800'}`}
                    key={option.value}
                    type="button"
                    aria-label={option.label}
                    onClick={() => setTheme(option.value)}
                  >
                    <Icon aria-hidden size={16} />
                  </button>
                );
              })}
            </div>
            <button className="icon-button lg:hidden" type="button" aria-label="Open menu" onClick={() => setOpen(true)}>
              <Menu aria-hidden size={20} />
            </button>
          </div>
        </div>
      </header>

      {open && (
        <div className="fixed inset-0 z-50 bg-ink-900/50 backdrop-blur-sm lg:hidden" role="dialog" aria-modal="true">
          <div className="ml-auto h-full w-full max-w-sm overflow-y-auto bg-white p-6 shadow-soft dark:bg-slate-950">
            <div className="mb-6 flex items-center justify-between">
              <span className="font-semibold text-ink-900 dark:text-white">{siteConfig.shortName}</span>
              <button className="icon-button" type="button" aria-label="Close menu" onClick={() => setOpen(false)}>
                <X aria-hidden size={20} />
              </button>
            </div>
            <nav className="grid gap-1" aria-label="Mobile navigation">
              {navItems.map((item) => (
                <NavLink
                  className="rounded-md px-3 py-3 text-sm font-medium text-ink-700 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800"
                  to={item.path}
                  key={item.path}
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </NavLink>
              ))}
            </nav>
          </div>
        </div>
      )}
      <GlobalSearch open={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  );
}
