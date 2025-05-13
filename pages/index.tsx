import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Connection Lines</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className="min-h-screen flex flex-col items-center justify-start bg-gradient-to-b from-white to-blue-50 text-gray-800 p-6">
        <header className="w-full max-w-4xl mb-8 text-center">
          <h1 className="text-4xl font-bold mb-2">Connection Lines</h1>
          <p className="text-lg text-gray-600">Your quiet place after a breakup</p>
        </header>

        <section className="w-full max-w-2xl bg-white p-6 rounded-2xl shadow-md mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-center">
            Sometimes healing starts with one small click
          </h2>
          <p className="text-center text-gray-700 mb-6">
            You’re not alone. Connection Lines is here to support you through the toughest moments after a breakup.
            No pressure, no judgment – just quiet support.
          </p>
          <div className="flex justify-center">
            <a
              href="https://shop.connection-lines.com/b/FS7uM"
              className="bg-blue-500 hover:bg-blue-600 text-white text-lg font-medium py-3 px-8 rounded-full shadow-md transition"
            >
              Join Now
            </a>
          </div>
        </section>

        <section className="w-full max-w-2xl space-y-6 text-center mb-12">
          <h2 className="text-xl font-semibold">How it works</h2>
          <p>
            You’ll get access to a calm, supportive daily tool – designed to hold your hand after a breakup.
          </p>
          <p>
            Meet Ayala – a gentle, guided space that helps you reflect and heal. Slowly. Quietly. At your own pace.
          </p>
        </section>

        <section className="w-full max-w-2xl space-y-4 text-center">
          <h2 className="text-xl font-semibold">Common questions</h2>
          <p><strong>Do I need therapy for this?</strong><br/>Nope. It’s a soft, supportive tool – not therapy.</p>
          <p><strong>Is it private?</strong><br/>Completely. No tracking. No judging. No pushing.</p>
        </section>

        <footer className="mt-16 text-sm text-gray-500 text-center">
          <p>Need help? <a className="underline" href="https://shop.connection-lines.com/contact">Contact Support</a></p>
        </footer>
      </main>
    </>
  );
}
