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
      <div id="menu_btn">
        <div>
          <span>
            Menu <span id="home">Home</span>
          </span>
        </div>
        <div>
          <span>About</span>
        </div>
        <div>
          <span>Games</span>
        </div>
        <div>
          <span>Skin</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
