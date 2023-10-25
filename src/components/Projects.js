"use client";

import { faMagnifyingGlassArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Thumbs } from "swiper/modules";
import "swiper/scss";
import "swiper/css/thumbs";

const Projects = () => {
  const [closeSwiperPopup, setCloseSwiperPopup] = useState(true);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <div id="projects">
      <h1>My Projects...</h1>
      <div className="project-container">
        <Image
          className="project"
          src="/projects/wedding1.png"
          alt="wedding"
          width={300}
          height={150}
          onClick={() => setCloseSwiperPopup(false)}
        />
        <Image
          className="project"
          src="/projects/resin1.png"
          alt="resin"
          width={300}
          height={150}
        />
        <Image
          className="project"
          src="/projects/wedding1.png"
          alt="wedding"
          width={300}
          height={150}
        />
      </div>

      <div className="popup" hidden={closeSwiperPopup}>
        <Swiper
          className="main-swipper"
          spaceBetween={50}
          slidesPerView={1}
          modules={[Thumbs]}
          thumbs={{ swiper: thumbsSwiper }}
        >
          <button
            className="closeBtn"
            onClick={() => setCloseSwiperPopup(true)}
          >
            X
          </button>
          <SwiperSlide>
            <Image
              className="project"
              src="/projects/wedding1.png"
              alt="wedding"
              fill
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              className="project"
              src="/projects/resin1.png"
              alt="resin"
              fill
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              className="project"
              src="/projects/wedding1.png"
              alt="wedding"
              fill
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              className="project"
              src="/projects/resin1.png"
              alt="resin"
              fill
            />
          </SwiperSlide>
          <SwiperSlide>Slide 4</SwiperSlide>
          <Link href="/">
            Check this website
            <FontAwesomeIcon icon={faMagnifyingGlassArrowRight} />
          </Link>
        </Swiper>
        <Swiper
          modules={[Thumbs]}
          watchSlidesProgress
          onSwiper={setThumbsSwiper}
        >
          <SwiperSlide>
            <Image
              className="project"
              src="/projects/wedding1.png"
              alt="wedding"
              fill
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              className="project"
              src="/projects/resin1.png"
              alt="resin"
              fill
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              className="project"
              src="/projects/wedding1.png"
              alt="wedding"
              fill
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              className="project"
              src="/projects/resin1.png"
              alt="resin"
              fill
            />
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="text">
        <h2>Feel free to contact me at anytime if you like what you see.. </h2>
        <Link href={"/contact"}>
          <button>Contact page</button>
        </Link>
      </div>
    </div>
  );
};

export default Projects;
