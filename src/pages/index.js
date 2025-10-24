import Footer from '@/components/common/Footer'
import Navbar from '@/components/common/Navbar'
import AboutSection from '@/components/home/AboutSection'
import ConqureSection from '@/components/home/ConqureSection'
import HeroSection from '@/components/home/HeroSection'
import ShowcaseSection from '@/components/home/ShowcaseSection'
import StorySection from '@/components/home/StorySection'
import WhySection from '@/components/home/WhySection'

import React, { useRef } from 'react'

const Home = () => {
  const homeRef = useRef(null)
  const aboutRef = useRef(null)
  const gamesRef = useRef(null)
  const skinRef = useRef(null)

  return (
    <main>
      <Navbar sections={{ home: homeRef, about: aboutRef, games: gamesRef, skin: skinRef }} />
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
