import Footer from '@/components/common/Footer'
import Navbar from '@/components/common/Navbar'
import Galaxy from '@/components/Galaxy'
import AboutSection from '@/components/home/AboutSection'
import ConqureSection from '@/components/home/ConqureSection'
import Hero from '@/components/home/Moon/Hero'
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
    <>
      <Galaxy
        mouseRepulsion
        mouseInteraction
        density={1}
        glowIntensity={0.05}
        saturation={0.1}
        hueShift={240}
      />
      <main>
        <Navbar sections={{ home: homeRef, about: aboutRef, games: gamesRef, skin: skinRef }} />
        <div ref={homeRef}>
          <Hero />
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
    </>
  )
}

export default Home
