import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold mb-4 text-white">
              Ciimnuai
            </h3>
            <p className="text-gray-300 mb-4 max-w-md">
              Preserving and celebrating the rich cultural heritage and traditions of the Zomi people.
            </p>
            <p className="text-gray-400 text-sm">
              Connecting generations through history, culture, and legacy.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-white transition duration-300">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-white transition duration-300">
                  About
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-gray-300 hover:text-white transition duration-300">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/books" className="text-gray-300 hover:text-white transition duration-300">
                  Books
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Connect</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/extra" className="text-gray-300 hover:text-white transition duration-300">
                  Extra Resources
                </Link>
              </li>
              <li>
                <span className="text-gray-400 text-sm">
                  Cultural Preservation
                </span>
              </li>
              <li>
                <span className="text-gray-400 text-sm">
                  Heritage Education
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Ciimnuai. Preserving Zomi heritage for future generations.
          </p>
        </div>
      </div>
    </footer>
  );
}