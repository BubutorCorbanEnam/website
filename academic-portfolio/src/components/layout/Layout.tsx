import { useEffect, useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Header } from './Header';
import { Footer } from './Footer';
import { useTheme } from '../../hooks/useTheme';
import { useScrollProgress } from '../../hooks/useScrollProgress';
import { personJsonLd } from '../../utils/seo';

export function Layout() {
  const { theme, setTheme } = useTheme();
  const progress = useScrollProgress();
  const location = useLocation();
  const [toast, setToast] = useState('');
  const [cookieVisible, setCookieVisible] = useState(() => localStorage.getItem('cookie-consent') !== 'accepted');

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname]);

  useEffect(() => {
    const handler = (event: Event) => {
      setToast((event as CustomEvent<string>).detail);
      window.setTimeout(() => setToast(''), 2600);
    };
    window.addEventListener('toast', handler);
    return () => window.removeEventListener('toast', handler);
  }, []);

  useEffect(() => {
    const updateCursor = (event: PointerEvent) => {
      document.documentElement.style.setProperty('--cursor-x', `${event.clientX}px`);
      document.documentElement.style.setProperty('--cursor-y', `${event.clientY}px`);
    };
    window.addEventListener('pointermove', updateCursor, { passive: true });
    return () => window.removeEventListener('pointermove', updateCursor);
  }, []);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }} />
      <div className="fixed left-0 top-0 z-[60] h-1 bg-signal-blue transition-all" style={{ width: `${progress}%` }} aria-hidden />
      <Header theme={theme} setTheme={setTheme} />
      <main id="main-content" tabIndex={-1}>
        <Outlet />
      </main>
      <Footer />
      <div className="pointer-events-none fixed inset-0 z-30 hidden mix-blend-difference lg:block custom-cursor" aria-hidden />
      {toast && (
        <div className="fixed bottom-5 right-5 z-50 rounded-lg bg-ink-900 px-4 py-3 text-sm font-semibold text-white shadow-soft dark:bg-white dark:text-ink-900" role="status">
          {toast}
        </div>
      )}
      {cookieVisible && (
        <div className="fixed bottom-4 left-4 z-50 max-w-md rounded-lg border border-slate-200 bg-white p-4 shadow-soft dark:border-slate-800 dark:bg-slate-950">
          <p className="text-sm leading-6 text-ink-700 dark:text-slate-300">
            This site uses essential local storage for theme preference and placeholder consent. No tracking services are configured.
          </p>
          <button
            className="mt-3 rounded-md bg-ink-900 px-4 py-2 text-sm font-semibold text-white dark:bg-white dark:text-ink-900"
            type="button"
            onClick={() => {
              localStorage.setItem('cookie-consent', 'accepted');
              setCookieVisible(false);
            }}
          >
            Accept
          </button>
        </div>
      )}
    </>
  );
}
