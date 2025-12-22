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
        <title>Gallery - Ciimnuai</title>
        <meta name="description" content="Zomi-related gallery" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={`${inter.className} bg-gray-50 min-h-screen`}>
        <div className="container mx-auto px-4 md:px-6 py-16">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
              Gallery
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Explore the visual heritage of the Zomi people through our curated collection of images.
            </p>
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {IMAGES.map((image, index) => (
              <div
                key={image}
                className="cursor-pointer overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200"
                onClick={() => handleClick(image)}
              >
                <img
                  src={`/imgs/zomi-related/${image}`}
                  alt={`Zomi image ${image}`}
                  className="w-full max-h-64 object-contain"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Modal */}
        {selectedImage && (
          <div
            className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4"
            onClick={handleClose}
          >
            <div className="relative max-w-4xl max-h-full">
              {/* Close button */}
              <button
                onClick={handleClose}
                className="absolute -top-12 right-0 text-white hover:text-gray-300 transition duration-200"
              >
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              <div
                className="bg-white rounded-lg overflow-hidden shadow-xl"
                onClick={(e) => e.stopPropagation()}
              >
                <img
                  src={`/imgs/zomi-related/${selectedImage}`}
                  alt={`Zomi image ${selectedImage}`}
                  className="w-full h-auto max-h-[80vh] object-contain"
                />
              </div>
            </div>
          </div>
        )}
      </main>
    </>
  )
}
