
import { useState } from 'react';
import PayhipButton from '../components/PayhipButton';

export default function Home() {
  const [showTerms, setShowTerms] = useState(false);
  const [showPrivacy, setShowPrivacy] = useState(false);
  const [showSupport, setShowSupport] = useState(false);

  const termsHtml = `<ol class="list-decimal pl-4 space-y-4">
<li><strong>What We Are (and Aren’t)</strong>...</li>
<li><strong>Eligibility & Access</strong>...</li>
<li><strong>Payment & Refunds</strong>...</li>
<li><strong>Community Respect</strong>...</li>
<li><strong>Termination & Abuse</strong>...</li>
</ol>`;
  const privacyHtml = `<p>We do not collect or store your personal conversations...</p>`;

  return (
    <main className="min-h-screen flex flex-col bg-lime-50 dark:bg-gray-900">
      {/* Hero */}
      <section className="mx-auto max-w-4xl bg-gradient-to-br from-lime-100 to-white dark:from-gray-800 dark:to-gray-700 rounded-3xl shadow-lg p-10 md:p-20 mt-8">
        <h1 className="text-4xl md:text-6xl font-bold text-teal-700 dark:text-teal-300 mb-6">
          Breakups don’t define you.
        </h1>
        <p className="text-lg md:text-2xl text-gray-700 dark:text-gray-200 mb-8">
          A calm, empathetic digital companion to get you through the breakup.
        </p>
        <p className="text-xs text-gray-500 dark:text-gray-400 mb-4">
          Powered by OpenAI • SSL Secure Checkout
        </p>
        <PayhipButton className="inline-block bg-indigo-700 hover:bg-indigo-800 text-white font-semibold px-8 py-4 rounded-md shadow-lg">
          Start Now – $19.90
        </PayhipButton>
      </section>

      {/* Features */}
      <section className="mx-auto max-w-4xl bg-white dark:bg-gray-800 rounded-3xl shadow-lg p-10 mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* ... feature items ... */}
      </section>

      {/* Testimonial */}
      <section className="mx-auto max-w-3xl bg-white dark:bg-gray-800 rounded-3xl shadow-lg p-8 mt-10 italic text-xl text-gray-800 dark:text-gray-200">
        “After a week with Ella I finally slept through the night.”<br/>
        <span className="not-italic font-semibold text-base mt-2 inline-block">— Tom, 27</span>
      </section>

      {/* Conditional Sections */}
      {showTerms && (
        className="text-gray-900 mx-auto max-w-4xl bg-white dark:bg-gray-800 rounded-3xl shadow-lg p-10 mt-10 dark:text-gray-100">
          <h2 className="text-3xl font-bold mb-6 text-center">Terms of Use</h2>
          <div className="prose prose-slate max-w-none dark:prose-invert" dangerouslySetInnerHTML={{ __html: termsHtml }} />
          <div className="text-center mt-6">
            <button onClick={() => setShowTerms(false)} className="underline text-teal-600 dark:text-teal-400">Hide</button>
          </div>
        </section>
      )}
      {showPrivacy && (
        className="text-gray-900 mx-auto max-w-4xl bg-white dark:bg-gray-800 rounded-3xl shadow-lg p-10 mt-10 dark:text-gray-100">
          <h2 className="text-3xl font-bold mb-6 text-center">Privacy Policy</h2>
          <div className="prose prose-slate max-w-none dark:prose-invert" dangerouslySetInnerHTML={{ __html: privacyHtml }} />
          <div className="text-center mt-6">
            <button onClick={() => setShowPrivacy(false)} className="underline text-teal-600 dark:text-teal-400">Hide</button>
          </div>
        </section>
      )}
      {showSupport && (
        className="text-gray-900 mx-auto max-w-4xl bg-white dark:bg-gray-800 rounded-3xl shadow-lg p-10 mt-10 dark:text-gray-100">
          <h2 className="text-3xl font-bold mb-6 text-center">Contact / Support</h2>
          <iframe
            src="https://shop.connection-lines.com/contact"
            title="Contact"
            className="w-full h-[600px] border-0 rounded-md"
          />
          <div className="text-center mt-6">
            <button onClick={() => setShowSupport(false)} className="underline text-teal-600 dark:text-teal-400">Hide</button>
          </div>
        </section>
      )}

      {/* Footer */}
      <footer className="py-10 text-center text-sm text-gray-500 dark:text-gray-400">
        <button onClick={() => setShowPrivacy(!showPrivacy)} className="mx-2 hover:underline">Privacy</button>
        <button onClick={() => setShowTerms(!showTerms)} className="mx-2 hover:underline">Terms</button>
        <button onClick={() => setShowSupport(!showSupport)} className="mx-2 hover:underline">Support</button>
        <div className="mt-4">© 2025 Connection Lines</div>
      </footer>
    </main>
  );
}
