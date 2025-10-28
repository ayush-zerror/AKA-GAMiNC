import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer>
      <Image
        id="footer-moon"
        width={1000}
        height={1000}
        src="/images/footermoon.webp"
        alt="moon"
      />
      <div id="footer_overlay">
        <h2>Get in touch</h2>
        <div id="store_btn_container">
          <a target="_black" href="https://play.google.com/store/games">
            <Image
              width={150}
              height={50}
              src="/images/play-btn.svg"
              alt="googleplay"
            />
          </a>
          <a
            target="_black"
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
