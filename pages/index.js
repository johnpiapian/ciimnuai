import Head from 'next/head'
import { Inter } from '@next/font/google'
import Link from 'next/link'
import Image from 'next/image'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
    return (
    <>
    <Head>
        <title>Ciimnuai</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
    </Head>
    <main>
        <div class="container mx-auto flex flex-col md:flex-row items-center my-12 md:my-24">
            <div class="flex flex-col w-full lg:w-1/2 justify-center items-start pt-12 pb-24 px-6 text-justify">
                <h1 class="font-bold text-3xl my-4">Welcome</h1>
                <p class="leading-normal mb-4">Hih website pen ciimnuai vontawi Zomi te thu tawh kisai thu tuamtuamte kepcingna ding in a kigel ahih man in, kep huai theih huai a tuamtuamte nong behlap pih nading un a kua maciat tung ah ong kingen hi.</p>
                <button class="bg-transparent hover:bg-gray-900 text-gray-900 hover:text-white rounded shadow hover:shadow-lg py-2 px-4 border border-gray-900 hover:border-transparent"><Link href='/about'>Learn more</Link></button>
            </div>
            <div class="w-full lg:w-1/2 lg:py-6 text-center">
                <img class='rounded-lg w-full' src='/imgs/memorial_stone_at_historical_site_of_ciimnuai.jpeg' alt='Memorial stone at historical site of ciimnuai'/>
            </div>
        </div>

        <div class="h-[200px]">
            <div class="container mx-auto pt-24 md:pt-16 px-6">
                <p class="py-4"><i class="em em-wave"></i> <i class="em em-world_map"></i></p>		
            </div>
        </div>
    </main>
    </>
    )
}
