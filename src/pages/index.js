import Footer from '@/components/common/Footer'
import Navbar from '@/components/common/Navbar'
import Galaxy from '@/components/Galaxy'
import AboutSection from '@/components/home/AboutSection'
import ConqureSection from '@/components/home/ConqureSection'
import Hero from '@/components/home/Moon/Hero'
import ShowcaseSection from '@/components/home/ShowcaseSection'
import StorySection from '@/components/home/StorySection'
import WhySection from '@/components/home/WhySection'
import React from 'react'


const Home = () => {

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
        <Navbar />
        <Hero />
        <AboutSection />
        <WhySection />
        <ShowcaseSection />
        <ConqureSection />
        <StorySection />
        <Footer />
      </main>
    </>
  )
}

export default Home
