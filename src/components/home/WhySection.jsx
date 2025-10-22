import Image from "next/image";
import React from "react";

const WhySection = () => {
  return (
    <div id="why_section">
      <Image
        id="why_star"
        width={1000}
        height={1000}
        src="/images/why-star.svg"
        alt="why-star"
      />
      <Image
        id="why_shadow"
        width={1000}
        height={1000}
        src="/images/shadow-story.svg"
        alt="why-shadow"
      />
      <div id="why_content">
        <div id="why_title">
          <h2>Why play </h2>
          <span id="why_hyst">
            <span id="why_hyst_bg"></span> Hyst
          </span>
        </div>
      </div>
    </div>
  );
};

export default WhySection;
