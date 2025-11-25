import './../styles/globals.css';
import Navbar from "../components/NavBar";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <main className="min-h-screen max-w-6xl mx-auto p-5">
        <Component {...pageProps} />
      </main>
    </>
  );
}
