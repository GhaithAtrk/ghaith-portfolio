"use client";

import { ThemeContext } from "@/context/ThemeContext";
import Image from "next/image";
import React, { useContext } from "react";

const RoleSection = () => {
  const { mode } = useContext(ThemeContext);

  return (
    <div className="roleSection h-screen relative">
      <div className="flex justify-center items-center h-full z-10">
        <div className="rolePart m-auto w-fit px-4">
          <div className={`${mode == "light" ? "text-black" : "text-white"}`}>
            <div className="flex justify-between items-center">
              <h1 className="text-2xl md:text-4xl font-bold">What Is My Role?</h1>
              <Image
                src="/mobile.png"
                alt=""
                width={50}
                height={20}
                layout="resposnive"
              />
            </div>
            <div
              className={` ${
                mode == "light" ? "bg-white/75" : "bg-black"
              } md:w-[650px] my-4 p-6 rounded-md border-black border-2 leading-loose `}
            >
              <div className="text-[18px]">
                <p>
                  In simple words.. to bring your website to live and advertise
                  your ideas/products/services the way you intended.
                </p>
                <p>
                  having it visually stunning, user friendly, responsive and
                  interactive if needed to get your visitors&apos; and potential
                  clients&apos; attention.
                </p>
                <p>
                  Taking care of the style, design, colors, and even content if
                  you were missing on any of them.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoleSection;
