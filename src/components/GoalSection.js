"use client";

import { ThemeContext } from "@/context/ThemeContext";
import Image from "next/image";
import React, { useContext } from "react";
// import { Player } from "@lottiefiles/react-lottie-player";

const GoalSection = () => {
  const { mode } = useContext(ThemeContext);

  return (
    <div className="goalSection h-screen relative">
      <div className="flex justify-center items-center h-full z-10">
        <div className="goalPart m-auto w-fit px-4">
          <div className={`${mode == "light" ? "text-black" : "text-white"}`}>
            <div className="flex justify-between items-center">
              <h1 className="text-2xl md:text-4xl font-bold">What Is My Goal?</h1>
              <Image
                src="/target.png"
                alt=""
                width={50}
                height={20}
                layout="resposnive"
              />
            </div>
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
    </div>
  );
};

export default GoalSection;
