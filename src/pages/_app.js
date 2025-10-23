import SmoothScroller from "@/components/smoothScroll/SmoothScroller";
import "@/styles/globals.css";
import "@/styles/components/common/navbar.css";
import "@/styles/components/common/footer.css";
import "@/styles/components/home.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <SmoothScroller />
      <Component {...pageProps} />
    </>
  );
}
