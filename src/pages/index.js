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
      gsap.to(astronautRef.current, {
        scrollTrigger: {
          trigger: aboutRef.current,
          start: "top bottom", // when top of AboutSection hits center of viewport
          end: "bottom center",
          scrub: true, // smooth animation

        },
        top: "27%", // new position
        left: "45%", // center horizontally
        scale:1.2,
        onComplete: () => {
          // Change the image src right when animation starts
          astronautRef.current.src = "/images/astronaut2.png";
        }
      })
    }
  }, [])

  return (
    <main>
      <Navbar sections={{ home: homeRef, about: aboutRef, games: gamesRef, skin: skinRef }} />

      <img
        ref={astronautRef}
        id='astronaut'
        src="/images/astronaut.png"
        alt='astronaut'
      />

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
