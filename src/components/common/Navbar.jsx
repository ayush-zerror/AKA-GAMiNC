import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav>
      <Link href="/">
        <Image
          width={1000}
          height={1000}
          src="/images/aka-logo.png"
          alt="aka-logo"
        />
      </Link>
      <div id="menu_btn">
        <span>Menu</span>
      </div>
    </nav>
  );
};

export default Navbar;
