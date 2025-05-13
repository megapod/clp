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
      </main>
    </>
  );
}
