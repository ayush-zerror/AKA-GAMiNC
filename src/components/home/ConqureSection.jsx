import Image from "next/image";
import React from "react";

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
        </div>
        <Image
          id="tv"
          width={1000}
          height={1000}
          src="/images/tv-box.svg"
          alt="tv"
        />
      </div>
      <Image
        id="tv_frame"
        width={1000}
        height={1000}
        src="/images/conqure-frame.svg"
        alt="frame"
      />
    </div>
  );
};

export default ConqureSection;
