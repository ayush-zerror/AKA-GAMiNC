"use client";

import Image from "next/image";
import React from "react";

const MoonContainer = () => {
  return (
    <div id="moon_container">
      <Image
        id="white-moon"
        width={400}
        height={400}
        src="/images/hero-moon.webp"
        alt="white-moon"
      />
        <Image
        id="spaceship"
        width={400}
        height={400}
        src="/images/spaceship.svg"
        alt="spaceship"
      />
    </div>
  );
};

export default MoonContainer;
