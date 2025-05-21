
import '../styles/globals.css';
import { useEffect, useState } from 'react';
import CookieBanner from '../components/CookieBanner';

export default function MyApp({ Component, pageProps }) {
  const [theme, setTheme] = useState('light');
  useEffect(() => {
    const stored = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const init = stored || (prefersDark ? 'dark' : 'light');
    setTheme(init);
    if (init === 'dark') document.documentElement.classList.add('dark');
  }, []);
  const toggle = () => {
    const next = theme === 'dark' ? 'light' : 'dark';
    setTheme(next);
    localStorage.setItem('theme', next);
    document.documentElement.classList.toggle('dark', next === 'dark');
  };
  return (
    <>
      <Component {...pageProps} />
      <CookieBanner />
      <button onClick={toggle} className="fixed top-4 right-4 bg-gray-200 dark:bg-gray-700 p-2 rounded-full shadow-md">
        {theme === 'dark' ? '🌙' : '☀️'}
      </button>
    </>
  );
}
