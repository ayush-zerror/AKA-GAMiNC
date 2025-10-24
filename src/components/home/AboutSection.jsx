import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import Image from "next/image";
import React, { useRef } from "react";
gsap.registerPlugin(ScrollTrigger);
const AboutSection = () => {
  const sectionRef = useRef(null);
  const moonRef = useRef(null);
  const text1Ref = useRef(null);
  const text2Ref = useRef(null);
  useGSAP(() => {
    if (
      !sectionRef.current ||
      !moonRef.current ||
      !text1Ref.current ||
      !text2Ref.current
    )
      return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top",
        end: "bottom top",
        scrub: 1,
        pin: true,
        // markers: true, // enable only for debugging
      },
    });

    tl.to(moonRef.current, { scale: 2.5, duration: 1 }, 0)
      .to(text1Ref.current, { x: -20, duration: 1 }, 0)
      .to(text2Ref.current, { x: 20, duration: 1 }, 0);

    return () => tl.scrollTrigger?.kill(); // cleanup on unmount
  }, []);

  return (
    <div id="about_section" ref={sectionRef}>
      <Image
        id="about_gradient"
        width={1000}
        height={1000}
        src="/images/about-gradient.svg"
        alt="gradient"
      />
      <div id="about_top">
        <div id="tag_about">
          <Image
            width={1000}
            height={1000}
            src="/images/about-star.svg"
            alt="star"
          />
          ABOUT US
        </div>

        <div id="about_title">
          <h2>
            Where <br />
            Skill Meets
          </h2>
          <span id="play">
            <span id="play_bg"></span>Play
          </span>
        </div>
      </div>

      <div id="about_bottom">
        <h5 ref={text1Ref}>
          HYST isn’t just another mobile game. It’s a world of fast, challenging
          2D games built to sharpen your mind and reflexes.
        </h5>
        <Image
          ref={moonRef}
          id="about-moon"
          width={1000}
          height={1000}
          src="/images/about-moon.svg"
          alt="blue-moon"
        />
        <p ref={text2Ref}>
          Whether you’re a casual player or a top competitor, every session
          helps you build focus, confidence, and mastery while having a blast!
        </p>
      </div>
    </div>
  );
};

export default AboutSection;
