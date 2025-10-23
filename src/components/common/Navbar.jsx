import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = ({ sections }) => {
  const handleScroll = (ref) => {
    if (ref?.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

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
      <div id="menu_btn">
        <div onClick={() => handleScroll(sections.home)}>
          <span>
            Menu <span id="home">Home</span>
          </span>
        </div>
        <div onClick={() => handleScroll(sections.about)}>
          <span>About</span>
        </div>
        <div onClick={() => handleScroll(sections.games)}>
          <span>Games</span>
        </div>
        <div onClick={() => handleScroll(sections.skin)}>
          <span>Skin</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
