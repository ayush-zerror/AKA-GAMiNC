import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <footer>
      <Image
      id="footer-moon"
        width={1000}
        height={1000}
        src="/images/footermoon.svg"
        alt="moon"
      />
    </footer>
  );
};

export default Footer;
