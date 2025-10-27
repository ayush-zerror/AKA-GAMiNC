import React, { useRef } from "react";
import Image from "next/image";
import TvSlider from "./TvSlider";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(ScrollTrigger, SplitText);

const ConqureSection = () => {
  const sectionRef = useRef(null);
  const h2Ref = useRef(null);
  const h3Ref = useRef(null);
  const customRef = useRef(null);
  const customBgRef = useRef(null);

  useGSAP(() => {
    const initAnimations = () => {
      if (
        !sectionRef.current ||
        !h2Ref.current ||
        !h3Ref.current ||
        !customRef.current ||
        !customBgRef.current
      )
        return;

      const splitH2 = new SplitText(h2Ref.current, { type: "lines" });
      const splitH3 = new SplitText(h3Ref.current, { type: "lines" });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 40%",
          toggleActions: "play none none reverse",
          markers: false,
        },
      });

      // Animate H2
      tl.fromTo(
        splitH2.lines,
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: "power3.out",
        }
      )
        // Animate H3
        .fromTo(
          splitH3.lines,
          { y: 60, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.2,
            ease: "power3.out",
          },
          "-=0.4"
        )
        // Animate Customize background reveal
        .fromTo(
          customBgRef.current,
          { width: "0%" },
          { width: "100%", duration: 0.6, ease: "power2.inOut" },
          "-=0.3"
        )
        // Animate Customize text fade-up
        .fromTo(
          customRef.current,
          { y: 30, opacity: 0, scale: 0.95 },
          { y: 0, opacity: 1, scale: 1, duration: 0.6, ease: "back.out(1.3)" },
          "<"
        );

      return () => {
        tl.scrollTrigger?.kill();
        splitH2.revert();
        splitH3.revert();
        ScrollTrigger.getAll().forEach((st) => st.kill());
      };
    };

    if (document.fonts) document.fonts.ready.then(initAnimations);
    else initAnimations();
  }, []);

  return (
    <div id="conqure_section" ref={sectionRef}>
      <div id="tv_container">
        <div id="tv_content">
          <h2 ref={h2Ref}>Conquer.</h2>
          <h3 ref={h3Ref}>Collect.</h3>

          <span id="custom" >
            <span id="custom_bg" ref={customBgRef}></span>
            <span ref={customRef}>Customize.</span>
          </span>

          <TvSlider />
          <button id="play_game_btn">Play Games</button>
        </div>

        <Image
          id="tv"
          width={1000}
          height={1000}
          src="/images/tv-box.webp"
          alt="tv"
        />
      </div>

      <Image
        id="tv_frame"
        width={1000}
        height={1000}
        src="/images/conqure-frame.webp"
        alt="frame"
      />
    </div>
  );
};

export default ConqureSection;
