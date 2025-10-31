import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Footer = ({ btnRef }) => {
  const footerRef = useRef(null);
  const footerMoonRef = useRef(null);

  useEffect(() => {
    const footer = footerRef.current;
    const moon = footerMoonRef.current;
    const btn = btnRef?.current;

    if (!footer || !moon || !btn) return;

    const initAnimations = () => {
      // 🌕 mouse move
      const handleMove = (e) => {
        const rect = footer.getBoundingClientRect();

        if (e.clientY >= rect.top && e.clientY <= rect.bottom) {
          const x = (e.clientX - (rect.left + rect.width / 2)) * 0.015;
          const y = (e.clientY - (rect.top + rect.height / 2)) * 0.015;

          gsap.to(moon, {
            x,
            y,
            duration: 1.2,
            ease: "power3.out",
          });
        }
      };

      const handleLeave = () => {
        gsap.to(moon, {
          x: 0,
          y: 0,
          duration: 1.5,
          ease: "power2.out",
        });
      };

      window.addEventListener("mousemove", handleMove);
      window.addEventListener("mouseleave", handleLeave);

      // 🚀 Move button when footer visible
      gsap.to(btn, {
        scrollTrigger: {
          trigger: footer,
          start: "top bottom",
          end: "top center",
          scrub: 1,
          // markers: true,
        },
        left: "50%",
        bottom: "10.5rem",
        xPercent: -50,
        scale: 1.5,
        duration: 1,
        ease: "linear",
      });
    };

    // 🕓 Wait for fonts & images
    Promise.all([
      document.fonts.ready,
      new Promise((resolve) => {
        if (document.readyState === "complete") resolve();
        else window.addEventListener("load", resolve, { once: true });
      }),
    ]).then(() => {
      // run gsap only after everything is loaded
      initAnimations();
    });

    return () => {
      window.removeEventListener("mousemove", initAnimations);
      window.removeEventListener("mouseleave", initAnimations);
      ScrollTrigger.killAll();
    };
  }, [btnRef]);

  return (
    <footer ref={footerRef}>
      <Image
        id="footer-moon"
        ref={footerMoonRef}
        width={1000}
        height={1000}
        src="/images/footermoon.webp"
        alt="moon"
      />
      <div id="footer_overlay">
        <h2>Download Now!!</h2>
        <div id="footer_bottom">
          <div id="footer_social">
            Follow us on
            <Link href="/">
              <Image
                width={1000}
                height={1000}
                src="/images/insta.webp"
                alt="instagram"
              />
            </Link>
            <Link href="/">
              <Image
                width={1000}
                height={1000}
                src="/images/linkedin.webp"
                alt="linkedin"
              />
            </Link>
          </div>
          <div id="footer_contact">
            <Link href="tel:+91 987554342">Call +91 987554342</Link>
            <Link href="mailto:helloaka@gmail.com">helloaka@gmail.com</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
