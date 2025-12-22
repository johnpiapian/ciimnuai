import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 md:px-6 py-8">
        <div className="text-center">
          <h3 className="text-xl font-bold mb-2 text-white">
            Ciimnuai
          </h3>
          <p className="text-gray-300 text-sm max-w-md mx-auto">
            Preserving and celebrating the rich cultural heritage and traditions of the Zomi people.
          </p>
        </div>

        <div className="border-t border-gray-800 mt-6 pt-6 text-center">
          <p className="text-gray-400 text-xs">
            © {new Date().getFullYear()} Ciimnuai. Preserving Zomi heritage for future generations.
          </p>
        </div>
      </div>
    </footer>
  );
}