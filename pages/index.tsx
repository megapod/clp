import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Connection Lines</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className="min-h-screen flex flex-col items-center justify-start bg-gradient-to-b from-white to-blue-50 text-gray-800 p-6">
        <h1 className="text-4xl font-bold text-center mb-4">Connection Lines</h1>
        <p className="text-center max-w-xl text-lg mb-6">
          A calm, simple, and non-judgmental space to help you through the pain of a breakup.
          You don’t have to fix everything now. Just start here.
        </p>
        <a
          href="https://shop.connection-lines.com/b/FS7uM"
          className="bg-blue-500 hover:bg-blue-600 text-white text-lg font-medium py-3 px-8 rounded-full shadow-md transition"
        >
          Join Now
        </a>

        <section className="mt-12 max-w-2xl text-center space-y-6">
          <h2 className="text-2xl font-semibold">How it works</h2>
          <p>
            You’ll get access to a calm, supportive daily tool – designed to hold your hand after a breakup. No pressure, no noise.
          </p>
          <p>
            Every day, you’ll meet Ayala – a gentle, guided space that helps you reflect and heal. Slowly. Quietly. At your own pace.
          </p>
        </section>

        <section className="mt-12 max-w-2xl text-center space-y-4">
          <h2 className="text-xl font-semibold">Common questions</h2>
          <p><strong>Do I need therapy for this?</strong><br/>Nope. It’s a soft, supportive tool – not a replacement for therapy, but not a heavy process either.</p>
          <p><strong>Is it private?</strong><br/>Completely. No tracking, no judging, no pushing.</p>
        </section>

        <footer className="mt-16 text-sm text-gray-500 text-center">
          <p>Need help? <a className="underline" href="https://shop.connection-lines.com/contact">Contact Support</a></p>
        </footer>
      </main>
    </>
  );
}
