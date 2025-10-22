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
    </div>
  );
};

export default WhySection;
