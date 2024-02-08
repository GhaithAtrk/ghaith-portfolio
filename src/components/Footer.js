'use client'

import { ThemeContext } from "@/context/ThemeContext";
import React, { useContext } from "react";

const Footer = () => {
  const { mode } = useContext(ThemeContext);

  return (
    <div
      className={`${
        mode == "light" ? "bg-[#1f3b18]" : "bg-black"
      }  py-4 text-white text-center`}
    >
      &copy; 2023 - 2024 Avocode, All Rights Reserved{" "}
    </div>
  );
};

export default Footer;
