import Image from "next/image";
import React from "react";

const MoonContainer = () => {
  return (
    <div id="moon_container">
      <Image
        width={1000}
        height={1000}
        src="/images/white-moon.webp"
        alt="white-moon"
      />
    </div>
  );
};

export default MoonContainer;
