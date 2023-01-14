import Head from 'next/head'
import { Inter } from '@next/font/google'

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
                <h1 class="font-bold text-3xl my-4">About</h1>
                <p class="leading-normal mb-4">
                    As it has been mentioned on the landing page, this website was created in hope to preserve and protect Zomi cultures and traditions which have been slowly fading away from newer generations. It is a website about a people who once lived in a city called Ciimnuai and about their cultures, traditions, and languages. Fate has it that these people are now native to three countries and spread across the globe which make it increasing difficult for the new generation to find their root and retain their culture. It is with this in mind that the website was introduced to give an overview of their history and background.
                </p>
                <p class="leading-normal mb-4">
                    Zomi te ih citawm ban ah mun tuamtaum ah ki thehthang mang ih hih man in, ih ngeina leh ih paizia te kepcing ding leh theihtel ding ong haksa semsem ta hi. A diakdiak in khangthak Zomi te in ih pau leh ham zong ki kemcing zo nawnlo mai hi. Tua te kawmkal ah ih ngeina leh ih thangthu a kepcinghuai mahmah pawlkhat zong ong mangthang dekdek ta hi. Hih teng ngaihsutna tawh website ong ki bawl khia hi in, kim tom cing in Cimmnuai vontawi Zomi te ngeina leh tangthu ki cian khahna ding in a ki gel a hihi.
                </p>
                <p class="leading-normal mb-4">
                    Hanciamna tawh a ki bawl a hih man in theihsak nop tuamtuam a om leh admin@ciimnuai.com.
                </p>
            </div>
            <div class="w-full lg:w-1/2 lg:py-6 text-center">
                <img class="rounded-lg" src='/imgs/tedim-background.jpeg'/>
            </div>
        </div>
    </main>
    </>
    )
}
