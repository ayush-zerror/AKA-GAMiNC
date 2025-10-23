import Image from "next/image";
import React from "react";

const StorySection = () => {
  return (
    <div id="story_section">
      <Image
        id="shadow-story"
        width={1000}
        height={1000}
        src="/images/shadow-story.webp"
        alt="shadow"
      />
      <Image
        id="story-star-lg"
        width={1000}
        height={1000}
        src="/images/stars-lg.webp"
        alt="star-lg"
      />
      <div id="story_overlay">
        <h2>The Story</h2>
        <h3>Behind</h3>
        <span id="hyst">
          <span id="hyst-bg"></span> Hyst
        </span>
        <div id="book_container">
          <Image
            id="book"
            width={1000}
            height={1000}
            src="/images/book.webp"
            alt="book"
          />
          <div id="book-page1">
            <div className="page_book">
              <span className="lines_book"></span>
              <span className="lines_book">
                Three friends united by their love for gaming and
              </span>
              <span className="lines_book">innovation.</span>
              <span className="lines_book"></span>
              <span className="lines_book"></span>
              <span className="lines_book"></span>
              <span className="lines_book"></span>
              <span className="lines_book"></span>
              <span className="lines_book"></span>
              <span className="lines_book">
                What began as late-night ideas and endless
              </span>
              <span className="lines_book">
                that went beyond fun and competition.{" "}
              </span>
              <span className="lines_book">
                {" "}
                play sessions soon evolved into a vision{" "}
              </span>
              <Image
                id="bookmoon"
                width={1000}
                height={1000}
                src="/images/showcase-moon.webp"
                alt="moon"
              />
            </div>
            <div className="page_book">
              <span className="lines_book">
                They asked, “What if gaming could do more than{" "}
              </span>
              <span className="lines_book">
                entertain?” That question sparked HYST — a platform
              </span>
              <span className="lines_book">
                where every tap, jump, and challenge helps players{" "}
              </span>
              <span className="lines_book"></span>
              <span className="lines_book"></span>
              <span className="lines_book"></span>
              <span className="lines_book">
                sharpen skills, build focus, and feel rewarded as they
              </span>
              <span className="lines_book">grow.</span>
              <span className="lines_book"></span>
              <span className="lines_book"></span>
              <span className="lines_book"></span>
              <span className="lines_book"></span>
              <Image
                id="earth"
                width={1000}
                height={1000}
                src="/images/earth.png"
                alt="earth"
              />
               <Image
                id="book_card"
                width={1000}
                height={1000}
                src="/images/book-card.svg"
                alt="cards"
              />
            </div>

            <Image
              id="astro1"
              width={1000}
              height={1000}
              src="/images/astro1.png"
              alt="astro"
            />
            <Image
              id="astro2"
              width={1000}
              height={1000}
              src="/images/astro2.png"
              alt="astro"
            />
            <Image
              id="astro3"
              width={1000}
              height={1000}
              src="/images/astro3.png"
              alt="astro"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StorySection;
