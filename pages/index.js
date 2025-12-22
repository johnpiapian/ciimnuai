import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { Inter } from "@next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Ciimnuai</title>
        <meta name="description" content="Ciimnuai Zomi history and culture" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main className={`${inter.className} bg-gray-50 min-h-screen`}>
        {/* Hero Section */}
        <section className="container mx-auto px-4 md:px-6 py-16 md:py-24">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">

            {/* Left Text Column */}
            <div className="flex flex-col w-full lg:w-1/2 justify-center items-start">
              <h1 className="font-bold text-4xl md:text-5xl mb-6 text-gray-900">
                Welcome
              </h1>

              <p className="leading-relaxed mb-8 text-gray-700 text-lg">
                Hih website pen ciimnuai vontawi Zomi te thu tawh kisai thu tuamtuamte
                kepcingna ding in a kigel ahih man in, kep huai theih huai a tuamtuamte
                nong behlap pih nading un a kua maciat tung ah ong kingen hi.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/about"
                  className="inline-flex items-center justify-center bg-gray-900 text-white font-semibold py-3 px-6 rounded hover:bg-gray-800 transition duration-200"
                >
                  Learn more
                </Link>
                <Link
                  href="/gallery"
                  className="inline-flex items-center justify-center bg-white text-gray-900 font-semibold py-3 px-6 rounded border border-gray-300 hover:bg-gray-50 transition duration-200"
                >
                  View Gallery
                </Link>
              </div>
            </div>

            {/* Right Image Column */}
            <div className="w-full lg:w-1/2 flex justify-center">
              <Image
                src="/imgs/memorial_stone_at_historical_site_of_ciimnuai.jpeg"
                alt="Memorial stone at historical site of Ciimnuai"
                width={600}
                height={450}
                className="rounded-lg shadow-lg w-full h-auto object-cover"
                priority
              />
            </div>

          </div>
        </section>

        {/* Features Section */}
        <section className="bg-white py-16 md:py-20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Explore Zomi Heritage</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Discover the rich cultural traditions, history, and legacy of the Zomi people through our curated content.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center p-6 bg-gray-50 rounded-lg">
                <div className="w-16 h-16 bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">History</h3>
                <p className="text-gray-600">Learn about the fascinating history and origins of the Zomi people.</p>
              </div>

              <div className="text-center p-6 bg-gray-50 rounded-lg">
                <div className="w-16 h-16 bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Culture</h3>
                <p className="text-gray-600">Explore the vibrant traditions, customs, and cultural heritage.</p>
              </div>

              <div className="text-center p-6 bg-gray-50 rounded-lg">
                <div className="w-16 h-16 bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Legacy</h3>
                <p className="text-gray-600">Preserve and celebrate the enduring legacy of Zomi heritage.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
