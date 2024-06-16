"use client";
import Spline from "@splinetool/react-spline";

const Skills = () => {

  return (
    <div className="skills relative mx-auto flex max-w-[1240px] flex-col justify-center md:h-screen">
      <h2 className="my-4 text-center text-4xl font-bold md:text-left">
        What Are My Skills?
      </h2>

      <div className={"mb-20"}>
        <Spline scene="https://prod.spline.design/bTFfworxz9T8qOhx/scene.splinecode" />
      </div>
    </div>
  );
};

export default Skills;
