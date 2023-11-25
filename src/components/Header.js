"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import ModeToggle from "./ModeToggle";
import MenuToggle from "./MenuToggle";

const Header = () => {
  return (
    <div className="header">
      <Link href="/">
        <div className="logo">
          <Image src="/avocado.png" alt="logo" width={40} height={40}></Image>
          <h1>AvoCode</h1>
        </div>
      </Link>
      <nav className="navbar">
        <ul>
          <li>
            <Link href="/about">About Me</Link>
          </li>
          <li>
            <Link href="/contact">Contact Me</Link>
          </li>
        </ul>
        <ModeToggle/>
        <MenuToggle/>
      </nav>
    </div>
  );
};

export default Header;
