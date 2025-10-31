import React, { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const heroRef = useRef(null);
  const moonRef = useRef(null);
  const contentRef = useRef(null);

  useGSAP(() => {
    const ctx = gsap.context(() => {
      // ✅ 1. INTRO FADE-IN ANIMATION
      const introTl = gsap.timeline();

      introTl
        .to("#spaceship", {
          opacity: 1,
          duration: 0.8,
          ease: "power2.out",
        })
        .to(
          moonRef.current,
          {
            opacity: 1,
            duration: 0.8,
            ease: "power2.out",
          },
          "-=0.4"
        )
        .to(
          contentRef.current,
          {
            opacity: 1,
            duration: 0.8,
            ease: "power2.out",
          },
          "-=0.3"
        );

      // ✅ 2. SCROLL ANIMATIONS (moon)
      const moonTl = gsap.timeline({
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "top -130%",
          pin: moonRef.current,
          scrub: 1.2,
        },
      });

      moonTl.to(moonRef.current, {
        scale: 1.6,
        ease: "linear",
      });

      // ✅ 3. PIN CONTENT
      ScrollTrigger.create({
        trigger: heroRef.current,
        start: "top top",
        end: "top -130%",
        pin: contentRef.current,
        scrub: false,
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <div id="hero_container" ref={heroRef}>
      <div id="ship-top">
        <div id="moon_container" ref={moonRef}>
          <div id="moon_wrap">
            <Image
              id="white-moon"
              width={1000}
              height={1000}
              src="/images/hero-moon.webp"
              alt="white-moon"
            />
            <div id="platform_container">
              <Image
                id="platform"
                width={1000}
                height={1000}
                src="/images/platform.svg"
                alt="platform"
              />
              <Image
                id="astronaut"
                width={1000}
                height={1000}
                src="/images/astronaut.svg"
                alt="astronaut"
              />
            </div>
          </div>
        </div>

        <Image
          id="spaceship"
          width={1000}
          height={1000}
          src="/images/ship-top.svg"
          alt="spaceship"
        />

        <div id="hero_content" ref={contentRef}>
          <h2>
            Step into <br /> the <br /> world of <br /> Gaming
          </h2>
        </div>
      </div>

      <div id="ship-bottom">
        <Image
          id="spaceship-desk"
          width={1000}
          height={1000}
          src="/images/ship-bottom.svg"
          alt="spaceship-desk"
        />
      </div>
    </div>
  );
};

export default Hero;
