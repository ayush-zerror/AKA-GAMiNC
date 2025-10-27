import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const TextHero = () => {
  const heroRef = useRef(null);

  useEffect(() => {
    if (heroRef.current) {
      gsap.to(heroRef.current, {
        y: 50, // move up as you scroll
        ease: "none",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
    }
  }, []);

  return (
    <div id="hero_content" ref={heroRef}>
      <h2>
        Step into <br /> the <br /> world of <br /> Gaming
      </h2>

      <div id="store_btn_container">
        <Link href="/">
          <Image
            width={150}
            height={50}
            src="/images/googleplay.webp"
            alt="googleplay"
          />
        </Link>
        <Link href="/">
          <Image
            width={150}
            height={50}
            src="/images/appstore.webp"
            alt="appstore"
          />
        </Link>
      </div>
    </div>
  );
};

export default TextHero;
