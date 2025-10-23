import Image from "next/image";
import Link from "next/link";
import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const HeroSection = () => {
  const heroRef = useRef(null);
  const moonRef = useRef(null);
  const mountainRef = useRef(null);
  const landRef = useRef(null);
  const stageRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: heroRef.current,
        start: "top top",
        end: "bottom top",
        scrub: 1.2, // smooth scroll
      },
    });

    // Premium parallax: slowest layer farthest, fastest layer closest
    tl.to(moonRef.current, { y: -100, scale: 1.02, ease: "power1.out" }, 0)
      .to(mountainRef.current, { y: -150, ease: "power1.out" }, 0)
      .to(landRef.current, { y: -250, ease: "power1.out" }, 0)
      .to(stageRef.current, { y: -100, ease: "power1.out" }, 0);
  }, []);

  return (
    <div id="hero_section" ref={heroRef} style={{ overflow: "hidden" }}>
      <div id="bg-hero">
        <Image
          id="stars-hero-lg"
          width={600}
          height={600}
          src="/images/stars-lg.svg"
          alt="stars"
          priority
        />
      </div>
      <div id="moon" ref={moonRef} style={{ willChange: "transform" }}>
        <Image
          id="stars-hero-md"
          width={500}
          height={500}
          src="/images/Stars.svg"
          alt="stars"
        />
        <Image
          id="gradient"
          width={500}
          height={500}
          src="/images/BG Gradient.webp"
          alt="Gradient"
        />
        <Image
          id="moon-hero"
          width={400}
          height={400}
          src="/images/white-moon.webp"
          alt="moon"
          priority
        />
        <div id="hero_content">
          <h2>
            Step into <br /> the <br /> world of <br /> Gaming
          </h2>
          <div id="store_btn_container">
            <Link href="/">
              <Image
                width={150}
                height={50}
                src="/images/googleplay.svg"
                alt="googleplay"
              />
            </Link>
            <Link href="/">
              <Image
                width={150}
                height={50}
                src="/images/appstore.svg"
                alt="appstore"
              />
            </Link>
          </div>
        </div>
      </div>
      <div id="ground_container" style={{ willChange: "transform" }}>
        <Image
          id="mountain"
          width={700}
          height={400}
          src="/images/mountain.webp"
          alt="mountain"
          ref={mountainRef}
        />
        <Image
          id="land"
          width={700}
          height={300}
          src="/images/ground.webp"
          alt="land"
          ref={landRef}
        />
        <Image
          id="stage"
          width={700}
          height={250}
          src="/images/stage.svg"
          alt="stage"
          ref={stageRef}
        />
      </div>
    </div>
  );
};

export default HeroSection;
