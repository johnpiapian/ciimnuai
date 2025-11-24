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
      // { label: 'View Illustrations', url: 'assets/books/profile-of-a-burma-frontier-man-illustrations.pdf' }, 
    ],
  },
]

export default function Books() {
  return (
    <>
      <Head>
        <title>Ciimnuai</title>
        <meta name="description" content="Ciimnuai Zomi books" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={`${inter.className} bg-gray-100 py-12`}>
        <div className="container mx-auto px-4">
          <div className="overflow-x-auto">
            <table className="w-full divide-y table-fixed divide-gray-300 bg-white rounded-lg">
              <thead className="bg-gray-50 text-center">
                <tr>
                  <th className="px-6 py-2 text-xs text-gray-500">Title</th>
                  <th className="px-6 py-2 text-xs text-gray-500">Description</th>
                  <th className="px-6 py-2 text-xs text-gray-500">Source</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-300">
                {BOOKS.map((book, index) => (
                  <tr key={index}>
                    <td className="px-6 py-4 text-sm text-gray-500">{book.title}</td>
                    <td className="px-6 py-4 text-sm text-gray-500">{book.description}</td>
                    <td className="px-6 py-4 text-center text-sm text-gray-500">
                      {book.links.map((link, i) => (
                        <div key={i} className="underline">
                          <a href={link.url} target="_blank" rel="noreferrer">
                            {link.label}
                          </a>
                        </div>
                      ))}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </>
  )
}
