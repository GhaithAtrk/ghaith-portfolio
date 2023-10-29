"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import "swiper/scss";
import "swiper/css/thumbs";
import Popup from "./Popup";

const Projects = () => {
  const ProjectsInfo = [
    {
      siteName: "Tgarib",
      siteImage: "/projects/tgarib.png",
      siteLink: "https://tgarib.com",
    },
    {
      siteName: "Almashoorah",
      siteImage: "/projects/almashoorah.png",
      siteLink: "https://almashoorah.com",
    },
    {
      siteName: "Deeplogi",
      siteImage: "/projects/deeplogi.png",
      siteLink: "https://deeplogi.com",
    },
  ];

  const [closeSwiperPopup, setCloseSwiperPopup] = useState(true);

  const [toggleButtons, setToggleButtons] = useState({});

  return (
    <div id="projects">
      <h1>Main Projects...</h1>
      <div className="project-container">
        {ProjectsInfo.map((project, index) => {
          return (
            <div key={`project-${index}`}>
              <Image
                className="project"
                src={project.siteImage}
                alt={project.siteName}
                width={350}
                height={190}
                onClick={() =>
                  setToggleButtons({
                    [index]: !toggleButtons[index],
                  })
                }
              />
              {toggleButtons[index] && (
                <div className="project-buttons">
                  <button
                    onClick={() => {
                      setCloseSwiperPopup(false);
                    }}
                  >
                    Show images
                  </button>
                  <a target="_blank" href={project.siteLink}>
                    <button>Visit Site</button>
                  </a>
                </div>
              )}
            </div>
          );
        })}
      </div>

      <Popup
        closeSwiperPopup={closeSwiperPopup}
        setCloseSwiperPopup={setCloseSwiperPopup}
      />

      <div className="text">
        <h2>So you like what you see?</h2>
        <h3>Feel free to contact me for any inquiries</h3>

        <Link href={"/contact"}>
          <button className="contact-btn">Contact page</button>
        </Link>
      </div>
    </div>
  );
};

export default Projects;
