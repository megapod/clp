import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Connection Lines</title>
      </Head>
      <main className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-white to-blue-50 text-gray-800 p-4">
        <h1 className="text-3xl md:text-5xl font-bold mb-4 text-center">
          Sometimes healing starts with one small click
        </h1>
        <p className="text-lg text-center max-w-xl mb-6">
          You're not alone. Connection Lines is here to support you through the toughest moments after a breakup.
        </p>
        <a
          href="https://shop.connection-lines.com/b/FS7uM"
          className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-6 rounded-full transition"
        >
          Start Now
        </a>
      </main>
    </>
  );
}
