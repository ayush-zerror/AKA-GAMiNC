import Image from "next/image";
import React from "react";

const ShowcaseSection = () => {
  return (
    <div id="showcase_section">
      <h2>Mini Games</h2>
      <h3>
        <span></span>Showcase
      </h3>
      <Image
        id="showcase_gradient"
        width={1000}
        height={1000}
        src="/images/showcase-gradient.svg"
        alt="gradient"
      />
      <Image
        id="showcase_moon"
        width={1000}
        height={1000}
        src="/images/showcase-moon.svg"
        alt="moon"
      />
    </div>
  );
};

export default ShowcaseSection;
