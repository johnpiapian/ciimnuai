import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'

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
    <main className="w-full h-screen bg-cover bg-no-repeat bg-center bg-fixed bg-[url('/tedim-background.jpeg')]">
        <div className="w-full h-screen backdrop-blur-[3px] flex flex-col">
            <article className="m-auto max-w-[400px] p-4 rounded-md bg-[#0009] text-[#ccc]">
                <h1 className="text-center text-3xl font-bold p-3">Welcome</h1>
                <p className="text-center text-base">
                    Hih website pen ciimnuai vontawi Zomi te thu tawh kisai thu tuamtuamte kepcingna ding in a kigel ahih man in, kep huai theih huai a tuamtuamte nong behlap pih nading un a kua maciat tung ah ong kingen hi.
                </p>
            </article>
        </div>
    </main>
    </>
    )
}
