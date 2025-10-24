"use client"

import Footer from '@/components/common/Footer'
import Navbar from '@/components/common/Navbar'
import AboutSection from '@/components/home/AboutSection'
import ConqureSection from '@/components/home/ConqureSection'
import HeroSection from '@/components/home/HeroSection'
import ShowcaseSection from '@/components/home/ShowcaseSection'
import StorySection from '@/components/home/StorySection'
import WhySection from '@/components/home/WhySection'
import Image from 'next/image'
import React, { useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const Home = () => {
  const homeRef = useRef(null)
  const aboutRef = useRef(null)
  const gamesRef = useRef(null)
  const skinRef = useRef(null)
  const astronautRef = useRef(null)

  useEffect(() => {
    if (astronautRef.current && aboutRef.current) {
      const astro1 = astronautRef.current.querySelector("#astro1");
      const astro2 = astronautRef.current.querySelector("#astro2");

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: aboutRef.current,
          start: "top bottom",
          end: "bottom center",
          scrub: true,
        }
      });

      // 1️⃣ Move container and scale
      tl.to(astronautRef.current, {
        top: "27%",
        left: "45%",
        scale: 1.2,
        ease: "none",
      });

      // 2️⃣ Fade images after container animation
      // Add "+=0.3" for delay, or change the number as needed
      tl.to(astro1, { opacity: 0, ease: "none" }, "+=0.3");
      tl.to(astro2, { opacity: 1, ease: "none" }, "<"); // "<" means start at the same time as previous
    }
  }, []);

  return (
    <main>
      <Navbar sections={{ home: homeRef, about: aboutRef, games: gamesRef, skin: skinRef }} />

      <div
        id="astronaut-container"
        style={{
          position: "absolute",
          top: "9%",
          left: "12%",
          height: "13rem",
          width: "16rem",
          zIndex: 9,
        }}
        ref={astronautRef}
      >
        <img
          src="/images/astronaut.png"
          alt="astronaut1"
          id="astro1"
          style={{ position: "absolute", top: 0, objectFit: "contain", left: 0, width: "100%", height: "100%", opacity: 1 }}
        />
        <img
          src="/images/astronaut2.png"
          alt="astronaut2"
          id="astro2"
          style={{ position: "absolute", top: 0, objectFit: "contain", left: 0, width: "100%", height: "100%", opacity: 0 }}
        />
      </div>


      <div ref={homeRef}>
        <HeroSection />
      </div>

      <div ref={aboutRef}>
        <AboutSection />
      </div>

      <WhySection />

      <div ref={gamesRef}>
        <ShowcaseSection />
      </div>

      <div ref={skinRef}>
        <ConqureSection />
      </div>

      <StorySection />
      <Footer />
    </main>
  )
}

export default Home
