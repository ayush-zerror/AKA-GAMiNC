import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import CurvedCylinder from "../cylinderSlider/CurvedCylinder";

gsap.registerPlugin(ScrollTrigger, SplitText);

const ShowcaseSection = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const textRef = useRef(null);
  const textBgRef = useRef(null);

  useGSAP(() => {
    const initAnimations = () => {
      if (!sectionRef.current || !titleRef.current || !textRef.current || !textBgRef.current)
        return;

      const splitTitle = new SplitText(titleRef.current, { type: "lines" });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          toggleActions: "play none none reverse",
          markers: false,
        },
      });

      // Animate H2 text lines
      tl.fromTo(
        splitTitle.lines,
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: "power3.out",
        }
      )
        // Animate Showcase background reveal
        .fromTo(
          textBgRef.current,
          { width: "0%" },
          { width: "100%", duration: 0.6, ease: "power2.inOut" },
          "-=0.4"
        )
        // Animate Showcase text fade-up
        .fromTo(
          textRef.current,
          { y: 30, opacity: 0, scale: 0.95 },
          { y: 0, opacity: 1, scale: 1, duration: 0.6, ease: "back.out(1.3)" },
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
    <div id="showcase_section" ref={sectionRef}>
      {/* ===== TITLE SECTION ===== */}
      <h2 ref={titleRef}>Mini Games</h2>

      <span id="showcase_text" >
        <span id="showcase_bg" ref={textBgRef}></span>
        <span ref={textRef}>Showcase</span>
      </span>

      {/* ===== MOON + SLIDER ===== */}
      <CurvedCylinder/>
    </div>
  );
};

export default ShowcaseSection;
