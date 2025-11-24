import Head from 'next/head'
import { Inter } from '@next/font/google'

const inter = Inter({ subsets: ['latin'] })

const LINKS = [
  { name: 'Zogam', url: 'http://www.zogam.org/', description: 'Thutuamtuam kicing a postna' },
  { name: 'Zomi daily', url: 'https://zomidaily.org/', description: 'News leh thudang tuamtuam postna' },
  { name: 'Zogam library', url: 'http://zomilibrary.com/', description: 'Laibu tuamtuam kepcingna' },
  { name: 'Tongdot', url: 'https://www.tongdot.com/', description: 'Pau khiatna (dictionary) lam tawh kisai' },
  { name: 'Zaideih', url: 'https://www.zaideih.com/', description: 'La leh music lam tawh kisai' },
]

export default function Extra() {
  return (
    <>
      <Head>
        <title>Ciimnuai</title>
        <meta name="description" content="Relevant Zomi websites" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={`${inter.className} bg-gray-100 py-12`}>
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-start">
          <div className="flex flex-col w-full lg:w-2/3 pt-12 pb-24 text-justify">
            <h1 className="font-bold text-3xl my-4">Relevant websites</h1>
            {LINKS.map((link, idx) => (
              <p key={idx} className="leading-normal mb-4">
                <a
                  className="underline font-bold text-gray-900 hover:text-gray-700 transition"
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {link.name}
                </a>
                {' - '}
                {link.description}
              </p>
            ))}
          </div>
        </div>
      </main>
    </>
  )
}
