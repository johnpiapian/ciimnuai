import Head from 'next/head'
import { Inter } from '@next/font/google'
import { useState, useEffect } from 'react'

const inter = Inter({ subsets: ['latin'] })

const IMAGES = new Array(42).fill('').map((_, i) => `zomi-${i + 1}.jpg`)

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null)

  const handleClick = (image) => setSelectedImage(image)
  const handleClose = () => setSelectedImage(null)

  useEffect(() => {
    document.body.style.overflow = selectedImage ? 'hidden' : 'unset'
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [selectedImage])

  return (
    <>
      <Head>
        <title>Ciimnuai</title>
        <meta name="description" content="Zomi-related gallery" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={`${inter.className} bg-gray-100 p-5`}>
        <div className="container mx-auto px-0">

          {/* Gallery Grid with no gap */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
            {IMAGES.map((image) => (
              <div
                key={image}
                className="flex items-center justify-center cursor-pointer overflow-hidden"
                onClick={() => handleClick(image)}
              >
                <img
                  src={`/imgs/zomi-related/${image}`}
                  alt={`Zomi image ${image}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Modal */}
        {selectedImage && (
          <div
            className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
            onClick={handleClose}
          >
            <div
              className="bg-white rounded-lg overflow-hidden max-w-full max-h-full"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={`/imgs/zomi-related/${selectedImage}`}
                alt={`Zomi image ${selectedImage}`}
                className="w-full h-auto"
              />
            </div>
          </div>
        )}
      </main>
    </>
  )
}
