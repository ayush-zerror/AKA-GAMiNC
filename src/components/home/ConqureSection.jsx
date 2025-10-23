import Image from "next/image";
import React from "react";
import TvSlider from "./TvSlider";

const ConqureSection = () => {
  return (
    <div id="conqure_section">
      <div id="tv_container">
        <div id="tv_content">
          <h2>Conquer.</h2>
          <h3>Collect.</h3>
          <span id="custom">
            <span id="custom_bg"></span> Customize.
          </span>
          <TvSlider />
          <button id="play_game_btn">Play Games</button>
        </div>
        <Image
          id="tv"
          width={1000}
          height={1000}
          src="/images/tv-box.webp"
          alt="tv"
        />
      </div>
      <Image
        id="tv_frame"
        width={1000}
        height={1000}
        src="/images/conqure-frame.webp"
        alt="frame"
      />
    </div>
  );
};

export default ConqureSection;
