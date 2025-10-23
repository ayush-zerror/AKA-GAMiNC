import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const Navbar = ({ sections }) => {
  const [isActive, setIsActive] = useState(true);

  const handleScroll = (ref) => {
    if (ref?.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const handleScrollPosition = () => {
      if (window.scrollY > window.innerHeight) {
        setIsActive(false);
      } else {
        setIsActive(true);
      }
    };

    window.addEventListener("scroll", handleScrollPosition);
    return () => window.removeEventListener("scroll", handleScrollPosition);
  }, []);

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

      <div id="menu_btn" className={isActive ? "active" : ""}>
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
