
import { useState } from 'react';
import dynamic from 'next/dynamic';
import PayhipButton from '../components/PayhipButton';

const ContactModal = dynamic(() => import('../components/ContactModal'), { ssr: false });

const features = [
  { title: "Always with You", text: "24/7—When the heart hurts, someone’s listening." },
  { title: "Private & Anonymous", text: "Share freely—no judgment, no exposure." },
  { title: "Real Empathy", text: "Ella & Sam—two AI companions—offer warmth and practical insights." },
  { title: "A Fresh Start", text: "Tools and guidance to grow from pain and rebuild your confidence." },
];

export default function Home() {
  const [open, setOpen] = useState(false);
  return (
    <main className="min-h-screen flex flex-col bg-lime-50 dark:bg-gray-900">
      {/* Hero */}
      <section className="mx-auto max-w-4xl w-full bg-gradient-to-br from-lime-100 to-white dark:from-gray-800 dark:to-gray-700 rounded-3xl shadow-lg p-10 md:p-20 mt-8">
        <h1 className="text-4xl md:text-6xl font-bold text-teal-700 dark:text-teal-300 mb-6">
          You’re not broken—<br/>just overwhelmed
        </h1>
        <p className="text-lg md:text-2xl text-gray-700 dark:text-gray-200 max-w-prose mb-8">
          A calm, empathetic digital companion to get you through the breakup.
        </p>
        <p className="text-xs text-gray-500 dark:text-gray-400 mb-4">Powered by OpenAI • SSL Secure Checkout</p>
        <PayhipButton
          className="inline-block bg-purple-500 hover:bg-purple-600 text-white font-semibold px-8 py-4 rounded-md shadow-lg"
        >
          Start Now – $19.90
        </PayhipButton>
      </section>

      {/* Features */}
      <section className="mx-auto max-w-4xl w-full bg-white dark:bg-gray-800 rounded-3xl shadow-lg p-10 mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
        {features.map((f, i) => (
          <div key={i} className="flex gap-4">
            <div className="h-8 w-8 flex items-center justify-center rounded-full border-2 border-teal-400 text-teal-600 dark:text-teal-300 dark:border-teal-300">
              ✓
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-gray-100">{f.title}</h3>
              <p className="text-sm text-gray-700 dark:text-gray-300">{f.text}</p>
            </div>
          </div>
        ))}
      </section>

      {/* Testimonial */}
      <section className="mx-auto max-w-3xl w-full bg-white dark:bg-gray-800 rounded-3xl shadow-lg p-8 mt-10 italic text-xl text-gray-800 dark:text-gray-200">
        “After a week with Ella I finally slept through the night.”<br/>
        <span className="not-italic font-semibold text-base mt-2 inline-block">— Tom, 27</span>
      </section>

      {/* Contact */}
      <footer className="py-10 text-center text-sm text-gray-500 dark:text-gray-400">
        <a href="#privacy" className="mx-2 hover:underline">Privacy</a>
        <a href="#terms" className="mx-2 hover:underline">Terms</a>
        <button onClick={() => setOpen(true)} className="mx-2 hover:underline">Support</button>
        <div className="mt-4">© 2025 Connection Lines</div>
      </footer>

      {open && <ContactModal onClose={() => setOpen(false)} />}

      {/* Sticky Bottom CTA */}
      <div className="fixed bottom-0 inset-x-0 bg-purple-600 text-white text-center py-3 md:hidden z-40">
        <PayhipButton className="font-semibold">Start Now — $19.90</PayhipButton>
      </div>
    </main>
  );
}
