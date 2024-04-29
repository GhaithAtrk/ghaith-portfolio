"use client";

import { ThemeContext } from "@/context/ThemeContext";
import Image from "next/image";
import React, { useContext } from "react";
// import { Player } from "@lottiefiles/react-lottie-player";

const RoleSection = () => {
  const { mode } = useContext(ThemeContext);

  return (
    <div>
      <div className="flex justify-around items-center h-screen mx-4">
        <div className={`${mode == "light" ? "text-black" : "text-white"} `}>
          <h1 className="text-4xl my-4 font-bold">What Is My Role?</h1>
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
        <div className="hidden md:block">
          <Image
            src="/mobile.png"
            alt=""
            width={300}
            height={600}
            layout="resposnive"
          />
        </div>
      </div>
      <div className="flex justify-around items-center h-screen mx-4">
        <div className="hidden md:block">
          <Image
            src="/target.png"
            alt=""
            width={300}
            height={600}
            layout="resposnive"
          />
        </div>
        <div className={`${mode == "light" ? "text-black" : "text-white"}`}>
          <h1 className="text-4xl my-4 font-bold">What Is My Goal?</h1>
          <div
            className={` ${
              mode == "light" ? "bg-white/75" : "bg-black"
            } md:w-[650px]  my-4 p-6 rounded-md border-black border-2 leading-loose`}
          >
            <div className="text-[18px]">
              <p>
                To get you as a client satisfied with the end result by:
                <br />
                - Making sure the website represents the idea you want to
                deliver.
                <br />
                - Writing clean code for easier futuar maintenance and update.
                <br />
                - Having your project delivered on time.
                <br />- providing support for short period after project being
                fully delivered.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoleSection;
