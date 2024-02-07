import { ThemeContext } from "@/context/ThemeContext";
import React, { useContext, useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";

const MenuToggle = () => {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <div
      className="relative block md:hidden border-[1px] border-black p-2 mx-1 rounded-full cursor-pointer"
      onClick={() => setOpenMenu(!openMenu)}
    >
      <IoMdArrowDropdown />
      <div
        className="absolute top-[48px] right-0 bg-white border-2 border-black p-2 w-[140px]"
        style={{ display: openMenu ? "block" : "none" }}
      >
        <div className="flex flex-col items-center text-[20px]">
          <a href="/" className="py-2">Home</a>
          <a href="/about" className="py-2">About Me</a>
          <a href="/contact" className="py-2">Contact Me</a>
          <a href="/#projects" className="py-2">Projects</a>
        </div>
      </div>
    </div>
  );
};

export default MenuToggle;
