import Footer from "@/components/common/Footer";
import Navbar from "@/components/common/Navbar";
import SmoothScroller from "@/components/smoothScroll/SmoothScroller";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <SmoothScroller />
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
