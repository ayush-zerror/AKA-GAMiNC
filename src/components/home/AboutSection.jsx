import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import Image from "next/image";
import React, { useRef } from "react";

gsap.registerPlugin(ScrollTrigger, SplitText);

const AboutSection = ({ newSection, astro }) => {
  const sectionRef = useRef(null);
  const moonRef = useRef(null);
  const text1Ref = useRef(null);
  const text2Ref = useRef(null);
  const titleRef = useRef(null);
  const playRef = useRef(null);
  const playBgRef = useRef(null);
  const astroRef = useRef(null);
  const tagRef = useRef(null); // tag reference

  useGSAP(() => {
    const initAnimations = () => {
      if (
        !sectionRef.current ||
        !moonRef.current ||
        !text1Ref.current ||
        !text2Ref.current ||
        !titleRef.current ||
        !playRef.current ||
        !playBgRef.current ||
        !tagRef.current ||
        !astroRef.current ||
        !astro.current
      )
        return;

      // Split text into lines
      const splitTitle = new SplitText(titleRef.current, { type: "lines" });
      const splitText1 = new SplitText(text1Ref.current, { type: "lines" });
      const splitText2 = new SplitText(text2Ref.current, { type: "lines" });

      // ===== TEXT + TITLE ANIMATION =====
      const tltext = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          end: "top 20%",
          toggleActions: "play none none reverse",
          markers: false,
        },
      });

      // 0️⃣ Tag animation first
      tltext.fromTo(
        tagRef.current,
        { y: -20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, ease: "power2.out" }
      );

      // 1️⃣ Title lines
      tltext.fromTo(
        splitTitle.lines,
        { y: 60, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, stagger: 0.25, ease: "power3.out" }
      );

      // 2️⃣ Play background and text
      tltext
        .fromTo(
          playBgRef.current,
          { width: "0%" },
          { width: "100%", duration: 0.6, ease: "power2.inOut" },
          "-=0.4"
        )
        .fromTo(
          playRef.current,
          { y: 30, opacity: 0, scale: 0.95 },
          { y: 0, opacity: 1, scale: 1, duration: 0.6, ease: "back.out(1.3)" },
          "<"
        )
        .fromTo(
          astroRef.current,
          { y: 40, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.6, ease: "power2.out" }
        );

      // 3️⃣ Text1 & Text2 together
      tltext
        .fromTo(
          splitText1.lines,
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.6,
            stagger: { amount: 0.6 },
            ease: "power2.out",
          },
          "+=0.1"
        )
        .fromTo(
          splitText2.lines,
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.6,
            stagger: { amount: 0.6 },
            ease: "power2.out",
          },
          "<"
        );

      // ===== MOON SCROLL ANIMATION =====
      const tlMoon = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1,
          pin: true,
        },
      });

      // calculate center difference
      const sectionBox = sectionRef.current.getBoundingClientRect();
      const moonBox = moonRef.current.getBoundingClientRect();

      const sectionCenter = {
        x: sectionBox.left + sectionBox.width / 2,
        y: sectionBox.top + sectionBox.height / 2,
      };
      const moonCenter = {
        x: moonBox.left + moonBox.width / 2,
        y: moonBox.top + moonBox.height / 2,
      };

      const xOffset = sectionCenter.x - moonCenter.x;
      const yOffset = sectionCenter.y - moonCenter.y;

      // Moon + text movement
      tlMoon
        .to(moonRef.current, {
          scale: 4,
          x: xOffset,
          y: yOffset,
          duration: 1.5,
          ease: "linear",
        })
        .to(text1Ref.current, { x: -50, duration: 1.2 }, "<")
        .to(text2Ref.current, { x: 50, duration: 1.2 }, "<")
        .to(
          astro.current,
          {
            top: "50%", 
            transform:"translate(-50%,-50%)",
            duration: 1.2,
            ease: "power2.out",
          },
          "<"
        );
        

      return () => {
        tltext.scrollTrigger?.kill();
        tlMoon.scrollTrigger?.kill();
        splitTitle.revert();
        splitText1.revert();
        splitText2.revert();
      };
    };

    if (document.fonts) {
      document.fonts.ready.then(initAnimations);
    } else {
      initAnimations();
    }
  }, []);

  return (
    <div id="about_section" ref={sectionRef}>
      <div id="about_top">
        <div id="tag_about" ref={tagRef}>
          <Image
            width={1000}
            height={1000}
            src="/images/about-star.webp"
            alt="star"
          />
          ABOUT US
        </div>

        <div id="about_title" ref={titleRef}>
          <h2>Where</h2>
          <h2>Skill Meets</h2>
          <span id="play">
            <Image
              ref={astroRef}
              id="about_astronaut"
              width={700}
              height={250}
              src="/images/astronaut.webp"
              alt="astronaut"
            />
            <span id="play_bg" ref={playBgRef}></span>
            <span id="playtext" ref={playRef}>
              Play
            </span>
          </span>
        </div>
      </div>

      <div id="about_bottom" ref={newSection}>
        <h5 ref={text1Ref}>
          HYST isn’t just another mobile game. It’s a world of fast, challenging
          2D games built to sharpen your mind and reflexes.
        </h5>
        <Image
          ref={moonRef}
          id="about-moon"
          width={1000}
          height={1000}
          src="/images/about-moon.webp"
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
