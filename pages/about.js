import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function About() {
  return (
    <>
      <Head>
        <title>About - Ciimnuai</title>
        <meta name="description" content="Ciimnuai Zomi cultural heritage" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={`${inter.className} bg-gray-50 min-h-screen`}>
        <section className="container mx-auto px-4 md:px-6 py-16 md:py-24">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">

            {/* Left Text Column */}
            <div className="flex flex-col w-full lg:w-1/2 justify-center items-start">
              <h1 className="font-bold text-4xl md:text-5xl mb-6 text-gray-900">
                About
              </h1>
              <p className="leading-relaxed mb-6 text-gray-700 text-lg">
                As highlighted on the landing page, this website is dedicated to preserving and celebrating the rich cultural heritage and traditions of the Zomi people—traditions that are gradually fading among younger generations. It offers a glimpse into the vibrant cultures, languages, and customs of a community that once thrived in various regions of Chin State, Myanmar, as well as parts of India and Bangladesh. Today, the Zomi are dispersed across the globe, making it increasingly difficult for younger members to connect with their roots and sustain their cultural identity. This website serves as a resource to provide insight into their history, heritage, and enduring legacy.
              </p>

              <p className="leading-relaxed mb-8 text-gray-700 text-lg">
                Zomite ih citawm ban ah mun tuamtuam ah kithehthang mang ih hih man in, ih ngeina leh ih paiziate kepcing ding leh theihtel ding ong haksa semsem ta hi. A diakdiak in khangthak Zomi te in, ih pau leh ham zong kikemcing zo nawnlo mai hi. Tuate kawmkal ah ih ngeina leh ih thangthu a kepcinghuai mahmah pawlkhat zong ong mangthang dekdek ta hi. Hih teng ngaihsutna tawh website ong kibawl khia hi in, kim-tom-cing in Cimmnuai vontawi Zomite ngeina leh tangthu kician khahna ding in a kigel a hihi.
              </p>
            </div>

            {/* Right Image Column */}
            <div className="w-full lg:w-1/2 flex justify-center">
              <Image
                src="/imgs/tedim-hill.jpeg"
                alt="Tedim hill"
                width={600}
                height={450}
                className="rounded-lg shadow-lg w-full h-auto object-cover"
                priority
              />
            </div>

          </div>
        </section>
      </main>
    </>
  )
}
