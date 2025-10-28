import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav>
      <Link href="/" id="nav_logo">
        <Image
          width={1000}
          height={1000}
          src="/images/aka-logo.svg"
          alt="aka-logo"
        />
      </Link>

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
    </nav>
  );
};

export default Navbar;
