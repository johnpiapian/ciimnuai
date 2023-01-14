import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
    return (
        <Html lang="en">
            <Head />
            <nav class="bg-gray-800 p-2 mt-0 w-full">
                <div class="container mx-auto flex flex-wrap items-center">
                    <div class="flex w-full md:w-1/2 justify-center md:justify-start text-white font-extrabold">
                        <a class="text-white no-underline hover:text-white hover:no-underline" href="#">
                            <span class="text-2xl pl-2"><i class="em em-grinning"></i> Ciimnuai</span>
                        </a>
                    </div>
                    <div class="flex w-full pt-2 content-center justify-between md:w-1/2 md:justify-end">
                        <ul class="list-reset flex justify-between flex-1 md:flex-none items-center">
                            <li class="mr-3">
                                <a class="inline-block p-1 px-2 text-white no-underline" href="/">Home</a>
                            </li>
                            <li class="mr-3">
                                <a class="inline-block py-1 px-2 text-white no-underline" href="/about">About</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <body class="bg-gray-200 font-sans leading-normal tracking-normal">
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}
