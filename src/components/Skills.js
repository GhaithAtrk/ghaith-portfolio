"use client";

import { ThemeContext } from "@/context/ThemeContext";
import { useContext } from "react";

import Spline from "@splinetool/react-spline";

const Skills = () => {
  const { mode } = useContext(ThemeContext);

  return (
    <div className="max-w-[1240px] relative mx-auto flex flex-col justify-center h-full">
      <h2 className="text-4xl my-4 font-bold text-center md:text-left">
        What Are My Skills?
      </h2>

      <div
        className={"skills relative mt-10 mb-20 hidden md:block"}
        id="skills"
      >
        <Spline scene="https://prod.spline.design/U0hom80M4h4dXQhs/scene.splinecode" />
      </div>
      <div
        className={"skills relative mt-10 mx-auto mb-20 block md:hidden"}
        id="skills"
      >
        <Spline scene="https://prod.spline.design/jcienDiTiT59Uydg/scene.splinecode" />
      </div>
    </div>
  );
};

export default Skills;
