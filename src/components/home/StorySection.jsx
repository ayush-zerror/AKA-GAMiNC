import Image from "next/image";
import React from "react";

const StorySection = () => {
  return (
    <div id="story_section">
      <Image
        id="shadow-story"
        width={1000}
        height={1000}
        src="/images/shadow-story.svg"
        alt="shadow"
      />
      <Image
        id="story-star-lg"
        width={1000}
        height={1000}
        src="/images/stars-lg.svg"
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
            src="/images/book.svg"
            alt="book"
          />
        </div>
      </div>
    </div>
  );
};

export default StorySection;
