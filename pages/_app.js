import './../styles/globals.css';
import Navbar from "../components/NavBar";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <main className="bg-gray-100 min-h-screen">
        <Component {...pageProps} />
      </main>
    </>
  );
}
