import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import Image from "next/image";
import React, { useRef } from "react";

gsap.registerPlugin(ScrollTrigger, SplitText);

const WhySection = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const hystRef = useRef(null);
  const hystBgRef = useRef(null);
  const astroRef = useRef(null);
  const cardsContainerRef = useRef(null);

  const cardsData = [
    {
      id: 1,
      text: (
        <>
          A sleek horizontal strip with glowing orbs for each <br /> skill — ⚡
          Reaction Time, 🎯 Focus, 🔍 Logic, ➗ <br /> Computation, 📚 Knowledge
          — pulsing like a sci-fi power <br /> meter over a deep navy,
          particle-lit background.
        </>
      ),
      tag: "Skill Boost",
      images: [
        { id: "card_arrow", src: "/images/arrow.webp", alt: "arrow" },
        { id: "card_gift", src: "/images/gift.webp", alt: "gift" },
      ],
    },
    {
      id: 2,
      text: (
        <>
          Express your unique identity with <br /> exclusive character skins,
          rare cosmetic <br /> drops, and personalised style rewards <br /> that
          make every victory look as <br /> good as it feels.
        </>
      ),
      tag: "Custom Skins",
      images: [
        {
          id: "card_spinner",
          src: "/images/spinner.webp",
          alt: "spinner",
          wrapperId: "spinner_container",
        },
      ],
    },
    {
      id: 3,
      text: (
        <>
          Level up and claim your glory — unlock premium <br /> prizes, power
          boosts, and limited-edition gear that <br /> celebrate your grind and
          skill.
        </>
      ),
      tag: "Earn Rewards",
      images: [
        {
          id: "card_xp",
          src: "/images/xp.webp",
          alt: "gift",
          wrapperId: "xp_container",
        },
        {
          id: "card_gold",
          src: "/images/sack.webp",
          alt: "gold",
          wrapperId: "xp_container",
        },
      ],
    },
  ];

  useGSAP(() => {
    const initAnimations = () => {
      if (
        !sectionRef.current ||
        !titleRef.current ||
        !hystRef.current ||
        !hystBgRef.current ||
        !astroRef.current ||
        !cardsContainerRef.current
      )
        return;

      const splitTitle = new SplitText(titleRef.current.querySelector("h2"), {
        type: "lines",
      });

      // === MAIN INTRO TIMELINE ===
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 0%",
          toggleActions: "play none none reverse",
        },
      });

      tl.fromTo(
        splitTitle.lines,
        { y: 60, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, stagger: 0.25, ease: "power3.out" }
      )
        .fromTo(
          hystBgRef.current,
          { width: "0%" },
          { width: "100%", duration: 0.6, ease: "power2.inOut" },
          "-=0.4"
        )
        .fromTo(
          hystRef.current,
          { y: 30, opacity: 0, scale: 0.95 },
          { y: 0, opacity: 1, scale: 1, duration: 0.6, ease: "back.out(1.3)" },
          "<"
        )
        .fromTo(
          astroRef.current,
          { y: 40, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.6, ease: "power2.out" },
          "<"
        );

      // === CARD ANIMATIONS ===
      const cards = gsap.utils.toArray(
        cardsContainerRef.current.querySelectorAll(".why_card")
      );

      cards.forEach((card) => {
        const tag = card.querySelector("#card_tag");

        const cardTl = gsap.timeline({
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        });

        cardTl
          .fromTo(
            card,
            { y: 80, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" }
          )
          .fromTo(
            tag,
            {
              clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)",
            },
            {
              clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
              duration: 0.5,
              ease: "power2.inOut",
            },
            "-=0.3"
          );
      });

      return () => {
        tl.scrollTrigger?.kill();
        splitTitle.revert();
        ScrollTrigger.getAll().forEach((st) => st.kill());
      };
    };

    if (document.fonts) document.fonts.ready.then(initAnimations);
    else initAnimations();
  }, []);

  return (
    <div id="why_section" ref={sectionRef}>
      {/* ===== TITLE SECTION ===== */}
      <div id="why_title" ref={titleRef}>
        <h2>Why play </h2>
        <span id="why_hyst">
          <span id="why_hyst_bg" ref={hystBgRef}></span>
          <span ref={hystRef}> Hyst</span>
        </span>
        <Image
          id="why_astro"
          ref={astroRef}
          width={1000}
          height={1000}
          src="/images/why-astro.png"
          alt="astronaut"
        />
      </div>

      {/* ===== CARDS SECTION ===== */}
      <div id="why_cards" ref={cardsContainerRef}>
        {cardsData.map((card) => (
          <div className="card_wrapper" key={card.id}>
            <div className="why_card">
              <p>{card.text}</p>

              <span id="card_tag">
                <span id="card_tag_bg"></span>
                {card.tag}
              </span>

              {card.images.map((img, index) => {
                if (img.wrapperId) {
                  return (
                    <div id={img.wrapperId} key={index}>
                      <Image
                        id={img.id}
                        width={1000}
                        height={1000}
                        src={img.src}
                        alt={img.alt}
                      />
                    </div>
                  );
                }
                return (
                  <Image
                    key={index}
                    id={img.id}
                    width={1000}
                    height={1000}
                    src={img.src}
                    alt={img.alt}
                  />
                );
              })}
            </div>
          </div>
        ))}

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
