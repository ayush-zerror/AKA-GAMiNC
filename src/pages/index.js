import React, { useRef } from "react";
import Footer from "@/components/common/Footer";
import Navbar from "@/components/common/Navbar";
import Galaxy from "@/components/Galaxy";
import AboutSection from "@/components/home/AboutSection";
import ConqureSection from "@/components/home/ConqureSection";
import Hero from "@/components/home/Hero";
import ShowcaseSection from "@/components/home/ShowcaseSection";
import StorySection from "@/components/home/StorySection";
import WhySection from "@/components/home/WhySection";
import Image from "next/image";
import Link from "next/link";

const Home = () => {
  const btnRef = useRef(null);

  // ✅ Create refs for each section
  const sectionRefs = {
    hero: useRef(null),
    about: useRef(null),
    why: useRef(null),
    showcase: useRef(null),
    conqure: useRef(null),
    story: useRef(null),
    footer: useRef(null),
    astro: useRef(null),
    social: useRef(null),
  };

  return (
    <>
      <Galaxy
        mouseRepulsion
        mouseInteraction
        density={1}
        glowIntensity={0.05}
        saturation={0.1}
        hueShift={240}
      />
      <div id="astronaut_fixed_container">
        <Image
          id="fixed_astro"
          width={1000}
          height={1000}
          src="/images/fly-astro.png"
          alt="astronaut"
          ref={sectionRefs.astro}
        />
      </div>

      <div id="fixed_social">
        <div id="social_box" ref={sectionRefs.social}>
          <Link href="/">
            <Image
              width={1000}
              height={1000}
              src="/images/insta.webp"
              alt="instagram"
            />
          </Link>
          <Link href="/">
            <Image
              width={1000}
              height={1000}
              src="/images/linkedin.webp"
              alt="linkedin"
            />
          </Link>
        </div>
      </div>

      <main>
        <Navbar btnRef={btnRef} />

        <div ref={sectionRefs.hero}>
          <Hero />
        </div>

        <div ref={sectionRefs.about}>
          <AboutSection astro={sectionRefs.astro} />
        </div>

        <div ref={sectionRefs.why} >
          <WhySection astro={sectionRefs.astro} />
        </div>

        <div ref={sectionRefs.showcase}>
          <ShowcaseSection />
        </div>

        <div ref={sectionRefs.conqure}>
          <ConqureSection />
        </div>

        <div ref={sectionRefs.story}>
          <StorySection />
        </div>

        <div ref={sectionRefs.footer}>
          <Footer btnRef={btnRef} social={sectionRefs.social} />
        </div>
      </main>
    </>
  );
};

export default Home;
