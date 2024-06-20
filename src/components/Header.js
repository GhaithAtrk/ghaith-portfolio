"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import ModeToggle from "./ModeToggle";
import MenuToggle from "./MenuToggle";

const Header = () => {
  const navItem = "nav-item";

  return (
    <div className="fixed left-0 right-0 z-20 mx-auto mt-4 flex w-[93%] items-center justify-between rounded border-2 border-solid border-black bg-white/95 p-2 md:w-[75%]">
      <Link href="/">
        <div className="logo flex items-center justify-between gap-4 px-4">
          <Image
            src="/green-pulsar.png"
            alt="logo"
            width={100}
            height={60}
            priority
            className="w-auto"
          />
        </div>
      </Link>
      <nav className="flex items-center justify-center gap-2">
        <ul className="hidden items-center justify-between gap-4 border-r-2 border-black p-2 text-lg md:flex">
          <li>
            <Link href="/" className={navItem}>
              Home
            </Link>
          </li>
          <li>
            <Link href="/projects" className={navItem}>
              Projects
            </Link>
          </li>
          <li>
            <Link href="/about" className={navItem}>
              About Me
            </Link>
          </li>
          <li>
            <Link href="/contact" className={navItem}>
              Contact Me
            </Link>
          </li>
        </ul>
        <ModeToggle />
        <MenuToggle />
      </nav>
    </div>
  );
};

export default Header;
