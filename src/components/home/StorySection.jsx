import Image from "next/image";
import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import SplitText from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Book from "./Book";

gsap.registerPlugin(ScrollTrigger, SplitText);

const StorySection = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const hystRef = useRef(null);
  const hystBgRef = useRef(null);

  useGSAP(() => {
    const initAnimations = () => {
      if (
        !sectionRef.current ||
        !titleRef.current ||
        !hystRef.current ||
        !hystBgRef.current
      )
        return;

      // Split lines for <h2> and <h3>
      const splitTitle = new SplitText(
        titleRef.current.querySelectorAll("h2, h3"),
        { type: "lines" }
      );

      // === TIMELINE ===
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          toggleActions: "play none none reverse",
        },
      });

      tl.fromTo(
        splitTitle.lines,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: "power3.out",
        }
      )
        .fromTo(
          hystBgRef.current,
          { width: "0%" },
          {
            width: "100%",
            duration: 0.6,
            ease: "power2.inOut",
          },
          "-=0.4"
        )
        .fromTo(
          hystRef.current,
          { y: 30, opacity: 0, scale: 0.95 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.6,
            ease: "back.out(1.3)",
          },
          "<"
        );

      return () => {
        tl.scrollTrigger?.kill();
        splitTitle.revert();
        ScrollTrigger.getAll().forEach((st) => st.kill());
      };
    };

    if (document.fonts) document.fonts.ready.then(initAnimations);
    else initAnimations();
  }, []);

  return (
    <div id="story_section" ref={sectionRef}>
      <Image
        id="shadow-story"
        width={1000}
        height={1000}
        src="/images/shadow-story.webp"
        alt="shadow"
      />
      <div id="story_overlay" ref={titleRef}>
        <h2>The Story</h2>
        <h3>Behind</h3>
        <span id="hyst">
          <span id="hyst-bg" ref={hystBgRef}></span>
          <span ref={hystRef}>Hyst</span>
        </span>

        {/* === Your book section === */}
        <Book />
      </div>
    </div>
  );
};

export default StorySection;
