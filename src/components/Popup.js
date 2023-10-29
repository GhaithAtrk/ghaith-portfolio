import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import style from "swiper/scss/pagination";

const Popup = ({ closeSwiperPopup, setCloseSwiperPopup }) => {

  return (
    <div className="popup" hidden={closeSwiperPopup}>
      <Swiper
        style={{ style }}
        className="main-swipper swiper-pagination"
        spaceBetween={50}
        pagination={{ clickable: true }}
      >
        <button className="closeBtn" onClick={() => setCloseSwiperPopup(true)}>
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
      </Swiper>
    </div>
  );
};

export default Popup;
