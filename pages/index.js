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

      <main className={`${inter.className} bg-gray-100`}>
        {/* Hero Section */}
        <section className="container mx-auto flex flex-col md:flex-row items-center px-4 md:px-6 py-12 md:py-24">

          {/* Left Text Column */}
          <div className="flex flex-col w-full lg:w-1/2 justify-center items-start text-justify mb-12 md:mb-0 md:pr-12">
            <h1 className="font-bold text-3xl md:text-4xl mb-4">
              Welcome
            </h1>

            <p className="leading-relaxed mb-6 text-gray-800">
              Hih website pen ciimnuai vontawi Zomi te thu tawh kisai thu tuamtuamte
              kepcingna ding in a kigel ahih man in, kep huai theih huai a tuamtuamte
              nong behlap pih nading un a kua maciat tung ah ong kingen hi.
            </p>

            <Link
              href="/about"
              className="inline-block bg-transparent hover:bg-gray-900 text-gray-900 hover:text-white rounded shadow hover:shadow-lg py-2 px-4 border border-gray-900 hover:border-transparent transition"
            >
              Learn more
            </Link>
          </div>

          {/* Right Image Column */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <Image
              src="/imgs/memorial_stone_at_historical_site_of_ciimnuai.jpeg"
              alt="Memorial stone at historical site of Ciimnuai"
              width={800}
              height={600}
              className="rounded-lg w-full h-auto object-cover"
              priority
            />
          </div>

        </section>
      </main>
    </>
  );
}
