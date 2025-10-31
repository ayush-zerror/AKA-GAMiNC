import Footer from '@/components/common/Footer'
import Navbar from '@/components/common/Navbar'
import Galaxy from '@/components/Galaxy'
import AboutSection from '@/components/home/AboutSection'
import ConqureSection from '@/components/home/ConqureSection'
import Hero from '@/components/home/Hero'
import ShowcaseSection from '@/components/home/ShowcaseSection'
import StorySection from '@/components/home/StorySection'
import WhySection from '@/components/home/WhySection'
import React, { useRef } from 'react'


const Home = () => {
const btnRef = useRef(null)
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
        <Navbar btnRef={btnRef} />
        <Hero />
        <AboutSection />
        <WhySection />
        <ShowcaseSection />
        <ConqureSection />
        <StorySection />
        <Footer btnRef={btnRef} />
      </main>
    </>
  )
}

export default Home
