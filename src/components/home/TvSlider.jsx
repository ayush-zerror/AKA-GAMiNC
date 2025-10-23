import Image from "next/image";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const slidesData = [
  { bgColor: "#FF8112", borderColor: "#FFBA7C", character: "/images/characters/character1.svg" },
  { bgColor: "#9BCB62", borderColor: "#CBF49B", character: "/images/characters/character2.svg" },
  { bgColor: "#1EAFD6", borderColor: "#76E2FF", character: "/images/characters/character3.svg" },
  { bgColor: "#9BCB62", borderColor: "#CBF49B", character: "/images/characters/character4.svg" },
  { bgColor: "#FF8112", borderColor: "#FFBA7C", character: "/images/characters/character5.svg" },
  { bgColor: "#9BCB62", borderColor: "#CBF49B", character: "/images/characters/character2.svg" },
  { bgColor: "#FF8112", borderColor: "#FFBA7C", character: "/images/characters/character1.svg" },
  { bgColor: "#1EAFD6", borderColor: "#76E2FF", character: "/images/characters/character3.svg" },
  { bgColor: "#FF8112", borderColor: "#FFBA7C", character: "/images/characters/character5.svg" },
  { bgColor: "#9BCB62", borderColor: "#CBF49B", character: "/images/characters/character4.svg" },
];

const TvSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const getScale = (index) => {
    if (index === activeIndex) return 0.85; // active slide smaller
    if (index === (activeIndex - 1 + slidesData.length) % slidesData.length) return 0.92; // previous slide
    if (index === (activeIndex + 1) % slidesData.length) return 0.92; // next slide
    return 1; // other slides
  };

  return (
    <div id="tv_slider" style={{ display: "flex", justifyContent: "center" }}>
      <Swiper
        slidesPerView={4}
        spaceBetween={20}
        centeredSlides={true}
        loop={true}
        speed={600} // smoother transition
        grabCursor={true} // draggable cursor
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
      >
        {slidesData.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className="tv_card"
              style={{
                backgroundColor: slide.bgColor,
                border: `7px solid ${slide.borderColor}`,
                transform: `scale(${getScale(index)})`,
                transition: "transform 0.5s ease, padding 0.5s ease",
                padding: index === activeIndex ? "2rem 4rem" : "5rem 9rem",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Image
                className="shadow"
                width={1000}
                height={1000}
                src="/images/shadow-story.svg"
                alt="shadow"
              />
              <Image
                className="character"
                width={1000}
                height={1000}
                src={slide.character}
                alt={`character ${index + 1}`}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default TvSlider;
