"use client";

import { ThemeContext } from "@/context/ThemeContext";
import Image from "next/image";
import Link from "next/link";
import React, { useContext } from "react";

const Projects = () => {
  const { mode } = useContext(ThemeContext);

  const participated = [
    {
      siteName: "Deeplogi",
      siteImage: "/projects/deeplogi.png",
      siteLink: "https://deeplogi.com",
      statement: "Visit Site",
    },
    {
      siteName: "Almashoorah",
      siteImage: "/projects/almashoorah.png",
      siteLink: "https://almashoorah.com",
      statement: "Visit Site",
    },
  ];

  const practiced = [
    {
      siteName: "Popsicle",
      siteImage: "/projects/popsicle.png",
      siteLink: "#",
      statement: "Coming Soon",
    },
    {
      siteName: "Gravity",
      siteImage: "/projects/gravity.png",
      siteLink: "https://gravity-space.vercel.app",
      statement: "Visit Site",
    },
    {
      siteName: "Bread Bakery",
      siteImage: "/projects/bread-bakery.png",
      siteLink: "https://bread-bakery.vercel.app",
      statement: "Visit Site",
    },
  ];

  return (
    <div
      id="projects"
      className={`${
        mode == "light" ? "text-black" : "text-white"
      } relative max-w-[1240px] mx-auto scroll-smooth`}
    >
      <h1 className="text-4xl font-bold text-center md:text-left">
        What Did I Work On?
      </h1>
      <h2 className="text-lg mx-4 md:text-2xl my-4">
        Projects i have participated in..
      </h2>
      <div className="flex flex-col md:flex-row flex-wrap justify-around mt-4 mb-10">
        {participated.map((project, index) => {
          return (
            <div key={`project-${index}`} className="relative m-4">
              <Image
                className="project"
                src={project.siteImage}
                alt={project.siteName}
                width={370}
                height={290}
              />
              <Link
                target={project.siteName == "Popsicle" ? "" : "_blank"}
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
      <h2 className="text-lg mx-4 md:text-2xl my-4">
        Projects i did for practice..
      </h2>
      <div className="flex flex-col md:flex-row flex-wrap justify-around mt-4 mb-20">
        {practiced.map((project, index) => {
          return (
            <div key={`project-${index}`} className="relative m-4">
              <Image
                className="project"
                src={project.siteImage}
                alt={project.siteName}
                width={370}
                height={290}
              />
              <Link
                target={project.siteName == "Popsicle" ? "" : "_blank"}
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
          <button
            className={`${
              mode == "light" ? "bg-[#C4873C]" : "bg-gray-600"
            } p-2 rounded my-4 border-black border-2 text-white`}
          >
            Contact page
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Projects;
