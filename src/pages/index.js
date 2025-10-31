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
      <div id="astronaut_fixed_container"></div>

      <main>
        <Navbar btnRef={btnRef} />

        <div ref={sectionRefs.hero}>
          <Hero />
        </div>

        <div ref={sectionRefs.about}>
          <AboutSection />
        </div>

        <div ref={sectionRefs.why}>
          <WhySection />
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
          <Footer btnRef={btnRef} />
        </div>
      </main>
    </>
  );
};

export default Home;
