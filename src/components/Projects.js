"use client";

import { ThemeContext } from "@/context/ThemeContext";
import Image from "next/image";
import Link from "next/link";
import React, { useContext, useState } from "react";

const Projects = () => {
  const { mode } = useContext(ThemeContext);

  const ProjectsInfo = [
    {
      siteName: "Bread Bakery",
      siteImage: "/projects/bread-bakery.png",
      siteLink: "#",
      statement: "Coming Soon",
    },
    {
      siteName: "Almashoorah",
      siteImage: "/projects/almashoorah.png",
      siteLink: "https://almashoorah.com",
      statement: "Visit Site",
    },
    {
      siteName: "Deeplogi",
      siteImage: "/projects/deeplogi.png",
      siteLink: "https://deeplogi.com",
      statement: "Visit Site",
    },
  ];

  return (
    <div
      id="projects"
      className={`${
        mode == "light" ? "text-black" : "text-white"
      }  max-w-[1240px] mx-auto scroll-smooth`}
    >
      <h1 className="text-4xl font-bold text-center md:text-left">
        What Did I Work On?
      </h1>
      <div className="flex flex-col items-center md:flex-row justify-around mt-4 mb-20">
        {ProjectsInfo.map((project, index) => {
          return (
            <div key={`project-${index}`} className="relative m-4">
              <Image
                className="project"
                src={project.siteImage}
                alt={project.siteName}
                width={350}
                height={190}
              />
              <Link
                target={project.siteName == "Bread Bakery" ? "" : "_blank"}
                href={project.siteLink}
              >
                <div className="flex flex-col justify-center items-center absolute top-0 bottom-0 right-0 left-0 hover:bg-black/50 group">
                  <p className="text-white text-xl font-bold hidden group-hover:block z-10">
                    {project.siteName}
                  </p>
                  <p className="text-white  font-bold hidden group-hover:block z-10">
                    {project.statement}
                  </p>
                </div>
              </Link>
            </div>
          );
        })}
      </div>

      <div
        className={`${
          mode == "light" ? "text-black" : "text-white"
        } text-center `}
      >
        <h2 className="text-2xl md:text-4xl py-4">So you like what you see?</h2>
        <h3 className="text-xl md:text-2xl py-4  ">
          Feel free to contact me for any inquiries
        </h3>

        <Link href={"/contact"}>
          <button className="bg-[#C4873C] p-2 rounded my-4 border-black border-2 text-white">
            Contact page
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Projects;
