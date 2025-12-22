import Head from 'next/head'
import { Inter } from '@next/font/google'

const inter = Inter({ subsets: ['latin'] })

const LINKS = [
  { name: 'Zogam', url: 'http://www.zogam.org/', description: 'Thu tuamtuam kicing a postna' },
  { name: 'Zomi daily', url: 'https://zomidaily.org/', description: 'News leh thudang tuamtuam postna' },
  { name: 'Zogam library', url: 'http://zomilibrary.com/', description: 'Laibu tuamtuam kepcingna' },
  { name: 'Tongdot', url: 'https://www.tongdot.com/', description: 'Pau khiatna lam tawh kisai' },
  { name: 'Zaideih', url: 'https://www.zaideih.com/', description: 'La lam tawh kisai' },
]

export default function Extra() {
  return (
    <>
      <Head>
        <title>Extra Resources - Ciimnuai</title>
        <meta name="description" content="Relevant Zomi websites" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={`${inter.className} bg-gray-50 min-h-screen`}>
        <div className="container mx-auto px-4 md:px-6 py-16">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
              Extra Resources
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover additional resources and websites dedicated to preserving and sharing Zomi culture and heritage.
            </p>
          </div>

          {/* Links Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {LINKS.map((link, idx) => (
              <a
                key={idx}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white rounded-lg shadow-md hover:shadow-lg transition duration-200 p-6 border border-gray-200 hover:border-gray-300"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-bold text-gray-900 hover:text-gray-700 transition duration-200 mb-2">
                      {link.name}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {link.description}
                    </p>
                  </div>
                </div>
              </a>
            ))}
          </div>

          {/* Additional Info */}
          <div className="mt-16 text-center">
            <div className="bg-white rounded-lg shadow-md p-8 border border-gray-200">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Explore More</h2>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                These carefully selected resources provide additional insights into Zomi culture, history, and contemporary life.
                Each website offers unique perspectives and valuable information for those interested in learning more about the Zomi heritage.
              </p>
              <div className="flex justify-center">
                <div className="inline-flex items-center px-6 py-3 bg-gray-800 text-white font-semibold rounded hover:bg-gray-700 transition duration-200">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9" />
                  </svg>
                  Discover Zomi Heritage
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
