import Image from "next/image";
import Link from "next/link";
import React, { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const HeroSection = () => {
  const heroRef = useRef(null);
  const moonRef = useRef(null);
  const mountainRef = useRef(null);
  const landRef = useRef(null);
  const stageRef = useRef(null);
  const starsRef = useRef(null); // for background stars

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: heroRef.current,
        start: "top top",
        end: "bottom top",
        scrub: 2,
      },
    });

    // Background stars: subtle slow parallax
    tl.to(starsRef.current, {
      y: -30,
      x: 10,
      rotation: 1,
      ease: "power1.out",
    }, 0);

    // Moon layer: move + rotate for 3D feel
    tl.to(moonRef.current, {
      y: -160,
      x: 35,
      z: 10,
      scale: 1.06,
      rotationY: 6,
      rotationX: 2,
      ease: "power1.out",
    }, 0);

    // Mountain layer
    tl.to(mountainRef.current, {
      y: -240,
      x: 25,
      z: 5,
      rotationY: 4,
      rotationX: 1,
      ease: "power1.out",
    }, 0);

    // Land layer
    tl.to(landRef.current, {
      y: -160,
      x: -15,
      z: 3,
      rotationY: -2,
      rotationX: -1,
      ease: "power1.out",
    }, 0);

    // Stage layer
    tl.to(stageRef.current, {
      y: -90,
      x: -25,
      z: 0,
      rotationY: -5,
      rotationX: -2,
      ease: "power1.out",
    }, 0);
  }, []);

  return (
    <div
      id="hero_section"
      ref={heroRef}
      style={{
        overflow: "hidden",
        perspective: "1500px", // stronger 3D effect
      }}
    >
      <div id="bg-hero" ref={starsRef}>
        <Image
          id="stars-hero-lg"
          width={600}
          height={600}
          src="/images/stars-lg.webp"
          alt="stars"
          priority
        />
      </div>

      <div id="moon" ref={moonRef} style={{ willChange: "transform" }}>
        <Image
          id="stars-hero-md"
          width={500}
          height={500}
          src="/images/Stars.webp"
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
          src="/images/stage.webp"
          alt="stage"
          ref={stageRef}
        />
      </div>
    </div>
  );
};

export default HeroSection;
