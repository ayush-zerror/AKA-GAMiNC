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
      <div id="showcase_moon_container">
        <Image
          id="showcase_moon"
          width={1000}
          height={1000}
          src="/images/showcase-moon.svg"
          alt="moon"
        />
        <div id="showcase_slider">
          <div className="showcase_card">
            <Image
              className="card_bg"
              width={1000}
              height={1000}
              src="/images/showcase/showcase3.svg"
              alt="card"
            />
          </div>
          <div className="showcase_card">
            <Image
              className="card_bg"
              width={1000}
              height={1000}
              src="/images/showcase/showcase2.svg"
              alt="card"
            />
          </div>
          <div className="showcase_card">
            <Image
              className="card_bg"
              width={1000}
              height={1000}
              src="/images/showcase/showcase3.svg"
              alt="card"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowcaseSection;
