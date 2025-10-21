import Image from "next/image";
import Link from "next/link";
import React from "react";

const HeroSection = () => {
  return (
    <div id="hero_section">
      <div id="bg-hero">
        <Image
          id="stars-hero-lg"
          width={1000}
          height={1000}
          src="/images/Stars-lg.svg"
          alt="stars"
        />
      </div>
      <div id="moon">
        <Image
          id="stars-hero-md"
          width={1000}
          height={1000}
          src="/images/Stars.svg"
          alt="stars"
        />
        <Image
          id="gradient"
          width={1000}
          height={1000}
          src="/images/BG Gradient.svg"
          alt="Gradient"
        />
        <Image
          id="moon-hero"
          width={1000}
          height={1000}
          src="/images/white-moon.svg"
          alt="moon"
        />
        <div id="hero_content">
          <h2>
            Step into <br /> the <br /> world of <br /> Gaming{" "}
          </h2>
          <div id="store_btn_container">
            <Link href="/">
              <Image
                width={1000}
                height={1000}
                src="/images/googleplay.svg"
                alt="googleplay"
              />
            </Link>
            <Link href="/">
              <Image
                width={1000}
                height={1000}
                src="/images/appstore.svg"
                alt="googleplay"
              />
            </Link>
          </div>
        </div>
      </div>
      <div id="ground_container">
        <Image
          id="mountain"
          width={1000}
          height={1000}
          src="/images/mountain.svg"
          alt="mountain"
        />
        <Image
          id="land"
          width={1000}
          height={1000}
          src="/images/ground.svg"
          alt="land"
        />
        <Image
          id="stage"
          width={1000}
          height={1000}
          src="/images/stage.svg"
          alt="stage"
        />
      </div>
    </div>
  );
};

export default HeroSection;
