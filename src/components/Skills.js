"use client";

import { ThemeContext } from "@/context/ThemeContext";
import Image from "next/image";
import { useContext } from "react";

const Skills = () => {
  const { mode } = useContext(ThemeContext);

  const skillsLogos = [
    {
      logo: "/skills/html.png",
      label: "HTML",
    },
    {
      logo: "/skills/css.png",
      label: "CSS",
    },
    {
      logo: "/skills/javascript.png",
      label: "Javascript",
    },
    {
      logo: "/skills/react.png",
      label: "React",
    },
    {
      logo: "/skills/nextjs.png",
      label: "Next",
    },
    {
      logo: "/skills/tailwind.png",
      label: "Tailwind",
    },
    {
      logo: "/skills/bootstrap.png",
      label: "Bootstrap",
    },
    {
      logo: "/skills/material-ui.png",
      label: "Material UI",
    },
  ];

  return (
    <div
      className={`${
        mode == "light" ? "text-black" : "text-white"
      } w-full lg:h-screen p-2`}
      id="skills"
    >
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <h2 className="text-4xl font-bold text-center md:text-left">
          What Are My Skills?
        </h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 mb-10">
          {skillsLogos.map((skill) => {
            return (
              <div
                key={skill.label}
                className="p-6 my-4 mx-2 bg-white/20 rounded-md hover:scale-105 ease-in duration-300"
              >
                <div className="flex flex-col gap-4 justify-center items-center">
                  <div className="m-auto">
                    <Image src={skill.logo} width={64} height={64} alt="/" />
                  </div>
                  <div className="m-auto">
                    <h3>{skill.label}</h3>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Skills;
