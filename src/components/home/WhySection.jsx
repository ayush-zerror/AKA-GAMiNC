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
              A sleek horizontal strip with glowing orbs for each <br /> skill —
              ⚡ Reaction Time, 🎯 Focus, 🔍 Logic, ➗ <br /> Computation, 📚
              Knowledge — pulsing like a sci-fi power <br /> meter over a deep
              navy, particle-lit background.
            </p>
            <span id="card_tag">
              <span id="card_tag_bg"></span>Skill Boost
            </span>
            <Image
              id="card_arrow"
              width={1000}
              height={1000}
              src="/images/arrow.webp"
              alt="arrow"
            />
            <Image
              id="card_gift"
              width={1000}
              height={1000}
              src="/images/gift.webp"
              alt="gift"
            />
          </div>
        </div>
        <div className="card_wrapper">
          <div className="why_card">
            <p>
              Express your unique identity with <br /> exclusive character
              skins, rare cosmetic <br /> drops, and personalised style rewards{" "}
              <br /> that make every victory look as <br /> good as it feels.
            </p>
            <span id="card_tag">
              <span id="card_tag_bg"></span>Custom Skins
            </span>

            <div id="spinner_container">
              <Image
                id="card_spinner"
                width={1000}
                height={1000}
                src="/images/spinner.webp"
                alt="spinner"
              />
            </div>
          </div>
        </div>
        <div className="card_wrapper">
          <div className="why_card">
            <p>
              Level up and claim your glory — unlock premium <br /> prizes,
              power boosts, and limited-edition gear that <br /> celebrate your
              grind and skill.
            </p>
            <span id="card_tag">
              <span id="card_tag_bg"></span>Earn Rewards
            </span>
            <div id="xp_container">
              <Image
                id="card_xp"
                width={1000}
                height={1000}
                src="/images/xp.webp"
                alt="gift"
              />
              <Image
                id="card_gold"
                width={1000}
                height={1000}
                src="/images/sack.webp"
                alt="gold"
              />
            </div>
          </div>
        </div>
        <Image
          id="why_shadow"
          width={1000}
          height={1000}
          src="/images/shadow-story.webp"
          alt="why-shadow"
        />
      </div>
    </div>
  );
};

export default WhySection;
