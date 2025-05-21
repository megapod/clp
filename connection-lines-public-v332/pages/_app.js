
import '../styles/globals.css';
import { useEffect, useState } from 'react';
import CookieBanner from '../components/CookieBanner';

export default function MyApp({ Component, pageProps }) {
  const [theme, setTheme] = useState('light');

  // initialize theme
  useEffect(() => {
    const stored = window.localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const initial = stored ? stored : prefersDark ? 'dark' : 'light';
    setTheme(initial);
    if (initial === 'dark') {
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    window.localStorage.setItem('theme', newTheme);
    if (newTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  return (
    <>
      <Component {...pageProps} />
      <CookieBanner />
      <button
        onClick={toggleTheme}
        aria-label="Toggle Theme"
        className="fixed top-4 right-4 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 p-2 rounded-full shadow-md"
      >
        {theme === 'dark' ? '🌙' : '☀️'}
      </button>
    </>
  );
}
