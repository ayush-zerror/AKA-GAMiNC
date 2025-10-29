"use client";

import Image from "next/image";
import React from "react";

const MoonContainer = () => {
  return (
    <div id="moon_container">
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
      <Image
        id="spaceship"
        width={1000}
        height={1000}
        src="/images/spaceship.svg"
        alt="spaceship"
      />
    </div>
  );
};

export default MoonContainer;
