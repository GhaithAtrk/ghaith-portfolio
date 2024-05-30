"use client";

import { ThemeContext } from "@/context/ThemeContext";
import React, { useContext } from "react";

const RoleSection = () => {
  const { mode } = useContext(ThemeContext);

  return (
    <div className="roleSection h-screen relativ">
      <div className="flex justify-center items-center h-full z-10">
        <div className="container w-[340px] md:w-[650px] rolePart">
          <div className="front min-h-[520px] md:min-h-[320px]">
            <div className="inner">
              <h1 className="text-2xl md:text-4xl font-bold">
                What Is My Role?
              </h1>
            </div>
          </div>
          <div className="back min-h-[520px] md:min-h-[320px]">
            <div className="inner">
              <div className="text-[18px] leading-[35px] md:leading-[45px]">
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
