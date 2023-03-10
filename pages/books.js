import Head from 'next/head'
import { Inter } from '@next/font/google'
import Image from 'next/image'

const inter = Inter({ subsets: ['latin'] })

export default function Books() {
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
                    <div class="flex flex-col w-full justify-center items-start pt-12 pb-24 px-6 text-justify">
                        <table class="w-full divide-y table-fixed divide-gray-300 ">
                            <thead class="bg-gray-50 text-center">
                                <tr>
                                    <th class="px-6 py-2 text-xs text-gray-500">
                                        Title
                                    </th>
                                    <th class="px-6 py-2 text-xs text-gray-500">
                                        Description
                                    </th>
                                    <th class="px-6 py-2 text-xs text-gray-500">
                                        Source
                                    </th>
                                </tr>
                            </thead>
                            <tbody class="bg-white divide-y divide-gray-300">
                                <tr>
                                    <td class="px-6 py-4">
                                        <div class="text-sm text-gray-500">Zomi te thukhenna (Kam Hau Upadi)</div>
                                    </td>
                                    <td class="px-6 py-4">
                                        <div class="text-sm text-gray-500">Kham Hau thukhun(law) te leh ih Zo ngeina lam tawh ki sai laibu.</div>
                                    </td>
                                    <td class="px-6 py-4 text-center">
                                        <div class="text-sm text-gray-500 underline">
                                            <a target='_blank' href='https://www.dropbox.com/s/lcy7bo3igshchgm/Zomite-thukhenna.pdf' rel='noreferrer'>Read</a>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td class="px-6 py-4">
                                        <div class="text-sm text-gray-500">Naulak beh Tangthu</div>
                                    </td>
                                    <td class="px-6 py-4">
                                        <div class="text-sm text-gray-500">Zomi te beh ki patkhiat dan leh beh tuamtuam tawh ki sai laibu hi. Amasa lang bang pen Zomi sunga beh te tawh ki sai leh ngeina tuamtuam tawh ki sai hi in, adang teng pen Naulak beh tawh ki sai thu tuamtuam hi.</div>
                                    </td>
                                    <td class="px-6 py-4 text-center">
                                        <div class="text-sm text-gray-500 underline">
                                            <a target='_blank' href='https://www.dropbox.com/s/y5mjcbnketqlwo8/Naulak%20Beh%20Tangthu.pdf' rel='noreferrer'>Read</a>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td class="px-6 py-4">
                                        <div class="text-sm text-gray-500">The Chin Hills</div>
                                    </td>
                                    <td class="px-6 py-4">
                                        <div class="text-sm text-gray-500">Mangkang (British) te in Khamtung gam ong uk cil lam un, amau ong muhna tawh ki tuak in ah na at uh ih ngeina, tatzia, leh Khamtung gam tawh kisai thu tuamtuam.</div>
                                    </td>
                                    <td class="px-6 py-4 text-center">
                                        <div class="text-sm text-gray-500 underline">
                                            <a target='_blank' href='https://www.dropbox.com/s/oa7tpyj197qr056/the_chin_hills-1.pdf' rel='noreferrer'>Read Vol I</a>
                                        </div>
                                        <div class="text-sm text-gray-500 underline">
                                            <a target='_blank' href='https://www.dropbox.com/s/h4eo5u4fb58n7j0/the_chin_hills-vol-ii.pdf' rel='noreferrer'>Read Vol II</a>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td class="px-6 py-4">
                                        <div class="text-sm text-gray-500">Zo History by Vumson</div>
                                    </td>
                                    <td class="px-6 py-4">
                                        <div class="text-sm text-gray-500">Zo, Pu Zo leh Khamtung gam a mi khempeuh cihna, ngeina leh tangthu tuamtuam tawh ki sai laibu hi.</div>
                                    </td>
                                    <td class="px-6 py-4 text-center">
                                        <div class="text-sm text-gray-500 underline">
                                            <a target='_blank' href='https://www.dropbox.com/s/8r3entjjxoonumz/Zo%20History%20-%20Vumson.pdf' rel='noreferrer'>Read</a>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td class="px-6 py-4">
                                        <div class="text-sm text-gray-500">Profile of a Burma Frontier Man</div>
                                    </td>
                                    <td class="px-6 py-4">
                                        <div class="text-sm text-gray-500">Thu tampi gawm khawm a ah ki at laibu hi. Mangkang uksung leh ukkhit Chin state leh Kawlgam bup tawh ki sai thu tuamtuam.</div>
                                    </td>
                                    <td class="px-6 py-4 text-center">
                                        <div class="text-sm text-gray-500 underline">
                                            <a target='_blank' href='https://www.dropbox.com/s/j5a3kwzf7m4hi1j/profile-of-a-burma-frontier-man-part-i.pdf' rel='noreferrer'>Read Part I</a>
                                        </div>
                                        <div class="text-sm text-gray-500 underline">
                                            <a target='_blank' href='https://www.dropbox.com/s/nbrtwfpu4xyxhxi/profile-of-a-burma-frontier-man-part-ii.pdf' rel='noreferrer'>Read Part II</a>
                                        </div>
                                        <div class="text-sm text-gray-500 underline">
                                            <a target='_blank' href='https://www.dropbox.com/s/9y4ta0ior8186uj/profile-of-a-burma-frontier-man-illustrations.pdf' rel='noreferrer'>View Illustrations</a>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </main>
        </>
    )
}
