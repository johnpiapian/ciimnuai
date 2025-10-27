import Head from 'next/head'
import { Inter } from '@next/font/google'
import { useState, useEffect } from 'react'

const inter = Inter({ subsets: ['latin'] })

const IMAGES = new Array(42).fill('').map((_, i) => `zomi-${i + 1}.jpg`)

console.log(IMAGES)

export default function Gallery() {
    const [selectedImage, setSelectedImage] = useState(null)

    const handleClick = (image) => setSelectedImage(image)
    const handleClose = () => setSelectedImage(null)

    useEffect(() => {
        document.body.style.overflow = selectedImage ? 'hidden' : 'unset'
        return () => (document.body.style.overflow = 'unset')
    }, [selectedImage])

    return (
        <>
            <Head>
                <title>Ciimnuai</title>
                <meta name="description" content="Zomi-related gallery" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main>
                <div className="container mx-auto flex flex-col md:flex-row items-center my-12 md:my-24">
                    <div className="grid grid-cols-3 gap-4 w-full">
                        {IMAGES.map((image) => (
                            <div key={image} className="flex items-center justify-center">
                                <img
                                    src={`/imgs/zomi-related/${image}`}
                                    alt=""
                                    className="w-full h-full object-cover cursor-pointer"
                                    onClick={() => handleClick(image)}
                                />
                            </div>
                        ))}
                    </div>
                </div>

                {selectedImage && (
                    <div
                        className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-75 flex items-center justify-center"
                        onClick={handleClose}
                    >
                        <div
                            className="bg-white rounded-lg overflow-hidden"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <img src={`/imgs/zomi-related/${selectedImage}`} alt="modal" />
                        </div>
                    </div>
                )}
            </main>
        </>
    )
}
