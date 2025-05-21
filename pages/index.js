import { useState } from 'react';
import dynamic from 'next/dynamic';
import PayhipButton from '../components/PayhipButton';

const ContactModal = dynamic(() => import('../components/ContactModal'), { ssr: false });

const features = [
  { title: 'Always with You', text: '24/7—When the heart hurts, someone’s listening.' },
  { title: 'Private & Anonymous', text: 'Share freely—no judgment, no exposure.' },
  { title: 'Real Empathy', text: 'Ella & Sam—two AI companions—offer warmth and practical insights.' },
  { title: 'A Fresh Start', text: 'Tools and guidance to grow from pain and rebuild your confidence.' },
];

const termsHtml = `
<ol class="list-decimal pl-4 space-y-4">
<li><strong>What We Are (and Aren’t)</strong><br/>
Connection Lines is a digital product that offers text-based emotional presence through AI-generated companions, Ella and Sam.<br/>
<ul class="list-disc pl-5">
<li>This is <strong>not</strong> therapy, not a crisis line, and not a replacement for professional mental‑health care.</li>
<li>We do <strong>not</strong> offer medical advice, diagnosis, or treatment of any kind.</li>
</ul></li>

<li><strong>Eligibility & Access</strong><br/>
This space is open to adults (18+) who need quiet emotional support.<br/>
<ul class="list-disc pl-5">
<li>If you are in immediate danger or a crisis, seek emergency services in your area.</li>
<li>If you do not have a place to sleep, you may request free access. No proof required. We trust you.</li>
</ul></li>

<li><strong>Payment & Refunds</strong><br/>
<ul class="list-disc pl-5">
<li>Monthly access: <strong>$19.90</strong></li>
<li>Yearly access: <strong>$199</strong> (save ~17 %)</li>
<li>Free plan for homeless: <strong>$0</strong></li>
</ul>
If within the first 7 days you feel the service didn’t support you emotionally, you may request a full refund — no questions asked.</li>

<li><strong>Community Respect</strong><br/>
You agree not to:
<ul class="list-disc pl-5">
<li>Use the product for harassment, abuse, or impersonation</li>
<li>Attempt to manipulate or extract content in ways not intended</li>
<li>Resell or redistribute access to others without permission</li>
</ul></li>

<li><strong>Termination & Abuse</strong><br/>
We reserve the right to revoke access if a user violates these terms or abuses the emotional safety of the platform.</li>
</ol>
`;

const privacyHtml = `<p>We do not collect or store your personal conversations. Forms and optional “About Me” info are used only to personalize your experience, and are never shared with third parties.</p>`;

export default function Home() {
  const [open, setOpen] = useState(false);
  const [showTerms, setShowTerms] = useState(false);
  const [showPrivacy, setShowPrivacy] = useState(false);

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
        <PayhipButton className="inline-block bg-purple-500 hover:bg-purple-600 text-white font-semibold px-8 py-4 rounded-md shadow-lg">
          Start Now – $19.90
        </PayhipButton>
      </section>

      {/* Features */}
      <section className="mx-auto max-w-4xl bg-white dark:bg-gray-800 rounded-3xl shadow-lg p-10 mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
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
      <section className="mx-auto max-w-3xl bg-white dark:bg-gray-800 rounded-3xl shadow-lg p-8 mt-10 italic text-xl text-gray-800 dark:text-gray-200">
        “After a week with Ella I finally slept through the night.”<br/>
        <span className="not-italic font-semibold text-base mt-2 inline-block">— Tom, 27</span>
      </section>

      {/* Conditional Sections */}
      {showTerms && (
        <section id="terms" className="mx-auto max-w-4xl bg-white dark:bg-gray-800 rounded-3xl shadow-lg p-10 mt-10">
          <h2 className="text-3xl font-bold mb-6 text-center">Terms of Use</h2>
          <div className="prose prose-slate max-w-none dark:prose-invert" dangerouslySetInnerHTML={{ __html: termsHtml }} />
          <div className="text-center mt-6">
            <button onClick={() => setShowTerms(false)} className="underline text-teal-600 dark:text-teal-400">Hide</button>
          </div>
        </section>
      )}

      {showPrivacy && (
        <section id="privacy" className="mx-auto max-w-4xl bg-white dark:bg-gray-800 rounded-3xl shadow-lg p-10 mt-10">
          <h2 className="text-3xl font-bold mb-6 text-center">Privacy Policy</h2>
          <div className="prose prose-slate max-w-none dark:prose-invert" dangerouslySetInnerHTML={{ __html: privacyHtml }} />
          <div className="text-center mt-6">
            <button onClick={() => setShowPrivacy(false)} className="underline text-teal-600 dark:text-teal-400">Hide</button>
          </div>
        </section>
      )}

      {/* Footer */}
      <footer className="py-10 text-center text-sm text-gray-500 dark:text-gray-400">
        <button onClick={() => setShowPrivacy(!showPrivacy)} className="mx-2 hover:underline">Privacy</button>
        <button onClick={() => setShowTerms(!showTerms)} className="mx-2 hover:underline">Terms</button>
        <button onClick={() => setOpen(true)} className="mx-2 hover:underline">Support</button>
        <div className="mt-4">© 2025 Connection Lines</div>
      </footer>

      {open && <ContactModal onClose={() => setOpen(false)} />}

      {/* Sticky Mobile CTA */}
      <div className="fixed bottom-0 inset-x-0 bg-purple-600 text-white text-center py-3 md:hidden z-40">
        <PayhipButton className="font-semibold">Start Now — $19.90</PayhipButton>
      </div>
    </main>
  );
}