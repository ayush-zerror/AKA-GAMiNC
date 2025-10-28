import React, { useRef } from "react";
import MoonContainer from "./MoonContainer";
import Mountain from "./Mountain";
import TextHero from "./TextHero";

const Hero = () => {
  const astroRef = useRef(null);

  return (
    <div id="hero_container">
      <MoonContainer />
      <Mountain astroRef={astroRef} />
      <TextHero />
    </div>
  );
};

export default Hero;
