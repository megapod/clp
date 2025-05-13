import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Connection Lines</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className="flex items-center justify-center min-h-screen bg-[#f0f9ff] text-gray-800 px-4">
        <div className="max-w-xl w-full bg-white shadow-lg rounded-2xl p-8">
          <h1 className="text-4xl font-bold mb-2 text-center">Connection Lines</h1>
          <p className="text-center text-gray-600 mb-6">Your quiet place after a breakup</p>

          <h2 className="text-2xl font-semibold mb-4 text-center">
            Sometimes healing starts with one small click
          </h2>
          <p className="text-center mb-6">
            You’re not alone. Connection Lines is here to support you through the toughest moments after a breakup.
          </p>

          <div className="flex justify-center">
            <a
              href="https://shop.connection-lines.com/b/FS7uM"
              className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-8 rounded-full text-lg font-medium shadow-md transition"
            >
              Join Now
            </a>
          </div>
        </div>
      </main>
    </>
  );
}
