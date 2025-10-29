import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const Footer = () => {
  const footerRef = useRef(null);
  const footerMoonRef = useRef(null);

  useEffect(() => {
    const footer = footerRef.current;
    const moon = footerMoonRef.current;
    if (!footer || !moon) return;

    const handleMove = (e) => {
      const rect = footer.getBoundingClientRect();

      // only animate if mouse is vertically within footer area
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

    return () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("mouseleave", handleLeave);
    };
  }, []);

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
        <h2>download now</h2>
        <div id="store_btn_container">
          <a target="_blank" href="https://play.google.com/store/games">
            <Image
              width={150}
              height={50}
              src="/images/play-btn.svg"
              alt="googleplay"
            />
          </a>
          <a
            target="_blank"
            href="https://apps.apple.com/in/app/apple-store/id375380948"
          >
            <Image
              width={150}
              height={50}
              src="/images/app-btn.svg"
              alt="appstore"
            />
          </a>
        </div>
        <div id="footer_bottom">
          <h4>Designed with love for players</h4>
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
