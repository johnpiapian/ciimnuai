import Head from 'next/head'
import { Inter } from '@next/font/google'

const inter = Inter({ subsets: ['latin'] })

// ✅ Book data array
const BOOKS = [
  {
    title: 'Zomi te thukhenna (Kam Hau Upadi)',
    description: 'Kham Hau thukhun(law) te leh ih Zo ngeina lam tawh ki sai laibu.',
    links: [
      { label: 'Read', url: 'assets/books/Zomite-thukhenna.pdf' },
    ],
  },
  {
    title: 'Naulak beh Tangthu',
    description:
      'Zomi te beh ki patkhiat dan leh beh tuamtuam tawh ki sai laibu hi. Amasa lang bang pen Zomi sunga beh te tawh ki sai leh ngeina tuamtuam tawh ki sai hi in, adang teng pen Naulak beh tawh ki sai thu tuamtuam hi.',
    links: [
      { label: 'Read', url: 'assets/books/Naulak-beh-tangthu.pdf' },
    ],
  },
  {
    title: 'The Chin Hills',
    description:
      'Mangkang (British) te in Khamtung gam ong uk cil lam un, amau ong muhna tawh ki tuak in ah na at uh ih ngeina, tatzia, leh Khamtung gam tawh kisai thu tuamtuam.',
    links: [
      { label: 'Read Vol I', url: 'assets/books/The-Chin-Hills-Vol-I.pdf' },
      { label: 'Read Vol II', url: 'assets/books/The-Chin-Hills-Vol-II.pdf' },
    ],
  },
  {
    title: 'Zo History by Vumson',
    description:
      'Zo, Pu Zo leh Khamtung gam a mi khempeuh cihna, ngeina leh tangthu tuamtuam tawh ki sai laibu hi.',
    links: [
      { label: 'Read', url: 'assets/books/Zo-History-by-Vumson.pdf' },
    ],
  },
  {
    title: 'Profile of a Burma Frontier Man',
    description:
      'Thu tampi gawm khawm a ah ki at laibu hi. Mangkang uksung leh ukkhit Chin state leh Kawlgam bup tawh ki sai thu tuamtuam.',
    links: [
      { label: 'Read Part I', url: 'assets/books/profile-of-a-burma-frontier-man-part-i.pdf' },
      { label: 'Read Part II', url: 'assets/books/profile-of-a-burma-frontier-man-part-ii.pdf' },
    ],
  },
]

export default function Books() {
  return (
    <>
      <Head>
        <title>Books - Ciimnuai</title>
        <meta name="description" content="Ciimnuai Zomi books" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={`${inter.className} bg-gray-50 min-h-screen`}>
        <div className="container mx-auto px-4 md:px-6 py-16">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
              Books
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Explore our collection of books preserving Zomi history, culture, and heritage.
            </p>
          </div>

          {/* Books Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {BOOKS.map((book, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md p-6 border border-gray-200"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight">
                  {book.title}
                </h3>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  {book.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {book.links.map((link, i) => (
                    <a
                      key={i}
                      href={link.url}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center px-4 py-2 bg-gray-800 text-white text-sm font-medium rounded hover:bg-gray-700 transition duration-200"
                    >
                      <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  )
}
