import Image from "next/image";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Mountain = () => {
  const mountainRef = useRef(null);
  const landRef = useRef(null);
  const stageRef = useRef(null);

  useEffect(() => {
    // Mountain - farthest, slowest
    gsap.to(mountainRef.current, {
      yPercent: -20,
      scale: 1.02, // slight zoom out effect
      ease: "power1.out",
      scrollTrigger: {
        trigger: mountainRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: 1,
      },
    });

    // Land - middle, medium speed
    gsap.to(landRef.current, {
      yPercent: -25,
      scale: 1.03,
      ease: "power1.out",
      scrollTrigger: {
        trigger: landRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: 1,
      },
    });

    // Stage - foreground, fastest
    gsap.to(stageRef.current, {
      yPercent: -10,
      scale: 1.05,
      ease: "power1.out",
      scrollTrigger: {
        trigger: stageRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: 1,
      },
    });
  }, []);

  return (
    <div id="ground_container">
      <Image
        ref={mountainRef}
        id="mountain"
        width={700}
        height={400}
        src="/images/mountain.webp"
        alt="mountain"
      />
      <Image
        ref={landRef}
        id="land"
        width={700}
        height={300}
        src="/images/ground.webp"
        alt="land"
      />
      <div ref={stageRef} id="stage">
        <Image id="stage_platform" width={700} height={250} src="/images/stage.webp" alt="stage" />
        <Image id="astronaut" width={700} height={250} src="/images/astronaut.webp" alt="astronaut" />
      </div>
    </div>
  );
};

export default Mountain;
