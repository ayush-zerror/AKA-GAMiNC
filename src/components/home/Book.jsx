"use client";

import Image from "next/image";
import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Book = () => {
  const bookRef = useRef(null);

  useGSAP(() => {
    const initAnimations = () => {
      if (!bookRef.current) return;

      const pages = bookRef.current.querySelectorAll(".book_page");
      const page1 = pages[0];
      const page2 = pages[1];

      // --- Page 1 elements ---
      const linesPage1 = page1.querySelectorAll(".lines_book");
      const bookmoon = page1.querySelector("#bookmoon");

      // --- Page 2 elements ---
      const linesPage2 = page2.querySelectorAll(".lines_book");
      const earth = page2.querySelector("#earth");
      const bookCard = page2.querySelector("#book_card");

      // Helper: Typing function
      const typeLine = (line, tl, delay = "+=0.05") => {
        const text = line.textContent.trim();
        line.textContent = "";
        tl.to(
          {},
          {
            duration: 0.3,
            onStart: () => {
              let i = 0;
              const interval = setInterval(() => {
                line.textContent = text.slice(0, i);
                i++;
                if (i > text.length) clearInterval(interval);
              }, 15);
            },
          },
          delay
        );
      };

      // === MASTER TIMELINE ===
      const master = gsap.timeline({
        scrollTrigger: {
          trigger: bookRef.current,
          start: "top 70%",
          toggleActions: "play none none reverse",
        },
      });

      // === PAGE 1 ===
      typeLine(linesPage1[1], master); // “Three friends...”
      typeLine(linesPage1[2], master); // “innovation.”

      master.fromTo(
        bookmoon,
        { opacity: 0, y: 80, scale: 0.9 },
        { opacity: 1, y: 0, scale: 1, duration: 0.8, ease: "power3.out" },
        "+=0.2"
      );

      typeLine(linesPage1[9], master, "+=0.3");
      typeLine(linesPage1[10], master);
      typeLine(linesPage1[11], master);

      // === PAGE 2 ===
      typeLine(linesPage2[0], master, "+=0.5");
      typeLine(linesPage2[1], master);
      typeLine(linesPage2[2], master);

      master.fromTo(
        earth,
        { opacity: 0, y: 80, scale: 0.9 },
        { opacity: 1, y: 0, scale: 1, duration: 0.8, ease: "power3.out" },
        "+=0.2"
      );

      typeLine(linesPage2[6], master, "+=0.3");
      typeLine(linesPage2[7], master);

      master.fromTo(
        bookCard,
        { opacity: 0, y: 80, scale: 0.9 },
        { opacity: 1, y: 0, scale: 1, duration: 0.8, ease: "power3.out" },
        "+=0.3"
      );

      // Optional: Astronaut floating motion
      gsap.to(["#astro1", "#astro2", "#astro3"], {
        y: "+=10",
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        duration: 2 + Math.random(),
        stagger: 0.2,
      });
    };

    // Wait for fonts before running animations
    if (document.fonts) document.fonts.ready.then(initAnimations);
    else initAnimations();
  }, []);

  return (
    <div id="book-wrapper" ref={bookRef}>
      {/* === PAGE 1 === */}
      <div className="book_page">
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

      {/* === PAGE 2 === */}
      <div className="book_page">
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
          src="/images/earth.webp"
          alt="earth"
        />
        <Image
          id="book_card"
          width={1000}
          height={1000}
          src="/images/book-card.webp"
          alt="cards"
        />
      </div>

      {/* === STATIC ELEMENTS === */}
      <Image
        id="book"
        width={1000}
        height={1000}
        src="/images/book.webp"
        alt="book"
      />
      <Image
        id="astro1"
        width={1000}
        height={1000}
        src="/images/astro1.webp"
        alt="astro"
      />
      <Image
        id="astro2"
        width={1000}
        height={1000}
        src="/images/astro2.webp"
        alt="astro"
      />
      <Image
        id="astro3"
        width={1000}
        height={1000}
        src="/images/astro3.webp"
        alt="astro"
      />
    </div>
  );
};

export default Book;
