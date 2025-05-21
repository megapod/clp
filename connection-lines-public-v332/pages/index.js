
import { useState } from 'react';
import dynamic from 'next/dynamic';

const ContactModal = dynamic(() => import('../components/ContactModal'), { ssr: false });

export default function Home() {
  const [open, setOpen] = useState(false);

  return (
    <main className="min-h-screen flex flex-col">
      {/* Hero */}
      <section
        id="hero"
        className="flex-1 flex flex-col items-center justify-center text-center px-10 md:px-20 py-20 gap-6
                   bg-gradient-to-b from-teal-100 via-white to-purple-50
                   dark:bg-gradient-to-b dark:from-gray-900 dark:via-gray-800 dark:to-gray-700">
        <h1 className="text-4xl md:text-6xl font-bold text-teal-600 dark:text-teal-300">Breakups don’t define you.</h1>
        <p className="text-lg md:text-2xl text-purple-700 dark:text-purple-300 max-w-2xl">
          Get calm, clarity and a plan—starting now.
        </p>
        <button
          onClick={() => setOpen(true)}
          className="bg-teal-500 hover:bg-teal-600 text-white text-lg px-8 py-4 rounded-md shadow-lg"
        >
          Start&nbsp;Now – $19.90
        </button>
      </section>

      {/* Footer with Support */}
      <footer className="py-6 text-center dark:bg-gray-900">
        <button onClick={() => setOpen(true)} className="text-teal-600 dark:text-teal-400 underline">
          Support / Contact
        </button>
      </footer>

      {/* Legal text */}
      <section id="privacy" className="px-10 md:px-20 py-10 bg-white dark:bg-gray-900 dark:text-gray-100">
        <h2 className="text-2xl font-semibold mb-4">Privacy Policy</h2>
        <p className="text-sm leading-relaxed">
          This is a placeholder for the full privacy policy text. Replace with your actual content.
        </p>
      </section>

      <section id="terms" className="px-10 md:px-20 py-10 bg-gray-50 dark:bg-gray-800 dark:text-gray-100">
        <h2 className="text-2xl font-semibold mb-4">Terms of Use</h2>
        <p className="text-sm leading-relaxed">
          This is a placeholder for the full terms of use. Replace with your actual content.
        </p>
      </section>

      {open && <ContactModal onClose={() => setOpen(false)} />}
    </main>
  );
}
