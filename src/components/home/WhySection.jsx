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
        <div id="why_cards">
          <div className="card_wrapper">
            <div className="why_card">
              <p>
                A sleek horizontal strip with glowing orbs for each skill — ⚡
                Reaction Time, 🎯 Focus, 🔍 Logic, ➗ Computation, 📚 Knowledge
                — pulsing like a sci-fi power meter over a deep navy,
                particle-lit background.
              </p>
            </div>
          </div>
          <div className="card_wrapper">
            <div className="why_card">
              <p>
                Express your unique identity with exclusive character skins,
                rare cosmetic drops, and personalised style rewards that make
                every victory look as good as it feels.
              </p>
            </div>
          </div>
          <div className="card_wrapper">
            <div className="why_card">
              <p>
                Level up and claim your glory — unlock premium prizes, power
                boosts, and limited-edition gear that celebrate your grind and
                skill.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhySection;
