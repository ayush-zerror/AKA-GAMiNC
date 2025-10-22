import AboutSection from '@/components/home/AboutSection'
import ConqureSection from '@/components/home/ConqureSection'
import HeroSection from '@/components/home/HeroSection'
import ShowcaseSection from '@/components/home/ShowcaseSection'
import StorySection from '@/components/home/StorySection'
import WhySection from '@/components/home/WhySection'
import React from 'react'

const Home = () => {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <WhySection/>
      <ShowcaseSection/>
      <ConqureSection/>
      <StorySection/>
    </>
  )
}

export default Home