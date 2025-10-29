"use client";

import Image from "next/image";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const MoonContainer = () => {
  const moonRef = useRef(null);

  useEffect(() => {
    const moon = moonRef.current;

    const handleMove = (e) => {
      const rect = moon.getBoundingClientRect();
      // reduce multiplier for gentler movement
      const x = (e.clientX - (rect.left + rect.width / 2)) * 0.02;
      const y = (e.clientY - (rect.top + rect.height / 2)) * 0.02;

      gsap.to(moon, {
        x,
        y,
        duration: 1.2, // smoother easing
        ease: "power3.out",
      });
    };

    const handleLeave = () => {
      // reset to center smoothly
      gsap.to(moon, {
        x: 0,
        y: 0,
        duration: 1.5,
        ease: "power2.out",
      });
    };

    window.addEventListener("mousemove", handleMove);
    window.addEventListener("mouseleave", handleLeave);

    return () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("mouseleave", handleLeave);
    };
  }, []);

  return (
    <div id="moon_container" className="relative w-fit mx-auto select-none">
      <Image
        ref={moonRef}
        width={400}
        height={400}
        src="/images/white-moon.webp"
        alt="white-moon"
        className="will-change-transform pointer-events-none"
      />
    </div>
  );
};

export default MoonContainer;
