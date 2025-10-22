import Image from "next/image";
import React from "react";

const AboutSection = () => {
  return (
    <div id="about_section">
      <Image
      id="about_gradient"
        width={1000}
        height={1000}
        src="/images/about-gradient.svg"
        alt="gradient"
      />
      <div id="about_top">
        <div id="tag_about">
          <Image
            width={1000}
            height={1000}
            src="/images/about-star.svg"
            alt="star"
          />
          ABOUT US
        </div>

        <div id="about_title">
          <h2>
            Where <br />
            Skill Meets
          </h2>
          <span id="play">
            <span id="play_bg"></span>Play
          </span>
        </div>
      </div>

      <div id="about_bottom">
        <h5>
          HYST isn’t just another mobile game. It’s a world of fast, challenging
          2D games built to sharpen your mind and reflexes.
        </h5>
        <Image
          id="about-moon"
          width={1000}
          height={1000}
          src="/images/about-moon.svg"
          alt="blue-moon"
        />
        <p>
          Whether you’re a casual player or a top competitor, every session
          helps you build focus, confidence, and mastery while having a blast!
        </p>
      </div>
    </div>
  );
};

export default AboutSection;
